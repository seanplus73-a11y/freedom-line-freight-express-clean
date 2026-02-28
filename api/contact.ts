import type { VercelRequest, VercelResponse } from '@vercel/node';

interface AirtableRecord {
  id: string;
  createdTime: string;
  fields: Record<string, any>;
}

interface AirtableResponse {
  records: AirtableRecord[];
  error?: {
    type: string;
    message: string;
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const formData = req.body;

    console.log('Contact form submission received:', {
      name: formData.name,
      email: formData.email,
      timestamp: new Date().toISOString()
    });

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      console.error('Validation failed: Missing required fields');
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name, email, or message'
      });
    }

    // Get environment variables
    const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_LEADS = process.env.AIRTABLE_TABLE_LEADS;

    // Debug: Log what we can see
    console.log('=== ENVIRONMENT VARIABLE DEBUG ===');
    console.log('AIRTABLE_TOKEN exists:', !!AIRTABLE_TOKEN);
    console.log('AIRTABLE_BASE_ID exists:', !!AIRTABLE_BASE_ID);
    console.log('AIRTABLE_TABLE_LEADS exists:', !!AIRTABLE_TABLE_LEADS);
    console.log('=== END DEBUG ===');

    // Check if environment variables are set
    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_LEADS) {
      console.error('Missing Airtable environment variables');
      return res.status(500).json({
        success: false,
        error: 'Server configuration error. Please contact me directly at dispatch@flfreightco.com'
      });
    }

    // Prepare Airtable payload
    const airtablePayload = {
      records: [
        {
          fields: {
            "name": formData.name,
            "email": formData.email,
            "phone": formData.phone || "",
            "Notes": formData.message,
            "Lead Source": "Website"
          }
        }
      ]
    };

    console.log('Sending to Airtable Leads table...');

    // Send to Airtable
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_LEADS}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(airtablePayload)
      }
    );

    const airtableData = await airtableResponse.json() as AirtableResponse;

    console.log('Airtable response status:', airtableResponse.status);

    if (!airtableResponse.ok) {
      console.error('Airtable error:', JSON.stringify(airtableData));
      return res.status(500).json({
        success: false,
        error: 'Failed to save contact information. Please try again or contact me directly.',
        details: airtableData
      });
    }

    console.log('Contact saved successfully. Record ID:', airtableData.records[0]?.id);

    // Return success
    return res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully',
      recordId: airtableData.records[0]?.id
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      error: 'Server error. Please try again or contact me directly at dispatch@flfreightco.com',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
