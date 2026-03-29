
Sean Jackson <seanplus73@gmail.com>
5:02 PM (0 minutes ago)
to me

import { useState } from "react";
import {
  Car,
  Package,
  MapPin,
  Calendar,
  Send,
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export function RequestPickup() {
  const [formData, setFormData] = useState({
    customerName: "",
    companyName: "",
    customerEmail: "",
    customerPhone: "",
    serviceCategory: "",
    serviceType: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    vinNumber: "",
    itemType: "",
    itemDescription: "",
    vehicleCondition: "Runs and Drives (Fully Operable)",
    pickupAddress: "",
    pickupCity: "",
    pickupState: "",
    pickupZip: "",
    dropoffAddress: "",
    dropoffCity: "",
    dropoffState: "",
    dropoffZip: "",
    preferredPickupDate: "",
    notes: "",
    operableConfirmation: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const isVehicleService = formData.serviceCategory === "vehicle";
  const isLocalDeliveryService = formData.serviceCategory === "delivery";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const payload = {
        ...formData,
        vehicleCondition: isVehicleService ? formData.vehicleCondition : "",
        vehicleMake: isVehicleService ? formData.vehicleMake : "",
        vehicleModel: isVehicleService ? formData.vehicleModel : "",
        vehicleYear: isVehicleService ? formData.vehicleYear : "",
        vinNumber: isVehicleService ? formData.vinNumber : "",
        itemType: isLocalDeliveryService ? formData.itemType : "",
        itemDescription: isLocalDeliveryService ? formData.itemDescription : "",
        operableConfirmation: isVehicleService ? formData.operableConfirmation : false,
      };

      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Response status:", response.status);
      console.log(
        "Response headers:",
        Object.fromEntries(response.headers.entries())
      );

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Non-JSON response:", text.substring(0, 500));
        throw new Error(
          "Server returned invalid response. Please try again or contact me directly."
        );
      }

      const data = await response.json();

      if (!response.ok) {
        console.error("Full error response:", data);
        console.error("Airtable error:", data.airtableError);
        console.error("Fields sent:", data.fieldsSent);

        const errorMessage = data.error || "Failed to submit quote request";
        const detailsMessage = data.airtableError
          ? `\n\nDetails: ${data.airtableError}`
          : "";
        throw new Error(errorMessage + detailsMessage);
      }

      console.log("Quote form success:", data);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          customerName: "",
          companyName: "",
          customerEmail: "",
          customerPhone: "",
          serviceCategory: "",
          serviceType: "",
          vehicleMake: "",
          vehicleModel: "",
          vehicleYear: "",
          vinNumber: "",
          itemType: "",
          itemDescription: "",
          vehicleCondition: "Runs and Drives (Fully Operable)",
          pickupAddress: "",
          pickupCity: "",
          pickupState: "",
          pickupZip: "",
          dropoffAddress: "",
          dropoffCity: "",
          dropoffState: "",
          dropoffZip: "",
          preferredPickupDate: "",
          notes: "",
          operableConfirmation: false,
        });
      }, 5000);
    } catch (err: any) {
      console.error("Quote form error:", err);
      setError(
        err.message ||
          "Failed to submit quote request. Please try again or contact me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-neutral-900">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Request a <span className="text-orange-500">Quote</span>
            </h1>

            <p className="text-xl text-gray-300 mb-4">
              Request a quote for vehicle pickup and delivery or same-day local
              delivery for luggage, documents, small packages, and auto parts.
            </p>

            <p className="text-lg text-orange-400 font-bold">
              Owner-operated with direct communication, careful handling, and
              dependable service.
            </p>

            <div className="mt-6 bg-orange-900/30 border-l-4 border-orange-500 p-4 rounded">
              <p className="text-orange-100 font-semibold text-lg">
                Vehicle transport is for operable vehicles only. I drive your
                vehicle. I do not tow or trailer it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-800 rounded-lg border border-neutral-700 p-8">
            {isSubmitted ? (
              <div className="bg-green-900/30 border border-green-600 text-green-100 p-8 rounded-lg text-center">
                <div className="text-green-400 mb-4">
                  <Send size={56} className="mx-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Request Submitted!</h3>
                <p className="text-lg">
                  Thank you for your request. I will review your details and get
                  back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {error && (
                  <div className="bg-red-900/30 border border-red-600 text-red-100 p-4 rounded-lg flex items-start">
                    <AlertCircle
                      className="text-red-400 mr-3 flex-shrink-0 mt-0.5"
                      size={20}
                    />
                    <div>
                      <p className="font-bold mb-1">Submission Error</p>
                      <p className="text-sm whitespace-pre-line">{error}</p>
                      <p className="text-sm mt-2">
                        You can also contact me directly at{" "}
                        <a
                          href="mailto:dispatch@flfreightco.com"
                          className="underline text-orange-400"
                        >
                          dispatch@flfreightco.com
                        </a>{" "}
                        or text{" "}
                        <a
                          href="sms:480-742-8553"
                          className="underline text-orange-400"
                        >
                          480-742-8553
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                )}

                {/* Service Type */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      {isLocalDeliveryService ? (
                        <Package className="text-white" size={20} />
                      ) : (
                        <Car className="text-white" size={20} />
                      )}
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      Service Information
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="serviceCategory"
                        className="block text-sm font-bold text-gray-300 mb-2"
                      >
                        Quote Type *
                      </label>
                      <select
                        id="serviceCategory"
                        name="serviceCategory"
                        value={formData.serviceCategory}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                      >
                        <option value="">Select quote type</option>
                        <option value="vehicle">Vehicle Pickup & Delivery</option>
                        <option value="delivery">
                          Same-Day Local Delivery
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="serviceType"
                        className="block text-sm font-bold text-gray-300 mb-2"
                      >
                        Service Type *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting || !formData.serviceCategory}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                      >
                        <option value="">Select service type</option>

                        {isVehicleService && (
                          <>
                            <option value="Local Vehicle Transport (0-25 miles)">
                              Local Vehicle Transport (0-25 miles)
                            </option>
                            <option value="Extended Local Vehicle Transport (25-50 miles)">
                              Extended Local Vehicle Transport (25-50 miles)
                            </option>
                            <option value="Regional Vehicle Transport (50-150 miles)">
                              Regional Vehicle Transport (50-150 miles)
                            </option>
                            <option value="Long Distance Vehicle Transport (150+ miles)">
                              Long Distance Vehicle Transport (150+ miles)
                            </option>
                            <option value="Dealer or Auction Pickup">
                              Dealer or Auction Pickup
                            </option>
                            <option value="Private Party Vehicle Transport">
                              Private Party Vehicle Transport
                            </option>
                          </>
                        )}

                        {isLocalDeliveryService && (
                          <>
                            <option value="Airport Luggage Delivery">
                              Airport Luggage Delivery
                            </option>
                            <option value="Small Package Delivery">
                              Small Package Delivery
                            </option>
                            <option value="Document Delivery">
                              Document Delivery
                            </option>
                            <option value="Auto Parts Delivery">
                              Auto Parts Delivery
                            </option>
                            <option value="Custom Local Delivery">
                              Custom Local Delivery
                            </option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Vehicle Information */}
                {isVehicleService && (
                  <div>
                    <div className="mb-8 bg-orange-900/20 border border-orange-500 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-orange-400 mb-2">
                        Important: Operable Vehicles Only
                      </h3>
                      <p className="text-orange-100 text-lg">
                        Vehicle transport is for vehicles that start, steer,
                        brake, and drive safely.
                      </p>
                    </div>

                    <div className="flex items-center mb-6">
                      <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                        <Car className="text-white" size={20} />
                      </div>
                      <h2 className="text-2xl font-bold text-white">
                        Vehicle Information
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="vehicleCondition"
                          className="block text-sm font-bold text-gray-300 mb-2"
                        >
                          Vehicle Condition *
                        </label>
                        <select
                          id="vehicleCondition"
                          name="vehicleCondition"
                          value={formData.vehicleCondition}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                        >
                          <option value="Runs and Drives (Fully Operable)">
                            Runs and Drives (Fully Operable)
                          </option>
                        </select>
                        <p className="text-sm text-gray-400 mt-1">
                          Operable vehicles only
                        </p>
                      </div>

                      <div>
                        <label
                          htmlFor="vinNumber"
                          className="block text-sm font-bold text-gray-300 mb-2"
                        >
                          VIN Number
                        </label>
                        <input
                          type="text"
                          id="vinNumber"
                          name="vinNumber"
                          value={formData.vinNumber}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                          placeholder="1HGCM82633A004352"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="vehicleMake"
                          className="block text-sm font-bold text-gray-300 mb-2"
                        >
                          Make *
                        </label>
                        <input
                          type="text"
                          id="vehicleMake"
                          name="vehicleMake"
                          value={formData.vehicleMake}
                          onChange={handleChange}
                          required={isVehicleService}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                          placeholder="Toyota, Ford, Honda"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="vehicleModel"
                          className="block text-sm font-bold text-gray-300 mb-2"
                        >
                          Model *
                        </label>
                        <input
                          type="text"
                          id="vehicleModel"
                          name="vehicleModel"
                          value={formData.vehicleModel}
                          onChange={handleChange}
                          required={isVehicleService}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                          placeholder="Camry, Accord, F-150"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="vehicleYear"
                          className="block text-sm font-bold text-gray-300 mb-2"
                        >
                          Year *
                        </label>
                        <input
                          type="number"
                          id="vehicleYear"
                          name="vehicleYear"
                          value={formData.vehicleYear}
                          onChange={handleChange}
                          required={isVehicleService}
                          min="1900"
                          max="2030"
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                          placeholder="2020"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Delivery Item Information */}
                {isLocalDeliveryService && (
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                        <Package className="text-white" size={20} />
                      </div>
                      <h2 className="text-2xl font-bold text-white">
                        Delivery Item Information
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="itemType"
                          className="block text-sm font-bold text-gray-300 mb-2"
                        >
                          Item Type *
                        </label>
                        <input
                          type="text"
                          id="itemType"
                          name="itemType"
                          value={formData.itemType}
                          onChange={handleChange}
                          required={isLocalDeliveryService}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                          placeholder="Luggage, documents, small packages, auto parts"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="itemDescription"
                          className="block text-sm font-bold text-gray-300 mb-2"
                        >
                          Item Description
                        </label>
                        <input
                          type="text"
                          id="itemDescription"
                          name="itemDescription"
                          value={formData.itemDescription}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                          placeholder="Number of bags, box size, document envelope, auto part details"
                        />
                      </div>
                    </div>

                    <div className="mt-4 bg-orange-900/20 border border-orange-500 p-4 rounded-lg">
                      <p className="text-orange-100">
                        Local delivery is intended for luggage, personal items,
                        documents, small packages, and auto parts only.
                      </p>
                    </div>
                  </div>
                )}

                {/* Pickup Location */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      Pickup Location
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label
                        htmlFor="pickupAddress"
                        className="block text-sm font-bold text-gray-300 mb-2"
                      >
                        Street Address *
                      </label>
                      <input
                        type="text"
                        id="pickupAddress"
                        name="pickupAddress"
                        value={formData.pickupAddress}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                        placeholder="123 Main Street"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label
                          htmlFor="pickupCity"
                          className="block text-sm font-bold text-gray-300 mb-2"
                        >
                          City *
                        </label>
                        <input
                          type="text"
                          id="pickupCity"
                          name="pickupCity"
                          value={formData.pickupCity}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                          placeholder="Phoenix"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="pickupState"
                          className="block text-sm font-bold text-gray-300 mb-2"
                        >
                          State *
                        </label>
                        <input
                          type="text"
                          id="pickupState"
                          name="pickupState"
                          value={formData.pickupState}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                          placeholder="AZ"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="pickupZip"
                          className="block text-sm font-bold text-gray-300 mb-2"
                        >
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          id="pickupZip"
                          name="pickupZip"
                          value={formData.pickupZip}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                          placeholder="85001"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Location */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      Delivery Location
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label
                        htmlFor="dropoffAddress"
                        className="block text-sm font-bold text-gray-300 mb-2"
                      >
                        Street Address *
                      </label>
                      <input
                        type="text"
                        id="dropoffAddress"
                        name="dropoffAddress"
                        value={formData.dropoffAddress}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                        placeholder="456 Oak Avenue"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label
                          htmlFor="dropoffCity"
                          className="block text-sm font-bold text-gray-300 mb-2"
                        >
                          City *
                        </label>
                        <input
                          type="text"
                          id="dropoffCity"
                          name="dropoffCity"
                          value={formData.dropoffCity}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                          placeholder="Tucson"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="dropoffState"
                          className="block text-sm font-bold text-gray-300 mb-2"
                        >
                          State *
                        </label>
                        <input
                          type="text"
                          id="dropoffState"
                          name="dropoffState"
                          value={formData.dropoffState}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                          placeholder="AZ"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="dropoffZip"
                          className="block text-sm font-bold text-gray-300 mb-2"
                        >
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          id="dropoffZip"
                          name="dropoffZip"
                          value={formData.dropoffZip}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                          placeholder="85701"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Your Contact Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="customerName"
                        className="block text-sm font-bold text-gray-300 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="customerName"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-sm font-bold text-gray-300 mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                        placeholder="ABC Company"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="customerEmail"
                        className="block text-sm font-bold text-gray-300 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="customerEmail"
                        name="customerEmail"
                        value={formData.customerEmail}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="customerPhone"
                        className="block text-sm font-bold text-gray-300 mb-2"
                      >
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="customerPhone"
                        name="customerPhone"
                        value={formData.customerPhone}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="notes"
                      className="block text-sm font-bold text-gray-300 mb-2"
                    >
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      rows={5}
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                      placeholder="Special instructions, gate codes, number of bags or boxes, delivery details, or anything else I should know..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="preferredPickupDate"
                      className="block text-sm font-bold text-gray-300 mb-2"
                    >
                      Preferred Pickup Date (Optional)
                    </label>
                    <input
                      type="date"
                      id="preferredPickupDate"
                      name="preferredPickupDate"
                      value={formData.preferredPickupDate}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                    />
                    <p className="text-sm text-gray-400 mt-1">
                      This helps with scheduling and route planning. It is a
                      preferred date only.
                    </p>
                  </div>
                </div>

                {/* Vehicle Confirmation */}
                {isVehicleService && (
                  <div className="bg-orange-900/20 border border-orange-500 p-6 rounded-lg">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="operableConfirmation"
                        checked={formData.operableConfirmation}
                        onChange={handleChange}
                        required={isVehicleService}
                        disabled={isSubmitting}
                        className="mt-1 h-5 w-5 rounded border-neutral-600 bg-neutral-900 text-orange-500 focus:ring-orange-500"
                      />
                      <div>
                        <p className="text-white font-bold text-lg">
                          I confirm the vehicle starts, steers, brakes, and
                          drives safely. Operable vehicles only. *
                        </p>
                        <p className="text-gray-300 text-sm mt-1">
                          Vehicle must be road-legal and safe to drive.
                        </p>
                      </div>
                    </label>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    (isVehicleService && !formData.operableConfirmation)
                  }
                  className="w-full bg-orange-500 text-white px-8 py-4 rounded-md font-bold text-xl hover:bg-orange-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending Request...</span>
                  ) : (
                    <>
                      Submit Request
                      <Send className="ml-2" size={22} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-neutral-900 py-16 border-t border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Fast Response
              </h3>
              <p className="text-gray-400">
                Quick review and response during business hours.
              </p>
            </div>

            <div>
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Fully Insured
              </h3>
              <p className="text-gray-400">
                Vehicle transport is fully insured during pickup, transport, and
                delivery.
              </p>
            </div>

            <div>
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Door-to-Door Service
              </h3>
              <p className="text-gray-400">
                Convenient pickup and delivery directly to your specified
                locations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RequestPickup;
