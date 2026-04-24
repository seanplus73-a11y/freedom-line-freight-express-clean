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
      "Same-day package and document delivery service in Phoenix and East Valley AZ. Direct local delivery for documents, small packages, auto parts, and time-sensitive items.",
    openingHours: "Mo-Su 07:00-19:00",
  };

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

        <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#f97316]/20 rounded-full blur-3xl -z-10" />

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm mb-6">
            <ShieldCheck className="text-[#f97316]" size={18} />
            Deaf-owned • Local • Direct delivery
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Package and Document Delivery in{" "}
            <span className="text-[#f97316]">Phoenix AZ</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Need documents, packages, auto parts, or time-sensitive items moved
            today?
          </p>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Freedom Line Freight Express provides direct local delivery across
            Phoenix, Mesa, Chandler, Gilbert, Queen Creek, San Tan Valley,
            Tempe, Scottsdale, Casa Grande, and nearby Arizona areas.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-gray-300 text-sm mb-10">
            <span>✔ Direct delivery</span>
            <span>✔ No random app drivers</span>
            <span>✔ Text updates</span>
            <span>✔ Same-day available</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-pickup"
              className="inline-flex items-center justify-center bg-[#f97316] px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-500 transition"
            >
              Request Pickup
              <ArrowRight className="ml-2" size={20} />
            </Link>

            <a
              href="sms:4807428553"
              className="inline-flex items-center justify-center border border-[#f97316] text-[#f97316] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#f97316] hover:text-white transition"
            >
              <MessageSquare className="mr-2" size={20} />
              Text 480-742-8553
            </a>
          </div>
        </section>

        <section className="bg-[#111827] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              What We Deliver
            </h2>

            <p className="text-gray-400 text-center mb-14">
              If it fits safely in a vehicle and needs direct local delivery, we
              can help.
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-[#1f2937] p-6 rounded-2xl border border-white/10 hover:border-[#f97316] transition">
                <FileText className="text-[#f97316] mb-4" size={34} />
                <h3 className="font-bold text-xl mb-2">Documents</h3>
                <p className="text-gray-400">
                  Contracts, business paperwork, legal papers, forms, and urgent
                  documents.
                </p>
              </div>

              <div className="bg-[#1f2937] p-6 rounded-2xl border border-white/10 hover:border-[#f97316] transition">
                <Package className="text-[#f97316] mb-4" size={34} />
                <h3 className="font-bold text-xl mb-2">Small Packages</h3>
                <p className="text-gray-400">
                  Boxes, personal items, small business orders, and local
                  customer deliveries.
                </p>
              </div>

              <div className="bg-[#1f2937] p-6 rounded-2xl border border-white/10 hover:border-[#f97316] transition">
                <Wrench className="text-[#f97316] mb-4" size={34} />
                <h3 className="font-bold text-xl mb-2">Auto Parts</h3>
                <p className="text-gray-400">
                  Parts delivery for repair shops, mechanics, dealerships, and
                  local customers.
                </p>
              </div>

              <div className="bg-[#1f2937] p-6 rounded-2xl border border-white/10 hover:border-[#f97316] transition">
                <Clock className="text-[#f97316] mb-4" size={34} />
                <h3 className="font-bold text-xl mb-2">
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
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How It Works
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                ["1", "Request Pickup", "Send pickup location, delivery location, item details, and preferred time."],
                ["2", "Direct Pickup", "Your item is picked up directly with clear communication before delivery."],
                ["3", "Delivered Safely", "Delivery is completed with updates from pickup to drop off."],
              ].map(([num, title, desc]) => (
                <div
                  key={num}
                  className="bg-[#111827] border border-white/10 rounded-2xl p-8 text-center"
                >
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f97316] text-white font-bold text-xl">
                    {num}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-gray-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#111827]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#f97316] font-bold uppercase tracking-widest mb-3">
                Who This Helps
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Local Delivery for Customers and Businesses
              </h2>

              <p className="text-gray-400 mb-8">
                We help local customers and businesses that need reliable direct
                delivery without app confusion, delays, or unclear handoffs.
              </p>

              <Link
                to="/request-pickup"
                className="inline-flex items-center bg-[#f97316] text-white px-7 py-4 rounded-xl font-bold hover:bg-orange-500 transition"
              >
                Get a Free Quote
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-[#0b0f19] border border-white/10 rounded-2xl p-6">
                <Building2 className="text-[#f97316] mb-4" size={30} />
                <h3 className="font-bold text-lg mb-2">Small Businesses</h3>
                <p className="text-gray-400">
                  Local delivery for business items, customer orders, and
                  paperwork.
                </p>
              </div>

              <div className="bg-[#0b0f19] border border-white/10 rounded-2xl p-6">
                <Wrench className="text-[#f97316] mb-4" size={30} />
                <h3 className="font-bold text-lg mb-2">Repair Shops</h3>
                <p className="text-gray-400">
                  Parts pickup and delivery for shops, mechanics, and
                  dealerships.
                </p>
              </div>

              <div className="bg-[#0b0f19] border border-white/10 rounded-2xl p-6">
                <ShoppingBag className="text-[#f97316] mb-4" size={30} />
                <h3 className="font-bold text-lg mb-2">Marketplace Buyers</h3>
                <p className="text-gray-400">
                  Help with local pickup and delivery for small items.
                </p>
              </div>

              <div className="bg-[#0b0f19] border border-white/10 rounded-2xl p-6">
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

        <section className="py-20 bg-[#0b0f19]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Choose Freedom Line Freight Express
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#111827] border border-white/10 rounded-2xl p-8">
                <ul className="space-y-4 text-gray-300">
                  <li className="flex gap-3">
                    <CheckCircle className="text-[#f97316]" />
                    Direct delivery with no unnecessary handoffs
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="text-[#f97316]" />
                    Same-day availability depending on route and schedule
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="text-[#f97316]" />
                    Clear communication from pickup to delivery
                  </li>
                </ul>
              </div>

              <div className="bg-[#111827] border border-white/10 rounded-2xl p-8">
                <ul className="space-y-4 text-gray-300">
                  <li className="flex gap-3">
                    <CheckCircle className="text-[#f97316]" />
                    Local Phoenix and East Valley coverage
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="text-[#f97316]" />
                    No random app-based drivers
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="text-[#f97316]" />
                    Deaf-owned business with clear written communication
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#111827] text-center">
          <MapPin className="text-[#f97316] mx-auto mb-4" size={36} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Service Areas
          </h2>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto px-6">
            Serving Phoenix, Mesa, Chandler, Gilbert, Queen Creek, San Tan
            Valley, Scottsdale, Tempe, Casa Grande, and nearby Arizona areas.
          </p>
        </section>

        <section className="bg-[#f97316] py-20 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">
              Need Fast Delivery Today?
            </h2>

            <p className="text-orange-100 text-lg mb-8">
              Request pickup for documents, packages, auto parts, and
              time-sensitive local deliveries.
            </p>

            <Link
              to="/request-pickup"
              className="inline-flex items-center bg-white text-[#f97316] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              Request Pickup
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
