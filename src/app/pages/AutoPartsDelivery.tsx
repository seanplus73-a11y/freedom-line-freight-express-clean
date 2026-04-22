import { Phone, Package, Clock, Shield } from "lucide-react";
import { Link } from "react-router";

export default function AutoPartsDelivery() {
  return (
    <div className="bg-[#0f172a] text-white">
      {/* HERO */}
      <section className="relative h- md:h- w-full overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1619642751034-765df7c58e?q=80&w=2070"
          alt="Auto parts delivery van loading boxes"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

        {/* Content */}
        <div className="relative mx-auto flex h-full max-w-6xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase text-orange-400">
              Arizona Parts Courier Service
            </p>

            <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
              Same-Day Auto Parts Delivery in San Tan Valley & Phoenix Metro
            </h1>

            <p className="mb-6 text-base text-gray-100 md:text-lg">
              Skip the wait. I personally deliver parts between shops, dealers, suppliers,
              and customers — no warehouse delays, no missed ETAs. Scheduled or urgent runs available.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                to="/request-pickup"
                className="rounded-lg bg-orange-500 px-6 py-3 text-center font-semibold hover:bg-orange-600"
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
              <Clock size={16} /> Most local runs delivered in under 2 hours
            </p>
          </div>
        </div>
      </section>

      {/* TRUST ICONS - replaces repeated text */}
      <section className="border-b border-slate-800 bg-slate-900/50 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <Package className="h-6 w-6 text-orange-400" />
            <div>
              <p className="font-semibold">Handled Like My Own</p>
              <p className="text-sm text-gray-400">Photo confirmation at pickup</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-orange-400" />
            <div>
              <p className="font-semibold">Real-Time Updates</p>
              <p className="text-sm text-gray-400">Text updates + GPS on request</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-orange-400" />
            <div>
              <p className="font-semibold">$1M Commercial Policy</p>
              <p className="text-sm text-gray-400">Full coverage while in transit</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-4xl">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Keep Your Bays Moving — No Parts Delays
            </h2>

            <p className="mb-4 leading-7 text-gray-300">
              When a car is on the lift waiting for parts, every hour costs you money.
              I run direct from supplier to shop — no depot transfers or next-day promises.
              If you need it today, I’ll get it there today.
            </p>

            <p className="mb-10 leading-7 text-gray-300">
              Tires, engines, boxed components, tools, fluids — if it fits in a sprinter van or pickup,
              I’ll move it. Secure loading, careful handling, and direct routes only.
            </p>

            <h3 className="mb-4 text-xl font-semibold md:text-2xl">
              Who I Deliver For
            </h3>

            <ul className="grid grid-cols-1 gap-2 text-gray-300 sm:grid-cols-2">
              <li className="flex items-center gap-2">• Auto repair shops & body shops</li>
              <li className="flex items-center gap-2">• New & used car dealerships</li>
              <li className="flex items-center gap-2">• Parts stores & distributors</li>
              <li className="flex items-center gap-2">• Mobile mechanics</li>
              <li className="flex items-center gap-2">• Fleet managers</li>
              <li className="flex items-center gap-2">• Shops needing dealer pickups</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
