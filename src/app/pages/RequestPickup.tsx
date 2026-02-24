import { useState } from "react";
import { Truck, MapPin, Calendar, MessageSquare, CheckCircle } from "lucide-react";

/**
 * Request Pickup Page - Freedom Line Freight Express
 * Form for customers to request vehicle transport quotes
 */
export default function RequestPickup() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, this would send the form data to a backend
    setFormSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Request a Pickup
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fill out the form below to receive a custom quote for your vehicle transport needs. 
            I'll respond with pricing and availability as soon as possible.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            {formSubmitted ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-3">
                  Request Submitted Successfully!
                </h2>
                <p className="text-gray-300">
                  Thank you for your request. I'll review your information and get back to you 
                  with a custom quote as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">Transport Details</h2>

                {/* Contact Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 mb-2">
                        Phone Number (Text Preferred) *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Location Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Pickup & Delivery Locations</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="pickupLocation" className="block text-gray-300 mb-2">
                        Pickup Location (City, State) *
                      </label>
                      <input
                        type="text"
                        id="pickupLocation"
                        name="pickupLocation"
                        required
                        placeholder="e.g., Phoenix, AZ"
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="deliveryLocation" className="block text-gray-300 mb-2">
                        Delivery Location (City, State) *
                      </label>
                      <input
                        type="text"
                        id="deliveryLocation"
                        name="deliveryLocation"
                        required
                        placeholder="e.g., Las Vegas, NV"
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Vehicle Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Vehicle Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="vehicleYear" className="block text-gray-300 mb-2">
                        Year *
                      </label>
                      <input
                        type="text"
                        id="vehicleYear"
                        name="vehicleYear"
                        required
                        placeholder="2020"
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="vehicleMake" className="block text-gray-300 mb-2">
                        Make *
                      </label>
                      <input
                        type="text"
                        id="vehicleMake"
                        name="vehicleMake"
                        required
                        placeholder="Toyota"
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="vehicleModel" className="block text-gray-300 mb-2">
                        Model *
                      </label>
                      <input
                        type="text"
                        id="vehicleModel"
                        name="vehicleModel"
                        required
                        placeholder="Camry"
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="vehicleType" className="block text-gray-300 mb-2">
                      Vehicle Type *
                    </label>
                    <select
                      id="vehicleType"
                      name="vehicleType"
                      required
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                    >
                      <option value="">Select vehicle type</option>
                      <option value="car">Car</option>
                      <option value="truck">Truck</option>
                      <option value="suv">SUV</option>
                      <option value="motorcycle">Motorcycle</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="vehicleCondition" className="block text-gray-300 mb-2">
                      Vehicle Condition
                    </label>
                    <select
                      id="vehicleCondition"
                      name="vehicleCondition"
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                    >
                      <option value="running">Running/Operable</option>
                      <option value="not-running">Not Running/Inoperable</option>
                    </select>
                  </div>
                </div>

                {/* Timeline */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Timeline</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="pickupDate" className="block text-gray-300 mb-2">
                        Preferred Pickup Date
                      </label>
                      <input
                        type="date"
                        id="pickupDate"
                        name="pickupDate"
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-gray-300 mb-2">
                        Timeline Flexibility
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                      >
                        <option value="asap">ASAP</option>
                        <option value="flexible">Flexible (1-2 weeks)</option>
                        <option value="very-flexible">Very Flexible (2+ weeks)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mb-8">
                  <label htmlFor="additionalInfo" className="block text-gray-300 mb-2">
                    Additional Information or Special Requests
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={4}
                    placeholder="Any additional details about your transport needs..."
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Submit Request for Quote
                </button>

                <p className="text-gray-400 text-sm mt-4 text-center">
                  * Required fields. I'll respond to your request as soon as possible.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
              <h3 className="text-xl font-bold text-white mb-4">What Happens Next?</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">Review</h4>
                    <p className="text-gray-400 text-sm">
                      I'll review your transport details
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">Quote</h4>
                    <p className="text-gray-400 text-sm">
                      Receive your custom pricing quote
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">Schedule</h4>
                    <p className="text-gray-400 text-sm">
                      Coordinate pickup and delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
              <Truck className="w-8 h-8 text-orange-500 mb-3" />
              <h3 className="font-bold text-white mb-2">Service Areas</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Arizona</li>
                <li>• Nevada</li>
                <li>• New Mexico</li>
                <li>• Utah</li>
                <li>• Southern California</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <MessageSquare className="w-8 h-8 text-orange-500 mb-3" />
              <h3 className="font-bold text-white mb-2">Preferred Contact</h3>
              <p className="text-gray-400 text-sm">
                Text messages and email are the preferred methods of communication. 
                Video relay services are also available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
