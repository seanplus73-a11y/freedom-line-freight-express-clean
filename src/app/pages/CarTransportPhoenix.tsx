import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle,
  Car,
  Clock,
  Shield,
  MapPin,
  Phone,
  Wrench,
  Building2,
  Users,
  Star,
  DollarSign,
  Zap,
} from "lucide-react";

export default function CarTransportPhoenix() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Car Transport Phoenix",
    serviceType: "Car Transport Service",
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
      "San Tan Valley AZ",
      "Casa Grande AZ",
    ],
    description:
      "Local car transport in Phoenix Arizona. We drive your vehicle directly to its destination — no towing, no trailers. Same day available. Owner-operated and fully insured.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does car transport cost in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Car transport in Phoenix starts at $85 for moves up to 25 miles, $125 for 25 to 50 miles, and $250 for 50 to 150 miles. Flat rate pricing with no hidden fees.",
        },
      },
      {
        "@type": "Question",
        name: "How does car transport work in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Freedom Line Freight Express drives your vehicle directly to its destination. You text us the pickup address, delivery address, and vehicle type. We provide a quote and drive your car door to door — no trailers, no tow trucks.",
        },
      },
      {
        "@type": "Question",
        name: "Is same day car transport available in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Same day car transport is available in Phoenix metro depending on route and schedule. Text us early for the best availability.",
        },
      },
      {
        "@type": "Question",
        name: "What areas in Phoenix do you transport cars to?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide car transport throughout Phoenix metro including Mesa, Chandler, Gilbert, Queen Creek, Scottsdale, Tempe, San Tan Valley, and Casa Grande.",
        },
      },
      {
        "@type": "Question",
        name: "Do you transport cars to mechanics and dealerships in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Car transport to mechanics, dealerships, auctions, private buyers, and any other location in Phoenix metro is our core service.",
        },
      },
      {
        "@type": "Question",
        name: "Are you licensed and insured for car transport in Arizona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Freedom Line Freight Express is fully licensed and insured for every car transport job in Arizona.",
        },
      },
    ],
  };

  const pricing = [
    {
      range: "0 to 25 miles",
      price: "$85",
      examples: "Queen Creek to Chandler, Mesa to Gilbert",
      highlight: false,
    },
    {
      range: "25 to 50 miles",
      price: "$125",
      examples: "Queen Creek to Phoenix, Gilbert to Scottsdale",
      highlight: true,
    },
    {
      range: "50 to 150 miles",
      price: "$250",
      examples: "Phoenix to Casa Grande, Valley to Tucson",
      highlight: false,
    },
  ];

  const whyItems = [
    {
      icon: Car,
      title: "We Drive Your Car",
      desc: "No tow trucks. No trailers. Your vehicle is driven directly to its destination by a trusted professional.",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      desc: "Every car transport job in Phoenix is covered. You have peace of mind from pickup to delivery.",
    },
    {
      icon: Clock,
      title: "Same Day Available",
      desc: "Need your car moved today? Same day car transport is available across Phoenix metro.",
    },
    {
      icon: Phone,
      title: "Owner Answers Every Call",
      desc: "No call centers. No dispatchers. You text or call Sean directly and he personally drives your vehicle.",
    },
    {
      icon: DollarSign,
      title: "Flat Rate Pricing",
      desc: "Clear pricing based on distance. No hidden fees, no fuel surcharges, no surprises at drop off.",
    },
    {
      icon: Zap,
      title: "Fast Response",
      desc: "Text us your details and we respond quickly with availability and a confirmed price.",
    },
  ];

  const whoWeServe = [
    {
      icon: Users,
      title: "Private Car Owners",
      items: [
        "Car needs to go to the mechanic",
        "Buying or selling a vehicle privately",
        "Post-repair pickup while you are at work",
        "Moving a car to storage or a new home",
      ],
    },
    {
      icon: Building2,
      title: "Dealerships",
      items: [
        "Inventory transport between locations",
        "Customer vehicle delivery after purchase",
        "Auction pickup and lot transfers",
        "Key and title runs across the valley",
      ],
    },
    {
      icon: Wrench,
      title: "Shops and Mechanics",
      items: [
        "Vehicle pickup from customer locations",
        "Post-repair delivery back to customers",
        "Parts vehicle transport between shops",
        "Fleet vehicle movement and logistics",
      ],
    },
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
        <title>Car Transport Phoenix | Same Day Local Car Transport | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Car transport in Phoenix made simple. We drive your vehicle directly — no towing, no trailers. Flat rate pricing from $85. Same day available. Owner-operated and fully insured. Text 480-742-8553."
        />
        <link rel="canonical" href="https://www.flfreightco.com/car-transport-phoenix" />
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
                Phoenix Metro Car Transport
              </div>

              <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                Car Transport{" "}
                <span className="text-orange-500">Phoenix</span>
                <span className="block text-2xl md:text-3xl font-bold text-gray-300 mt-3">
                  We Drive Your Vehicle Directly. No Towing. No Trailers.
                </span>
              </h1>

              <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Freedom Line Freight Express is Trusted local car transport service in Phoenix.
                Owner-operated, fully insured, and personally driven by Sean — the owner —
                every single time.
              </p>

              <p className="mb-8 text-orange-400 font-bold text-xl">
                📞 Call, text, or request a quote online: 480-742-8553
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-4 text-lg font-bold text-white hover:bg-orange-600 transition-colors"
                >
                  Get Quote Online
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
                  "Fully licensed and insured",
                  "Same day available",
                  "No towing or trailers",
                  "Flat rate pricing",
                  "All of Phoenix metro",
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
                { icon: Car, label: "Door to Door", sub: "Driven directly, no trailer" },
                { icon: Shield, label: "Fully Insured", sub: "Every transport covered" },
                { icon: Clock, label: "Same Day", sub: "Fast local service" },
                { icon: Star, label: "Owner Driven", sub: "Sean drives every vehicle" },
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

        {/* WHY CHOOSE US */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Why Choose Freedom Line for{" "}
                <span className="text-orange-500">Car Transport in Phoenix?</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                We built this service around one simple idea — your car deserves to be
                driven, not dragged. Here is what sets us apart.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyItems.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl border border-neutral-800 bg-neutral-900 p-7 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20">
                    <Icon className="text-orange-500" size={22} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Car Transport Pricing in{" "}
                <span className="text-orange-500">Phoenix</span>
              </h2>
              <p className="text-lg text-gray-300">
                Simple flat rate pricing. No hidden fees. No fuel surcharges. No surprises.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              {pricing.map(({ range, price, examples, highlight }) => (
                <div
                  key={range}
                  className={`relative rounded-xl border p-8 transition-all ${
                    highlight
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-neutral-700 bg-neutral-950"
                  }`}
                >
                  {highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-white whitespace-nowrap">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-2 text-sm font-medium text-gray-400">{range}</div>
                  <div className="mb-3 text-5xl font-black text-white">{price}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{examples}</div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <div>
                  <h3 className="font-bold text-white mb-2">Need a custom quote?</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    For routes over 150 miles, multiple vehicles, or special transport
                    requirements text or call us for a custom price. We respond fast.
                  </p>
                </div>
                <div className="flex flex-col gap-3 md:items-end">
                  <a
                    href="tel:4807428553"
                    className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600 transition-colors"
                  >
                    <Phone size={16} />
                    Call 480-742-8553
                  </a>
                  <p className="text-xs text-gray-500">
                    We reply fast with an exact price
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Who We Serve with{" "}
                <span className="text-orange-500">Car Transport in Phoenix</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                From private car owners to dealerships and repair shops — we handle
                vehicle transport for individuals and businesses across Phoenix.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {whoWeServe.map(({ icon: Icon, title, items }) => (
                <div
                  key={title}
                  className="rounded-xl border border-neutral-800 bg-neutral-900 p-7 hover:border-orange-500 transition-colors"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20">
                    <Icon className="text-orange-500" size={22} />
                  </div>
                  <h3 className="mb-5 text-xl font-bold text-white">{title}</h3>
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

        {/* HOW IT WORKS */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                How Car Transport Works in{" "}
                <span className="text-orange-500">Phoenix</span>
              </h2>
              <p className="text-lg text-gray-300">
                Four simple steps from request to delivery.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: "1",
                 title: "Contact Us",
desc: "Call, text, or request a quote online with your pickup and delivery details.",
                },
                {
                  step: "2",
                  title: "Get Your Quote",
                  desc: "We reply with flat rate pricing and confirm same day or scheduled availability.",
                },
                {
                  step: "3",
                  title: "We Pick Up",
                  desc: "Sean arrives at the pickup location and confirms everything with you directly.",
                },
                {
                  step: "4",
                  title: "Delivered",
                  desc: "Your vehicle is driven door to door and delivered safely to its destination.",
                },
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

            <div className="mt-12 text-center">
              <Link
                to="/request-pickup"
                className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-8 py-4 text-lg font-bold text-white hover:bg-orange-600 transition-colors"
              >
                Request Car Transport Now
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* SEO CONTENT SECTION */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 items-start">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Local Car Transport in{" "}
                  <span className="text-orange-500">Phoenix</span>{" "}
                  Done Differently
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  Most people searching for car transport in Phoenix expect to find enclosed
                  trailers and long distance shipping companies. Freedom Line Freight Express
                  is different. We are a local drive-away car transport service built
                  specifically for Phoenix metro moves.
                  If you are searching for car transport Phoenix, you are likely looking for a fast local solution without the delays of traditional auto transport companies.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  Whether you need your car taken to a mechanic in Chandler, a dealership
                  in Scottsdale, or delivered to a private buyer in Mesa — we drive it there
                  directly. No equipment, no loading, no waiting for a trailer slot to open up.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Same day car transport is available across all of Phoenix metro when you
                  need it fast. Text us your details and we confirm availability within minutes.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Trusted Car Transport for{" "}
                  <span className="text-orange-500">Phoenix Businesses</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  Dealerships, repair shops, auto auctions, and fleet managers across
                  Phoenix trust Freedom Line Freight Express for reliable vehicle transport.
                  When you work with us you are not dealing with a dispatcher or a corporate
                  call center — you deal directly with Sean, the owner.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  That direct relationship means faster response times, clearer communication,
                  and a car transport service that actually shows up on time. For businesses
                  that need regular vehicle transport in Phoenix, we offer repeat service
                  with consistent pricing.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Text or call 480-742-8553 to discuss your business transport needs and
                  set up a reliable schedule that works for your operation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Car Transport Phoenix{" "}
                <span className="text-orange-500">FAQ</span>
              </h2>
            </div>
            <div className="space-y-5">
              {[
                {
                  q: "How much does car transport cost in Phoenix?",
                  a: "Flat rate pricing starting at $85 for up to 25 miles, $125 for 25 to 50 miles, and $250 for 50 to 150 miles. No hidden fees or fuel surcharges.",
                },
                {
                  q: "How does car transport work in Phoenix?",
                  a: "We drive your vehicle directly to its destination. Text us the pickup address, delivery address, and vehicle type. We confirm the price and schedule, then drive your car door to door.",
                },
                {
                  q: "Is same day car transport available in Phoenix?",
                  a: "Yes. Same day car transport is available in Phoenix metro depending on route and schedule. Text us early in the day for the best availability.",
                },
                {
                  q: "What areas in Phoenix do you transport cars to?",
                  a: "All of Phoenix metro including Mesa, Chandler, Gilbert, Queen Creek, Scottsdale, Tempe, San Tan Valley, Casa Grande, and surrounding areas.",
                },
                {
                  q: "Do you transport cars to mechanics and dealerships?",
                  a: "Yes. Mechanic drop-offs, dealership transfers, auction pickups, and private deliveries are all part of our Phoenix car transport service.",
                },
                {
                  q: "Are you licensed and insured for car transport in Arizona?",
                  a: "Yes. Freedom Line Freight Express is fully licensed and insured for every car transport job in Arizona.",
                },
              ].map(({ q, a }) => (
                <div
                  key={q}
                  className="rounded-xl border border-neutral-700 bg-neutral-950 p-6 hover:border-orange-500 transition-colors"
                >
                  <h3 className="mb-3 font-bold text-white text-lg">{q}</h3>
                  <p className="text-gray-400 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="py-16 bg-neutral-950">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-4xl">
              Car Transport Service Areas in Phoenix Metro
            </h2>
            <p className="mb-8 text-gray-400">
              Serving all of Phoenix and the East Valley. Click your city for local service details.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map(([city, link]) => (
                <Link
                  key={city}
                  to={link}
                  className="rounded-full border border-neutral-800 bg-neutral-900 px-5 py-2.5 text-sm text-gray-300 hover:border-orange-500 hover:text-orange-400 transition-colors"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED PAGES */}
        <section className="py-10 bg-neutral-900 border-t border-neutral-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Related Services
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                ["Auto Transport Phoenix", "/auto-transport-phoenix"],
                ["Vehicle Delivery Phoenix", "/vehicle-delivery-phoenix"],
                ["Auto Parts Delivery", "/auto-parts-delivery"],
                ["Vehicle Delivery", "/vehicle-delivery"],
                ["Request Pickup", "/request-pickup"],
              ].map(([label, link]) => (
                <Link
                  key={label}
                  to={link}
                  className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-neutral-950 px-4 py-2 text-sm text-gray-300 hover:border-orange-500 hover:text-orange-400 transition-colors"
                >
                  {label}
                  <ArrowRight size={13} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-4xl font-black md:text-5xl">
              Need Car Transport in Phoenix?
            </h2>
            <p className="mb-2 text-xl font-semibold text-orange-100">
              Flat rate pricing. Same day available. Owner driven every time.
            </p>
            <p className="mb-10 text-orange-100">
              Call, text, or request a quote online with your pickup and delivery details.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-orange-600 hover:bg-gray-100 transition-colors"
              >
                Request Car Transport
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
