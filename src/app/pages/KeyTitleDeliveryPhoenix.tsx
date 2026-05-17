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
  Key,
  FileText,
  DollarSign,
  Repeat,
  Home,
  Briefcase,
  AlertCircle,
} from "lucide-react";

export default function KeyTitleDeliveryPhoenix() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Key and Title Delivery Phoenix",
    serviceType: "Key and Title Delivery Service",
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
      "Key and title delivery service in Phoenix Arizona. We pick up and deliver vehicle keys and titles between buyers, sellers, dealers, and lenders across the Phoenix metro. Owner-operated and fully insured.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a key and title delivery service in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A key and title delivery service means we pick up vehicle keys, titles, or both from one location and deliver them securely to another location in Phoenix metro. We handle private party sales, dealer transactions, and lender paperwork.",
        },
      },
      {
        "@type": "Question",
        name: "How much does key and title delivery cost in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Key and title delivery in Phoenix starts at $45 for up to 10 miles and $65 for 10 to 25 miles. Text us for a fast quote on longer distances.",
        },
      },
      {
        "@type": "Question",
        name: "Is same day key and title delivery available in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Same day key and title delivery is available in Phoenix depending on schedule. Text us early for the best availability.",
        },
      },
      {
        "@type": "Question",
        name: "Can you deliver a title without the key in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can deliver a title alone, a key alone, or both together. Whatever the transaction requires.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle key and title delivery for private car sales in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We regularly handle key and title delivery for private party vehicle sales in Phoenix. We pick up from the seller and deliver to the buyer so neither party has to meet in person.",
        },
      },
      {
        "@type": "Question",
        name: "Are you insured for key and title delivery in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Freedom Line Freight Express is fully insured for every key and title delivery in Phoenix. Your documents and keys are protected from pickup to delivery.",
        },
      },
    ],
  };

  const howItWorks = [
    {
      step: "1",
      title: "Text Your Details",
      desc: "Send the pickup address, delivery address, and what needs to be delivered to 480-742-8553.",
    },
    {
      step: "2",
      title: "We Confirm the Quote",
      desc: "We reply with flat rate pricing and confirm availability. Everything agreed before we move.",
    },
    {
      step: "3",
      title: "We Pick Up Securely",
      desc: "We arrive at the pickup location, collect the keys and or title, and confirm receipt by text.",
    },
    {
      step: "4",
      title: "Delivered and Confirmed",
      desc: "We deliver directly to the recipient and send you a confirmation text when it is done.",
    },
  ];

  const whoItIsFor = [
    {
      icon: Car,
      title: "Private Party Sales",
      items: [
        "Seller and buyer are across the valley",
        "Neither party wants to meet in person",
        "Title needs to move after payment clears",
        "Keys need to reach the new owner fast",
      ],
    },
    {
      icon: Briefcase,
      title: "Dealers and Lenders",
      items: [
        "Title needs to move between locations",
        "Keys need to reach a buyer or transport driver",
        "Same day paperwork delivery required",
        "Reliable courier for high value documents",
      ],
    },
    {
      icon: Home,
      title: "Individuals and Families",
      items: [
        "Sold a vehicle and need the title delivered",
        "Bought a car and need keys brought to you",
        "Cannot leave work or home to make the exchange",
        "Want a safe and documented handoff",
      ],
    },
  ];

  const whyUs = [
    { icon: Key, text: "We handle keys, titles, and both together for any transaction." },
    { icon: Shield, text: "Fully insured for every pickup and delivery." },
    { icon: Clock, text: "Same day available when the deal cannot wait." },
    { icon: Phone, text: "Deaf-owned business — text preferred for all updates and confirmations." },
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
        <title>Key and Title Delivery Phoenix | Vehicle Key and Title Courier | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Key and title delivery service in Phoenix. We pick up and deliver vehicle keys and titles between buyers, sellers, dealers, and lenders across Phoenix metro. Same day available. Owner-operated and fully insured. Text 480-742-8553."
        />
        <link rel="canonical" href="https://www.flfreightco.com/key-title-delivery-phoenix" />
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
                <Key className="text-orange-500" size={16} />
                Phoenix Metro Key and Title Delivery
              </div>

              <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                Key and Title Delivery{" "}
                <span className="text-orange-500">Phoenix</span>
                <span className="block text-2xl md:text-3xl font-bold text-gray-300 mt-3">
                  Secure Pickup and Delivery of Vehicle Keys and Titles Across Phoenix.
                </span>
              </h1>

              <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Closing a car deal but the buyer and seller are across the valley?
                Freedom Line Freight Express picks up vehicle keys, titles, or both
                and delivers them directly to the recipient anywhere in Phoenix metro.
                Fast, secure, and fully documented by text every step of the way.
              </p>

              <p className="mb-8 text-orange-400 font-bold text-xl">
                📞 Text only: 480-742-8553
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-4 text-lg font-bold text-white hover:bg-orange-600 transition-colors"
                >
                  Schedule Delivery
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
                  "Keys and titles",
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
                { icon: Key, label: "Keys and Titles", sub: "Any vehicle transaction" },
                { icon: Shield, label: "Fully Insured", sub: "Every pickup and delivery" },
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
                How Key and Title Delivery{" "}
                <span className="text-orange-500">Works</span>
              </h2>
              <p className="text-lg text-gray-300">
                Four steps and your keys or title reach the right hands. No meetup required.
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
                Need keys or a title delivered today in Phoenix?
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
                Who Uses Key and Title Delivery{" "}
                <span className="text-orange-500">in Phoenix?</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                Anyone who needs vehicle documents or keys to move across town
                without an in-person meeting. Here is who we serve most.
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
                  <span className="text-orange-500">Key and Title Delivery in Phoenix?</span>
                </h2>
                <p className="mb-6 text-gray-300 leading-relaxed text-lg">
                  Vehicle transactions fall apart when the paperwork gets stuck.
                  We make sure keys and titles move fast, securely, and with full
                  confirmation so both parties know exactly where things stand.
                </p>
                <p className="mb-8 text-gray-400 leading-relaxed">
                  As a deaf-owned business we communicate entirely by text. Every
                  pickup confirmation, transit update, and delivery confirmation
                  comes directly to your phone in writing. That means a clear paper
                  trail for every key and title we move — important when you are
                  closing a vehicle transaction.
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
                  Key and Title Courier vs Doing It Yourself
                </h3>
                <div className="space-y-4">
                  {[
                    ["Drive across the valley to meet", "We handle the handoff for you"],
                    ["Coordinate schedules with strangers", "We pick up and deliver on your timeline"],
                    ["Meet in a parking lot to exchange", "Secure door to door delivery"],
                    ["No record of handoff", "Every step confirmed by text"],
                    ["Lose time from work or home", "Done while you stay where you are"],
                    ["Deal stalls waiting on paperwork", "Same day delivery keeps deals moving"],
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
                Key and Title Delivery Pricing in{" "}
                <span className="text-orange-500">Phoenix</span>
              </h2>
              <p className="text-lg text-gray-300">
                Flat rate pickup and delivery pricing. No hidden fees.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              {[
                {
                  label: "Local Delivery",
                  range: "0 to 10 miles",
                  price: "$45",
                  example: "Same neighborhood or nearby city",
                  highlight: false,
                },
                {
                  label: "Extended Local",
                  range: "10 to 25 miles",
                  price: "$65",
                  example: "Across the valley delivery",
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
                    The prices above cover pickup from one location and delivery to
                    another. Mileage is calculated from pickup to drop-off address.
                    If you need us to deliver both keys and a title in the same run,
                    that is one job at the same flat rate. Text us with your addresses
                    for an exact quote before we move anything.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-white mb-1">
                    Need recurring key or title delivery for your dealership?
                  </p>
                  <p className="text-sm text-gray-400">
                    We work with dealers and lenders on regular document runs.
                    Text us to set up a recurring delivery plan.
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
                  Vehicle Key and Title Delivery{" "}
                  <span className="text-orange-500">Service Near Phoenix</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  Private party car sales in Phoenix happen every day and the biggest
                  friction point is always the same — how do the keys and title get
                  from the seller to the buyer without both parties having to meet
                  in a parking lot? That is where we come in.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  Freedom Line Freight Express picks up vehicle keys and titles from
                  anywhere in Phoenix metro and delivers them securely to the recipient.
                  We confirm every step by text so both parties always know where
                  their documents and keys are.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We serve all of Phoenix including Mesa, Chandler, Gilbert, Queen Creek,
                  Scottsdale, Tempe, San Tan Valley, Casa Grande and surrounding areas.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Dealer and Lender Key and Title{" "}
                  <span className="text-orange-500">Courier Phoenix</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  Dealerships and lenders often need titles moved between locations
                  quickly. Whether it is a title going to a lienholder, keys going
                  to a transport driver, or paperwork moving between your lot and
                  a customer — we handle it same day.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  As a deaf-owned business we communicate entirely by text which
                  means every delivery is documented in writing. No phone tag.
                  No miscommunication. Just a clear record of pickup, transit,
                  and delivery confirmation sent straight to you.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We also handle recurring delivery runs for dealerships and
                  fleet operators who need a reliable courier for regular
                  document and key movement across Phoenix metro.
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
                Key and Title Delivery{" "}
                <span className="text-orange-500">FAQ</span>
              </h2>
            </div>
            <div className="space-y-5">
              {[
                {
                  q: "What is a key and title delivery service in Phoenix?",
                  a: "We pick up vehicle keys, titles, or both from one location and deliver them securely to another location anywhere in Phoenix metro. We handle private party sales, dealer transactions, and lender paperwork runs.",
                },
                {
                  q: "How much does key and title delivery cost in Phoenix?",
                  a: "Starting at $45 for up to 10 miles and $65 for 10 to 25 miles. Text us your pickup and delivery addresses for an exact quote.",
                },
                {
                  q: "Is same day key and title delivery available in Phoenix?",
                  a: "Yes. Same day delivery is available depending on schedule. Text us early in the day for the best availability.",
                },
                {
                  q: "Can you deliver a title without the key in Phoenix?",
                  a: "Yes. We can deliver a title alone, a key alone, or both together. Whatever the transaction requires.",
                },
                {
                  q: "Do you handle key and title delivery for private car sales in Phoenix?",
                  a: "Yes. We regularly handle key and title delivery for private party vehicle sales across Phoenix metro. We pick up from the seller and deliver to the buyer so neither party has to meet in person.",
                },
                {
                  q: "Are you insured for key and title delivery in Phoenix?",
                  a: "Yes. Freedom Line Freight Express is fully insured for every key and title delivery. Your documents and keys are protected from pickup to delivery.",
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
              Key and Title Delivery Areas in Phoenix Metro
            </h2>
            <p className="mb-8 text-gray-400">
              Serving private sellers, buyers, dealers, and lenders across all of Phoenix and the East Valley.
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
                ["Car Wash Pickup Phoenix", "/car-wash-pickup-service-phoenix"],
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
              Ready for Key and Title Delivery in Phoenix?
            </h2>
            <p className="mb-2 text-xl font-semibold text-orange-100">
              We pick up your keys or title and deliver them safely to the recipient.
            </p>
            <p className="mb-10 text-orange-100">
              Text your pickup and delivery addresses for a fast quote.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-orange-600 hover:bg-gray-100 transition-colors"
              >
                Schedule Delivery
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
