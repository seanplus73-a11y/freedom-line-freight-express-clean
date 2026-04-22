import { Link } from "react-router";

export default function AutoPartsDelivery() {
  return (
    <div className="bg-[#0f172a] text-white">

      {/* HERO SECTION */}
     <section
  className="relative px-6 py-20 bg-cover bg-center"
  style={{
  backgroundImage:
    "url('https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=1600&auto=format&fit=crop')",
}}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative max-w-6xl mx-auto">
    <p className="text-orange-400 uppercase tracking-wide text-sm mb-3">
      Arizona Auto Parts Delivery
    </p>

    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
      Auto Parts Delivery Service in San Tan Valley, AZ
    </h1>

    <p className="text-gray-300 text-lg max-w-2xl mb-6">
      Fast and reliable auto parts delivery for repair shops, dealerships, and
      businesses.
    </p>

    <div className="flex flex-wrap gap-4">
      <Link
        to="/request-pickup"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Request Delivery
      </Link>

      <a
        href="sms:4807428553"
        className="border border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold"
      >
        Text 480-742-8553
      </a>
    </div>
  </div>
</section>

      {/* SECTION */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Fast Local Auto Parts Delivery
        </h2>

        <p className="text-gray-300 mb-4">
          Many businesses need parts delivered quickly to keep operations moving. 
          I provide same-day and scheduled delivery for auto parts between suppliers, 
          repair shops, and dealerships.
        </p>

        <p className="text-gray-400 mb-4">
          Whether it's engines, tires, tools, or small components, I ensure safe and 
          timely delivery with professional handling.
        </p>
      </section>

      {/* WHO ITS FOR */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Who This Service Helps
        </h2>

        <ul className="text-gray-300 space-y-2">
          <li>• Auto repair shops</li>
          <li>• Car dealerships</li>
          <li>• Auto parts stores</li>
          <li>• Fleet and business operations</li>
        </ul>
      </section>

      {/* AREAS */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          Service Areas
        </h2>

        <p className="text-gray-300">
          San Tan Valley, Queen Creek, Gilbert, Chandler, Mesa, Florence, and 
          Phoenix. Regional delivery across Arizona is also available.
        </p>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Auto Parts Delivered Today?
        </h2>

        <p className="text-gray-400 mb-6">
          Fast, reliable, and professional delivery you can count on.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/request-pickup"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Get a Quote
          </Link>

          <a
            href="sms:4807428553"
            className="border border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold"
          >
            Text Now
          </a>
        </div>
      </section>

    </div>
  );
}
