/**
 * Vercel Serverless Function - Booking Confirmation
 * 1. Updates Airtable to "Booked" status
 * 2. Sends notification email to business
 * 3. Sends confirmation email to customer
 * 4. Triggers deposit invoice automation (via Airtable)
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { recordId } = req.query;
  const { action, customerName, customerEmail, pickupLocation, dropoffLocation, totalAmount } = req.body || {};

  // Environment variables (set in Vercel)
  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
  const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Leads';
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const BUSINESS_EMAIL = 'dispatch@flfreightco.com'; // Your business email

  console.log('📥 Request:', { method: req.method, recordId, action });
  console.log('🔧 Environment check:', {
    hasApiKey: !!AIRTABLE_API_KEY,
    hasBaseId: !!AIRTABLE_BASE_ID,
    tableName: AIRTABLE_TABLE_NAME,
    hasResendKey: !!RESEND_API_KEY
  });

  // CRITICAL: Check for required environment variables
  if (!AIRTABLE_API_KEY) {
    console.error('❌ MISSING: AIRTABLE_API_KEY environment variable');
    return res.status(500).json({
      error: 'Authentication required',
      details: 'AIRTABLE_API_KEY environment variable is not configured in Vercel. Please add it in Vercel Project Settings → Environment Variables.',
      envCheck: {
        AIRTABLE_API_KEY: '❌ Missing',
        AIRTABLE_BASE_ID: !!AIRTABLE_BASE_ID ? '✅ Present' : '❌ Missing',
        AIRTABLE_TABLE_NAME: AIRTABLE_TABLE_NAME
      }
    });
  }

  if (!AIRTABLE_BASE_ID) {
    console.error('❌ MISSING: AIRTABLE_BASE_ID environment variable');
    return res.status(500).json({
      error: 'Configuration error',
      details: 'AIRTABLE_BASE_ID environment variable is not configured in Vercel. Please add it in Vercel Project Settings → Environment Variables.',
      envCheck: {
        AIRTABLE_API_KEY: '✅ Present',
        AIRTABLE_BASE_ID: '❌ Missing',
        AIRTABLE_TABLE_NAME: AIRTABLE_TABLE_NAME
      }
    });
  }

  try {
    // GET: Fetch lead data
    if (req.method === 'GET' && recordId) {
      console.log('📖 Fetching lead data for:', recordId);

      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}/${recordId}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('❌ Airtable fetch error:', errorData);
        return res.status(response.status).json({
          error: errorData.error?.message || 'Failed to fetch lead data'
        });
      }

      const data = await response.json();
      console.log('✅ Lead data fetched successfully');
      console.log('📊 Current L_Status:', data.fields?.L_Status);
      console.log('🔍 DIAGNOSTIC - All Airtable fields:', JSON.stringify(data.fields, null, 2));
      console.log('🔍 DIAGNOSTIC - Field names:', Object.keys(data.fields || {}));

      return res.status(200).json({
        recordId: data.id,
        ...data.fields
      });
    }

    // POST: Confirm booking
    if (req.method === 'POST' && recordId && action === 'confirm') {
      console.log('📝 Confirming booking for:', recordId);
      console.log('📝 Will set L_Status to: \"Booked\"');

      // ========================================
      // STEP 1: Update Airtable to "Booked"
      // ========================================
      const airtableResponse = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}/${recordId}`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: {
              'L_Status': 'Booked',  // This triggers deposit invoice automation
              'Agreement Accepted': true  // Checkbox field must be true/false, not a date
            }
          })
        }
      );

      if (!airtableResponse.ok) {
        const errorData = await airtableResponse.json();
        console.error('❌ Airtable update error:', errorData);
        console.error('❌ Full error response:', JSON.stringify(errorData, null, 2));
        return res.status(airtableResponse.status).json({
          error: `Airtable update failed: ${errorData.error?.message || 'Unknown error'}`,
          details: errorData
        });
      }

      const updatedRecord = await airtableResponse.json();
      console.log('✅ Airtable updated successfully!');
      console.log('✅ New L_Status:', updatedRecord.fields?.L_Status);
      console.log('✅ Agreement Accepted:', updatedRecord.fields?.['Agreement Accepted']);

      // ========================================
      // STEP 2: Send notification to business
      // ========================================
      let businessEmailSent = false;
      if (RESEND_API_KEY) {
        try {
          const businessEmailResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${RESEND_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: 'Freedom Line Freight Express <noreply@flfreightco.com>',
              to: [BUSINESS_EMAIL],
              subject: `🎉 New Booking Confirmed - ${customerName}`,
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <h2 style="color: #1e40af;">New Booking Confirmed!</h2>
                  
                  <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0;">Customer Information</h3>
                    <p><strong>Name:</strong> ${customerName}</p>
                    <p><strong>Email:</strong> ${customerEmail}</p>
                    <p><strong>Record ID:</strong> ${recordId}</p>
                  </div>

                  <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0;">Shipment Details</h3>
                    <p><strong>Pickup:</strong> ${pickupLocation}</p>
                    <p><strong>Dropoff:</strong> ${dropoffLocation}</p>
                    <p><strong>Total Amount:</strong> $${totalAmount?.toFixed(2)}</p>
                  </div>

                  <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
                    <p style="margin: 0;"><strong>⚠️ Next Steps:</strong></p>
                    <ul style="margin: 10px 0;">
                      <li>Airtable automation has been triggered</li>
                      <li>Deposit invoice email will be sent to customer</li>
                      <li>Follow up with customer within 24 hours</li>
                    </ul>
                  </div>

                  <p style="color: #6b7280; font-size: 12px; margin-top: 30px;">
                    This is an automated notification from your booking confirmation system.
                  </p>
                </div>
              `
            })
          });

          if (businessEmailResponse.ok) {
            const businessEmailData = await businessEmailResponse.json();
            console.log('✅ Business notification email sent:', businessEmailData.id);
            businessEmailSent = true;
          } else {
            const error = await businessEmailResponse.json();
            console.error('❌ Failed to send business email:', error);
          }
        } catch (error) {
          console.error('❌ Error sending business email:', error);
        }
      } else {
        console.log('⚠️ RESEND_API_KEY not configured - business email skipped');
      }

      // ========================================
      // STEP 3: Send confirmation to customer
      // ========================================
      let customerEmailSent = false;
      if (RESEND_API_KEY && customerEmail) {
        try {
          const customerEmailResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${RESEND_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: 'Freedom Line Freight Express <noreply@flfreightco.com>',
              to: [customerEmail],
              subject: 'Booking Confirmation - Freedom Line Freight Express',
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <div style="background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                    <h1 style="color: white; margin: 0;">Booking Confirmed!</h1>
                    <p style="color: #FF6600; margin: 10px 0 0 0; font-weight: 600;">Freedom Line Freight Express</p>
                  </div>

                  <div style="background-color: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
                    <div style="background-color: #dcfce7; border-left: 4px solid #16a34a; padding: 15px; margin-bottom: 20px;">
                      <p style="margin: 0; color: #15803d;"><strong>✅ Your booking has been confirmed!</strong></p>
                    </div>

                    <h2 style="color: #1f2937;">Hello ${customerName},</h2>
                    <p style="color: #4b5563; line-height: 1.6;">
                      Thank you for choosing Freedom Line Freight Express! We've received your booking confirmation 
                      and our team is ready to help with your vehicle transport.
                    </p>

                    <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e5e7eb;">
                      <h3 style="margin-top: 0; color: #1f2937;">Shipment Summary</h3>
                      <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding: 10px 0; color: #6b7280; border-bottom: 1px solid #f3f4f6;">Pickup Location:</td>
                          <td style="padding: 10px 0; color: #1f2937; text-align: right; border-bottom: 1px solid #f3f4f6;"><strong>${pickupLocation}</strong></td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; color: #6b7280; border-bottom: 1px solid #f3f4f6;">Delivery Location:</td>
                          <td style="padding: 10px 0; color: #1f2937; text-align: right; border-bottom: 1px solid #f3f4f6;"><strong>${dropoffLocation}</strong></td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0; color: #6b7280;">Total Amount:</td>
                          <td style="padding: 10px 0; color: #FF6600; text-align: right; font-size: 18px;"><strong>$${totalAmount?.toFixed(2)}</strong></td>
                        </tr>
                      </table>
                    </div>

                    <div style="background-color: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FF6600;">
                      <h3 style="margin-top: 0; color: #000000;">What Happens Next?</h3>
                      <ol style="color: #1f2937; line-height: 1.8; margin: 10px 0;">
                        <li>You'll receive a deposit invoice shortly</li>
                        <li>Our team will contact you within 24 hours</li>
                        <li>We'll schedule your pickup and confirm details</li>
                        <li>You'll receive tracking information once pickup is confirmed</li>
                      </ol>
                    </div>

                    <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
                      <p style="margin: 0; color: #92400e;">
                        <strong>📧 Important:</strong> Please check your email for the deposit invoice that will be sent separately.
                      </p>
                    </div>

                    <p style="color: #4b5563; line-height: 1.6;">
                      If you have any questions or need to make changes to your booking, please don't hesitate to contact us.
                    </p>

                    <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e5e7eb; text-align: center;">
                      <p style="margin: 0 0 10px 0; color: #6b7280;">Contact Us</p>
                      <p style="margin: 5px 0; color: #FF6600;"><strong>📞 (480) 919-8088</strong></p>
                      <p style="margin: 5px 0; color: #FF6600;"><strong>📧 dispatch@flfreightco.com</strong></p>
                    </div>

                    <p style="color: #4b5563; line-height: 1.6;">
                      Thank you for trusting us with your vehicle transport!
                    </p>

                    <p style="color: #4b5563;">
                      Best regards,<br>
                      <strong>Freedom Line Freight Express Team</strong>
                    </p>
                  </div>

                  <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px;">
                    <p style="margin: 0;">© 2026 Freedom Line Freight Express LLC</p>
                    <p style="margin: 5px 0;">Professional Vehicle Transport Services</p>
                  </div>
                </div>
              `
            })
          });

          if (customerEmailResponse.ok) {
            const customerEmailData = await customerEmailResponse.json();
            console.log('✅ Customer confirmation email sent:', customerEmailData.id);
            customerEmailSent = true;
          } else {
            const error = await customerEmailResponse.json();
            console.error('❌ Failed to send customer email:', error);
          }
        } catch (error) {
          console.error('❌ Error sending customer email:', error);
        }
      } else {
        console.log('⚠️ Customer email skipped - missing RESEND_API_KEY or customer email');
      }

      // ========================================
      // STEP 4: Airtable automation triggered
      // ========================================
      console.log('📧 Airtable automation should now send deposit invoice email');

      return res.status(200).json({
        success: true,
        message: 'Booking confirmed successfully',
        airtableUpdated: true,
        newStatus: updatedRecord.fields?.L_Status,
        recordId: updatedRecord.id,
        emailsSent: {
          businessNotification: businessEmailSent,
          customerConfirmation: customerEmailSent,
          depositInvoice: 'Triggered by Airtable automation'
        }
      });
    }

    // Invalid request
    return res.status(400).json({
      error: 'Invalid request. Use GET to fetch lead or POST with action=confirm to confirm booking.'
    });

  } catch (error) {
    console.error('❌ Unexpected error:', error);
    console.error('❌ Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Internal server error',
      details: error instanceof Error ? error.stack : undefined
    });
  }
}