import { Link } from "react-router";
import { Car, Wrench, Package, Briefcase, CheckCircle, Phone } from "lucide-react";

export default function SanTanValleyDelivery() {
  return (
    <main className="bg-[#0b0f19] text-white">
      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            San Tan Valley, Arizona
          </p>

          <h1 className="max-w-5xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Vehicle Pickup and Delivery Service in San Tan Valley, AZ
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300 md:text-xl">
            Freedom Line Freight Express provides direct vehicle pickup and delivery in
            San Tan Valley. I also offer auto parts delivery, packages, documents, and
            business transport with fast local service.
          </p>

          <p className="mt-6 max-w-4xl text-lg font-semibold leading-8 text-white">
            Need someone to drive your car to a mechanic, dealership, or home in San Tan
            Valley? I provide direct drive away vehicle delivery with no towing and no trailers.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/request-pickup"
              className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-4 text-base font-bold text-white transition hover:bg-orange-600"
            >
              Request Pickup
            </Link>

            <a
              href="sms:4807428553"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-500 px-6 py-4 text-base font-bold text-orange-400 transition hover:bg-orange-500/10"
            >
              <Phone className="h-5 w-5" />
              Text 480-742-8553
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold text-orange-500">
              Reliable Delivery in San Tan Valley
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              I provide direct drive away service for vehicles that run and drive, along
              with auto parts delivery for repair shops, dealerships, and local businesses
              in San Tan Valley.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              If you are searching for vehicle delivery near me or someone to drive my car
              in San Tan Valley, Freedom Line Freight Express provides fast local service
              you can trust.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              My service is built for customers who want reliable transport without using
              tow trucks or trailers. I personally handle the job from pickup to delivery.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              I serve San Tan Valley neighborhoods including Johnson Ranch, Circle Cross
              Ranch, Skyline Ranch, Rancho Bella Vista, and nearby communities in Queen
              Creek and Florence.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-bold text-orange-500">Services Available</h2>

            <ul className="mt-6 space-y-4 text-lg text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-orange-500" />
                <span>Vehicle pickup and delivery for cars, SUVs, and light vehicles that run and drive</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-orange-500" />
                <span>Auto parts delivery for shops, mechanics, and dealerships</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-orange-500" />
                <span>Packages and document delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-orange-500" />
                <span>Business to business transport</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-orange-500" />
                <span>Same day or next day service when available</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-orange-500" />
                <span>Local and regional Arizona transport</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8">
          <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
            Services Available in San Tan Valley
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-[#101522] p-6 text-center">
              <Car className="mx-auto h-8 w-8 text-orange-500" />
              <h3 className="mt-4 text-2xl font-bold text-white">Vehicle Pickup</h3>
              <p className="mt-3 text-slate-300">
                Direct drive away service for vehicles that run and drive.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101522] p-6 text-center">
              <Wrench className="mx-auto h-8 w-8 text-orange-500" />
              <h3 className="mt-4 text-2xl font-bold text-white">Auto Parts</h3>
              <p className="mt-3 text-slate-300">
                Same day local parts delivery for shops, mechanics, and dealerships.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101522] p-6 text-center">
              <Package className="mx-auto h-8 w-8 text-orange-500" />
              <h3 className="mt-4 text-2xl font-bold text-white">Packages</h3>
              <p className="mt-3 text-slate-300">
                Fast local delivery for small packages, documents, and urgent items.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101522] p-6 text-center">
              <Briefcase className="mx-auto h-8 w-8 text-orange-500" />
              <h3 className="mt-4 text-2xl font-bold text-white">Business Transport</h3>
              <p className="mt-3 text-slate-300">
                Reliable delivery support for local businesses and professional clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-8">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          Why Choose Us in San Tan Valley
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-orange-500">Compared to App Delivery</h3>
            <ul className="mt-6 space-y-4 text-lg text-slate-300">
              <li>Random drivers</li>
              <li>Delays and multiple stops</li>
              <li>Not built for vehicle pickup</li>
              <li>Not ideal for auto parts or direct transport</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-orange-500 bg-orange-500/5 p-8">
            <h3 className="text-2xl font-bold text-orange-400">Freedom Line Freight Express</h3>
            <ul className="mt-6 space-y-4 text-lg text-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-orange-500" />
                <span>Direct service from pickup to delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-orange-500" />
                <span>No towing and no trailer</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-orange-500" />
                <span>Faster local delivery for San Tan Valley customers</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-orange-500" />
                <span>Built for businesses, repair shops, and local residents</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* LOCAL SEO TEXT */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-orange-500">
              Local Vehicle Delivery in San Tan Valley
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Many local customers need help moving a vehicle to a repair shop, dealership,
              family member, home, or another location in town. Instead of arranging a tow,
              I personally drive the vehicle when it runs and drives. That gives customers a
              direct and simple option for local transport.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              This service is useful for busy families, senior drivers, repair shops,
              dealerships, and anyone who needs dependable local vehicle pickup and delivery
              in San Tan Valley. It is also a good fit for customers searching online for
              someone to drive my car, drive my car to the mechanic, or vehicle pickup near me.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Nearby service areas include Queen Creek, Gilbert, Chandler, Mesa, Florence,
              and Phoenix. Many customers in these areas use our San Tan Valley vehicle
              pickup and delivery service for fast and reliable transport.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Learn more about our{" "}
              <Link to="/auto-parts-delivery" className="font-semibold text-orange-400 hover:text-orange-300">
                auto parts delivery service
              </Link>{" "}
              and{" "}
              <Link to="/services" className="font-semibold text-orange-400 hover:text-orange-300">
                full service options
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-8">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          San Tan Valley Delivery FAQ
        </h2>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-orange-500">
              Do you offer vehicle pickup in San Tan Valley?
            </h3>
            <p className="mt-3 text-lg leading-8 text-slate-300">
              Yes. I provide direct vehicle pickup and delivery throughout San Tan Valley
              and nearby areas for vehicles that run and drive.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-orange-500">
              Do you tow vehicles?
            </h3>
            <p className="mt-3 text-lg leading-8 text-slate-300">
              No. I personally drive vehicles that run and drive. I do not use a tow truck
              and I do not use a trailer.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-orange-500">
              Do you deliver auto parts in San Tan Valley?
            </h3>
            <p className="mt-3 text-lg leading-8 text-slate-300">
              Yes. I offer local auto parts delivery for repair shops, mechanics,
              dealerships, and business customers.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold text-orange-500">
              How fast is delivery?
            </h3>
            <p className="mt-3 text-lg leading-8 text-slate-300">
              Many local deliveries can be completed same day or next day depending on
              route, scheduling, and availability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-14 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Need Delivery in San Tan Valley?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Request pickup today or text for fast local service.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/request-pickup"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-4 text-base font-bold text-[#0b0f19] transition hover:bg-slate-100"
            >
              Request Pickup
            </Link>

            <a
              href="sms:4807428553"
              className="inline-flex items-center justify-center rounded-xl border border-white px-6 py-4 text-base font-bold text-white transition hover:bg-white/10"
            >
              Text 480-742-8553
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
