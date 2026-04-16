import { Link } from "react-router";
import {
  Wrench,
  Clock,
  CheckCircle,
  Package,
  Building2,
  Phone,
} from "lucide-react";

export default function ChandlerAutoPartsDelivery() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <section className="border-b border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-400">
            Chandler, Arizona
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Same-Day Auto Parts Delivery in Chandler, AZ
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-neutral-300">
            Freedom Line Freight Express provides reliable auto parts delivery in
            Chandler for repair shops, mechanics, dealerships, and local
            businesses. We help keep jobs moving with direct pickup, fast local
            delivery, and flexible scheduling.
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
              className="inline-flex items-center justify-center rounded-xl border border-orange-500 px-6 py-3 font-semibold text-orange-400 transition hover:bg-orange-500/10"
            >
              Text 480-742-8553
            </a>
          </div>
        </div>
      </section>

      {/* Main Intro */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-orange-400">
            Fast Parts Delivery for Repair Shops in Chandler
          </h2>

          <p className="mb-4 leading-8 text-neutral-300">
            If your shop is waiting on brake pads, boxed parts, dealership
            items, small equipment, or urgent automotive supplies, Freedom Line
            Freight Express can help with direct local delivery in Chandler.
          </p>

          <p className="leading-8 text-neutral-300">
            We focus on same-day support for repair shops and business customers
            who need dependable delivery instead of slow multi-stop app-based
            service.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <h2 className="mb-4 text-2xl font-bold text-orange-400">
            Services Available in Chandler
          </h2>

          <ul className="space-y-3 text-neutral-300">
            <li>• Same-day auto parts delivery</li>
            <li>• Repair shop and mechanic support</li>
            <li>• Dealer-to-shop parts runs</li>
            <li>• Boxed items and equipment delivery</li>
            <li>• Documents and small package transport</li>
            <li>• Scheduled and urgent local delivery</li>
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-neutral-800 bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Why Chandler Businesses Choose Freedom Line Freight Express
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
              <Clock className="mb-4 text-orange-400" size={28} />
              <h3 className="mb-3 text-xl font-semibold text-white">
                Same-Day Availability
              </h3>
              <p className="text-neutral-300">
                Fast response and local delivery options to help reduce downtime.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
              <Wrench className="mb-4 text-orange-400" size={28} />
              <h3 className="mb-3 text-xl font-semibold text-white">
                Built for Mechanics
              </h3>
              <p className="text-neutral-300">
                Designed for repair shops, garages, and service departments that
                need reliable parts runs.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
              <Package className="mb-4 text-orange-400" size={28} />
              <h3 className="mb-3 text-xl font-semibold text-white">
                Direct Pickup & Drop-Off
              </h3>
              <p className="text-neutral-300">
                No unnecessary handoffs. Direct service helps keep deliveries
                simple and dependable.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
              <Building2 className="mb-4 text-orange-400" size={28} />
              <h3 className="mb-3 text-xl font-semibold text-white">
                Business-Friendly
              </h3>
              <p className="text-neutral-300">
                Reliable service for repeat business needs, shop support, and
                local delivery requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Better than app-based */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-4 text-center text-3xl font-bold text-white">
          Better Than App-Based Delivery for Auto Parts
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-center leading-8 text-neutral-300">
          Freedom Line Freight Express focuses on direct local transport for
          auto parts, shop supplies, and business items in Chandler.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h3 className="mb-4 text-2xl font-bold text-red-300">
              App-Based Delivery
            </h3>
            <ul className="space-y-3 text-neutral-300">
              <li>• Random driver availability</li>
              <li>• Multi-stop delays</li>
              <li>• Not built for repair shop workflows</li>
              <li>• Less consistent business support</li>
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
                <span>Same-day support may be available</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-neutral-800 bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto max-w-3xl space-y-6">
            <div>
              <h3 className="font-semibold text-white">
                Do you offer same-day auto parts delivery in Chandler?
              </h3>
              <p className="mt-2 text-neutral-300">
                Yes, same-day delivery may be available depending on timing,
                route, distance, and scheduling.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Who is this service for?
              </h3>
              <p className="mt-2 text-neutral-300">
                Repair shops, mechanics, dealerships, local businesses, and
                customers who need fast parts delivery in Chandler.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                What kinds of items can you deliver?
              </h3>
              <p className="mt-2 text-neutral-300">
                Boxed auto parts, supplies, documents, small equipment, and
                other local business items.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                How do I request delivery?
              </h3>
              <p className="mt-2 text-neutral-300">
                You can text 480-742-8553 or use the request pickup form on the
                website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby links */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-orange-400">
            Nearby Delivery Areas
          </h2>

          <p className="leading-8 text-neutral-300">
            <a href="/mesa-delivery" className="text-orange-400 hover:underline">
              Mesa
            </a>,{" "}
            <a href="/gilbert-delivery" className="text-orange-400 hover:underline">
              Gilbert
            </a>,{" "}
            <a href="/phoenix-delivery" className="text-orange-400 hover:underline">
              Phoenix
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
      </section>

      {/* CTA */}
      <section className="bg-orange-500">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Need Auto Parts Delivered in Chandler Today?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-orange-50">
            Get fast, direct local delivery support for repair shops,
            dealerships, mechanics, and business customers.
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
