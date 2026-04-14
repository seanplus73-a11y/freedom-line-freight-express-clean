import { Link } from "react-router";
import {
  CheckCircle,
  Award,
  Users,
  TrendingUp,
  Truck,
  Clock,
  MessageSquare,
  Car,
  MapPin,
  Shield,
  Building2,
  Wrench,
  Package,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function About() {
  return (
    <div className="bg-neutral-900">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/images/about-hero.jpg"
            alt="Direct vehicle delivery service in Arizona"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex flex-wrap gap-3 mb-6">
              <span className="bg-orange-500/10 border border-orange-500/30 text-orange-300 px-4 py-2 rounded-full text-sm font-medium">
                Arizona Based
              </span>
              <span className="bg-orange-500/10 border border-orange-500/30 text-orange-300 px-4 py-2 rounded-full text-sm font-medium">
                Owner-Operated
              </span>
              <span className="bg-orange-500/10 border border-orange-500/30 text-orange-300 px-4 py-2 rounded-full text-sm font-medium">
                Same-Day Available
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Fast, Direct Vehicle Delivery Across Arizona
              <br />
              <span className="text-orange-500">No Brokers. No Waiting. No Middlemen.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
              Your vehicle is driven directly to its destination — no trailers, no transfers, and no
              unnecessary delays. Just fast, reliable, owner-operated delivery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              <div className="bg-neutral-900/70 border border-neutral-700 rounded-lg p-4">
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <Truck size={18} className="text-orange-500" />
                  Direct Transport
                </div>
                <p className="text-sm text-gray-400">No carrier network delays or broker handoffs.</p>
              </div>

              <div className="bg-neutral-900/70 border border-neutral-700 rounded-lg p-4">
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <MessageSquare size={18} className="text-orange-500" />
                  Clear Communication
                </div>
                <p className="text-sm text-gray-400">Text, email, and relay-friendly updates.</p>
              </div>

              <div className="bg-neutral-900/70 border border-neutral-700 rounded-lg p-4">
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <Clock size={18} className="text-orange-500" />
                  Fast Response
                </div>
                <p className="text-sm text-gray-400">Typical response time within 5–10 minutes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-orange-500">Story</span>
              </h2>

              <p className="text-gray-300 mb-3 leading-relaxed text-lg">
                Owner-Operator: <span className="font-bold text-white">Sean Jackson</span>
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Freedom Line Freight Express was built on a simple idea:
              </p>

              <p className="text-white font-bold mb-6 leading-relaxed text-2xl">
                Vehicle transport should be fast, direct, and stress-free.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                I started this business because I saw how frustrating traditional transport can be —
                long delays, multiple drivers, broker confusion, and poor communication.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Instead of dealing with brokers or waiting on large carriers, I personally drive your
                vehicle directly to its destination.
              </p>

              <p className="text-orange-400 font-bold mb-6 leading-relaxed text-xl">
                No trailers. No transfers. No delays.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Based in Arizona, I provide same-day and next-day vehicle delivery for individuals,
                dealerships, repair shops, auctions, and businesses that need speed, reliability, and
                direct communication.
              </p>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Every transport includes real-time updates and direct accountability from pickup to
                delivery.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Deaf-Owned & Operated Business</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Text, Email & Relay Communication Available</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Fully Insured Vehicle Transport</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Fast Response Within 5–10 Minutes</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden border border-neutral-700 h-[320px] md:h-[360px]">
                <ImageWithFallback
                  src="/images/our-story.jpg"
                  alt="Professional vehicle key handover and delivery service"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden border border-neutral-700 h-40">
                  <ImageWithFallback
                    src="/images/about-driver.jpg"
                    alt="Owner-operated direct vehicle delivery"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden border border-neutral-700 h-40">
                  <ImageWithFallback
                    src="/images/about-communication.jpg"
                    alt="Clear communication during vehicle transport"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Who We <span className="text-orange-500">Work With</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Direct transport for private customers, dealerships, repair shops, auctions, and local businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 text-center">
              <Building2 className="text-orange-500 mx-auto mb-3" size={28} />
              <h3 className="text-white font-semibold">Dealerships</h3>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 text-center">
              <Wrench className="text-orange-500 mx-auto mb-3" size={28} />
              <h3 className="text-white font-semibold">Auto Repair Shops</h3>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 text-center">
              <Car className="text-orange-500 mx-auto mb-3" size={28} />
              <h3 className="text-white font-semibold">Private Owners</h3>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 text-center">
              <Truck className="text-orange-500 mx-auto mb-3" size={28} />
              <h3 className="text-white font-semibold">Auctions</h3>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 text-center">
              <Package className="text-orange-500 mx-auto mb-3" size={28} />
              <h3 className="text-white font-semibold">Small Businesses</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Customers Choose */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Customers Choose <span className="text-orange-500">Freedom Line Freight Express</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Skip the brokers and delays — get direct, fast, and reliable service from pickup to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                  <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Truck className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">No Waiting for Truck Routes</h3>
                  <p className="text-gray-400">
                    Your vehicle goes directly where it needs to go without waiting for carrier schedules or multi-stop routes.
                  </p>
                </div>

                <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                  <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">No Loading or Unloading Delays</h3>
                  <p className="text-gray-400">
                    Your vehicle is driven directly. No ramps, trailers, or carrier loading delays.
                  </p>
                </div>

                <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                  <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Car className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">No Multiple Vehicles on One Trailer</h3>
                  <p className="text-gray-400">
                    Your vehicle receives direct attention without shared trailer delays or transfer risks.
                  </p>
                </div>

                <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                  <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Clock className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Faster Delivery</h3>
                  <p className="text-gray-400">
                    Same-day and next-day delivery may be available for customers who need speed.
                  </p>
                </div>

                <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                  <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Direct Communication with Driver</h3>
                  <p className="text-gray-400">
                    Call, text, or email directly for updates throughout the entire transport process.
                  </p>
                </div>

                <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
                  <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Owner-Operated Accountability</h3>
                  <p className="text-gray-400">
                    Direct accountability and personal responsibility for every transport from pickup to delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-neutral-700 h-[420px] lg:h-full min-h-[420px]">
              <ImageWithFallback
                src="/images/about-benefits.jpg"
                alt="Reliable direct vehicle transport service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core <span className="text-orange-500">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide every delivery we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/20">
                <CheckCircle className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
              <p className="text-gray-400">
                Honest pricing, clear expectations, and straightforward service. No hidden fees. No surprises.
              </p>
            </div>

            <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/20">
                <Users className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Direct Responsibility</h3>
              <p className="text-gray-400">
                Your vehicle is handled directly from pickup to drop-off — no broker network, no confusion.
              </p>
            </div>

            <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/20">
                <Award className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Professional Care</h3>
              <p className="text-gray-400">
                Every vehicle is treated carefully, whether it is a sedan, SUV, small truck, or luxury vehicle.
              </p>
            </div>

            <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/20">
                <TrendingUp className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Reliability</h3>
              <p className="text-gray-400">
                Punctuality, preparedness, and consistent updates matter on every delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area with Image */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our <span className="text-orange-500">Service Area</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Serving Phoenix, Mesa, Chandler, Gilbert, Queen Creek, San Tan Valley, and surrounding Arizona areas.
              </p>

              <div className="bg-neutral-800 rounded-lg p-8 border-2 border-orange-500/30">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-white font-semibold">Arizona is our primary service area</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">Local and regional direct vehicle transport</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300">Nearby states available upon request</span>
                  </div>
                </div>

                <div className="bg-orange-900/20 border border-orange-500/50 p-4 rounded mt-6">
                  <p className="text-orange-100 text-sm font-semibold">
                    Out-of-state transport is limited and based on availability.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-neutral-700 h-[320px] md:h-[420px]">
              <ImageWithFallback
                src="/images/about-arizona.jpg"
                alt="Arizona service area for direct vehicle delivery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Licensed & Insured */}
      <section className="py-20 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Licensed & <span className="text-orange-500">Insured</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Operating with proper credentials and coverage for your peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-neutral-900 p-6 rounded-lg text-center border border-neutral-700">
              <Shield className="text-orange-500 mx-auto mb-3" size={28} />
              <div className="font-bold text-white mb-2">Fully Insured</div>
              <p className="text-sm text-gray-400">Comprehensive coverage for direct transport service</p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg text-center border border-neutral-700">
              <Award className="text-orange-500 mx-auto mb-3" size={28} />
              <div className="font-bold text-white mb-2">Arizona Licensed</div>
              <p className="text-sm text-gray-400">State-licensed operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/images/about-cta.jpg"
            alt="Fast and reliable vehicle delivery service"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Fast, Reliable Delivery?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto font-semibold">
            Skip the brokers. Work directly with the driver today.
          </p>
          <Link
            to="/request-pickup"
            className="inline-flex items-center bg-white text-orange-600 px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Instant Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
