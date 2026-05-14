import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  MapPin,
  ArrowRight,
  Car,
  Package,
  Wrench,
  Building2,
  CheckCircle,
  Shield,
  Clock,
  Star,
  Phone,
} from "lucide-react";

export default function ServiceAreas() {

  const pageSchema = {
    "@context": "https://schema.org",
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
    areaServed: [
      { "@type": "City", name: "Phoenix", containedInPlace: { "@type": "State", name: "Arizona" } },
      { "@type": "City", name: "Mesa", containedInPlace: { "@type": "State", name: "Arizona" } },
      { "@type": "City", name: "Chandler", containedInPlace: { "@type": "State", name: "Arizona" } },
      { "@type": "City", name: "Gilbert", containedInPlace: { "@type": "State", name: "Arizona" } },
      { "@type": "City", name: "Queen Creek", containedInPlace: { "@type": "State", name: "Arizona" } },
      { "@type": "City", name: "San Tan Valley", containedInPlace: { "@type": "State", name: "Arizona" } },
      { "@type": "City", name: "Scottsdale", containedInPlace: { "@type": "State", name: "Arizona" } },
      { "@type": "City", name: "Tempe", containedInPlace: { "@type": "State", name: "Arizona" } },
      { "@type": "City", name: "Casa Grande", containedInPlace: { "@type": "State", name: "Arizona" } },
    ],
    description:
      "Freedom Line Freight Express provides vehicle pickup and delivery, auto parts delivery, vehicle concierge, and business transport across Phoenix metro and Arizona. Owner operated, deaf owned, and fully insured.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What areas does Freedom Line Freight Express serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Freedom Line Freight Express serves Phoenix, Mesa, Chandler, Gilbert, Queen Creek, San Tan Valley, Scottsdale, Tempe, Casa Grande, and surrounding Arizona communities. Statewide Arizona routes are also available.",
        },
      },
      {
        "@type": "Question",
        name: "Is Freedom Line Freight Express available in my city?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you are in the Phoenix metro area or East Valley there is a good chance we serve your city. Text us at 480-742-8553 with your pickup and delivery address and we will confirm availability fast.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer vehicle concierge in the Phoenix metro area?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Vehicle concierge service is available in Phoenix, Mesa, Chandler, Gilbert, Queen Creek, San Tan Valley, Scottsdale, and Tempe. We pick up your car, take it to any service provider, and return it to your door.",
        },
      },
      {
        "@type": "Question",
        name: "Are you based locally in the East Valley?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Freedom Line Freight Express is owner operated and based in Queen Creek Arizona. We serve the entire East Valley and Phoenix metro area with fast local response times.",
        },
      },
    ],
  };

  const deliveryAreas = [
    {
      title: "Phoenix AZ",
      path: "/phoenix-delivery",
      conciergePath: "/vehicle-concierge-phoenix",
      description:
        "Vehicle pickup and delivery across all of Phoenix AZ. No towing and no trailer. We drive your vehicle directly to its destination with fast local service. Auto parts delivery, vehicle concierge, and business transport also available.",
    },
    {
      title: "Mesa AZ",
      path: "/mesa-delivery",
      conciergePath: "/vehicle-concierge-mesa",
      description:
        "Vehicle pickup, auto parts delivery, and vehicle concierge in Mesa AZ for repair shops, mechanics, dealerships, homeowners, and local customers. Same day service available.",
    },
    {
      title: "Chandler AZ",
      path: "/chandler-delivery",
      conciergePath: "/vehicle-concierge-chandler",
      description:
        "Same day auto parts delivery, vehicle transport, vehicle concierge, and business delivery services in Chandler AZ with direct pickup and reliable scheduling.",
    },
    {
      title: "Gilbert AZ",
      path: "/gilbert-delivery",
      conciergePath: "/vehicle-concierge-gilbert",
      description:
        "Reliable vehicle pickup and delivery in Gilbert AZ for personal vehicles, auto parts, and business items. Vehicle concierge also available for Gilbert homeowners and families.",
    },
    {
      title: "Queen Creek AZ",
      path: "/queen-creek-delivery",
      conciergePath: "/vehicle-concierge-queen-creek",
      description:
        "Our home base. Local vehicle delivery, vehicle concierge, and pickup service in Queen Creek AZ. Direct delivery for cars, parts, and business transport with the fastest local response times.",
    },
    {
      title: "San Tan Valley AZ",
      path: "/san-tan-valley-delivery",
      conciergePath: "/vehicle-concierge-san-tan-valley",
      description:
        "Vehicle pickup and delivery in San Tan Valley AZ. Based nearby in Queen Creek we offer fast same day response for San Tan Valley residents needing vehicle concierge or delivery service.",
    },
    {
      title: "Scottsdale AZ",
      path: "/scottsdale-delivery",
      conciergePath: "/vehicle-concierge-scottsdale",
      description:
        "Professional vehicle pickup and delivery service in Scottsdale AZ. Vehicle concierge available for North and South Scottsdale homeowners, professionals, and seniors.",
    },
    {
      title: "Tempe AZ",
      path: "/tempe-delivery",
      conciergePath: "/vehicle-concierge-tempe",
      description:
        "Vehicle pickup and delivery service in Tempe AZ. We help with car delivery, auto parts transport, vehicle concierge, and same day local delivery for Tempe residents.",
    },
    {
      title: "Casa Grande AZ",
      path: "/casa-grande-delivery",
      conciergePath: null,
      description:
        "Reliable pickup and delivery services in Casa Grande AZ for vehicles, auto parts, and business transport with flexible scheduling. Regional routes also available.",
    },
  ];

  const services = [
    {
      icon: Car,
      title: "Vehicle Pickup and Delivery",
      desc: "We personally drive your vehicle to its destination. No towing, no trailer, no middlemen. Owner operated and fully insured.",
      link: "/vehicle-delivery",
    },
    {
      icon: Wrench,
      title: "Auto Parts Delivery",
      desc: "Same day auto parts pickup and delivery for repair shops, dealerships, mobile mechanics, and local businesses across Phoenix metro.",
      link: "/auto-parts-delivery",
    },
    {
      icon: Package,
      title: "Vehicle Concierge",
      desc: "We pick up your car, take it to any service provider you choose, and return it to your door. Car wash, oil change, mechanic, and dealership trips.",
      link: "/vehicle-concierge",
    },
    {
      icon: Building2,
      title: "Business Transport",
      desc: "Direct delivery support for dealerships, repair shops, offices, and small businesses. Keys, titles, parts, and vehicle moves handled reliably.",
      link: "/courier",
    },
  ];

  const conciergeAreas = [
    ["Phoenix", "/vehicle-concierge-phoenix"],
    ["Mesa", "/vehicle-concierge-mesa"],
    ["Chandler", "/vehicle-concierge-chandler"],
    ["Gilbert", "/vehicle-concierge-gilbert"],
    ["Queen Creek", "/vehicle-concierge-queen-creek"],
    ["San Tan Valley", "/vehicle-concierge-san-tan-valley"],
    ["Scottsdale", "/vehicle-concierge-scottsdale"],
    ["Tempe", "/vehicle-concierge-tempe"],
  ];

  return (
    <>
      <Helmet>
        <title>Vehicle Delivery Service Areas in Arizona | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Freedom Line Freight Express serves Phoenix, Mesa, Chandler, Gilbert, Queen Creek, San Tan Valley, Scottsdale, Tempe, Casa Grande, and surrounding Arizona areas. Vehicle delivery, auto parts, and vehicle concierge. Text 480-742-8553."
        />
        <link rel="canonical" href="https://www.flfreightco.com/service-areas" />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-neutral-950 text-white">

        {/* HERO */}
        <section className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-black py-20 border-b border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500 bg-black/50 px-4 py-2 text-sm font-semibold">
              <MapPin className="text-orange-500" size={16} />
              Phoenix Metro and Arizona
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vehicle Delivery Service Areas in{" "}
              <span className="text-orange-500">Arizona</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Freedom Line Freight Express provides direct vehicle pickup and delivery,
              auto parts delivery, vehicle concierge, and business transport across
              Phoenix metro and Arizona. Owner operated, deaf owned, and fully insured.
              No towing and no trailers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors"
              >
                Request Pickup
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-black transition-colors"
              >
                <Phone className="mr-2" size={20} />
                Text for Quote
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              {[
                "Owner operated",
                "Fully insured",
                "Deaf owned business",
                "Same day available",
                "No towing or trailers",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle className="text-orange-500" size={14} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="border-b border-neutral-800 bg-black py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Car, label: "No Towing or Trailers", sub: "We drive your car directly" },
                { icon: Shield, label: "Fully Insured", sub: "Every single delivery" },
                { icon: Clock, label: "Same Day Available", sub: "When schedule allows" },
                { icon: Star, label: "Owner Operated", sub: "Based in Queen Creek AZ" },
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

        {/* SERVICE AREA CARDS */}
        <section className="py-20 bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Cities We <span className="text-orange-500">Serve</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Click any city to see specific service details, pricing, and availability
                for that area.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliveryAreas.map((area) => (
                <div
                  key={area.title}
                  className="bg-neutral-950 border border-neutral-800 p-6 rounded-xl hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <MapPin className="text-orange-500 mb-4" size={28} />
                  <h3 className="text-xl font-bold text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {area.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link
                      to={area.path}
                      className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-400 text-sm"
                    >
                      Vehicle Delivery
                      <ArrowRight className="ml-2" size={14} />
                    </Link>
                    {area.conciergePath && (
                      <Link
                        to={area.conciergePath}
                        className="inline-flex items-center text-gray-400 font-semibold hover:text-orange-400 text-sm"
                      >
                        Vehicle Concierge
                        <ArrowRight className="ml-2" size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-neutral-950 border-y border-neutral-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Services Available in <span className="text-orange-500">Every Area</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Whether you need a vehicle moved, auto parts delivered, or a car wash
                concierge we handle it across all of Phoenix metro.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map(({ icon: Icon, title, desc, link }) => (
                <div
                  key={title}
                  className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl hover:border-orange-500 transition-colors"
                >
                  <Icon className="text-orange-500 mb-4" size={30} />
                  <h3 className="font-bold text-white mb-3">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>
                  <Link
                    to={link}
                    className="inline-flex items-center text-orange-500 font-semibold text-sm hover:text-orange-400"
                  >
                    Learn more
                    <ArrowRight className="ml-2" size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VEHICLE CONCIERGE CLUSTER */}
        <section className="py-20 bg-neutral-900 border-b border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vehicle Concierge <span className="text-orange-500">by City</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We pick up your car from your home, take it to any service provider
              you choose, and return it to your door. Available across Phoenix metro.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {conciergeAreas.map(([city, link]) => (
                <Link
                  key={city}
                  to={link}
                  className="rounded-full border border-neutral-700 bg-neutral-950 px-5 py-2.5 text-sm text-gray-300 hover:border-orange-500 hover:text-orange-400 transition-colors"
                >
                  {city}
                </Link>
              ))}
            </div>
            <Link
              to="/vehicle-concierge"
              className="inline-flex items-center gap-2 text-orange-500 font-bold hover:text-orange-400 transition-colors"
            >
              Learn about vehicle concierge service
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="py-20 bg-neutral-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6 leading-tight">
                  Direct Vehicle Delivery Across{" "}
                  <span className="text-orange-500">Phoenix Metro</span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-5">
                  Freedom Line Freight Express is a deaf owned and owner operated
                  vehicle delivery service based in Queen Creek Arizona. We serve
                  the entire Phoenix metro area including Phoenix, Mesa, Chandler,
                  Gilbert, Queen Creek, San Tan Valley, Scottsdale, Tempe, and
                  Casa Grande.
                </p>
                <p className="text-gray-400 leading-relaxed mb-5">
                  Every delivery is handled personally by Sean, the owner. There is
                  no dispatcher, no app, and no random driver. You text us directly,
                  we confirm your quote, and we handle the delivery from pickup
                  to return with clear text updates every step of the way.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We communicate entirely by text which means every pickup confirmation,
                  update, and return notification arrives in writing. Clear, documented,
                  and reliable from start to finish across every city we serve.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 leading-tight">
                  Statewide Arizona Routes{" "}
                  <span className="text-orange-500">Also Available</span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-5">
                  In addition to Phoenix metro service, Freedom Line Freight Express
                  handles statewide Arizona vehicle delivery routes. Long distance
                  moves within Arizona are quoted individually based on distance,
                  route, and timing.
                </p>
                <p className="text-gray-400 leading-relaxed mb-5">
                  Whether you need a vehicle moved from Phoenix to Tucson, Flagstaff,
                  Yuma, or anywhere else in Arizona we can often accommodate the route.
                  Text us your pickup and delivery locations and we will confirm
                  availability and pricing fast.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Same day service is available in the Phoenix metro area. Statewide
                  routes are typically scheduled one to two days in advance depending
                  on distance and availability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Service Area <span className="text-orange-500">FAQ</span>
              </h2>
            </div>
            <div className="space-y-5">
              {[
                {
                  q: "What areas does Freedom Line Freight Express serve?",
                  a: "We serve Phoenix, Mesa, Chandler, Gilbert, Queen Creek, San Tan Valley, Scottsdale, Tempe, Casa Grande, and surrounding Arizona communities. Statewide Arizona routes are also available.",
                },
                {
                  q: "Is Freedom Line Freight Express available in my city?",
                  a: "If you are in the Phoenix metro area or East Valley there is a good chance we serve your city. Text us at 480-742-8553 with your pickup and delivery address and we will confirm availability fast.",
                },
                {
                  q: "Do you offer vehicle concierge across the Phoenix metro area?",
                  a: "Yes. Vehicle concierge service is available in Phoenix, Mesa, Chandler, Gilbert, Queen Creek, San Tan Valley, Scottsdale, and Tempe. We pick up your car, take it to any service provider, and return it to your door.",
                },
                {
                  q: "Are you based locally in the East Valley?",
                  a: "Yes. Freedom Line Freight Express is owner operated and based in Queen Creek Arizona. We serve the entire East Valley and Phoenix metro area with fast local response times.",
                },
                {
                  q: "Do you serve areas outside of Phoenix metro?",
                  a: "Yes. Statewide Arizona routes are available including Tucson, Flagstaff, Yuma, and other Arizona communities. Text us your route details for availability and pricing.",
                },
                {
                  q: "Is same day service available in all areas?",
                  a: "Same day service is available in the Phoenix metro area depending on schedule and route. Text us early for the best same day availability. Statewide routes are typically scheduled in advance.",
                },
              ].map(({ q, a }) => (
                <div
                  key={q}
                  className="bg-neutral-950 border border-neutral-800 p-6 rounded-xl hover:border-orange-500 transition-colors"
                >
                  <h3 className="font-bold text-white text-lg mb-3">{q}</h3>
                  <p className="text-gray-400 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-black md:text-5xl mb-4">
              Ready for Pickup and Delivery in Your Area?
            </h2>
            <p className="text-xl font-semibold text-orange-100 mb-2">
              Owner operated. Fully insured. Serving all of Phoenix metro and Arizona.
            </p>
            <p className="text-orange-100 mb-10">
              Text your pickup and delivery address for a fast quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Request a Quote
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                <Phone className="mr-2" size={20} />
                Text 480-742-8553
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}


