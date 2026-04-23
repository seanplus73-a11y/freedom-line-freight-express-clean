import {
  Phone,
  CheckCircle2,
  CarFront,
  Package,
  Truck,
  Shield,
  Clock,
  MapPin,
} from "lucide-react";
import { Link } from "react-router";

export default function TempeDelivery() {
  return (
    <div className="bg-[#0f172a] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/tempe-delivery.jpg')",
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
                No Towing Needed
              </span>
              <span className="rounded-full border border-orange-400/60 bg-black/40 px-4 py-2 text-sm font-semibold text-orange-300">
                Direct Local Service
              </span>
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">
              Tempe Arizona Delivery Service
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Vehicle Pickup and Delivery Service in Tempe AZ
            </h1>

            <p className="mb-6 text-lg leading-8 text-gray-200">
              Need someone to move your car in Tempe without using a tow truck
              or trailer? I personally drive vehicles where they need to go with
              direct pickup and drop off service.
            </p>

            <p className="mb-8 text-base leading-8 text-gray-300 md:text-lg">
              I also provide auto parts delivery, document delivery, and small
              business transport across Tempe and surrounding East Valley areas.
              Fast local service with real time updates.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-orange-600"
              >
                Request Pickup
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
            <CarFront className="h-5 w-5 text-orange-400" />
            <div>
              <p className="font-semibold">Personally driven vehicles</p>
              <p className="text-sm text-gray-400">
                No towing or trailer needed
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-orange-400" />
            <div>
              <p className="font-semibold">Fast local response</p>
              <p className="text-sm text-gray-400">
                Same day and next day scheduling
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
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Delivery Services Available in Tempe
            </h2>
            <p className="leading-8 text-gray-300">
              I provide direct local delivery for vehicles, auto parts, small
              packages, and business items across Tempe. Simple service, clear
              communication, and dependable local transport.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="mb-4 inline-flex rounded-xl bg-orange-500/15 p-3">
                <CarFront className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Vehicle Pickup</h3>
              <p className="leading-7 text-gray-300">
                I personally drive cars, SUVs, and light vehicles to a mechanic,
                dealership, family member, or new location in Tempe.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="mb-4 inline-flex rounded-xl bg-orange-500/15 p-3">
                <Truck className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Auto Parts Delivery</h3>
              <p className="leading-7 text-gray-300">
                Fast local delivery for repair shops, dealers, suppliers, and
                businesses needing parts moved quickly and directly.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="mb-4 inline-flex rounded-xl bg-orange-500/15 p-3">
                <Package className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Business Items</h3>
              <p className="leading-7 text-gray-300">
                Documents, small equipment, and local business transport with
                flexible pickup and drop off scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Why People Choose This Service
            </h2>
            <p className="leading-8 text-gray-300">
              This service is a good fit when you need help moving a vehicle but
              do not want the hassle of towing. It is also useful for dealerships,
              repair shops, and local businesses that need direct transport.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-5 text-2xl font-bold">Good For</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Getting your car to a mechanic or dealership</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Moving a car to family or a new location</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Buying or selling a car locally</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Auto parts and local business transport</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-8">
              <h3 className="mb-5 text-2xl font-bold">What You Get</h3>
              <ul className="space-y-3 text-gray-200">
                <li>Owner operated direct service</li>
                <li>No towing or trailers</li>
                <li>Flexible same day and scheduled options</li>
                <li>Real time updates during transport</li>
                <li>Licensed and insured handling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Simple Distance Based Pricing
            </h2>
            <p className="leading-8 text-gray-300">
              Clear starting rates based on mileage. Final quote may vary
              depending on timing, route, and service details.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="mb-2 text-sm text-gray-400">Local</p>
              <h3 className="mb-2 text-2xl font-bold">0 to 25 miles</h3>
              <p className="mb-4 text-4xl font-bold text-orange-400">$85</p>
              <p className="text-sm leading-6 text-gray-400">
                Great for nearby mechanic or dealer trips
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="mb-2 text-sm text-gray-400">Extended</p>
              <h3 className="mb-2 text-2xl font-bold">25 to 50 miles</h3>
              <p className="mb-4 text-4xl font-bold text-orange-400">$140</p>
              <p className="text-sm leading-6 text-gray-400">
                Best for metro Tempe and East Valley transport
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="mb-2 text-sm text-gray-400">Regional</p>
              <h3 className="mb-2 text-2xl font-bold">50 to 150 miles</h3>
              <p className="mb-4 text-4xl font-bold text-orange-400">$285</p>
              <p className="text-sm leading-6 text-gray-400">
                Good for longer Arizona city to city runs
              </p>
            </div>

            <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-7">
              <p className="mb-2 text-sm text-orange-200">Long Distance</p>
              <h3 className="mb-2 text-2xl font-bold">150 plus miles</h3>
              <p className="mb-4 text-3xl font-bold text-white">Custom Quote</p>
              <p className="text-sm leading-6 text-orange-100">
                Best for custom routes and statewide delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                <MapPin className="h-6 w-6 text-orange-400" />
                Service Area
              </h2>
              <p className="leading-8 text-gray-300">
                Serving Tempe, Phoenix, Mesa, Chandler, Gilbert, Scottsdale,
                Queen Creek, San Tan Valley, and surrounding Arizona areas.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold">What Is Included</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Door to door pickup and drop off</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Secure vehicle and item handling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Direct communication throughout transport</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Owner operated service with flexible scheduling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-orange-500 px-8 py-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Need delivery service in Tempe today
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base text-orange-50">
              Text me your pickup and drop off location for a fast quote and
              availability.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 transition hover:bg-orange-50"
              >
                Request Pickup
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
