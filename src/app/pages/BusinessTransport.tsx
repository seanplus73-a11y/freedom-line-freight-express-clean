import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Building2,
  Car,
  ClipboardList,
  Package,
  ShieldCheck,
  CheckCircle,
  MapPin,
  MessageSquare,
  Wrench,
  Store,
  Route,
  Clock,
  Star,
} from "lucide-react";

export default function BusinessTransport() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Freedom Line Freight Express",
    url: "https://www.flfreightco.com/business-transport",
    telephone: "+1-480-742-8553",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Tan Valley",
      addressRegion: "AZ",
      postalCode: "85144",
      addressCountry: "US",
    },
    areaServed: [
      "Phoenix",
      "Mesa",
      "Chandler",
      "Gilbert",
      "Queen Creek",
      "San Tan Valley",
      "Scottsdale",
      "Tempe",
      "Casa Grande",
    ],
    description:
      "Business transport service in Phoenix and East Valley AZ. Direct delivery support for dealerships, repair shops, small businesses, documents, packages, auto parts, and business items.",
    openingHours: "Mo-Su 07:00-19:00",
  };

  const cardClass =
    "bg-[#111827]/90 p-6 rounded-2xl border border-white/10 hover:border-[#f97316] hover:shadow-[0_0_30px_rgba(249,115,22,0.18)] hover:-translate-y-1 transition-all duration-300";

  return (
    <>
      <Helmet>
        <title>
          Business Transport Service Phoenix AZ | Freedom Line Freight Express
        </title>
        <meta
          name="description"
          content="Business transport service in Phoenix, Mesa, Chandler, Gilbert, Queen Creek, Tempe, Scottsdale, and nearby Arizona areas. Direct delivery for dealerships, repair shops, documents, packages, and business items."
        />
        <link
          rel="canonical"
          href="https://www.flfreightco.com/business-transport"
        />
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      </Helmet>

      <main className="bg-[#0b0f19] text-white overflow-hidden">
        <section className="bg-[#f97316] text-black text-center py-2 text-sm font-semibold">
          Direct business transport available depending on schedule and route
        </section>

        <section className="relative overflow-hidden px-6 pt-24 pb-28 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/15 via-transparent to-black" />
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#f97316]/20 rounded-full blur-3xl" />

          <div className="relative max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full text-sm mb-7">
              <ShieldCheck className="text-[#f97316]" size={18} />
              Owner-operated • Local • Direct business delivery
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Business Transport Service in{" "}
              <span className="text-[#f97316]">Phoenix AZ</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-4 font-semibold">
              Need business items, auto parts, documents, or vehicles moved
              safely?
            </p>

            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-9">
              Freedom Line Freight Express provides direct business transport
              support for dealerships, repair shops, small businesses, local
              sellers, and customers across Phoenix and the East Valley.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-gray-300 text-sm mb-10">
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#f97316]" />
                Direct pickup
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#f97316]" />
                No random app drivers
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#f97316]" />
                Text updates
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#f97316]" />
                Flexible scheduling
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center bg-[#f97316] px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300"
              >
                Request Business Transport
                <ArrowRight className="ml-2" size={20} />
              </Link>

              <a
                href="sms:4807428553"
                className="inline-flex items-center justify-center border border-[#f97316] text-[#f97316] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#f97316] hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <MessageSquare className="mr-2" size={20} />
                Text 480-742-8553
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#111827]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#f97316] font-bold uppercase tracking-widest mb-3">
                Business delivery support
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                What We Transport
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Direct local transport for business items that need safe
                handling, clear communication, and dependable pickup.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className={cardClass}>
                <Car className="text-[#f97316] mb-4" size={36} />
                <h3 className="font-bold text-xl mb-3">Vehicles</h3>
                <p className="text-gray-400">
                  Drive-away vehicle pickup and delivery for operable cars,
                  SUVs, and small trucks.
                </p>
              </div>

              <div className={cardClass}>
                <Wrench className="text-[#f97316] mb-4" size={36} />
                <h3 className="font-bold text-xl mb-3">Auto Parts</h3>
                <p className="text-gray-400">
                  Parts delivery for repair shops, mechanics, dealerships, and
                  local customers.
                </p>
              </div>

              <div className={cardClass}>
                <ClipboardList className="text-[#f97316] mb-4" size={36} />
                <h3 className="font-bold text-xl mb-3">Documents</h3>
                <p className="text-gray-400">
                  Contracts, paperwork, forms, business documents, and
                  time-sensitive items.
                </p>
              </div>

              <div className={cardClass}>
                <Package className="text-[#f97316] mb-4" size={36} />
                <h3 className="font-bold text-xl mb-3">Business Items</h3>
                <p className="text-gray-400">
                  Small packages, supplies, equipment, and local business
                  delivery needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0b0f19]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#f97316] font-bold uppercase tracking-widest mb-3">
                Real business examples
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Who This Service Helps
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Built for local businesses that need dependable direct delivery
                without delays, handoffs, or unclear communication.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className={cardClass}>
                <Building2 className="text-[#f97316] mb-4" size={34} />
                <h3 className="font-bold text-xl mb-3">Dealerships</h3>
                <p className="text-gray-400">
                  Help moving customer vehicles, dealer documents, and related
                  business items.
                </p>
              </div>

              <div className={cardClass}>
                <Wrench className="text-[#f97316] mb-4" size={34} />
                <h3 className="font-bold text-xl mb-3">Repair Shops</h3>
                <p className="text-gray-400">
                  Parts pickup and delivery support to keep repair jobs moving.
                </p>
              </div>

              <div className={cardClass}>
                <Store className="text-[#f97316] mb-4" size={34} />
                <h3 className="font-bold text-xl mb-3">Small Businesses</h3>
                <p className="text-gray-400">
                  Delivery support for local stores, service providers, and
                  business customers.
                </p>
              </div>

              <div className={cardClass}>
                <Route className="text-[#f97316] mb-4" size={34} />
                <h3 className="font-bold text-xl mb-3">Local Routes</h3>
                <p className="text-gray-400">
                  Direct pickup and drop off for local business transport
                  across Arizona areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#111827]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#f97316] font-bold uppercase tracking-widest mb-3">
                Simple process
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                How Business Transport Works
              </h2>
              <p className="text-gray-400">
                Simple steps, direct communication, and reliable pickup.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className={cardClass + " text-center"}>
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f97316] text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Send Details</h3>
                <p className="text-gray-400">
                  Share pickup location, delivery location, item type, vehicle
                  details, and preferred time.
                </p>
              </div>

              <div className={cardClass + " text-center"}>
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f97316] text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Direct Pickup</h3>
                <p className="text-gray-400">
                  I review the route, confirm details, and pick up directly
                  without unnecessary handoffs.
                </p>
              </div>

              <div className={cardClass + " text-center"}>
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f97316] text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Delivered Safely</h3>
                <p className="text-gray-400">
                  Delivery is completed with updates from pickup to drop off.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0b0f19]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#f97316] font-bold uppercase tracking-widest mb-3">
                Better than random delivery apps
              </p>

              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                Direct Support for Your Business
              </h2>

              <p className="text-gray-400 mb-8 text-lg">
                Your business needs reliability, not confusion. Freedom Line
                Freight Express gives you owner-operated delivery with clear
                text communication and direct pickup.
              </p>

              <Link
                to="/request-pickup"
                className="inline-flex items-center bg-[#f97316] text-white px-7 py-4 rounded-xl font-bold hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300"
              >
                Get a Business Quote
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className={cardClass}>
                <Clock className="text-[#f97316] mb-4" size={30} />
                <h3 className="font-bold text-lg mb-2">Same-Day Available</h3>
                <p className="text-gray-400">
                  Service may be available depending on route, distance, and
                  schedule.
                </p>
              </div>

              <div className={cardClass}>
                <ShieldCheck className="text-[#f97316] mb-4" size={30} />
                <h3 className="font-bold text-lg mb-2">Clear Communication</h3>
                <p className="text-gray-400">
                  Text updates help you know what is happening from start to
                  finish.
                </p>
              </div>

              <div className={cardClass}>
                <Route className="text-[#f97316] mb-4" size={30} />
                <h3 className="font-bold text-lg mb-2">Direct Routes</h3>
                <p className="text-gray-400">
                  Direct pickup and drop off without confusing multi-stop
                  handoffs.
                </p>
              </div>

              <div className={cardClass}>
                <Building2 className="text-[#f97316] mb-4" size={30} />
                <h3 className="font-bold text-lg mb-2">Business Friendly</h3>
                <p className="text-gray-400">
                  Support for dealers, shops, small businesses, and local
                  customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#111827]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#f97316] font-bold uppercase tracking-widest mb-3">
                Why choose us
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Business Transport Without App Confusion
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Owner-operated service focused on reliable communication and
                direct pickup.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className={cardClass}>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex gap-3">
                    <CheckCircle className="text-[#f97316] shrink-0" />
                    Direct pickup and delivery for business needs
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="text-[#f97316] shrink-0" />
                    Same-day availability depending on route and schedule
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="text-[#f97316] shrink-0" />
                    Clear text communication from pickup to delivery
                  </li>
                </ul>
              </div>

              <div className={cardClass}>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex gap-3">
                    <CheckCircle className="text-[#f97316] shrink-0" />
                    Local Phoenix and East Valley coverage
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="text-[#f97316] shrink-0" />
                    No random app-based drivers
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="text-[#f97316] shrink-0" />
                    Deaf-owned business with clear written communication
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0b0f19]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <MapPin className="text-[#f97316] mx-auto mb-4" size={40} />
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
              Service Areas
            </h2>
            <p className="text-gray-400 text-lg">
              Serving Phoenix, Mesa, Chandler, Gilbert, Queen Creek, San Tan
              Valley, Scottsdale, Tempe, Casa Grande, and nearby Arizona areas.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-gray-300">
              {[
                "Phoenix",
                "Mesa",
                "Chandler",
                "Gilbert",
                "Queen Creek",
                "San Tan Valley",
                "Scottsdale",
                "Tempe",
                "Casa Grande",
              ].map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-[#f97316] py-24 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />

          <div className="relative max-w-4xl mx-auto px-6">
            <Star className="mx-auto mb-5 text-white" size={42} />
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">
              Need Business Transport Support?
            </h2>

            <p className="text-orange-100 text-lg mb-8">
              Get direct pickup, clear updates, and reliable local transport for
              your business.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center bg-white text-[#f97316] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300"
              >
                Request Business Transport
                <ArrowRight className="ml-2" size={20} />
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
