import { Link } from "react-router";
import { DollarSign, MapPin, Truck, Calendar, Shield, ArrowRight, Info } from "lucide-react";

/**
 * Pricing Page - Freedom Line Freight Express
 * Custom quote-based pricing - no public per-mile rates
 */
export default function Pricing() {
  const pricingFactors = [
    {
      icon: MapPin,
      title: "Distance & Route",
      description: "Total mileage and specific pickup/delivery locations affect the overall cost of transport."
    },
    {
      icon: Truck,
      title: "Vehicle Type & Size",
      description: "The size, weight, and type of vehicle being transported (car, truck, SUV, motorcycle)."
    },
    {
      icon: Calendar,
      title: "Timeline & Flexibility",
      description: "Your scheduling requirements and how flexible you can be with pickup/delivery dates."
    },
    {
      icon: Shield,
      title: "Special Requirements",
      description: "Any specific needs such as enclosed transport, expedited service, or unique circumstances."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Pricing Information
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every vehicle transport job is unique. I provide custom quotes tailored to your 
            specific needs and requirements.
          </p>
        </div>
      </section>

      {/* Custom Quote Notice */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Custom Quotes for Every Job
                </h2>
                <p className="text-gray-300 mb-4">
                  I don't publish standard per-mile rates because every transport situation is different. 
                  Factors like route efficiency, vehicle type, scheduling, and specific requirements all 
                  play a role in determining fair pricing.
                </p>
                <p className="text-gray-300">
                  Request a free quote with your transport details, and I'll provide you with a 
                  competitive, transparent price based on your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What Affects Pricing?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Several factors determine the cost of your vehicle transport. Here's what I consider 
              when creating your custom quote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingFactors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors"
                >
                  <div className="bg-orange-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {factor.title}
                  </h3>
                  <p className="text-gray-300">
                    {factor.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                What's Included in Every Quote
              </h2>
              <p className="text-gray-300 mb-6">
                When you receive a quote from Freedom Line Freight Express, you can expect 
                transparent pricing that includes all essential services.
              </p>
              <ul className="space-y-4">
                {[
                  "Door-to-door pickup and delivery service",
                  "Full insurance coverage during transport",
                  "Professional handling and care of your vehicle",
                  "Regular communication and updates",
                  "Flexible scheduling within the agreed timeframe",
                  "No hidden fees or surprise charges"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <DollarSign className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">
                How to Get Your Quote
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Submit Your Request</h4>
                    <p className="text-gray-400 text-sm">
                      Fill out the pickup request form with your transport details
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Receive Your Quote</h4>
                    <p className="text-gray-400 text-sm">
                      I'll review your needs and send you a custom quote
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Schedule Your Transport</h4>
                    <p className="text-gray-400 text-sm">
                      Once approved, we'll coordinate pickup and delivery
                    </p>
                  </div>
                </div>
              </div>
              <Link 
                to="/request-pickup" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2 w-full justify-center"
              >
                Request Your Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Payment & Terms
          </h2>
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-white mb-3">Payment Options</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Cash</li>
                  <li>• Check</li>
                  <li>• Electronic transfer</li>
                  <li>• Other methods discussed on request</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-3">Transparent Pricing</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• No hidden fees</li>
                  <li>• Clear quote upfront</li>
                  <li>• Payment terms discussed in advance</li>
                  <li>• Professional invoicing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Your Custom Quote?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Provide your transport details and I'll send you a fair, competitive quote 
            tailored to your specific needs.
          </p>
          <Link 
            to="/request-pickup" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
          >
            Request a Quote Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
