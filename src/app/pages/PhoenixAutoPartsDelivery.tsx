import { Link } from "react-router";
import {
  Wrench,
  Clock,
  CheckCircle,
  Package,
  Building2,
  Phone,
  MapPin,
  Truck,
} from "lucide-react";

export default function PhoenixAutoPartsDelivery() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* HERO */}
      <section className="border-b border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Phoenix, Arizona
          </p>

          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            Same-Day Auto Parts Delivery in Phoenix, AZ
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-neutral-300">
            Freedom Line Freight Express provides dependable same-day auto parts
            delivery in Phoenix for repair shops, mechanics, dealerships, and
            local businesses. We help reduce downtime with direct pickup, fast
            local delivery, and flexible scheduling for urgent parts runs.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/request-pickup"
              className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Request Pickup
            </Link>

            <a
              href="sms:4807428553"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-500 px-6 py-3 font-semibold text-orange-400 transition hover:bg-orange-500/10"
            >
              <Phone size={18} />
              Text 480-742-8553
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
              <div className="mb-2 flex items-center gap-2 text-orange-400">
                <Clock size={18} />
                <span className="font-semibold">Fast Local Response</span>
              </div>
              <p className="text-sm leading-6 text-neutral-300">
                Same-day support may be available depending on route and timing.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
              <div className="mb-2 flex items-center gap-2 text-orange-400">
                <Wrench size={18} />
                <span className="font-semibold">Built for Repair Shops</span>
              </div>
              <p className="text-sm leading-6 text-neutral-300">
                Designed for mechanics, garages, and service departments.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
              <div className="mb-2 flex items-center gap-2 text-orange-400">
                <Truck size={18} />
                <span className="font-semibold">Direct Pickup & Delivery</span>
              </div>
              <p className="text-sm leading-6 text-neutral-300">
                No unnecessary handoffs or confusing app-based routing.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
              <div className="mb-2 flex items-center gap-2 text-orange-400">
                <Building2 size={18} />
                <span className="font-semibold">Business-Friendly</span>
              </div>
              <p className="text-sm leading-6 text-neutral-300">
                Reliable service for local businesses and repeat delivery needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + SERVICES */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-orange-400">
            Fast Auto Parts Delivery for Phoenix Repair Shops
          </h2>

          <p className="mb-4 leading-8 text-neutral-300">
            If your shop is waiting on brake pads, boxed parts, dealership
            items, small equipment, or urgent automotive supplies, Freedom Line
            Freight Express can help with direct local delivery in Phoenix.
          </p>

          <p className="mb-4 leading-8 text-neutral-300">
            We work with repair shops, mechanics, dealerships, and business
            customers who need dependable local support without the delays that
            often come with app-based or multi-stop delivery services.
          </p>

          <p className="leading-8 text-neutral-300">
            Whether you need a one-time urgent run or recurring shop support, we
            focus on clear communication, flexible scheduling, and reliable
            service throughout Phoenix and nearby areas.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <h2 className="mb-4 text-2xl font-bold text-orange-400">
            Auto Parts Delivery Services in Phoenix
          </h2>

          <ul className="space-y-3 text-neutral-300">
            <li>• Same-day auto parts delivery in Phoenix</li>
            <li>• Urgent repair shop parts runs</li>
            <li>• Dealership-to-shop delivery support</li>
            <li>• Boxed items and small equipment transport</li>
            <li>• Documents and small package delivery</li>
            <li>• Scheduled local business delivery</li>
            <li>• Flexible pickup and drop-off service</li>
          </ul>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="border-y border-neutral-800 bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Who We Help in Phoenix
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
              <Wrench className="mb-4 text-orange-400" size={28} />
              <h3 className="mb-3 text-xl font-semibold text-white">
                Repair Shops
              </h3>
              <p className="text-neutral-300">
                Fast parts runs to help reduce downtime and keep jobs moving.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
              <Building2 className="mb-4 text-orange-400" size={28} />
              <h3 className="mb-3 text-xl font-semibold text-white">
                Dealerships
              </h3>
              <p className="text-neutral-300">
                Local support for dealer parts movement and direct delivery.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
              <Package className="mb-4 text-orange-400" size={28} />
              <h3 className="mb-3 text-xl font-semibold text-white">
                Parts Suppliers
              </h3>
              <p className="text-neutral-300">
                Pickup and drop-off service for local business customers.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
              <Truck className="mb-4 text-orange-400" size={28} />
              <h3 className="mb-3 text-xl font-semibold text-white">
                Business Customers
              </h3>
              <p className="text-neutral-300">
                Reliable delivery for shop supplies, boxed items, and urgent
                local requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BETTER */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-4 text-center text-3xl font-bold text-white">
          Better Than App-Based Auto Parts Delivery
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-center leading-8 text-neutral-300">
          Freedom Line Freight Express focuses on direct local service in
          Phoenix for auto parts, business items, and urgent delivery support.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h3 className="mb-4 text-2xl font-bold text-red-300">
              App-Based Delivery
            </h3>
            <ul className="space-y-3 text-neutral-300">
              <li>• Random driver availability</li>
              <li>• Multi-stop routes and slower timing</li>
              <li>• Not built around repair shop workflows</li>
              <li>• Less consistent business communication</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-orange-500 bg-neutral-900 p-6">
            <h3 className="mb-4 text-2xl font-bold text-orange-400">
              Freedom Line Freight Express
            </h3>
            <ul className="space-y-3 text-neutral-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 text-orange-400" size={18} />
                <span>Owner-operated direct service</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 text-orange-400" size={18} />
                <span>Fast local pickup and delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 text-orange-400" size={18} />
                <span>Built for repair shops and businesses</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 text-orange-400" size={18} />
                <span>Flexible scheduled and urgent support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SEO CONTENT BLOCK */}
      <section className="border-y border-neutral-800 bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-orange-400">
                Same-Day Parts Runs Across Phoenix
              </h2>

              <p className="mb-4 leading-8 text-neutral-300">
                We support local auto repair businesses in Phoenix that need
                quick delivery of parts, boxed items, paperwork, and essential
                shop supplies. If a delayed part is slowing down a repair job,
                we help reduce downtime with direct local pickup and delivery.
              </p>

              <p className="leading-8 text-neutral-300">
                Same-day auto parts delivery in Phoenix may be available based
                on route, timing, and scheduling. Contact us to check
                availability for urgent requests.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-orange-400">
                Local Support for Shops, Mechanics, and Dealers
              </h2>

              <p className="mb-4 leading-8 text-neutral-300">
                Freedom Line Freight Express is a good fit for repair shops and
                businesses looking for a dependable local partner for auto parts
                delivery in Phoenix. We focus on direct service, responsive
                communication, and flexible support for recurring or urgent
                delivery needs.
              </p>

              <p className="leading-8 text-neutral-300">
                We also serve nearby areas including Mesa, Chandler, Gilbert,
                Queen Creek, and San Tan Valley depending on route and
                availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto max-w-3xl space-y-6">
          <div>
            <h3 className="font-semibold text-white">
              Do you offer same-day auto parts delivery in Phoenix?
            </h3>
            <p className="mt-2 text-neutral-300">
              Yes, same-day service may be available depending on timing,
              routing, distance, and scheduling.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Who is this service for?
            </h3>
            <p className="mt-2 text-neutral-300">
              Repair shops, mechanics, dealerships, suppliers, and business
              customers in Phoenix who need dependable local delivery support.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              What kinds of items can you deliver?
            </h3>
            <p className="mt-2 text-neutral-300">
              Boxed auto parts, shop supplies, small equipment, documents, and
              other local business items.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              How do I request a Phoenix auto parts delivery?
            </h3>
            <p className="mt-2 text-neutral-300">
              You can text 480-742-8553 or use the request pickup form on the
              website to check availability.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Do you only serve Phoenix?
            </h3>
            <p className="mt-2 text-neutral-300">
              No. We also serve nearby areas including Mesa, Chandler, Gilbert,
              Queen Creek, and parts of the East Valley depending on route and
              availability.
            </p>
          </div>
        </div>
      </section>

      {/* LINKS */}
      <section className="border-y border-neutral-800 bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-orange-400">
                Nearby Delivery Areas
              </h2>

              <p className="leading-8 text-neutral-300">
                <a href="/mesa-delivery" className="text-orange-400 hover:underline">
                  Mesa
                </a>,{" "}
                <a href="/chandler-delivery" className="text-orange-400 hover:underline">
                  Chandler
                </a>,{" "}
                <a href="/gilbert-delivery" className="text-orange-400 hover:underline">
                  Gilbert
                </a>,{" "}
                <a href="/queen-creek-delivery" className="text-orange-400 hover:underline">
                  Queen Creek
                </a>,{" "}
                <a href="/san-tan-valley-delivery" className="text-orange-400 hover:underline">
                  San Tan Valley
                </a>,{" "}
                <a href="/service-areas" className="text-orange-400 hover:underline">
                  View All Service Areas
                </a>
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
              <h2 className="mb-4 text-2xl font-bold text-orange-400">
                Contact Freedom Line Freight Express
              </h2>

              <div className="space-y-3 text-neutral-300">
                <p className="flex items-start gap-2">
                  <Phone className="mt-1 text-orange-400" size={18} />
                  <span>Text: 480-742-8553</span>
                </p>

                <p className="flex items-start gap-2">
                  <MapPin className="mt-1 text-orange-400" size={18} />
                  <span>Serving Phoenix and nearby Arizona areas</span>
                </p>

                <p>
                  Use our request form to check same-day auto parts delivery
                  availability in Phoenix.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Need Auto Parts Delivered in Phoenix Today?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-orange-50">
            Get direct local delivery support for repair shops, dealerships,
            mechanics, and business customers in Phoenix, Arizona.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/request-pickup"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-orange-600 transition hover:bg-neutral-100"
            >
              Request Pickup
            </Link>

            <a
              href="sms:4807428553"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <Phone size={18} />
              Text 480-742-8553
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
