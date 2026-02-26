interface Env {
  AIRTABLE_TOKEN: string;
  AIRTABLE_BASE_ID: string;
  AIRTABLE_TABLE_CONTACTS: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const formData = await context.request.json();
    
    console.log('Contact form submission received:', {
      name: formData.name,
      email: formData.email,
      timestamp: new Date().toISOString()
    });

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      console.error('Validation failed: Missing required fields');
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Missing required fields: name, email, or message' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
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
      `https://api.airtable.com/v0/${context.env.AIRTABLE_BASE_ID}/${context.env.AIRTABLE_TABLE_CONTACTS}`,
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
        error: 'Failed to save contact information. Please try again or contact us directly.',
        details: airtableData 
      }), {
        status: airtableResponse.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    console.log('Contact saved successfully. Record ID:', airtableData.records[0].id);

    // Return success
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Contact form submitted successfully',
      recordId: airtableData.records[0].id
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Server error. Please try again or contact me directly at dispatch@flfreightco.com',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
