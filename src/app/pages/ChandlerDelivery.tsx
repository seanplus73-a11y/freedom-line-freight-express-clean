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
} from "lucide-react";
  FaCar → Car
FaClock → Clock
FaShieldAlt → ShieldCheck
FaPhone → Phone
FaMapMarkerAlt → MapPin
FaCheckCircle → CheckCircle
FaStore → Store
FaTools → Wrench
FaFileAlt → FileText
FaRoute → Route
FaHome → Home
FaArrowRight → ArrowRight
export default function ChandlerDelivery() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Freedom Line Freight Express",
    image: "https://www.flfreightco.com/logo.png",
    url: "https://www.flfreightco.com/chandler-delivery",
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
    areaServed: {
      "@type": "City",
      name: "Chandler",
      containedIn: { "@type": "State", name: "Arizona" },
    },
    description:
      "Direct drive-away vehicle pickup and delivery service in Chandler, AZ. Cars, SUVs, and small trucks that run and drive. No trailers, no towing. Same-day available depending on route and schedule.",
    openingHours: "Mo-Su 07:00-19:00",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Vehicle Pickup and Delivery Service",
    provider: {
      "@type": "LocalBusiness",
      name: "Freedom Line Freight Express",
    },
    areaServed: { "@type": "City", name: "Chandler" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Chandler Delivery Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Car Drive-Away Service Chandler",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dealer Vehicle Delivery Chandler",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Auto Parts Delivery Chandler",
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
        name: "Do you offer same-day vehicle delivery in Chandler?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Same-day vehicle pickup and delivery in Chandler, AZ may be available depending on distance, schedule, and route availability. Text 480-742-8553 for current availability.",
        },
      },
      {
        "@type": "Question",
        name: "Do you use trailers or tow trucks in Chandler?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Freedom Line Freight Express provides direct drive-away service only. Your vehicle is driven directly to its destination. No towing and no trailers.",
        },
      },
      {
        "@type": "Question",
        name: "What types of vehicles do you transport in Chandler?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We transport cars, SUVs, and small trucks that run and drive. Vehicles must be safe to operate with working brakes, steering, and proper road readiness.",
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
          Vehicle Pickup and Delivery Chandler AZ | Freedom Line Freight Express
        </title>
        <meta
          name="description"
          content="Chandler AZ vehicle pickup and delivery. Direct drive-away service for cars, SUVs, and small trucks that run and drive. No towing, no trailers. Same-day available depending on route."
        />
        <link
          rel="canonical"
          href="https://www.flfreightco.com/chandler-delivery"
        />
        <meta
          property="og:title"
          content="Vehicle Pickup and Delivery in Chandler AZ"
        />
        <meta
          property="og:description"
          content="Direct drive-away service for vehicles in Chandler. No towing. No trailers. Fast, reliable, owner-operated service."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.flfreightco.com/chandler-delivery"
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
          Chandler same-day pickup available depending on schedule and route
        </section>

        <header className="relative overflow-hidden border-b border-white/10 px-6 py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/15 via-transparent to-black" />
          <div className="absolute top-10 right-10 w-[420px] h-[420px] bg-[#f97316]/20 rounded-full blur-3xl" />

          <div className="relative mx-auto max-w-6xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full text-sm mb-7">
              <FaMapMarkerAlt className="text-[#f97316]" />
              Chandler Arizona Vehicle Delivery
            </div>

            <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Vehicle Pickup and Delivery in{" "}
              <span className="text-[#f97316]">Chandler AZ</span>
            </h1>

            <p className="max-w-3xl text-xl md:text-2xl text-gray-200 mb-4 font-semibold">
              Need a car moved safely without towing or trailers?
            </p>

            <p className="max-w-4xl text-lg text-gray-400 mb-6">
              Freedom Line Freight Express provides direct drive-away service
              for cars, SUVs, and small trucks in Chandler. If it runs and
              drives, I can help move it from dealer to home, auction to shop,
              repair shop to customer, or across town.
            </p>

            <p className="max-w-4xl text-gray-400 mb-10">
              Serving Chandler areas including Downtown Chandler, Ocotillo, Sun
              Lakes, Chandler Heights, and nearby routes to Gilbert, Mesa,
              Tempe, Queen Creek, and Phoenix.
            </p>

            <div className="flex flex-wrap gap-4 text-gray-300 text-sm mb-10">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-[#f97316]" />
                No towing
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-[#f97316]" />
                No trailer
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-[#f97316]" />
                Direct drive-away
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-[#f97316]" />
                Text updates
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center bg-[#f97316] px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-orange-500/20"
              >
                Get Chandler Quote in 5 to 10 Minutes
                <FaArrowRight className="ml-2" />
              </Link>

              <a
                href="sms:4807428553"
                className="inline-flex items-center justify-center border border-[#f97316] text-[#f97316] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#f97316] hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FaPhone className="mr-2" />
                Text 480-742-8553
              </a>
            </div>
          </div>
        </header>

        <section className="py-20 bg-[#111827]">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <p className="text-[#f97316] font-bold uppercase tracking-widest mb-3">
                  Chandler drive-away service
                </p>

                <h2 className="mb-6 text-3xl md:text-5xl font-extrabold leading-tight">
                  Fast Chandler Vehicle{" "}
                  <span className="text-[#f97316]">Drive-Away Service</span>
                </h2>

                <p className="mb-4 text-gray-300 text-lg">
                  Need a car moved from Chandler Auto Mall to your driveway?
                  Picked up from an auction and delivered to a shop? Moved from
                  a seller to a buyer?
                </p>

                <p className="mb-6 text-gray-400">
                  I specialize in direct point-to-point drive-away for
                  operational vehicles. No waiting for a full trailer load. No
                  confusing handoffs. Your vehicle is driven directly where it
                  needs to go.
                </p>

                <p className="text-gray-400">
                  Most local Chandler deliveries start around $85 depending on
                  distance, route, service type, and schedule availability.
                </p>
              </div>

              <div className={cardClass}>
                <h2 className="mb-6 text-2xl font-bold text-[#f97316]">
                  Chandler Services
                </h2>

                <ul className="space-y-4 text-gray-300">
                  {[
                    "Vehicle pickup and delivery for cars, SUVs, and small trucks",
                    "Dealer and auction vehicle transport",
                    "Car buyer and seller delivery",
                    "Repair shop vehicle movement",
                    "Auto parts delivery",
                    "Packages and document delivery",
                    "Same-day local delivery when available",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FaCheckCircle className="text-[#f97316] mt-1 shrink-0" />
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
                Who Uses Chandler Vehicle Delivery?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                This service is built for customers and businesses that need a
                vehicle moved directly, safely, and without towing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className={cardClass}>
                <FaHome className="text-[#f97316] mb-4 text-4xl" />
                <h3 className="font-bold text-xl mb-3">Car Buyers</h3>
                <p className="text-gray-400">
                  Bought a vehicle and need it delivered to your home, shop, or
                  another local address.
                </p>
              </div>

              <div className={cardClass}>
                <FaTools className="text-[#f97316] mb-4 text-4xl" />
                <h3 className="font-bold text-xl mb-3">Repair Shops</h3>
                <p className="text-gray-400">
                  Move customer vehicles between shops, homes, dealerships, or
                  inspection locations.
                </p>
              </div>

              <div className={cardClass}>
                <FaStore className="text-[#f97316] mb-4 text-4xl" />
                <h3 className="font-bold text-xl mb-3">Dealerships</h3>
                <p className="text-gray-400">
                  Help with dealer trades, customer delivery, auction pickup,
                  and local inventory movement.
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
                Why Chandler Chooses{" "}
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
                <FaClock className="text-4xl text-[#f97316] mb-4" />
                <h3 className="mb-3 text-xl font-bold">Fast and Flexible</h3>
                <p className="text-gray-400 leading-relaxed">
                  Quick Chandler pickups, dependable scheduling, and clear text
                  updates from pickup to drop off.
                </p>
              </div>

              <div className={cardClass}>
                <FaShieldAlt className="text-4xl text-[#f97316] mb-4" />
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
                  More Local Delivery Options in Chandler
                </h2>

                <p className="text-gray-400 mb-6 text-lg">
                  Vehicle delivery is the main service, but I can also help with
                  local business transport, auto parts, documents, and small
                  packages when schedule and route allow.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/chandler-auto-parts-delivery"
                    className="inline-flex items-center text-[#f97316] font-bold hover:text-orange-400"
                  >
                    Chandler auto parts delivery
                    <FaArrowRight className="ml-2" />
                  </Link>

                  <Link
                    to="/package-document-delivery"
                    className="inline-flex items-center text-[#f97316] font-bold hover:text-orange-400"
                  >
                    Package and document delivery
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className={cardClass}>
                  <FaTools className="text-[#f97316] mb-4 text-3xl" />
                  <h3 className="font-bold text-lg mb-2">Auto Parts</h3>
                  <p className="text-gray-400">
                    Parts pickup and delivery for shops, mechanics, and
                    customers.
                  </p>
                </div>

                <div className={cardClass}>
                  <FaFileAlt className="text-[#f97316] mb-4 text-3xl" />
                  <h3 className="font-bold text-lg mb-2">Documents</h3>
                  <p className="text-gray-400">
                    Contracts, paperwork, forms, and time-sensitive documents.
                  </p>
                </div>

                <div className={cardClass}>
                  <FaRoute className="text-[#f97316] mb-4 text-3xl" />
                  <h3 className="font-bold text-lg mb-2">Local Routes</h3>
                  <p className="text-gray-400">
                    Chandler to Mesa, Gilbert, Queen Creek, Tempe, or Phoenix.
                  </p>
                </div>

                <div className={cardClass}>
                  <FaStore className="text-[#f97316] mb-4 text-3xl" />
                  <h3 className="font-bold text-lg mb-2">Business Support</h3>
                  <p className="text-gray-400">
                    Direct pickup and delivery for local business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#111827] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-center text-3xl md:text-5xl font-extrabold">
              Chandler Vehicle Delivery{" "}
              <span className="text-[#f97316]">FAQ</span>
            </h2>

            <div className="mx-auto max-w-3xl space-y-6">
              {[
                {
                  q: "Do you offer same-day vehicle delivery in Chandler?",
                  a: "Yes. Same-day and emergency delivery may be available depending on distance, schedule, and route availability. Text 480-742-8553 with pickup and drop off addresses for the fastest quote.",
                },
                {
                  q: "Do you use trailers or tow trucks in Chandler?",
                  a: "No. Freedom Line Freight Express provides direct drive-away service only. Your car, SUV, or small truck is driven directly to its destination. No towing and no trailers.",
                },
                {
                  q: "What types of vehicles do you transport in Chandler?",
                  a: "Cars, SUVs, and small trucks that run and drive. The vehicle must start, stop, steer safely, and be road ready for drive-away service.",
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
                  Serving <span className="text-[#f97316]">Chandler</span> and
                  the East Valley
                </h2>

                <p className="mb-4 text-gray-300 text-lg">
                  Based in San Tan Valley, I run in Chandler and nearby
                  communities including Phoenix, Mesa, Gilbert, Queen Creek,
                  Tempe, Sun Lakes, Ocotillo, and Scottsdale.
                </p>

                <p className="text-gray-400 mb-8">
                  Need a vehicle, auto parts, package, or documents moved in or
                  around Chandler? I handle scheduled pickups and urgent
                  same-day requests when available.
                </p>

                <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                  {[
                    "Downtown Chandler",
                    "Ocotillo",
                    "Sun Lakes",
                    "Chandler Heights",
                    "Mesa",
                    "Gilbert",
                    "Queen Creek",
                    "Tempe",
                    "Phoenix",
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
                  Request a Chandler Quote
                </h2>

                <p className="mb-6 text-gray-300">
                  Get a fast quote for vehicle pickup and delivery in Chandler
                  AZ. Most quotes are reviewed quickly when you send the pickup
                  and drop off details.
                </p>

                <div className="space-y-4 text-gray-300 mb-8">
                  <p className="flex items-center gap-3">
                    <FaPhone className="text-[#f97316]" />
                    <span>Text: 480-742-8553</span>
                  </p>
                  <p>Email: dispatch@flfreightco.com</p>
                  <p>Website: flfreightco.com</p>
                </div>

                <Link
                  to="/request-pickup"
                  className="block w-full text-center bg-[#f97316] px-6 py-4 rounded-xl font-bold hover:bg-orange-500 transition-all"
                >
                  Get Free Chandler Quote
                </Link>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-4xl text-center">
              <h2 className="mb-6 text-2xl font-bold text-white">
                Nearby Cities We Serve
              </h2>

              <p className="flex flex-wrap justify-center gap-4 text-gray-300">
                <Link
                  to="/phoenix-delivery"
                  className="hover:text-[#f97316] transition-colors"
                >
                  Phoenix
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
                  to="/san-tan-valley-delivery"
                  className="hover:text-[#f97316] transition-colors"
                >
                  San Tan Valley
                </Link>
                <span>•</span>
                <Link
                  to="/business-transport"
                  className="hover:text-[#f97316] transition-colors"
                >
                  Business Transport
                </Link>
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-white/10 bg-[#111827] p-8">
              <h2 className="mb-4 text-center text-2xl font-bold text-white">
                Chandler Arizona Service Map
              </h2>

              <p className="mb-6 text-center text-gray-400">
                Direct drive-away service throughout Chandler and surrounding
                East Valley communities.
              </p>

              <div className="overflow-hidden rounded-xl border border-white/10">
                <iframe
                  title="Chandler Arizona Map"
                  src="https://www.google.com/maps?q=Chandler,AZ&output=embed"
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
              Need a Vehicle Delivered in Chandler?
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
                Request Chandler Pickup
                <FaArrowRight className="ml-2" />
              </Link>

              <a
                href="sms:4807428553"
                className="inline-flex items-center justify-center bg-black/20 text-white border border-white/40 px-8 py-4 rounded-xl font-bold hover:bg-black/30 transition-all duration-300"
              >
                Text 480-742-8553
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
