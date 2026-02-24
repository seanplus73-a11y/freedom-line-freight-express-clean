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

      {/* Distance-Based Pricing Section */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Distance-Based <span className="text-orange-500">Pricing</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Clear, upfront pricing based on how far your vehicle needs to go. All prices include insurance and door-to-door service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Local */}
            <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 hover:border-orange-500 transition-colors flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Local</h3>
              <p className="text-gray-400 text-sm mb-4">0–25 Miles</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-orange-500">$75</span>
                <p className="text-sm text-gray-400 mt-1">starting at</p>
              </div>

              <div className="mb-6 flex-grow">
                <p className="text-sm font-semibold text-white mb-3">Includes:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Door-to-door vehicle pickup</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Same-day availability (when possible)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Secure vehicle handling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Photo documentation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Delivery confirmation</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/request-pickup"
                className="w-full inline-flex items-center justify-center bg-orange-500 text-white px-6 py-3 rounded-md font-bold hover:bg-orange-600 transition-colors mt-auto"
              >
                Request a Pickup
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Extended Local */}
            <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 hover:border-orange-500 transition-colors flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Extended Local</h3>
              <p className="text-gray-400 text-sm mb-4">25–50 Miles</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-orange-500">$125</span>
                <p className="text-sm text-gray-400 mt-1">starting at</p>
              </div>

              <div className="mb-6 flex-grow">
                <p className="text-sm font-semibold text-white mb-3">Includes everything in Local, plus:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Business-to-business transport</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Priority booking options</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/request-pickup"
                className="w-full inline-flex items-center justify-center bg-orange-500 text-white px-6 py-3 rounded-md font-bold hover:bg-orange-600 transition-colors mt-auto"
              >
                Request a Pickup
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Regional */}
            <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 hover:border-orange-500 transition-colors flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Regional</h3>
              <p className="text-gray-400 text-sm mb-4">50–150 Miles</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-orange-500">$250</span>
                <p className="text-sm text-gray-400 mt-1">starting at</p>
              </div>

              <div className="mb-6 flex-grow">
                <p className="text-sm font-semibold text-white mb-3">Includes everything in Extended Local, plus:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Dedicated vehicle transport</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Multi-vehicle scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Volume discounts available</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/request-pickup"
                className="w-full inline-flex items-center justify-center bg-orange-500 text-white px-6 py-3 rounded-md font-bold hover:bg-orange-600 transition-colors mt-auto"
              >
                Request a Pickup
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Long Distance */}
            <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 hover:border-orange-500 transition-colors flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Long Distance</h3>
              <p className="text-gray-400 text-sm mb-4">150+ Miles</p>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">Custom Quote</span>
                <p className="text-sm text-gray-400 mt-1">(Rate Per Day)</p>
              </div>

              <div className="mb-6 flex-grow">
                <p className="text-sm font-semibold text-white mb-3">Includes:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Cross-state vehicle transport</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Scheduled delivery window</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Custom pricing based on distance</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/request-pickup"
                className="w-full inline-flex items-center justify-center bg-orange-500 text-white px-6 py-3 rounded-md font-bold hover:bg-orange-600 transition-colors mt-auto"
              >
                Request a Pickup
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400 italic">
              * Prices shown are starting rates for standard sedans. Final pricing may vary based on vehicle type, specific route, and scheduling requirements.
            </p>
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
                      src="/images/sedans.jpg"
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
                      src="/images/small-heavy-duty-truck.jpg"
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
                    <p className="text-sm text-gray-400">18-wheelers, tractor-trailers, or large commercial trucks</p>
                  </div>
                </div>

                <div className="bg-neutral-800 border-2 border-red-500/30 rounded-lg p-4 flex items-center">
                  <X className="text-red-500 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-white">Freight Cargo</h3>
                    <p className="text-sm text-gray-400">Palletized goods, shipping containers, or commercial freight</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-orange-500/10 border-l-4 border-orange-500 p-4 rounded">
                <p className="text-sm text-gray-300">
                  We specialize in safely moving personal and light-duty vehicles. We do not handle commercial freight operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-neutral-700 pb-8 last:border-b-0">
                <h3 className="text-xl font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Schedule Your Vehicle Pickup?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto font-semibold">
            Get an instant quote and secure your pickup in minutes.
          </p>
          <Link
            to="/request-pickup"
            className="inline-flex items-center bg-white text-orange-600 px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Get My Instant Quote
            <ArrowRight className="ml-2" size={20} />
          </Link>
          <p className="text-orange-100 text-sm mt-6 font-semibold">
            Fully Insured • Professional Driver • Direct Communication
          </p>
        </div>
      </section>
    </div>
  );
}
