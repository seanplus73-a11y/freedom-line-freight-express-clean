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

export default function GilbertAutoPartsDelivery() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* HERO */}
      <section className="border-b border-neutral-800">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-400">
            Gilbert, Arizona
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Same-Day Auto Parts Delivery in Gilbert, AZ
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-neutral-300">
            Freedom Line Freight Express provides reliable same-day auto parts
            delivery in Gilbert for repair shops, mechanics, dealerships, and
            local businesses. We help keep your workflow moving with fast pickup,
            direct delivery, and flexible scheduling.
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
              className="rounded-xl border border-orange-500 px-6 py-3 font-semibold text-orange-400 hover:bg-orange-500/10"
            >
              Text 480-742-8553
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-orange-400">
            Fast Auto Parts Delivery for Gilbert Repair Shops
          </h2>

          <p className="mb-4 text-neutral-300 leading-8">
            We support local mechanics, garages, and dealerships in Gilbert with
            direct pickup and delivery of auto parts, boxed items, and essential
            shop supplies.
          </p>

          <p className="text-neutral-300 leading-8">
            Whether you're waiting on a critical part or need reliable delivery
            support, we help reduce downtime with fast and dependable service.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <h2 className="mb-4 text-2xl font-bold text-orange-400">
            Services in Gilbert
          </h2>

          <ul className="space-y-3 text-neutral-300">
            <li>• Same-day auto parts delivery</li>
            <li>• Repair shop parts runs</li>
            <li>• Dealership delivery support</li>
            <li>• Packages & small equipment</li>
            <li>• Business transport services</li>
            <li>• Flexible scheduling</li>
          </ul>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="border-y border-neutral-800 bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Who We Help in Gilbert
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-neutral-950 rounded-2xl border border-neutral-800">
              <Wrench className="text-orange-400 mb-3" />
              <h3 className="font-semibold">Repair Shops</h3>
              <p className="text-neutral-300 text-sm">
                Keep jobs moving with fast parts delivery.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 rounded-2xl border border-neutral-800">
              <Building2 className="text-orange-400 mb-3" />
              <h3 className="font-semibold">Dealerships</h3>
              <p className="text-neutral-300 text-sm">
                Reliable support for parts movement.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 rounded-2xl border border-neutral-800">
              <Package className="text-orange-400 mb-3" />
              <h3 className="font-semibold">Suppliers</h3>
              <p className="text-neutral-300 text-sm">
                Deliver parts to customers fast.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 rounded-2xl border border-neutral-800">
              <Truck className="text-orange-400 mb-3" />
              <h3 className="font-semibold">Businesses</h3>
              <p className="text-neutral-300 text-sm">
                Dependable local delivery support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="mb-4 text-2xl font-bold text-orange-400">
          Nearby Areas We Serve
        </h2>

        <p className="text-neutral-300 leading-8">
          <a href="/chandler-delivery" className="text-orange-400 hover:underline">Chandler</a>,{" "}
          <a href="/mesa-delivery" className="text-orange-400 hover:underline">Mesa</a>,{" "}
          <a href="/phoenix-delivery" className="text-orange-400 hover:underline">Phoenix</a>,{" "}
          <a href="/queen-creek-delivery" className="text-orange-400 hover:underline">Queen Creek</a>,{" "}
          <a href="/san-tan-valley-delivery" className="text-orange-400 hover:underline">San Tan Valley</a>
        </p>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-center py-14">
        <h2 className="text-3xl font-bold mb-4">
          Need Auto Parts Delivered in Gilbert?
        </h2>

        <p className="mb-6 text-orange-100">
          Fast, reliable, and direct service for local businesses.
        </p>

        <Link
          to="/request-pickup"
          className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100"
        >
          Request Pickup
        </Link>
      </section>
    </div>
  );
}
