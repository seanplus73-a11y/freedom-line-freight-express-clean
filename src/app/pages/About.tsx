import { Link } from "react-router";
import { CheckCircle, Award, Users, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
const ourStoryImg = "/images/our-story.jpg";

export default function About() {
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
                  <span className="text-gray-300">Direct Driver Communication</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-orange-500 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Reliable Local & Regional Service</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-neutral-700 h-[400px] md:h-[500px]">
              <ImageWithFallback
                src={ourStoryImage}
                alt="Professional vehicle key handover and delivery service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-900">
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
            <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/20">
                <CheckCircle className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
              <p className="text-gray-400">
                We believe in honest pricing, clear expectations, and delivering exactly what we promise. No hidden fees. No surprises.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/20">
                <Users className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Direct Responsibility</h3>
              <p className="text-gray-400">
                Your vehicle is handled directly by us from pickup to drop-off. No brokers. No carrier networks. Just straightforward, accountable service.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/20">
                <Award className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Professional Care</h3>
              <p className="text-gray-400">
                Every vehicle is treated with attention and respect, whether it is a sedan, SUV, small heavy-duty truck, or luxury vehicle.
              </p>
            </div>

            <div className="bg-neutral-800 p-8 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors text-center">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/20">
                <TrendingUp className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Reliability</h3>
              <p className="text-gray-400">
                We value punctuality, preparedness, and consistent communication. Every delivery matters, and every client deserves dependable service.
              </p>
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
              <div className="font-bold text-white mb-2">Fully Insured</div>
              <p className="text-sm text-gray-400">Comprehensive Coverage</p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg text-center border border-neutral-700">
              <div className="font-bold text-white mb-2">Arizona Licensed</div>
              <p className="text-sm text-gray-400">State Licensed Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work Directly With Freedom Line
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto font-semibold">
            Trusted by individuals and dealerships across Arizona for reliable vehicle pickup and delivery.
          </p>
          <Link
            to="/request-pickup"
            className="inline-flex items-center bg-white text-orange-600 px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Request Vehicle Pickup
          </Link>
        </div>
      </section>
    </div>
  );
}
