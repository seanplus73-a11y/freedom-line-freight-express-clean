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

export default function CasaGrandeDelivery() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* HERO */}
      <section className="border-b border-neutral-800 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-400">
            Casa Grande, Arizona
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Vehicle Pickup, Auto Parts & Same-Day Delivery in Casa Grande, AZ
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-neutral-300">
            Freedom Line Freight Express provides direct pickup and delivery in
            Casa Grande for vehicles, auto parts, packages, and business
            transport. Same-day service may be available depending on route and
            scheduling.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/request-pickup"
              className="rounded-xl bg-orange-500 px-6 py-3 font-semibold hover:bg-orange-600"
            >
              Request Pickup
            </Link>

            <a
              href="sms:4807428553"
              className="flex items-center justify-center gap-2 rounded-xl border border-orange-500 px-6 py-3 text-orange-400 hover:bg-orange-500/10"
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
            Reliable Delivery in Casa Grande
          </h2>

          <p className="mb-4 text-neutral-300 leading-8">
            We provide direct drive-away service for vehicles that run and
            drive, along with auto parts delivery for repair shops,
            dealerships, and local businesses in Casa Grande.
          </p>

          <p className="text-neutral-300 leading-8">
            Our service is built for customers who want fast, reliable transport
            without using trailers or tow trucks.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <h2 className="mb-4 text-2xl font-bold text-orange-400">
            Services Available
          </h2>

          <ul className="space-y-3 text-neutral-300">
            <li>• Vehicle pickup & delivery (runs & drives)</li>
            <li>• Auto parts delivery</li>
            <li>• Packages & document delivery</li>
            <li>• Business transport</li>
            <li>• Same-day delivery when available</li>
            <li>• Local & regional transport</li>
          </ul>
        </div>
      </section>

      {/* SERVICE TYPES */}
      <section className="border-y border-neutral-800 bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Services Available in Casa Grande
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-neutral-950 rounded-2xl border border-neutral-800 text-center">
              <Car className="mx-auto mb-3 text-orange-400" />
              <h3 className="font-semibold">Vehicle Pickup</h3>
              <p className="text-sm text-neutral-400">
                Direct drive-away service for cars and SUVs.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 rounded-2xl border border-neutral-800 text-center">
              <Wrench className="mx-auto mb-3 text-orange-400" />
              <h3 className="font-semibold">Auto Parts</h3>
              <p className="text-sm text-neutral-400">
                Same-day parts delivery for shops and mechanics.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 rounded-2xl border border-neutral-800 text-center">
              <Package className="mx-auto mb-3 text-orange-400" />
              <h3 className="font-semibold">Packages</h3>
              <p className="text-sm text-neutral-400">
                Local delivery for small packages and equipment.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 rounded-2xl border border-neutral-800 text-center">
              <Building2 className="mx-auto mb-3 text-orange-400" />
              <h3 className="font-semibold">Business Transport</h3>
              <p className="text-sm text-neutral-400">
                Reliable delivery for local businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold mb-8">
          Why Choose Us in Casa Grande
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
            <h3 className="text-xl font-bold mb-4 text-orange-400">
              Compared to App Delivery
            </h3>
            <ul className="text-neutral-300 space-y-2">
              <li>• Random drivers</li>
              <li>• Delays and multiple stops</li>
              <li>• Not built for auto parts</li>
            </ul>
          </div>

          <div className="bg-neutral-900 p-6 rounded-2xl border border-orange-500">
            <h3 className="text-xl font-bold mb-4 text-orange-400">
              Freedom Line Freight Express
            </h3>
            <ul className="space-y-2 text-neutral-200">
              <li className="flex gap-2">
                <CheckCircle size={16} /> Direct service
              </li>
              <li className="flex gap-2">
                <CheckCircle size={16} /> Faster local delivery
              </li>
              <li className="flex gap-2">
                <CheckCircle size={16} /> Built for businesses
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* AUTO PARTS CTA */}
      <section className="bg-neutral-900 border-y border-neutral-800 py-14 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Auto Parts Delivered?
        </h2>

        <p className="text-neutral-300 mb-6">
          We provide fast local parts delivery in Casa Grande.
        </p>

        <Link
          to="/casa-grande-auto-parts-delivery"
          className="border border-orange-500 px-6 py-3 rounded-lg text-orange-400 hover:bg-orange-500/10"
        >
          View Casa Grande Auto Parts Delivery
        </Link>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto max-w-3xl space-y-6">
          <div>
            <h3 className="font-semibold text-white">
              Do you offer same-day delivery in Casa Grande?
            </h3>
            <p className="mt-2 text-neutral-300">
              Same-day service may be available depending on the route,
              distance, and scheduling.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Do you transport vehicles with trailers?
            </h3>
            <p className="mt-2 text-neutral-300">
              No. We offer direct drive-away service for vehicles that run and
              drive.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              What can you deliver in Casa Grande?
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
                <a href="/queen-creek-delivery" className="text-orange-400">
                  Queen Creek
                </a>,{" "}
                <a href="/san-tan-valley-delivery" className="text-orange-400">
                  San Tan Valley
                </a>,{" "}
                <a href="/chandler-delivery" className="text-orange-400">
                  Chandler
                </a>,{" "}
                <a href="/gilbert-delivery" className="text-orange-400">
                  Gilbert
                </a>,{" "}
                <a href="/mesa-delivery" className="text-orange-400">
                  Mesa
                </a>,{" "}
                <a href="/phoenix-delivery" className="text-orange-400">
                  Phoenix
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
                  <span>Serving Casa Grande and nearby Arizona areas</span>
                </p>

                <p>
                  Use our request form to check pickup and delivery availability
                  in Casa Grande.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-orange-500 py-14 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Delivery in Casa Grande?
        </h2>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/request-pickup"
            className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold"
          >
            Request Pickup
          </Link>

          <a
            href="sms:4807428553"
            className="border border-white px-6 py-3 rounded-xl"
          >
            Text 480-742-8553
          </a>
        </div>
      </section>
    </div>
  );
}
