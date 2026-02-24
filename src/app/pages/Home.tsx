import { Link } from "react-router";
import { ArrowRight, Truck, Clock, Shield, MapPin, CheckCircle, Star, Users, MessageSquare } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  return (
    <div className="bg-neutral-900">
       {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 opacity-50">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1770289711980-c7663e18bb16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwdmVoaWNsZSUyMHBhcmtlZCUyMHJlc2lkZW50aWFsJTIwZHJpdmV3YXklMjBtb2RrbilMjBob3VzZXxlbnwxfHx8fDE3NzE2NDg2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional vehicle pickup and delivery service"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-4xl">
            {/* Trust Badges - Left Side */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-neutral-700">
                <Shield className="text-orange-500 mr-2" size={18} />
                <span className="text-sm font-semibold text-white">Fully Insured</span>
              </div>
              <div className="flex items-center bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-neutral-700">
                <CheckCircle className="text-orange-500 mr-2" size={18} />
                <span className="text-sm font-semibold text-white">Reliable Scheduling</span>
              </div>
              <div className="flex items-center bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-neutral-700">
                <Truck className="text-orange-500 mr-2" size={18} />
                <span className="text-sm font-semibold text-white">Professional Driver</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Professional Vehicle Transport <span className="text-orange-500">You Can Trust</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300 leading-relaxed max-w-3xl">
              Door-to-door vehicle pickup and delivery for sedans, SUVs, and luxury cars. Owner-operated. Fully insured. We do not transport commercial trucks.
            </p>
            <p className="text-lg md:text-xl mb-10 text-orange-400 font-bold leading-relaxed max-w-3xl">
              I personally drive your vehicle from pickup to delivery. It is never towed or transported on a trailer.
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
                <Users className="text-orange-500 mr-2" size={36} />
                <div className="text-xl font-bold text-white">Professional</div>
              </div>
              <div className="text-gray-400 font-semibold">Owner-Operator</div>
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

      {/* Why Choose Owner-Operated Transport */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-orange-500">Owner-Operated Transport?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Owner-Operated Service</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Work directly with the owner. No dispatch centers. No middlemen.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Direct Owner Communication</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Call or text for real-time updates and scheduling.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">No Waiting on Large Carriers</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Your vehicle is scheduled personally and handled efficiently.
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
              <h3 className="text-2xl font-bold text-white mb-4">Schedule Pickup</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                We coordinate directly with your home, dealership, or auction.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">In-Transit Updates</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                You receive direct communication during transport.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Secure Delivery</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Vehicle condition confirmed at delivery.
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
              <h3 className="text-2xl font-bold text-white">Dealership & Auction Transport</h3>
            </div>

            <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
              <h3 className="text-2xl font-bold text-white">Private Residential Delivery</h3>
            </div>

            <div className="bg-neutral-800 p-10 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
              <h3 className="text-2xl font-bold text-white">Luxury Vehicle Transport</h3>
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
              <p className="text-gray-400 mb-4">0–25 Miles</p>
              <div className="text-4xl font-bold text-orange-500 mb-2">$75</div>
              <p className="text-gray-400">Starting at</p>
            </div>

            <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700">
              <h3 className="text-xl font-bold text-white mb-2">Extended Local</h3>
              <p className="text-gray-400 mb-4">25–50 Miles</p>
              <div className="text-4xl font-bold text-orange-500 mb-2">$125</div>
              <p className="text-gray-400">Starting at</p>
            </div>

            <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700">
              <h3 className="text-xl font-bold text-white mb-2">Regional</h3>
              <p className="text-gray-400 mb-4">50–150 Miles</p>
              <div className="text-4xl font-bold text-orange-500 mb-2">$250</div>
              <p className="text-gray-400">Starting at</p>
            </div>

            <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700">
              <h3 className="text-xl font-bold text-white mb-2">Long Distance</h3>
              <p className="text-gray-400 mb-4">150+ Miles</p>
              <div className="text-4xl font-bold text-orange-500 mb-2">Custom Quote</div>
              <p className="text-gray-400">Mileage-based pricing</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/request-pickup"
              className="inline-flex items-center justify-center bg-orange-500 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors"
            >
              Get a Free Quote
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
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto font-semibold">Get your instant mileage-based quote now. No obligation.</p>
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
