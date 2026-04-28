import { Link } from "react-router";
import { Package, FileText, Wrench, ArrowRight } from "lucide-react";

export default function Courier() {
  return (
    <div className="bg-neutral-900 text-white">

      {/* Header */}
      <section className="bg-black py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Business & Parts{" "}
          <span className="text-orange-500">Courier Service</span>
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Fast, direct delivery for auto parts, business items, and documents across Arizona.
        </p>
      </section>

      {/* Intro */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Reliable Same-Day Delivery
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto">
          I provide direct courier service for businesses that need fast, reliable delivery without delays.
          All deliveries are handled personally with clear communication by text.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 bg-neutral-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">

          {/* Auto Parts */}
          <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
            <Wrench className="text-orange-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">Auto Parts Delivery</h3>

            <p className="text-gray-400 mb-4">
              Engines, transmissions, and shop parts delivered between dealers and repair shops.
            </p>

            <p className="text-2xl font-bold text-orange-500 mb-4">$45+</p>

            <ul className="text-sm text-gray-300 space-y-2 mb-6">
              <li>• Shop to shop delivery</li>
              <li>• Same-day available</li>
              <li>• Direct handling</li>
            </ul>

            <Link
              to="/contact"
              className="text-orange-500 font-bold inline-flex items-center"
            >
              Text for Quote
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>

          {/* Packages */}
          <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
            <Package className="text-orange-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">
              Business Items & Packages
            </h3>

            <p className="text-gray-400 mb-4">
              Small business deliveries, equipment, and local transport needs.
            </p>

            <p className="text-2xl font-bold text-orange-500 mb-4">$35+</p>

            <ul className="text-sm text-gray-300 space-y-2 mb-6">
              <li>• Business-to-business delivery</li>
              <li>• Flexible scheduling</li>
              <li>• Same-day service</li>
            </ul>

            <Link
              to="/contact"
              className="text-orange-500 font-bold inline-flex items-center"
            >
              Text for Quote
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>

          {/* Documents */}
          <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-6">
            <FileText className="text-orange-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">
              Documents & Urgent Delivery
            </h3>

            <p className="text-gray-400 mb-4">
              Fast delivery for paperwork, checks, and time-sensitive items.
            </p>

            <p className="text-2xl font-bold text-orange-500 mb-4">$25+</p>

            <ul className="text-sm text-gray-300 space-y-2 mb-6">
              <li>• Priority delivery</li>
              <li>• Same-day service</li>
              <li>• Secure handling</li>
            </ul>

            <Link
              to="/contact"
              className="text-orange-500 font-bold inline-flex items-center"
            >
              Text for Quote
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-500 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Something Delivered Today?
        </h2>

        <p className="text-lg mb-8">
          Fast response. Reliable service. Direct communication by text.
        </p>

        <Link
          to="/contact"
          className="bg-white text-orange-600 px-8 py-3 rounded font-bold"
        >
          Text Me to Get Started
        </Link>
      </section>

    </div>
  );
}
