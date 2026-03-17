/**
 * Vercel Serverless Function - Quote Request Submission
 * 
 * Receives quote requests from website form and creates a new Lead in Airtable
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

  console.log('📥 Quote request received');

  try {
    const body = req.body;
    console.log('📦 Request payload:', JSON.stringify(body, null, 2));

    // Environment variables
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Leads';

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      console.error('❌ Missing Airtable configuration');
      return res.status(500).json({ 
        success: false,
        error: 'Server configuration error. Please contact support.' 
      });
    }

    // Validate required fields
    if (!body.customerEmail) {
      console.error('❌ Missing customer email');
      return res.status(400).json({ 
        success: false,
        error: 'Email is required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.customerEmail)) {
      console.error('❌ Invalid email format:', body.customerEmail);
      return res.status(400).json({ 
        success: false,
        error: `Invalid email format: ${body.customerEmail}` 
      });
    }

    // Map form data to Airtable fields
    const airtableFields: any = {
      'L_FullName': body.customerName || '',
      'L_Email': body.customerEmail,
      'L_Phone': body.customerPhone || '',
      'L_CompanyName': body.companyName || '',
      'L_ServiceType': body.serviceType || '',
      'L_PickupLocation': formatLocation(body.pickupAddress, body.pickupCity, body.pickupState, body.pickupZip),
      'L_DeliveryLocation': formatLocation(body.dropoffAddress, body.dropoffCity, body.dropoffState, body.dropoffZip),
      'L_PickupDate': body.preferredPickupDate || '',
      'L_Notes': body.notes || '',
      'L_Status': 'New Lead',
      'Vehicle_Make': body.vehicleMake || '',
      'Vehicle_Model': body.vehicleModel || '',
      'Vehicle_Year': body.vehicleYear || '',
      'Vehicle_VIN': body.vinNumber || '',
      'Vehicle_Type': body.vehicleCondition || 'Runs and Drives (Fully Operable)',
      'Lead_Source': 'Website Quote Form',
      'Created_Date': new Date().toISOString()
    };

    console.log('📝 Mapped Airtable fields:', JSON.stringify(airtableFields, null, 2));

    // Create record in Airtable
    const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;
    
    console.log('🔗 Posting to Airtable:', airtableUrl);

    const airtableResponse = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: airtableFields
      })
    });

    if (!airtableResponse.ok) {
      const errorText = await airtableResponse.text();
      console.error('❌ Airtable API error:', airtableResponse.status, errorText);
      return res.status(500).json({ 
        success: false,
        error: `Failed to save quote request: ${airtableResponse.status}`,
        details: errorText
      });
    }

    const createdRecord = await airtableResponse.json();
    console.log('✅ Lead created successfully:', createdRecord.id);

    return res.status(200).json({
      success: true,
      message: 'Quote request submitted successfully',
      recordId: createdRecord.id,
      fields: createdRecord.fields
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

/**
 * Helper function to format location string
 */
function formatLocation(address?: string, city?: string, state?: string, zip?: string): string {
  const parts = [address, city, state, zip].filter(p => p && p.trim());
  return parts.join(', ');
}
