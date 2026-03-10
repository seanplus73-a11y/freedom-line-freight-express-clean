import type { VercelRequest, VercelResponse } from '@vercel/node';

interface AirtableRecord {
  id: string;
  createdTime: string;
  fields: Record<string, any>;
}

interface AirtableResponse {
  records?: AirtableRecord[];
  id?: string;
  fields?: Record<string, any>;
  error?: {
    type: string;
    message: string;
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Get environment variables
  const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
  const AIRTABLE_TABLE_LEADS = process.env.AIRTABLE_TABLE_LEADS;

  // Check if environment variables are set
  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_LEADS) {
    console.error('Missing Airtable environment variables');
    return res.status(500).json({
      success: false,
      error: 'Server configuration error. Please contact me directly at quotes@flfreightco.com'
    });
  }

  // GET request - Fetch quote details
  if (req.method === 'GET') {
    const quoteId = req.query.quoteId as string;

    if (!quoteId) {
      return res.status(400).json({
        success: false,
        error: 'Quote ID is required'
      });
    }

    try {
      console.log('Fetching quote details for:', quoteId);

      // Fetch the record from Airtable
      const airtableResponse = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_LEADS}/${quoteId}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
          }
        }
      );

      if (!airtableResponse.ok) {
        const errorData = await airtableResponse.json();
        console.error('Airtable fetch error:', errorData);
        return res.status(404).json({
          success: false,
          error: 'Quote not found. Please check your quote link or contact me directly.'
        });
      }

      const record = await airtableResponse.json() as AirtableRecord;
      console.log('Quote record fetched successfully');

      // Extract and format the quote details
      const fields = record.fields;
      const quoteDetails = {
        customerName: fields.L_FullName || 'Unknown Customer',
        pickupLocation: fields.Q_PickupLocation || 'Not specified',
        deliveryLocation: fields.Q_DeliveryLocation || 'Not specified',
        vehicle: `${fields.Q_Year || ''} ${fields.Q_Make || ''} ${fields.Q_Model || ''}`.trim() || 'Not specified'
      };

      return res.status(200).json({
        success: true,
        quoteDetails
      });

    } catch (error) {
      console.error('Error fetching quote:', error);
      return res.status(500).json({
        success: false,
        error: 'Failed to load quote details. Please contact me directly.',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  // POST request - Update quote to mark as accepted
  if (req.method === 'POST') {
    try {
      const { quoteId, timestamp, userAgent } = req.body;

      if (!quoteId) {
        return res.status(400).json({
          success: false,
          error: 'Quote ID is required'
        });
      }

      console.log('Quote acceptance received for:', quoteId, {
        timestamp,
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        userAgent
      });

      // First, fetch the existing record to get current data
      const fetchResponse = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_LEADS}/${quoteId}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
          }
        }
      );

      if (!fetchResponse.ok) {
        console.error('Failed to fetch record for update');
        return res.status(404).json({
          success: false,
          error: 'Quote not found'
        });
      }

      const existingRecord = await fetchResponse.json() as AirtableRecord;
      const existingFields = existingRecord.fields;

      // Update the record with acceptance information
      const updatePayload = {
        fields: {
          // Add acceptance timestamp and details to notes
          Q_Notes: existingFields.Q_Notes 
            ? `${existingFields.Q_Notes}\n\n--- QUOTE ACCEPTED ---\nAccepted: ${timestamp}\nIP: ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}\nUser Agent: ${userAgent}`
            : `--- QUOTE ACCEPTED ---\nAccepted: ${timestamp}\nIP: ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}\nUser Agent: ${userAgent}`,
          
          // You can add a custom field here if you have one in Airtable for quote status
          // For example: Q_Status: "Accepted"
          // Or use a checkbox field: Q_Accepted: true
        }
      };

      console.log('Updating quote record in Airtable...');

      // Update the record in Airtable
      const updateResponse = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_LEADS}/${quoteId}`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatePayload)
        }
      );

      const updateData = await updateResponse.json() as AirtableResponse;

      console.log('Airtable update response status:', updateResponse.status);

      if (!updateResponse.ok) {
        console.error('Airtable update error:', JSON.stringify(updateData));
        return res.status(500).json({
          success: false,
          error: 'Failed to save acceptance. Please contact me directly.',
          details: updateData
        });
      }

      console.log('Quote acceptance saved successfully. Record ID:', quoteId);

      // Also create a notification record for quotes@flfreightco.com
      // This will trigger your Airtable automation with all customer details
      const notificationPayload = {
        records: [
          {
            fields: {
              // Customer Information - copy from original record
              "L_FullName": existingFields.L_FullName || '',
              "L_Email": existingFields.L_Email || 'quotes@flfreightco.com',
              "L_Phone": existingFields.L_Phone || '',
              "L_Company": existingFields.L_Company || '',
              
              // Quote Information - copy from original record
              "Q_PickupLocation": existingFields.Q_PickupLocation || '',
              "Q_DeliveryLocation": existingFields.Q_DeliveryLocation || '',
              "Q_Make": existingFields.Q_Make || '',
              "Q_Model": existingFields.Q_Model || '',
              "Q_Year": existingFields.Q_Year || '',
              "Q_VIN": existingFields.Q_VIN || '',
              "Q_ServiceType": existingFields.Q_ServiceType || '',
              "Q_VehicleCondition": existingFields.Q_VehicleCondition || '',
              "Q_PreferredPickupDate": existingFields.Q_PreferredPickupDate || '',
              
              // Add acceptance status to notes
              "Q_Notes": `✅ CUSTOMER ACCEPTED TRANSPORT QUOTE ✅

Original Quote ID: ${quoteId}
Accepted: ${timestamp}
IP Address: ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}

--- CUSTOMER DETAILS ---
Name: ${existingFields.L_FullName || 'Not provided'}
Email: ${existingFields.L_Email || 'Not provided'}
Phone: ${existingFields.L_Phone || 'Not provided'}
${existingFields.L_Company ? `Company: ${existingFields.L_Company}` : ''}

--- VEHICLE DETAILS ---
Vehicle: ${existingFields.Q_Year || ''} ${existingFields.Q_Make || ''} ${existingFields.Q_Model || ''}
VIN: ${existingFields.Q_VIN || 'Not provided'}
Condition: ${existingFields.Q_VehicleCondition || 'Not specified'}
Service Type: ${existingFields.Q_ServiceType || 'Not specified'}

--- ROUTE ---
Pickup: ${existingFields.Q_PickupLocation || 'Not specified'}
Delivery: ${existingFields.Q_DeliveryLocation || 'Not specified'}
${existingFields.Q_PreferredPickupDate ? `Preferred Pickup Date: ${existingFields.Q_PreferredPickupDate}` : ''}

${existingFields.Q_Notes ? `\n--- ORIGINAL NOTES ---\n${existingFields.Q_Notes}` : ''}`
            }
          }
        ]
      };

      // Create notification record
      await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_LEADS}`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(notificationPayload)
        }
      );

      console.log('Notification record created for quotes@flfreightco.com');

      // Return success
      return res.status(200).json({
        success: true,
        message: 'Quote acceptance confirmed',
        recordId: quoteId
      });

    } catch (error) {
      console.error('Quote acceptance error:', error);
      return res.status(500).json({
        success: false,
        error: 'Server error. Please try again or contact me directly at quotes@flfreightco.com',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  // Method not allowed
  return res.status(405).json({ 
    success: false, 
    error: 'Method not allowed' 
  });
}
