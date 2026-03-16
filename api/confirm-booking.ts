/**
 * Vercel Serverless Function - Booking Confirmation
 * SIMPLIFIED: Only updates Airtable. Airtable automation sends the email.
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
  const { action } = req.body || {};

  // Environment variables (set in Vercel)
  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
  const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Leads';

  console.log('📥 Request:', { method: req.method, recordId, action });
  console.log('🔧 Environment check:', {
    hasApiKey: !!AIRTABLE_API_KEY,
    hasBaseId: !!AIRTABLE_BASE_ID,
    tableName: AIRTABLE_TABLE_NAME
  });

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

      return res.status(200).json({
        recordId: data.id,
        ...data.fields
      });
    }

    // POST: Confirm booking
    if (req.method === 'POST' && recordId && action === 'confirm') {
      console.log('📝 Confirming booking for:', recordId);
      console.log('📝 Will set L_Status to: "Booked"');

      // Update Airtable L_Status to "Booked"
      // This triggers the Airtable automation for deposit invoice
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
              'Agreement Accepted': new Date().toISOString()
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
      console.log('📧 Airtable automation should now send deposit invoice email');

      return res.status(200).json({
        success: true,
        message: 'Booking confirmed successfully',
        airtableUpdated: true,
        newStatus: updatedRecord.fields?.L_Status,
        recordId: updatedRecord.id,
        // Deposit invoice email sent by Airtable automation
        emailNote: 'Deposit invoice email triggered by Airtable automation when L_Status changes to Booked'
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