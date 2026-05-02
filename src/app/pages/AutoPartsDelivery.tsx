import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  ArrowRight,
  Package,
  Clock,
  Shield,
  Wrench,
  Store,
  Building2,
  FileText,
  CheckCircle,
  MapPin,
  MessageSquare,
} from "lucide-react";

export default function AutoPartsDelivery() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Auto Parts Delivery Arizona",
    serviceType: "Auto Parts Delivery Service",
    provider: {
      "@type": "LocalBusiness",
      name: "Freedom Line Freight Express",
      url: "https://www.flfreightco.com",
      telephone: "+1-480-742-8553",
      email: "dispatch@flfreightco.com",
    },
    areaServed: [
      "Phoenix AZ",
      "Mesa AZ",
      "Chandler AZ",
      "Gilbert AZ",
      "Queen Creek AZ",
      "San Tan Valley AZ",
      "Scottsdale AZ",
      "Tempe AZ",
      "Casa Grande AZ",
    ],
    description:
      "Direct auto parts delivery across Phoenix metro and Arizona for repair shops, dealerships, suppliers, mobile mechanics, and local businesses.",
  };

  const cardClass =
    "rounded-xl border border-neutral-800 bg-neutral-900 p-7 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300";

  return (
    <>
      <Helmet>
        <title>Auto Parts Delivery Arizona | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Auto parts delivery across Phoenix metro and Arizona. Same day and scheduled delivery for repair shops, dealerships, suppliers, mobile mechanics, and businesses."
        />
        <link rel="canonical" href="https://www.flfreightco.com/auto-parts-delivery" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <main className="bg-neutral-950 text-white">
        <section className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-black py-24">
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500 bg-black/50 px-4 py-2 text-sm font-semibold">
                <Package className="text-orange-500" size={18} />
                Arizona Auto Parts Delivery
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Auto Parts Delivery Across{" "}
                <span className="text-orange-500">Phoenix Metro and Arizona</span>
              </h1>

              <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Freedom Line Freight Express provides direct auto parts delivery for repair shops,
                dealerships, suppliers, mobile mechanics, and local businesses.
              </p>

              <p className="mb-8 max-w-3xl text-gray-300">
                Same day and scheduled delivery may be available depending on route, distance,
                timing, and item details. Text first for clear communication and fast updates.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-4 text-lg font-bold text-white hover:bg-orange-600 transition-colors"
                >
                  Request Parts Delivery
                  <ArrowRight className="ml-2" size={22} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 text-lg font-bold text-white hover:bg-white hover:text-black transition-colors"
                >
                  Text for Quote
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-300">
                {[
                  "Owner operated",
                  "Fully insured",
                  "Text updates",
                  "Phoenix metro",
                  "Same day when available",
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

        <section className="border-y border-neutral-800 bg-black py-12">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
            {[
              ["Direct Handling", "One delivery contact from pickup to drop off", Package],
              ["Fast Local Runs", "Same day and scheduled options when available", Clock],
              ["Protected Service", "Fully insured delivery support", Shield],
              ["Text First", "Clear written updates and simple communication", MessageSquare],
            ].map(([title, text, Icon]: any) => (
              <div key={title} className="flex items-start gap-3">
                <Icon className="mt-1 text-orange-500" size={28} />
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-sm text-gray-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Who Uses <span className="text-orange-500">Auto Parts Delivery?</span>
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-300">
                Built for local businesses that need parts moved quickly without sending staff
                across town.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Wrench,
                  title: "Repair Shops",
                  text: "Parts pickup and delivery between shops, suppliers, dealers, and customers.",
                },
                {
                  icon: Store,
                  title: "Auto Parts Stores",
                  text: "Local parts runs for customers, repair shops, and commercial accounts.",
                },
                {
                  icon: Building2,
                  title: "Dealerships",
                  text: "Parts, paperwork, and business item delivery between locations.",
                },
                {
                  icon: Package,
                  title: "Mobile Mechanics",
                  text: "Parts delivery to job sites, homes, and customer locations.",
                },
                {
                  icon: FileText,
                  title: "Documents and Paperwork",
                  text: "Title documents, invoices, service paperwork, and urgent files.",
                },
                {
                  icon: MapPin,
                  title: "Phoenix Metro Routes",
                  text: "Service across Phoenix, Mesa, Chandler, Gilbert, Queen Creek, Scottsdale, Tempe, and nearby areas.",
                },
              ].map((item) => (
                <div key={item.title} className={cardClass}>
                  <item.icon className="mb-4 text-orange-500" size={34} />
                  <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                  <p className="leading-relaxed text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-900 py-20 border-y border-neutral-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="mb-5 text-3xl font-bold md:text-5xl">
                  Same Day Parts Delivery When Schedule Allows
                </h2>
                <p className="mb-5 text-gray-300">
                  If a shop is waiting on a part, time matters. I help move auto parts,
                  documents, and business items directly from pickup to delivery.
                </p>
                <p className="text-gray-400">
                  Send the pickup address, delivery address, item size, timing, and contact
                  details. I’ll review the route and let you know availability.
                </p>
              </div>

              <div className="rounded-xl border border-orange-500/40 bg-neutral-950 p-8">
                <h3 className="mb-5 text-2xl font-bold text-orange-500">
                  Best Details to Send
                </h3>
                <ul className="space-y-4 text-gray-300">
                  {[
                    "Pickup and delivery address",
                    "Part type, size, and weight if known",
                    "Preferred pickup time",
                    "Shop or customer contact name",
                    "Any loading instructions",
                    "Whether item is fragile or heat sensitive",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 shrink-0 text-orange-500" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Auto Parts Delivery Service Areas
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Serving Phoenix metro, East Valley, and nearby Arizona communities.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-gray-300">
              {[
                ["Phoenix", "/phoenix-auto-parts-delivery"],
                ["Mesa", "/mesa-auto-parts-delivery"],
                ["Chandler", "/chandler-auto-parts-delivery"],
                ["Gilbert", "/gilbert-auto-parts-delivery"],
                ["Queen Creek", "/queen-creek-auto-parts-delivery"],
                ["San Tan Valley", "/san-tan-valley-auto-parts-delivery"],
                ["Scottsdale", "/scottsdale-auto-parts-delivery"],
                ["Tempe", "/tempe-auto-parts-delivery"],
                ["Casa Grande", "/casa-grande-auto-parts-delivery"],
              ].map(([city, link]) => (
                <Link
                  key={city}
                  to={link}
                  className="rounded-full border border-neutral-800 bg-neutral-900 px-5 py-3 hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Need Auto Parts Delivered Today?
            </h2>
            <p className="mb-8 text-xl font-semibold text-orange-100">
              Text pickup details, delivery details, and item information for a quick quote.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-orange-600 hover:bg-gray-100 transition-colors"
              >
                Request Delivery
                <ArrowRight className="ml-2" size={22} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 text-lg font-bold text-white hover:bg-white hover:text-orange-600 transition-colors"
              >
                Text for Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
