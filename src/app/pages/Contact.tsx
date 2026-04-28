import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  AlertCircle,
  Package,
  Car,
  MessageSquare,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    pickupLocation: "",
    deliveryLocation: "",
    vehicleType: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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
        throw new Error(data.error || "Failed to submit form");
      }

      setIsSubmitted(true);

      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "form_submit", {
          form_name: "contact",
        });
      }

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          companyName: "",
          email: "",
          phone: "",
          pickupLocation: "",
          deliveryLocation: "",
          vehicleType: "",
          message: "",
        });
      }, 5000);
    } catch (err: any) {
      console.error("Contact form error:", err);
      setError(
        err.message ||
          "Failed to submit form. Please try again or contact me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-neutral-900">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-orange-500">Freedom Line</span>
            </h1>

            <p className="text-xl text-gray-300 mb-4">
              Text is preferred for fastest response. Relay service and email
              are also available.
            </p>

            <p className="text-lg text-orange-400 font-bold max-w-3xl">
              Owner operated vehicle delivery and courier support across
              Arizona.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <p className="text-gray-400 mb-8">
                Need a vehicle moved or a courier delivery? Send the details and
                I will respond as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 border border-orange-500/20">
                    <MessageSquare className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Text Only</h3>
                    <p className="text-gray-300">480-742-8553</p>
                    <p className="text-gray-400 text-sm">
                      Fastest response by text
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 border border-orange-500/20">
                    <Phone className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      Relay Service
                    </h3>
                    <p className="text-gray-300">480-919-8088</p>
                    <p className="text-gray-400 text-sm">
                      Relay service supported
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 border border-orange-500/20">
                    <Mail className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email</h3>
                    <p className="text-gray-300">dispatch@flfreightco.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 border border-orange-500/20">
                    <MapPin className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Service Area</h3>
                    <p className="text-gray-300">Based in Arizona</p>
                    <p className="text-gray-300">
                      Phoenix metro and statewide Arizona
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-neutral-900 rounded-lg border border-neutral-700">
                <h3 className="font-bold text-white mb-3">Business Hours</h3>
                <div className="space-y-1 text-sm text-gray-300">
                  <p>Monday to Friday: 9:00 AM to 6:00 PM</p>
                  <p>Saturday: 10:00 AM to 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-neutral-900 rounded-lg border border-neutral-700">
                <h3 className="font-bold text-white mb-3">What I Handle</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start">
                    <Car
                      className="text-orange-500 mr-3 flex-shrink-0 mt-0.5"
                      size={18}
                    />
                    <span>
                      Cars, SUVs, small light duty trucks, and luxury vehicles
                    </span>
                  </div>

                  <div className="flex items-start">
                    <Package
                      className="text-orange-500 mr-3 flex-shrink-0 mt-0.5"
                      size={18}
                    />
                    <span>
                      Auto parts, business items, documents, and small packages
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700">
                {/* Fast Text Box */}
                <div className="bg-orange-500/10 border border-orange-500/40 rounded-lg p-6 mb-8 text-center">
                  <h2 className="text-2xl font-bold text-white mb-3">
                    Fastest Response by Text
                  </h2>

                  <p className="text-gray-300 mb-5">
                    Prefer a quick quote? Tap below to text me directly.
                  </p>

                  <a
                    href="sms:4807428553?body=Hi Sean, I need a vehicle delivery quote."
                    className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-md font-bold hover:bg-orange-600 transition-colors"
                  >
                    Tap to Text Me
                  </a>

                  <p className="text-sm text-gray-400 mt-4">
                    Text only: 480-742-8553
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-white mb-6">
                  Send Me Your <span className="text-orange-500">Details</span>
                </h2>

                {isSubmitted ? (
                  <div className="bg-green-900/30 border border-green-600 text-green-100 p-8 rounded-lg text-center">
                    <div className="text-green-400 mb-4">
                      <Check size={56} className="mx-auto" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>

                    <p className="text-lg">
                      Thank you for contacting me. I will review your details
                      and respond as soon as possible during business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-900/30 border border-red-600 text-red-100 p-4 rounded-lg flex items-start">
                        <AlertCircle
                          className="text-red-400 mr-3 flex-shrink-0 mt-0.5"
                          size={20}
                        />
                        <div>
                          <p className="font-bold mb-1">Submission Error</p>
                          <p className="text-sm">{error}</p>
                          <p className="text-sm mt-2">
                            You can also reach me directly at{" "}
                            <a
                              href="mailto:dispatch@flfreightco.com"
                              className="underline text-orange-400"
                            >
                              dispatch@flfreightco.com
                            </a>{" "}
                            or text{" "}
                            <a
                              href="sms:4807428553?body=Hi Sean, I need help with vehicle delivery."
                              className="underline text-orange-400"
                            >
                              480-742-8553
                            </a>
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-bold text-white mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white disabled:opacity-50"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="companyName"
                          className="block text-sm font-bold text-white mb-2"
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
                          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white disabled:opacity-50"
                          placeholder="Your Company Name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-bold text-white mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white disabled:opacity-50"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-bold text-white mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white disabled:opacity-50"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="pickupLocation"
                          className="block text-sm font-bold text-white mb-2"
                        >
                          Pickup Location
                        </label>
                        <input
                          type="text"
                          id="pickupLocation"
                          name="pickupLocation"
                          value={formData.pickupLocation}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white disabled:opacity-50"
                          placeholder="Enter pickup location"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="deliveryLocation"
                          className="block text-sm font-bold text-white mb-2"
                        >
                          Delivery Location
                        </label>
                        <input
                          type="text"
                          id="deliveryLocation"
                          name="deliveryLocation"
                          value={formData.deliveryLocation}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white disabled:opacity-50"
                          placeholder="Enter delivery location"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="vehicleType"
                        className="block text-sm font-bold text-white mb-2"
                      >
                        Service Type / Vehicle or Item Type
                      </label>
                      <input
                        type="text"
                        id="vehicleType"
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white disabled:opacity-50"
                        placeholder="Sedan, SUV, F-250, auto parts, documents, small package"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-bold text-white mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        rows={6}
                        className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white disabled:opacity-50"
                        placeholder="Tell me pickup details, delivery details, timing, vehicle condition, or courier item details..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-500 text-white px-8 py-3 rounded-md font-bold hover:bg-orange-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="animate-pulse">Sending...</span>
                      ) : (
                        <>
                          Send Details
                          <Send className="ml-2" size={20} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="bg-neutral-900 py-16 border-t border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              My <span className="text-orange-500">Service Area</span>
            </h2>

            <div className="text-lg text-gray-300 max-w-3xl mx-auto space-y-1">
              <p className="font-semibold text-white">
                Primary service area: Arizona statewide
              </p>
              <p>Nearby states available by request only</p>
              <p className="text-sm text-gray-400">
                Out of state delivery is limited and scheduled based on
                availability
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-800 rounded-lg border border-orange-500/30 p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center justify-center">
                  <Check
                    className="text-orange-500 mr-3 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-xl font-bold text-orange-500">
                    Arizona Statewide
                  </span>
                </div>

                <div className="flex items-center justify-center">
                  <Check
                    className="text-gray-500 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-lg text-gray-300">Nevada</span>
                </div>

                <div className="flex items-center justify-center">
                  <Check
                    className="text-gray-500 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-lg text-gray-300">New Mexico</span>
                </div>

                <div className="flex items-center justify-center">
                  <Check
                    className="text-gray-500 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-lg text-gray-300">Utah</span>
                </div>

                <div className="flex items-center justify-center sm:col-span-2 md:col-span-2">
                  <Check
                    className="text-gray-500 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-lg text-gray-300">
                    Southern California
                  </span>
                </div>
              </div>

              <div className="border-t border-neutral-700 pt-6 text-center">
                <p className="text-gray-300">
                  Based in Arizona, I specialize in reliable local and regional
                  vehicle delivery, with limited out of state service available
                  by request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
