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
  CalendarCheck,
  HeartHandshake,
  Repeat,
  Building2,
  DollarSign,
  Zap,
} from "lucide-react";

export default function DealershipPickupServicePhoenix() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dealership Pickup Service Phoenix",
    serviceType: "Dealership Vehicle Pickup and Return Service",
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
      "Dealership pickup service in Phoenix Arizona. We pick up your vehicle, take it to any dealership for service, warranty work, or recalls, and return it to your home or office. Owner operated and fully insured.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is dealership pickup service in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dealership pickup service means we come to your home or office, pick up your vehicle, take it to your dealership for service, warranty work, or recalls, and return it to you when done. You never have to sit in the dealership waiting room.",
        },
      },
      {
        "@type": "Question",
        name: "How much does dealership pickup service cost in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dealership pickup service in Phoenix starts at $55 for up to 10 miles and $75 for 10 to 25 miles. The dealership service cost is separate and paid directly by you.",
        },
      },
      {
        "@type": "Question",
        name: "Do you take my car to any dealership in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We take your vehicle to any dealership in Phoenix metro including Toyota, Honda, Ford, Chevy, Jeep, BMW, Mercedes, Hyundai, Kia, and any other brand. You choose the dealership and we handle the trip.",
        },
      },
      {
        "@type": "Question",
        name: "Is same day dealership pickup available in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Same day dealership pickup is available in Phoenix depending on schedule and route. Text us early for the best availability.",
        },
      },
      {
        "@type": "Question",
        name: "Can you pick up my car from the dealership when service is done?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer post service pickup as well. When the dealership calls to say your car is ready we go get it and return it straight to your home or office.",
        },
      },
      {
        "@type": "Question",
        name: "Are you insured for dealership pickup service in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Freedom Line Freight Express is fully insured for every dealership pickup and return job in Phoenix. Your vehicle is protected from the moment we pick it up.",
        },
      },
    ],
  };

  const services = [
    {
      icon: Wrench,
      title: "Warranty and Recall Service",
      desc: "We take your vehicle to the dealership for warranty repairs or recall work and return it when done. No waiting room. No lost morning.",
    },
    {
      icon: CalendarCheck,
      title: "Scheduled Maintenance Visits",
      desc: "Scheduled oil changes, tire rotations, and inspections at the dealership handled door to door. You keep your day moving.",
    },
    {
      icon: Car,
      title: "Post Service Pickup",
      desc: "Car is ready at the dealership but you are busy? We pick it up and bring it straight to your home or office.",
    },
    {
      icon: Building2,
      title: "Any Dealership in Phoenix",
      desc: "Toyota, Honda, Ford, Chevy, BMW, Mercedes and more. Any dealership brand anywhere in Phoenix metro.",
    },
    {
      icon: Zap,
      title: "Same Day Available",
      desc: "Need it handled today? Same day dealership pickup is available across Phoenix metro depending on schedule.",
    },
    {
      icon: Repeat,
      title: "Recurring Service Runs",
      desc: "Set up recurring dealership service pickups so your car never misses a scheduled maintenance visit.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Text Your Details",
      desc: "Send your address, your dealership name and location, and your preferred pickup time to 480-742-8553.",
    },
    {
      step: "2",
      title: "We Confirm the Quote",
      desc: "We reply with flat rate pricing and availability. Everything confirmed before we arrive at your door.",
    },
    {
      step: "3",
      title: "We Drop It Off",
      desc: "We arrive, pick up your vehicle, and take it directly to the dealership. You get a text confirmation.",
    },
    {
      step: "4",
      title: "Returned to Your Door",
      desc: "When service is complete we pick your car up and return it to your home or office. Done.",
    },
  ];

  const dealerships = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "Jeep",
    "BMW",
    "Mercedes Benz",
    "Hyundai",
    "Kia",
    "Nissan",
    "Mazda",
    "Subaru",
    "Volkswagen",
    "Any brand you drive",
  ];

  const whoItIsFor = [
    {
      icon: Building2,
      title: "Vehicle Owners",
      items: [
        "No time to sit in the dealership for hours",
        "Warranty or recall work needed but schedule is full",
        "Scheduled maintenance due but no break in the day",
        "Car is ready at the dealer but you cannot get there",
      ],
    },
    {
      icon: HeartHandshake,
      title: "Seniors and Families",
      items: [
        "Seniors who prefer not to make the dealership trip",
        "Adult children arranging service for a parent",
        "Anyone who wants a trusted driver for the job",
        "People who value their time and comfort",
      ],
    },
    {
      icon: Star,
      title: "Busy Professionals",
      items: [
        "Working from home with no break window",
        "Back to back meetings with no opening",
        "Business travel coming up and car needs service",
        "Cannot afford to lose a morning at the dealership",
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
        <title>Dealership Pickup Service Phoenix | We Take Your Car to the Dealer | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Dealership pickup service in Phoenix. We pick up your car, take it to any dealership for service, warranty work, or recalls, and return it to your door. Same day available. Fully insured. Text 480-742-8553."
        />
        <link rel="canonical" href="https://www.flfreightco.com/dealership-pickup-service-phoenix" />
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
                <Building2 className="text-orange-500" size={16} />
                Phoenix Metro Dealership Pickup Service
              </div>

              <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                Dealership Pickup Service{" "}
                <span className="text-orange-500">Phoenix</span>
                <span className="block text-2xl md:text-3xl font-bold text-gray-300 mt-3">
                  We Take Your Car to the Dealer and Bring It Back When Ready.
                </span>
              </h1>

              <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Stop losing half your day to a dealership service visit. Freedom Line
                Freight Express picks up your vehicle from your home or office, takes
                it to your dealership anywhere in Phoenix metro, and returns it to
                your door when the work is done. Warranty service, recalls, scheduled
                maintenance and more. Fully insured and owner operated.
              </p>

              <p className="mb-8 text-orange-400 font-bold text-xl">
                📞 Text only: 480-742-8553
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-4 text-lg font-bold text-white hover:bg-orange-600 transition-colors"
                >
                  Schedule Dealership Pickup
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
                  "Any dealership in Phoenix",
                  "Drop off and pickup",
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
                { icon: Building2, label: "Any Dealership", sub: "Any brand in Phoenix metro" },
                { icon: Shield, label: "Fully Insured", sub: "Every pickup and return" },
                { icon: Clock, label: "Full Round Trip", sub: "Drop off and return" },
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

        {/* SERVICES */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                What Our Dealership Pickup{" "}
                <span className="text-orange-500">Service Covers</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                Every dealership visit handled from your door to the dealer and back.
                You choose the dealership. We handle the trip.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group rounded-xl border border-neutral-800 bg-neutral-900 p-7 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
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

        {/* DEALERSHIPS WE SERVE */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  We Drive to{" "}
                  <span className="text-orange-500">Any Dealership</span>{" "}
                  in Phoenix
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed text-lg">
                  You choose the dealership. We drive your vehicle there and bring
                  it back when service is complete. It does not matter which brand
                  you drive or which dealership you use. We serve them all across
                  Phoenix metro.
                </p>
                <p className="mb-6 text-gray-400 leading-relaxed">
                  As a deaf owned business we communicate entirely by text which means
                  clear written updates every step of the way. You always know exactly
                  when we picked up, when we dropped off, and when your car is on
                  its way back.
                </p>
                <div className="flex flex-wrap gap-2">
                  {dealerships.map((dealer) => (
                    <span
                      key={dealer}
                      className="rounded-full border border-neutral-700 bg-neutral-950 px-4 py-2 text-sm text-gray-300"
                    >
                      {dealer}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-8">
                <h3 className="mb-6 text-2xl font-bold text-orange-500">
                  Dealership Trip Yourself vs Our Service
                </h3>
                <div className="space-y-4">
                  {[
                    ["Drive to the dealership yourself", "We pick up from your door"],
                    ["Wait 2 to 4 hours at the dealer", "You stay home or at work"],
                    ["Arrange a ride home", "You never need a ride"],
                    ["Go back when service is done", "We return it to your door"],
                    ["Lose most of your morning", "Done while you keep your day"],
                    ["Repeat every service visit", "Set up recurring pickup service"],
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

        {/* HOW IT WORKS */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                How Dealership Pickup{" "}
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
                Dealership service due? Text us and we will take care of it.
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
                Who Uses Dealership Pickup{" "}
                <span className="text-orange-500">Service in Phoenix?</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                Anyone who needs their car serviced at a dealership but cannot afford
                to spend the morning sitting in the waiting room.
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

        {/* PRICING */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Dealership Pickup Pricing in{" "}
                <span className="text-orange-500">Phoenix</span>
              </h2>
              <p className="text-lg text-gray-300">
                Flat rate pricing based on distance. Dealership service cost is
                separate and paid directly by you.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              {[
                {
                  label: "Local Pickup and Return",
                  range: "0 to 10 miles",
                  price: "$55",
                  example: "Nearby dealership in your area",
                  highlight: false,
                },
                {
                  label: "Extended Local",
                  range: "10 to 25 miles",
                  price: "$75",
                  example: "Dealership across the valley",
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
                      : "border-neutral-700 bg-neutral-900"
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

            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 mb-4">
              <div className="flex items-start gap-3">
                <DollarSign className="mt-0.5 flex-shrink-0 text-orange-500" size={20} />
                <div>
                  <h3 className="font-bold text-white mb-2">
                    How pricing works
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    The prices above cover pickup from your door, driving to the
                    dealership, and returning your vehicle when service is complete.
                    The dealership service cost is separate and your responsibility
                    paid directly to the dealer.
                  </p>
                  <h4 className="font-semibold text-white mb-3">
                    How to handle the dealership payment:
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 rounded-lg border border-neutral-700 bg-neutral-950 p-4">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-white">
                        1
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white mb-1">
                          Call the dealership ahead of time
                        </p>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          Call your dealership service department and give them your
                          credit card on file. They charge you directly when the work
                          is done and we pick the car up when it is cleared.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-lg border border-neutral-700 bg-neutral-950 p-4">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-white">
                        2
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white mb-1">
                          Pay the dealership online or by phone
                        </p>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          Most dealerships allow remote payment by phone or through
                          their service portal. Pay from home when they call and we
                          pick the car up as soon as payment clears.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-gray-500 italic">
                    We do not front dealership service costs on behalf of customers.
                    Payment to the dealership is always the customer's responsibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-white mb-1">
                    Final price confirmed before we arrive. No surprises.
                  </p>
                  <p className="text-sm text-gray-400">
                    Text your address and dealership location and I will give you
                    an exact quote before anything is booked.
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
                  Car Dealership Pickup and Return{" "}
                  <span className="text-orange-500">Service in Phoenix</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  Dealership service visits in Phoenix are notorious for taking
                  longer than expected. What the service advisor says is a two hour
                  job often turns into a half day. Most people do not have that time
                  to spare sitting in a waiting room.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  Our dealership pickup and return service removes every part of that
                  hassle. We pick up your vehicle from your home or office, drop it
                  at your dealership, and return it to your door when the service
                  advisor calls to say it is ready. You stay exactly where you need
                  to be.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We serve all dealerships across Phoenix metro including Mesa,
                  Chandler, Gilbert, Queen Creek, Scottsdale, Tempe, San Tan Valley,
                  Casa Grande and surrounding areas.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Dealership Concierge Service{" "}
                  <span className="text-orange-500">Phoenix</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  Think of our dealership pickup service as your personal vehicle
                  concierge for dealer visits. Warranty repairs, recalls, scheduled
                  oil changes, tire rotations, and any other service your dealership
                  handles — we take care of every trip so you never have to.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  Recurring dealership service is also available. If your car goes
                  to the dealer every six months for scheduled maintenance we can set
                  up a recurring pickup so you never have to think about arranging
                  the trip. Text us once and it is handled every time.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Freedom Line Freight Express is a deaf owned and operated business.
                  We communicate entirely by text which means every update arrives
                  clearly in writing. You always know where your car is and when it
                  is coming back.
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
                Dealership Pickup Phoenix{" "}
                <span className="text-orange-500">FAQ</span>
              </h2>
            </div>
            <div className="space-y-5">
              {[
                {
                  q: "What is dealership pickup service in Phoenix?",
                  a: "We come to your home or office, pick up your vehicle, take it to your dealership for service, and return it to you when done. No waiting room. No lost morning.",
                },
                {
                  q: "How much does dealership pickup service cost in Phoenix?",
                  a: "Starting at $55 for up to 10 miles and $75 for 10 to 25 miles. The dealership service cost is separate and paid directly by you. Text us for an exact quote before anything is booked.",
                },
                {
                  q: "Do you take my car to any dealership in Phoenix?",
                  a: "Yes. Any dealership brand in Phoenix metro. Toyota, Honda, Ford, Chevy, BMW, Mercedes, Hyundai, Kia, and more. You choose and we drive.",
                },
                {
                  q: "Is same day dealership pickup available in Phoenix?",
                  a: "Yes. Same day dealership pickup is available depending on schedule and route. Text us early for the best availability.",
                },
                {
                  q: "Can you pick up my car from the dealership when service is done?",
                  a: "Yes. Post service pickup is available. When the dealership calls to say your car is ready we go get it and bring it straight back to your door.",
                },
                {
                  q: "Are you insured for dealership pickup service in Phoenix?",
                  a: "Yes. Freedom Line Freight Express is fully insured for every dealership pickup and return job. Your vehicle is fully protected from pickup to return.",
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

        {/* SERVICE AREAS */}
        <section className="py-16 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-4xl">
              Dealership Pickup Service Areas in Phoenix Metro
            </h2>
            <p className="mb-8 text-gray-400">
              Serving vehicle owners across all of Phoenix and the East Valley.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map(([city, link]) => (
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
                ["Mechanic Pickup Phoenix", "/mechanic-pickup-service-phoenix"],
                ["Oil Change Pickup Phoenix", "/oil-change-pickup-service-phoenix"],
                ["Vehicle Concierge Phoenix", "/vehicle-concierge-phoenix"],
                ["Senior Vehicle Concierge", "/senior-vehicle-concierge-phoenix"],
                ["Request Pickup", "/request-pickup"],
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
              Need Dealership Pickup in Phoenix?
            </h2>
            <p className="mb-2 text-xl font-semibold text-orange-100">
              We pick up your car, take it to the dealer, and return it when ready.
            </p>
            <p className="mb-10 text-orange-100">
              Text your address and dealership location for a fast quote.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-orange-600 hover:bg-gray-100 transition-colors"
              >
                Schedule Dealership Pickup
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
