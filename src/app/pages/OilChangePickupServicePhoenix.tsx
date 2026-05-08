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
  Star,
  Wrench,
  DollarSign,
  Repeat,
  Home,
  Briefcase,
  AlertCircle,
  Zap,
} from "lucide-react";

export default function OilChangePickupServicePhoenix() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Oil Change Pickup Service Phoenix",
    serviceType: "Oil Change Pickup and Return Service",
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
      "Oil change pickup and return service in Phoenix Arizona. We pick up your vehicle, take it to your preferred oil change shop, and return it to your home or office when done. Owner-operated and fully insured.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is oil change pickup service in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oil change pickup service means we come to your home or office, pick up your vehicle, take it to your preferred oil change shop, wait while the service is done, and return it to you. You never have to leave.",
        },
      },
      {
        "@type": "Question",
        name: "How much does oil change pickup service cost in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oil change pickup service in Phoenix starts at $45 for up to 10 miles and $65 for 10 to 25 miles. The oil change cost itself is separate and paid directly by you to the shop.",
        },
      },
      {
        "@type": "Question",
        name: "Do you take my car to any oil change shop in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You choose the shop and we drive your vehicle there and back. Any oil change location in the Phoenix metro area including Jiffy Lube, Valvoline, Firestone, dealerships, and independent shops.",
        },
      },
      {
        "@type": "Question",
        name: "Is same day oil change pickup available in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Same day oil change pickup is available in Phoenix depending on schedule. Text us early for the best availability.",
        },
      },
      {
        "@type": "Question",
        name: "Do you wait at the shop while my oil is changed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We wait at the shop while your oil change is completed and then drive your vehicle straight back to your home or office.",
        },
      },
      {
        "@type": "Question",
        name: "Are you insured for oil change pickup service in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Freedom Line Freight Express is fully insured for every oil change pickup and return job in Phoenix. Your vehicle is protected from pickup to return.",
        },
      },
    ],
  };

  const howItWorks = [
    {
      step: "1",
      title: "Text Your Details",
      desc: "Send your address, your preferred oil change shop, and your preferred pickup time to 480-742-8553.",
    },
    {
      step: "2",
      title: "We Confirm the Quote",
      desc: "We reply with flat rate pricing and availability. Everything is agreed before we arrive at your door.",
    },
    {
      step: "3",
      title: "We Pick Up and Wait",
      desc: "We arrive, pick up your car, drive it to the shop, and wait while the oil change is completed.",
    },
    {
      step: "4",
      title: "Returned to Your Door",
      desc: "Your car comes back to your home or office freshly serviced. You never left your desk.",
    },
  ];

  const whoItIsFor = [
    {
      icon: Home,
      title: "Homeowners",
      items: [
        "No time to sit at the shop for an hour",
        "Do not want to arrange a ride back",
        "Overdue oil change and no time to go",
        "Want it handled without disrupting the day",
      ],
    },
    {
      icon: Briefcase,
      title: "Busy Professionals",
      items: [
        "Back to back meetings with no gap",
        "Working from home with no break window",
        "Need the car serviced before a trip",
        "Want the errand done while you focus",
      ],
    },
    {
      icon: Repeat,
      title: "Regular Service",
      items: [
        "Every 3000 to 5000 miles without thinking about it",
        "Fleet vehicles needing scheduled maintenance",
        "Multiple vehicles in the household",
        "Set it and forget it recurring oil changes",
      ],
    },
  ];

  const shops = [
    "Jiffy Lube",
    "Valvoline Instant Oil Change",
    "Firestone Complete Auto Care",
    "Pep Boys",
    "Dealership service centers",
    "Independent shops",
    "Any shop you prefer",
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
        <title>Oil Change Pickup Service Phoenix | We Pick Up and Return Your Car | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Oil change pickup service in Phoenix. We pick up your car, take it to your preferred shop, wait while it is serviced, and return it to your door. Same day available. Fully insured. Text 480-742-8553."
        />
        <link rel="canonical" href="https://www.flfreightco.com/oil-change-pickup-service-phoenix" />
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
                <Wrench className="text-orange-500" size={16} />
                Phoenix Metro Oil Change Pickup Service
              </div>

              <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                Oil Change Pickup Service{" "}
                <span className="text-orange-500">Phoenix</span>
                <span className="block text-2xl md:text-3xl font-bold text-gray-300 mt-3">
                  We Pick Up Your Car. Take It to the Shop. Return It Serviced.
                </span>
              </h1>

              <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Stop sitting in the waiting room. Freedom Line Freight Express picks
                up your vehicle from your home or office, takes it to your preferred
                oil change shop in Phoenix, waits while the service is done, and
                returns it to your door. You keep your day. Your car gets serviced.
              </p>

              <p className="mb-8 text-orange-400 font-bold text-xl">
                📞 Text only: 480-742-8553
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-4 text-lg font-bold text-white hover:bg-orange-600 transition-colors"
                >
                  Schedule Oil Change Pickup
                  <ArrowRight className="ml-2" size={22} />
                </Link>
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 text-lg font-bold text-white hover:bg-white hover:text-black transition-colors"
                >
                  <Phone className="mr-2" size={20} />
                  Text for Quote
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 text-sm text-gray-300">
                {[
                  "Owner operated",
                  "Fully insured",
                  "Deaf owned business",
                  "Same day available",
                  "We wait at the shop",
                  "Any shop you choose",
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
                { icon: Wrench, label: "Any Shop", sub: "You choose, we drive" },
                { icon: Shield, label: "Fully Insured", sub: "Every pickup and return" },
                { icon: Clock, label: "We Wait for You", sub: "Until the job is done" },
                { icon: Star, label: "Owner Operated", sub: "Deaf-owned local business" },
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

        {/* HOW IT WORKS */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                How Oil Change Pickup{" "}
                <span className="text-orange-500">Works</span>
              </h2>
              <p className="text-lg text-gray-300">
                Four simple steps. Your car gets serviced. You never leave home.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {howItWorks.map(({ step, title, desc }) => (
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

            <div className="mt-12 rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 text-center">
              <p className="text-white font-semibold mb-4">
                Oil change overdue? Text us and we will handle it today.
              </p>
              <Link
                to="/request-pickup"
                className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600 transition-colors"
              >
                <Phone size={16} />
                Text 480-742-8553
              </Link>
            </div>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Who Uses Oil Change Pickup{" "}
                <span className="text-orange-500">Service in Phoenix?</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                Anyone who needs their oil changed but does not have time to sit
                at the shop. Here is who we serve most.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {whoItIsFor.map(({ icon: Icon, title, items }) => (
                <div
                  key={title}
                  className="rounded-xl border border-neutral-800 bg-neutral-950 p-7 hover:border-orange-500 transition-colors"
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

        {/* SHOPS WE DRIVE TO */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  We Drive to{" "}
                  <span className="text-orange-500">Any Oil Change Shop</span>{" "}
                  in Phoenix
                </h2>
                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                  You choose the shop. We do the driving. We are not affiliated with
                  any specific oil change provider — we simply take your car to
                  wherever you prefer and bring it back when done.
                </p>
                <p className="mb-8 text-gray-400 leading-relaxed">
                  Already have a trusted mechanic or shop you use for oil changes?
                  We take your car there. Prefer a quick Jiffy Lube or Valvoline run?
                  We handle that too. Any location in Phoenix metro.
                </p>
                <div className="flex flex-wrap gap-2">
                  {shops.map((shop) => (
                    <span
                      key={shop}
                      className="rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-gray-300"
                    >
                      {shop}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 flex-shrink-0 text-orange-500" size={20} />
                    <div>
                      <h3 className="font-bold text-white mb-2">
                        Oil change overdue in Arizona heat?
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        Phoenix summers are brutal on engine oil. Skipping or
                        delaying oil changes in Arizona heat can cause serious engine
                        damage faster than in cooler climates. If your oil change is
                        overdue, do not wait. Text us and we will get it handled today.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
                  <div className="flex items-start gap-3">
                    <Zap className="mt-0.5 flex-shrink-0 text-orange-500" size={20} />
                    <div>
                      <h3 className="font-bold text-white mb-2">
                        Same day oil change pickup available
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        Need it done today? Same day oil change pickup is available
                        across Phoenix metro depending on schedule and route. Text us
                        in the morning for the best availability and we will confirm
                        a pickup time fast.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
                  <div className="flex items-start gap-3">
                    <Repeat className="mt-0.5 flex-shrink-0 text-orange-500" size={20} />
                    <div>
                      <h3 className="font-bold text-white mb-2">
                        Set up recurring oil change pickups
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        Never think about your oil change again. We offer recurring
                        pickup service so your car gets serviced on schedule every
                        time without any effort from you. Text us to set it up.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Oil Change Pickup Pricing in{" "}
                <span className="text-orange-500">Phoenix</span>
              </h2>
              <p className="text-lg text-gray-300">
                Flat rate pickup and return pricing. The oil change cost is separate
                and paid directly by you to the shop.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              {[
                {
                  label: "Local Pickup and Return",
                  range: "0 to 10 miles",
                  price: "$55",
                  example: "Nearby shop in your area",
                  highlight: false,
                },
                {
                  label: "Extended Local",
                  range: "10 to 25 miles",
                  price: "$75",
                  example: "Preferred shop across the valley",
                  highlight: true,
                },
                {
                  label: "Longer Distance",
                  range: "25 plus miles",
                  price: "Custom",
                  example: "Text us for a fast quote",
                  highlight: false,
                },
              ].map(({ label, range, price, example, highlight }) => (
                <div
                  key={label}
                  className={`relative rounded-xl border p-8 text-center transition-all ${
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
                  <div className="mb-2 text-sm font-medium text-gray-400">{label}</div>
                  <div className="mb-1 text-xs text-gray-500">{range}</div>
                  <div className="mb-3 text-5xl font-black text-white">{price}</div>
                  <div className="text-xs text-gray-500 italic">{example}</div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6 mb-4">
              <div className="flex items-start gap-3">
                <DollarSign className="mt-0.5 flex-shrink-0 text-orange-500" size={20} />
                <div>
                  <h3 className="font-bold text-white mb-2">
                    How pricing works
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    The prices above cover pickup from your door, driving to the shop,
                    waiting while the oil change is completed, and returning your vehicle.
                    The actual oil change cost is separate and your responsibility.
                    Wait time is included for standard oil changes. Extended service
                    time may be billed additionally.
                  </p>
                  <h4 className="font-semibold text-white mb-3">
                    How to handle the oil change payment:
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 rounded-lg border border-neutral-700 bg-neutral-900 p-4">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-white">
                        1
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white mb-1">
                          Call the shop ahead of time
                        </p>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          Call your preferred shop before we arrive and give them your
                          credit card over the phone or set up payment in advance. We
                          drop the car off and they charge you directly. Simplest option.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-lg border border-neutral-700 bg-neutral-900 p-4">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-white">
                        2
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white mb-1">
                          Pay the shop online or by app
                        </p>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          Many shops like Jiffy Lube and Valvoline allow you to pay
                          remotely by phone or through their app while your car is being
                          serviced. You pay from home, we pick up the car when done.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-gray-500 italic">
                    We do not front oil change costs on behalf of customers. Payment
                    to the service provider is always the customer's responsibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-white mb-1">
                    Final price confirmed before we arrive.
                  </p>
                  <p className="text-sm text-gray-400">
                    Text me your address and preferred shop and I will give you an
                    exact quote before anything is booked. No surprises.
                  </p>
                </div>
                <Link
                  to="/request-pickup"
                  className="flex-shrink-0 inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600 transition-colors"
                >
                  <Phone size={16} />
                  Text for Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 items-start">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Oil Change Pickup and Return{" "}
                  <span className="text-orange-500">Service Near Phoenix</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  Most people in Phoenix put off their oil change because they simply
                  do not have an hour to spare sitting at a shop. Between work, kids,
                  and everything else, that hour never seems to come. Oil change
                  pickup service solves that problem completely.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  Freedom Line Freight Express picks up your vehicle from your home
                  or office, takes it to your preferred oil change location anywhere
                  in Phoenix metro, waits while the service is completed, and returns
                  your car to your door when done. The whole process happens while
                  you carry on with your day.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We serve all of Phoenix including Mesa, Chandler, Gilbert, Queen
                  Creek, Scottsdale, Tempe, San Tan Valley, Casa Grande and
                  surrounding areas.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Why Oil Changes Matter More{" "}
                  <span className="text-orange-500">in Arizona Heat</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  Phoenix summers push engine temperatures higher than almost anywhere
                  else in the country. That extreme heat breaks down engine oil faster
                  than in cooler climates which means your oil change schedule matters
                  even more here than it does elsewhere.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  Skipping or delaying oil changes in Arizona heat can lead to
                  sludge buildup, engine wear, and costly repairs. Staying on top
                  of your maintenance schedule is not just good practice in Phoenix —
                  it is essential for protecting your vehicle.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Our recurring oil change pickup service makes it easy to stay on
                  schedule. Text us once to set it up and we handle it from there
                  every time your service is due.
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
                Oil Change Pickup Phoenix{" "}
                <span className="text-orange-500">FAQ</span>
              </h2>
            </div>
            <div className="space-y-5">
              {[
                {
                  q: "What is oil change pickup service in Phoenix?",
                  a: "We come to your home or office, pick up your vehicle, take it to your preferred oil change shop, wait while the service is done, and return it to you. You never have to leave.",
                },
                {
                  q: "How much does oil change pickup service cost in Phoenix?",
                  a: "Starting at $55 for up to 10 miles and $75 for 10 to 25 miles. The oil change cost is separate and your responsibility — paid directly to the shop by phone, card on file, or app. Text us for an exact quote before anything is booked.",
                },
                {
                  q: "Do you take my car to any oil change shop in Phoenix?",
                  a: "Yes. You choose the shop and we drive your vehicle there and back. Any location in Phoenix metro including Jiffy Lube, Valvoline, Firestone, dealerships, and independent mechanics.",
                },
                {
                  q: "Is same day oil change pickup available in Phoenix?",
                  a: "Yes. Same day oil change pickup is available in Phoenix depending on schedule. Text us early in the day for the best availability.",
                },
                {
                  q: "Do you wait at the shop while my oil is changed?",
                  a: "Yes. We wait at the shop while your oil change is completed and then drive your vehicle straight back to your home or office.",
                },
                {
                  q: "Are you insured for oil change pickup service in Phoenix?",
                  a: "Yes. Freedom Line Freight Express is fully insured for every oil change pickup and return job. Your vehicle is protected from pickup to return.",
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
              Oil Change Pickup Service Areas in Phoenix Metro
            </h2>
            <p className="mb-8 text-gray-400">
              Serving homeowners and professionals across all of Phoenix and the East Valley.
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
                ["Car Wash Pickup Phoenix", "/car-wash-pickup-service-phoenix"],
                ["Vehicle Concierge Phoenix", "/vehicle-concierge-phoenix"],
                ["Vehicle Concierge", "/vehicle-concierge"],
                ["Vehicle Delivery Phoenix", "/vehicle-delivery-phoenix"],
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
              Need Oil Change Pickup in Phoenix?
            </h2>
            <p className="mb-2 text-xl font-semibold text-orange-100">
              We pick up your car, take it to the shop, wait, and return it serviced.
            </p>
            <p className="mb-10 text-orange-100">
              Text your address and preferred shop for a fast quote.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-orange-600 hover:bg-gray-100 transition-colors"
              >
                Schedule Oil Change Pickup
                <ArrowRight className="ml-2" size={22} />
              </Link>
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 text-lg font-bold text-white hover:bg-white hover:text-orange-600 transition-colors"
              >
                <Phone className="mr-2" size={20} />
                Text 480-742-8553
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
