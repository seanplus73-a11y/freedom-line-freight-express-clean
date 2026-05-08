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
  Zap,
  CalendarCheck,
  HeartHandshake,
} from "lucide-react";

export default function MechanicPickupServicePhoenix() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mechanic Pickup Service Phoenix",
    serviceType: "Mechanic Pickup and Return Service",
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
      "Mechanic pickup and return service in Phoenix Arizona. We pick up your vehicle, take it to your preferred mechanic or repair shop, and return it to your home or office when ready. Owner-operated and fully insured.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is mechanic pickup service in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mechanic pickup service means we come to your home or office, pick up your vehicle, take it to your preferred mechanic or repair shop, and return it to you when the work is done. You never have to arrange a ride or sit in a waiting room.",
        },
      },
      {
        "@type": "Question",
        name: "How much does mechanic pickup service cost in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mechanic pickup service in Phoenix starts at $55 for up to 10 miles and $75 for 10 to 25 miles. The mechanic or repair cost is separate and paid directly by you to the shop.",
        },
      },
      {
        "@type": "Question",
        name: "Do you take my car to any mechanic in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You choose the mechanic or repair shop and we drive your vehicle there and back. Any shop location in the Phoenix metro area.",
        },
      },
      {
        "@type": "Question",
        name: "Is same day mechanic pickup available in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Same day mechanic pickup is available in Phoenix depending on schedule and route. Text us early for the best availability.",
        },
      },
      {
        "@type": "Question",
        name: "Can you pick up my car from the mechanic when it is ready?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer post-repair pickup service as well. When your mechanic calls to say the car is ready we pick it up and bring it back to your home or office.",
        },
      },
      {
        "@type": "Question",
        name: "Are you insured for mechanic pickup service in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Freedom Line Freight Express is fully insured for every mechanic pickup and return job in Phoenix. Your vehicle is protected from pickup to return.",
        },
      },
    ],
  };

  const services = [
    {
      icon: Wrench,
      title: "Drop Off at the Mechanic",
      desc: "We pick up your car from your home or office and drop it at your preferred mechanic. No need to arrange a ride or take time off work.",
    },
    {
      icon: Car,
      title: "Post-Repair Pickup",
      desc: "Car is ready at the shop but you are busy? We pick it up and bring it back to your door when the mechanic calls.",
    },
    {
      icon: CalendarCheck,
      title: "Scheduled Service Appointments",
      desc: "Have a scheduled repair or service appointment? We handle the drop off and return so you never have to rearrange your day.",
    },
    {
      icon: HeartHandshake,
      title: "Dealership Service Visits",
      desc: "Warranty work, recalls, or dealership service appointments handled without you losing a day sitting in the waiting room.",
    },
    {
      icon: Zap,
      title: "Same Day Available",
      desc: "Need it handled today? Same day mechanic pickup is available across Phoenix metro depending on route and schedule.",
    },
    {
      icon: Repeat,
      title: "Recurring Service Runs",
      desc: "Have regular scheduled maintenance? We set up recurring pickups so your car always makes it to the shop on time.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Text Your Details",
      desc: "Send your address, your preferred mechanic or shop, and your preferred pickup time to 480-742-8553.",
    },
    {
      step: "2",
      title: "We Confirm the Quote",
      desc: "We reply with flat rate pricing and availability. Everything agreed before we arrive at your door.",
    },
    {
      step: "3",
      title: "We Drop It Off",
      desc: "We arrive, pick up your car, and drive it directly to the mechanic. You stay home or at work.",
    },
    {
      step: "4",
      title: "We Bring It Back",
      desc: "When the mechanic says it is ready we pick it up and return it to your door fully serviced.",
    },
  ];

  const whoItIsFor = [
    {
      icon: Home,
      title: "Homeowners",
      items: [
        "No time to sit at a repair shop all morning",
        "Do not want to arrange rides back and forth",
        "Car needs service but schedule is packed",
        "Want it handled without disrupting the day",
      ],
    },
    {
      icon: Briefcase,
      title: "Busy Professionals",
      items: [
        "Working from home with no break window",
        "Back to back meetings all day",
        "Need the car serviced before a work trip",
        "Cannot afford to lose half a day at the shop",
      ],
    },
    {
      icon: HeartHandshake,
      title: "Anyone Who Values Time",
      items: [
        "Parents with kids and no downtime",
        "Seniors who prefer not to make the trip",
        "People recovering from surgery or illness",
        "Anyone who wants the errand handled for them",
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
        <title>Mechanic Pickup Service Phoenix | We Take Your Car to the Shop | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Mechanic pickup service in Phoenix. We pick up your car, take it to your preferred mechanic, and return it to your door when ready. Same day available. Fully insured. Text 480-742-8553."
        />
        <link rel="canonical" href="https://www.flfreightco.com/mechanic-pickup-service-phoenix" />
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
                Phoenix Metro Mechanic Pickup Service
              </div>

              <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                Mechanic Pickup Service{" "}
                <span className="text-orange-500">Phoenix</span>
                <span className="block text-2xl md:text-3xl font-bold text-gray-300 mt-3">
                  We Take Your Car to the Shop. Pick It Up When Ready. You Stay Home.
                </span>
              </h1>

              <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Stop rearranging your day around mechanic appointments. Freedom Line
                Freight Express picks up your vehicle from your home or office, takes
                it to your preferred mechanic anywhere in Phoenix, and returns it to
                your door when the work is done. Fully insured. Owner operated.
              </p>

              <p className="mb-8 text-orange-400 font-bold text-xl">
                📞 Text only: 480-742-8553
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-4 text-lg font-bold text-white hover:bg-orange-600 transition-colors"
                >
                  Schedule Mechanic Pickup
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
                  "Drop off and pickup",
                  "Any mechanic you choose",
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
                { icon: Wrench, label: "Any Mechanic", sub: "You choose, we drive" },
                { icon: Shield, label: "Fully Insured", sub: "Every pickup and return" },
                { icon: Clock, label: "Drop Off and Pickup", sub: "Full round trip service" },
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

        {/* SERVICES */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                What Our Mechanic Pickup{" "}
                <span className="text-orange-500">Service Covers</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                From drop off to post-repair pickup — we handle every part of the
                mechanic trip so you never have to rearrange your schedule.
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
                How Mechanic Pickup{" "}
                <span className="text-orange-500">Works</span>
              </h2>
              <p className="text-lg text-gray-300">
                Four steps. Your car gets serviced. You never leave home.
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
                Car needs to go to the shop? Text us and we will handle it.
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
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Who Uses Mechanic Pickup{" "}
                <span className="text-orange-500">Service in Phoenix?</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                Anyone who wants their car serviced without losing half their day
                to a mechanic trip. Here is who we serve most.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {whoItIsFor.map(({ icon: Icon, title, items }) => (
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

        {/* WHY US + COMPARISON */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  We Drive to{" "}
                  <span className="text-orange-500">Any Mechanic</span>{" "}
                  in Phoenix
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed text-lg">
                  You choose the shop. We handle the trip. Whether you have a trusted
                  independent mechanic, prefer a national chain, or need to go to a
                  dealership service center — we drive your vehicle there and bring
                  it back when done.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  As a deaf-owned business we communicate entirely by text. That means
                  every pickup confirmation, shop drop off notification, and return
                  update comes directly to your phone in writing. Clear, documented,
                  and reliable from start to finish.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Same day mechanic pickup is available across Phoenix metro. Text us
                  in the morning and we will confirm availability and pricing fast.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-8">
                <h3 className="mb-6 text-2xl font-bold text-orange-500">
                  Mechanic Trip Yourself vs Using Our Service
                </h3>
                <div className="space-y-4">
                  {[
                    ["Drive to the mechanic yourself", "We pick up from your door"],
                    ["Arrange a ride back home", "You never leave home at all"],
                    ["Wait for the call to pick it up", "We pick it up when it is ready"],
                    ["Drive back to the shop", "We return it straight to you"],
                    ["Lose 2 to 4 hours of your day", "Done while you work or rest"],
                    ["Repeat every time service is due", "Set up recurring pickup service"],
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
                Mechanic Pickup Pricing in{" "}
                <span className="text-orange-500">Phoenix</span>
              </h2>
              <p className="text-lg text-gray-300">
                Flat rate pricing based on distance. The mechanic or repair cost
                is separate and paid directly by you to the shop.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              {[
                {
                  label: "Local Pickup and Return",
                  range: "0 to 10 miles",
                  price: "$55",
                  example: "Nearby mechanic in your area",
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
                    The prices above cover pickup from your door, driving to the mechanic,
                    and returning your vehicle when the work is complete. The actual
                    repair or service cost is separate and your responsibility — paid
                    directly to the mechanic or shop.
                  </p>
                  <h4 className="font-semibold text-white mb-3">
                    How to handle the repair payment:
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 rounded-lg border border-neutral-700 bg-neutral-950 p-4">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-white">
                        1
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white mb-1">
                          Call the shop ahead of time
                        </p>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          Call your mechanic and give them your credit card over the
                          phone or set up payment before we drop the car off. They
                          charge you directly when the work is done.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-lg border border-neutral-700 bg-neutral-950 p-4">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-white">
                        2
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white mb-1">
                          Pay the shop online or by phone
                        </p>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          Many shops allow remote payment by phone or through their
                          online portal. Pay from home when the mechanic calls to say
                          the work is done. We pick up the car when it is cleared.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-gray-500 italic">
                    We do not front repair costs on behalf of customers. Payment
                    to the mechanic is always the customer's responsibility.
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
                    Text your address and preferred mechanic and I will give you
                    an exact quote before anything is booked. No surprises.
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
                  Mechanic Pickup and Return{" "}
                  <span className="text-orange-500">Service Near Phoenix</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  Getting a car to the mechanic in Phoenix usually means rearranging
                  your entire morning. You drive it to the shop, arrange a ride home,
                  wait for the call, then arrange another ride back. That is two to
                  four hours of your day gone before you even think about the repair cost.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  Mechanic pickup service removes every one of those steps. We pick
                  up your vehicle from your home or office, take it to your chosen
                  shop anywhere in Phoenix metro, and bring it back to your door when
                  the work is done. You stay exactly where you are.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We serve all of Phoenix including Mesa, Chandler, Gilbert, Queen
                  Creek, Scottsdale, Tempe, San Tan Valley, Casa Grande and surrounding
                  areas. Same day pickup is available when you need it fast.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Post-Repair Pickup Service{" "}
                  <span className="text-orange-500">Phoenix</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  Already dropped your car at the mechanic but have no way to pick
                  it up when it is ready? That is exactly what our post-repair pickup
                  service is for. When the shop calls to say the work is done we go
                  get your car and return it straight to your door.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  This is especially useful when repair takes longer than expected
                  and you are already deep into your workday with no time to make
                  the trip. Just text us the shop address and we handle the rest.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  As a deaf-owned business we communicate entirely by text which means
                  you always have a written confirmation of pickup time, shop address,
                  and return ETA. Clear and documented every time.
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
                Mechanic Pickup Phoenix{" "}
                <span className="text-orange-500">FAQ</span>
              </h2>
            </div>
            <div className="space-y-5">
              {[
                {
                  q: "What is mechanic pickup service in Phoenix?",
                  a: "We come to your home or office, pick up your vehicle, take it to your preferred mechanic, and return it to you when the work is done. You never have to arrange a ride or sit in a waiting room.",
                },
                {
                  q: "How much does mechanic pickup service cost in Phoenix?",
                  a: "Starting at $55 for up to 10 miles and $75 for 10 to 25 miles. The repair cost is separate and paid directly by you to the shop. Text us for an exact quote before anything is booked.",
                },
                {
                  q: "Do you take my car to any mechanic in Phoenix?",
                  a: "Yes. You choose the mechanic and we drive your vehicle there and back. Any shop in Phoenix metro — independent mechanics, national chains, or dealership service centers.",
                },
                {
                  q: "Is same day mechanic pickup available in Phoenix?",
                  a: "Yes. Same day mechanic pickup is available in Phoenix depending on schedule and route. Text us early for the best availability.",
                },
                {
                  q: "Can you pick up my car from the mechanic when it is ready?",
                  a: "Yes. Post-repair pickup is available. When your mechanic calls to say the car is ready we go get it and return it to your door.",
                },
                {
                  q: "Are you insured for mechanic pickup service in Phoenix?",
                  a: "Yes. Freedom Line Freight Express is fully insured for every mechanic pickup and return job. Your vehicle is protected from pickup to return.",
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
              Mechanic Pickup Service Areas in Phoenix Metro
            </h2>
            <p className="mb-8 text-gray-400">
              Serving homeowners and professionals across all of Phoenix and the East Valley.
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
                ["Oil Change Pickup Phoenix", "/oil-change-pickup-service-phoenix"],
                ["Car Wash Pickup Phoenix", "/car-wash-pickup-service-phoenix"],
                ["Vehicle Concierge Phoenix", "/vehicle-concierge-phoenix"],
                ["Vehicle Concierge", "/vehicle-concierge"],
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
              Need Mechanic Pickup in Phoenix?
            </h2>
            <p className="mb-2 text-xl font-semibold text-orange-100">
              We pick up your car, take it to the shop, and return it when ready.
            </p>
            <p className="mb-10 text-orange-100">
              Text your address and preferred mechanic for a fast quote.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-orange-600 hover:bg-gray-100 transition-colors"
              >
                Schedule Mechanic Pickup
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

