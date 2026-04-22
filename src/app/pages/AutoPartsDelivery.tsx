import { Phone } from "lucide-react";

export default function AutoPartsDelivery() {
  return (
    <div className="bg-[#0f172a] text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div
          className="h-[420px] md:h-[460px] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-6 w-full">
            <div className="max-w-3xl">
              <p className="text-orange-400 text-sm md:text-base font-semibold tracking-wide mb-3 uppercase">
                Arizona Auto Parts Delivery
              </p>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                Auto Parts Delivery Service in San Tan Valley, AZ
              </h1>

              <p className="text-gray-100 text-base md:text-lg leading-7 max-w-2xl mb-6">
                Fast and reliable auto parts delivery for repair shops,
                dealerships, suppliers, and local businesses. Same day and
                scheduled delivery across San Tan Valley and nearby areas.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/request-pickup"
                  className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600 transition"
                >
                  Request Delivery
                </a>

                <a
                  href="sms:4807428553"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-400 px-6 py-3 font-semibold text-orange-300 hover:bg-orange-500 hover:text-white transition"
                >
                  <Phone size={18} />
                  Text 480-742-8553
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Fast Local Auto Parts Delivery
            </h2>

            <p className="text-gray-300 mb-4 leading-7">
              Many businesses need parts delivered quickly to keep operations
              moving. I provide same day and scheduled delivery for auto parts
              between suppliers, repair shops, dealerships, and local customers.
            </p>

            <p className="text-gray-300 mb-10 leading-7">
              Whether it is tires, tools, boxed parts, or smaller components, I
              focus on safe handling, direct transport, and dependable service.
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
