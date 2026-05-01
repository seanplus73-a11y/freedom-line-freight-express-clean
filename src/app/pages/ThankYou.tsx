import { CheckCircle, Shield, MessageSquare, Clock, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function ThankYou() {
  return (
    <div className="bg-neutral-900 min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">

          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full border-4 border-green-500 mb-8 animate-pulse">
            <CheckCircle className="text-green-500" size={48} />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Thank You. Your Request Was Received
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-6">
            I will contact you shortly
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Your request has been received. I will review it and contact you shortly with details.
          </p>

          <p className="text-lg text-gray-400 mb-8">
            Based in Queen Creek. Serving Phoenix and all Arizona
          </p>

          {/* CTA TEXT */}
          <div className="mb-8">
            <a
              href="sms:+14807428553"
              className="group inline-flex items-center gap-3 bg-orange-500 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:bg-orange-600 transition-all duration-300 hover:scale-105"
            >
              <MessageSquare size={28} />
              Text Me Now for Faster Response
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </a>

            <p className="text-sm text-gray-400 mt-3">
              Fastest way to reach me
            </p>
          </div>

          {/* CALL BUTTON */}
          <div>
            <a
              href="tel:+14807428553"
              className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              <Phone size={20} />
              Call 480 742 8553
            </a>
          </div>

        </div>
      </section>

      {/* RESPONSE TIME */}
      <section className="bg-orange-500 py-8 border-y-4 border-orange-600">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Clock className="text-white" size={48} />
            <div>
              <p className="text-white text-2xl md:text-3xl font-bold mb-1">
                Typical Response Time 15 to 30 Minutes
              </p>
              <p className="text-orange-100 text-lg">
                I personally review every request and respond quickly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-16 bg-neutral-800">
        <div className="max-w-6xl mx-auto px-4">

          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose <span className="text-orange-500">Freedom Line Freight Express LLC</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Owner */}
            <div className="bg-neutral-900 border-2 border-orange-500/30 rounded-2xl p-8 text-center">
              <CheckCircle className="text-orange-500 mx-auto mb-4" size={32} />
              <h4 className="text-2xl font-bold text-white mb-3">Owner Operated</h4>
              <p className="text-gray-300">
                Direct communication with the owner. No middlemen.
              </p>
            </div>

            {/* Insurance */}
            <div className="bg-neutral-900 border-2 border-orange-500/30 rounded-2xl p-8 text-center">
              <Shield className="text-orange-500 mx-auto mb-4" size={32} />
              <h4 className="text-2xl font-bold text-white mb-3">Fully Insured</h4>
              <p className="text-gray-300">
                Your vehicle is protected during transport.
              </p>
            </div>

            {/* No towing */}
            <div className="bg-neutral-900 border-2 border-orange-500/30 rounded-2xl p-8 text-center">
              <MessageSquare className="text-orange-500 mx-auto mb-4" size={32} />
              <h4 className="text-2xl font-bold text-white mb-3">No Towing We Drive It</h4>
              <p className="text-gray-300">
                Your vehicle is driven directly to its destination.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4">

          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What Happens Next
          </h3>

          <div className="space-y-6">

            <div className="bg-neutral-800 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-2">1 Review Request</h4>
              <p className="text-gray-300">
                I review your pickup and delivery details.
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-2">2 Send Quote</h4>
              <p className="text-gray-300">
                You receive a clear quote by text or email.
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-2">3 Schedule Pickup</h4>
              <p className="text-gray-300">
                We confirm a time that works for you.
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-2">4 Delivery</h4>
              <p className="text-gray-300">
                Your vehicle is delivered directly with updates.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-orange-600 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">

          <h3 className="text-3xl font-bold text-white mb-4">
            Need Immediate Help
          </h3>

          <p className="text-white mb-8">
            Text now for the fastest response
          </p>

          <a
            href="sms:+14807428553"
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg"
          >
            <MessageSquare size={20} />
            Text 480 742 8553
          </a>

        </div>
      </section>

      {/* LINKS */}
      <section className="py-12 bg-neutral-900 text-center">
        <Link to="/" className="text-gray-400 hover:text-orange-500">Home</Link>
        <span className="mx-3 text-gray-600">|</span>
        <Link to="/pricing" className="text-gray-400 hover:text-orange-500">Pricing</Link>
        <span className="mx-3 text-gray-600">|</span>
        <Link to="/contact" className="text-gray-400 hover:text-orange-500">Contact</Link>
      </section>

    </div>
  );
}
