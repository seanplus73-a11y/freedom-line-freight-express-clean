import { Link } from "react-router";
import { Phone, Car, Wrench, Package, Briefcase, CheckCircle, Clock, Shield } from "lucide-react";

export default function QueenCreekDelivery() {
  return (
    <div className="bg-[#0f172a] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop"
            alt="Vehicle pickup and delivery service in Queen Creek Arizona"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/35"></div>
        </div>

        <div className="relative mx-auto flex min-h-[460px] max-w-6xl items-center px-6 py-16">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-400">
              Queen Creek, Arizona
            </p>

            <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
              Vehicle Pickup and Delivery Service in Queen Creek, AZ
            </h1>

            <p className="mb-6 text-base text-gray-100 md:text-lg leading-7">
              Freedom Line Freight Express provides direct vehicle pickup and delivery in Queen Creek.
              I also help with auto parts, packages, documents, and business transport with fast local service.
            </p>

            <p className="mb-6 text-base text-gray-200 leading-7">
              Need someone to drive your car to a mechanic, dealership, or home in Queen Creek?
              I provide direct drive away vehicle delivery with no towing and no trailers.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                to="/request-pickup"
                className="rounded-lg bg-orange-500 px-6 py-3 text-center font-semibold hover:bg-orange-600"
              >
                Request Pickup
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
              Same day or next day service available in most areas
            </p>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-slate-800 bg-slate-900/50 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <Car className="h-6 w-6 text-orange-400" />
            <div>
              <p className="font-semibold">No Towing or Trailer</p>
              <p className="text-sm text-gray-400">Vehicles are personally driven</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-orange-400" />
            <div>
              <p className="font-semibold">Real Time Updates</p>
              <p className="text-sm text-gray-400">Direct communication from pickup to delivery</p>
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

      {/* INTRO */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.95fr]">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold text-orange-400 md:text-3xl">
                Reliable Delivery in Queen Creek
              </h2>

              <p className="mb-4 leading-7 text-gray-300">
                I provide direct drive away service for vehicles that run and drive, along with
                local delivery for auto parts, small packages, and business items in Queen Creek.
              </p>

              <p className="mb-4 leading-7 text-gray-300">
                If you are searching for vehicle delivery near me or someone to drive my car in Queen Creek,
                Freedom Line Freight Express provides fast local service you can trust.
              </p>

              <p className="leading-7 text-gray-300">
                My service is built for customers who want simple, reliable transport without
                tow trucks, trailers, or confusing handoffs. I personally handle the job from start to finish.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold text-orange-400">Services Available</h2>

              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Vehicle pickup and delivery for cars and SUVs that run and drive</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Drive your car to the mechanic, dealership, or service center</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Drive your vehicle home safely when you cannot do it yourself</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Auto parts delivery for shops, mechanics, and local businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Packages, documents, and direct business transport</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Same day and regional transport when available</span>
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
            Services Available in Queen Creek
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-[#101522] p-6 text-center">
              <Car className="mx-auto h-8 w-8 text-orange-400" />
              <h3 className="mt-4 text-xl font-bold">Vehicle Pickup</h3>
              <p className="mt-3 text-gray-300">
                Direct vehicle delivery for cars and SUVs without towing.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101522] p-6 text-center">
              <Wrench className="mx-auto h-8 w-8 text-orange-400" />
              <h3 className="mt-4 text-xl font-bold">Mechanic Trips</h3>
              <p className="mt-3 text-gray-300">
                Direct drop off to repair shops, dealerships, and service centers.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101522] p-6 text-center">
              <Package className="mx-auto h-8 w-8 text-orange-400" />
              <h3 className="mt-4 text-xl font-bold">Auto Parts</h3>
              <p className="mt-3 text-gray-300">
                Same day parts delivery for shops, suppliers, and mechanics.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101522] p-6 text-center">
              <Briefcase className="mx-auto h-8 w-8 text-orange-400" />
              <h3 className="mt-4 text-xl font-bold">Business Transport</h3>
              <p className="mt-3 text-gray-300">
                Direct local transport for business items, documents, and priority deliveries.
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
              Local Vehicle Delivery in Queen Creek
            </h2>

            <p className="mb-5 leading-7 text-gray-300">
              Many local customers need help moving a vehicle to a repair shop, dealership,
              family member, home, or another location around town. Instead of arranging a tow,
              I personally drive the vehicle when it runs and drives. That gives customers
              a direct and simple option for local transport in Queen Creek.
            </p>

            <p className="mb-5 leading-7 text-gray-300">
              This service is helpful for busy families, senior drivers, repair shops,
              dealerships, and anyone who needs dependable local vehicle pickup and delivery.
              It is also a strong fit for customers searching online for someone to drive my car,
              drive my car to the mechanic, or vehicle pickup near me.
            </p>

            <p className="mb-5 leading-7 text-gray-300">
              I serve Queen Creek neighborhoods and nearby areas including San Tan Valley,
              Gilbert, Chandler, Mesa, Florence, and Phoenix. Many customers in these areas
              use our Queen Creek vehicle pickup and delivery service for fast and reliable transport.
            </p>

            <p className="leading-7 text-gray-300">
              Learn more about our{" "}
              <Link to="/auto-parts-delivery" className="font-semibold text-orange-400 hover:text-orange-300">
                auto parts delivery service
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
            Queen Creek Delivery FAQ
          </h2>

          <div className="grid gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold text-orange-400">
                Do you offer vehicle pickup in Queen Creek?
              </h3>
              <p className="mt-3 leading-7 text-gray-300">
                Yes. I provide direct vehicle pickup and delivery throughout Queen Creek
                and nearby areas for vehicles that run and drive.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold text-orange-400">
                Do you tow vehicles?
              </h3>
              <p className="mt-3 leading-7 text-gray-300">
                No. I personally drive vehicles that run and drive. I do not use a tow truck
                and I do not use a trailer.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold text-orange-400">
                Can you drive my car to the mechanic in Queen Creek?
              </h3>
              <p className="mt-3 leading-7 text-gray-300">
                Yes. That is one of the most common requests. I can drive your vehicle
                to a mechanic, dealership, or service appointment.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-bold text-orange-400">
                How fast is delivery?
              </h3>
              <p className="mt-3 leading-7 text-gray-300">
                Many local deliveries can be completed same day or next day depending on
                route, scheduling, and availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-14">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Need Delivery in Queen Creek?
          </h2>

          <p className="mt-4 text-lg text-white/90">
            Request pickup today or text for fast local service.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/request-pickup"
              className="rounded-xl bg-white px-6 py-4 font-bold text-[#0f172a] transition hover:bg-slate-100"
            >
              Request Pickup
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
