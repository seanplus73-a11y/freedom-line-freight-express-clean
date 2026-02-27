// Handle OPTIONS requests for CORS
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}

// Handle POST requests
export async function onRequestPost(context) {
  try {
    // Parse request body
    let formData;
    try {
      formData = await context.request.json();
    } catch (parseError) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Invalid JSON in request body' 
        }),
        {
          status: 400,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }
    
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
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: `Missing required fields: ${missingFields.join(', ')}` 
        }),
        {
          status: 400,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }

    // Validate operable confirmation
    if (formData.operableConfirmation !== true) {
      console.error('Validation failed: Operable confirmation not checked');
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'You must confirm the vehicle is operable' 
        }),
        {
          status: 400,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }

    // Get environment variables
    const AIRTABLE_TOKEN = context.env.AIRTABLE_TOKEN;
    const AIRTABLE_BASE_ID = context.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_LEADS = context.env.AIRTABLE_TABLE_LEADS;

    // Check if environment variables are set
    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_LEADS) {
      console.error('Missing Airtable environment variables');
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Server configuration error. Please contact me directly at dispatch@flfreightco.com' 
        }),
        {
          status: 500,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }

    // Prepare Airtable payload (matching your Lead table structure)
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

    const airtableData = await airtableResponse.json();
    
    console.log('Airtable response status:', airtableResponse.status);

    if (!airtableResponse.ok) {
      console.error('Airtable error:', JSON.stringify(airtableData));
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Failed to save quote request. Please try again or contact me directly.',
          details: airtableData 
        }),
        {
          status: 500,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }

    console.log('Quote saved successfully. Record ID:', airtableData.records[0].id);

    // Return success
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Quote request submitted successfully',
        recordId: airtableData.records[0].id
      }),
      {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );

  } catch (error) {
    console.error('Quote form error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Server error. Please try again or contact me directly at dispatch@flfreightco.com',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }
}

