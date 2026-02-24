import { Link } from "react-router";
import { Check, ArrowRight, Car, X, Truck } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Pricing() {
  const faqs = [
    {
      question: "How is pricing calculated?",
      answer: "Based on distance, vehicle type, and scheduling needs. We provide a transparent quote before pickup.",
    },
    {
      question: "Are there hidden fees?",
      answer: "No. All pricing is confirmed before dispatch. What you see is what you pay.",
    },
    {
      question: "Is my vehicle insured during transport?",
      answer: "Yes. All vehicles are fully insured during pickup, transport, and delivery.",
    },
    {
      question: "What types of vehicles do you transport?",
      answer: "We transport sedans, SUVs, small heavy-duty trucks (F-250/2500 class), and luxury vehicles. We do NOT transport commercial trucks, semi-trucks, or freight cargo.",
    },
  ];

  return (
    <div className="bg-neutral-900">
      {/* Header Section */}
      <section className="relative bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-neutral-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-neutral-700">
            <Car className="mr-2 text-orange-500" size={18} />
            Vehicle Pickup & Delivery Service
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent Vehicle <span className="text-orange-500">Transport Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simple distance-based pricing for safe and professional vehicle pickup and delivery. No hidden fees.
          </p>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-neutral-800 border-y border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our <span className="text-orange-500">Service Area</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We proudly provide professional vehicle transport services across:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-900 rounded-lg border border-orange-500/30 p-8 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center">
                  <Check className="text-orange-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-lg font-bold text-white">Arizona (Statewide)</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-orange-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-lg font-bold text-white">Nevada</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-orange-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-lg font-bold text-white">New Mexico</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-orange-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-lg font-bold text-white">Utah</span>
                </div>
                <div className="flex items-center sm:col-span-2 md:col-span-2">
                  <Check className="text-orange-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-lg font-bold text-white">Southern California</span>
                </div>
              </div>

              <div className="border-t border-neutral-700 pt-6">
                <p className="text-gray-300 mb-4">
                  <strong className="text-white">Based in Arizona,</strong> we specialize in reliable local and regional vehicle transport throughout the Southwest.
                </p>
                <p className="text-gray-300 mb-4">
                  <strong className="text-white">Door-to-door pickup and delivery available</strong> for sedans, SUVs, small heavy-duty trucks (F-250/2500 class), and luxury vehicles.
                </p>
                <p className="text-gray-300 flex items-start">
                  <X className="text-red-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                  <span>No commercial trucks.</span>
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 italic font-semibold">
                Fully insured and owner-operated, ensuring direct accountability on every transport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Transport Section */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* We Transport */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Check className="text-green-500 mr-3" size={28} />
                We Transport
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-neutral-800 border-2 border-green-500/30 rounded-lg p-4">
                  <div className="overflow-hidden rounded-lg mb-3">
                    <ImageWithFallback
                      src="/images/sedan.jpg"
                      alt="Sedans"
                      className="w-full h-32 object-cover rounded"
                    />
                  </div>
                  <h3 className="font-bold text-white flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    Sedans
                  </h3>
                </div>

                <div className="bg-neutral-800 border-2 border-green-500/30 rounded-lg p-4">
                  <div className="overflow-hidden rounded-lg mb-3">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1767749995450-7b63ab7cd4fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTVVYlMjBsdXh1cnklMjB2ZWhpY2xlfGVufDF8fHx8MTc3MTU2NjkxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="SUVs"
                      className="w-full h-32 object-cover rounded"
                    />
                  </div>
                  <h3 className="font-bold text-white flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    SUVs
                  </h3>
                </div>

                <div className="bg-neutral-800 border-2 border-green-500/30 rounded-lg p-4">
                  <div className="overflow-hidden rounded-lg mb-3">
                    <ImageWithFallback
                      src="/images/heavy-duty-truck.jpg"
                      alt="Small Heavy-Duty Trucks"
                      className="w-full h-32 object-cover rounded"
                    />
                  </div>
                  <h3 className="font-bold text-white flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    Small Heavy-Duty Trucks
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">F-250 / 2500 class</p>
                </div>

                <div className="bg-neutral-800 border-2 border-green-500/30 rounded-lg p-4">
                  <div className="overflow-hidden rounded-lg mb-3">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1622701578810-67534f6e6d2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdWRpJTIwQTYlMjBibGFjayUyMHNpbHZlcnxlbnwxfHx8fDE3NzE2NTM5MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Luxury Vehicles"
                      className="w-full h-32 object-cover rounded"
                    />
                  </div>
                  <h3 className="font-bold text-white flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    Luxury Vehicles
                  </h3>
                </div>
              </div>
            </div>

            {/* We Do NOT Transport */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <X className="text-red-500 mr-3" size={28} />
                We Do NOT Transport
              </h2>
              <div className="space-y-4">
                <div className="bg-neutral-800 border-2 border-red-500/30 rounded-lg p-4 flex items-center">
                  <X className="text-red-500 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-white">Commercial Trucks</h3>
                    <p className="text-sm text-gray-400">Box trucks, delivery trucks, or commercial fleet vehicles</p>
                  </div>
                </div>

                <div className="bg-neutral-800 border-2 border-red-500/30 rounded-lg p-4 flex items-center">
                  <X className="text-red-500 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-white">Semi-Trucks</h3>
                    <p className="text-sm text-gray-400">18-wheelers, tractor-trailers, or heavy commercial haulers</p>
                  </div>
                </div>

                <div className="bg-neutral-800 border-2 border-red-500/30 rounded-lg p-4 flex items-center">
                  <X className="text-red-500 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-white">Freight Cargo</h3>
                    <p className="text-sm text-gray-400">General freight, palletized goods, or cargo shipments</p>
                  </div>
                </div>

                <div className="bg-neutral-800 border-2 border-red-500/30 rounded-lg p-4 flex items-center">
                  <X className="text-red-500 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-white">Heavy Equipment</h3>
                    <p className="text-sm text-gray-400">Construction equipment, tractors, or industrial machinery</p>
                  </div>
                </div>

                <div className="bg-neutral-800 border-2 border-red-500/30 rounded-lg p-4 flex items-center">
                  <Truck className="text-red-500 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-white">Oversized Heavy-Duty Trucks</h3>
                    <p className="text-sm text-gray-400">Trucks larger than F-250 / 2500 class (e.g., F-350, F-450, 3500+)</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mt-6">
                <p className="text-sm text-orange-200 font-semibold">
                  ✓ We specialize in personal and light commercial vehicles only. For heavy-duty or commercial freight needs, we recommend specialized freight carriers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Factors Section */}
      <section className="py-16 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              How We Calculate <span className="text-orange-500">Your Quote</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Transparent pricing based on distance, vehicle type, and scheduling. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-700">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <Car className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Distance</h3>
              <p className="text-gray-400">
                Base pricing determined by total mileage from pickup to delivery location.
              </p>
            </div>

            <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-700">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <Truck className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Vehicle Type</h3>
              <p className="text-gray-400">
                Sedans, SUVs, trucks, and luxury vehicles may have different pricing tiers.
              </p>
            </div>

            <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-700">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <Check className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Schedule Flexibility</h3>
              <p className="text-gray-400">
                Same-day, next-day, or flexible scheduling options to meet your needs.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-r from-orange-600/20 to-orange-500/20 border-2 border-orange-500/50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Request Your Custom Quote
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Every transport is different. Contact us for a personalized quote based on your specific pickup and delivery needs.
            </p>
            <Link
              to="/request-pickup"
              className="inline-flex items-center justify-center bg-orange-500 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors"
            >
              Get Your Quote
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-neutral-800 rounded-lg p-6 border border-neutral-700 hover:border-orange-500 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-3 flex items-start">
                  <Check className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  {faq.question}
                </h3>
                <p className="text-gray-400 pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto font-semibold">
            Request a quote today for professional, insured vehicle transport across Arizona and the Southwest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-pickup"
              className="inline-flex items-center justify-center bg-white text-orange-600 px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Request a Quote
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
