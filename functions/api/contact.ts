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
    
    console.log('Contact form submission received:', {
      name: formData.name,
      email: formData.email,
      timestamp: new Date().toISOString()
    });

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      console.error('Validation failed: Missing required fields');
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Missing required fields: name, email, or message' 
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
    const AIRTABLE_TABLE_CONTACTS = context.env.AIRTABLE_TABLE_CONTACTS;

    // Check if environment variables are set
    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_CONTACTS) {
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

    // Prepare Airtable payload
    const airtablePayload = {
      records: [
        {
          fields: {
            "Name": formData.name,
            "Email": formData.email,
            "Phone": formData.phone || "",
            "Pickup Location": formData.pickupLocation || "",
            "Delivery Location": formData.deliveryLocation || "",
            "Vehicle Type": formData.vehicleType || "",
            "Message": formData.message,
            "Submitted At": new Date().toISOString()
          }
        }
      ]
    };

    console.log('Sending to Airtable Contacts table...');

    // Send to Airtable
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_CONTACTS}`,
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
          error: 'Failed to save contact information. Please try again or contact me directly.',
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

    console.log('Contact saved successfully. Record ID:', airtableData.records[0].id);

    // Return success
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form submitted successfully',
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
    console.error('Contact form error:', error);
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
