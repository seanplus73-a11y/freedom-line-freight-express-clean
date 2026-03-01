import { useState } from "react";
import { Car, MapPin, Calendar, Send, Shield, Clock, CheckCircle, AlertCircle } from "lucide-react";

export default function RequestPickup() {
  const [formData, setFormData] = useState({
    customerName: "",
    companyName: "",
    customerEmail: "",
    customerPhone: "",
    serviceType: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    vinNumber: "",
    vehicleCondition: "Runs and Drives (Fully Operable)",
    pickupAddress: "",
    pickupCity: "",
    pickupState: "",
    pickupZip: "",
    dropoffAddress: "",
    dropoffCity: "",
    dropoffState: "",
    dropoffZip: "",
    notes: "",
    operableConfirmation: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Debug: Check response
      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      
      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error('Non-JSON response:', text.substring(0, 500));
        throw new Error('Server returned invalid response. Please try again or contact me directly.');
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit quote request');
      }

      console.log('Quote form success:', data);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          customerName: "",
          companyName: "",
          customerEmail: "",
          customerPhone: "",
          serviceType: "",
          vehicleMake: "",
          vehicleModel: "",
          vehicleYear: "",
          vinNumber: "",
          vehicleCondition: "Runs and Drives (Fully Operable)",
          pickupAddress: "",
          pickupCity: "",
          pickupState: "",
          pickupZip: "",
          dropoffAddress: "",
          dropoffCity: "",
          dropoffState: "",
          dropoffZip: "",
          notes: "",
          operableConfirmation: false,
        });
      }, 5000);

    } catch (err: any) {
      console.error('Quote form error:', err);
      setError(err.message || 'Failed to submit quote request. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-neutral-900">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Request Vehicle <span className="text-orange-500">Pickup & Delivery</span>
            </h1>
            <p className="text-xl text-gray-300">
              Get an instant mileage based quote in seconds. Fill out the form below and I'll calculate your rate based on distance and vehicle type.
            </p>
            <div className="mt-6 bg-orange-900/30 border-l-4 border-orange-500 p-4 rounded">
              <p className="text-orange-100 font-semibold text-lg">
                I drive your vehicle. I do not tow or trailer it.
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
                  Thank you for your pickup request. I'll send you a detailed quote within 30 minutes based on your mileage and vehicle details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Important Notice */}
                <div className="mb-8 bg-orange-900/20 border border-orange-500 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-orange-400 mb-2">Important: Operable Vehicles Only</h3>
                  <p className="text-orange-100 text-lg">
                    I drive your vehicle. I do not tow or trailer it.
                  </p>
                </div>

                {/* Vehicle Information */}
                <div className="mb-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <Car className="text-white" size={20} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Vehicle Information</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-bold text-gray-300 mb-2">
                        Service Type *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="">Select service type</option>
                        <option value="Local Vehicle Transport (0 to 50 miles)">Local Vehicle Transport (0 to 50 miles)</option>
                        <option value="Long Distance Vehicle Transport (Interstate)">Long Distance Vehicle Transport (Interstate)</option>
                        <option value="Dealer or Auction Pickup">Dealer or Auction Pickup</option>
                        <option value="Private Party Vehicle Transport">Private Party Vehicle Transport</option>
                        <option value="Multi Vehicle Transport">Multi Vehicle Transport</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="vehicleCondition" className="block text-sm font-bold text-gray-300 mb-2">
                        Vehicle Condition *
                      </label>
                      <select
                        id="vehicleCondition"
                        name="vehicleCondition"
                        value={formData.vehicleCondition}
                        onChange={handleChange}
                        required
                        disabled
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="Runs and Drives (Fully Operable)">Runs and Drives (Fully Operable)</option>
                      </select>
                      <p className="text-sm text-gray-400 mt-1">Operable vehicles only</p>
                    </div>

                    <div>
                      <label htmlFor="vehicleMake" className="block text-sm font-bold text-gray-300 mb-2">
                        Make *
                      </label>
                      <input
                        type="text"
                        id="vehicleMake"
                        name="vehicleMake"
                        value={formData.vehicleMake}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Toyota, Ford, etc."
                      />
                    </div>

                    <div>
                      <label htmlFor="vehicleModel" className="block text-sm font-bold text-gray-300 mb-2">
                        Model *
                      </label>
                      <input
                        type="text"
                        id="vehicleModel"
                        name="vehicleModel"
                        value={formData.vehicleModel}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Camry, F-150, etc."
                      />
                    </div>

                    <div>
                      <label htmlFor="vehicleYear" className="block text-sm font-bold text-gray-300 mb-2">
                        Year *
                      </label>
                      <input
                        type="number"
                        id="vehicleYear"
                        name="vehicleYear"
                        value={formData.vehicleYear}
                        onChange={handleChange}
                        required
                        min="1900"
                        max="2026"
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="2020"
                      />
                    </div>

                    <div>
                      <label htmlFor="vinNumber" className="block text-sm font-bold text-gray-300 mb-2">
                        VIN Number
                      </label>
                      <input
                        type="text"
                        id="vinNumber"
                        name="vinNumber"
                        value={formData.vinNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="1HGCM82633A004352"
                      />
                    </div>
                  </div>
                </div>

                {/* Pickup Information */}
                <div className="mb-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Pickup Location</h2>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="pickupAddress" className="block text-sm font-bold text-gray-300 mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        id="pickupAddress"
                        name="pickupAddress"
                        value={formData.pickupAddress}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="123 Main Street"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="pickupCity" className="block text-sm font-bold text-gray-300 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          id="pickupCity"
                          name="pickupCity"
                          value={formData.pickupCity}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Phoenix"
                        />
                      </div>

                      <div>
                        <label htmlFor="pickupState" className="block text-sm font-bold text-gray-300 mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          id="pickupState"
                          name="pickupState"
                          value={formData.pickupState}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="AZ"
                        />
                      </div>

                      <div>
                        <label htmlFor="pickupZip" className="block text-sm font-bold text-gray-300 mb-2">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          id="pickupZip"
                          name="pickupZip"
                          value={formData.pickupZip}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="85001"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Information */}
                <div className="mb-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Delivery Location</h2>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="dropoffAddress" className="block text-sm font-bold text-gray-300 mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        id="dropoffAddress"
                        name="dropoffAddress"
                        value={formData.dropoffAddress}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="456 Oak Avenue"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="dropoffCity" className="block text-sm font-bold text-gray-300 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          id="dropoffCity"
                          name="dropoffCity"
                          value={formData.dropoffCity}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Tucson"
                        />
                      </div>

                      <div>
                        <label htmlFor="dropoffState" className="block text-sm font-bold text-gray-300 mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          id="dropoffState"
                          name="dropoffState"
                          value={formData.dropoffState}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="AZ"
                        />
                      </div>

                      <div>
                        <label htmlFor="dropoffZip" className="block text-sm font-bold text-gray-300 mb-2">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          id="dropoffZip"
                          name="dropoffZip"
                          value={formData.dropoffZip}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="85701"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Your Contact Information</h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="customerName" className="block text-sm font-bold text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="customerName"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-sm font-bold text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="ABC Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="customerEmail" className="block text-sm font-bold text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="customerEmail"
                        name="customerEmail"
                        value={formData.customerEmail}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="customerPhone" className="block text-sm font-bold text-gray-300 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="customerPhone"
                        name="customerPhone"
                        value={formData.customerPhone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="notes" className="block text-sm font-bold text-gray-300 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Special instructions, gate codes, or other details..."
                    />
                  </div>
                </div>

                {/* Required Confirmation Checkbox */}
                <div className="mb-8 bg-neutral-700/50 p-6 rounded-lg border-2 border-orange-500/50">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="operableConfirmation"
                      name="operableConfirmation"
                      checked={formData.operableConfirmation}
                      onChange={handleChange}
                      required
                      className="mt-1 w-5 h-5 text-orange-500 bg-neutral-900 border-neutral-600 rounded focus:ring-orange-500 focus:ring-2"
                    />
                    <label htmlFor="operableConfirmation" className="ml-3 block">
                      <span className="text-white font-bold text-lg">
                        I confirm the vehicle starts, steers, brakes, and drives safely. Operable vehicles only. *
                      </span>
                      <p className="text-gray-300 mt-2">
                        Vehicle must be fully operable, road legal, and safe to drive.
                      </p>
                    </label>
                  </div>
                </div>

                {error && (
                  <div className="bg-red-900/30 border border-red-600 text-red-100 p-8 rounded-lg text-center mb-8">
                    <div className="text-red-400 mb-4">
                      <AlertCircle size={56} className="mx-auto" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Error!</h3>
                    <p className="text-lg">
                      {error}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Get Instant Quote'}
                  <Send className="ml-2" size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-black border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Response</h3>
              <p className="text-gray-400">
                Receive your mileage-based quote within 30 minutes of submission.
              </p>
            </div>

            <div>
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fully Insured</h3>
              <p className="text-gray-400">
                Every vehicle is fully insured during pickup, transport, and delivery.
              </p>
            </div>

            <div>
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Door-to-Door Service</h3>
              <p className="text-gray-400">
                Convenient pickup and delivery directly to your specified locations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
