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
  MessageSquare,
  Users,
  DollarSign,
} from "lucide-react";

export default function SeniorVehicleConciergePhoenix() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Senior Vehicle Concierge Phoenix",
    serviceType: "Senior Vehicle Concierge Service",
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
      "Senior vehicle concierge service in Phoenix Arizona. We pick up your car, take it to any service provider, and return it to your home. Car wash, oil change, mechanic, and dealership trips handled for seniors across Phoenix metro.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is senior vehicle concierge service in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Senior vehicle concierge means we come to your home, pick up your car, take it to any service provider you need car wash, mechanic, oil change, or dealership and return it to your door when done. Seniors never have to drive or arrange a ride.",
        },
      },
      {
        "@type": "Question",
        name: "Is this service designed specifically for seniors in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our senior vehicle concierge service is designed with seniors in mind. We communicate by text for clear written updates, we are patient and reliable, and we handle every trip so seniors can stay comfortable at home.",
        },
      },
      {
        "@type": "Question",
        name: "How much does senior vehicle concierge cost in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Senior vehicle concierge in Phoenix starts at $45 for car wash pickup up to 10 miles and $55 for mechanic or oil change pickup up to 10 miles. Text us for an exact quote based on your location and service needed.",
        },
      },
      {
        "@type": "Question",
        name: "Can family members arrange this service for a senior parent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Adult children and family members frequently arrange our senior vehicle concierge service for their parents. We work directly with whoever contacts us and keep everyone updated by text.",
        },
      },
      {
        "@type": "Question",
        name: "Do seniors need to be home when you pick up the car?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily. We can arrange key pickup and return details that work for the senior's comfort and schedule. Text us and we will figure out the most convenient arrangement.",
        },
      },
      {
        "@type": "Question",
        name: "Are you insured for senior vehicle concierge in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Freedom Line Freight Express is fully insured for every senior vehicle concierge job in Phoenix. Every car we drive is fully protected from pickup to return.",
        },
      },
    ],
  };

  const services = [
    {
      icon: Droplets,
      title: "Car Wash Pickup and Return",
      desc: "We pick up the car, take it to a trusted car wash, and return it clean to the senior's home. No driving, no waiting in line.",
    },
    {
      icon: Wrench,
      title: "Mechanic and Repair Runs",
      desc: "We take the vehicle to any mechanic or repair shop and return it when ready. Full round trip handled from home to home.",
    },
    {
      icon: Car,
      title: "Oil Change Service Runs",
      desc: "We handle the oil change trip from pickup to return. No need to arrange rides or sit at the shop.",
    },
    {
      icon: CalendarCheck,
      title: "Dealership Service Visits",
      desc: "Warranty work, recalls, and scheduled dealership service handled without seniors leaving their home.",
    },
    {
      icon: HeartHandshake,
      title: "Scheduled Recurring Pickups",
      desc: "We set up a recurring schedule for regular maintenance so the car is always serviced on time without any effort.",
    },
    {
      icon: Users,
      title: "Family Arranged Service",
      desc: "Adult children can arrange and schedule all pickups on behalf of a senior parent. We coordinate with whoever is most convenient.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Text or Have Family Text",
      desc: "Send the senior's address, the service needed, and the preferred shop to 480-742-8553. Family can arrange this on their behalf.",
    },
    {
      step: "2",
      title: "We Confirm Everything",
      desc: "We reply with pricing, timing, and availability. Everything is confirmed by text before we arrive.",
    },
    {
      step: "3",
      title: "We Pick Up the Car",
      desc: "We arrive at the home, pick up the vehicle, and keep the senior or family updated by text throughout.",
    },
    {
      step: "4",
      title: "Returned to the Door",
      desc: "The car comes back to the senior's home serviced and ready. Clear text confirmation when it arrives.",
    },
  ];

  const whyChooseUs = [
    {
      icon: MessageSquare,
      title: "Text Based Communication",
      desc: "As a deaf-owned business we communicate entirely by text. Every update, pickup time, and return confirmation arrives in writing — clear and easy to read for seniors and family members.",
    },
    {
      icon: HeartHandshake,
      title: "Patient and Reliable",
      desc: "We understand that seniors need a service they can trust completely. We show up on time, communicate clearly, and treat every vehicle with care.",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      desc: "Every senior vehicle concierge job is fully insured. Family members can have complete peace of mind knowing the car is protected from pickup to return.",
    },
    {
      icon: Star,
      title: "Owner Operated",
      desc: "Sean handles every job personally. You are never dealing with a random contractor or dispatcher — always the same trusted owner.",
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
        <title>Senior Vehicle Concierge Phoenix | Car Pickup Service for Seniors | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Senior vehicle concierge service in Phoenix. We pick up your car, take it to any service provider, and return it to your home. Car wash, oil change, mechanic, and dealership trips. Fully insured. Text 480-742-8553."
        />
        <link rel="canonical" href="https://www.flfreightco.com/senior-vehicle-concierge-phoenix" />
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
                <HeartHandshake className="text-orange-500" size={16} />
                Senior Vehicle Concierge Phoenix Metro
              </div>

              <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                Senior Vehicle Concierge{" "}
                <span className="text-orange-500">Phoenix</span>
                <span className="block text-2xl md:text-3xl font-bold text-gray-300 mt-3">
                  We Handle Every Car Trip So Seniors Never Have To.
                </span>
              </h1>

              <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Freedom Line Freight Express provides trusted vehicle concierge service
                for seniors across Phoenix metro. We pick up your car from your home,
                take it to any service provider you choose car wash, mechanic, oil
                change, or dealership — and return it to your door when done.
                No driving. No waiting. No hassle.
              </p>

              <p className="mb-4 text-gray-400 text-lg">
                Family members can also arrange and schedule all services on behalf
                of a senior parent. We coordinate with whoever is most convenient.
              </p>

              <p className="mb-8 text-orange-400 font-bold text-xl">
                📞 Text only: 480-742-8553
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-4 text-lg font-bold text-white hover:bg-orange-600 transition-colors"
                >
                  Schedule Senior Concierge
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
                  "Text based updates",
                  "Family can arrange",
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
                { icon: HeartHandshake, label: "Built for Seniors", sub: "Patient and reliable service" },
                { icon: Shield, label: "Fully Insured", sub: "Every single pickup" },
                { icon: MessageSquare, label: "Text Updates", sub: "Clear written communication" },
                { icon: Star, label: "Owner Operated", sub: "Same trusted driver always" },
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

        {/* FOR SENIORS AND FAMILY */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-start">

              <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <HeartHandshake className="text-orange-500" size={28} />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-white">
                  For Seniors in Phoenix
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  Getting your car to a mechanic, car wash, or dealership should not
                  be stressful or inconvenient. Our senior vehicle concierge service
                  removes every part of that hassle. We come to your home, pick up
                  your car, handle the service trip, and return it clean and ready.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  You choose the service provider. We handle everything else.
                  You stay comfortable at home while your car is taken care of.
                </p>
                <ul className="space-y-3">
                  {[
                    "No driving required",
                    "No arranging rides back and forth",
                    "No sitting in waiting rooms",
                    "Clear text updates every step of the way",
                    "Same trusted owner every time",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="flex-shrink-0 text-orange-500" size={15} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <Users className="text-orange-500" size={28} />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-white">
                  For Adult Children and Family
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  Worried about your parent's car maintenance in Phoenix? Living out
                  of state or too far to help with every service trip? Our senior
                  vehicle concierge service lets you arrange everything remotely so
                  your parent's car stays maintained without you having to be there.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  Text us from anywhere. We coordinate directly with your parent,
                  keep everyone updated, and handle every trip professionally. You
                  get peace of mind knowing it is taken care of.
                </p>
                <ul className="space-y-3">
                  {[
                    "Arrange service from anywhere by text",
                    "We coordinate with your parent directly",
                    "Text updates sent to whoever needs them",
                    "Recurring service available so nothing gets missed",
                    "One reliable contact for all vehicle needs",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="flex-shrink-0 text-orange-500" size={15} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Senior Vehicle Concierge{" "}
                <span className="text-orange-500">Services</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                Every car service trip handled from home to home. Seniors choose
                the provider and we handle the rest.
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
                How Senior Vehicle Concierge{" "}
                <span className="text-orange-500">Works</span>
              </h2>
              <p className="text-lg text-gray-300">
                Simple four step process. Family can arrange everything remotely.
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
                Ready to set up senior vehicle concierge for yourself or a loved one?
              </p>
              <p className="text-gray-400 text-sm mb-4">
                Text us and we will walk you through everything clearly.
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

        {/* WHY CHOOSE US */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Why Seniors and Families Choose{" "}
                <span className="text-orange-500">Freedom Line</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                Trust and reliability matter most when arranging vehicle service
                for a senior. Here is why families across Phoenix choose us.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {whyChooseUs.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-5 rounded-xl border border-neutral-800 bg-neutral-950 p-7 hover:border-orange-500 transition-colors"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20">
                    <Icon className="text-orange-500" size={22} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-orange-500/30 bg-orange-500/5 p-7">
              <h3 className="mb-3 text-xl font-bold text-orange-400">
                Deaf-Owned Business — Text Is Always Best
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Freedom Line Freight Express is a deaf-owned and operated business.
                We communicate entirely by text which is actually a significant advantage
                for senior vehicle concierge. Every pickup confirmation, update, and
                return notification arrives in writing making it easy for seniors to
                read at their own pace and for family members to stay informed from
                anywhere. No phone tag, no confusion, just clear written communication
                from start to finish.
              </p>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Senior Concierge{" "}
                <span className="text-orange-500">Pricing</span>
              </h2>
              <p className="text-lg text-gray-300">
                Simple flat rate pricing based on distance and service type.
                Service costs are separate and paid directly by you to the provider.
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
                  note: "Car wash cost separate",
                },
                {
                  service: "Mechanic, Oil Change, or Dealership",
                  tiers: [
                    { range: "0 to 10 miles", price: "$55" },
                    { range: "10 to 25 miles", price: "$75" },
                  ],
                  note: "Repair or service cost separate",
                },
              ].map(({ service, tiers, note }) => (
                <div
                  key={service}
                  className="rounded-xl border border-neutral-700 bg-neutral-900 p-7"
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
                    For longer distances or custom needs
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Routes over 25 miles or recurring senior service arrangements
                    are quoted individually. Text us with the senior's address and
                    service needed and we will confirm the exact price before anything
                    is scheduled. Family members are welcome to handle this on behalf
                    of their parent.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-white mb-1">
                    Every price confirmed before we arrive. No surprises.
                  </p>
                  <p className="text-sm text-gray-400">
                    Text the address, service needed, and preferred provider and I
                    will reply with an exact quote fast.
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
                  Senior Car Pickup Service{" "}
                  <span className="text-orange-500">Phoenix Arizona</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  For many seniors in Phoenix, getting a car to the mechanic or car
                  wash means asking a family member for help, arranging rides, or
                  simply putting it off. Our senior vehicle concierge service removes
                  that dependency completely.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  We serve seniors across all of Phoenix metro, Scottsdale, Mesa,
                  Chandler, Gilbert, Queen Creek, Tempe, San Tan Valley, Casa Grande
                  and surrounding areas. Whether it is a routine oil change or a trip
                  to the dealership for warranty work we handle every car service trip
                  from home to home.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Same day senior vehicle concierge is available when needed. Text
                  us and we will confirm availability and pricing fast.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Senior Auto Pickup Service —{" "}
                  <span className="text-orange-500">Peace of Mind for Families</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  If you have a senior parent in Phoenix and you worry about whether
                  their car is getting the maintenance it needs our service gives
                  you a simple, reliable solution. You text us from anywhere, we handle
                  the entire trip, and you know it is taken care of.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  We can also set up a recurring schedule so regular maintenance
                  like oil changes happen automatically without you or your parent
                  having to remember or arrange anything. Set it up once and we
                  handle it every time.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Freedom Line Freight Express is a deaf-owned and operated business
                  based in Queen Creek Arizona. We serve the entire Phoenix metro area
                  with reliable, insured, owner-operated vehicle concierge for seniors
                  and their families.
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
                Senior Vehicle Concierge{" "}
                <span className="text-orange-500">FAQ</span>
              </h2>
            </div>
            <div className="space-y-5">
              {[
                {
                  q: "What is senior vehicle concierge service in Phoenix?",
                  a: "We pick up a senior's car from their home, take it to any service provider they choose car wash, mechanic, oil change, or dealership  and return it to their door when done. Seniors never have to drive or arrange rides.",
                },
                {
                  q: "Is this service designed specifically for seniors?",
                  a: "Yes. Our senior vehicle concierge is designed with seniors in mind — patient service, clear text communication, reliable scheduling, and full round trip handling so seniors never have to leave home.",
                },
                {
                  q: "How much does senior vehicle concierge cost in Phoenix?",
                  a: "Car wash pickup starts at $45 for up to 10 miles. Mechanic and oil change pickup starts at $55 for up to 10 miles. Text us with the location and service for an exact quote.",
                },
                {
                  q: "Can family members arrange this for a senior parent?",
                  a: "Yes. Adult children and family members frequently arrange our senior vehicle concierge service remotely. We work with whoever contacts us and keep everyone updated by text.",
                },
                {
                  q: "Does the senior need to be home for pickup?",
                  a: "Not necessarily. We can arrange key pickup and return details that work for the senior's comfort. Text us and we will figure out the most convenient arrangement.",
                },
                {
                  q: "Are you insured for senior vehicle concierge in Phoenix?",
                  a: "Yes. Freedom Line Freight Express is fully insured for every senior vehicle concierge job. Every car is fully protected from pickup to return.",
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
              Senior Vehicle Concierge Service Areas
            </h2>
            <p className="mb-8 text-gray-400">
              Serving seniors and families across all of Phoenix metro and East Valley.
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
                ["Vehicle Concierge Phoenix", "/vehicle-concierge-phoenix"],
                ["Vehicle Concierge", "/vehicle-concierge"],
                ["Mechanic Pickup Phoenix", "/mechanic-pickup-service-phoenix"],
                ["Oil Change Pickup Phoenix", "/oil-change-pickup-service-phoenix"],
                ["Car Wash Pickup Phoenix", "/car-wash-pickup-service-phoenix"],
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
              Ready to Set Up Senior Vehicle Concierge?
            </h2>
            <p className="mb-2 text-xl font-semibold text-orange-100">
              We handle every car service trip so seniors never have to.
            </p>
            <p className="mb-10 text-orange-100">
              Seniors and family members welcome. Text us to get started.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-orange-600 hover:bg-gray-100 transition-colors"
              >
                Schedule Senior Concierge
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
