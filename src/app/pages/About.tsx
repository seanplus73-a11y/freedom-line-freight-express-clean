import { Link } from "react-router";
import { CheckCircle, Award, Users, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  return (
    <div className="bg-neutral-900">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Arizona-Based Vehicle Pickup & Delivery <span className="text-orange-500">You Can Trust</span>
            </h1>
            <p className="text-xl text-gray-300">
              Providing reliable, insured vehicle transport for individuals and dealerships across Arizona and surrounding areas.
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
              <p className="text-gray-300 mb-6 leading-relaxed">
                Freedom Line Freight Express was built on a simple idea: vehicle transport should be reliable, transparent, and stress-free.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                As a locally owned and operated Arizona business, we specialize in direct vehicle pickup and delivery without the complexity of brokers or large carrier networks. Every vehicle is handled with care, clear communication, and professional service from pickup to drop-off.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We focus on sedans, SUVs, small heavy-duty trucks, and luxury vehicles, providing dependable transport solutions tailored to your needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Locally Owned & Operated</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Fully Insured Vehicle Transport</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Direct Communication</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Door-to-Door Service</span>
                </div>
              </div>
            </div>
            <div className="order-first md:order-last">
              <div className="rounded-lg overflow-hidden shadow-2xl border border-neutral-700">
                <ImageWithFallback
                  src="https://cdn.pixabay.com/photo/2021/10/07/15/25/car-6688969_1280.jpg"
                  alt="Professional vehicle delivery service"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why <span className="text-orange-500">Choose Us</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional vehicle transport with a personal touch. Here's what makes Freedom Line different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 border border-orange-500/20">
                <Award className="text-orange-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Experience</h3>
              <p className="text-gray-400 leading-relaxed">
                Experienced owner-operator with extensive knowledge of vehicle transport, logistics, and customer service.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 border border-orange-500/20">
                <Users className="text-orange-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Direct Communication</h3>
              <p className="text-gray-400 leading-relaxed">
                You work directly with the driver—no brokers, no confusion. Clear updates from pickup to delivery.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 border border-orange-500/20">
                <TrendingUp className="text-orange-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Flexible Service</h3>
              <p className="text-gray-400 leading-relaxed">
                Same-day, next-day, or scheduled pickups. One vehicle or multiple vehicles—we adapt to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="py-20 bg-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What We <span className="text-orange-500">Stand For</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            At Freedom Line Freight Express, we're committed to providing reliable, safe, and professional vehicle transport services with integrity and accountability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-700">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <CheckCircle className="text-orange-500 mr-3" size={20} />
                Reliability
              </h3>
              <p className="text-gray-400">
                We show up when we say we will. Your vehicles are picked up and delivered on schedule.
              </p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-700">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <CheckCircle className="text-orange-500 mr-3" size={20} />
                Transparency
              </h3>
              <p className="text-gray-400">
                Clear pricing, clear communication, and clear documentation every step of the way.
              </p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-700">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <CheckCircle className="text-orange-500 mr-3" size={20} />
                Safety
              </h3>
              <p className="text-gray-400">
                Fully insured transport with professional handling and photo documentation at every stop.
              </p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-700">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <CheckCircle className="text-orange-500 mr-3" size={20} />
                Accountability
              </h3>
              <p className="text-gray-400">
                Owner-operated means you know exactly who is handling your vehicle, and I take full responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Where We <span className="text-orange-500">Operate</span>
            </h2>
            <p className="text-xl text-gray-300">
              Proudly serving Arizona and the Southwest region.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-neutral-800 rounded-lg p-8 border-2 border-orange-500/30">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <CheckCircle className="text-orange-500 mr-3 flex-shrink-0" size={20} />
                <span className="text-lg font-bold text-white">Arizona (Statewide)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-orange-500 mr-3 flex-shrink-0" size={20} />
                <span className="text-lg font-bold text-white">Nevada</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-orange-500 mr-3 flex-shrink-0" size={20} />
                <span className="text-lg font-bold text-white">New Mexico</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-orange-500 mr-3 flex-shrink-0" size={20} />
                <span className="text-lg font-bold text-white">Utah</span>
              </div>
              <div className="flex items-center sm:col-span-2">
                <CheckCircle className="text-orange-500 mr-3 flex-shrink-0" size={20} />
                <span className="text-lg font-bold text-white">Southern California</span>
              </div>
            </div>
            <div className="border-t border-neutral-700 pt-6 text-center">
              <p className="text-gray-300">
                <strong className="text-white">Based in Arizona,</strong> we specialize in reliable local and regional vehicle transport throughout the Southwest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the Freedom Line Difference?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto font-semibold">
            Let's get your vehicle where it needs to go—safely, professionally, and on time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-pickup"
              className="inline-flex items-center justify-center bg-white text-orange-600 px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Request a Pickup
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <p className="text-orange-100 text-sm mt-6 font-semibold">
            Fully Insured • Professional Driver • Owner-Operated
          </p>
        </div>
      </section>
    </div>
  );
}
