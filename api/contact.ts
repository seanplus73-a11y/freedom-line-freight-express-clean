// api/contact.js
export default async function handler(req, res) {
  // Only POST allowed
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Your form should send JSON
    const data = req.body || {};

    // Basic validation
    const fullName = (data.fullName || "").trim();
    const email = (data.email || "").trim();

    if (!fullName || !email) {
      return res.status(400).json({ error: "Missing required fields: fullName, email" });
    }

    // ENV variables (you already have these set)
    const token = process.env.AIRTABLE_TOKEN;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const contactsTable = process.env.AIRTABLE_TABLE_CONTACTS;
    const leadsTable = process.env.AIRTABLE_TABLE_LEADS;

    if (!token || !baseId || !contactsTable || !leadsTable) {
      return res.status(500).json({
        error: "Missing Airtable environment variables",
        missing: {
          AIRTABLE_TOKEN: !token,
          AIRTABLE_BASE_ID: !baseId,
          AIRTABLE_TABLE_CONTACTS: !contactsTable,
          AIRTABLE_TABLE_LEADS: !leadsTable,
        },
      });
    }

    // Build Airtable fields (adjust field names to match your Airtable exactly)
    // IMPORTANT: Field names must match Airtable column names.
    const commonFields = {
      "Full Name": fullName,
      "Email": email,
      "Phone": (data.phone || data.phoneNumber || "").toString().trim(),
      "Pickup Location": (data.pickupLocation || data.pickupAddress || "").trim(),
      "Delivery Location": (data.deliveryLocation || data.deliveryAddress || "").trim(),
      "Vehicle Type": (data.vehicleType || "").trim(),
      "Message": (data.message || data.additionalInfo || "").trim(),
      "Source": "Website Contact Form",
    };

    // Helper to create record in Airtable
    async function createAirtableRecord(tableName, fields) {
      const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

      const resp = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [{ fields }],
        }),
      });

      const json = await resp.json();

      if (!resp.ok) {
        // Airtable returns useful error messages in json.error
        throw new Error(
          `Airtable error (${tableName}) ${resp.status}: ${JSON.stringify(json)}`
        );
      }

      return json;
    }

    // ✅ Create in BOTH tables
    const [contactsResult, leadsResult] = await Promise.all([
      createAirtableRecord(contactsTable, commonFields),
      createAirtableRecord(leadsTable, {
        ...commonFields,
        "Lead Status": "New", // optional column if you have it
      }),
    ]);

    return res.status(200).json({
      ok: true,
      contacts: contactsResult?.records?.[0]?.id,
      leads: leadsResult?.records?.[0]?.id,
    });
  } catch (err) {
    console.error("Contact API failed:", err);
    return res.status(500).json({
      error: "Server error",
      details: String(err?.message || err),
    });
  }
}
