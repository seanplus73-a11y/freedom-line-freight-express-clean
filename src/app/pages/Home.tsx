import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  ArrowRight,
  Truck,
  Clock,
  Shield,
  CheckCircle,
  MessageSquare,
  Car,
  Package,
  Briefcase,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Drive My Car Home Service Phoenix AZ | Freedom Line Freight Express
        </title>

        <meta
          name="description"
          content="Need someone to drive your car home or to the mechanic in Phoenix AZ? I personally drive your vehicle to your home, shop, dealership, or destination. No towing. Serving Phoenix, San Tan Valley, Queen Creek, Gilbert, Chandler, Mesa, and across Arizona."
        />

        <meta
          name="keywords"
          content="drive my car home Phoenix AZ, someone to drive my car to mechanic, someone to drive my car, car driving service Arizona, no towing vehicle delivery, vehicle pickup and delivery Arizona, drive your car home service"
        />

        <link rel="canonical" href="https://www.flfreightco.com/" />

        <meta
          property="og:title"
          content="Drive My Car Home Service Phoenix AZ | Freedom Line Freight Express"
        />
        <meta
          property="og:description"
          content="Need someone to drive your car home or to the mechanic? I personally drive your vehicle with no towing across Phoenix and nearby Arizona areas."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.flfreightco.com/" />
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
          content="Drive My Car Home Service Phoenix AZ | Freedom Line Freight Express"
        />
        <meta
          name="twitter:description"
          content="Need someone to drive your car home or to the mechanic? I personally drive your vehicle with no towing across Phoenix and nearby Arizona areas."
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
            url: "https://www.flfreightco.com/",
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
              "Drive my car home and drive car to mechanic service in Phoenix and across Arizona. I personally drive your vehicle to your home, shop, dealership, or destination. No towing or trailer.",
            serviceType: [
              "Drive My Car Home Service",
              "Drive Car to Mechanic Service",
              "Vehicle Pickup and Delivery",
              "Auto Parts Delivery",
              "Direct Business Transport",
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
              src="https://images.unsplash.com/photo-1770289711980-c7663e18bb16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwdmVoaWNsZSUyMHBhcmtlZCUyMHJlc2lkZW50aWFsJTIwZHJpdmV3YXklMjBtb2RrbilMjBob3VzZXxlbnwxfHx8fDE3NzE2NDg2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Blue vehicle parked in driveway"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-black/60 px-4 py-2 rounded-full border border-orange-500">
                  <Clock className="text-orange-500 mr-2" size={18} />
                  <span className="text-sm font-semibold">
                    Same Day Available
                  </span>
                </div>

                <div className="flex items-center bg-black/60 px-4 py-2 rounded-full border border-orange-500">
                  <Truck className="text-orange-500 mr-2" size={18} />
                  <span className="text-sm font-semibold">
                    No Towing Needed
                  </span>
                </div>

                <div className="flex items-center bg-black/60 px-4 py-2 rounded-full border border-orange-500">
                  <CheckCircle className="text-orange-500 mr-2" size={18} />
                  <span className="text-sm font-semibold">
                    Direct Transport
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Drive My Car Home Service in Arizona
              </h1>

              <p className="text-2xl md:text-3xl font-bold mb-6 text-orange-500 leading-tight max-w-3xl">
                I Personally Drive It. No Towing. No Waiting.
              </p>

              <p className="text-lg md:text-2xl mb-4 text-gray-300 leading-relaxed max-w-3xl">
                Need your car at the shop but can’t take it yourself? I will
                drive it there for you and treat it like my own.
              </p>

              <p className="text-lg md:text-xl mb-4 text-white font-semibold leading-relaxed max-w-3xl">
                Need someone to drive your car home or to the mechanic? I can
                help.
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

        {/* Main Service Intro */}
        <section className="py-20 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need{" "}
              <span className="text-orange-500">
                Someone to Drive Your Car?
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              I help with real everyday situations like driving your car home,
              taking your car to the mechanic, delivering it to a dealership,
              or moving it to another location across Arizona.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="text-3xl mb-3">🏠</div>
                <div className="text-xl font-bold mb-2">Drive Your Car Home</div>
                <p className="text-gray-400 text-sm">
                  Safe, direct transport when you need your vehicle driven home
                  without towing.
                </p>
              </div>

              <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="text-3xl mb-3">🔧</div>
                <div className="text-xl font-bold mb-2">
                  Drive to the Mechanic
                </div>
                <p className="text-gray-400 text-sm">
                  Need someone to drive your car to the mechanic or dealership?
                  I can help.
                </p>
              </div>

              <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="text-3xl mb-3">🚗</div>
                <div className="text-xl font-bold mb-2">
                  Dealer and Auction Trips
                </div>
                <p className="text-gray-400 text-sm">
                  Pickup and delivery support for dealerships, auctions, buyers,
                  and sellers.
                </p>
              </div>

              <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="text-3xl mb-3">📦</div>
                <div className="text-xl font-bold mb-2">
                  Parts, Packages and Business Items
                </div>
                <p className="text-gray-400 text-sm">
                  Direct transport for auto parts, documents, packages, and
                  business deliveries.
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

        {/* Why Choose Us */}
        <section className="py-24 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Choose{" "}
                <span className="text-orange-500">
                  Freedom Line Freight Express?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Direct vehicle transport and delivery service with no trailers,
                no transfers, and no unnecessary delays.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Same Day or Next Day Availability
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Fast turnaround times for urgent vehicle transport and delivery
                  needs.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Truck className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  No Tow Truck or Trailer Needed
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  I personally drive your vehicle instead of loading it onto a
                  trailer or waiting on large carrier routes.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Direct Transport with No Extra Delays
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  No transfers, no unnecessary stops, and no wasted time between
                  pickup and delivery.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Car className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Focused Care for Your Vehicle
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Your car receives direct attention from pickup to drop off.
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
                  Call, text, or email directly for updates during the transport
                  process.
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
                <h3 className="text-2xl font-bold mb-4">Request Pickup</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Tell me where the vehicle is and where it needs to go, whether
                  that is your home, mechanic, dealership, or another location.
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
                <h3 className="text-2xl font-bold mb-4">Safe Delivery</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Your vehicle or item is delivered and condition is confirmed at
                  drop off.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Vehicle Transport and{" "}
                <span className="text-orange-500">Courier Delivery Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Direct, owner operated transport with no third party drivers,
                towing, or app based delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
                <Car className="text-orange-500 mx-auto mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-3">
                  Drive My Car Home Service
                </h3>
                <p className="text-gray-400">
                  Direct residential transport when you need your vehicle driven
                  home safely.
                </p>
              </div>

              <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
                <Truck className="text-orange-500 mx-auto mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-3">
                  Drive Car to Mechanic Service
                </h3>
                <p className="text-gray-400">
                  Need someone to drive your car to the mechanic, repair shop,
                  or dealership? I can help.
                </p>
              </div>

              <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
                <Shield className="text-orange-500 mx-auto mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-3">
                  Dealership and Auction Transport
                </h3>
                <p className="text-gray-400">
                  Direct pickup and transport for dealerships, auctions, and
                  vehicle related businesses.
                </p>
              </div>

              <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
                <Package className="text-orange-500 mx-auto mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-3">
                  Auto Parts Transport
                </h3>
                <p className="text-gray-400">
                  Direct pickup between shops, dealerships, warehouses, and
                  suppliers.
                </p>
              </div>

              <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
                <Briefcase className="text-orange-500 mx-auto mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-3">
                  Direct Business Transport
                </h3>
                <p className="text-gray-400">
                  Priority same day transport for business items, documents, and
                  small packages.
                </p>
              </div>

              <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
                <Clock className="text-orange-500 mx-auto mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-3">
                  Same Day Courier Delivery
                </h3>
                <p className="text-gray-400">
                  On demand local Arizona delivery for urgent items that cannot
                  wait.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Simple <span className="text-orange-500">Pricing</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Clear starting rates for vehicle transport. Auto parts, business
                items, and documents are quoted separately based on size,
                distance, and urgency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-bold mb-2">Local</h3>
                <p className="text-gray-400 mb-4">0 to 25 Miles</p>
                <div className="text-4xl font-bold text-orange-500 mb-2">$85</div>
                <p className="text-gray-400">Starting at</p>
              </div>

              <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-bold mb-2">Extended Local</h3>
                <p className="text-gray-400 mb-4">25 to 50 Miles</p>
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  $140
                </div>
                <p className="text-gray-400">Starting at</p>
              </div>

              <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-bold mb-2">Regional</h3>
                <p className="text-gray-400 mb-4">50 to 150 Miles</p>
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  $285
                </div>
                <p className="text-gray-400">Starting at</p>
              </div>

              <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-bold mb-2">Long Distance</h3>
                <p className="text-gray-400 mb-4">150+ Miles</p>
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  Custom Quote
                </div>
                <p className="text-gray-400">Mileage based pricing</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center bg-orange-500 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors"
              >
                Get Instant Quote
                <ArrowRight className="ml-2" size={24} />
              </Link>
            </div>
          </div>
        </section>

        {/* Local SEO Section */}
        <section className="py-20 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Car Driving Service{" "}
              <span className="text-orange-500">Near You</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Looking for someone to drive your car near you? I serve Phoenix,
              San Tan Valley, Queen Creek, Gilbert, Chandler, Mesa, and nearby
              Arizona communities with direct, owner operated vehicle delivery.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Need Your Car Driven Today?
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
          </div>
        </section>
      </div>
    </>
  );
}
