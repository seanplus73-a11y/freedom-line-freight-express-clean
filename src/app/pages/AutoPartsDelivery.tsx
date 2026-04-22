import { Phone } from "lucide-react";

export default function AutoPartsDelivery() {
  return (
    <div className="bg-[#0f172a] text-white">
      
      {/* HERO SECTION */}
      <section className="relative">
        {/* Background Image (BRIGHT + CLEAR) */}
        <div
          className="h-[420px] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        {/* LIGHTER OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-orange-400 text-sm font-semibold mb-2">
              ARIZONA AUTO PARTS DELIVERY
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Auto Parts Delivery Service in San Tan Valley, AZ
            </h1>

            <p className="text-gray-200 max-w-2xl mb-6">
              Fast and reliable auto parts delivery for repair shops, dealerships, and businesses. 
              Same-day and scheduled delivery across the Phoenix metro area.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold">
                Request Delivery
              </button>

              <a
                href="sms:4807428553"
                className="border border-orange-400 text-orange-400 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-orange-500 hover:text-white transition"
              >
                <Phone size={18} />
                Text 480-742-8553
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Fast Local Auto Parts Delivery
          </h2>

          <p className="text-gray-300 mb-4">
            Many businesses need parts delivered quickly to keep operations moving. 
            I provide same-day and scheduled delivery for auto parts between suppliers, 
            repair shops, and dealerships.
          </p>

          <p className="text-gray-300 mb-10">
            Whether it’s engines, tires, tools, or small components, I ensure safe 
            and timely delivery with professional handling.
          </p>

          {/* WHO IT HELPS */}
          <h3 className="text-xl font-semibold mb-4">
            Who This Service Helps
          </h3>

          <ul className="text-gray-300 space-y-2">
            <li>• Auto repair shops</li>
            <li>• Car dealerships</li>
            <li>• Auto parts stores</li>
            <li>• Mobile mechanics</li>
            <li>• Local businesses needing parts fast</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
