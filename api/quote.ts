import type { VercelRequest, VercelResponse } from "@vercel/node";

interface AirtableRecord {
  id: string;
  createdTime: string;
  fields: Record<string, any>;
}

interface AirtableResponse {
  records?: AirtableRecord[];
  error?: {
    type: string;
    message: string;
  };
}

function clean(value: any): string {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  try {
    const formData = req.body ?? {};

    const customerName = clean(formData.customerName);
    const customerEmail = clean(formData.customerEmail);
    const customerPhone = clean(formData.customerPhone);
    const serviceType = clean(formData.serviceType);

    const pickupAddress = clean(formData.pickupAddress);
    const pickupCity = clean(formData.pickupCity);
    const pickupState = clean(formData.pickupState);
    const pickupZip = clean(formData.pickupZip);

    const dropoffAddress = clean(formData.dropoffAddress);
    const dropoffCity = clean(formData.dropoffCity);
    const dropoffState = clean(formData.dropoffState);
    const dropoffZip = clean(formData.dropoffZip);

    const companyName = clean(formData.companyName);
    const vehicleMake = clean(formData.vehicleMake);
    const vehicleModel = clean(formData.vehicleModel);
    const vehicleYear = clean(formData.vehicleYear);
    const vehicleCondition = clean(formData.vehicleCondition);
    const vinNumber = clean(formData.vinNumber);
    const preferredPickupDate = clean(formData.preferredPickupDate);
    const notes = clean(formData.notes);
    const itemType = clean(formData.itemType);
    const itemDetails = clean(formData.itemDetails);

    console.log("Quote form submission received:", {
      customerName,
      customerEmail,
      serviceType,
      timestamp: new Date().toISOString(),
    });

    // Match Airtable single select options exactly
    const vehicleServiceTypes = [
      "Local Vehicle Transport (0 to 50 miles)",
      "Regional Vehicle Transport (50 to 150 miles)",
      "Long Distance Vehicle Transport (Interstate)",
      "Dealer or Auction Pickup",
      "Private Party Vehicle Transport",
    ];

    const nonVehicleServiceTypes = [
      "Direct Business Transport",
      "Luggage Transport",
      "Documents & Small Packages",
      "Auto Parts Transport",
    ];

    const isVehicleService = vehicleServiceTypes.includes(serviceType);
    const isNonVehicleService = nonVehicleServiceTypes.includes(serviceType);

    // Base required fields
    const requiredFields: Array<{ key: string; value: string | boolean }> = [
      { key: "customerName", value: customerName },
      { key: "customerEmail", value: customerEmail },
      { key: "customerPhone", value: customerPhone },
      { key: "serviceType", value: serviceType },
      { key: "pickupAddress", value: pickupAddress },
      { key: "pickupCity", value: pickupCity },
      { key: "pickupState", value: pickupState },
      { key: "pickupZip", value: pickupZip },
      { key: "dropoffAddress", value: dropoffAddress },
      { key: "dropoffCity", value: dropoffCity },
      { key: "dropoffState", value: dropoffState },
      { key: "dropoffZip", value: dropoffZip },
    ];

    // Vehicle-only required fields
    if (isVehicleService) {
      requiredFields.push(
        { key: "vehicleMake", value: vehicleMake },
        { key: "vehicleModel", value: vehicleModel },
        { key: "vehicleYear", value: vehicleYear },
        { key: "vehicleCondition", value: vehicleCondition },
        {
          key: "operableConfirmation",
          value: formData.operableConfirmation === true,
        }
      );
    }

    const missingFields = requiredFields
      .filter((field) => {
        if (typeof field.value === "boolean") return field.value !== true;
        return field.value === "";
      })
      .map((field) => field.key);

    if (missingFields.length > 0) {
      console.error("Validation failed. Missing fields:", missingFields.join(", "));
      return res.status(400).json({
        success: false,
        error: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    if (isVehicleService && formData.operableConfirmation !== true) {
      console.error("Validation failed: Operable confirmation not checked");
      return res.status(400).json({
        success: false,
        error: "You must confirm the vehicle is operable",
      });
    }

    // Get environment variables
    const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_LEADS = process.env.AIRTABLE_TABLE_LEADS;

    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_LEADS) {
      console.error("Missing Airtable environment variables");
      console.error("AIRTABLE_TOKEN exists:", !!AIRTABLE_TOKEN);
      console.error("AIRTABLE_BASE_ID exists:", !!AIRTABLE_BASE_ID);
      console.error("AIRTABLE_TABLE_LEADS exists:", !!AIRTABLE_TABLE_LEADS);

      return res.status(500).json({
        success: false,
        error:
          "Server configuration error. Please contact me directly at dispatch@flfreightco.com",
      });
    }

    const pickupLocation = `${pickupAddress}, ${pickupCity}, ${pickupState} ${pickupZip}`;
    const deliveryLocation = `${dropoffAddress}, ${dropoffCity}, ${dropoffState} ${dropoffZip}`;

    // Prepare Airtable payload
    const fields: Record<string, any> = {
      L_FullName: customerName,
      L_Email: customerEmail,
      L_Phone: customerPhone,
      L_PickupLocation: pickupLocation,
      L_DeliveryLocation: deliveryLocation,
      L_ServiceType: serviceType,
    };

    // Optional company
    if (companyName) {
      fields["L_Company"] = companyName;
    }

    // Vehicle fields
    if (isVehicleService) {
      if (vehicleMake) fields["Q_Make"] = vehicleMake;
      if (vehicleModel) fields["Q_Model"] = vehicleModel;
      if (vehicleYear) fields["Q_VehicleYear"] = vehicleYear;
      if (vehicleCondition) fields["Q_VehicleCondition"] = vehicleCondition;
      if (vinNumber) fields["Q_VIN"] = vinNumber;
    }

    // Non-vehicle fields
    if (isNonVehicleService) {
      if (itemType) {
        fields["Q_ItemType"] = itemType;
      }

      if (itemDetails) {
        fields["Q_ItemDetails"] = itemDetails;
      }
    }

    // Optional preferred pickup date
    if (preferredPickupDate) {
      fields["Q_PreferredPickupDate"] = preferredPickupDate;
    }

    // Optional notes
    if (notes) {
      fields["L_Notes"] = notes;
    }

    const airtablePayload = {
      records: [{ fields }],
    };

    console.log("Sending to Airtable Leads table...", {
      serviceType,
      isVehicleService,
      isNonVehicleService,
    });

    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_LEADS}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(airtablePayload),
      }
    );

    const airtableData = (await airtableResponse.json()) as AirtableResponse;

    console.log("Airtable response status:", airtableResponse.status);

    if (!airtableResponse.ok) {
      console.error("Airtable error:", JSON.stringify(airtableData));
      return res.status(500).json({
        success: false,
        error:
          "Failed to save quote request. Please try again or contact me directly.",
        details: airtableData,
      });
    }

    console.log(
      "Quote saved successfully. Record ID:",
      airtableData.records?.[0]?.id
    );

    return res.status(200).json({
      success: true,
      message: "Quote request submitted successfully",
      recordId: airtableData.records?.[0]?.id ?? null,
    });
  } catch (error) {
    console.error("Quote form error:", error);
    return res.status(500).json({
      success: false,
      error:
        "Server error. Please try again or contact me directly at dispatch@flfreightco.com",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
