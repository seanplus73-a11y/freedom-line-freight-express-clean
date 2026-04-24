import { Link } from "react-router";

export default function PackageDocumentDelivery() {
  return (
    <div className="bg-[#111827] text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Package and Document Delivery in Phoenix AZ
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Fast, reliable delivery for documents, small packages, and time-sensitive items across Phoenix, Mesa, Chandler, Gilbert, Queen Creek, and surrounding areas.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/request-pickup"
            className="bg-[#f97316] px-6 py-3 rounded-lg font-bold hover:bg-orange-500"
          >
            Request Pickup
          </Link>

          <a
            href="tel:4807428553"
            className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10"
          >
            Call or Text 480-742-8553
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-10 text-center">
          What We Deliver
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#1f2937] p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Documents</h3>
            <p className="text-gray-400 text-sm">
              Legal papers, contracts, business documents, and urgent paperwork delivered same-day.
            </p>
          </div>

          <div className="bg-[#1f2937] p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Small Packages</h3>
            <p className="text-gray-400 text-sm">
              Local delivery for packages, boxes, and personal items without delays.
            </p>
          </div>

          <div className="bg-[#1f2937] p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Time-Sensitive Items</h3>
            <p className="text-gray-400 text-sm">
              Rush delivery when timing matters most. Direct pickup and drop-off.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-8">
          Why Choose Freedom Line Freight Express
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-left">

          <div className="bg-[#1f2937] p-6 rounded-xl">
            <ul className="space-y-2 text-gray-300">
              <li>• Direct delivery — no multi-stop routes</li>
              <li>• Same-day availability</li>
              <li>• Reliable and on-time service</li>
              <li>• Clear communication (Deaf-owned business)</li>
            </ul>
          </div>

          <div className="bg-[#1f2937] p-6 rounded-xl">
            <ul className="space-y-2 text-gray-300">
              <li>• Local Phoenix & East Valley coverage</li>
              <li>• No app-based random drivers</li>
              <li>• Safe handling of items</li>
              <li>• Flexible scheduling</li>
            </ul>
          </div>

        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">
          Service Areas
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Serving Phoenix, Mesa, Chandler, Gilbert, Queen Creek, San Tan Valley, Scottsdale, Tempe, Casa Grande, and nearby Arizona areas.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-[#0f172a] py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Need Fast Delivery Today?
        </h2>

        <Link
          to="/request-pickup"
          className="bg-[#f97316] px-8 py-4 rounded-lg font-bold hover:bg-orange-500"
        >
          Get a Free Quote
        </Link>
      </section>

    </div>
  );
}
