import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  ArrowRight,
  Shield,
  CheckCircle,
  MessageSquare,
  Car,
  Building2,
  MapPin,
  Package,
  FileText,
  Wrench,
  Route,
} from "lucide-react";

export default function Home() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Freedom Line Freight Express",
    url: "https://www.flfreightco.com",
    telephone: "+1-480-742-8553",
    email: "dispatch@flfreightco.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Queen Creek",
      addressRegion: "AZ",
      addressCountry: "US",
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
      "Arizona vehicle pickup and delivery service. Direct drive-away service for cars, SUVs, small trucks, auto parts, documents, and business items. No towing and no trailers.",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Vehicle Pickup and Delivery Service",
    provider: {
      "@type": "LocalBusiness",
      name: "Freedom Line Freight Express",
    },
    areaServed: {
      "@type": "State",
      name: "Arizona",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Freedom Line Freight Express Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vehicle Delivery",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Auto Parts Delivery",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Document Delivery",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Transport",
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
      name: "Do you tow vehicles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Vehicle delivery is drive-away only. I personally drive operable vehicles directly to the destination.",
      },
    },
    {
      "@type": "Question",
      name: "Can I move a car without towing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Vehicles are driven directly instead of being towed or loaded on a trailer.",
      },
    },
    {
      "@type": "Question",
      name: "Do you deliver auto parts and business items?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Auto parts, documents, and business items can be delivered across Phoenix and Arizona depending on route and schedule.",
      },
    },
  ],
};

  const cardClass =
    "bg-neutral-900 p-7 rounded-xl border border-neutral-800 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300";

  return (
    <>
      <Helmet>
        <title>Phoenix & Arizona Vehicle Delivery Service | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Phoenix and Arizona vehicle delivery service. Direct drive-away for cars, SUVs, and small trucks. No towing, no trailers. Auto parts, documents, and business delivery available."
        />
        <link rel="canonical" href="https://www.flfreightco.com/" />
        <meta property="og:title" content="Phoenix & Arizona Vehicle Delivery Service" />
        <meta
          property="og:description"
          content="Direct vehicle pickup and delivery across Phoenix metro and Arizona. No towing. No trailers. Owner operated and fully insured."
        />
        <meta property="og:url" content="https://www.flfreightco.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-neutral-950 text-white">
        <section className="relative overflow-hidden bg-neutral-950">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1770289711980-c7663e18bb16?auto=format&fit=crop&w=1080&q=80"
              alt="Phoenix Arizona vehicle pickup and delivery service"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  ["Owner Operated", CheckCircle],
                  ["Fully Insured", Shield],
                  ["Text First Service", MessageSquare],
                ].map(([label, Icon]: any) => (
                  <div
                    key={label}
                    className="flex items-center bg-black/60 px-4 py-2 rounded-full border border-orange-500"
                  >
                    <Icon className="text-orange-500 mr-2" size={18} />
                    <span className="text-sm font-semibold">{label}</span>
                  </div>
                ))}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Phoenix & Arizona Vehicle Delivery Service
                <br />
                <span className="text-orange-500">
                  We Drive It. No Towing. No Trailers.
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
                Freedom Line Freight Express provides direct vehicle pickup and delivery
                across Phoenix metro and Arizona. I move cars, SUVs, and small trucks
                that run and drive.
              </p>

              <p className="text-base md:text-lg text-white font-semibold mb-6">
                Based in Queen Creek. Serving Phoenix, Mesa, Chandler, Gilbert,
                Scottsdale, San Tan Valley, Tempe, Casa Grande, and statewide Arizona routes.
              </p>

              <p className="text-base md:text-lg text-gray-300 mb-10">
                No app dispatch. No random driver. Direct owner operated service with fast
                text updates from pickup to delivery.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors"
                >
                 Text for Quick Quote
                </Link>

                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-black transition-colors"
                >
                  Request Pickup Details
                  <ArrowRight className="ml-2" size={22} />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-300">
                <Link to="/phoenix-delivery" className="hover:text-orange-500 underline">
                  Phoenix Vehicle Delivery
                </Link>
                <Link to="/vehicle-delivery" className="hover:text-orange-500 underline">
                  Vehicle Delivery Service
                </Link>
                <Link to="/courier" className="hover:text-orange-500 underline">
                  Courier Service
                </Link>
                <Link to="/arizona-delivery-guide" className="hover:text-orange-500 underline">
  Arizona Delivery Guide
