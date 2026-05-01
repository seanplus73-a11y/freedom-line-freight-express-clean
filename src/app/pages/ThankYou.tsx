import { CheckCircle, Shield, MessageSquare, Clock, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function ThankYou() {
  return (
    <div className="bg-neutral-900 min-h-screen">
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full border-4 border-green-500 mb-8 animate-pulse">
            <CheckCircle className="text-green-500" size={48} />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Thank You. Your Request Was Received
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-6">
            I will contact you shortly
          </h2>

          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Your request has been received and is being reviewed. You will receive a response within{" "}
            <span className="text-orange-500 font-bold">15 to 30 minutes</span>.
          </p>

          <p className="text-lg text-gray-400 mb-8">
            Based in Queen Creek. Serving Phoenix and all Arizona
          </p>

          <div className="mb-8">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-orange-500 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50"
            >
              <MessageSquare size={28} />
              Contact Me for Faster Response
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </Link>

            <p className="text-sm text-gray-400 mt-3">
              Fastest way to reach me
            </p>

            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                <Phone size={20} />
                Go to Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-500 py-8 border-y-4 border-orange-600">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Clock className="text-white flex-shrink-0" size={48} />
            <div>
              <p className="text-white text-2xl md:text-3xl font-bold mb-1">
                Typical Response Time 15 to 30 Minutes
              </p>
              <p className="text-orange-100 text-lg">
                I personally review every request and respond quickly during business hours
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-800">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose <span className="text-orange-500">Freedom Line Freight Express LLC</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border-2 border-orange-500/30 rounded-2xl p-8 text-center hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-4">
                <CheckCircle className="text-orange-500" size={32} />
              </div>
              <h4 className="text-2xl text-white font-bold mb-3">Owner Operated</h4>
              <p className="text-gray-300 leading-relaxed">
                Direct communication with the owner. No middlemen. No call centers. Personal accountability.
              </p>
            </div>

            <div className="bg-neutral-900 border-2 border-orange-500/30 rounded-2xl p-8 text-center hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-4">
                <Shield className="text-orange-500" size={32} />
              </div>
              <h4 className="text-2xl text-white font-bold mb-3">Fully Insured</h4>
              <p className="text-gray-300 leading-relaxed">
                Insurance coverage on every transport for peace of mind.
              </p>
            </div>

            <div className="bg-neutral-900 border-2 border-orange-500/30 rounded-2xl p-8 text-center hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-4">
                <MessageSquare className="text-orange-500" size={32} />
              </div>
              <h4 className="text-2xl text-white font-bold mb-3">No Towing We Drive It</h4>
              <p className="text-gray-300 leading-relaxed">
                Your vehicle is driven directly to its destination. No trailers. No loading delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl text-white font-bold text-center mb-12">
            What Happens <span className="text-orange-500">Next</span>
          </h3>

          <div className="space-y-6">
            {[
              ["1", "I Review Your Request", "Your request goes directly to me. I will review the pickup and delivery details and calculate your quote."],
              ["2", "You Receive a Quote", "I will send you a clear quote by text or email within 15 to 30 minutes."],
              ["3", "Schedule Your Pickup", "Once you approve, I will coordinate pickup and delivery times that work for your schedule."],
              ["4", "Fast Direct Delivery", "Your vehicle is driven directly to its destination with updates along the way."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="flex gap-6 items-start bg-neutral-800 p-6 rounded-xl border border-neutral-700 hover:border-orange-500/50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {number}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
                  <p className="text-gray-300">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Immediate Assistance
          </h3>
          <p className="text-xl text-orange-100 mb-8">
            Go to the contact page for the fastest response
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
          >
            <MessageSquare size={24} />
            Contact Page
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>

      <section className="py-12 bg-neutral-900 border-t border-neutral-800 text-center">
        <div className="flex flex-wrap justify-center gap-3 items-center">
          <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">
            Home
          </Link>
          <span className="text-gray-600">|</span>
          <Link to="/pricing" className="text-gray-400 hover:text-orange-500 transition-colors">
            Pricing
          </Link>
          <span className="text-gray-600">|</span>
          <Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors">
            About Us
          </Link>
          <span className="text-gray-600">|</span>
          <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
