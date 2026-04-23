import {
  Phone,
  Package,
  Clock,
  Shield,
  CheckCircle2,
  Wrench,
  Building2,
  Truck,
  MapPin,
} from "lucide-react";
import { Link } from "react-router";

export default function ChandlerAutoPartsDelivery() {
  return (
    <div className="bg-[#0f172a] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/chandler-auto-parts.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-orange-400/60 bg-black/40 px-4 py-2 text-sm font-semibold text-orange-300">
                Same Day Available
              </span>
              <span className="rounded-full border border-orange-400/60 bg-black/40 px-4 py-2 text-sm font-semibold text-orange-300">
                Direct Parts Courier
              </span>
              <span className="rounded-full border border-orange-400/60 bg-black/40 px-4 py-2 text-sm font-semibold text-orange-300">
                Fast Local Service
              </span>
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">
              Chandler Auto Parts Delivery
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Auto Parts Delivery Service in Chandler AZ
            </h1>

            <p className="mb-6 text-lg leading-8 text-gray-200">
              Fast and reliable auto parts delivery for repair shops, dealerships,
              suppliers, and local businesses in Chandler. Same day and scheduled
              delivery available across Chandler and nearby areas.
            </p>

            <p className="mb-8 text-base leading-8 text-gray-300 md:text-lg">
              Whether you need boxed parts, tools, tires, or smaller components moved
              quickly, I provide direct local transport with careful handling and real time updates.
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
                Text 4807428553
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                Licensed and insured
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                Real time updates
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#111827] py-6">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <Package className="h-5 w-5 text-orange-400" />
            <div>
              <p className="font-semibold">Handled carefully</p>
              <p className="text-sm text-gray-400">
                Secure loading and direct transport
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-orange-400" />
            <div>
              <p className="font-semibold">Fast local runs</p>
              <p className="text-sm text-gray-400">
                Same day and scheduled delivery
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-orange-400" />
            <div>
              <p className="font-semibold">Protected during transport</p>
              <p className="text-sm text-gray-400">
                Careful handling from pickup to drop off
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.95fr]">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold text-orange-400 md:text-3xl">
                Fast Local Auto Parts Delivery in Chandler
              </h2>

              <p className="mb-4 leading-7 text-gray-300">
                Many repair shops, dealerships, and local businesses need parts delivered
                quickly to keep work moving. I provide same day and scheduled delivery for
                auto parts between suppliers, shops, dealerships, and customers in Chandler.
              </p>

              <p className="mb-4 leading-7 text-gray-300">
                If you are searching for auto parts delivery near me in Chandler,
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
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Auto repair shops and body shops</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" />
                  <span>New and used car dealerships</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Auto parts stores and suppliers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Mobile mechanics and fleet service providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Local businesses needing fast same day runs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Chandler Parts Delivery Services
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

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-4xl">
            <h2 className="mb-4 text-2xl font-bold text-orange-400 md:text-3xl">
              Local Auto Parts Courier Service in Chandler
            </h2>

            <p className="mb-5 leading-7 text-gray-300">
              Businesses in Chandler often lose time when parts are delayed between a supplier,
              dealership, and repair shop. I provide direct local delivery to help shops and service
              providers keep jobs moving without waiting on standard courier routes.
            </p>

            <p className="mb-5 leading-7 text-gray-300">
              This service is helpful for repair shops, body shops, mobile mechanics, dealerships,
              and local business customers who need dependable delivery for auto parts in Chandler.
              It also supports customers searching online for parts delivery near me, same day parts delivery,
              and local parts courier service.
            </p>

            <p className="leading-7 text-gray-300">
              Nearby service areas include Gilbert, Mesa, Queen Creek, San Tan Valley, Phoenix,
              and Scottsdale. Many customers in these areas use our Chandler auto parts delivery
              service for fast, direct, and reliable transport.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                <MapPin className="h-6 w-6 text-orange-400" />
                Service Area
              </h3>
              <p className="leading-8 text-gray-300">
                Serving Chandler, Gilbert, Mesa, Queen Creek, San Tan Valley, Phoenix,
                Scottsdale, and surrounding East Valley areas.
              </p>
            </div>

            <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-8">
              <h3 className="mb-4 text-2xl font-bold">What You Get</h3>
              <ul className="space-y-3 text-gray-200">
                <li>Owner operated direct service</li>
                <li>Fast local response</li>
                <li>Flexible same day and scheduled options</li>
                <li>Real time updates during transport</li>
                <li>Licensed and insured handling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
            Chandler Auto Parts Delivery FAQ
          </h2>

          <div className="grid gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold text-orange-400">
                Do you offer auto parts delivery in Chandler?
              </h3>
              <p className="mt-3 leading-7 text-gray-300">
                Yes. I provide direct local auto parts delivery throughout Chandler and nearby areas.
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

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-orange-500 px-8 py-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Need Auto Parts Delivered in Chandler
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base text-orange-50">
              Request delivery today or text for fast local service and availability.
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
                Text 4807428553
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
