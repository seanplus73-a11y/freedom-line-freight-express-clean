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

    console.log('Quote form submission received:', {
      customerName: formData.customerName,
      customerEmail: formData.customerEmail,
      serviceType: formData.serviceType,
      timestamp: new Date().toISOString()
    });

    // Validate required fields
    const requiredFields = [
      'customerName', 'customerEmail', 'customerPhone', 'serviceType',
      'pickupAddress', 'pickupCity', 'pickupState', 'pickupZip',
      'dropoffAddress', 'dropoffCity', 'dropoffState', 'dropoffZip'
    ];

    // For vehicle services, add vehicle-specific required fields
    const vehicleServiceTypes = [
      "Local Vehicle Transport (0 to 50 miles)",
      "Regional Vehicle Transport (50 to 150 miles)",
      "Dealer or Auction Pickup",
      "Private Party Vehicle Transport"
    ];
    
    const isVehicleService = vehicleServiceTypes.includes(formData.serviceType);
    
    if (isVehicleService) {
      requiredFields.push('vehicleMake', 'vehicleModel', 'vehicleYear', 'vehicleCondition', 'operableConfirmation');
    }

    const missingFields = requiredFields.filter(field => !formData[field] && formData[field] !== false);
    if (missingFields.length > 0) {
      console.error('Validation failed. Missing fields:', missingFields.join(', '));
      return res.status(400).json({
        success: false,
        error: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    // Validate operable confirmation for vehicle services only
    if (isVehicleService && formData.operableConfirmation !== true) {
      console.error('Validation failed: Operable confirmation not checked');
      return res.status(400).json({
        success: false,
        error: 'You must confirm the vehicle is operable'
      });
    }

    // Get environment variables
    const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_LEADS = process.env.AIRTABLE_TABLE_LEADS;

    // Check if environment variables are set
    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_LEADS) {
      console.error('Missing Airtable environment variables');
      console.error('AIRTABLE_TOKEN exists:', !!AIRTABLE_TOKEN);
      console.error('AIRTABLE_BASE_ID exists:', !!AIRTABLE_BASE_ID);
      console.error('AIRTABLE_TABLE_LEADS exists:', !!AIRTABLE_TABLE_LEADS);
      return res.status(500).json({
        success: false,
        error: 'Server configuration error. Please contact me directly at dispatch@flfreightco.com'
      });
    }

    // Prepare Airtable payload (matching your Lead table structure)
    const fields: Record<string, any> = {
      "L_FullName": formData.customerName,
      "L_Email": formData.customerEmail,
      "L_PickupLocation": `${formData.pickupAddress}, ${formData.pickupCity}, ${formData.pickupState} ${formData.pickupZip}`,
      "L_DeliveryLocation": `${formData.dropoffAddress}, ${formData.dropoffCity}, ${formData.dropoffState} ${formData.dropoffZip}`
    };
    
    // Add vehicle information for vehicle services
    if (isVehicleService && formData.vehicleMake) {
      fields["Q_Make"] = formData.vehicleMake;
    }
    
    if (isVehicleService && formData.vehicleModel) {
      fields["Q_Model"] = formData.vehicleModel;
    }
    
    if (isVehicleService && formData.vehicleYear) {
      fields["Q_VehicleYear"] = String(formData.vehicleYear);
    }
    
    // Add delivery service fields (if they exist in Airtable)
    if (formData.itemType) {
      fields["Q_ItemType"] = formData.itemType;
    }
    
    if (formData.itemDetails) {
      fields["Q_ItemDetails"] = formData.itemDetails;
    }
    
    // Add optional fields only if they have values
    if (formData.customerPhone) {
      fields["L_Phone"] = formData.customerPhone;
    }
    
    if (formData.companyName) {
      fields["L_Company"] = formData.companyName;
    }
    
    if (formData.vinNumber) {
      fields["Q_VIN"] = formData.vinNumber;
    }
    
    // Send service type to Leads table field
    if (formData.serviceType) {
      fields["L_ServiceType"] = formData.serviceType;
    }
    
    if (formData.vehicleCondition) {
      fields["Q_VehicleCondition"] = formData.vehicleCondition;
    }
    
    // Add preferred pickup date if provided
    if (formData.preferredPickupDate) {
      fields["Q_PreferredPickupDate"] = formData.preferredPickupDate;
    }
    
    // Add additional notes if provided
    if (formData.notes) {
      fields["L_Notes"] = formData.notes;
    }
    
    const airtablePayload = {
      records: [{ fields }]
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
        error: 'Failed to save quote request. Please try again or contact me directly.',
        details: airtableData
      });
    }

    console.log('Quote saved successfully. Record ID:', airtableData.records[0]?.id);

    // Return success
    return res.status(200).json({
      success: true,
      message: 'Quote request submitted successfully',
      recordId: airtableData.records[0]?.id
    });

  } catch (error) {
    console.error('Quote form error:', error);
    return res.status(500).json({
      success: false,
      error: 'Server error. Please try again or contact me directly at dispatch@flfreightco.com',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
