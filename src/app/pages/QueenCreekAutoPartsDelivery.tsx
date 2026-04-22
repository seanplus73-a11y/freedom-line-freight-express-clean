import { Phone, Package, Clock, Shield, CheckCircle, Wrench, Building2, Truck } from "lucide-react";
import { Link } from "react-router";

export default function QueenCreekAutoPartsDelivery() {
  return (
    <div className="bg-[#0f172a] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="photo/2019/03/29/04/35/tools-4088531_1280.jpg"
            alt="Auto parts delivery service in Queen Creek Arizona"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/35"></div>
        </div>

        <div className="relative mx-auto flex min-h-[430px] max-w-6xl items-center px-6 py-16 md:min-h-[480px]">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-400">
              Queen Creek Auto Parts Delivery
            </p>

            <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
              Auto Parts Delivery Service in Queen Creek, AZ
            </h1>

            <p className="mb-6 text-base leading-7 text-gray-100 md:text-lg">
              Fast and reliable auto parts delivery for repair shops, dealerships,
              suppliers, and local businesses in Queen Creek. Same day and scheduled
              delivery available across Queen Creek and nearby areas.
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
              <p className="text-sm text-gray-400">Secure loading and direct transport</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-orange-400" />
            <div>
              <p className="font-semibold">Fast Local Runs</p>
              <p className="text-sm text-gray-400">Same day and scheduled delivery</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-orange-400" />
            <div>
              <p className="font-semibold">$1M Commercial Coverage</p>
              <p className="text-sm text-gray-400">Protected while in transit</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN INTRO */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.95fr]">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold text-orange-400 md:text-3xl">
                Fast Local Auto Parts Delivery in Queen Creek
              </h2>

              <p className="mb-4 leading-7 text-gray-300">
                Many repair shops, dealerships, and local businesses need parts delivered
                quickly to keep work moving. I provide same day and scheduled delivery for
                auto parts between suppliers, shops, dealerships, and customers in Queen Creek.
              </p>

              <p className="mb-4 leading-7 text-gray-300">
                If you are searching for auto parts delivery near me in Queen Creek,
                Freedom Line Freight Express provides direct local service you can trust.
              </p>

              <p className="leading-7 text-gray-300">
                Whether it is tires, boxed parts, tools, or smaller components, I focus on
                safe handling, direct transport, and dependable service with real time updates.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold text-orange-400">
                Who This Service Helps
              </h2>

              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Auto repair shops and body shops</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-orange-400" />
                  <span>New and used car dealerships</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Auto parts stores and suppliers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Mobile mechanics and fleet service providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Local businesses needing fast same day runs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="border-y border-white/10 bg-white/5 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Queen Creek Parts Delivery Services
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-[#101522] p-6 text-center">
              <Wrench className="mx-auto h-8 w-8 text-orange-400" />
              <h3 className="mt-4 text-xl font-bold">Repair Shop Delivery</h3>
              <p className="mt-3 text-gray-300">
                Fast parts delivery for mechanics, service bays, and repair appointments.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101522] p-6 text-center">
              <Building2 className="mx-auto h-8 w-8 text-orange-400" />
              <h3 className="mt-4 text-xl font-bold">Dealership Runs</h3>
              <p className="mt-3 text-gray-300">
                Pickup and drop off from dealers, suppliers, and service departments.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101522] p-6 text-center">
              <Package className="mx-auto h-8 w-8 text-orange-400" />
              <h3 className="mt-4 text-xl font-bold">Boxed Parts</h3>
              <p className="mt-3 text-gray-300">
                Secure handling for packaged parts, tools, and smaller components.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101522] p-6 text-center">
              <Truck className="mx-auto h-8 w-8 text-orange-400" />
              <h3 className="mt-4 text-xl font-bold">Same Day Runs</h3>
              <p className="mt-3 text-gray-300">
                Same day local delivery when timing matters and parts are needed fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO TEXT */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-5xl">
            <h2 className="mb-4 text-2xl font-bold text-orange-400 md:text-3xl">
              Local Auto Parts Courier Service in Queen Creek
            </h2>

            <p className="mb-5 leading-7 text-gray-300">
              Businesses in Queen Creek often lose time when parts are delayed between a supplier,
              dealership, and repair shop. I provide direct local delivery to help shops and service
              providers keep jobs moving without waiting on standard courier routes.
            </p>

            <p className="mb-5 leading-7 text-gray-300">
              This service is helpful for repair shops, body shops, mobile mechanics, dealerships,
              and local business customers who need dependable delivery for auto parts in Queen Creek.
              It also supports customers searching online for parts delivery near me, same day parts delivery,
              and local parts courier service.
            </p>

            <p className="mb-5 leading-7 text-gray-300">
              Nearby service areas include San Tan Valley, Gilbert, Chandler, Mesa, Florence, and Phoenix.
              Many customers in these areas use our Queen Creek auto parts delivery service for fast,
              direct, and reliable transport.
            </p>

            <p className="leading-7 text-gray-300">
              Learn more about our{" "}
              <Link to="/auto-parts-delivery" className="font-semibold text-orange-400 hover:text-orange-300">
                main auto parts delivery page
              </Link>{" "}
              and{" "}
              <Link to="/services" className="font-semibold text-orange-400 hover:text-orange-300">
                full service options
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            Queen Creek Auto Parts Delivery FAQ
          </h2>

          <div className="grid gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold text-orange-400">
                Do you offer auto parts delivery in Queen Creek?
              </h3>
              <p className="mt-3 leading-7 text-gray-300">
                Yes. I provide direct local auto parts delivery throughout Queen Creek and nearby areas.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold text-orange-400">
                Who do you deliver parts for?
              </h3>
              <p className="mt-3 leading-7 text-gray-300">
                I deliver for repair shops, dealerships, suppliers, mobile mechanics, and local businesses.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold text-orange-400">
                What kinds of parts can you deliver?
              </h3>
              <p className="mt-3 leading-7 text-gray-300">
                I can handle boxed parts, tires, tools, smaller components, and many shop related items
                that fit safely for local transport.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold text-orange-400">
                How fast is delivery?
              </h3>
              <p className="mt-3 leading-7 text-gray-300">
                Many local deliveries can be completed same day or next day depending on route,
                timing, and availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-14">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Need Auto Parts Delivered in Queen Creek?
          </h2>

          <p className="mt-4 text-lg text-white/90">
            Request delivery today or text for fast local service.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/request-pickup"
              className="rounded-xl bg-white px-6 py-4 font-bold text-[#0f172a] transition hover:bg-slate-100"
            >
              Request Delivery
            </Link>

            <a
              href="sms:4807428553"
              className="rounded-xl border border-white px-6 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Text 480-742-8553
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
