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
    const { timestamp, userAgent } = req.body;

    console.log('Quote acceptance received:', {
      timestamp,
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      userAgent
    });

    // Get environment variables
    const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_LEADS = process.env.AIRTABLE_TABLE_LEADS;

    // Check if environment variables are set
    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_LEADS) {
      console.error('Missing Airtable environment variables');
      return res.status(500).json({
        success: false,
        error: 'Server configuration error. Please contact me directly at dispatch@flfreightco.com'
      });
    }

    // Create a record in Airtable to track the acceptance
    // This will trigger your Airtable automation to send the email
    const airtablePayload = {
      records: [
        {
          fields: {
            "L_FullName": "Quote Accepted",
            "L_Email": "quotes@flfreightco.com",
            "Q_Notes": `Customer Accepted Transport Quote\n\nTimestamp: ${timestamp}\nIP: ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}\nUser Agent: ${userAgent}\n\nA customer has accepted their transport quote and is ready to proceed with booking.`
          }
        }
      ]
    };

    console.log('Creating acceptance record in Airtable...');

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
        error: 'Failed to save acceptance. Please contact me directly.',
        details: airtableData
      });
    }

    console.log('Quote acceptance saved successfully. Record ID:', airtableData.records[0]?.id);

    // Return success
    return res.status(200).json({
      success: true,
      message: 'Quote acceptance confirmed',
      recordId: airtableData.records[0]?.id
    });

  } catch (error) {
    console.error('Quote acceptance error:', error);
    return res.status(500).json({
      success: false,
      error: 'Server error. Please try again or contact me directly at dispatch@flfreightco.com',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
