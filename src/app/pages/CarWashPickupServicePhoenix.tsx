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
  Droplets,
  Sparkles,
  DollarSign,
  Repeat,
  Home,
  Briefcase,
} from "lucide-react";

export default function CarWashPickupServicePhoenix() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Car Wash Pickup Service Phoenix",
    serviceType: "Car Wash Pickup and Return Service",
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
      "Car wash pickup and return service in Phoenix Arizona. We pick up your vehicle, take it to your preferred car wash, and return it clean to your home or office. Owner-operated and fully insured.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a car wash pickup service in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A car wash pickup service means we come to your home or office, pick up your vehicle, take it to your chosen car wash, and return it clean to your door. You never have to leave.",
        },
      },
      {
        "@type": "Question",
        name: "How much does car wash pickup service cost in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Car wash pickup service in Phoenix starts at $45 for up to 10 miles and $65 for 10 to 25 miles. The car wash cost itself is separate and paid directly by you.",
        },
      },
      {
        "@type": "Question",
        name: "Do you take my car to any car wash in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You choose the car wash and we drive your vehicle there and back. Any car wash location in the Phoenix metro area.",
        },
      },
      {
        "@type": "Question",
        name: "Is same day car wash pickup available in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Same day car wash pickup and return is available in Phoenix depending on schedule. Text us early for the best availability.",
        },
      },
      {
        "@type": "Question",
        name: "Can I schedule regular car wash pickups in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer recurring car wash pickup service for homeowners and businesses who want their vehicle cleaned on a regular schedule. Text us to set up a recurring plan.",
        },
      },
      {
        "@type": "Question",
        name: "Are you insured for car wash pickup service in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Freedom Line Freight Express is fully insured for every car wash pickup and return job in Phoenix. Your vehicle is protected from the moment we pick it up.",
        },
      },
    ],
  };

  const howItWorks = [
    {
      step: "1",
      title: "Text Your Details",
      desc: "Send your address, your preferred car wash, and your preferred time to 480-742-8553.",
    },
    {
      step: "2",
      title: "We Confirm the Quote",
      desc: "We reply with flat rate pricing and confirm availability. Everything agreed before we arrive.",
    },
    {
      step: "3",
      title: "We Pick Up and Wash",
      desc: "We arrive at your door, pick up your car, and take it to the car wash. You relax.",
    },
    {
      step: "4",
      title: "Returned Clean",
      desc: "Your car comes back to your door clean and ready. No waiting, no driving, no hassle.",
    },
  ];

  const whoItIsFor = [
    {
      icon: Home,
      title: "Homeowners",
      items: [
        "No time to drive to the car wash",
        "Do not want to wait in line",
        "Want a clean car without leaving home",
        "Prefer scheduled recurring service",
      ],
    },
    {
      icon: Briefcase,
      title: "Busy Professionals",
      items: [
        "Working from home with no break",
        "Back to back meetings all day",
        "Need the car clean before a client meeting",
        "Want the errand handled while you work",
      ],
    },
    {
      icon: Repeat,
      title: "Regular Service",
      items: [
        "Weekly or biweekly car wash runs",
        "Fleet vehicles that need regular cleaning",
        "Business owners with multiple vehicles",
        "Anyone who wants a set and forget system",
      ],
    },
  ];

  const whyUs = [
    { icon: Droplets, text: "We take your car to any car wash you choose in Phoenix." },
    { icon: Shield, text: "Fully insured for every pickup and return." },
    { icon: Clock, text: "Same day available when you need it fast." },
    { icon: Phone, text: "Deaf-owned business — text preferred for all updates." },
    { icon: Star, text: "Owner operated — Sean handles every job personally." },
    { icon: MapPin, text: "Serving all of Phoenix metro and East Valley." },
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
        <title>Car Wash Pickup Service Phoenix | We Pick Up and Return Your Car | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Car wash pickup service in Phoenix. We pick up your car, take it to your preferred car wash, and return it clean to your door. Same day available. Owner-operated and fully insured. Text 480-742-8553."
        />
        <link rel="canonical" href="https://www.flfreightco.com/car-wash-pickup-service-phoenix" />
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
                <Droplets className="text-orange-500" size={16} />
                Phoenix Metro Car Wash Pickup Service
              </div>

              <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                Car Wash Pickup Service{" "}
                <span className="text-orange-500">Phoenix</span>
                <span className="block text-2xl md:text-3xl font-bold text-gray-300 mt-3">
                  We Pick Up Your Car. Take It to the Wash. Return It Clean.
                </span>
              </h1>

              <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Stop sitting in line at the car wash. Freedom Line Freight Express
                picks up your vehicle from your home or office, takes it to your
                preferred car wash in Phoenix, and returns it clean to your door.
                You stay home. Your car comes back spotless.
              </p>

              <p className="mb-8 text-orange-400 font-bold text-xl">
                📞 Text only: 480-742-8553
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-4 text-lg font-bold text-white hover:bg-orange-600 transition-colors"
                >
                  Schedule Pickup
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
                  "Any car wash you choose",
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
                { icon: Droplets, label: "Any Car Wash", sub: "You choose, we drive" },
                { icon: Shield, label: "Fully Insured", sub: "Every pickup and return" },
                { icon: Clock, label: "Same Day", sub: "Available when you need it" },
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
                How Car Wash Pickup{" "}
                <span className="text-orange-500">Works</span>
              </h2>
              <p className="text-lg text-gray-300">
                Four steps and your car comes back clean. You never leave home.
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
                Ready to get your car picked up and washed today?
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
                Who Uses Car Wash Pickup{" "}
                <span className="text-orange-500">Service in Phoenix?</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                Anyone who wants a clean car without spending their afternoon at
                the car wash. Here is who we serve most.
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

        {/* WHY US */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Why Choose Freedom Line for{" "}
                  <span className="text-orange-500">Car Wash Pickup in Phoenix?</span>
                </h2>
                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                  We are not a car wash. We are your personal vehicle driver in Phoenix.
                  You keep the car wash you love and we handle the trip so you never
                  have to make it yourself.
                </p>
                <p className="mb-8 text-gray-400 leading-relaxed">
                  As a deaf-owned business we communicate entirely by text. That means
                  every pickup confirmation, every update, and every return notification
                  comes directly to your phone in writing. Clear, documented, and reliable
                  from start to finish.
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
                  Car Wash Pickup vs Doing It Yourself
                </h3>
                <div className="space-y-4">
                  {[
                    ["Drive to the car wash yourself", "We pick up from your door"],
                    ["Wait 30 to 60 minutes in line", "You stay home and relax"],
                    ["Drive back when done", "We return it clean to you"],
                    ["Lose half your afternoon", "Done while you work or rest"],
                    ["Pay just the car wash cost", "Small pickup fee plus wash"],
                    ["Repeat every few weeks", "Set up recurring service"],
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
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Car Wash Pickup Pricing in{" "}
                <span className="text-orange-500">Phoenix</span>
              </h2>
              <p className="text-lg text-gray-300">
                Flat rate pickup and return pricing. The car wash cost is separate
                and paid directly by you.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              {[
                {
                  label: "Local Pickup and Return",
                  range: "0 to 10 miles",
                  price: "$45",
                  example: "Nearby car wash in your neighborhood",
                  highlight: false,
                },
                {
                  label: "Extended Local",
                  range: "10 to 25 miles",
                  price: "$65",
                  example: "Preferred car wash across the valley",
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
                  <p className="text-sm text-gray-400 leading-relaxed">
                    The prices above cover pickup, driving to the car wash, waiting,
                    and returning your vehicle to your door. The actual car wash cost
                    is separate and paid directly by you to the car wash provider.
                    We can pay on your behalf and you reimburse us or you can set up
                    payment directly with the car wash.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-white mb-1">
                    Want to set up recurring car wash pickups?
                  </p>
                  <p className="text-sm text-gray-400">
                    Weekly or biweekly service available. Text me and we will
                    set up a schedule that works for you.
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
                  Car Wash Pickup and Return{" "}
                  <span className="text-orange-500">Service Near Phoenix</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  The Phoenix heat means your car gets dirty fast. Dust, pollen, and
                  desert grime build up quickly and most people do not have time to
                  make a regular trip to the car wash. That is exactly why car wash
                  pickup service exists.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  Freedom Line Freight Express picks up your vehicle from anywhere
                  in Phoenix metro, takes it to your preferred car wash, waits while
                  it is cleaned, and returns it to your home or office when done.
                  No appointment needed at the car wash. No waiting in line. No trip.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We serve all of Phoenix including Mesa, Chandler, Gilbert, Queen Creek,
                  Scottsdale, Tempe, San Tan Valley, Casa Grande and surrounding areas.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Recurring Car Wash Pickup{" "}
                  <span className="text-orange-500">Phoenix</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  The best way to keep your car clean in Phoenix is a consistent
                  schedule. We offer recurring car wash pickup service for homeowners
                  and businesses who want their vehicle cleaned on a regular basis
                  without ever thinking about it.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  Weekly, biweekly, or monthly pickups can be arranged with a simple
                  text. You set the schedule and we handle the rest. Your car stays
                  clean year round without any effort on your part.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  As a deaf-owned business we communicate entirely by text which means
                  every pickup confirmation arrives in writing so you always know
                  exactly when we are coming and when your car is on its way back.
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
                Car Wash Pickup Service{" "}
                <span className="text-orange-500">FAQ</span>
              </h2>
            </div>
            <div className="space-y-5">
              {[
                {
                  q: "What is a car wash pickup service in Phoenix?",
                  a: "We come to your home or office, pick up your vehicle, take it to your chosen car wash, and return it clean to your door. You never have to leave.",
                },
                {
                  q: "How much does car wash pickup service cost in Phoenix?",
                  a: "Starting at $45 for up to 10 miles and $65 for 10 to 25 miles. The car wash cost is separate and paid directly by you to the car wash provider.",
                },
                {
                  q: "Do you take my car to any car wash in Phoenix?",
                  a: "Yes. You choose the car wash and we drive your vehicle there and back. Any location in Phoenix metro.",
                },
                {
                  q: "Is same day car wash pickup available in Phoenix?",
                  a: "Yes. Same day car wash pickup is available depending on schedule. Text us early in the day for the best availability.",
                },
                {
                  q: "Can I schedule regular car wash pickups in Phoenix?",
                  a: "Yes. Weekly or biweekly recurring car wash pickup service is available. Text us to set up a schedule.",
                },
                {
                  q: "Are you insured for car wash pickup service in Phoenix?",
                  a: "Yes. Freedom Line Freight Express is fully insured for every car wash pickup and return job. Your vehicle is protected from pickup to return.",
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
              Car Wash Pickup Service Areas in Phoenix Metro
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
                ["Vehicle Concierge Phoenix", "/vehicle-concierge-phoenix"],
                ["Vehicle Concierge", "/vehicle-concierge"],
                ["Vehicle Delivery Phoenix", "/vehicle-delivery-phoenix"],
                ["Car Transport Phoenix", "/car-transport-phoenix"],
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
              Ready for Car Wash Pickup in Phoenix?
            </h2>
            <p className="mb-2 text-xl font-semibold text-orange-100">
              We pick up your car, take it to the wash, and return it clean.
            </p>
            <p className="mb-10 text-orange-100">
              Text your address and preferred car wash for a fast quote.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-orange-600 hover:bg-gray-100 transition-colors"
              >
                Schedule Pickup
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
