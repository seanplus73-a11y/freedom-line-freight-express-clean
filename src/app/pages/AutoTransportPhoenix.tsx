import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle,
  Car,
  Clock,
  Shield,
  MapPin,
  Star,
  Phone,
  Wrench,
  Building2,
  Users,
  Zap,
  DollarSign,
} from "lucide-react";

export default function AutoTransportPhoenix() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Auto Transport Phoenix",
    serviceType: "Vehicle Delivery Service",
    provider: {
      "@type": "LocalBusiness",
      name: "Freedom Line Freight Express",
      url: "https://www.flfreightco.com",
      telephone: "+1-480-742-8553",
      email: "dispatch@flfreightco.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Queen Creek",
        addressRegion: "AZ",
        addressCountry: "US",
      },
    },
    areaServed: [
      "Phoenix AZ",
      "Mesa AZ",
      "Chandler AZ",
      "Gilbert AZ",
      "Queen Creek AZ",
      "Scottsdale AZ",
      "Tempe AZ",
      "Casa Grande AZ",
    ],
    description:
      "Same day auto transport in Phoenix. We drive your vehicle directly to its destination. No towing, no trailers. Owner-operated and fully insured.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is vehicle delivery different from auto transport?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional auto transport uses trucks and trailers to ship vehicles long distances. Freedom Line Freight Express drives your vehicle directly to its destination in Phoenix — no trailer, no tow truck. It is faster, more affordable, and better for local moves.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer same day auto transport in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Same day vehicle pickup and delivery is available in the Phoenix metro area depending on schedule and route. Text us for availability.",
        },
      },
      {
        "@type": "Question",
        name: "Are you insured for vehicle transport in Arizona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Freedom Line Freight Express is fully insured for every vehicle delivery in Arizona.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you serve in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve all of Phoenix metro including Mesa, Chandler, Gilbert, Queen Creek, Scottsdale, Tempe, Casa Grande, San Tan Valley and surrounding areas.",
        },
      },
      {
        "@type": "Question",
        name: "How much does auto transport cost in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pricing starts at $85 for moves up to 25 miles, $125 for 25 to 50 miles, and $250 for 50 to 150 miles. Text us for an exact quote.",
        },
      },
    ],
  };

  const pricing = [
    { range: "0 to 25 miles", price: "$85", best: "Local runs" },
    { range: "25 to 50 miles", price: "$125", best: "Cross valley", highlight: true },
    { range: "50 to 150 miles", price: "$250", best: "Long distance" },
  ];

  const customers = [
    {
      icon: Users,
      title: "Private Car Owners",
      items: [
        "Bought a car across town and need it delivered",
        "Car is at the shop but you have no ride",
        "Selling a vehicle and need it moved to the buyer",
        "Post-repair pickup while you are at work",
      ],
    },
    {
      icon: Building2,
      title: "Dealerships and Businesses",
      items: [
        "Inventory moves between dealer locations",
        "Key and title runs across the valley",
        "Customer vehicle delivery after purchase",
        "Auction pickup and lot transfers",
      ],
    },
    {
      icon: Wrench,
      title: "Shops and Mechanics",
      items: [
        "Vehicle pickup from customer homes",
        "Post-repair delivery back to customers",
        "Parts vehicle transport between locations",
        "Fleet vehicle movement",
      ],
    },
  ];

  const whyUs = [
    { icon: Car, text: "We drive your car directly. No tow truck. No trailer." },
    { icon: Shield, text: "Owner-operated and fully insured for every job." },
    { icon: Clock, text: "Same day availability when you need it fast." },
    { icon: Phone, text: "You deal with the owner every time. No dispatchers." },
    { icon: MapPin, text: "Serving all of Phoenix metro and East Valley." },
    { icon: Zap, text: "Fast response. Text us and we reply quickly." },
  ];

  const areas = [
    ["Phoenix", "/phoenix-delivery"],
    ["Mesa", "/mesa-delivery"],
    ["Chandler", "/chandler-delivery"],
    ["Gilbert", "/gilbert-delivery"],
    ["Queen Creek", "/queen-creek-delivery"],
    ["Scottsdale", "/scottsdale-delivery"],
    ["Tempe", "/tempe-delivery"],
    ["Casa Grande", "/casa-grande-delivery"],
    ["San Tan Valley", "/san-tan-valley-delivery"],
  ];

  return (
    <>
      <Helmet>
        <title>Auto Transport Phoenix | Same Day Vehicle Delivery | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Auto transport Phoenix made simple. We drive your vehicle directly to its destination — no towing, no trailers. Same day service available. Owner-operated and fully insured. Call 480-742-8553."
        />
        <link rel="canonical" href="https://www.flfreightco.com/auto-transport-phoenix" />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="bg-neutral-950 text-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-black py-24">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-orange-500/15 blur-3xl" />
          <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-orange-500/5 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500 bg-black/50 px-4 py-2 text-sm font-semibold">
                <MapPin className="text-orange-500" size={16} />
                Phoenix Metro Vehicle Delivery
              </div>

              <h1 className="mb-4 text-4xl font-black leading-tight md:text-6xl lg:text-7xl uppercase tracking-tight">
                Auto Transport
                <span className="block text-orange-500">Phoenix</span>
                <span className="block text-2xl md:text-3xl font-bold text-gray-300 normal-case tracking-normal mt-2">
                  We Drive It. No Towing. No Trailers.
                </span>
              </h1>

              <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Freedom Line Freight Express is Phoenix's owner-operated vehicle delivery service.
                We personally drive your car to its destination — same day available, fully insured,
                and no middlemen ever.
              </p>

             <p className="mb-8 text-orange-400 font-bold text-xl">
  📞 Call, text, or request a quote online
</p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <p className="text-sm text-gray-400 mt-4">
  Prefer not to call? Request a quote online in under 30 seconds.
</p>
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-4 text-lg font-bold text-white hover:bg-orange-600 transition-colors"
                >
                  Request Delivery Now
                  <ArrowRight className="ml-2" size={22} />
                </Link>
                <a
                  href="tel:4807428553"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 text-lg font-bold text-white hover:bg-white hover:text-black transition-colors"
                >
                  <Phone className="mr-2" size={20} />
                  Call 480-742-8553
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 text-sm text-gray-300">
                {[
                  "Owner operated",
                  "Fully insured",
                  "Same day available",
                  "No towing or trailers",
                  "Phoenix metro",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle className="text-orange-500" size={16} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="border-y border-neutral-800 bg-black py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Car, label: "No Tow Trucks", sub: "We drive your car directly" },
                { icon: Shield, label: "Fully Insured", sub: "Every single delivery" },
                { icon: Clock, label: "Same Day", sub: "When you need it fast" },
                { icon: Star, label: "Owner Operated", sub: "You deal with me directly" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20">
                    <Icon className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-white">{label}</div>
                    <div className="text-sm text-gray-400">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT MAKES US DIFFERENT */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-5xl leading-tight">
                  This Is Not Traditional{" "}
                  <span className="text-orange-500">Auto Transport</span>
                </h2>
                <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                  Traditional auto transport loads your car onto an enclosed or open trailer
                  and ships it across the country. That works great for long distance moves
                  but it is overkill for Phoenix metro.
                </p>
                <p className="mb-8 text-gray-400 leading-relaxed">
                  Freedom Line Freight Express drives your vehicle directly to its destination
                  like a normal driver would. Faster, more affordable, and personal. You get
                  real communication from the moment we pick up to the moment we deliver.
                </p>
                <div className="space-y-4">
                  {whyUs.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-orange-500/10">
                        <Icon className="text-orange-500" size={16} />
                      </div>
                      <p className="text-gray-300">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
                <h3 className="mb-6 text-2xl font-bold text-orange-500">
                  Traditional Transport vs FLF Express
                </h3>
                <div className="space-y-4">
                  {[
                    ["Enclosed trailer needed", "No trailer — we drive it"],
                    ["Days to schedule", "Same day available"],
                    ["Expensive long haul pricing", "Affordable flat rate local pricing"],
                    ["No personal contact", "Owner answers every call"],
                    ["Vehicle sits on a truck", "Driven door to door"],
                    ["Best for cross-country", "Built for Phoenix metro"],
                  ].map(([bad, good]) => (
                    <div key={bad} className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-start gap-2 text-gray-500">
                        <span className="mt-0.5 text-red-500 font-bold flex-shrink-0">✕</span>
                        {bad}
                      </div>
                      <div className="flex items-start gap-2 text-gray-200">
                        <span className="mt-0.5 text-orange-500 font-bold flex-shrink-0">✓</span>
                        {good}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Who Uses Our{" "}
                <span className="text-orange-500">Phoenix Auto Transport?</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                We serve both private car owners and automotive businesses across the Phoenix metro area.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {customers.map(({ icon: Icon, title, items }) => (
                <div
                  key={title}
                  className="rounded-xl border border-neutral-800 bg-neutral-950 p-7 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20">
                    <Icon className="text-orange-500" size={24} />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-white">{title}</h3>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                        <CheckCircle className="mt-0.5 flex-shrink-0 text-orange-500" size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Simple <span className="text-orange-500">Flat Rate Pricing</span>
              </h2>
              <p className="text-lg text-gray-300">
                No hidden fees. No surprises. Just clear pricing based on distance.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-10">
              {pricing.map(({ range, price, best, highlight }) => (
                <div
                  key={range}
                  className={`relative rounded-xl border p-8 text-center transition-all ${
                    highlight
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-neutral-800 bg-neutral-900"
                  }`}
                >
                  {highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-white">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-2 text-sm text-gray-400">{range}</div>
                  <div className="mb-2 text-5xl font-black text-white">{price}</div>
                  <div className="text-sm text-orange-400 font-medium">{best}</div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <DollarSign className="text-orange-500" size={20} />
                <span className="font-bold text-white">Need a custom quote?</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                For routes over 150 miles, multiple vehicles, or special circumstances
               call, text, or request a quote online for a custom price. We respond fast.
              </p>
              <a
                href="tel:4807428553"
                className="inline-flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors"
              >
                <Phone size={16} />
                Text or call 480-742-8553
              </a>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                How It <span className="text-orange-500">Works</span>
              </h2>
              <p className="text-lg text-gray-300">Simple. Fast. No surprises.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                { step: "1", title: "Contact Us", desc: "Call, text, or request a quote online with pickup and delivery details." },
                { step: "2", title: "Get a Quote", desc: "We reply fast with pricing and availability. No waiting around." },
                { step: "3", title: "We Pick Up", desc: "We arrive at the pickup location and confirm everything with you." },
                { step: "4", title: "Delivered", desc: "Your vehicle is driven directly to the destination. Done." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="relative text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-xl font-black text-white">
                    {step}
                  </div>
                  <h3 className="mb-2 font-bold text-white">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                  {parseInt(step) < 4 && (
                    <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-orange-500/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Frequently Asked <span className="text-orange-500">Questions</span>
              </h2>
            </div>
            <div className="space-y-5">
              {[
                {
                  q: "How is this different from traditional auto transport?",
                  a: "Traditional auto transport loads your car on a trailer and ships it long distance. We drive your vehicle directly to its destination in Phoenix — faster, cheaper, and more personal for local moves.",
                },
                {
                  q: "Do you offer same day auto transport in Phoenix?",
                  a: "Yes. Same day vehicle pickup and delivery is available in the Phoenix metro area depending on schedule and route. Text us first thing for the best availability.",
                },
                {
                  q: "Are you insured for vehicle transport in Arizona?",
                  a: "Yes. Freedom Line Freight Express is fully insured for every vehicle delivery in Arizona.",
                },
                {
                  q: "What vehicles can you transport?",
                  a: "We transport cars, trucks, SUVs, and vans. Any vehicle that is road legal and in driveable condition.",
                },
                {
                  q: "What areas in Phoenix do you serve?",
                  a: "We serve all of Phoenix metro including Mesa, Chandler, Gilbert, Queen Creek, Scottsdale, Tempe, Casa Grande, San Tan Valley and surrounding areas.",
                },
                {
                  q: "How do I get a quote?",
                  a: "Call, text, or request a quote online with the pickup address, delivery address, and vehicle type. We respond fast with pricing and availability.",
                },
              ].map(({ q, a }) => (
                <div
                  key={q}
                  className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 hover:border-orange-500 transition-colors"
                >
                  <h3 className="mb-3 font-bold text-white text-lg">{q}</h3>
                  <p className="text-gray-400 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="py-16 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-4xl">
              Phoenix Auto Transport Service Areas
            </h2>
            <p className="mb-8 text-gray-300">
              Serving all of Phoenix metro and East Valley communities.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map(([city, link]) => (
                <Link
                  key={city}
                  to={link}
                  className="rounded-full border border-neutral-700 bg-neutral-950 px-5 py-2.5 text-sm text-gray-300 hover:border-orange-500 hover:text-orange-400 transition-colors"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-4xl font-black md:text-5xl uppercase">
              Ready to Move Your Vehicle?
            </h2>
            <p className="mb-3 text-xl font-semibold text-orange-100">
              Same day auto transport available across Phoenix metro.
            </p>
            <p className="mb-8 text-orange-100">
             Call, text, or request a quote online with your pickup and delivery details for a fast response.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-orange-600 hover:bg-gray-100 transition-colors"
              >
                Request Delivery
                <ArrowRight className="ml-2" size={22} />
              </Link>
              <a
                href="tel:4807428553"
                className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 text-lg font-bold text-white hover:bg-white hover:text-orange-600 transition-colors"
              >
                <Phone className="mr-2" size={20} />
                Call 480-742-8553
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
