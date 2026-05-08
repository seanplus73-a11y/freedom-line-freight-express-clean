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
  Droplets,
  HeartHandshake,
  CalendarCheck,
  Building2,
  Zap,
  DollarSign,
  Repeat,
} from "lucide-react";

export default function VehicleConciergeQueenCreek() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vehicle Concierge Queen Creek",
    serviceType: "Vehicle Concierge Service",
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
      "Queen Creek AZ",
      "San Tan Valley AZ",
      "Gilbert AZ",
      "Chandler AZ",
      "Mesa AZ",
      "Phoenix AZ",
    ],
    description:
      "Vehicle concierge service in Queen Creek Arizona. We pick up your car, take it to any service provider, and return it to your home. Car wash, oil change, mechanic, and dealership trips handled locally. Owner operated and based in Queen Creek.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Freedom Line Freight Express based in Queen Creek?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Freedom Line Freight Express is owner operated and based right here in Queen Creek Arizona. When you use our vehicle concierge service you are supporting a local Queen Creek business.",
        },
      },
      {
        "@type": "Question",
        name: "What is vehicle concierge service in Queen Creek?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vehicle concierge in Queen Creek means we pick up your car from your home, take it to any service provider you choose, and return it to your door when done. Car wash, oil change, mechanic, or dealership trips handled without you leaving home.",
        },
      },
      {
        "@type": "Question",
        name: "How much does vehicle concierge cost in Queen Creek?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vehicle concierge in Queen Creek starts at $45 for car wash pickup up to 10 miles and $55 for mechanic or oil change pickup up to 10 miles. Because we are based locally in Queen Creek many Queen Creek residents fall in the lowest distance tier.",
        },
      },
      {
        "@type": "Question",
        name: "Do you serve San Tan Valley and nearby areas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We serve Queen Creek, San Tan Valley, Gilbert, Chandler, Mesa, and surrounding East Valley communities.",
        },
      },
      {
        "@type": "Question",
        name: "Is same day vehicle concierge available in Queen Creek?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Same day vehicle concierge is available in Queen Creek and nearby areas. Because we are based locally we can often respond faster than services coming from farther away.",
        },
      },
      {
        "@type": "Question",
        name: "Are you insured for vehicle concierge in Queen Creek?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Freedom Line Freight Express is fully insured for every vehicle concierge job in Queen Creek and surrounding areas. Your vehicle is protected from pickup to return.",
        },
      },
    ],
  };

  const services = [
    {
      icon: Droplets,
      title: "Car Wash Pickup and Return",
      desc: "We pick up your car, take it to any Queen Creek area car wash, and return it clean to your door. No waiting, no driving.",
    },
    {
      icon: Wrench,
      title: "Mechanic and Repair Runs",
      desc: "We take your vehicle to any mechanic in Queen Creek or surrounding areas and return it when the work is done.",
    },
    {
      icon: Car,
      title: "Oil Change Service Runs",
      desc: "Oil change pickup and return from your Queen Creek home. We handle the trip while you keep your day going.",
    },
    {
      icon: Building2,
      title: "Dealership Service Visits",
      desc: "Warranty work, recalls, and scheduled dealership maintenance handled door to door from your Queen Creek address.",
    },
    {
      icon: HeartHandshake,
      title: "Senior Vehicle Assistance",
      desc: "Trusted vehicle concierge for Queen Creek seniors. We handle every car service trip so seniors never have to leave home.",
    },
    {
      icon: Repeat,
      title: "Recurring Service Pickups",
      desc: "Set up regular oil change or car wash pickups on a schedule that works for you. Set it once and we handle it every time.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Text Your Details",
      desc: "Send your Queen Creek address, the service your car needs, and your preferred time to 480-742-8553.",
    },
    {
      step: "2",
      title: "We Confirm the Quote",
      desc: "We reply fast with pricing and availability. Because we are based locally in Queen Creek response time is quick.",
    },
    {
      step: "3",
      title: "We Handle the Trip",
      desc: "We arrive at your Queen Creek home, pick up your car, and take it to your chosen service provider.",
    },
    {
      step: "4",
      title: "Returned to Your Door",
      desc: "Your car comes back to your Queen Creek home serviced and ready. Clear text confirmation on return.",
    },
  ];

  const nearbyAreas = [
    ["San Tan Valley", "/san-tan-valley-delivery"],
    ["Gilbert", "/gilbert-delivery"],
    ["Chandler", "/chandler-delivery"],
    ["Mesa", "/mesa-delivery"],
    ["Phoenix", "/phoenix-delivery"],
    ["Scottsdale", "/scottsdale-delivery"],
    ["Tempe", "/tempe-delivery"],
    ["Casa Grande", "/casa-grande-delivery"],
  ];

  return (
    <>
      <Helmet>
        <title>Vehicle Concierge Queen Creek AZ | Local Car Pickup and Return | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Vehicle concierge service in Queen Creek AZ. Locally based owner operated service. We pick up your car, take it to any service provider, and return it to your door. Car wash, oil change, mechanic, dealership. Text 480-742-8553."
        />
        <link rel="canonical" href="https://www.flfreightco.com/vehicle-concierge-queen-creek" />
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
                Locally Based in Queen Creek AZ
              </div>

              <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                Vehicle Concierge{" "}
                <span className="text-orange-500">Queen Creek</span>
                <span className="block text-2xl md:text-3xl font-bold text-gray-300 mt-3">
                  Your Local Car Pickup and Return Service. Right Here in Queen Creek.
                </span>
              </h1>

              <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Freedom Line Freight Express is not just serving Queen Creek from
                across the valley. We are based right here in Queen Creek. When you
                use our vehicle concierge service you are working with your neighbor
                who personally picks up your car, takes it to any service provider
                you choose, and returns it to your door. No towing. No trailers.
                Just reliable local service from someone who lives in your community.
              </p>

              <p className="mb-8 text-orange-400 font-bold text-xl">
                📞 Text only: 480-742-8553
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-4 text-lg font-bold text-white hover:bg-orange-600 transition-colors"
                >
                  Request Concierge Service
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
                  "Based in Queen Creek",
                  "Owner operated",
                  "Fully insured",
                  "Deaf owned business",
                  "Same day available",
                  "Text preferred",
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
                { icon: MapPin, label: "Based in Queen Creek", sub: "Your true local neighbor" },
                { icon: Shield, label: "Fully Insured", sub: "Every single pickup" },
                { icon: Clock, label: "Same Day Available", sub: "Fast local response" },
                { icon: Star, label: "Owner Operated", sub: "Deaf owned local business" },
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

        {/* LOCAL ADVANTAGE */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">

              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Why Queen Creek Residents Choose{" "}
                  <span className="text-orange-500">a Local Service</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed text-lg">
                  Queen Creek has grown fast. New neighborhoods, new families, and
                  busy schedules mean less time to sit at a car wash or mechanic.
                  Our vehicle concierge service was built for exactly this community.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  Because we are based right here in Queen Creek we know the area,
                  the roads, and the service providers. We can often respond and
                  dispatch faster than any service coming from Phoenix or Chandler.
                  Same day availability is more reliable when your driver is already
                  in the neighborhood.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  When you text us you are texting your neighbor. Sean personally
                  handles every job. No dispatcher, no contractor, no call center.
                  Just a Queen Creek owner who drives your car with the same care
                  he would give his own.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    title: "Shorter distance means lower cost",
                    desc: "Because we are based locally in Queen Creek many Queen Creek residents fall into the lowest pricing tier. Less driving means more affordable service for your neighborhood.",
                  },
                  {
                    icon: Clock,
                    title: "Faster same day response",
                    desc: "When your driver is already in Queen Creek same day availability is more reliable. We are not driving 30 minutes just to get to your pickup.",
                  },
                  {
                    icon: Star,
                    title: "You are supporting a local business",
                    desc: "Freedom Line Freight Express is a Queen Creek small business. Every booking keeps money in the local community.",
                  },
                  {
                    icon: Shield,
                    title: "Fully insured and trusted locally",
                    desc: "Licensed, insured, and operating right here in Queen Creek. You can verify who we are because we are part of this community.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex gap-4 rounded-xl border border-neutral-800 bg-neutral-900 p-5 hover:border-orange-500/50 transition-colors"
                  >
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-orange-500">
                      <Icon size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">{title}</div>
                      <div className="text-sm text-gray-400 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Vehicle Concierge Services{" "}
                <span className="text-orange-500">in Queen Creek</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                Every car service trip handled from your Queen Creek door and back.
                You choose the provider. We handle the rest.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group rounded-xl border border-neutral-800 bg-neutral-950 p-7 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                    <Icon className="text-orange-500" size={22} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
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
                How It{" "}
                <span className="text-orange-500">Works</span>
              </h2>
              <p className="text-lg text-gray-300">
                Four simple steps. Your car is handled. You stay home.
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
              <p className="text-white font-semibold mb-2">
                Ready to get started? Text your Queen Creek neighbor today.
              </p>
              <p className="text-gray-400 text-sm mb-4">
                Same day availability is often possible because we are already nearby.
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

        {/* PRICING */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Vehicle Concierge Pricing{" "}
                <span className="text-orange-500">in Queen Creek</span>
              </h2>
              <p className="text-lg text-gray-300">
                Flat rate pricing based on distance. Most Queen Creek residents fall
                in the lowest tier because we are already based locally.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
              {[
                {
                  service: "Car Wash Pickup and Return",
                  tiers: [
                    { range: "0 to 10 miles", price: "$45" },
                    { range: "10 to 25 miles", price: "$65" },
                  ],
                  note: "Car wash cost is separate and paid directly by you",
                  highlight: false,
                },
                {
                  service: "Mechanic, Oil Change or Dealership",
                  tiers: [
                    { range: "0 to 10 miles", price: "$55" },
                    { range: "10 to 25 miles", price: "$75" },
                  ],
                  note: "Service cost is separate and paid directly by you",
                  highlight: true,
                },
              ].map(({ service, tiers, note, highlight }) => (
                <div
                  key={service}
                  className={`rounded-xl border p-7 ${
                    highlight
                      ? "border-orange-500/40 bg-orange-500/5"
                      : "border-neutral-700 bg-neutral-950"
                  }`}
                >
                  <h3 className="mb-5 text-lg font-bold text-white">{service}</h3>
                  <div className="space-y-3 mb-4">
                    {tiers.map(({ range, price }) => (
                      <div key={range} className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">{range}</span>
                        <span className="text-2xl font-black text-orange-500">{price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-neutral-700 pt-3">
                    <p className="text-xs text-gray-500 italic">{note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 mb-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 flex-shrink-0 text-orange-500" size={20} />
                <div>
                  <h3 className="font-bold text-white mb-2">
                    Local Queen Creek advantage on pricing
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Because Freedom Line Freight Express is based right here in Queen
                    Creek many local pickups fall into the 0 to 10 mile tier which is
                    our most affordable rate. If your car wash or mechanic is nearby
                    in Queen Creek or San Tan Valley you are likely looking at our
                    lowest flat rate. Text us your address and service location and
                    we will confirm the exact price before anything is scheduled.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
              <div className="flex items-start gap-3">
                <DollarSign className="mt-0.5 flex-shrink-0 text-orange-500" size={20} />
                <div>
                  <h3 className="font-bold text-white mb-2">
                    Payment for services
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    The concierge pickup and return fee is paid to us. The actual
                    service cost such as the car wash, oil change, mechanic repair,
                    or dealership service is paid directly by you to the service
                    provider. Call ahead to put a card on file or use the shop's
                    online payment portal so we can pick the car up when it is ready.
                    We do not front service costs on behalf of customers.
                  </p>
                </div>
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
                  Car Pickup Service{" "}
                  <span className="text-orange-500">Queen Creek AZ</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  Queen Creek is one of the fastest growing communities in the East
                  Valley. With that growth comes busy schedules and less time for
                  routine car maintenance trips. Our vehicle concierge service gives
                  Queen Creek residents a simple solution to keep their cars serviced
                  without losing time from their day.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  We handle car wash pickups, oil change runs, mechanic drop offs,
                  and dealership service visits for homeowners and families across
                  Queen Creek. Same day service is available and because we are
                  already based locally response times are fast.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We also serve San Tan Valley, Gilbert, Chandler, Mesa, and
                  surrounding East Valley communities from our Queen Creek base.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Deaf Owned and Operated{" "}
                  <span className="text-orange-500">Right Here in Queen Creek</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  Freedom Line Freight Express is a deaf owned and operated small
                  business rooted in the Queen Creek community. Sean personally drives
                  every vehicle and communicates entirely by text which means every
                  update arrives clearly in writing.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  For Queen Creek residents this means you are supporting a neighbor
                  and a local small business every time you book a concierge service.
                  No national franchise. No corporate dispatcher. Just your Queen
                  Creek neighbor taking care of your car like it was his own.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Text 480-742-8553 with your address and what service your car needs.
                  We will reply fast with availability and pricing.
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
                Vehicle Concierge Queen Creek{" "}
                <span className="text-orange-500">FAQ</span>
              </h2>
            </div>
            <div className="space-y-5">
              {[
                {
                  q: "Is Freedom Line Freight Express based in Queen Creek?",
                  a: "Yes. We are owner operated and based right here in Queen Creek Arizona. When you book our vehicle concierge service you are working with your local neighbor.",
                },
                {
                  q: "What is vehicle concierge service in Queen Creek?",
                  a: "We pick up your car from your home, take it to any service provider you choose in the Queen Creek area, and return it to your door when done. Car wash, oil change, mechanic, or dealership.",
                },
                {
                  q: "How much does vehicle concierge cost in Queen Creek?",
                  a: "Starting at $45 for car wash pickup and $55 for mechanic or oil change pickup for up to 10 miles. Most Queen Creek residents fall in the lowest tier because we are already nearby.",
                },
                {
                  q: "Do you serve San Tan Valley and nearby areas?",
                  a: "Yes. We serve Queen Creek, San Tan Valley, Gilbert, Chandler, Mesa, and surrounding East Valley communities.",
                },
                {
                  q: "Is same day vehicle concierge available in Queen Creek?",
                  a: "Yes. Same day concierge is available in Queen Creek. Because we are based locally we can often respond and dispatch faster than services coming from farther away.",
                },
                {
                  q: "Are you insured for vehicle concierge in Queen Creek?",
                  a: "Yes. Freedom Line Freight Express is fully insured for every vehicle concierge job. Your car is fully protected from pickup to return.",
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

        {/* NEARBY AREAS */}
        <section className="py-16 bg-neutral-950">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-4xl">
              Also Serving Communities Near Queen Creek
            </h2>
            <p className="mb-8 text-gray-400">
              Based in Queen Creek and serving the entire East Valley and Phoenix metro area.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyAreas.map(([city, link]) => (
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
                ["Vehicle Concierge Phoenix", "/vehicle-concierge-phoenix"],
                ["Vehicle Concierge", "/vehicle-concierge"],
                ["Car Wash Pickup Phoenix", "/car-wash-pickup-service-phoenix"],
                ["Oil Change Pickup Phoenix", "/oil-change-pickup-service-phoenix"],
                ["Mechanic Pickup Phoenix", "/mechanic-pickup-service-phoenix"],
                ["Dealership Pickup Phoenix", "/dealership-pickup-service-phoenix"],
                ["Senior Vehicle Concierge", "/senior-vehicle-concierge-phoenix"],
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
              Need Vehicle Concierge in Queen Creek?
            </h2>
            <p className="mb-2 text-xl font-semibold text-orange-100">
              Your neighbor is ready to help. Based right here in Queen Creek.
            </p>
            <p className="mb-10 text-orange-100">
              Text your address and what service your car needs for a fast local quote.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-orange-600 hover:bg-gray-100 transition-colors"
              >
                Request Concierge Service
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
