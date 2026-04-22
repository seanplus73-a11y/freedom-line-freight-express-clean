import { Phone, CheckCircle2, CarFront, Wrench, Shield, Clock } from "lucide-react";
import { Link } from "react-router";

export default function DriveMyCarToDealer() {
  return (
    <div className="bg-[#0f172a] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/drive-my-car-dealer.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-orange-400/60 bg-black/40 px-4 py-2 text-sm font-semibold text-orange-300">
                No Towing Needed
              </span>
              <span className="rounded-full border border-orange-400/60 bg-black/40 px-4 py-2 text-sm font-semibold text-orange-300">
                Personally Driven
              </span>
              <span className="rounded-full border border-orange-400/60 bg-black/40 px-4 py-2 text-sm font-semibold text-orange-300">
                Fast Local Response
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Drive My Car to Dealer in San Tan Valley AZ
            </h1>

            <p className="mb-6 text-lg leading-8 text-gray-200">
              Need someone to drive your car to a dealership, mechanic, or service
              center? I provide direct vehicle pickup and delivery with no towing
              or trailers.
            </p>

            <p className="mb-8 text-base leading-8 text-gray-300 md:text-lg">
              I personally drive your vehicle from pickup to drop off and treat it
              like my own. Serving San Tan Valley, Queen Creek, Chandler, Gilbert,
              Mesa, Phoenix, and surrounding Arizona areas.
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
              <p className="font-semibold">No towing or trailers</p>
              <p className="text-sm text-gray-400">
                Direct owner operated vehicle transport
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-orange-400" />
            <div>
              <p className="font-semibold">Flexible scheduling</p>
              <p className="text-sm text-gray-400">
                Fast local response and appointment drop offs
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-orange-400" />
            <div>
              <p className="font-semibold">Protected during transport</p>
              <p className="text-sm text-gray-400">
                Careful handling from pickup to delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Car Delivery to Dealer or Mechanic
            </h2>
            <p className="leading-8 text-gray-300">
              Whether your car needs service, repairs, inspection, or trade in, I
              can pick it up and drive it directly to the dealership or repair shop
              for you.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="mb-4 inline-flex rounded-xl bg-orange-500/15 p-3">
                <CarFront className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Dealer Drop Off</h3>
              <p className="leading-7 text-gray-300">
                Need to get your car to a dealership service center, inspection
                appointment, or trade in visit? I can handle the drop off for you.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="mb-4 inline-flex rounded-xl bg-orange-500/15 p-3">
                <Wrench className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Mechanic Transport</h3>
              <p className="leading-7 text-gray-300">
                I drive vehicles directly to a mechanic or repair shop when you do
                not have time to take it yourself.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="mb-4 inline-flex rounded-xl bg-orange-500/15 p-3">
                <CheckCircle2 className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Return to Home Option</h3>
              <p className="leading-7 text-gray-300">
                If needed, I can also return the vehicle back home after service,
                depending on scheduling and location.
              </p>
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
              Clear starting rates based on mileage. Final price may vary depending
              on timing, route, and service needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="mb-2 text-sm text-gray-400">Local</p>
              <h3 className="mb-2 text-2xl font-bold">0 to 25 miles</h3>
              <p className="mb-4 text-4xl font-bold text-orange-400">$85</p>
              <p className="text-sm leading-6 text-gray-400">
                Great for nearby dealership or mechanic drop offs
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="mb-2 text-sm text-gray-400">Extended</p>
              <h3 className="mb-2 text-2xl font-bold">25 to 50 miles</h3>
              <p className="mb-4 text-4xl font-bold text-orange-400">$140</p>
              <p className="text-sm leading-6 text-gray-400">
                Good for metro area appointments and flexible scheduling
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="mb-2 text-sm text-gray-400">Regional</p>
              <h3 className="mb-2 text-2xl font-bold">50 to 150 miles</h3>
              <p className="mb-4 text-4xl font-bold text-orange-400">$285</p>
              <p className="text-sm leading-6 text-gray-400">
                For longer Arizona runs to service centers or dealer locations
              </p>
            </div>

            <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-7">
              <p className="mb-2 text-sm text-orange-200">Long Distance</p>
              <h3 className="mb-2 text-2xl font-bold">150 plus miles</h3>
              <p className="mb-4 text-3xl font-bold text-white">Custom Quote</p>
              <p className="text-sm leading-6 text-orange-100">
                Best for custom routes and statewide delivery needs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold">Service Area</h2>
              <p className="leading-8 text-gray-300">
                Based in San Tan Valley and Queen Creek. Serving Phoenix, Mesa,
                Gilbert, Chandler, Scottsdale, Tempe, Tucson, and surrounding
                Arizona areas.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold">What Is Included</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Door to door service</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Secure vehicle handling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-400" />
                  <span>Direct communication and updates</span>
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
              Need your car delivered to a dealer today
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
