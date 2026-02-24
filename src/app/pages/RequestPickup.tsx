import { useState } from "react";
import { Car, MapPin, Calendar, Send, Shield, Clock, CheckCircle } from "lucide-react";

export default function RequestPickup() {
  const [formData, setFormData] = useState({
    vehicleType: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    vehicleCondition: "",
    pickupAddress: "",
    pickupCity: "",
    pickupState: "",
    pickupZip: "",
    deliveryAddress: "",
    deliveryCity: "",
    deliveryState: "",
    deliveryZip: "",
    pickupDate: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    console.log("Pickup request submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        vehicleType: "",
        vehicleMake: "",
        vehicleModel: "",
        vehicleYear: "",
        vehicleCondition: "",
        pickupAddress: "",
        pickupCity: "",
        pickupState: "",
        pickupZip: "",
        deliveryAddress: "",
        deliveryCity: "",
        deliveryState: "",
        deliveryZip: "",
        pickupDate: "",
        name: "",
        email: "",
        phone: "",
        notes: "",
      });
    }, 3000);
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
              Get an instant mileage-based quote in seconds. Fill out the form below and we'll calculate your rate based on distance and vehicle type.
            </p>
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
                  Thank you for your pickup request. We'll send you a detailed quote within 30 minutes based on your mileage and vehicle details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
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
                      <label htmlFor="vehicleType" className="block text-sm font-bold text-gray-300 mb-2">
                        Vehicle Type *
                      </label>
                      <select
                        id="vehicleType"
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="">Select vehicle type</option>
                        <option value="sedan">Sedan</option>
                        <option value="suv">SUV</option>
                        <option value="truck">Light Truck (F-250/2500 class)</option>
                        <option value="luxury">Luxury Vehicle</option>
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
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="">Select condition</option>
                        <option value="running">Running/Operable</option>
                        <option value="inoperable">Inoperable</option>
                      </select>
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

                    <div>
                      <label htmlFor="pickupDate" className="block text-sm font-bold text-gray-300 mb-2">
                        Preferred Pickup Date *
                      </label>
                      <input
                        type="date"
                        id="pickupDate"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
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
                      <label htmlFor="deliveryAddress" className="block text-sm font-bold text-gray-300 mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        id="deliveryAddress"
                        name="deliveryAddress"
                        value={formData.deliveryAddress}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="456 Oak Avenue"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="deliveryCity" className="block text-sm font-bold text-gray-300 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          id="deliveryCity"
                          name="deliveryCity"
                          value={formData.deliveryCity}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Tucson"
                        />
                      </div>

                      <div>
                        <label htmlFor="deliveryState" className="block text-sm font-bold text-gray-300 mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          id="deliveryState"
                          name="deliveryState"
                          value={formData.deliveryState}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="AZ"
                        />
                      </div>

                      <div>
                        <label htmlFor="deliveryZip" className="block text-sm font-bold text-gray-300 mb-2">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          id="deliveryZip"
                          name="deliveryZip"
                          value={formData.deliveryZip}
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
                      <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-300 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
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

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors flex items-center justify-center"
                >
                  Get Instant Quote
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
