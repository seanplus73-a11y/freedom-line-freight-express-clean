interface Env {
  AIRTABLE_TOKEN: string;
  AIRTABLE_BASE_ID: string;
  AIRTABLE_TABLE_LEADS: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const formData = await context.request.json();
    
    console.log('Quote form submission received:', {
      customerName: formData.customerName,
      customerEmail: formData.customerEmail,
      serviceType: formData.serviceType,
      timestamp: new Date().toISOString()
    });

    // Validate required fields
    const requiredFields = [
      'customerName', 'customerEmail', 'customerPhone', 'serviceType',
      'vehicleMake', 'vehicleModel', 'vehicleYear', 'vehicleCondition',
      'pickupAddress', 'pickupCity', 'pickupState', 'pickupZip',
      'dropoffAddress', 'dropoffCity', 'dropoffState', 'dropoffZip',
      'operableConfirmation'
    ];

    const missingFields = requiredFields.filter(field => !formData[field] && formData[field] !== false);
    if (missingFields.length > 0) {
      console.error('Validation failed. Missing fields:', missingFields.join(', '));
      return new Response(JSON.stringify({ 
        success: false, 
        error: `Missing required fields: ${missingFields.join(', ')}` 
      }), {
        status: 400,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Validate operable confirmation
    if (formData.operableConfirmation !== true) {
      console.error('Validation failed: Operable confirmation not checked');
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'You must confirm the vehicle is operable' 
      }), {
        status: 400,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Prepare Airtable payload
    const airtablePayload = {
      records: [
        {
          fields: {
            "Customer Name": formData.customerName,
            "Customer Email": formData.customerEmail,
            "Customer Phone": formData.customerPhone,
            "Service Type": formData.serviceType,
            "Vehicle Make": formData.vehicleMake,
            "Vehicle Model": formData.vehicleModel,
            "Vehicle Year": String(formData.vehicleYear),
            "VIN Number": formData.vinNumber || "",
            "Vehicle Condition": formData.vehicleCondition,
            "Pickup Address": formData.pickupAddress,
            "Pickup City": formData.pickupCity,
            "Pickup State": formData.pickupState,
            "Pickup Zip": formData.pickupZip,
            "Dropoff Address": formData.dropoffAddress,
            "Dropoff City": formData.dropoffCity,
            "Dropoff State": formData.dropoffState,
            "Dropoff Zip": formData.dropoffZip,
            "Notes": formData.notes || "",
            "Operable Confirmed": true,
            "Submitted At": new Date().toISOString()
          }
        }
      ]
    };

    console.log('Sending to Airtable Leads table...');

    // Send to Airtable
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${context.env.AIRTABLE_BASE_ID}/${context.env.AIRTABLE_TABLE_LEADS}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${context.env.AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(airtablePayload)
      }
    );

    const airtableData = await airtableResponse.json();
    
    console.log('Airtable response status:', airtableResponse.status);

    if (!airtableResponse.ok) {
      console.error('Airtable error:', JSON.stringify(airtableData));
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Failed to save quote request. Please try again or contact me directly.',
        details: airtableData 
      }), {
        status: airtableResponse.status,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    console.log('Quote saved successfully. Record ID:', airtableData.records[0].id);

    // Return success
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Quote request submitted successfully',
      recordId: airtableData.records[0].id
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Quote form error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Server error. Please try again or contact me directly at dispatch@flfreightco.com',
      details: error.message 
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};

// Handle OPTIONS for CORS preflight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
};