</Link>
              </div>

              <p className="mt-5 text-sm text-gray-300">
                Business accounts welcome. Same day service available when schedule allows.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black border-y border-neutral-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Built for <span className="text-orange-500">Dealers, Shops & Businesses</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              I help businesses save time by handling direct local deliveries without sending
              staff across town.
            </p>

            <div className="grid md:grid-cols-4 gap-6 text-left">
              {[
                {
                  icon: Car,
                  title: "Vehicle Delivery",
                  text: "Dealer transfers, auction pickups, repair shop moves, and customer vehicle delivery.",
                  link: "/vehicle-delivery",
                  label: "View vehicle delivery",
                },
                {
                  icon: Package,
                  title: "Auto Parts",
                  text: "Same day parts pickup and delivery between shops, dealers, and customers.",
                  link: "/auto-parts-delivery",
                  label: "View auto parts delivery",
                },
                {
                  icon: FileText,
                  title: "Documents",
                  text: "Business documents, paperwork, title documents, and urgent files.",
                  link: "/courier",
                  label: "View courier service",
                },
                {
                  icon: Building2,
                  title: "Business Items",
                  text: "Direct delivery support for local businesses, offices, and repair shops.",
                  link: "/courier",
                  label: "View courier service",
                },
              ].map((item) => (
                <div key={item.title} className={cardClass}>
                  <item.icon className="text-orange-500 mb-3" size={32} />
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.text}</p>
                  <Link
                    to={item.link}
                    className="inline-flex items-center text-orange-500 font-bold hover:text-orange-400"
                  >
                    {item.label}
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-900 py-12 border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                ["Owner Operated", "Direct accountability", CheckCircle],
                ["Fully Insured", "Protected service", Shield],
                ["Arizona Based", "Phoenix metro service", MapPin],
                ["Text First", "Clear written updates", MessageSquare],
              ].map(([title, sub, Icon]: any) => (
                <div key={title}>
                  <Icon className="text-orange-500 mx-auto mb-3" size={34} />
                  <div className="font-bold">{title}</div>
                  <div className="text-gray-400 text-sm">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Services <span className="text-orange-500">Available</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Direct local transport for vehicles, auto parts, documents, and business items.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Dealership Vehicle Transfers",
                  text: "Vehicle moves between lots, buyers, auctions, and service locations.",
                  icon: Car,
                  link: "/vehicle-delivery",
                },
                {
                  title: "Repair Shop Vehicle Moves",
                  text: "Customer vehicle pickup and return support for repair shops.",
                  icon: Wrench,
                  link: "/vehicle-delivery",
                },
                {
                  title: "Auto Parts Delivery",
                  text: "Parts pickup and delivery between shops, dealers, warehouses, and customers.",
                  icon: Package,
                  link: "/auto-parts-delivery",
                },
                {
                  title: "Document Delivery",
                  text: "Direct delivery for paperwork, business files, title documents, and urgent items.",
                  icon: FileText,
                  link: "/courier",
                },
                {
                  title: "Business Transport",
                  text: "Local delivery support for offices, sellers, repair shops, and small businesses.",
                  icon: Building2,
                  link: "/courier",
                },
                {
                  title: "Same Day Availability",
                  text: "Same day or next day service may be available depending on route and schedule.",
                  icon: Route,
                  link: "/contact",
                },
              ].map((item) => (
                <div key={item.title} className={cardClass}>
                  <item.icon className="text-orange-500 mb-4" size={32} />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{item.text}</p>
                  <Link
                    to={item.link}
                    className="inline-flex items-center text-orange-500 font-bold hover:text-orange-400"
                  >
                    Learn more
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-orange-500 font-bold uppercase tracking-widest mb-3">
                  Phoenix service page
                </p>
                <h2 className="text-4xl md:text-5xl font-bold mb-5">
                  Need Vehicle Delivery in <span className="text-orange-500">Phoenix AZ?</span>
                </h2>
                <p className="text-lg text-gray-300 mb-5">
                  I provide direct drive-away vehicle delivery in Phoenix for cars, SUVs,
                  small trucks, dealer transfers, auction pickups, repair shop moves,
                  and customer delivery.
                </p>
                <p className="text-gray-400 mb-8">
                  This homepage links directly to the Phoenix service page so Google can
                  crawl it faster and customers can find the right local page quickly.
                </p>
                <Link
                  to="/phoenix-delivery"
                  className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-md font-bold hover:bg-orange-600 transition-colors"
                >
                  View Phoenix Vehicle Delivery
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>

              <div className="bg-neutral-950 p-8 rounded-xl border border-orange-500/40">
                <h3 className="text-2xl font-bold text-orange-500 mb-5">
                  Popular Phoenix Routes
                </h3>
                <ul className="space-y-4 text-gray-300">
                  {[
                    "Phoenix to Mesa vehicle delivery",
                    "Phoenix to Chandler vehicle delivery",
                    "Phoenix to Gilbert vehicle delivery",
                    "Phoenix to Queen Creek vehicle delivery",
                    "Sky Harbor Airport vehicle pickup",
                    "Dealership and repair shop vehicle moves",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="text-orange-500 mt-1 shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-14">
              How It <span className="text-orange-500">Works</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                ["1", "Text the Details", "Send pickup location, delivery location, item or vehicle info, and timing."],
                ["2", "I Handle It Directly", "No random app driver. No unnecessary delays. Direct service by owner."],
                ["3", "Delivery Confirmed", "You receive clear updates and confirmation when delivery is complete."],
              ].map(([num, title, text]) => (
                <div key={num}>
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                    {num}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{title}</h3>
                  <p className="text-gray-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-900 border-y border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Simple <span className="text-orange-500">Starting Pricing</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Starting rates for direct local transport. Final quote depends on distance,
                route, timing, service type, and details.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
              {[
                ["Local", "0 to 25 miles", "$85"],
                ["Extended Local", "25 to 50 miles", "$125"],
                ["Regional", "50 to 150 miles", "$250"],
                ["Long Distance", "150+ miles", "Custom"],
              ].map(([name, miles, price]) => (
                <div
                  key={name}
                  className="bg-neutral-950 p-8 rounded-lg border border-neutral-800 text-center"
                >
                  <h3 className="text-xl font-bold mb-2">{name}</h3>
                  <p className="text-gray-400 mb-4">{miles}</p>
                  <div className="text-4xl font-bold text-orange-500 mb-2">{price}</div>
                  <p className="text-gray-400">Starting at</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center bg-orange-500 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors"
              >
                View Full Pricing
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Serving <span className="text-orange-500">Phoenix Metro</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Queen Creek, San Tan Valley, Gilbert, Chandler, Mesa, Phoenix,
              Scottsdale, Tempe, Casa Grande, and nearby Arizona communities.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-gray-300">
              {[
                ["Phoenix", "/phoenix-delivery"],
                ["Mesa", "/mesa-delivery"],
                ["Chandler", "/chandler-delivery"],
                ["Gilbert", "/gilbert-delivery"],
                ["Queen Creek", "/queen-creek-delivery"],
                ["San Tan Valley", "/san-tan-valley-delivery"],
                ["Scottsdale", "/scottsdale-delivery"],
                ["Tempe", "/tempe-delivery"],
                ["Casa Grande", "/casa-grande-delivery"],
              ].map(([city, link]) => (
                <Link
                  key={city}
                  to={link}
                  className="bg-neutral-900 border border-neutral-800 px-5 py-3 rounded-full hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>
       <section className="py-20 bg-black border-y border-neutral-800">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Quick Answers for <span className="text-orange-500">Arizona Delivery</span>
      </h2>
      <p className="text-xl text-gray-300">
        Direct answers about same day vehicle delivery, drive away service, and auto parts delivery in Arizona.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          q: "How does vehicle delivery work?",
          a: "Freedom Line Freight Express provides direct drive away vehicle delivery. I pick up the vehicle and drive it directly to the destination with no towing or trailers.",
        },
        {
          q: "Can I move a car without towing?",
          a: "Yes. Vehicles are driven directly instead of being towed or loaded on a trailer.",
        },
        {
          q: "Do you deliver auto parts and business items?",
          a: "Yes. Auto parts, documents, and business items can be delivered across Phoenix and Arizona depending on route and schedule.",
        },
      ].map((item, index) => (
        <div key={index} className={cardClass}>
          <h3 className="text-xl font-bold mb-3 text-orange-500">{item.q}</h3>
          <p className="text-gray-300 leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  </div>
</section>

        <section className="py-24 bg-neutral-900 border-y border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked <span className="text-orange-500">Questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
  [
    "Do you tow vehicles?",
    "No. Vehicle delivery is drive-away only. I personally drive operable vehicles directly to the destination.",
  ],
  [
    "What vehicles do you move?",
    "I move cars, SUVs, and small trucks that run and drive safely. I do not tow vehicles or use trailers.",
  ],
  [
    "Do you deliver auto parts?",
    "Yes. I can deliver auto parts, documents, business items, and small packages depending on route and schedule.",
  ],
  [
    "Do you work with dealerships and repair shops?",
    "Yes. I help dealerships, repair shops, and businesses with vehicle moves, parts runs, and direct delivery support.",
  ],
  [
    "How do you communicate?",
    "Text or email only. This keeps communication fast, clear, and documented.",
  ],
  [
    "Do you offer same day service?",
    "Same day or next day service may be available depending on schedule, distance, route, and service type.",
  ],
  [
    "Why choose Freedom Line Freight Express over a broker?",
    "You work directly with an owner operator. There is no third party handoff, no app dispatch, and no random driver.",
  ],
].map(([q, a]) => (
                <div key={q} className="bg-neutral-950 p-6 rounded-lg border border-neutral-800">
                  <h3 className="text-xl font-bold mb-2">{q}</h3>
                  <p className="text-gray-300 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
  Need a Vehicle, Auto Parts, or Business Items Delivered in Phoenix or Arizona?
</h2>

<p className="text-xl text-orange-100 mb-6 font-semibold">
  Direct owner operated vehicle delivery, auto parts delivery, and business transport across Phoenix and Arizona. No towing. No trailers. Fast text updates.
</p>

<p className="text-sm text-orange-100 mb-6">
  Serving Phoenix? 
  <Link to="/phoenix-delivery" className="underline font-semibold ml-1">
    View Phoenix vehicle delivery details
  </Link>
</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Get a Fast Quote
              </Link>

              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Request Pickup Details
                <ArrowRight className="ml-2" size={24} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
