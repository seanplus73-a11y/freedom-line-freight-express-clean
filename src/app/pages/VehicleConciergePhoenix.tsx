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
  Sparkles,
  Droplets,
  Wrench,
  CalendarCheck,
  HeartHandshake,
  Zap,
  DollarSign,
} from "lucide-react";

export default function VehicleConciergePhoenix() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vehicle Concierge Phoenix",
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
      "Vehicle concierge service in Phoenix for homeowners and busy professionals. We pick up your car, take it to service providers, and return it to your door. Fully insured and owner operated.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is vehicle concierge service in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vehicle concierge in Phoenix means we pick up your car from your home or office, take it to any service provider you choose, and return it to you when done. You never have to leave.",
        },
      },
      {
        "@type": "Question",
        name: "How much does vehicle concierge cost in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vehicle concierge in Phoenix starts at $45 for up to 10 miles and $65 for 10 to 25 miles. The service provider cost is separate and paid directly by you.",
        },
      },
      {
        "@type": "Question",
        name: "Can you pick up my car from my home in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We pick up your vehicle directly from your home, office, or any location in the Phoenix metro area and return it when the service is complete.",
        },
      },
      {
        "@type": "Question",
        name: "Is same day vehicle concierge available in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Same day vehicle concierge is available in Phoenix depending on schedule and route. Text us early for the best availability.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle car wash and oil change concierge in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We handle car wash pickup and return, oil change runs, tire service, dealership appointments, and any other vehicle service in the Phoenix metro area.",
        },
      },
      {
        "@type": "Question",
        name: "Are you insured for vehicle concierge in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Freedom Line Freight Express is fully insured for every vehicle concierge job in Phoenix. Your car is protected from pickup to return.",
        },
      },
    ],
  };

  const services = [
    {
      icon: Droplets,
      title: "Car Wash Concierge",
      desc: "We pick up your vehicle, take it to the car wash, and return it clean to your door. No waiting, no driving.",
    },
    {
      icon: Wrench,
      title: "Oil Change and Tire Runs",
      desc: "Drop your car off at the shop without leaving home. We handle the trip and bring it back when ready.",
    },
    {
      icon: CalendarCheck,
      title: "Scheduled Maintenance",
      desc: "Never miss a service appointment. We handle regular maintenance pickups on your schedule.",
    },
    {
      icon: HeartHandshake,
      title: "Dealership Appointments",
      desc: "Warranty work, recalls, service visits. We take your car to the dealership and return it when done.",
    },
    {
      icon: Zap,
      title: "Same Day Available",
      desc: "Need it handled today? Same day vehicle concierge is available across Phoenix metro. Text to confirm.",
    },
    {
      icon: Car,
      title: "Any Service Provider",
      desc: "You choose where your car goes. We drive it there and bring it back. Any shop, any location in Phoenix.",
    },
  ];

  const whyUs = [
    { icon: Car, text: "We drive your car directly to your chosen service provider." },
    { icon: Shield, text: "Fully insured for every pickup and return in Phoenix." },
    { icon: Clock, text: "Same day vehicle concierge available when you need it." },
    { icon: Phone, text: "Deaf-owned business — text preferred for all communication." },
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
        <title>Vehicle Concierge Phoenix | Car Pickup and Return Service | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Vehicle concierge service in Phoenix for homeowners and busy professionals. We pick up your car, take it to any service provider, and return it to your door. Same day available. Text 480-742-8553."
        />
        <link rel="canonical" href="https://www.flfreightco.com/vehicle-concierge-phoenix" />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="bg-neutral-950 text-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-neutral-950 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(234,93,4,0.12),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(234,93,4,0.05),_transparent_50%)]" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="grid gap-12 lg:grid-cols-2 items-center">

              {/* Left */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/5 px-4 py-2 text-sm font-semibold text-orange-400">
                  <Sparkles size={14} />
                  Phoenix Metro Concierge Service
                </div>

                <h1 className="mb-6 text-5xl font-black leading-none md:text-6xl lg:text-7xl">
                  <span className="text-white">Vehicle</span>
                  <br />
                  <span className="text-orange-500">Concierge</span>
                  <br />
                  <span className="text-white">Phoenix</span>
                </h1>

                <div className="mb-6 h-1 w-24 rounded-full bg-orange-500" />

                <p className="mb-4 text-xl font-bold text-white">
                  We pick up your car. Handle the service. Return it to your door.
                </p>
                <p className="mb-6 text-lg text-gray-400 leading-relaxed">
                  Too busy to sit at the car wash or mechanic? Freedom Line Freight
                  Express is Phoenix's owner-operated vehicle concierge service for
                  homeowners and professionals who value their time.
                </p>

                <p className="mb-8 text-orange-400 font-bold text-lg">
                  📞 Text only: 480-742-8553
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/request-pickup"
                    className="inline-flex items-center justify-center rounded-md bg-orange-500 px-7 py-4 text-base font-bold text-white hover:bg-orange-600 transition-colors"
                  >
                    Request Concierge
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                  <Link
                    to="/request-pickup"
                    className="inline-flex items-center justify-center rounded-md border border-neutral-700 bg-neutral-900 px-7 py-4 text-base font-bold text-white hover:border-orange-500 transition-colors"
                  >
                    <Phone className="mr-2" size={18} />
                    Text for Quote
                  </Link>
                </div>
              </div>

              {/* Right stat cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "No Wait", label: "You stay home", accent: true },
                  { value: "Insured", label: "Every single job", accent: false },
                  { value: "Same Day", label: "When available", accent: false },
                  { value: "Deaf Owned", label: "Text preferred", accent: true },
                ].map(({ value, label, accent }) => (
                  <div
                    key={label}
                    className={`rounded-xl border p-6 ${
                      accent
                        ? "border-orange-500/40 bg-orange-500/5"
                        : "border-neutral-800 bg-neutral-900"
                    }`}
                  >
                    <div className="mb-1 text-2xl font-black text-orange-500">{value}</div>
                    <div className="text-sm text-gray-400">{label}</div>
                  </div>
                ))}

                {/* Pricing preview card */}
                <div className="col-span-2 rounded-xl border border-neutral-800 bg-neutral-900 p-5">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-500">
                    Starting Prices
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[
                      { range: "0-10 mi", price: "$45" },
                      { range: "10-25 mi", price: "$65" },
                      { range: "25+ mi", price: "Custom" },
                    ].map(({ range, price }) => (
                      <div key={range}>
                        <div className="text-xl font-black text-white">{price}</div>
                        <div className="text-xs text-gray-500">{range}</div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-gray-500 text-center">
                    Service cost is separate and paid directly by you
                  </p>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-5 text-sm text-gray-400 border-t border-neutral-800 pt-8">
              {[
                "Owner operated",
                "Fully insured",
                "Deaf owned business",
                "Same day available",
                "Text preferred",
                "Phoenix metro and East Valley",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle className="text-orange-500" size={14} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT IS IT */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Vehicle Concierge for{" "}
                  <span className="text-orange-500">Phoenix Homeowners</span>{" "}
                  and Professionals
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed text-lg">
                  Your time is valuable. Sitting at a car wash for an hour or waiting
                  at the mechanic all morning is not a good use of it. Vehicle concierge
                  service puts that time back in your hands.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  We pick up your vehicle from your home or office, drive it to any
                  service provider you choose anywhere in Phoenix metro, and return it
                  to you when the service is complete. You never have to leave your
                  home or step away from work.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Freedom Line Freight Express is a deaf-owned and operated business.
                  We communicate entirely by text which means you always have a clear
                  written record of every update, pickup time, and return confirmation.
                </p>
              </div>

              <div className="space-y-4">
                {whyUs.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex gap-4 rounded-xl border border-neutral-800 bg-neutral-950 p-5 hover:border-orange-500/50 transition-colors"
                  >
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-orange-500">
                      <Icon size={16} className="text-white" />
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                What Our Phoenix Vehicle{" "}
                <span className="text-orange-500">Concierge Covers</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                Any service your car needs, we handle the transportation. You choose
                the provider. We do the driving.
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

        {/* HOW IT WORKS */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                How It{" "}
                <span className="text-orange-500">Works</span>
              </h2>
              <p className="text-lg text-gray-300">
                Simple. Fast. Your car handled without you going anywhere.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Text Your Details",
                  desc: "Send your address, the service your car needs, and your preferred time to 480-742-8553.",
                },
                {
                  step: "2",
                  title: "Get Your Quote",
                  desc: "We confirm the price and schedule. No surprises — everything agreed before we arrive.",
                },
                {
                  step: "3",
                  title: "We Handle It",
                  desc: "We pick up your car, take it to the service provider, and keep you updated by text.",
                },
                {
                  step: "4",
                  title: "Returned to You",
                  desc: "Your car comes back to your door serviced and ready. You never left home.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="relative text-center">
                  <div className="mx-auto mb-5 text-6xl font-black text-orange-500/20 leading-none">
                    {step}
                  </div>
                  <div className="mb-1 mx-auto h-0.5 w-10 bg-orange-500 rounded-full" />
                  <h3 className="mt-4 mb-3 text-lg font-bold text-white">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/request-pickup"
                className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-8 py-4 text-lg font-bold text-white hover:bg-orange-600 transition-colors"
              >
                Request Concierge Now
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Vehicle Concierge{" "}
                <span className="text-orange-500">Pricing in Phoenix</span>
              </h2>
              <p className="text-lg text-gray-300">
                Flat rate pricing based on distance. No hidden fees. Service cost
                is separate and paid directly by you to the provider.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              {[
                {
                  label: "Local Pickup and Return",
                  range: "0 to 10 miles",
                  price: "$45",
                  example: "Home to nearby car wash or shop",
                  highlight: false,
                },
                {
                  label: "Extended Local",
                  range: "10 to 25 miles",
                  price: "$65",
                  example: "Home to dealership or specialty shop",
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
                    What does the service cost cover?
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    The price above covers pickup, transport, and return of your vehicle.
                    The actual service such as the car wash, oil change, or dealership
                    visit is separate and paid directly by you to the provider.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Car wash",
                      "Oil change",
                      "Tire service",
                      "Dealership visit",
                      "Scheduled maintenance",
                      "Any other service",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-neutral-700 bg-neutral-950 px-3 py-1 text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-white mb-1">
                    Final price depends on distance, wait time, and service type.
                  </p>
                  <p className="text-sm text-gray-400">
                    Text me and I will give you an exact quote before anything is confirmed.
                    No surprises ever.
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
                  Vehicle Concierge for{" "}
                  <span className="text-orange-500">Busy Phoenix Professionals</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  If you work from home, run a business, or simply cannot afford to
                  spend three hours at a service shop, vehicle concierge is the
                  solution. We handle the entire process while you stay focused on
                  what matters.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  Freedom Line Freight Express serves homeowners and professionals
                  across all of Phoenix metro — from Scottsdale to Queen Creek, Mesa
                  to Chandler. Same day concierge is available when you need it fast.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  As a deaf-owned business we communicate entirely by text. That
                  means clear, documented updates every step of the way. You always
                  know exactly where your car is and when it is coming back.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Car Pickup and Return Service{" "}
                  <span className="text-orange-500">Phoenix</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  Think of us as your personal vehicle assistant in Phoenix. Need
                  your car washed but do not want to wait in line? We pick it up.
                  Oil change is due but you have meetings all day? We handle it.
                  Dealership appointment but no time to sit there? We take care of it.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  You choose the service provider. We do the driving. When your car
                  is ready we bring it straight back to your home or office. No
                  coordination headaches, no wasted afternoon, no Uber back and forth.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Text 480-742-8553 with your address and what service your car needs
                  and we will confirm availability and pricing fast.
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
                Vehicle Concierge Phoenix{" "}
                <span className="text-orange-500">FAQ</span>
              </h2>
            </div>
            <div className="space-y-5">
              {[
                {
                  q: "What is vehicle concierge service in Phoenix?",
                  a: "We pick up your car from your home or office, take it to any service provider you choose, and return it to you when done. You never have to leave.",
                },
                {
                  q: "How much does vehicle concierge cost in Phoenix?",
                  a: "Starting at $45 for up to 10 miles and $65 for 10 to 25 miles. The service provider cost is separate and paid directly by you. Text us for an exact quote before anything is booked.",
                },
                {
                  q: "Can you pick up my car from my home in Phoenix?",
                  a: "Yes. We pick up from your home, office, or any location in Phoenix metro and return it to the same place when the service is complete.",
                },
                {
                  q: "Is same day vehicle concierge available in Phoenix?",
                  a: "Yes. Same day vehicle concierge is available in Phoenix depending on schedule and route. Text us early in the day for the best availability.",
                },
                {
                  q: "Do you handle car wash and oil change concierge in Phoenix?",
                  a: "Yes. Car wash pickup and return, oil change runs, tire service, dealership appointments, and any other vehicle service in the Phoenix metro area.",
                },
                {
                  q: "Are you insured for vehicle concierge in Phoenix?",
                  a: "Yes. Freedom Line Freight Express is fully insured for every vehicle concierge job. Your car is protected from pickup to return.",
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
              Vehicle Concierge Service Areas Near Phoenix
            </h2>
            <p className="mb-8 text-gray-400">
              Serving homeowners and professionals across all of Phoenix metro and East Valley.
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
                ["Vehicle Concierge", "/vehicle-concierge"],
                ["Vehicle Delivery Phoenix", "/vehicle-delivery-phoenix"],
                ["Auto Transport Phoenix", "/auto-transport-phoenix"],
                ["Car Transport Phoenix", "/car-transport-phoenix"],
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
        <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-4xl font-black md:text-5xl">
              Ready for Vehicle Concierge in Phoenix?
            </h2>
            <p className="mb-2 text-xl font-semibold text-orange-100">
              We pick up your car, handle the service, and return it to your door.
            </p>
            <p className="mb-10 text-orange-100">
              Text your address and what service your car needs for a fast quote.
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
