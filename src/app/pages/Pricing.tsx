import { Link } from "react-router";
import { Check, ArrowRight, Car, X, MessageSquare, Building2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Pricing() {
  const faqs = [
    {
      question: "How is pricing calculated?",
      answer:
        "Pricing is based on distance, vehicle type, route, timing, and scheduling needs. I confirm the quote before pickup.",
    },
    {
      question: "Are there hidden fees?",
      answer:
        "No. Pricing is confirmed before dispatch. You will know the cost before the vehicle is moved.",
    },
    {
      question: "Is my vehicle insured during delivery?",
      answer:
        "Yes. Freedom Line Freight Express carries commercial auto coverage for transport services.",
    },
    {
      question: "What types of vehicles do you move?",
      answer:
        "I move operable cars, SUVs, small light duty trucks, and luxury vehicles that are safe, legal to drive, insured, and ready for the road.",
    },
    {
      question: "How do you communicate during delivery?",
      answer:
        "Everything is handled by text or email. I confirm pickup, send updates, and confirm delivery by written message.",
    },
    {
      question: "How does payment work?",
      answer:
        "Payment is confirmed before dispatch. Payment details are provided after the quote is accepted.",
    },
  ];

  return (
    <div className="bg-neutral-900">
      {/* Header Section */}
      <section className="relative bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-neutral-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-neutral-700">
            <Car className="mr-2 text-orange-500" size={18} />
            Vehicle Delivery Pricing
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple Vehicle{" "}
            <span className="text-orange-500">Delivery Pricing</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Clear starting rates for direct drive away vehicle delivery. No towing. No trailers. No hidden fees.
          </p>
        </div>
      </section>

      {/* Business Account Banner */}
      <section className="py-10 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-950 border border-orange-500 rounded-lg p-8 text-center">
            <Building2 className="text-orange-500 mx-auto mb-4" size={38} />

            <h2 className="text-3xl font-bold text-white mb-4">
              Running a Dealership or Repair Shop?
            </h2>

            <p className="text-gray-300 text-lg mb-6">
              I offer volume pricing for businesses moving multiple vehicles.
              Text me to get started with dealer or shop service.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors"
            >
              Text Me to Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-neutral-800 border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              My <span className="text-orange-500">Service Area</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              I provide direct vehicle delivery across Phoenix metro and statewide Arizona.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-900 rounded-lg border border-orange-500/30 p-8 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Check className="text-orange-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-lg font-bold text-white">
                    Arizona primary service area
                  </span>
                </div>

                <div className="flex items-center">
                  <Check className="text-orange-500 mr-3 flex-shrink-0" size={20} />
                  <span className="text-lg font-bold text-white">
                    Nearby states by request only
                  </span>
                </div>
              </div>

              <div className="bg-orange-900/20 border border-orange-500/50 p-4 rounded mb-6">
                <p className="text-orange-100 text-sm font-semibold">
                  Out of state delivery is limited and scheduled based on availability.
                </p>
              </div>

              <div className="border-t border-neutral-700 pt-6">
                <p className="text-gray-300 mb-4">
                  <strong className="text-white">Based in Arizona,</strong> I specialize in reliable local and regional vehicle delivery throughout the state.
                </p>

                <p className="text-gray-300 mb-4">
                  <strong className="text-white">Door to door pickup and delivery available</strong>{" "}
                  for cars, SUVs, small light duty trucks, and luxury vehicles.
                </p>

                <p className="text-gray-300 flex items-start">
                  <X className="text-red-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                  <span>No towing. No trailers. No commercial freight.</span>
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 italic font-semibold">
                Fully insured and owner operated with direct accountability on every delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Distance Based Pricing Section */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="mb-6 bg-orange-900/30 border-l-4 border-orange-500 p-6 rounded max-w-4xl mx-auto">
              <p className="text-orange-100 font-semibold text-lg">
                <strong className="text-orange-400">Need it moved fast?</strong>{" "}
                My service is designed for customers who do not want to wait days for traditional carriers.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Distance Based <span className="text-orange-500">Pricing</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Starting rates for direct vehicle delivery. Final quote depends on distance, route, timing, and vehicle condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Local",
                miles: "0 to 25 miles",
                price: "$85",
                note: "Starting at",
                includes: [
                  "Door to door vehicle pickup",
                  "Same day availability when possible",
                  "Secure vehicle handling",
                  "Photo documentation",
                  "Delivery confirmation",
                ],
              },
              {
                name: "Extended Local",
                miles: "25 to 50 miles",
                price: "$125",
                note: "Starting at",
                includes: [
                  "Everything in Local",
                  "Flexible scheduling",
                  "Business to business delivery",
                  "Priority booking options",
                ],
              },
              {
                name: "Regional",
                miles: "50 to 150 miles",
                price: "$250",
                note: "Starting at",
                includes: [
                  "Everything in Extended Local",
                  "Dedicated vehicle delivery",
                  "Multi vehicle scheduling",
                  "Volume pricing available",
                ],
              },
              {
                name: "Long Distance",
                miles: "150+ miles",
                price: "Custom Quote",
                note: "Text me your route",
                includes: [
                  "Longer route vehicle delivery",
                  "Scheduled delivery window",
                  "Custom pricing based on distance",
                  "Quote provided after route details",
                ],
              },
            ].map((tier, index) => (
              <div
                key={index}
                className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 hover:border-orange-500 transition-colors flex flex-col"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{tier.miles}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-orange-500">
                    {tier.price}
                  </span>
                  <p className="text-sm text-gray-400 mt-1">{tier.note}</p>
                </div>

                <div className="mb-6 flex-grow">
                  <p className="text-sm font-semibold text-white mb-3">
                    Includes:
                  </p>

                  <ul className="space-y-2 text-sm text-gray-300">
                    {tier.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <Check
                          className="text-orange-500 mr-2 flex-shrink-0 mt-0.5"
                          size={16}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center bg-orange-500 text-white px-6 py-3 rounded-md font-bold hover:bg-orange-600 transition-colors mt-auto"
                >
                  Text for Quote
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400 italic">
              Prices shown are starting rates for standard vehicles. Final pricing may vary based on vehicle type, route, timing, and scheduling needs.
            </p>
          </div>
        </div>
      </section>

      {/* What I Transport Section */}
      <section className="py-16 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Check className="text-green-500 mr-3" size={28} />
                I Transport
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-neutral-800 border-2 border-green-500/30 rounded-lg p-4">
                  <div className="overflow-hidden rounded-lg mb-3">
                    <ImageWithFallback
                      src="https://cdn.pixabay.com/photo/2015/08/11/22/33/nissan-885308_1280.jpg"
                      alt="Sedans"
                      className="w-full h-32 object-cover rounded"
                    />
                  </div>
                  <h3 className="font-bold text-white flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    Cars
                  </h3>
                </div>

                <div className="bg-neutral-800 border-2 border-green-500/30 rounded-lg p-4">
                  <div className="overflow-hidden rounded-lg mb-3">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1767749995450-7b63ab7cd4fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTVVYlMjBsdXh1cnklMjB2ZWhpY2xlfGVufDF8fHx8MTc3MTU2NjkxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="SUVs"
                      className="w-full h-32 object-cover rounded"
                    />
                  </div>
                  <h3 className="font-bold text-white flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    SUVs
                  </h3>
                </div>

                <div className="bg-neutral-800 border-2 border-green-500/30 rounded-lg p-4">
                  <div className="overflow-hidden rounded-lg mb-3">
                    <ImageWithFallback
                      src="https://cdn.pixabay.com/photo/2022/11/05/17/10/f150-7572360_1280.jpg"
                      alt="Small light duty trucks"
                      className="w-full h-32 object-cover rounded"
                    />
                  </div>
                  <h3 className="font-bold text-white flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    Small Light Duty Trucks
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    F-250 or 2500 class
                  </p>
                </div>

                <div className="bg-neutral-800 border-2 border-green-500/30 rounded-lg p-4">
                  <div className="overflow-hidden rounded-lg mb-3">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1622701578810-67534f6e6d2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdWRpJTIwQTYlMjBibGFjayUyMHNpbHZlcnxlbnwxfHx8fDE3NzE2NTM5MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Luxury vehicles"
                      className="w-full h-32 object-cover rounded"
                    />
                  </div>
                  <h3 className="font-bold text-white flex items-center">
                    <Check className="text-green-500 mr-2" size={18} />
                    Luxury Vehicles
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <X className="text-red-500 mr-3" size={28} />
                I Do Not Transport
              </h2>

              <div className="space-y-4">
                <div className="bg-neutral-800 border-2 border-red-500/30 rounded-lg p-4 flex items-center">
                  <X className="text-red-500 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-white">Commercial Trucks</h3>
                    <p className="text-sm text-gray-400">
                      Box trucks, delivery trucks, or commercial fleet vehicles.
                    </p>
                  </div>
                </div>

                <div className="bg-neutral-800 border-2 border-red-500/30 rounded-lg p-4 flex items-center">
                  <X className="text-red-500 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-white">Semi Trucks</h3>
                    <p className="text-sm text-gray-400">
                      18 wheelers, tractor trailers, or large commercial trucks.
                    </p>
                  </div>
                </div>

                <div className="bg-neutral-800 border-2 border-red-500/30 rounded-lg p-4 flex items-center">
                  <X className="text-red-500 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-white">Freight Cargo</h3>
                    <p className="text-sm text-gray-400">
                      Palletized goods, shipping containers, or commercial freight.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-orange-500/10 border-l-4 border-orange-500 p-4 rounded">
                <p className="text-sm text-gray-300">
                  I specialize in safely moving operable vehicles. I do not handle towing, trailers, or commercial freight operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-neutral-700 pb-8 last:border-b-0"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="text-white mx-auto mb-5" size={44} />

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Move a Vehicle?
          </h2>

          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto font-semibold">
            Text me directly. I respond fast.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-orange-600 px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Text Me to Book
            </Link>

            <Link
              to="/request-pickup"
              className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              Request Pickup Form
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          <p className="text-orange-100 text-sm mt-6 font-semibold">
            Fully Insured | Owner Operated | Text First Communication
          </p>
        </div>
      </section>
    </div>
  );
}
