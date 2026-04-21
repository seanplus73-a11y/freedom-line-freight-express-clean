import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  ArrowRight,
  Car,
  Clock,
  Shield,
  CheckCircle,
  MessageSquare,
} from "lucide-react";

export default function DriveForMyCar() {
  return (
    <>
      <Helmet>
        <title>Drive For My Car Service Arizona | Personal Driver Service</title>
        <meta
          name="description"
          content="Need someone to drive for your car in Arizona? I personally drive your vehicle home, to the mechanic, or anywhere needed. No towing. No waiting."
        />
      </Helmet>

      <div className="bg-[#111827] text-white">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Need Someone to Drive for Your Car in Arizona?
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
            I personally drive your vehicle where it needs to go. No towing.
            No trailer. Just direct, simple service.
          </p>

          <p className="text-base text-gray-400 mb-6">
            Serving Phoenix, San Tan Valley, Queen Creek, Gilbert, Chandler,
            Mesa and nearby areas.
          </p>

          <p className="font-semibold text-white mb-8">
            Same day or next day availability in most areas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-pickup"
              className="bg-orange-500 px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition"
            >
              Get Instant Quote
            </Link>

            <Link
              to="/pricing"
              className="border border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition"
            >
              View Pricing
            </Link>
          </div>

          <p className="mt-4 text-sm text-gray-300">
            Text 4807428553 for a fast response
          </p>
        </section>

        {/* WHY SECTION */}
        <section className="bg-[#0f172a] py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Why People Choose This Service
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Car,
                  title: "Direct Driving Service",
                  text: "Your car is driven directly without towing or delays.",
                },
                {
                  icon: Clock,
                  title: "Fast Scheduling",
                  text: "Same day or next day service in most areas.",
                },
                {
                  icon: Shield,
                  title: "Owner Operated",
                  text: "Handled personally from pickup to drop off.",
                },
                {
                  icon: MessageSquare,
                  title: "Real Time Updates",
                  text: "Clear communication during the trip.",
                },
                {
                  icon: CheckCircle,
                  title: "Simple Process",
                  text: "No apps. No confusion. Just direct service.",
                },
                {
                  icon: Car,
                  title: "No Towing Needed",
                  text: "Your vehicle is driven, not transported on a trailer.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-[#111827] p-6 rounded-lg border border-white/10"
                  >
                    <Icon className="text-orange-500 mb-4 mx-auto" size={30} />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* USE CASE */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              When You Need a Driver for Your Car
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Drive your car home",
                "Take your car to the mechanic",
                "Drop off at a dealership",
                "Move your car across town",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#111827] p-6 rounded-lg border border-white/10"
                >
                  <CheckCircle className="text-orange-500 mb-3 mx-auto" />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-500 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Moving Your Car Today?
          </h2>

          <p className="text-lg mb-6">
            Get a fast quote and simple scheduling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-pickup"
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-bold"
            >
              Request Pickup
            </Link>

            <Link
              to="/pricing"
              className="border border-white px-6 py-3 rounded-lg font-bold"
            >
              View Pricing
            </Link>
          </div>

          <p className="mt-4 text-sm">
            Text 4807428553 for a fast response
          </p>
        </section>

      </div>
    </>
  );
}
