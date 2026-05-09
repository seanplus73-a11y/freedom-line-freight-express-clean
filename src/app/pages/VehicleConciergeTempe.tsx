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
  Repeat,
  DollarSign,
  Zap,
  Briefcase,
} from "lucide-react";

export default function VehicleConciergeTempe() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vehicle Concierge Tempe AZ",
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
      "Tempe AZ",
      "Mesa AZ",
      "Chandler AZ",
      "Gilbert AZ",
      "Scottsdale AZ",
      "Phoenix AZ",
    ],
    description:
      "Vehicle concierge service in Tempe Arizona. We pick up your car, take it to any service provider, and return it to your home or office. Car wash, oil change, mechanic, and dealership trips handled across Tempe AZ. Owner operated and fully insured.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is vehicle concierge service in Tempe AZ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vehicle concierge in Tempe means we pick up your car from your home or office, take it to any service provider you choose, and return it when done. Car wash, oil change, mechanic, or dealership trips handled without you leaving Tempe.",
        },
      },
      {
        "@type": "Question",
        name: "How much does vehicle concierge cost in Tempe AZ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vehicle concierge in Tempe starts at $45 for car wash pickup up to 10 miles and $55 for mechanic or oil change pickup up to 10 miles. Text us for an exact quote based on your Tempe address and service needed.",
        },
      },
      {
        "@type": "Question",
        name: "Is same day vehicle concierge available in Tempe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Same day vehicle concierge is available in Tempe AZ depending on schedule and route. Text us early for the best availability.",
        },
      },
      {
        "@type": "Question",
        name: "Do you serve all of Tempe AZ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We serve all of Tempe including Tempe Town Lake, ASU area, South Tempe, McClintock area, and surrounding neighborhoods.",
        },
      },
      {
        "@type": "Question",
        name: "Can you take my car to any shop in Tempe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You choose the service provider and we drive your car there and back. Any car wash, mechanic, oil change shop, or dealership in or near Tempe AZ.",
        },
      },
      {
        "@type": "Question",
        name: "Are you insured for vehicle concierge in Tempe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Freedom Line Freight Express is fully insured for every vehicle concierge job in Tempe and surrounding areas. Your vehicle is protected from pickup to return.",
        },
      },
    ],
  };

  const services = [
    {
      icon: Droplets,
      title: "Car Wash Pickup and Return",
      desc: "We pick up your car anywhere in Tempe, take it to your preferred car wash, and return it clean to your door. No waiting, no line, no trip.",
    },
    {
      icon: Wrench,
      title: "Mechanic and Repair Runs",
      desc: "We take your vehicle to any Tempe area mechanic and return it when the work is done. Full round trip from your home or office.",
    },
    {
      icon: Car,
      title: "Oil Change Service Runs",
      desc: "Oil change pickup and return across all of Tempe AZ. We handle the trip while you keep your day moving.",
    },
    {
      icon: Building2,
      title: "Dealership Service Visits",
      desc: "Warranty work, recalls, and scheduled dealership maintenance handled door to door from any Tempe address.",
    },
    {
      icon: HeartHandshake,
      title: "Senior Vehicle Assistance",
      desc: "Trusted vehicle concierge for Tempe seniors. Patient, reliable, and fully text based for clear communication at every step.",
    },
    {
      icon: Repeat,
      title: "Recurring Service Pickups",
      desc: "Set up regular oil change or car wash pickups on your preferred schedule. We handle it every time so you never miss a service.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Text Your Details",
      desc: "Send your Tempe address, the service your car needs, and your preferred time to 480-742-8553.",
    },
    {
      step: "2",
      title: "We Confirm Everything",
      desc: "We reply with flat rate pricing and availability. All confirmed before we arrive at your Tempe door.",
    },
    {
      step: "3",
      title: "We Pick Up and Go",
      desc: "We arrive at your Tempe home or office, pick up your vehicle, and take it to your chosen service provider.",
    },
    {
      step: "4",
      title: "Returned to Your Door",
      desc: "Your car comes back to your Tempe address serviced and ready. Text confirmation when we return.",
    },
  ];

  const tempeNeighborhoods = [
    "Tempe Town Lake",
    "ASU Area",
    "South Tempe",
    "McClintock District",
    "Warner Ranch",
    "Kyrene Corridor",
    "Downtown Tempe",
    "All of Tempe AZ",
  ];

  const nearbyAreas = [
    ["Mesa", "/mesa-delivery"],
    ["Chandler", "/chandler-delivery"],
    ["Scottsdale", "/scottsdale-delivery"],
    ["Gilbert", "/gilbert-delivery"],
    ["Phoenix", "/phoenix-delivery"],
    ["Queen Creek", "/queen-creek-delivery"],
    ["San Tan Valley", "/san-tan-valley-delivery"],
    ["Casa Grande", "/casa-grande-delivery"],
  ];

  return (
    <>
      <Helmet>
        <title>Vehicle Concierge Tempe AZ | Car Pickup and Return Service | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Vehicle concierge service in Tempe AZ. We pick up your car, take it to any service provider, and return it to your door. Car wash, oil change, mechanic, dealership. Same day available. Fully insured. Text 480-742-8553."
        />
        <link rel="canonical" href="https://www.flfreightco.com/vehicle-concierge-tempe" />
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
                Serving Tempe AZ and Phoenix Metro
              </div>

              <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                Vehicle Concierge{" "}
                <span className="text-orange-500">Tempe</span>
                <span className="block text-2xl md:text-3xl font-bold text-gray-300 mt-3">
                  We Pick Up Your Car. Handle the Service. Return It to Your Door.
                </span>
              </h1>

              <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Freedom Line Freight Express brings trusted vehicle concierge service
                to all of Tempe AZ. We pick up your vehicle from your home or office
                anywhere in Tempe, take it to any service provider you choose, and
                return it to your door when done. Car wash, oil change, mechanic,
                or dealership. Owner operated and fully insured.
              </p>

              <p className="mb-8 text-orange-400 font-bold text-xl">
                📞 Text only: 480-742-8553
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-4 text-lg font-bold text-white hover:bg-orange-600 transition-colors"
                >
                  Request Concierge in Tempe
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
                  "Serving all of Tempe AZ",
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
                { icon: MapPin, label: "All of Tempe AZ", sub: "Every neighborhood served" },
                { icon: Shield, label: "Fully Insured", sub: "Every single pickup" },
                { icon: Clock, label: "Same Day Available", sub: "Fast Phoenix metro response" },
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

        {/* WHY TEMPE */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Vehicle Concierge Built for{" "}
                  <span className="text-orange-500">Tempe Professionals and Residents</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed text-lg">
                  Tempe is one of the most active and connected cities in the Phoenix
                  metro area. Home to Arizona State University, a thriving business
                  district, and a mix of young professionals, families, and long time
                  residents, Tempe moves fast. Nobody has time to sit at a car wash
                  or mechanic for hours.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  Vehicle concierge puts that time back in your hands. We pick up
                  your car from your Tempe address, take it to any service provider
                  you choose, and return it to your door when the work is done.
                  No waiting rooms, no rides to arrange, no time lost.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  As a deaf owned business we communicate entirely by text. Every
                  pickup confirmation, update, and return notification arrives clearly
                  in writing. Efficient, documented, and reliable from start to finish.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Briefcase,
                    title: "Built for busy Tempe schedules",
                    desc: "Whether you work from home near Tempe Town Lake or commute from a South Tempe neighborhood our concierge service fits any schedule without requiring you to rearrange your day.",
                  },
                  {
                    icon: Zap,
                    title: "Same day response across Tempe",
                    desc: "Same day vehicle concierge is available in Tempe depending on schedule and route. Text us early and we will confirm availability fast.",
                  },
                  {
                    icon: Shield,
                    title: "Fully insured every single job",
                    desc: "Every vehicle concierge job in Tempe is fully insured. Your car is protected from the moment we pick it up to the moment we return it.",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Any service provider you trust",
                    desc: "Your mechanic on Mill Avenue, your preferred car wash on McClintock, your dealership across the valley. You choose and we drive.",
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
                <span className="text-orange-500">in Tempe AZ</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                Every car service trip handled from your Tempe door and back.
                You choose the provider and we handle the rest.
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
                How Vehicle Concierge{" "}
                <span className="text-orange-500">Works in Tempe</span>
              </h2>
              <p className="text-lg text-gray-300">
                Four simple steps. Your car is handled. You never leave home.
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
                Ready to get your car handled in Tempe today?
              </p>
              <p className="text-gray-400 text-sm mb-4">
                Text us your Tempe address and what service your car needs.
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

        {/* TEMPE NEIGHBORHOODS */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Serving Every Neighborhood{" "}
                  <span className="text-orange-500">in Tempe AZ</span>
                </h2>
                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                  Tempe is a compact and well connected city and we serve all of it.
                  From the vibrant streets near Tempe Town Lake and Mill Avenue to
                  the quiet residential neighborhoods of South Tempe and the Kyrene
                  Corridor we cover every part of Tempe with reliable vehicle
                  concierge service.
                </p>
                <p className="mb-6 text-gray-400 leading-relaxed">
                  Whether your mechanic is on Apache Boulevard or your preferred car
                  wash is near the McClintock and Warner intersection we pick up from
                  your Tempe door and return your car when the service is complete.
                </p>
                <div className="flex flex-wrap gap-2">
                  {tempeNeighborhoods.map((hood) => (
                    <span
                      key={hood}
                      className="rounded-full border border-neutral-700 bg-neutral-950 px-4 py-2 text-sm text-gray-300"
                    >
                      {hood}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-8">
                <h3 className="mb-6 text-2xl font-bold text-orange-500">
                  Doing It Yourself vs Our Concierge Service
                </h3>
                <div className="space-y-4">
                  {[
                    ["Drive to the service provider", "We pick up from your door"],
                    ["Wait while the service is done", "You stay home or at work"],
                    ["Arrange a ride back", "No ride needed ever"],
                    ["Drive back to pick it up", "We return it to your door"],
                    ["Lose 1 to 3 hours of your day", "Done while you keep going"],
                    ["Remember to schedule it", "Set up recurring and forget it"],
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

        {/* PRICING */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Vehicle Concierge Pricing{" "}
                <span className="text-orange-500">in Tempe AZ</span>
              </h2>
              <p className="text-lg text-gray-300">
                Flat rate pricing based on distance. Service cost is separate and
                paid directly by you to the provider.
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
                      : "border-neutral-700 bg-neutral-900"
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

            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 mb-4">
              <div className="flex items-start gap-3">
                <DollarSign className="mt-0.5 flex-shrink-0 text-orange-500" size={20} />
                <div>
                  <h3 className="font-bold text-white mb-2">
                    How service payment works
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    The concierge fee covers pickup, transport, and return of your
                    vehicle. The actual service cost such as the car wash, oil change,
                    mechanic repair, or dealership visit is paid directly by you to
                    the provider. Call ahead to put a card on file or use the shop's
                    online payment portal. We do not front service costs on behalf
                    of customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-white mb-1">
                    Every price confirmed before we arrive in Tempe.
                  </p>
                  <p className="text-sm text-gray-400">
                    Text your Tempe address and service needed and I will reply
                    fast with an exact quote.
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
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 items-start">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Car Pickup Service{" "}
                  <span className="text-orange-500">Tempe Arizona</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  Tempe sits at the heart of the Phoenix metro area surrounded by
                  Mesa, Chandler, Scottsdale, and Phoenix. Its central location makes
                  it one of the most connected cities in the region and one of the
                  busiest. Vehicle concierge gives Tempe residents a simple way to
                  keep their cars maintained without spending their limited free
                  time sitting at service providers.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  Freedom Line Freight Express serves all of Tempe. We handle car
                  wash pickup and return, oil change runs, mechanic drop offs, and
                  dealership service visits for Tempe homeowners, renters, students,
                  and professionals.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Same day vehicle concierge is available in Tempe. Text us your
                  address and what service your car needs and we will confirm
                  availability and pricing fast.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Deaf Owned Business{" "}
                  <span className="text-orange-500">Serving Tempe AZ</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  Freedom Line Freight Express is a deaf owned and operated small
                  business based in Queen Creek serving the entire Phoenix metro area
                  including all of Tempe AZ. Sean personally handles every vehicle
                  concierge job and communicates entirely by text.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  Text based communication is a natural fit for Tempe residents who
                  are already comfortable handling everything by phone. No calls to
                  arrange, no waiting on hold. Text us your details, get a clear
                  written confirmation, and receive updates at every step. Everything
                  documented and clear from pickup to return.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  When Tempe residents book our vehicle concierge service they are
                  supporting a local Arizona small business owner. Text 480-742-8553
                  to get started today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Vehicle Concierge Tempe{" "}
                <span className="text-orange-500">FAQ</span>
              </h2>
            </div>
            <div className="space-y-5">
              {[
                {
                  q: "What is vehicle concierge service in Tempe AZ?",
                  a: "We pick up your car from your home or office anywhere in Tempe, take it to any service provider you choose, and return it to your door when done. Car wash, oil change, mechanic, or dealership.",
                },
                {
                  q: "How much does vehicle concierge cost in Tempe?",
                  a: "Starting at $45 for car wash pickup and $55 for mechanic or oil change pickup for up to 10 miles. Text us your Tempe address for an exact quote before anything is booked.",
                },
                {
                  q: "Is same day vehicle concierge available in Tempe?",
                  a: "Yes. Same day concierge is available in Tempe AZ depending on schedule and route. Text us early for the best availability.",
                },
                {
                  q: "Do you serve all of Tempe including South Tempe?",
                  a: "Yes. We serve all of Tempe including Tempe Town Lake, ASU area, South Tempe, McClintock District, Warner Ranch, Kyrene Corridor, and all surrounding neighborhoods.",
                },
                {
                  q: "Can you take my car to any shop in Tempe?",
                  a: "Yes. You choose the service provider and we drive your car there and back. Any car wash, mechanic, oil change shop, or dealership in or near Tempe AZ.",
                },
                {
                  q: "Are you insured for vehicle concierge in Tempe?",
                  a: "Yes. Freedom Line Freight Express is fully insured for every vehicle concierge job in Tempe. Your car is protected from pickup to return.",
                },
              ].map(({ q, a }) => (
                <div
                  key={q}
                  className="rounded-xl border border-neutral-700 bg-neutral-900 p-6 hover:border-orange-500 transition-colors"
                >
                  <h3 className="mb-3 font-bold text-white text-lg">{q}</h3>
                  <p className="text-gray-400 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEARBY AREAS */}
        <section className="py-16 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-4xl">
              Also Serving Communities Near Tempe
            </h2>
            <p className="mb-8 text-gray-400">
              Based in Queen Creek and serving the entire East Valley and Phoenix metro area.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyAreas.map(([city, link]) => (
                <Link
                  key={city}
                  to={link}
                  className="rounded-full border border-neutral-800 bg-neutral-950 px-5 py-2.5 text-sm text-gray-300 hover:border-orange-500 hover:text-orange-400 transition-colors"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED PAGES */}
        <section className="py-10 bg-neutral-950 border-t border-neutral-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Related Services
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                ["Vehicle Concierge Scottsdale", "/vehicle-concierge-scottsdale"],
                ["Vehicle Concierge Mesa", "/vehicle-concierge-mesa"],
                ["Vehicle Concierge Chandler", "/vehicle-concierge-chandler"],
                ["Vehicle Concierge Phoenix", "/vehicle-concierge-phoenix"],
                ["Senior Vehicle Concierge", "/senior-vehicle-concierge-phoenix"],
                ["Vehicle Concierge", "/vehicle-concierge"],
              ].map(([label, link]) => (
                <Link
                  key={label}
                  to={link}
                  className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-gray-300 hover:border-orange-500 hover:text-orange-400 transition-colors"
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
              Need Vehicle Concierge in Tempe AZ?
            </h2>
            <p className="mb-2 text-xl font-semibold text-orange-100">
              We pick up your car, handle the service, and return it to your door.
            </p>
            <p className="mb-10 text-orange-100">
              Text your Tempe address and what service your car needs for a fast quote.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-orange-600 hover:bg-gray-100 transition-colors"
              >
                Request Concierge in Tempe
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
            <p className="mt-6 text-orange-100 text-sm">
              Just have a quick question?{" "}
              <Link to="/contact" className="underline font-semibold hover:text-white transition-colors">
                Contact us here
              </Link>
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
