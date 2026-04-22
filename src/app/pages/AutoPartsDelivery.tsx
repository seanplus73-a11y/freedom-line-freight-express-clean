import { Phone, Package, Clock, Shield } from "lucide-react";
import { Link } from "react-router";

const heroImages = {
  partsStore:
    "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1600&auto=format&fit=crop",
  warehouse:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
  mechanicShop:
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1600&auto=format&fit=crop",
};

export default function AutoPartsDelivery() {
  return (
    <div className="bg-[#0f172a] text-white">
      {/* HERO */}
      <section className="relative h-[420px] md:h-[480px] w-full overflow-hidden">
        <img
          src={heroImages.partsStore}
          alt="Auto parts store shelves and packaged tools"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />

        <div className="relative mx-auto flex h-full max-w-6xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-400">
              Arizona Auto Parts Delivery
            </p>

            <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
              Auto Parts Delivery Service in San Tan Valley, AZ
            </h1>

            <p className="mb-6 max-w-2xl text-base leading-7 text-gray-100 md:text-lg">
              Fast and reliable auto parts delivery for repair shops,
              dealerships, suppliers, and local businesses. Same day and
              scheduled delivery across San Tan Valley and nearby areas.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                to="/request-pickup"
                className="rounded-lg bg-orange-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
              >
                Request Delivery
              </Link>

              <a
                href="sms:4807428553"
                className="flex items-center justify-center gap-2 rounded-lg border border-orange-400 px-6 py-3 text-orange-300 transition hover:bg-orange-500 hover:text-white"
              >
                <Phone size={18} />
                Text 480-742-8553
              </a>
            </div>

            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-green-400">
              <Clock size={16} />
              Same day parts delivery available in most areas
            </p>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-slate-800 bg-slate-900/50 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <Package className="h-6 w-6 text-orange-400" />
            <div>
              <p className="font-semibold">Handled Carefully</p>
              <p className="text-sm text-gray-400">
                Secure loading and direct transport
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-orange-400" />
            <div>
              <p className="font-semibold">Fast Local Runs</p>
              <p className="text-sm text-gray-400">
                Same day and scheduled delivery
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-orange-400" />
            <div>
              <p className="font-semibold">$1M Commercial Coverage</p>
              <p className="text-sm text-gray-400">
                Protected while in transit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-4xl">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Fast Local Auto Parts Delivery
            </h2>

            <p className="mb-4 leading-7 text-gray-300">
              Many businesses need parts delivered quickly to keep operations
              moving. I provide same day and scheduled delivery for auto parts
              between suppliers, repair shops, dealerships, and local customers.
            </p>

            <p className="mb-10 leading-7 text-gray-300">
              Whether it is tires, tools, boxed parts, or smaller components, I
              focus on safe handling, direct transport, and dependable service.
            </p>

            <h3 className="mb-4 text-xl font-semibold md:text-2xl">
              Who This Service Helps
            </h3>

            <ul className="grid grid-cols-1 gap-2 text-gray-300 sm:grid-cols-2">
              <li>• Auto repair shops</li>
              <li>• Car dealerships</li>
              <li>• Auto parts stores</li>
              <li>• Mobile mechanics</li>
              <li>• Fleet managers</li>
              <li>• Local businesses needing parts fast</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
