/**
 * Vercel Serverless Function - Invoice PDF Generation & Email
 * 
 * Triggered by: Airtable automation when L_Status changes to "Booked"
 * 
 * Flow:
 * 1. Receives invoice data from Airtable automation script
 * 2. Generates HTML invoice from template
 * 3. Converts HTML to PDF using PDFShift API
 * 4. Sends email with PDF attachment via Resend
 * 5. Returns success/failure status
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  console.log('📥 Invoice generation request received');

  try {
    const body = req.body;
    console.log('📦 Request payload:', JSON.stringify(body, null, 2));

    // Environment variables
    const INVOICE_API_SECRET = process.env.INVOICE_API_SECRET;
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const MOCK_PDF_MODE = process.env.MOCK_PDF_MODE === 'true';

    // Extract and validate data
    const invoiceData = {
      quoteID: body.quoteID || body.shipmentCode || 'Q-0000', // Support both Quote ID and legacy shipment code
      customerName: body.customerName || 'Valued Customer',
      customerEmail: body.customerEmail,
      customerPhone: body.customerPhone || 'N/A',
      totalQuoteAmount: parseFloat(body.totalQuoteAmount) || 0,
      depositPaid: parseFloat(body.depositPaid) || 0,
      remainingBalance: parseFloat(body.remainingBalance) || 0,
      paymentStatus: body.paymentStatus || 'Pending',
      invoiceType: body.invoiceType || 'deposit',
      // Payment links
      stripePaymentLink: body.stripePaymentLink || 'https://book.stripe.com/bJe7sE9B8cr41Gc29ScfK00',
      paypalPaymentLink: body.paypalPaymentLink || 'https://www.paypal.com/ncp/payment/BMNZCXNFAF2FG'
    };

    console.log('✅ Mapped invoice data:', JSON.stringify(invoiceData, null, 2));

    // Validate required fields
    if (!invoiceData.customerEmail) {
      console.error('❌ Missing customer email');
      return res.status(400).json({ 
        success: false,
        error: 'Customer email is required' 
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(invoiceData.customerEmail)) {
      console.error('❌ Invalid email format:', invoiceData.customerEmail);
      return res.status(400).json({ 
        success: false,
        error: `Invalid email format: ${invoiceData.customerEmail}` 
      });
    }

    // Generate HTML invoice
    console.log('📄 Generating HTML invoice...');
    const htmlContent = generateInvoiceHTML(invoiceData);

    // ========================================
    // STEP 1: Generate PDF
    // ========================================
    let pdfBase64: string;
    const fileName = `FLF-Invoice-${invoiceData.quoteID}.pdf`;

    if (MOCK_PDF_MODE) {
      console.log('🎭 MOCK PDF MODE - Using test PDF');
      // Create minimal mock PDF for testing
      const mockPdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] >>
endobj
xref
0 4
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
trailer
<< /Size 4 /Root 1 0 R >>
startxref
180
%%EOF`;
      pdfBase64 = Buffer.from(mockPdf).toString('base64');
    } else {
      // Use PDFShift API for production
      if (!INVOICE_API_SECRET) {
        console.error('❌ INVOICE_API_SECRET not configured');
        return res.status(500).json({ 
          success: false,
          error: 'PDF service not configured' 
        });
      }

      console.log('📄 Converting HTML to PDF with PDFShift...');
      const pdfResponse = await fetch('https://api.pdfshift.io/v3/convert/pdf', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(`api:${INVOICE_API_SECRET}`).toString('base64')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: htmlContent,
          landscape: false,
          use_print: false,
        }),
      });

      if (!pdfResponse.ok) {
        const errorText = await pdfResponse.text();
        console.error('❌ PDFShift error:', errorText);
        return res.status(500).json({ 
          success: false,
          error: `PDF generation failed: ${errorText}` 
        });
      }

      const pdfBuffer = await pdfResponse.arrayBuffer();
      pdfBase64 = Buffer.from(pdfBuffer).toString('base64');
      console.log('✅ PDF generated successfully');
    }

    // ========================================
    // STEP 2: Send email with PDF attachment
    // ========================================
    if (!RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY not configured');
      return res.status(500).json({ 
        success: false,
        error: 'Email service not configured' 
      });
    }

    // Determine email content based on invoice type
    const depositAmount = invoiceData.depositPaid || (invoiceData.totalQuoteAmount * 0.25);
    const emailSubject = invoiceData.invoiceType === 'deposit'
      ? `Deposit Invoice ${invoiceData.quoteID} - Freedom Line Freight Express`
      : `Invoice ${invoiceData.quoteID} - Freedom Line Freight Express`;

    const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0;">Your Invoice is Ready!</h1>
          <p style="color: #FF6600; margin: 10px 0 0 0; font-weight: 600;">Freedom Line Freight Express</p>
        </div>

        <div style="background-color: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
          <h2 style="color: #1f2937;">Hello ${invoiceData.customerName},</h2>
          
          <p style="color: #4b5563; line-height: 1.6;">
            Thank you for choosing Freedom Line Freight Express! Your invoice for quote <strong>${invoiceData.quoteID}</strong> is attached to this email.
          </p>

          ${invoiceData.invoiceType === 'deposit' ? `
          <div style="background-color: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FF6600;">
            <p style="margin: 0 0 10px 0; color: #92400e; font-size: 18px; font-weight: bold;">
              💰 Deposit Amount: $${depositAmount.toFixed(2)}
            </p>
            <p style="margin: 0 0 15px 0; color: #78350f;">
              Please submit your deposit payment to confirm your booking and secure your transport slot.
            </p>
            
            <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #fed7aa;">
              <p style="margin: 0 0 12px 0; color: #92400e; font-size: 14px; font-weight: bold;">💳 PAY YOUR DEPOSIT NOW:</p>
              
              <div style="margin-bottom: 12px;">
                <p style="margin: 0 0 5px 0; color: #78350f; font-size: 13px;">🔶 Pay with Credit/Debit Card (Stripe)</p>
                <a href="${invoiceData.stripePaymentLink}" style="color: #FF6600; text-decoration: underline; font-size: 13px;">${invoiceData.stripePaymentLink}</a>
              </div>
              
              <div style="margin-bottom: 12px;">
                <p style="margin: 0 0 5px 0; color: #78350f; font-size: 13px;">⚫ Pay with PayPal</p>
                <a href="${invoiceData.paypalPaymentLink}" style="color: #FF6600; text-decoration: underline; font-size: 13px;">${invoiceData.paypalPaymentLink}</a>
              </div>
              
              <p style="margin: 10px 0 0 0; color: #92400e; font-size: 12px;">🔒 Secure payment • Your booking will be confirmed upon payment</p>
            </div>
          </div>
          ` : ''}

          <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e5e7eb;">
            <h3 style="margin-top: 0; color: #1f2937;">Payment Summary</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #6b7280; border-bottom: 1px solid #f3f4f6;">Total Quote Amount:</td>
                <td style="padding: 10px 0; color: #1f2937; text-align: right; border-bottom: 1px solid #f3f4f6;"><strong>$${invoiceData.totalQuoteAmount.toFixed(2)}</strong></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6b7280; border-bottom: 1px solid #f3f4f6;">Deposit ${invoiceData.invoiceType === 'deposit' ? 'Required' : 'Paid'}:</td>
                <td style="padding: 10px 0; color: #FF6600; text-align: right; border-bottom: 1px solid #f3f4f6;"><strong>$${depositAmount.toFixed(2)}</strong></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6b7280;">Balance Due:</td>
                <td style="padding: 10px 0; color: #1f2937; text-align: right; font-size: 18px;"><strong>$${invoiceData.remainingBalance.toFixed(2)}</strong></td>
              </tr>
            </table>
          </div>

          <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e5e7eb; text-align: center;">
            <p style="margin: 0 0 10px 0; color: #6b7280;">Questions? Contact Us</p>
            <p style="margin: 5px 0; color: #FF6600;"><strong>📞 (480) 919-8088</strong></p>
            <p style="margin: 5px 0; color: #FF6600;"><strong>📧 dispatch@flfreightco.com</strong></p>
          </div>

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
    `;

    console.log(`📧 Sending invoice email to ${invoiceData.customerEmail}...`);

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Freedom Line Freight Express <invoices@flfreightco.com>',
        to: [invoiceData.customerEmail],
        subject: emailSubject,
        html: emailHTML,
        attachments: [
          {
            filename: fileName,
            content: pdfBase64,
          }
        ]
      })
    });

    if (!emailResponse.ok) {
      const error = await emailResponse.json();
      console.error('❌ Resend API error:', error);
      return res.status(500).json({ 
        success: false,
        error: `Email sending failed: ${JSON.stringify(error)}` 
      });
    }

    const emailResult = await emailResponse.json();
    console.log('✅ Email sent successfully:', emailResult.id);

    return res.status(200).json({
      success: true,
      message: 'Invoice generated and sent successfully',
      emailId: emailResult.id,
      sentTo: invoiceData.customerEmail,
      fileName: fileName
    });

  } catch (error) {
    console.error('❌ Unexpected error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error',
      details: error instanceof Error ? error.stack : undefined
    });
  }
}

// ========================================
// HTML Invoice Template Generator
// ========================================
interface InvoiceData {
  quoteID: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  totalQuoteAmount: number;
  depositPaid: number;
  remainingBalance: number;
  paymentStatus: string;
  invoiceType: string;
  // Payment links
  stripePaymentLink: string;
  paypalPaymentLink: string;
}

function generateInvoiceHTML(data: InvoiceData): string {
  const depositAmount = data.depositPaid || (data.totalQuoteAmount * 0.25);
  const invoiceTitle = data.invoiceType === 'deposit' ? 'DEPOSIT INVOICE' : 
                       data.invoiceType === 'balance' ? 'BALANCE DUE INVOICE' : 
                       'INVOICE';
  
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invoice ${data.quoteID}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6; }
    .invoice-container { max-width: 800px; margin: 40px auto; padding: 40px; background: white; }
    .header { border-bottom: 4px solid #FF6600; padding-bottom: 20px; margin-bottom: 30px; }
    .company-name { font-size: 28px; font-weight: bold; color: #000; margin-bottom: 5px; }
    .company-tagline { color: #FF6600; font-size: 14px; margin-bottom: 10px; }
    .company-details { font-size: 12px; color: #6b7280; }
    .invoice-title { font-size: 32px; font-weight: bold; color: #000; text-align: right; margin-bottom: 10px; }
    .invoice-meta { text-align: right; color: #6b7280; font-size: 14px; margin-bottom: 30px; }
    .section { margin-bottom: 30px; }
    .section-title { font-size: 16px; font-weight: bold; color: #000; margin-bottom: 15px; padding-bottom: 5px; border-bottom: 2px solid #e5e7eb; }
    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .info-item { margin-bottom: 10px; }
    .info-label { font-size: 12px; color: #6b7280; margin-bottom: 3px; }
    .info-value { font-size: 14px; color: #1f2937; font-weight: 600; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th { background-color: #f3f4f6; padding: 12px; text-align: left; font-size: 12px; color: #6b7280; border-bottom: 2px solid #e5e7eb; }
    td { padding: 12px; border-bottom: 1px solid #f3f4f6; font-size: 14px; }
    .total-row { background-color: #fff7ed; font-weight: bold; font-size: 16px; }
    .total-row td { color: #000; padding: 15px 12px; border-bottom: none; }
    .deposit-highlight { background-color: #fff7ed; border-left: 4px solid #FF6600; padding: 20px; margin: 20px 0; }
    .deposit-amount { font-size: 24px; color: #FF6600; font-weight: bold; margin-bottom: 10px; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px; }
    .payment-instructions { background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 30px; }
    @media print { .invoice-container { margin: 0; padding: 20px; } }
  </style>
</head>
<body>
  <div class="invoice-container">
    <!-- Header -->
    <div class="header">
      <div class="company-name">FREEDOM LINE FREIGHT EXPRESS LLC</div>
      <div class="company-tagline">Professional Vehicle Transport You Can Trust</div>
      <div class="company-details">
        📞 (480) 919-8088 | 📧 dispatch@flfreightco.com | 🌐 flfreightco.com
      </div>
    </div>

    <!-- Invoice Title -->
    <div class="invoice-title">${invoiceTitle}</div>
    <div class="invoice-meta">
      <strong>Invoice #:</strong> ${data.quoteID}<br>
      <strong>Date:</strong> ${currentDate}<br>
      <strong>Status:</strong> ${data.paymentStatus}
    </div>

    <!-- Customer Information -->
    <div class="section">
      <div class="section-title">BILL TO</div>
      <div class="info-item">
        <div class="info-value">${data.customerName}</div>
      </div>
      <div class="info-item">
        <div class="info-label">Email</div>
        <div class="info-value">${data.customerEmail}</div>
      </div>
      <div class="info-item">
        <div class="info-label">Phone</div>
        <div class="info-value">${data.customerPhone}</div>
      </div>
    </div>

    ${data.invoiceType === 'deposit' ? `
    <!-- Deposit Highlight -->
    <div class="deposit-highlight">
      <div class="deposit-amount">💰 DEPOSIT REQUIRED: $${depositAmount.toFixed(2)}</div>
      <p style="color: #78350f; margin: 0;">
        Please submit your deposit payment to confirm your booking and secure your transport slot.
      </p>
      
      <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #fed7aa;">
        <p style="margin: 0 0 12px 0; color: #92400e; font-size: 14px; font-weight: bold;">💳 PAY YOUR DEPOSIT NOW:</p>
        
        <div style="margin-bottom: 12px;">
          <p style="margin: 0 0 5px 0; color: #78350f; font-size: 13px;">🔶 Pay with Credit/Debit Card (Stripe)</p>
          <a href="${data.stripePaymentLink}" style="color: #FF6600; text-decoration: underline; font-size: 13px;">${data.stripePaymentLink}</a>
        </div>
        
        <div style="margin-bottom: 12px;">
          <p style="margin: 0 0 5px 0; color: #78350f; font-size: 13px;">⚫ Pay with PayPal</p>
          <a href="${data.paypalPaymentLink}" style="color: #FF6600; text-decoration: underline; font-size: 13px;">${data.paypalPaymentLink}</a>
        </div>
        
        <p style="margin: 10px 0 0 0; color: #92400e; font-size: 12px;">🔒 Secure payment • Your booking will be confirmed upon payment</p>
      </div>
    </div>
    ` : ''}

    <!-- Payment Breakdown -->
    <div class="section">
      <div class="section-title">PAYMENT DETAILS</div>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th style="text-align: right;">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Transport Quote</td>
            <td style="text-align: right;">$${data.totalQuoteAmount.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Deposit ${data.invoiceType === 'deposit' ? 'Required' : 'Paid'}</td>
            <td style="text-align: right; color: #FF6600; font-weight: 600;">$${depositAmount.toFixed(2)}</td>
          </tr>
          <tr class="total-row">
            <td>BALANCE DUE</td>
            <td style="text-align: right;">$${data.remainingBalance.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Payment Instructions -->
    <div class="payment-instructions">
      <h3 style="margin-bottom: 15px; color: #000;">Payment Instructions</h3>
      <p style="margin-bottom: 10px; color: #4b5563;">
        Please contact us at <strong style="color: #FF6600;">dispatch@flfreightco.com</strong> or call 
        <strong style="color: #FF6600;">(480) 919-8088</strong> to process your payment.
      </p>
      <p style="margin: 0; color: #6b7280; font-size: 12px;">
        We accept major credit cards, debit cards, and electronic transfers. Your payment link will be provided upon request.
      </p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p><strong>Thank you for choosing Freedom Line Freight Express!</strong></p>
      <p>© ${new Date().getFullYear()} Freedom Line Freight Express LLC | All Rights Reserved</p>
      <p>Professional Vehicle Transport Services Nationwide</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}