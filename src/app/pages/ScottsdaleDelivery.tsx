import { Link } from "react-router";
import {
  Car,
  Wrench,
  Package,
  Building2,
  MapPin,
  CheckCircle,
  Phone,
} from "lucide-react";

export default function ScottsdaleDelivery() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* HERO */}
      <section className="border-b border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-400">
            Scottsdale, Arizona
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Vehicle Pickup, Auto Parts & Same-Day Delivery in Scottsdale, AZ
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-neutral-300">
            Freedom Line Freight Express provides direct pickup and delivery in
            Scottsdale for vehicles, auto parts, packages, and business items.
            Same-day service may be available depending on route and scheduling.
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
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-orange-400">
            Reliable Delivery in Scottsdale
          </h2>

          <p className="mb-4 leading-8 text-neutral-300">
            We provide direct drive-away service for vehicles that run and
            drive, along with auto parts delivery for repair shops,
            dealerships, and local businesses in Scottsdale.
          </p>

          <p className="leading-8 text-neutral-300">
            Our service is flexible, fast, and designed for customers who need
            reliable transport without using trailers or tow trucks.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <h2 className="mb-4 text-2xl font-bold text-orange-400">
            Services Available in Scottsdale
          </h2>

          <ul className="space-y-3 text-neutral-300">
            <li>• Vehicle pickup and delivery (runs & drives)</li>
            <li>• Auto parts delivery</li>
            <li>• Packages and document delivery</li>
            <li>• Business-to-business transport</li>
            <li>• Same-day and scheduled delivery</li>
            <li>• Local and regional transport</li>
          </ul>
        </div>
      </section>

      {/* SERVICE ICONS */}
      <section className="border-y border-neutral-800 bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">
            Delivery Services for Scottsdale Customers
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 text-center">
              <Car className="mx-auto mb-4 text-orange-400" size={30} />
              <h3 className="mb-2 text-xl font-semibold">Vehicle Pickup</h3>
              <p className="text-sm text-neutral-300">
                Direct drive-away service for cars, SUVs, and small trucks.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 text-center">
              <Wrench className="mx-auto mb-4 text-orange-400" size={30} />
              <h3 className="mb-2 text-xl font-semibold">Auto Parts Delivery</h3>
              <p className="text-sm text-neutral-300">
                Fast local delivery support for shops, mechanics, and businesses.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 text-center">
              <Package className="mx-auto mb-4 text-orange-400" size={30} />
              <h3 className="mb-2 text-xl font-semibold">Packages & Documents</h3>
              <p className="text-sm text-neutral-300">
                Dependable transport for boxed items, equipment, and paperwork.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 text-center">
              <Building2 className="mx-auto mb-4 text-orange-400" size={30} />
              <h3 className="mb-2 text-xl font-semibold">Business Transport</h3>
              <p className="text-sm text-neutral-300">
                Reliable delivery support for local businesses and commercial needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Why Choose Freedom Line Freight Express in Scottsdale
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h3 className="mb-4 text-2xl font-bold text-orange-400">
              Better Than App-Based Delivery
            </h3>

            <ul className="space-y-3 text-neutral-300">
              <li>• Direct service instead of random drivers</li>
              <li>• Better fit for auto parts and business deliveries</li>
              <li>• Flexible communication and scheduling</li>
              <li>• More dependable local support</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-orange-500 bg-neutral-900 p-6">
            <h3 className="mb-4 text-2xl font-bold text-orange-400">
              Freedom Line Freight Express
            </h3>

            <ul className="space-y-3 text-neutral-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 text-orange-400" size={18} />
                <span>Owner-operated service</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 text-orange-400" size={18} />
                <span>Direct pickup and delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 text-orange-400" size={18} />
                <span>Same-day availability may be possible</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 text-orange-400" size={18} />
                <span>Built for customers and local businesses</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* AUTO PARTS CTA */}
      <section className="border-y border-neutral-800 bg-neutral-900">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Need Auto Parts Delivered in Scottsdale?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-neutral-300 leading-8">
            We also offer same-day auto parts delivery support for repair shops,
            mechanics, dealerships, and business customers in Scottsdale.
          </p>

          <Link
            to="/scottsdale-auto-parts-delivery"
            className="inline-block rounded-lg border border-orange-500 px-5 py-3 font-semibold text-orange-400 transition hover:bg-orange-500/10"
          >
            View Scottsdale Auto Parts Delivery
          </Link>
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
              Do you offer same-day delivery in Scottsdale?
            </h3>
            <p className="mt-2 text-neutral-300">
              Same-day service may be available depending on the route, distance,
              and scheduling.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Do you transport vehicles with trailers?
            </h3>
            <p className="mt-2 text-neutral-300">
              No. We offer direct drive-away service for vehicles that run and drive.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              What can you deliver in Scottsdale?
            </h3>
            <p className="mt-2 text-neutral-300">
              Vehicles, auto parts, packages, documents, and business items.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              How do I request service?
            </h3>
            <p className="mt-2 text-neutral-300">
              You can use the request pickup form or text 480-742-8553 to ask
              about availability.
            </p>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="border-y border-neutral-800 bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-orange-400">
                Nearby Delivery Areas
              </h2>

              <p className="leading-8 text-neutral-300">
                <a href="/phoenix-delivery" className="text-orange-400 hover:underline">
                  Phoenix
                </a>,{" "}
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
                  <span>Serving Scottsdale and nearby Arizona areas</span>
                </p>

                <p>
                  Use our request form to check pickup and delivery availability
                  in Scottsdale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-orange-500">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Need Pickup or Delivery in Scottsdale?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-orange-50">
            Get direct local support for vehicles, auto parts, packages, and
            business transport in Scottsdale, Arizona.
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
