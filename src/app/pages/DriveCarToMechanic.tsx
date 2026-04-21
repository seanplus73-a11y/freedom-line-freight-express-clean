import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  ArrowRight,
  Wrench,
  Clock,
  Shield,
  CheckCircle,
  MessageSquare,
  Car,
  MapPin,
} from "lucide-react";

export default function DriveCarToMechanic() {
  return (
    <>
      <Helmet>
        <title>
          Someone to Drive My Car to Mechanic Phoenix AZ | Freedom Line Freight
          Express
        </title>

        <meta
          name="description"
          content="Need someone to drive your car to the mechanic in Phoenix AZ? I personally drive your vehicle to the repair shop, dealership, or service center. No towing. Serving Phoenix, San Tan Valley, Queen Creek, Gilbert, Chandler, Mesa, and nearby Arizona areas."
        />

        <meta
          name="keywords"
          content="someone to drive my car to mechanic, drive car to mechanic Phoenix AZ, need someone to drive my car, car to repair shop service, car delivery to mechanic, no towing mechanic transport"
        />

        <link
          rel="canonical"
          href="https://www.flfreightco.com/drive-car-to-mechanic"
        />

        <meta
          property="og:title"
          content="Someone to Drive My Car to Mechanic Phoenix AZ | Freedom Line Freight Express"
        />
        <meta
          property="og:description"
          content="Need someone to drive your car to the mechanic? I personally drive your vehicle to the shop, dealership, or service center. No towing."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.flfreightco.com/drive-car-to-mechanic"
        />
        <meta
          property="og:site_name"
          content="Freedom Line Freight Express"
        />
        <meta
          property="og:image"
          content="https://www.flfreightco.com/og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Someone to Drive My Car to Mechanic Phoenix AZ | Freedom Line Freight Express"
        />
        <meta
          name="twitter:description"
          content="Need someone to drive your car to the mechanic? I personally drive your vehicle to the shop, dealership, or service center. No towing."
        />
        <meta
          name="twitter:image"
          content="https://www.flfreightco.com/og-image.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Freedom Line Freight Express",
            url: "https://www.flfreightco.com/drive-car-to-mechanic",
            telephone: "+1-480-742-8553",
            email: "dispatch@flfreightco.com",
            areaServed: [
              "Phoenix AZ",
              "San Tan Valley AZ",
              "Queen Creek AZ",
              "Gilbert AZ",
              "Chandler AZ",
              "Mesa AZ",
              "Arizona",
            ],
            description:
              "Someone to drive my car to mechanic service in Phoenix and across Arizona. I personally drive your vehicle to the repair shop, dealership, or service center. No towing or trailer.",
            serviceType: [
              "Drive Car to Mechanic Service",
              "Vehicle Pickup and Delivery",
              "Drive My Car Service",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "San Tan Valley",
              addressRegion: "AZ",
              addressCountry: "US",
            },
          })}
        </script>
      </Helmet>

      <div className="bg-neutral-900 text-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-neutral-950">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=1400&q=80"
              alt="Vehicle going to repair shop"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-black/60 px-4 py-2 rounded-full border border-orange-500">
                  <Wrench className="text-orange-500 mr-2" size={18} />
                  <span className="text-sm font-semibold">
                    Mechanic and Dealer Trips
                  </span>
                </div>

                <div className="flex items-center bg-black/60 px-4 py-2 rounded-full border border-orange-500">
                  <TruckPlaceholder />
                  <span className="text-sm font-semibold">
                    No Towing Needed
                  </span>
                </div>

                <div className="flex items-center bg-black/60 px-4 py-2 rounded-full border border-orange-500">
                  <Clock className="text-orange-500 mr-2" size={18} />
                  <span className="text-sm font-semibold">
                    Same Day Available
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Someone to Drive My Car to the Mechanic in Arizona
              </h1>

              <p className="text-2xl md:text-3xl font-bold mb-6 text-orange-500 leading-tight max-w-3xl">
                I Personally Drive It. No Towing. No Waiting.
              </p>

              <p className="text-lg md:text-2xl mb-4 text-gray-300 leading-relaxed max-w-3xl">
                Need your car at the shop but cannot take it yourself? I will
                drive it to the mechanic, repair shop, or dealership and treat
                it like my own.
              </p>

              <p className="text-lg md:text-xl mb-4 text-white font-semibold leading-relaxed max-w-3xl">
                Need someone to drive your car to the mechanic? I can help.
              </p>

              <p className="text-base md:text-lg mb-4 text-gray-400 leading-relaxed max-w-3xl">
                Serving Phoenix, San Tan Valley, Queen Creek, Gilbert, Chandler,
                Mesa and across Arizona. No trailer. No tow truck. Just direct
                door to door driving with real time updates.
              </p>

              <p className="text-base md:text-lg mb-10 text-gray-300 font-semibold leading-relaxed max-w-3xl">
                Same day or next day availability in most areas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors"
                >
                  Get Instant Quote
                  <ArrowRight className="ml-2" size={22} />
                </Link>

                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-black transition-colors"
                >
                  View Pricing
                </Link>
              </div>

              <p className="mt-4 text-sm md:text-base text-gray-300 font-medium">
                Text 4807428553 for a fast response
              </p>
            </div>
          </div>
        </section>

        {/* Why people use this service */}
        <section className="py-20 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why People Need{" "}
              <span className="text-orange-500">
                This Mechanic Delivery Service
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Sometimes you need your car at the mechanic but do not have the
              time, a second driver, or a safe way to get it there. I provide a
              simple solution by personally driving your vehicle for you.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="text-3xl mb-3">🛠️</div>
                <div className="text-xl font-bold mb-2">
                  Repair Shop Drop Off
                </div>
                <p className="text-gray-400 text-sm">
                  I can take your vehicle directly to your mechanic or service
                  center.
                </p>
              </div>

              <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="text-3xl mb-3">🏢</div>
                <div className="text-xl font-bold mb-2">Dealer Service Visit</div>
                <p className="text-gray-400 text-sm">
                  Need your car dropped off at the dealership for maintenance or
                  repairs? I can help.
                </p>
              </div>

              <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="text-3xl mb-3">⏰</div>
                <div className="text-xl font-bold mb-2">Busy Schedule Help</div>
                <p className="text-gray-400 text-sm">
                  Save time when work, family, or other responsibilities make it
                  hard to handle yourself.
                </p>
              </div>

              <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="text-3xl mb-3">🚗</div>
                <div className="text-xl font-bold mb-2">No Tow Truck Needed</div>
                <p className="text-gray-400 text-sm">
                  Your vehicle is personally driven, not loaded on a trailer or
                  tow truck.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-neutral-800 py-12 border-y border-neutral-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="text-orange-500 mr-2" size={32} />
                  <div className="text-lg font-bold">Owner Operated</div>
                </div>
                <div className="text-gray-400 font-semibold">Service</div>
              </div>

              <div>
                <div className="flex items-center justify-center mb-2">
                  <Shield className="text-orange-500 mr-2" size={32} />
                  <div className="text-lg font-bold">Fully Licensed</div>
                </div>
                <div className="text-gray-400 font-semibold">and Insured</div>
              </div>

              <div>
                <div className="flex items-center justify-center mb-2">
                  <Clock className="text-orange-500 mr-2" size={32} />
                  <div className="text-lg font-bold">Same Day and On Demand</div>
                </div>
                <div className="text-gray-400 font-semibold">Service</div>
              </div>

              <div>
                <div className="flex items-center justify-center mb-2">
                  <MessageSquare className="text-orange-500 mr-2" size={32} />
                  <div className="text-lg font-bold">Direct</div>
                </div>
                <div className="text-gray-400 font-semibold">Communication</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose this service */}
        <section className="py-24 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                A Better Way to Get Your Car to the{" "}
                <span className="text-orange-500">Mechanic</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Direct vehicle transport with no towing, no waiting, and no
                confusing handoffs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Mechanic and Dealership Drop Off
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  I can take your vehicle directly where it needs to go for
                  service or repairs.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Car className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Personal Handling of Your Vehicle
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  I personally drive your car and treat it with care from pickup
                  to drop off.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Save Time and Stress
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Skip the hassle of arranging rides, waiting for a tow truck,
                  or missing work.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Real Time Communication
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  You get direct updates during the trip, from pickup to
                  delivery.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Shield className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Fully Insured and Owner Operated
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Licensed, insured, and personally accountable on every trip.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Local Arizona Coverage
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Serving Phoenix, San Tan Valley, Queen Creek, Gilbert,
                  Chandler, Mesa and nearby Arizona areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                How It <span className="text-orange-500">Works</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4">Schedule Pickup</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Tell me where the vehicle is located and which mechanic,
                  dealership, or service center it needs to go to.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4">Direct Transport</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  I personally drive your vehicle with direct communication and
                  real time updates.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4">Drop Off Confirmed</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Your vehicle is delivered to the shop and the handoff is
                  confirmed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Related <span className="text-orange-500">Vehicle Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                I also help with other direct vehicle delivery needs across
                Arizona.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
                <Car className="text-orange-500 mx-auto mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-3">
                  Drive My Car Home Service
                </h3>
                <p className="text-gray-400 mb-6">
                  Need your vehicle driven home safely without towing? I can
                  help with that too.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center text-orange-500 font-bold hover:text-orange-400 transition-colors"
                >
                  Visit Homepage
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>

              <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
                <Shield className="text-orange-500 mx-auto mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-3">
                  Dealership Delivery
                </h3>
                <p className="text-gray-400">
                  Direct vehicle drop off for dealer service appointments and
                  maintenance visits.
                </p>
              </div>

              <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
                <Clock className="text-orange-500 mx-auto mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-3">
                  Same Day Vehicle Transport
                </h3>
                <p className="text-gray-400">
                  Fast local service when timing matters and you need help
                  quickly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local SEO Section */}
        <section className="py-20 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mechanic Car Delivery{" "}
              <span className="text-orange-500">Near You</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Looking for someone to drive your car to the mechanic near you? I
              serve Phoenix, San Tan Valley, Queen Creek, Gilbert, Chandler,
              Mesa, and nearby Arizona communities with direct, owner operated
              vehicle delivery.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Need Help Getting Your Car to the Mechanic?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto font-semibold">
              Get your instant mileage based quote now. No obligation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center bg-white text-orange-600 px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Request Pickup
                <ArrowRight className="ml-2" size={24} />
              </Link>

              <Link
                to="/pricing"
                className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                View Pricing
              </Link>
            </div>

            <p className="mt-4 text-sm md:text-base text-orange-100 font-medium">
              Text 4807428553 for a fast response
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

/**
 * Simple placeholder so you do not need to add another icon import
 * Replace with Truck if you want
 */
function TruckPlaceholder() {
  return (
    <svg
      className="text-orange-500 mr-2"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="1" y="3" width="15" height="13"></rect>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
  );
}
