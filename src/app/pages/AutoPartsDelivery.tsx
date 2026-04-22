import { Phone } from "lucide-react";
import { Link } from "react-router";

export default function AutoPartsDelivery() {
  return (
    <div className="bg-[#0f172a] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="h-[420px] md:h-[480px] w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/jelleke-vanooteghem-MohB4LCIPyM-unsplash.jpg')",
          }}
        />

        {/* overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-black/50"></div>

        {/* content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-6 w-full">
            <div className="max-w-3xl">
              <p className="text-orange-400 text-sm font-semibold mb-3 uppercase">
                Arizona Auto Parts Delivery
              </p>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                Auto Parts Delivery Service in San Tan Valley, AZ
              </h1>

              <p className="text-gray-100 text-base md:text-lg mb-6">
                Fast and reliable auto parts delivery for repair shops, dealerships,
                suppliers, and local businesses. Same day and scheduled delivery.
              </p>

              <div className="flex gap-4">
                <Link
                  to="/request-pickup"
                  className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold"
                >
                  Request Delivery
                </Link>

                <a
                  href="sms:4807428553"
                  className="border border-orange-400 px-6 py-3 rounded-lg text-orange-300 hover:bg-orange-500 hover:text-white transition"
                >
                  <Phone size={18} />
                  Text 480-742-8553
                </a>
              </div>

              {/* optional trust line */}
              <p className="text-green-400 font-semibold mt-4">
                Same day parts delivery available in most areas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-4xl">

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Fast Local Auto Parts Delivery
            </h2>

            <p className="text-gray-300 mb-4 leading-7">
              Many businesses need parts delivered quickly to keep operations moving.
              I provide same day and scheduled delivery for auto parts between suppliers,
              repair shops, dealerships, and local customers.
            </p>

            <p className="text-gray-300 mb-10 leading-7">
              Whether it is tires, tools, boxed parts, or smaller components,
              I focus on safe handling, direct transport, and dependable service.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Who This Service Helps
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>• Auto repair shops</li>
              <li>• Car dealerships</li>
              <li>• Auto parts stores</li>
              <li>• Mobile mechanics</li>
              <li>• Local businesses needing parts fast</li>
            </ul>

          </div>
        </div>
      </section>

    </div>
  );
}
