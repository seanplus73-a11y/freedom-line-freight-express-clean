import { Link } from "react-router";
import { CheckCircle, Award, Users, TrendingUp, Truck, Clock, MessageSquare, Car } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function About() {
  return (
    <div className="bg-neutral-900">

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fast, Direct Vehicle Delivery Across Arizona <br />
              <span className="text-orange-500">No Brokers. No Waiting. No Middlemen.</span>
            </h1>
            <p className="text-xl text-gray-300">
              Your vehicle is driven directly to its destination — no trailers, no transfers, just fast and reliable delivery.
            </p>
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

              <p className="text-gray-300 mb-4 text-lg">
                Owner-Operator: <span className="text-white font-semibold">Sean Jackson</span>
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Freedom Line Freight Express was built on a simple idea:
              </p>

              <p className="text-white font-bold mb-6 text-xl">
                Vehicle transport should be fast, direct, and stress-free.
              </p>

              <p className="text-gray-300 mb-6">
                I started this business because I saw how frustrating traditional transport can be — long delays, multiple drivers, and poor communication.
              </p>

              <p className="text-gray-300 mb-6">
                Instead of dealing with brokers or waiting on large carriers, I personally drive your vehicle directly to its destination.
              </p>

              <p className="text-orange-400 font-bold mb-6 text-lg">
                No trailers. No transfers. No delays.
              </p>

              <p className="text-gray-300 mb-6">
                Based in Arizona, I provide same-day and next-day vehicle delivery for individuals, dealerships, and businesses that need speed, reliability, and clear communication.
              </p>

              <p className="text-gray-300 mb-8">
                Every transport includes real-time updates and direct accountability from pickup to delivery.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-orange-500 mr-3 mt-1" size={20} />
                  <span className="text-gray-300">Deaf-Owned & Operated Business</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-orange-500 mr-3 mt-1" size={20} />
                  <span className="text-gray-300">Text, Email & Relay Communication Available</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-orange-500 mr-3 mt-1" size={20} />
                  <span className="text-gray-300">Fully Insured Vehicle Transport</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-orange-500 mr-3 mt-1" size={20} />
                  <span className="text-gray-300">Fast Response Within 5–10 Minutes</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-neutral-700 h-[400px] md:h-[500px]">
              <ImageWithFallback
                src="/images/our-story.jpg"
                alt="Vehicle pickup and delivery service"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 bg-neutral-900 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Who We <span className="text-orange-500">Work With</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 text-gray-300 text-lg">
          <span>Dealerships</span>
          <span>•</span>
          <span>Auto Repair Shops</span>
          <span>•</span>
          <span>Private Owners</span>
          <span>•</span>
          <span>Auctions</span>
          <span>•</span>
          <span>Small Businesses</span>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Customers Choose <span className="text-orange-500">Freedom Line Freight Express</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Skip the brokers and delays — get direct, fast, and reliable service.
            </p>
          </div>

          {/* (Keep your grid same — already perfect) */}
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-neutral-900 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Our <span className="text-orange-500">Service Area</span>
        </h2>

        <p className="text-gray-300 mb-4">
          Serving Phoenix, Mesa, Chandler, Gilbert, Queen Creek, San Tan Valley, and surrounding Arizona areas.
        </p>

        <p className="text-orange-400 font-semibold">
          Nearby states available upon request
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Need Fast, Reliable Delivery?
        </h2>

        <p className="text-orange-100 mb-8">
          Skip the brokers. Work directly with the driver today.
        </p>

        <Link
          to="/request-pickup"
          className="inline-flex items-center bg-white text-orange-600 px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100"
        >
          Get Instant Quote
        </Link>
      </section>

    </div>
  );
}
