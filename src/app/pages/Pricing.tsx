import { Link } from "react-router";
import { Check, ArrowRight, Car, X, Package } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Pricing() {
  const faqs = [
    {
      question: "How is pricing calculated?",
      answer:
        "Pricing is based on distance, vehicle type, and scheduling needs. We provide a clear quote before pickup.",
    },
    {
      question: "Are there hidden fees?",
      answer:
        "No. All pricing is confirmed before dispatch. What you see is what you pay.",
    },
    {
      question: "Is my vehicle insured during transport?",
      answer:
        "Yes. All vehicles are fully insured during pickup, transport, and delivery.",
    },
    {
      question: "What types of vehicles do you transport?",
      answer:
        "We transport sedans, SUVs, small heavy-duty trucks (F-250/2500 class), and luxury vehicles. We do NOT transport commercial trucks, semi-trucks, or freight cargo.",
    },
    {
      question: "Do you offer local delivery services too?",
      answer:
        "Yes. We also provide same-day local delivery for luggage, small packages, auto parts, and urgent pickups. Delivery pricing is separate from vehicle transport pricing.",
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
            Clear, distance-based pricing for safe and professional vehicle pickup, delivery,
            and same-day local transport.
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
                  <strong className="text-white">Based in Arizona,</strong> we specialize in reliable
                  local and regional vehicle transport throughout the Southwest.
                </p>
                <p className="text-gray-300 mb-4">
                  <strong className="text-white">Door-to-door pickup and delivery available</strong> for
                  sedans, SUVs, small heavy-duty trucks (F-250/2500 class), and luxury vehicles.
                </p>
                <p className="text-gray-300 mb-4">
                  <strong className="text-white">Same-day local delivery also available</strong> for
                  luggage, auto parts, small packages, and urgent pickups.
                </p>
                <p className="text-gray-300 flex items-start">
                  <X className="text-red-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                  <span>No commercial trucks, semi-trucks, or freight cargo.</span>
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
              Vehicle Transport <span className="text-orange-500">Pricing</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Clear, upfront pricing based on how far your vehicle needs to go. All prices include
              insurance and door-to-door service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Local */}
            <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 hover:border-orange-500 transition-colors flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Local</h3>
              <p className="text-gray-400 text-sm mb-4">0–10 Miles</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-orange-500">$65</span>
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
                    <span>Short-distance jobs available</span>
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
              <p className="text-gray-400 text-sm mb-4">10–25 Miles</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-orange-500">$85</span>
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
              <p className="text-gray-400 text-sm mb-4">25–50 Miles</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-orange-500">$125</span>
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
                    <span>Ideal for nearby Arizona cities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Flexible scheduling</span>
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
              <h3 className="text-2xl font-bold text-white mb-2">Longer Regional</h3>
              <p className="text-gray-400 text-sm mb-4">50–150 Miles</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-orange-500">$250</span>
                <p className="text-sm text-gray-400 mt-1">starting at</p>
              </div>

              <div className="mb-6 flex-grow">
                <p className="text-sm font-semibold text-white mb-3">Includes:</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Longer regional vehicle transport</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Dedicated scheduling window</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Route-based pricing</span>
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
              * Prices shown are starting rates for standard sedans. Final pricing may vary based on vehicle type,
              specific route, and scheduling requirements. Minimum service fee applies.
            </p>
          </div>
        </div>
      </section>

      {/* Same-Day Local Delivery Section */}
      <section className="py-16 bg-neutral-800 border-y border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-neutral-900 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-neutral-700 text-white">
              <Package className="mr-2 text-orange-500" size={18} />
              Same-Day Local Delivery
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Local Delivery <span className="text-orange-500">Pricing</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Same-day local delivery for luggage, small packages, auto parts, and urgent pickups.
              Delivery pricing is separate from vehicle transport pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6 hover:border-orange-500 transition-colors flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Local Delivery</h3>
              <p className="text-gray-400 text-sm mb-4">0–25 Miles</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-orange-500">$45</span>
                <p className="text-sm text-gray-400 mt-1">starting at</p>
              </div>

              <div className="mb-6 flex-grow">
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Luggage delivery</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Small package delivery</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Urgent local pickups</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center bg-orange-500 text-white px-6 py-3 rounded-md font-bold hover:bg-orange-600 transition-colors mt-auto"
              >
                Request Delivery
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6 hover:border-orange-500 transition-colors flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Extended Delivery</h3>
              <p className="text-gray-400 text-sm mb-4">25–50 Miles</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-orange-500">$75</span>
                <p className="text-sm text-gray-400 mt-1">starting at</p>
              </div>

              <div className="mb-6 flex-grow">
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Extended local delivery</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Direct communication</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center bg-orange-500 text-white px-6 py-3 rounded-md font-bold hover:bg-orange-600 transition-colors mt-auto"
              >
                Request Delivery
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6 hover:border-orange-500 transition-colors flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Custom Delivery</h3>
              <p className="text-gray-400 text-sm mb-4">50+ Miles</p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-white">Custom Quote</span>
                <p className="text-sm text-gray-400 mt-1">based on route</p>
              </div>

              <div className="mb-6 flex-grow">
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <Check className="text-orange-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                    <span>Longer same-day delivery requests


export default Pricing;
