import { Phone, CheckCircle, Wrench, Store, Truck, Package } from "lucide-react";
import { Link } from "react-router";

export default function QueenCreekAutoPartsDelivery() {
  return (
    <div className="bg-[#0f172a] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/queen-creek-auto-parts.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">
              Queen Creek Auto Parts Delivery
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Auto Parts Delivery Service in Queen Creek, AZ
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-gray-200">
              Fast and reliable auto parts delivery for repair shops, dealerships,
              suppliers, and local businesses in Queen Creek. Same day and
              scheduled delivery available in most areas.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-orange-600"
              >
                Request Delivery
              </Link>

              <a
                href="sms:4807428553"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-orange-400 px-8 py-4 text-base font-semibold text-orange-300 transition hover:bg-orange-500 hover:text-white"
              >
                <Phone className="h-5 w-5" />
                Text 480-742-8553
              </a>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-green-400">
              <CheckCircle className="h-5 w-5" />
              Same day parts delivery available in most areas
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#111827] py-6">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <Package className="h-5 w-5 text-orange-400" />
            <div>
              <p className="font-semibold">Handled Carefully</p>
              <p className="text-sm text-gray-400">Secure loading and direct transport</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Truck className="h-5 w-5 text-orange-400" />
            <div>
              <p className="font-semibold">Fast Local Runs</p>
              <p className="text-sm text-gray-400">Same day and scheduled delivery</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-orange-400" />
            <div>
              <p className="font-semibold">$1M Commercial Coverage</p>
              <p className="text-sm text-gray-400">Protected while in transit</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold">Fast Local Auto Parts Delivery</h2>

            <p className="mb-5 leading-8 text-gray-300">
              Many businesses need parts delivered quickly to keep operations moving.
              I provide same day and scheduled delivery for auto parts between
              suppliers, repair shops, dealerships, and local customers.
            </p>

            <p className="leading-8 text-gray-300">
              Whether it is tires, tools, boxed parts, or smaller components, I focus
              on safe handling, direct transport, and dependable service.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-5 text-2xl font-bold">Who This Service Helps</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <Wrench className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Auto repair shops</span>
                </li>
                <li className="flex items-start gap-3">
                  <Store className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Car dealerships</span>
                </li>
                <li className="flex items-start gap-3">
                  <Package className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Auto parts stores</span>
                </li>
                <li className="flex items-start gap-3">
                  <Truck className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Mobile mechanics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Local businesses needing parts fast</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-8">
              <h3 className="mb-5 text-2xl font-bold">Why Choose Freedom Line</h3>
              <ul className="space-y-4 text-gray-200">
                <li>Direct owner operated service</li>
                <li>No middleman or app driver confusion</li>
                <li>Fast local response in Queen Creek and nearby cities</li>
                <li>Real time updates during transport</li>
                <li>Flexible same day and scheduled options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-orange-500 px-8 py-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Need Auto Parts Delivered in Queen Creek?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base text-orange-50">
              I provide fast local delivery for auto parts, tools, and business items
              across Queen Creek and nearby East Valley areas.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 transition hover:bg-orange-50"
              >
                Request Delivery
              </Link>

              <a
                href="sms:4807428553"
                className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-orange-600"
              >
                Text 480-742-8553
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
