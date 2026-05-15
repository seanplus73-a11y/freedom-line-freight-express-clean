import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  ArrowRight,
  Shield,
  CheckCircle,
  MessageSquare,
  Car,
  MapPin,
  Package,
  Wrench,
  Tag,
  UserCheck,
  Clock,
  DollarSign,
  Store,
  Star,
  Phone,
} from "lucide-react";

// Building2, FileText, Route removed — not used in simplified layout

export default function Home() {

  // ── SEO Schema ─────────────────────────────────────────────────────────────
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
      "Phoenix AZ", "Mesa AZ", "Chandler AZ", "Gilbert AZ",
      "Queen Creek AZ", "San Tan Valley AZ", "Scottsdale AZ",
      "Tempe AZ", "Casa Grande AZ",
    ],
    description:
      "Arizona vehicle concierge and delivery service. Owner operated, fully insured. I pick up your vehicle, handle the errand, and return it to you. No towing and no trailers.",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Vehicle Concierge and Delivery Service",
    provider: {
      "@type": "LocalBusiness",
      name: "Freedom Line Freight Express",
    },
    areaServed: { "@type": "State", name: "Arizona" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Freedom Line Freight Express Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vehicle Concierge" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vehicle Delivery" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auto Parts Delivery" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Document Delivery" } },
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

  // ── Data ───────────────────────────────────────────────────────────────────
  const conciergeExamples = [
    {
      icon: Wrench,
      label: "Oil Change Pickup",
      text: "I pick up your car, take it for an oil change at your preferred shop, and return it to you.",
    },
    {
      icon: Car,
      label: "Car Wash Run",
      text: "I take your car for a full wash or detail and bring it back clean and ready.",
    },
    {
      icon: Package,
      label: "Tire Shop Run",
      text: "Tire rotations, installations, balances, and flat repairs handled without you waiting.",
    },
    {
      icon: Store,
      label: "Dealership Visit",
      text: "I drop off and pick up your vehicle at any dealership service appointment.",
    },
    {
      icon: MapPin,
      label: "Mechanic Drop Off",
      text: "I deliver your car to your mechanic and return it to you when the work is done.",
    },
    {
      icon: Car,
      label: "Vehicle Delivery",
      text: "I drive your car directly from A to B across Phoenix metro or statewide Arizona.",
    },
  ];

  const trustReasons = [
    {
      icon: UserCheck,
      title: "I drive it, not a stranger",
      text: "No app dispatch. No random contractor. The owner picks up your car, handles the errand, and returns it personally.",
    },
    {
      icon: Shield,
      title: "Fully insured, always",
      text: "Your vehicle is protected while it is in my care from pickup to return, no exceptions.",
    },
    {
      icon: MessageSquare,
      title: "Text updates the whole way",
      text: "You will know when I pick up, when I arrive at the shop, and when your car is on the way back.",
    },
    {
      icon: Clock,
      title: "Same day service available",
      text: "Text me in the morning and your car can be handled and back before you finish work, when schedule allows.",
    },
    {
      icon: DollarSign,
      title: "Transparent pricing",
      text: "You pay the shop directly for their work. You pay me separately for pickup and return. No surprises.",
    },
    {
      icon: Phone,
      title: "Text first communication",
      text: "Everything is handled by text. Fast, clear, and documented from the moment you reach out.",
    },
  ];

  const cardClass =
    "bg-neutral-900 p-7 rounded-xl border border-neutral-800 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300";

  return (
    <>
      <Helmet>
        <title>Vehicle Concierge and Delivery Service Phoenix AZ | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Owner operated vehicle concierge and delivery service in Phoenix and Queen Creek AZ. I pick up your car for oil changes, car washes, tire runs, dealership visits, and more. No towing. No trailers."
        />
        <link rel="canonical" href="https://www.flfreightco.com/" />
        <meta property="og:title" content="Vehicle Concierge and Delivery Service Phoenix AZ | Freedom Line Freight Express" />
        <meta
          property="og:description"
          content="I pick up your vehicle, handle the errand, and return it to you. Owner operated, fully insured. Serving Phoenix metro and Queen Creek AZ."
        />
        <meta property="og:url" content="https://www.flfreightco.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-neutral-950 text-white">

        {/* ── SECTION 1: HERO ── */}
        <section className="relative overflow-hidden bg-neutral-950">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1770289711980-c7663e18bb16?auto=format&fit=crop&w=1080&q=80"
              alt="Phoenix Arizona vehicle concierge and delivery service"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
            <div className="max-w-3xl">

              {/* Trust pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  ["Owner Operated", CheckCircle],
                  ["Fully Insured", Shield],
                  ["Text First Service", MessageSquare],
                ].map(([label, Icon]: any) => (
                  <div
                    key={label}
                    className="flex items-center bg-black/60 px-4 py-2 rounded-full border border-orange-500"
                  >
                    <Icon className="text-orange-500 mr-2" size={16} />
                    <span className="text-sm font-semibold">{label}</span>
                  </div>
                ))}
              </div>

              {/* Main headline */}
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                I Drive It.{" "}
                <span className="text-orange-500">I Handle It.</span>
                <br />
                You Relax.
              </h1>

              {/* Supporting line */}
              <p className="text-lg md:text-xl text-gray-300 font-medium mb-8">
                No towing. No trailers. Owner operated vehicle concierge and delivery service serving Phoenix metro and Queen Creek AZ.
              </p>

              {/* Plain English explainer box */}
              <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 mb-10 max-w-2xl">
                <p className="text-white text-lg leading-relaxed">
                  You text me. I pick up your car, handle whatever it needs, and return it to you.
                  Oil changes, car washes, tire runs, dealership visits, or full vehicle delivery across Arizona.{" "}
                  <span className="text-orange-400 font-semibold">You never have to leave home.</span>
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>

              <p className="text-sm text-gray-400">
                Based in Queen Creek. Serving Phoenix, Mesa, Chandler, Gilbert, Scottsdale, San Tan Valley, Tempe, and Casa Grande.
              </p>
            </div>
          </div>
        </section>

        {/* ── LAUNCH OFFER BANNER ── */}
        <section className="bg-neutral-900 border-y-2 border-orange-500">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="w-14 h-14 bg-orange-500/15 border border-orange-500/40 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Tag className="text-orange-500" size={28} />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-white font-bold text-xl mb-1">
                  Now open!{" "}
                  <span className="text-orange-500">First 10 customers get $10 off</span>
                </p>
                <p className="text-gray-400 text-base leading-relaxed">
                  We are based in Queen Creek and just getting started. Text us to claim your discount and be one of our first customers.
                </p>
              </div>
              <Link
                to="/contact"
                className="flex-shrink-0 inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full font-bold text-base transition-colors"
              >
                Claim Offer
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: WHAT THIS SERVICE ACTUALLY IS ── */}
        <section className="py-20 bg-black border-b border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
              What this service actually is
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your personal vehicle{" "}
              <span className="text-orange-500">errand runner</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Most people waste hours sitting at oil change shops, waiting at dealerships, or arranging rides while their car gets serviced.
              I solve that. I pick up your vehicle, take it wherever it needs to go, and return it to you when it is ready.
              You keep your day. I handle the errand.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: MessageSquare, label: "You text me what you need" },
                { icon: Car, label: "I pick up and handle it" },
                { icon: CheckCircle, label: "Your car comes back ready" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                    <item.icon className="text-orange-500" size={26} />
                  </div>
                  <p className="text-white font-semibold text-base">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: CONCIERGE EXAMPLES ── */}
        <section className="py-20 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                Services I handle
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What I can do{" "}
                <span className="text-orange-500">for you</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From everyday car errands to full vehicle delivery across Arizona. If it involves your vehicle, I can handle it.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conciergeExamples.map((item) => (
                <div key={item.label} className={cardClass}>
                  <item.icon className="text-orange-500 mb-4" size={30} />
                  <h3 className="text-xl font-bold mb-2">{item.label}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                to="/vehicle-concierge-phoenix"
                className="inline-flex items-center text-orange-500 font-bold text-lg hover:text-orange-400"
              >
                View all concierge services
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: HOW IT WORKS ── */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
              Simple process
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-14">
              How it <span className="text-orange-500">works</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                ["1", "You text me", "Tell me what you need done, when, and where your car is located."],
                ["2", "I pick it up", "I come to your home, office, or wherever the car is parked."],
                ["3", "I handle it", "I take care of the errand personally. No app drivers. No handoffs."],
                ["4", "I return it", "Your car comes back clean, serviced, and ready to go."],
              ].map(([num, title, text]) => (
                <div key={num} className="flex flex-col items-center">
                  <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold mb-5 shadow-lg shadow-orange-500/20">
                    {num}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: TRUST AND OWNER OPERATOR ── */}
        <section className="py-20 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                Why people choose me
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                You are not calling a{" "}
                <span className="text-orange-500">random app driver</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                This is a solo owned, fully insured operation. When you hand over your keys, you know exactly who has them.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {trustReasons.map((item) => (
                <div key={item.title} className={cardClass}>
                  <item.icon className="text-orange-500 mb-4" size={30} />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Review nudge */}
            <div className="bg-neutral-900 border border-orange-500/30 rounded-2xl p-7 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Star className="text-orange-500" size={28} />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-white font-bold text-lg mb-1">
                  Be one of our first customers and leave us a review
                </p>
                <p className="text-gray-400 text-base leading-relaxed">
                  We are based in Queen Creek and just getting started serving the Phoenix metro area.
                  Give us a try and if we do a great job, an honest Google review means the world to a new small business.
                </p>
              </div>
              <a
                href="https://g.page/r/CZbmUVGVv9PgEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold text-base transition-colors"
              >
                Leave a Review
                <ArrowRight className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: PRICING ── */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                Simple and transparent
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Starting <span className="text-orange-500">Pricing</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Rates depend on distance and service type. Text me and I will confirm your exact quote before anything is booked.
              </p>
            </div>

            {/* Concierge pricing highlight */}
            <div className="bg-neutral-950 border border-orange-500 rounded-2xl p-8 mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2">
                    Vehicle Concierge
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Oil changes, car washes, tire runs, and more
                  </h3>
                  <p className="text-gray-400">
                    Pickup and return service. You pay the shop separately for their work.
                  </p>
                </div>
                <div className="text-center flex-shrink-0">
                  <p className="text-gray-400 text-sm mb-1">Starting at</p>
                  <p className="text-5xl font-bold text-orange-500">$45</p>
                  <p className="text-gray-400 text-sm mt-1">Local 0 to 10 miles</p>
                </div>
              </div>
            </div>

            {/* Vehicle delivery pricing grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                ["Local", "0 to 25 miles", "$85"],
                ["Extended", "25 to 50 miles", "$125"],
                ["Regional", "50 to 150 miles", "$250"],
                ["Long Distance", "150 plus miles", "Custom"],
              ].map(([name, miles, price]) => (
                <div
                  key={name}
                  className="bg-neutral-950 p-6 rounded-xl border border-neutral-800 text-center hover:border-orange-500 transition-colors"
                >
                  <p className="text-xs text-orange-500 font-bold uppercase tracking-wider mb-2">
                    Vehicle Delivery
                  </p>
                  <h3 className="text-base font-bold mb-1">{name}</h3>
                  <p className="text-gray-500 text-xs mb-3">{miles}</p>
                  <div className="text-3xl font-bold text-orange-500">{price}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center bg-orange-500 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors"
              >
                View Full Pricing and Services
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: SERVICE AREA ── */}
        <section className="py-20 bg-neutral-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
              Where I operate
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Serving <span className="text-orange-500">Phoenix Metro</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Based in Queen Creek. I serve the entire Phoenix metro area and statewide Arizona routes.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
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
                  className="bg-neutral-900 border border-neutral-800 px-5 py-3 rounded-full text-gray-300 hover:border-orange-500 hover:text-orange-500 transition-colors font-medium"
                >
                  {city}
                </Link>
              ))}
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">Statewide Arizona routes available.</strong>{" "}
                Text me your pickup and drop off locations and I will confirm availability and pricing before anything is booked.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 8: FINAL CTA ── */}
        <section className="bg-orange-500 py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to save time?
            </h2>
            <p className="text-xl text-orange-100 mb-10 leading-relaxed max-w-2xl mx-auto">
              Text me today. Tell me what you need and where your car is. I will take care of the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-orange-600 px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Text for a Quick Quote
              </Link>
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Request Pickup Details
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <p className="text-orange-100 text-sm font-semibold">
              Owner Operated | Fully Insured | Text First | Based in Queen Creek AZ
            </p>
          </div>
        </section>

        {/* ── BLOG kept below the fold for SEO ── */}
        <section className="py-20 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">
                Arizona Delivery Blog
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Helpful <span className="text-orange-500">Delivery Guides</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Tips and guides for vehicle delivery, concierge services, and local Arizona transport.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Fast and Safe Vehicle Delivery in Arizona: A Complete Guide",
                  description: "Learn how to safely and quickly deliver vehicles, auto parts, and packages across Phoenix and Arizona.",
                  slug: "/blog/arizona-vehicle-delivery-guide",
                  category: "Guide",
                },
                {
                  title: "Why Direct Vehicle Delivery Is Better Than Towing in Arizona",
                  description: "Discover why direct vehicle delivery is safer, faster, and more affordable than towing across Phoenix metro.",
                  slug: "/blog/direct-vehicle-delivery-vs-towing-arizona",
                  category: "Vehicle Delivery",
                },
                {
                  title: "Same Day Vehicle Delivery in Phoenix for Dealers and Repair Shops",
                  description: "Same day vehicle delivery serving dealerships and auto repair shops across Phoenix metro. No towing. No trailers.",
                  slug: "/blog/same-day-vehicle-delivery-phoenix",
                  category: "Dealerships",
                },
                {
                  title: "How Arizona Businesses Use Vehicle Delivery Services to Save Time",
                  description: "How small businesses, repair shops, and dealerships in Phoenix use vehicle concierge services to save time.",
                  slug: "/blog/arizona-business-vehicle-delivery-services",
                  category: "Business",
                },
              ].map((post) => (
                <Link
                  key={post.slug}
                  to={post.slug}
                  className="group bg-neutral-950 p-7 rounded-xl border border-neutral-800 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{post.description}</p>
                  <span className="inline-flex items-center text-orange-500 font-bold">
                    Read article
                    <ArrowRight className="ml-2" size={16} />
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                to="/blog"
                className="inline-flex items-center justify-center border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-500 hover:text-white transition-colors"
              >
                View All Blog Posts
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

