/**
 * Vercel Serverless Function - Quote Request Submission
 *
 * Receives quote requests from website form and creates a new Lead in Airtable
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed. Use POST.",
    });
  }

  console.log("📥 Quote request received");

  try {
    const body = req.body || {};
    console.log("📦 Request payload:", JSON.stringify(body, null, 2));

    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || "Leads";

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      console.error("❌ Missing Airtable configuration");
      return res.status(500).json({
        success: false,
        error: "Server configuration error. Please contact support.",
      });
    }

    if (!body.customerEmail) {
      return res.status(400).json({
        success: false,
        error: "Email is required",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.customerEmail)) {
      return res.status(400).json({
        success: false,
        error: `Invalid email format: ${body.customerEmail}`,
      });
    }

    if (!body.customerName) {
      return res.status(400).json({
        success: false,
        error: "Full name is required",
      });
    }

    if (!body.serviceType) {
      return res.status(400).json({
        success: false,
        error: "Service type is required",
      });
    }

    const isVehicleService =
      body.serviceType === "Local Vehicle Transport (0 to 50 miles)" ||
      body.serviceType === "Regional Vehicle Transport (50 to 150 miles)" ||
      body.serviceType === "Dealer or Auction Pickup" ||
      body.serviceType === "Private Party Vehicle Transport";

    const isItemService =
      body.serviceType === "Same-Day Local Delivery" ||
      body.serviceType === "Luggage Delivery" ||
      body.serviceType === "Small Package / Document Delivery" ||
      body.serviceType === "Auto Parts Delivery";

    if (isVehicleService) {
      if (!body.vehicleMake || !body.vehicleModel || !body.vehicleYear) {
        return res.status(400).json({
          success: false,
          error: "Vehicle make, model, and year are required for vehicle transport requests.",
        });
      }

      if (!body.operableConfirmation) {
        return res.status(400).json({
          success: false,
          error: "Operable vehicle confirmation is required for vehicle transport.",
        });
      }
    }

    if (isItemService) {
      if (!body.itemType) {
        return res.status(400).json({
          success: false,
          error: "Item type is required for local delivery requests.",
        });
      }
    }

    const pickupLocation = formatLocation(
      body.pickupAddress,
      body.pickupCity,
      body.pickupState,
      body.pickupZip
    );

    const deliveryLocation = formatLocation(
      body.dropoffAddress,
      body.dropoffCity,
      body.dropoffState,
      body.dropoffZip
    );

    const notesParts: string[] = [];

    if (body.notes) {
      notesParts.push(`Customer Notes: ${body.notes}`);
    }

    if (body.preferredPickupDate) {
      notesParts.push(`Preferred Pickup Date: ${body.preferredPickupDate}`);
    }

    if (isItemService) {
      if (body.itemType) {
        notesParts.push(`Item Type: ${body.itemType}`);
      }
      if (body.itemDetails) {
        notesParts.push(`Item Details: ${body.itemDetails}`);
      }
    }

    if (body.companyName) {
      notesParts.push(`Company Name: ${body.companyName}`);
    }

    const combinedNotes = notesParts.join("\n\n");

    const airtableFields: Record<string, any> = {
      L_FullName: body.customerName || "",
      L_Email: body.customerEmail || "",
      L_Phone: body.customerPhone || "",
      L_Status: "New Lead",
      L_PickupLocation: pickupLocation,
      L_DeliveryLocation: deliveryLocation,
      L_ServiceType: body.serviceType || "",
      L_Notes: combinedNotes,
      Q_Make: isVehicleService ? body.vehicleMake || "" : "",
      Q_Model: isVehicleService ? body.vehicleModel || "" : "",
      Q_VehicleYear: isVehicleService ? body.vehicleYear || "" : "",
      Q_VehicleCondition: isVehicleService
        ? body.vehicleCondition || "Runs and Drives (Fully Operable)"
        : "",
      Q_VIN: isVehicleService ? body.vinNumber || "" : "",
    };

    console.log("📝 Mapped Airtable fields:", JSON.stringify(airtableFields, null, 2));

    const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;

    console.log("🔗 Posting to Airtable:", airtableUrl);

    const airtableResponse = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: airtableFields,
      }),
    });

    if (!airtableResponse.ok) {
      const errorText = await airtableResponse.text();
      console.error("❌ Airtable API error:", airtableResponse.status, errorText);

      let errorDetails = errorText;
      try {
        const errorJson = JSON.parse(errorText);
        errorDetails = JSON.stringify(errorJson, null, 2);
      } catch {
        console.error("❌ Could not parse Airtable error as JSON");
      }

      return res.status(500).json({
        success: false,
        error: `Failed to save quote request: ${airtableResponse.status}`,
        airtableError: errorText,
        details: errorDetails,
        fieldsSent: Object.keys(airtableFields),
        helpText: "Check which Airtable field name was rejected.",
      });
    }

    const createdRecord = await airtableResponse.json();
    console.log("✅ Lead created successfully:", createdRecord.id);

    return res.status(200).json({
      success: true,
      message: "Quote request submitted successfully",
      recordId: createdRecord.id,
      fields: createdRecord.fields,
    });
  } catch (error) {
    console.error("❌ Unexpected error:", error);

    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Internal server error",
      details: error instanceof Error ? error.stack : undefined,
    });
  }
}

function formatLocation(
  address?: string,
  city?: string,
  state?: string,
  zip?: string
): string {
  const parts = [address, city, state, zip].filter(
    (part) => typeof part === "string" && part.trim()
  );
  return parts.join(", ");
}
