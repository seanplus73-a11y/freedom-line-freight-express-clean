import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import {
  Car,
  Clock,
  ShieldCheck,
  Phone,
  MapPin,
  CheckCircle,
  Store,
  Wrench,
  FileText,
  Route,
  Home,
  ArrowRight,
  KeyRound,
} from "lucide-react";

export default function PhoenixDelivery() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Freedom Line Freight Express",
    alternateName: "FLF Express",
    image: "https://www.flfreightco.com/logo.png",
    url: "https://www.flfreightco.com/phoenix-delivery",
    telephone: "+1-480-742-8553",
    email: "dispatch@flfreightco.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Tan Valley",
      addressRegion: "AZ",
      postalCode: "85144",
      addressCountry: "US",
    },
    areaServed: [
      "Phoenix AZ",
      "Mesa AZ",
      "Chandler AZ",
      "Gilbert AZ",
      "Scottsdale AZ",
      "Tempe AZ",
      "Queen Creek AZ",
      "San Tan Valley AZ",
    ],
    description:
      "Phoenix AZ vehicle pickup and delivery, auto parts delivery, document courier, and key and title runner service. Direct drive-away for cars, SUVs, and small trucks. No towing, no trailers, owner-operated service, and fast text updates.",
    openingHours: "Mo-Su 07:00-19:00",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Phoenix Vehicle Pickup and Delivery",
    serviceType: "Vehicle Pickup and Delivery Service",
    provider: {
      "@type": "LocalBusiness",
      name: "Freedom Line Freight Express",
      telephone: "+1-480-742-8553",
      url: "https://www.flfreightco.com",
    },
    areaServed: {
      "@type": "City",
      name: "Phoenix",
      containedIn: {
        "@type": "State",
        name: "Arizona",
      },
    },
    description:
      "Direct drive-away vehicle delivery, auto parts delivery, document courier, and key and title runner service in Phoenix AZ. No towing and no trailers.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Phoenix Delivery Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vehicle Delivery Phoenix AZ",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dealer Vehicle Delivery Phoenix",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Auto Parts Delivery Phoenix",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Document Courier Phoenix",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Key and Title Runner Phoenix",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you offer same-day vehicle delivery in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Same-day vehicle pickup and delivery in Phoenix AZ may be available depending on distance, schedule, route, and vehicle condition. Text 480-742-8553 for current availability.",
        },
      },
      {
        "@type": "Question",
        name: "Do you use trailers or tow trucks in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Freedom Line Freight Express provides direct drive-away service only. Your vehicle is driven directly to its destination. No towing and no trailers.",
        },
      },
      {
        "@type": "Question",
        name: "What types of vehicles do you transport in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I transport cars, SUVs, and small trucks that run and drive. Vehicles must be safe to operate with working brakes, steering, and proper road readiness.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer key and title runner service in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Freedom Line Freight Express can help with key, title, and document delivery for dealerships, repair shops, businesses, and private customers in Phoenix when schedule and route allow.",
        },
      },
    ],
  };

  const cardClass =
    "rounded-2xl border border-white/10 bg-[#111827]/90 p-7 hover:border-[#f97316] hover:shadow-[0_0_30px_rgba(249,115,22,0.18)] hover:-translate-y-1 transition-all duration-300";

  return (
    <>
      <Helmet>
        <title>
          Vehicle Pickup and Delivery Phoenix AZ | Freedom Line Freight Express
        </title>
        <meta
          name="description"
          content="Phoenix AZ vehicle pickup and delivery, auto parts delivery, document courier, and key and title runner service. No towing. No trailers. Owner-operated and fully insured."
        />
        <link
          rel="canonical"
          href="https://www.flfreightco.com/phoenix-delivery"
        />
        <meta
          property="og:title"
          content="Vehicle Pickup and Delivery in Phoenix AZ"
        />
        <meta
          property="og:description"
          content="Direct drive-away vehicle delivery, auto parts delivery, document courier, and key and title runner service in Phoenix AZ. No towing. No trailers."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.flfreightco.com/phoenix-delivery"
        />

        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-[#0b0f19] text-white overflow-hidden">
        <section className="bg-[#f97316] text-black text-center py-2 text-sm font-semibold">
          Phoenix same-day pickup available depending on schedule and route
        </section>

        <header className="relative overflow-hidden border-b border-white/10 px-6 py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/15 via-transparent to-black" />
          <div className="absolute top-10 right-10 w-[420px] h-[420px] bg-[#f97316]/20 rounded-full blur-3xl" />

          <div className="relative mx-auto max-w-6xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full text-sm mb-7">
              <MapPin className="text-[#f97316]" size={18} />
              Phoenix Arizona Vehicle Delivery
            </div>

            <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Vehicle Pickup and Delivery in{" "}
              <span className="text-[#f97316]">Phoenix AZ</span>
            </h1>

            <p className="max-w-3xl text-xl md:text-2xl text-gray-200 mb-4 font-semibold">
              Need a car moved safely without towing or trailers?
            </p>

            <p className="max-w-4xl text-lg text-gray-400 mb-6">
              Freedom Line Freight Express provides direct drive-away service
              for cars, SUVs, and small trucks in Phoenix AZ. If it runs and
              drives, I can help move it from dealer to home, auction to shop,
              repair shop to customer, or across town.
            </p>

            <p className="max-w-4xl text-gray-400 mb-6">
              I also help with auto parts delivery, document courier service,
              and key and title runner service when schedule and route allow.
            </p>

            <p className="max-w-4xl text-gray-400 mb-6">
              Serving Phoenix areas including Downtown Phoenix, Sky Harbor
              Airport, Arcadia, Maryvale, Ahwatukee, Camelback Corridor, North
              Phoenix, and South Phoenix.
            </p>

            <p className="max-w-4xl text-gray-400 mb-10">
              Also serving nearby areas like{" "}
              <Link
                to="/mesa-delivery"
                className="text-[#f97316] underline font-semibold"
              >
                Mesa
              </Link>
              ,{" "}
              <Link
                to="/chandler-delivery"
                className="text-[#f97316] underline font-semibold"
              >
                Chandler
              </Link>
              ,{" "}
              <Link
                to="/gilbert-delivery"
                className="text-[#f97316] underline font-semibold"
              >
                Gilbert
              </Link>
              , and{" "}
              <Link
                to="/scottsdale-delivery"
                className="text-[#f97316] underline font-semibold"
              >
                Scottsdale
              </Link>
              .
            </p>

            <div className="flex flex-wrap gap-4 text-gray-300 text-sm mb-10">
              {[
                "No towing",
                "No trailer",
                "Direct drive-away",
                "Fully insured",
                "Owner operated",
                "Text updates",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle className="text-[#f97316]" size={16} />
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center bg-[#f97316] px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-orange-500/20"
              >
                Get Phoenix Quote in 5 to 10 Minutes
                <ArrowRight className="ml-2" size={20} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-orange-500 text-white px-6 py-3 rounded-md font-bold hover:bg-orange-600 transition-colors"
              >
                Text Me to Book
              </Link>
            </div>

            <div className="mt-6 text-gray-300 text-sm space-y-1">
              <p>✔ Fully insured</p>
              <p>✔ Owner operated service</p>
              <p>✔ Clear text communication and Deaf-friendly service</p>
            </div>
          </div>
        </header>

        <section className="py-20 bg-[#111827]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <p className="text-[#f97316] font-bold uppercase tracking-widest mb-3">
                  Phoenix drive-away service
                </p>

                <h2 className="mb-6 text-3xl md:text-5xl font-extrabold leading-tight">
                  Fast Phoenix Vehicle{" "}
                  <span className="text-[#f97316]">Drive-Away Service</span>
                </h2>

                <p className="mb-4 text-gray-300 text-lg">
                  Need a car moved from Sky Harbor Airport, a repair shop, a
                  dealership, auction pickup, or a private seller?
                </p>

                <p className="mb-6 text-gray-400">
                  I specialize in direct point-to-point drive-away for
                  operational vehicles. No waiting for a full trailer load. No
                  confusing handoffs. Your vehicle is driven directly where it
                  needs to go.
                </p>

                <p className="mb-6 text-gray-400">
                  Local Phoenix AZ vehicle delivery is available for
                  dealerships, repair shops, auctions, car buyers, private
                  sellers, and customers who need simple vehicle movement
                  without towing.
                </p>

                <p className="text-gray-400">
                  Most local Phoenix deliveries start around $85 depending on
                  distance, route, service type, timing, and schedule
                  availability.
                </p>
              </div>

              <div className={cardClass}>
                <h2 className="mb-6 text-2xl font-bold text-[#f97316]">
                  Phoenix Services
                </h2>

                <ul className="space-y-4 text-gray-300">
                  {[
                    "Vehicle pickup and delivery for cars, SUVs, and small trucks",
                    "Dealer and auction vehicle transport",
                    "Car buyer and seller delivery",
                    "Repair shop vehicle movement",
                    "Auto parts delivery",
                    "Packages and document delivery",
                    "Key and title runner service",
                    "Same-day local delivery when available",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        className="text-[#f97316] mt-1 shrink-0"
                        size={18}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl bg-[#f97316]/10 border border-[#f97316]/30 p-5">
                  <p className="text-gray-300">
                    Vehicle transport is for operable vehicles only. Vehicle
                    must run, drive, steer, and stop safely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0b0f19]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-14">
              <p className="text-[#f97316] font-bold uppercase tracking-widest mb-3">
                Who this helps
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Who Uses Phoenix Vehicle Delivery?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                This service is built for customers and businesses that need a
                vehicle moved directly, safely, and without towing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className={cardClass}>
                <Home className="text-[#f97316] mb-4" size={40} />
                <h3 className="font-bold text-xl mb-3">Car Buyers</h3>
                <p className="text-gray-400">
                  Bought a vehicle and need it delivered to your home, shop,
                  airport, or another local address.
                </p>
              </div>

              <div className={cardClass}>
                <Wrench className="text-[#f97316] mb-4" size={40} />
                <h3 className="font-bold text-xl mb-3">Repair Shops</h3>
                <p className="text-gray-400">
                  Move customer vehicles between shops, homes, dealerships, or
                  inspection locations.
                </p>
              </div>

              <div className={cardClass}>
                <Store className="text-[#f97316] mb-4" size={40} />
                <h3 className="font-bold text-xl mb-3">Dealerships</h3>
                <p className="text-gray-400">
                  Help with dealer trades, customer delivery, auction pickup,
                  key and title runs, and local inventory movement.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#111827]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-14">
              <p className="text-[#f97316] font-bold uppercase tracking-widest mb-3">
                Why choose us
              </p>

              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Why Phoenix Chooses{" "}
                <span className="text-[#f97316]">Freedom Line</span>
              </h2>

              <p className="text-gray-400 max-w-2xl mx-auto">
                Not a broker. Not a random app driver. You work directly with
                me.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className={cardClass}>
                <Car className="text-[#f97316] mb-4" size={40} />
                <h3 className="mb-3 text-xl font-bold">Direct Drive-Away</h3>
                <p className="text-gray-400 leading-relaxed">
                  Your vehicle is driven directly to its destination. No trailer
                  transfers, no lot storage, and no towing.
                </p>
              </div>

              <div className={cardClass}>
                <Clock className="text-[#f97316] mb-4" size={40} />
                <h3 className="mb-3 text-xl font-bold">Fast and Flexible</h3>
                <p className="text-gray-400 leading-relaxed">
                  Quick Phoenix pickups, dependable scheduling, and clear text
                  updates from pickup to drop off.
                </p>
              </div>

              <div className={cardClass}>
                <ShieldCheck className="text-[#f97316] mb-4" size={40} />
                <h3 className="mb-3 text-xl font-bold">Owner-Operated</h3>
                <p className="text-gray-400 leading-relaxed">
                  Local Arizona business. Deaf-owned. Clear written
                  communication and personal accountability.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0b0f19]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#f97316] font-bold uppercase tracking-widest mb-3">
                  Also available
                </p>

                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                  More Local Delivery Options in Phoenix
                </h2>

                <p className="text-gray-400 mb-6 text-lg">
                  Vehicle delivery is the main service, but I can also help
                  with local business transport, auto parts, documents, keys,
                  titles, and small packages when schedule and route allow.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/courier"
                    className="inline-flex items-center text-[#f97316] font-bold hover:text-orange-400"
                  >
                    Phoenix auto parts delivery
                    <ArrowRight className="ml-2" size={18} />
                  </Link>

                  <Link
                    to="/package-document-delivery"
                    className="inline-flex items-center text-[#f97316] font-bold hover:text-orange-400"
                  >
                    Package and document delivery
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className={cardClass}>
                  <Wrench className="text-[#f97316] mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-2">Auto Parts</h3>
                  <p className="text-gray-400">
                    Parts pickup and delivery for shops, mechanics, and
                    customers.
                  </p>
                </div>

                <div className={cardClass}>
                  <FileText className="text-[#f97316] mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-2">Documents</h3>
                  <p className="text-gray-400">
                    Contracts, paperwork, forms, and time-sensitive documents.
                  </p>
                </div>

                <div className={cardClass}>
                  <KeyRound className="text-[#f97316] mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-2">
                    Key and Title Runner
                  </h3>
                  <p className="text-gray-400">
                    Same-day key, title, and paperwork delivery for dealerships,
                    auctions, repair shops, and business customers.
                  </p>
                </div>

                <div className={cardClass}>
                  <Route className="text-[#f97316] mb-4" size={32} />
                  <h3 className="font-bold text-lg mb-2">Local Routes</h3>
                  <p className="text-gray-400">
                    Phoenix to Sky Harbor, Downtown, Arcadia, Maryvale,
                    Ahwatukee, or North Phoenix.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0b0f19]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Phoenix Vehicle Delivery
                <span className="text-[#f97316]"> Quick Answers</span>
              </h2>

              <p className="text-gray-400 max-w-2xl mx-auto">
                Direct answers to common Phoenix vehicle delivery questions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className={cardClass}>
                <h3 className="font-bold text-lg mb-3 text-[#f97316]">
                  How can I get a car delivered today in Phoenix?
                </h3>
                <p className="text-gray-400">
                  Same day vehicle delivery in Phoenix may be available
                  depending on schedule and distance. Send pickup location,
                  delivery location, and vehicle details by text for a fast
                  quote.
                </p>
              </div>

              <div className={cardClass}>
                <h3 className="font-bold text-lg mb-3 text-[#f97316]">
                  Can I move a car without towing in Phoenix?
                </h3>
                <p className="text-gray-400">
                  Yes. Drive-away vehicle delivery means the car is driven
                  directly instead of being towed or loaded on a trailer.
                </p>
              </div>

              <div className={cardClass}>
                <h3 className="font-bold text-lg mb-3 text-[#f97316]">
                  Do you deliver auto parts, keys, titles, or documents?
                </h3>
                <p className="text-gray-400">
                  Yes. Auto parts, keys, titles, documents, and business items
                  can be delivered across Phoenix depending on route and
                  schedule.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#111827] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-center text-3xl md:text-5xl font-extrabold">
              Phoenix Vehicle Delivery{" "}
              <span className="text-[#f97316]">FAQ</span>
            </h2>

            <div className="mx-auto max-w-3xl space-y-6">
              {[
                {
                  q: "Do you offer same-day vehicle delivery in Phoenix?",
                  a: "Yes. Same-day and emergency delivery may be available depending on distance, schedule, and route availability. Text 480-742-8553 with pickup and drop off addresses for the fastest quote.",
                },
                {
                  q: "Do you use trailers or tow trucks in Phoenix?",
                  a: "No. Freedom Line Freight Express provides direct drive-away service only. Your car, SUV, or small truck is driven directly to its destination. No towing and no trailers.",
                },
                {
                  q: "What types of vehicles do you transport in Phoenix?",
                  a: "Cars, SUVs, and small trucks that run and drive. The vehicle must start, stop, steer safely, and be road ready for drive-away service.",
                },
                {
                  q: "Do you offer key and title runner service in Phoenix?",
                  a: "Yes. I can help with key, title, and document delivery for dealerships, repair shops, businesses, and private customers when schedule and route allow.",
                },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="bg-[#0b0f19] p-6 rounded-xl border border-white/10"
                >
                  <h3 className="font-bold text-lg text-white mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0b0f19]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <p className="text-[#f97316] font-bold uppercase tracking-widest mb-3">
                  Service area
                </p>

                <h2 className="mb-6 text-3xl md:text-5xl font-extrabold">
                  Serving <span className="text-[#f97316]">Phoenix</span> and
                  nearby routes
                </h2>

                <p className="mb-4 text-gray-300 text-lg">
                  Based in San Tan Valley, I run Phoenix vehicle delivery routes
                  and surrounding Arizona cities including Mesa, Chandler,
                  Gilbert, Scottsdale, Tempe, Queen Creek, and Downtown Phoenix,
                  Sky Harbor Airport, Arcadia, Maryvale, Ahwatukee, Camelback
                  Corridor, North Phoenix, and South Phoenix.
                </p>

                <p className="text-gray-400 mb-8">
                  Need a vehicle, auto parts, package, keys, title, or documents
                  delivered in Phoenix? I handle scheduled pickups and urgent
                  same-day requests when available.
                </p>

                <p className="mt-4 text-gray-300">
                  Want to understand how fast delivery works in Arizona?{" "}
                  <Link
                    to="/arizona-delivery-guide"
                    className="text-orange-500 hover:underline"
                  >
                    Read our Arizona delivery guide
                  </Link>
                  .
                </p>

                <div className="flex flex-wrap gap-3 text-sm text-gray-300 mt-8">
                  {[
                    "Downtown Phoenix",
                    "Sky Harbor Airport",
                    "Arcadia",
                    "Maryvale",
                    "Ahwatukee",
                    "Camelback Corridor",
                    "North Phoenix",
                    "South Phoenix",
                    "Central Phoenix",
                  ].map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className={cardClass}>
                <h2 className="mb-6 text-2xl font-bold text-[#f97316]">
                  Request a Phoenix Quote
                </h2>

                <p className="mb-6 text-gray-300">
                  Get a fast quote for vehicle pickup and delivery in Phoenix
                  AZ. Most quotes are reviewed quickly when you send the pickup
                  and drop off details.
                </p>

                <div className="space-y-4 text-gray-300 mb-8">
                  <p className="flex items-center gap-3">
                    <Phone className="text-[#f97316]" size={18} />
                    <span>Text: 480-742-8553</span>
                  </p>
                  <p>Email: dispatch@flfreightco.com</p>
                  <p>Website: flfreightco.com</p>
                </div>

                <Link
                  to="/request-pickup"
                  className="block w-full text-center bg-[#f97316] px-6 py-4 rounded-xl font-bold hover:bg-orange-500 transition-all"
                >
                  Get Free Phoenix Quote
                </Link>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-4xl text-center">
              <h2 className="mb-6 text-2xl font-bold text-white">
                Nearby Cities We Serve
              </h2>

              <p className="mb-6 text-gray-300 text-center max-w-2xl mx-auto">
                I provide vehicle delivery, auto parts courier service, key and
                title runner service, and drive-away transport across Phoenix
                and nearby cities including Mesa, Chandler, Gilbert, Scottsdale,
                Tempe, and Queen Creek. Services are available for dealerships,
                repair shops, and individuals needing fast, direct delivery.
              </p>

              <p className="flex flex-wrap justify-center gap-4 text-gray-300">
                <Link to="/" className="hover:text-[#f97316] transition-colors">
                  Arizona Delivery Home
                </Link>
                <span>•</span>
                <Link
                  to="/service-areas"
                  className="hover:text-[#f97316] transition-colors"
                >
                  All Service Areas
                </Link>
                <span>•</span>
                <Link
                  to="/tempe-delivery"
                  className="hover:text-[#f97316] transition-colors"
                >
                  Tempe
                </Link>
                <span>•</span>
                <Link
                  to="/mesa-delivery"
                  className="hover:text-[#f97316] transition-colors"
                >
                  Mesa
                </Link>
                <span>•</span>
                <Link
                  to="/scottsdale-delivery"
                  className="hover:text-[#f97316] transition-colors"
                >
                  Scottsdale
                </Link>
                <span>•</span>
                <Link
                  to="/chandler-delivery"
                  className="hover:text-[#f97316] transition-colors"
                >
                  Chandler
                </Link>
                <span>•</span>
                <Link
                  to="/gilbert-delivery"
                  className="hover:text-[#f97316] transition-colors"
                >
                  Gilbert
                </Link>
                <span>•</span>
                <Link
                  to="/queen-creek-delivery"
                  className="hover:text-[#f97316] transition-colors"
                >
                  Queen Creek
                </Link>
                <span>•</span>
                <Link
                  to="/arizona-delivery-guide"
                  className="hover:text-[#f97316] transition-colors"
                >
                  Delivery Guide
                </Link>
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-white/10 bg-[#111827] p-8">
              <h2 className="mb-4 text-center text-2xl font-bold text-white">
                Phoenix Arizona Service Map
              </h2>

              <p className="mb-6 text-center text-gray-400">
                Direct drive-away service throughout Phoenix and nearby Phoenix
                routes.
              </p>

              <div className="overflow-hidden rounded-xl border border-white/10">
                <iframe
                  title="Phoenix Arizona Map"
                  src="https://www.google.com/maps?q=Phoenix,AZ&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-[#f97316] py-24 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />

          <div className="relative max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">
              Need a Vehicle Delivered in Phoenix?
            </h2>

            <p className="text-orange-100 text-lg mb-8">
              Skip towing and trailer delays. Get direct drive-away pickup with
              clear text communication.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center bg-white text-[#f97316] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300"
              >
                Request Phoenix Pickup
                <ArrowRight className="ml-2" size={20} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-orange-500 text-white px-6 py-3 rounded-md font-bold hover:bg-orange-600 transition-colors"
              >
                Text Me for Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
