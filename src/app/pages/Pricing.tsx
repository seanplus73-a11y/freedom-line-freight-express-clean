import { Link } from "react-router";
import {
  Check,
  ArrowRight,
  Car,
  X,
  MessageSquare,
  Building2,
  Truck,
  Star,
  Package,
  HelpCircle,
  Shield,
  Receipt,
  UserCheck,
} from "lucide-react";
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

  const services = [
    {
      id: "delivery",
      icon: Truck,
      label: "Vehicle Delivery",
      sublabel: "Drive away, A to B",
      description:
        "I drive your car directly to its destination. No towing, no trailers. Great for dealer transfers, auction pickups, and repair shop moves.",
      tiers: [
        { range: "Local", miles: "0 to 25 miles", price: "$85", note: "Starting at" },
        { range: "Extended", miles: "25 to 50 miles", price: "$125", note: "Starting at" },
        { range: "Regional", miles: "50 to 150 miles", price: "$250", note: "Starting at" },
        { range: "Long Distance", miles: "150 plus miles", price: "Custom", note: "Text for quote" },
      ],
      note: "Includes pickup, drive, and delivery. Final price depends on route, timing, and vehicle type.",
      cta: "Text for Vehicle Delivery Quote",
      highlight: false,
    },
    {
      id: "concierge",
      icon: Star,
      label: "Vehicle Concierge",
      sublabel: "Pickup, errand, return",
      description:
        "I pick up your car, take it for its service such as an oil change, car wash, tire shop, or dealership visit, then return it to you. You pay the shop directly for their work.",
      tiers: [
        { range: "Local", miles: "0 to 10 miles", price: "$45", note: "Starting at" },
        { range: "Extended", miles: "10 to 25 miles", price: "$65", note: "Starting at" },
        { range: "Longer Distance", miles: "25 plus miles", price: "Custom", note: "Text for quote" },
      ],
      note: "This covers pickup and return only. You pay the shop separately for their service such as the oil change, wash, or repair.",
      cta: "Text to Book a Concierge Pickup",
      highlight: true,
    },
    {
      id: "courier",
      icon: Package,
      label: "Courier Service",
      sublabel: "Parts, docs, packages",
      description:
        "I deliver auto parts, business documents, packages, and urgent items between locations. Same day available across Phoenix metro.",
      tiers: [
        { range: "Auto Parts Delivery", miles: "", price: "$45+", note: "Starting at" },
        { range: "Business Items and Packages", miles: "", price: "$35+", note: "Starting at" },
        { range: "Documents and Urgent Delivery", miles: "", price: "$25+", note: "Starting at" },
      ],
      note: "Final price depends on distance, item size, and urgency. Text for an exact quote before booking.",
      cta: "Text for Courier Quote",
      highlight: false,
    },
  ];

  const alwaysIncluded = [
    { icon: UserCheck, label: "Owner Operated", sub: "I handle every job personally" },
    { icon: MessageSquare, label: "Text Updates", sub: "Pickup, in progress, and done" },
    { icon: Shield, label: "Fully Insured", sub: "Your vehicle is protected" },
    { icon: Receipt, label: "No Hidden Fees", sub: "Quote confirmed before booking" },
  ];

  return (
    <div className="bg-neutral-900">

      {/* ── Header ── */}
      <section className="relative bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-neutral-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-neutral-700">
            <Car className="mr-2 text-orange-500" size={18} />
            All Service Pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent{" "}
            <span className="text-orange-500">Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Three different services, three different price lists. Pick the one that matches what you need below.
          </p>
        </div>
      </section>

      {/* ── Not sure explainer ── */}
      <section className="py-8 bg-neutral-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-800 border border-orange-500/30 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <HelpCircle className="text-orange-500" size={26} />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-lg mb-2">
                Not sure which service you need?
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                <span className="text-white font-semibold">Vehicle Delivery</span> = I drive your car from A to B.{"  "}
                <span className="text-white font-semibold">Vehicle Concierge</span> = I pick it up, take it to a shop, bring it back.{"  "}
                <span className="text-white font-semibold">Courier</span> = I deliver parts, documents, or packages.
              </p>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-base font-bold transition-colors"
            >
              Text Us
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3 Service Pricing Cards ── */}
      <section className="py-12 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`rounded-2xl overflow-hidden flex flex-col ${
                    service.highlight
                      ? "border-2 border-orange-500 bg-neutral-800"
                      : "border border-neutral-700 bg-neutral-800"
                  }`}
                >
                  {/* Most popular badge */}
                  {service.highlight && (
                    <div className="bg-orange-500 text-white text-sm font-bold text-center py-3 tracking-wide">
                      Most Popular
                    </div>
                  )}

                  {/* Card header */}
                  <div className="bg-neutral-900/60 px-6 py-6 border-b border-neutral-700">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="text-orange-500" size={26} />
                      </div>
                      <div>
                        <p className="text-white font-bold text-xl leading-tight">
                          {service.label}
                        </p>
                        <p className="text-gray-400 text-base mt-1">
                          {service.sublabel}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing tiers */}
                  <div className="px-6 py-6 flex flex-col gap-4 flex-1">
                    {service.tiers.map((tier, i) => (
                      <div
                        key={i}
                        className={`rounded-xl px-5 py-4 ${
                          service.highlight && i === 0
                            ? "bg-neutral-900 border border-orange-500/30"
                            : "bg-neutral-900"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <p className="text-white font-bold text-base leading-tight">
                              {tier.range}
                            </p>
                            {tier.miles !== "" && (
                              <p className="text-gray-400 text-sm mt-1">
                                {tier.miles}
                              </p>
                            )}
                          </div>
                          <p className="text-gray-400 text-sm whitespace-nowrap mt-1">
                            {tier.note}
                          </p>
                        </div>
                        <p className="text-orange-500 text-3xl font-bold leading-none mt-2">
                          {tier.price}
                        </p>
                      </div>
                    ))}

                    {/* Clarification note */}
                    <div className="border-l-4 border-orange-500 pl-4 py-1">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.note}
                      </p>
                    </div>

                    {/* CTA */}
                    <Link
                      to="/contact"
                      className="mt-2 w-full inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-xl font-bold text-base transition-colors"
                    >
                      {service.cta}
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Always Included ── */}
      <section className="py-12 bg-neutral-800 border-y border-neutral-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold tracking-widest text-orange-500 uppercase mb-8">
            Every Service, Every Time
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {alwaysIncluded.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-neutral-900 rounded-xl p-5 text-center">
                  <Icon className="text-orange-500 mx-auto mb-3" size={28} />
                  <p className="text-white text-base font-bold mb-1">{item.label}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Business Account Banner ── */}
      <section className="py-10 bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-950 border border-orange-500 rounded-lg p-8 text-center">
            <Building2 className="text-orange-500 mx-auto mb-4" size={38} />
            <h2 className="text-3xl font-bold text-white mb-4">
              Running a Dealership or Repair Shop?
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
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

      {/* ── Service Area ── */}
      <section className="py-16 bg-neutral-800 border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              My <span className="text-orange-500">Service Area</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I provide direct vehicle delivery across Phoenix metro and statewide Arizona.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-900 rounded-lg border border-orange-500/30 p-8 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Check className="text-orange-500 mr-3 flex-shrink-0" size={22} />
                  <span className="text-lg font-bold text-white">Arizona primary service area</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-orange-500 mr-3 flex-shrink-0" size={22} />
                  <span className="text-lg font-bold text-white">Nearby states by request only</span>
                </div>
              </div>

              <div className="bg-orange-900/20 border border-orange-500/50 p-4 rounded mb-6">
                <p className="text-orange-100 text-base font-semibold">
                  Out of state delivery is limited and scheduled based on availability.
                </p>
              </div>

              <div className="border-t border-neutral-700 pt-6 space-y-4">
                <p className="text-gray-300 text-base leading-relaxed">
                  <strong className="text-white">Based in Arizona,</strong> I specialize in reliable local and regional vehicle delivery throughout the state.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  <strong className="text-white">Door to door pickup and delivery available</strong>{" "}
                  for cars, SUVs, small light duty trucks, and luxury vehicles.
                </p>
                <p className="text-gray-300 text-base flex items-start">
                  <X className="text-red-500 mr-2 flex-shrink-0 mt-0.5" size={20} />
                  <span>No towing. No trailers. No commercial freight.</span>
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-base italic font-semibold">
                Fully insured and owner operated with direct accountability on every delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What I Transport ── */}
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
                  <h3 className="font-bold text-white text-lg flex items-center">
                    <Check className="text-green-500 mr-2" size={20} />
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
                  <h3 className="font-bold text-white text-lg flex items-center">
                    <Check className="text-green-500 mr-2" size={20} />
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
                  <h3 className="font-bold text-white text-lg flex items-center">
                    <Check className="text-green-500 mr-2" size={20} />
                    Small Light Duty Trucks
                  </h3>
                  <p className="text-base text-gray-400 mt-1">F-250 or 2500 class</p>
                </div>

                <div className="bg-neutral-800 border-2 border-green-500/30 rounded-lg p-4">
                  <div className="overflow-hidden rounded-lg mb-3">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1622701578810-67534f6e6d2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdWRpJTIwQTYlMjBibGFjayUyMHNpbHZlcnxlbnwxfHx8fDE3NzE2NTM5MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Luxury vehicles"
                      className="w-full h-32 object-cover rounded"
                    />
                  </div>
                  <h3 className="font-bold text-white text-lg flex items-center">
                    <Check className="text-green-500 mr-2" size={20} />
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
                <div className="bg-neutral-800 border-2 border-red-500/30 rounded-lg p-5 flex items-center">
                  <X className="text-red-500 mr-3 flex-shrink-0" size={26} />
                  <div>
                    <h3 className="font-bold text-white text-lg">Commercial Trucks</h3>
                    <p className="text-base text-gray-400 mt-1">
                      Box trucks, delivery trucks, or commercial fleet vehicles.
                    </p>
                  </div>
                </div>
                <div className="bg-neutral-800 border-2 border-red-500/30 rounded-lg p-5 flex items-center">
                  <X className="text-red-500 mr-3 flex-shrink-0" size={26} />
                  <div>
                    <h3 className="font-bold text-white text-lg">Semi Trucks</h3>
                    <p className="text-base text-gray-400 mt-1">
                      18 wheelers, tractor trailers, or large commercial trucks.
                    </p>
                  </div>
                </div>
                <div className="bg-neutral-800 border-2 border-red-500/30 rounded-lg p-5 flex items-center">
                  <X className="text-red-500 mr-3 flex-shrink-0" size={26} />
                  <div>
                    <h3 className="font-bold text-white text-lg">Freight Cargo</h3>
                    <p className="text-base text-gray-400 mt-1">
                      Palletized goods, shipping containers, or commercial freight.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-orange-500/10 border-l-4 border-orange-500 p-5 rounded">
                <p className="text-base text-gray-300 leading-relaxed">
                  I specialize in safely moving operable vehicles. I do not handle towing, trailers, or commercial freight operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-neutral-700 pb-8 last:border-b-0">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 text-base leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="text-white mx-auto mb-5" size={44} />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Not Sure Which Price Applies?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto font-semibold leading-relaxed">
            Just text us your situation. We will give you an exact quote in minutes, no commitment needed.
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
          <p className="text-orange-100 text-base mt-6 font-semibold">
            Fully Insured | Owner Operated | Text First Communication
          </p>
        </div>
      </section>

    </div>
  );
}
