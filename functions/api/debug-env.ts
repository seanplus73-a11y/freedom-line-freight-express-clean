// Debug endpoint to check environment variables
// REMOVE THIS FILE AFTER DEBUGGING!
// Updated to trigger redeployment

// Handle OPTIONS requests for CORS
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}

export async function onRequestGet(context) {
  const envVars = {
    hasToken: !!context.env.AIRTABLE_TOKEN,
    hasBaseId: !!context.env.AIRTABLE_BASE_ID,
    hasContacts: !!context.env.AIRTABLE_TABLE_CONTACTS,
    hasLeads: !!context.env.AIRTABLE_TABLE_LEADS,
    allKeys: Object.keys(context.env),
    tokenPrefix: context.env.AIRTABLE_TOKEN ? context.env.AIRTABLE_TOKEN.substring(0, 8) + '...' : 'MISSING',
    baseIdPrefix: context.env.AIRTABLE_BASE_ID ? context.env.AIRTABLE_BASE_ID.substring(0, 8) + '...' : 'MISSING',
    contactsValue: context.env.AIRTABLE_TABLE_CONTACTS || 'MISSING',
    leadsValue: context.env.AIRTABLE_TABLE_LEADS || 'MISSING'
  };

  return new Response(
    JSON.stringify(envVars, null, 2),
    {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
  );
}
