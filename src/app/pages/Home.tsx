import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  ArrowRight,
  Truck,
  Clock,
  Shield,
  CheckCircle,
  Users,
  MessageSquare,
  Car,
  Package,
  Briefcase,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Car Pickup & Delivery Service Phoenix AZ | We Drive Your Car For You</title>

        <meta
          name="description"
          content="Need your car moved locally? We personally drive your vehicle to the shop, dealer, or home. No towing. Serving Phoenix, San Tan Valley, and all Arizona. Get a fast quote today."
        />

        <meta
          name="keywords"
          content="car pickup and delivery Phoenix AZ, vehicle delivery service Arizona, drive my car service Phoenix, no towing vehicle transport, local car delivery San Tan Valley, auto parts delivery Phoenix"
        />

        <link rel="canonical" href="https://www.flfreightco.com/" />

        <meta
          property="og:title"
          content="Car Pickup & Delivery Service Phoenix AZ | We Drive Your Car For You"
        />
        <meta
          property="og:description"
          content="We personally drive your vehicle to the shop, dealer, or home. No towing. Serving Phoenix, San Tan Valley, and all Arizona."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.flfreightco.com/" />
        <meta property="og:site_name" content="Freedom Line Freight Express" />
        <meta
          property="og:image"
          content="https://www.flfreightco.com/og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Car Pickup & Delivery Service Phoenix AZ | We Drive Your Car For You"
        />
        <meta
          name="twitter:description"
          content="Need your car moved locally? No towing. We personally drive your vehicle anywhere in Phoenix, San Tan Valley, and across Arizona."
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
              "Mesa AZ",
              "Arizona",
            ],
            description:
              "Car pickup and delivery service in Phoenix and across Arizona. We personally drive your vehicle. No towing or trailer.",
            serviceType: [
              "Car Pickup and Delivery",
              "Vehicle Delivery Service",
              "Auto Parts Delivery",
              "Local Delivery Service",
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

      <div className="bg-neutral-900">
        {/* Hero Section */}
        <section className="relative bg-black text-white">
          <div className="absolute inset-0 opacity-50">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1770289711980-c7663e18bb16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwdmVoaWNsZSUyMHBhcmtlZCUyMHJlc2lkZW50aWFsJTIwZHJpdmV3YXklMjBtb2RrbilMjBob3VzZXxlbnwxfHx8fDE3NzE2NDg2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional vehicle transport service"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
            <div className="max-w-4xl">
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-500">
                  <Clock className="text-orange-500 mr-2" size={18} />
                  <span className="text-sm font-semibold text-white">
                    Same Day Available
                  </span>
                </div>
                <div className="flex items-center bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-500">
                  <Truck className="text-orange-500 mr-2" size={18} />
                  <span className="text-sm font-semibold text-white">
                    Direct Transport
                  </span>
                </div>
                <div className="flex items-center bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-500">
                  <CheckCircle className="text-orange-500 mr-2" size={18} />
                  <span className="text-sm font-semibold text-white">
                    No Waiting
                  </span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Same-Day Delivery & Vehicle Transport{" "}
                <span className="text-orange-500">
                  We Drive It. Not Tow. No Waiting. No Delays.
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed max-w-3xl">
                Fast, direct transport for vehicles, auto parts, packages, and
                business deliveries across Arizona. Owner-operated service with
                real-time updates and same-day availability.
              </p>

              <p className="sr-only">
                Car pickup and delivery service in Phoenix Arizona, we drive your
                car for you, no towing vehicle transport, local car delivery in
                San Tan Valley, Queen Creek, Gilbert, Mesa, and auto parts
                delivery across Arizona.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center bg-orange-500 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors"
                >
                  Get Instant Quote
                  <ArrowRight className="ml-2" size={24} />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-black transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Business Clients Section */}
        <section className="py-20 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built for{" "}
              <span className="text-orange-500">
                Businesses & Commercial Clients
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible same-day and scheduled transport for dealerships, repair
              shops, auto parts suppliers, offices, and local businesses.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 text-white">
              <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="text-3xl mb-3">🚗</div>
                <div className="text-xl font-bold mb-2">Dealership Transfers</div>
                <p className="text-gray-400 text-sm">
                  Pickup and delivery support for dealers, auctions, and sellers.
                </p>
              </div>

              <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="text-3xl mb-3">📦</div>
                <div className="text-xl font-bold mb-2">Auto Parts Delivery</div>
                <p className="text-gray-400 text-sm">
                  Direct delivery between shops, suppliers, warehouses, and
                  dealerships.
                </p>
              </div>

              <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="text-3xl mb-3">📄</div>
                <div className="text-xl font-bold mb-2">
                  Documents & Packages
                </div>
                <p className="text-gray-400 text-sm">
                  Fast transport for business documents, legal files, and small
                  packages.
                </p>
              </div>

              <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="text-3xl mb-3">⚡</div>
                <div className="text-xl font-bold mb-2">Same-Day Courier</div>
                <p className="text-gray-400 text-sm">
                  On-demand local and regional delivery when speed matters most.
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
                  <CheckCircle className="text-orange-500 mr-2" size={36} />
                  <div className="text-xl font-bold text-white">Owner-Operated</div>
                </div>
                <div className="text-gray-400 font-semibold">Service</div>
              </div>

              <div>
                <div className="flex items-center justify-center mb-2">
                  <Shield className="text-orange-500 mr-2" size={36} />
                  <div className="text-xl font-bold text-white">Fully Licensed</div>
                </div>
                <div className="text-gray-400 font-semibold">& Insured</div>
              </div>

              <div>
                <div className="flex items-center justify-center mb-2">
                  <Clock className="text-orange-500 mr-2" size={36} />
                  <div className="text-xl font-bold text-white">
                    Same-Day & On-Demand
                  </div>
                </div>
                <div className="text-gray-400 font-semibold">Delivery Service</div>
              </div>

              <div>
                <div className="flex items-center justify-center mb-2">
                  <MessageSquare className="text-orange-500 mr-2" size={36} />
                  <div className="text-xl font-bold text-white">Direct</div>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose{" "}
                <span className="text-orange-500">
                  Freedom Line Freight Express?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Direct vehicle and delivery service with no trailers, no
                transfers, and no unnecessary delays.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Same Day or Next Day Service Available
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Fast turnaround times to meet urgent transport and delivery
                  needs.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Truck className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  No Waiting for Carrier Routes
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Your transport is handled directly without waiting on large
                  carrier schedules.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Direct Transport with No Unnecessary Delays
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  No trailers, no transfers, and no wasted time.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Car className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  No Multiple Stops with Other Vehicles
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Your vehicle receives focused attention with direct handling from
                  pickup to drop-off.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Real-Time Communication
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Call, text, or email directly for updates throughout the
                  transport process.
                </p>
              </div>

              <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Shield className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Fully Insured & Owner-Operated
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Licensed, insured, and personally accountable on every
                  transport.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                How It <span className="text-orange-500">Works</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Schedule Pickup
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We coordinate directly with your home, dealership, auction,
                  shop, office, or business location.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  In Transit Updates
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  You receive direct communication during transport and delivery.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6">
                  3
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Secure Delivery
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Vehicle or item condition is confirmed at delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Vehicle Transport &{" "}
                <span className="text-orange-500">
                  Courier Delivery Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Direct, owner-operated transport with no third-party drivers or
                app-based delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
                <Truck className="text-orange-500 mx-auto mb-4" size={32} />
                <h3 className="text-2xl font-bold text-white mb-3">
                  Dealership & Auction Transport
                </h3>
                <p className="text-gray-400">
                  Direct pickup and transport for dealerships, auctions, and
                  vehicle-related businesses.
                </p>
              </div>

              <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
                <Car className="text-orange-500 mx-auto mb-4" size={32} />
                <h3 className="text-2xl font-bold text-white mb-3">
                  Private Residential Transport
                </h3>
                <p className="text-gray-400">
                  Direct pickup and delivery for personal vehicles from homes,
                  sellers, and private parties.
                </p>
              </div>

              <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
                <Shield className="text-orange-500 mx-auto mb-4" size={32} />
                <h3 className="text-2xl font-bold text-white mb-3">
                  Luxury Vehicle Transport
                </h3>
                <p className="text-gray-400">
                  Careful, direct handling for premium and high-value vehicles.
                </p>
              </div>

              <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
                <Package className="text-orange-500 mx-auto mb-4" size={32} />
                <h3 className="text-2xl font-bold text-white mb-3">
                  Auto Parts Transport
                </h3>
                <p className="text-gray-400">
                  Direct pickup between shops, dealerships, warehouses, and
                  suppliers.
                </p>
              </div>

              <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
                <Briefcase className="text-orange-500 mx-auto mb-4" size={32} />
                <h3 className="text-2xl font-bold text-white mb-3">
                  Direct Business Transport
                </h3>
                <p className="text-gray-400">
                  Priority same-day transport for business items, documents, and
                  small packages.
                </p>
              </div>

              <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
                <Clock className="text-orange-500 mx-auto mb-4" size={32} />
                <h3 className="text-2xl font-bold text-white mb-3">
                  Same-Day Courier Delivery
                </h3>
                <p className="text-gray-400">
                  On-demand local Arizona delivery for urgent items that cannot
                  wait.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Speed Section */}
        <section className="py-16 bg-neutral-900 border-y border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Fast. Direct. Reliable.
            </h2>

            <div className="flex flex-wrap justify-center gap-6 text-white text-lg font-semibold">
              <div className="bg-neutral-800 px-5 py-3 rounded-full border border-neutral-700">
                ⚡ 5–10 Min Response
              </div>
              <div className="bg-neutral-800 px-5 py-3 rounded-full border border-neutral-700">
                🚚 Same-Day Available
              </div>
              <div className="bg-neutral-800 px-5 py-3 rounded-full border border-neutral-700">
                📍 Arizona Coverage
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
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
                <h3 className="text-xl font-bold text-white mb-2">Local</h3>
                <p className="text-gray-400 mb-4">0–25 Miles</p>
                <div className="text-4xl font-bold text-orange-500 mb-2">$85</div>
                <p className="text-gray-400">Starting at</p>
              </div>

              <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-bold text-white mb-2">
                  Extended Local
                </h3>
                <p className="text-gray-400 mb-4">25–50 Miles</p>
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  $140
                </div>
                <p className="text-gray-400">Starting at</p>
              </div>

              <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-bold text-white mb-2">Regional</h3>
                <p className="text-gray-400 mb-4">50–150 Miles</p>
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  $285
                </div>
                <p className="text-gray-400">Starting at</p>
              </div>

              <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700">
                <h3 className="text-xl font-bold text-white mb-2">
                  Long Distance
                </h3>
                <p className="text-gray-400 mb-4">150+ Miles</p>
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  Custom Quote
                </div>
                <p className="text-gray-400">Mileage-based pricing</p>
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

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto font-semibold">
              Get your instant mileage-based quote now. No obligation.
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
