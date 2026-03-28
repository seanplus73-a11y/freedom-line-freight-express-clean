import { Link } from "react-router";
import {
  ArrowRight,
  Truck,
  Shield,
  CheckCircle,
  Users,
  MessageSquare,
  Package,
  Briefcase,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  return (
    <div className="bg-neutral-900">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 opacity-50">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1770289711980-c7663e18bb16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwdmVoaWNsZSUyMHBhcmtlZCUyMHJlc2lkZW50aWFsJTIwZHJpdmV3YXklMjBtb2RraW5nJTIwaG91c2V8ZW58MXx8fHwxNzcxNjQ4NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Door-to-door vehicle transport and local delivery service"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-neutral-700">
                <Shield className="text-orange-500 mr-2" size={18} />
                <span className="text-sm font-semibold text-white">
                  Insured Service
                </span>
              </div>

              <div className="flex items-center bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-neutral-700">
                <CheckCircle className="text-orange-500 mr-2" size={18} />
                <span className="text-sm font-semibold text-white">
                  Reliable Scheduling
                </span>
              </div>

              <div className="flex items-center bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-neutral-700">
                <Truck className="text-orange-500 mr-2" size={18} />
                <span className="text-sm font-semibold text-white">
                  Owner-Operated
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Door-to-Door Vehicle Transport{" "}
              <span className="text-orange-500">& Local Delivery</span>
            </h1>

            <p className="text-xl md:text-2xl mb-4 text-gray-300 leading-relaxed max-w-3xl">
              Vehicle pickup and delivery for sedans, SUVs, small heavy-duty
              trucks, and luxury vehicles — plus same-day local delivery for
              luggage, small packages, documents, and auto parts.
            </p>

            <p className="text-lg md:text-xl mb-10 text-orange-400 font-bold leading-relaxed max-w-3xl">
              Owner-operated with direct communication, careful handling, and
              door-to-door service you can trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center bg-orange-500 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors"
              >
                Request a Pickup
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

      {/* Trust Bar */}
      <section className="bg-neutral-800 py-12 border-y border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="text-orange-500 mr-2" size={36} />
                <div className="text-xl font-bold text-white">
                  Owner-Operated
                </div>
              </div>
              <div className="text-gray-400 font-semibold">Service</div>
            </div>

            <div>
              <div className="flex items-center justify-center mb-2">
                <Shield className="text-orange-500 mr-2" size={36} />
                <div className="text-xl font-bold text-white">Licensed</div>
              </div>
              <div className="text-gray-400 font-semibold">& Insured</div>
            </div>

            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="text-orange-500 mr-2" size={36} />
                <div className="text-xl font-bold text-white">Professional</div>
              </div>
              <div className="text-gray-400 font-semibold">
                Owner-Operator
              </div>
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

      {/* Why Choose Section */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose{" "}
              <span className="text-orange-500">Freedom Line Freight Express?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">
                Owner-Operated Service
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Work directly with the owner. No dispatch centers. No middlemen.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">
                Direct Communication
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Call or text for real-time updates, scheduling, and quick
                support.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">
                Flexible Local & Regional Service
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                From short local moves to longer regional routes, your pickup or
                delivery is handled carefully and efficiently.
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
                I coordinate directly with your home, dealership, shop, airport,
                or auction.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Direct Updates
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                You receive direct communication and scheduling updates during
                service.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Safe Delivery
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Your vehicle or local delivery item is handled carefully and
                confirmed at delivery.
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
              Our <span className="text-orange-500">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
              <div className="flex justify-center mb-4">
                <Truck className="text-orange-500" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Vehicle Pickup & Delivery
              </h3>
            </div>

            <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
              <div className="flex justify-center mb-4">
                <Package className="text-orange-500" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Same-Day Local Delivery
              </h3>
            </div>

            <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
              <div className="flex justify-center mb-4">
                <Briefcase className="text-orange-500" size={36} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Luggage, Packages & Auto Parts
              </h3>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700">
              <h3 className="text-xl font-bold text-white mb-2">Local</h3>
              <p className="text-gray-400 mb-4">0–10 Miles</p>
              <div className="text-4xl font-bold text-orange-500 mb-2">$65</div>
              <p className="text-gray-400">Starting at</p>
            </div>

            <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700">
              <h3 className="text-xl font-bold text-white mb-2">
                Extended Local
              </h3>
              <p className="text-gray-400 mb-4">10–25 Miles</p>
              <div className="text-4xl font-bold text-orange-500 mb-2">$85</div>
              <p className="text-gray-400">Starting at</p>
            </div>

            <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700">
              <h3 className="text-xl font-bold text-white mb-2">Regional</h3>
              <p className="text-gray-400 mb-4">25–50 Miles</p>
              <div className="text-4xl font-bold text-orange-500 mb-2">
                $125
              </div>
              <p className="text-gray-400">Starting at</p>
            </div>

            <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700">
              <h3 className="text-xl font-bold text-white mb-2">
                Longer Distance
              </h3>
              <p className="text-gray-400 mb-4">50–150 Miles</p>
              <div className="text-4xl font-bold text-orange-500 mb-2">
                $250
              </div>
              <p className="text-gray-400">Starting at</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center bg-orange-500 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors"
            >
              View Full Pricing
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
            Request your quote for vehicle transport or same-day local delivery.
            No obligation.
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
  );
}

export default Home;
