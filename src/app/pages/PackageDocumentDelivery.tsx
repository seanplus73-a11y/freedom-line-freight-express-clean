import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  FileText,
  Package,
  Clock,
  Wrench,
  ShieldCheck,
  CheckCircle,
  MapPin,
  Building2,
  ShoppingBag,
  Home,
  MessageSquare,
  Truck,
  Zap,
  Route,
  Star,
} from "lucide-react";

export default function PackageDocumentDelivery() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Freedom Line Freight Express",
    url: "https://www.flfreightco.com/package-document-delivery",
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
      "Package and document delivery service in Phoenix and East Valley AZ. Direct local delivery for documents, small packages, auto parts, and time-sensitive items.",
    openingHours: "Mo-Su 07:00-19:00",
  };

  const cardClass =
    "bg-[#111827]/90 p-6 rounded-2xl border border-white/10 hover:border-[#f97316] hover:shadow-[0_0_30px_rgba(249,115,22,0.18)] hover:-translate-y-1 transition-all duration-300";

  return (
    <>
      <Helmet>
        <title>
          Package and Document Delivery Phoenix AZ | Freedom Line Freight Express
        </title>
        <meta
          name="description"
          content="Fast local package and document delivery in Phoenix, Mesa, Chandler, Gilbert, Queen Creek, Tempe, Scottsdale, and nearby Arizona areas. Direct delivery with text updates."
        />
        <link
          rel="canonical"
          href="https://www.flfreightco.com/package-document-delivery"
        />
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      </Helmet>

      <main className="bg-[#0b0f19] text-white overflow-hidden">
        <section className="bg-[#f97316] text-black text-center py-2 text-sm font-semibold">
          Same-day pickup available depending on schedule and route
        </section>

        <section className="relative overflow-hidden px-6 pt-24 pb-28 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/15 via-transparent to-black" />
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#f97316]/20 rounded-full blur-3xl" />

          <div className="relative max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full text-sm mb-7">
              <ShieldCheck className="text-[#f97316]" size={18} />
              Deaf-owned • Local • Direct delivery
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Package and Document Delivery in{" "}
              <span className="text-[#f97316]">Phoenix AZ</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-4 font-semibold">
              Need documents, packages, auto parts, or time-sensitive items
              moved today?
            </p>

            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-9">
              Freedom Line Freight Express provides direct local delivery across
              Phoenix, Mesa, Chandler, Gilbert, Queen Creek, San Tan Valley,
              Tempe, Scottsdale, Casa Grande, and nearby Arizona areas.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-gray-300 text-sm mb-10">
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#f97316]" />
                Direct delivery
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
                Same-day available
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center bg-[#f97316] px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300"
              >
                Request Pickup
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
                Local delivery support
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                What We Deliver
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                If it fits safely in a vehicle and needs direct local delivery,
                we can help.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className={cardClass}>
                <FileText className="text-[#f97316] mb-4" size={36} />
                <h3 className="font-bold text-xl mb-3">Documents</h3>
                <p className="text-gray-400">
                  Contracts, business paperwork, legal papers, forms, and urgent
                  documents.
                </p>
              </div>

              <div className={cardClass}>
                <Package className="text-[#f97316] mb-4" size={36} />
                <h3 className="font-bold text-xl mb-3">Small Packages</h3>
                <p className="text-gray-400">
                  Boxes, personal items, small business orders, and local
                  customer deliveries.
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
                <Clock className="text-[#f97316] mb-4" size={36} />
                <h3 className="font-bold text-xl mb-3">
                  Time-Sensitive Items
                </h3>
                <p className="text-gray-400">
                  Direct delivery when timing matters and schedule availability
                  allows.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0b0f19]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-[#f97316] font-bold uppercase tracking-widest mb-3">
                Real examples
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Common Delivery Needs
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                These are the types of local deliveries where direct service can
                save time and reduce confusion.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className={cardClass}>
                <Zap className="text-[#f97316] mb-4" size={34} />
                <h3 className="font-bold text-xl mb-3">
                  Urgent Paperwork
                </h3>
                <p className="text-gray-400">
                  Same-day document pickup and drop off when timing matters.
                </p>
              </div>

              <div className={cardClass}>
                <Wrench className="text-[#f97316] mb-4" size={34} />
                <h3 className="font-bold text-xl mb-3">
                  Auto Parts to Shops
                </h3>
                <p className="text-gray-400">
                  Help repair shops and customers keep jobs moving without
                  delays.
                </p>
              </div>

              <div className={cardClass}>
                <ShoppingBag className="text-[#f97316] mb-4" size={34} />
                <h3 className="font-bold text-xl mb-3">
                  Marketplace Pickup
                </h3>
                <p className="text-gray-400">
                  Local pickup support for Facebook Marketplace, OfferUp, and
                  private sales.
                </p>
              </div>

              <div className={cardClass}>
                <Truck className="text-[#f97316] mb-4" size={34} />
                <h3 className="font-bold text-xl mb-3">
                  Business Deliveries
                </h3>
                <p className="text-gray-400">
                  Direct delivery for local businesses, dealers, and service
                  providers.
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
                How It Works
              </h2>
              <p className="text-gray-400">
                Clear steps, direct communication, and no unnecessary handoffs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className={cardClass + " text-center"}>
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f97316] text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Request Pickup</h3>
                <p className="text-gray-400">
                  Send pickup location, delivery location, item details, and
                  preferred time.
                </p>
              </div>

              <div className={cardClass + " text-center"}>
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f97316] text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Direct Pickup</h3>
                <p className="text-gray-400">
                  Your item is picked up directly with clear communication
                  before delivery.
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
                Who this helps
              </p>

              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                Local Delivery for Customers and Businesses
              </h2>

              <p className="text-gray-400 mb-8 text-lg">
                Freedom Line Freight Express helps local customers and
                businesses that need reliable direct delivery without app
                confusion, delays, or unclear handoffs.
              </p>

              <Link
                to="/request-pickup"
                className="inline-flex items-center bg-[#f97316] text-white px-7 py-4 rounded-xl font-bold hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300"
              >
                Get a Free Quote
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className={cardClass}>
                <Building2 className="text-[#f97316] mb-4" size={30} />
                <h3 className="font-bold text-lg mb-2">Small Businesses</h3>
                <p className="text-gray-400">
                  Local delivery for business items, customer orders, and
                  paperwork.
                </p>
              </div>

              <div className={cardClass}>
                <Wrench className="text-[#f97316] mb-4" size={30} />
                <h3 className="font-bold text-lg mb-2">Repair Shops</h3>
                <p className="text-gray-400">
                  Parts pickup and delivery for shops, mechanics, and
                  dealerships.
                </p>
              </div>

              <div className={cardClass}>
                <ShoppingBag className="text-[#f97316] mb-4" size={30} />
                <h3 className="font-bold text-lg mb-2">Marketplace Buyers</h3>
                <p className="text-gray-400">
                  Help with local pickup and delivery for small items.
                </p>
              </div>

              <div className={cardClass}>
                <Home className="text-[#f97316] mb-4" size={30} />
                <h3 className="font-bold text-lg mb-2">Families</h3>
                <p className="text-gray-400">
                  Simple local delivery when you need help moving important
                  items.
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
                Direct Delivery Without App Confusion
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
                    Direct delivery with no unnecessary handoffs
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="text-[#f97316] shrink-0" />
                    Same-day availability depending on route and schedule
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="text-[#f97316] shrink-0" />
                    Clear communication from pickup to delivery
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
              Need Something Delivered Today?
            </h2>

            <p className="text-orange-100 text-lg mb-8">
              Skip delays. Get direct pickup with real communication.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center bg-white text-[#f97316] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300"
              >
                Request Pickup
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
