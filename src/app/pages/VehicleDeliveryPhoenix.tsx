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
  Wrench,
  Building2,
  Users,
  Key,
  Repeat,
} from "lucide-react";

export default function VehicleDeliveryPhoenix() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vehicle Delivery Phoenix",
    serviceType: "Drive-Away Vehicle Delivery Service",
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
      "Same day vehicle delivery in Phoenix. We drive your car directly to its destination. No towing, no trailers. Owner-operated, fully insured drive-away delivery service.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is drive-away vehicle delivery in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Drive-away vehicle delivery means a professional driver picks up your vehicle and drives it directly to its destination. No tow truck, no trailer. Freedom Line Freight Express provides this service across Phoenix metro.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can you deliver a vehicle in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Same day vehicle delivery is available in Phoenix depending on schedule and route. Text us with your pickup and delivery details and we will confirm availability right away.",
        },
      },
      {
        "@type": "Question",
        name: "Is vehicle delivery cheaper than towing in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Drive-away vehicle delivery from Freedom Line Freight Express starts at $85 for moves up to 25 miles, which is often less expensive than towing for driveable vehicles.",
        },
      },
      {
        "@type": "Question",
        name: "What types of vehicles do you deliver in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We deliver cars, trucks, SUVs, and vans throughout Phoenix metro. The vehicle must be road legal and in driveable condition.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver vehicles to mechanics and dealerships in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Vehicle delivery to mechanics, dealerships, auctions, and private locations is our core service. We serve all of Phoenix metro including Mesa, Chandler, Gilbert, Scottsdale, Queen Creek, and surrounding areas.",
        },
      },
    ],
  };

 
      const useCases = [
    {
      icon: Wrench,
      title: "Mechanic and Shop Runs",
      desc: "Your car needs to go to the shop but you have no way to get it there or no ride back. We pick it up and drive it directly to your mechanic.",
    },
    {
      icon: Car,
      title: "New Car Pickup and Delivery",
      desc: "Bought a car across town, at an auction, or from a private seller? We pick it up and deliver it to your home or mechanic for inspection.",
    },
    {
      icon: Building2,
      title: "Dealership Transport",
      desc: "Inventory swaps, customer deliveries, lot to lot transfers. We handle dealer vehicle movement across the Phoenix metro area.",
    },
    {
      icon: Key,
      title: "Post-Repair Pickup",
      desc: "Your car is ready at the shop but you are at work. We pick it up and deliver it to your home or office while you keep your day moving.",
    },
    {
      icon: Users,
      title: "Private Buyer and Seller",
      desc: "Selling a car and need it delivered to the buyer? Buying one and need it transported? We make private party vehicle transfers simple.",
    },
    {
      icon: Repeat,
      title: "Fleet and Business Moves",
      desc: "Moving multiple vehicles between locations or need regular vehicle transport for your business? We offer repeat service for local companies.",
    },
  ];

  const steps = [
    {
      number: "01",
     title: "Contact Us",
desc: "Call, text, or request a quote online with your pickup address, delivery address, and vehicle type.",
    },
    {
      number: "02",
      title: "Confirm Your Quote",
      desc: "We reply fast with flat rate pricing and same day availability.",
    },
    {
      number: "03",
      title: "We Drive Your Vehicle",
      desc: "The owner personally picks up and drives your vehicle to its destination.",
    },
    {
      number: "04",
      title: "Delivered and Done",
      desc: "You get confirmation the moment your vehicle arrives safely.",
    },
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
        <title>Vehicle Delivery Phoenix | Same Day Car Transport | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Vehicle delivery in Phoenix done right. We drive your car directly to its destination — no towing, no trailers. Same day service available. Owner-operated and fully insured. Text 480-742-8553."
        />
        <link rel="canonical" href="https://www.flfreightco.com/vehicle-delivery-phoenix" />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="bg-neutral-950 text-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-neutral-950 py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(234,93,4,0.12),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(234,93,4,0.05),_transparent_50%)]" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="grid gap-12 lg:grid-cols-2 items-center">

              {/* Left */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/5 px-4 py-2 text-sm font-semibold text-orange-400">
                  <MapPin size={14} />
                  Phoenix Metro
                </div>

                <h1 className="mb-6 text-5xl font-black leading-none md:text-6xl lg:text-7xl">
                  <span className="text-white">Vehicle</span>
                  <br />
                  <span className="text-orange-500">Delivery</span>
                  <br />
                  <span className="text-white">Phoenix</span>
                
                </h1>

                <div className="mb-6 h-1 w-24 rounded-full bg-orange-500" />

                <p className="mb-4 text-xl font-bold text-white">
                  We drive your car directly to its destination.
                </p>
                <p className="mb-6 text-lg text-gray-400 leading-relaxed">
                  Looking for car transport in Phoenix? Our vehicle delivery service is a faster, more affordable alternative to traditional auto transport.
                </p>

                <p className="mb-8 text-orange-400 font-bold text-lg">
                  📞Call, text, or request a quote online
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/request-pickup"
                    className="inline-flex items-center justify-center rounded-md bg-orange-500 px-7 py-4 text-base font-bold text-white hover:bg-orange-600 transition-colors"
                  >
                    Request Delivery
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                  <a
                    href="tel:4807428553"
                    className="inline-flex items-center justify-center rounded-md border border-neutral-700 bg-neutral-900 px-7 py-4 text-base font-bold text-white hover:border-orange-500 transition-colors"
                  >
                    <Phone className="mr-2" size={18} />
                    480-742-8553
                  </a>
                </div>
              </div>

              {/* Right — stat cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "Same Day", label: "Delivery Available", accent: true },
                  { value: "No Tow", label: "We Drive It Directly", accent: false },
                  { value: "Insured", label: "Every Single Job", accent: false },
                  { value: "Owner", label: "Answers Every Call", accent: true },
                ].map(({ value, label, accent }) => (
                  <div
                    key={label}
                    className={`rounded-xl border p-6 ${
                      accent
                        ? "border-orange-500/40 bg-orange-500/5"
                        : "border-neutral-800 bg-neutral-900"
                    }`}
                  >
                    <div className="mb-1 text-2xl font-black text-orange-500">{value}</div>
                    <div className="text-sm text-gray-400">{label}</div>
                  </div>
                ))}

                <div className="col-span-2 rounded-xl border border-neutral-800 bg-neutral-900 p-5">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-500">
                    Flat Rate Pricing
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[
                      { range: "0-25 mi", price: "$85" },
                      { range: "25-50 mi", price: "$125" },
                      { range: "50-150 mi", price: "$250" },
                    ].map(({ range, price }) => (
                      <div key={range}>
                        <div className="text-xl font-black text-white">{price}</div>
                        <div className="text-xs text-gray-500">{range}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-5 text-sm text-gray-400 border-t border-neutral-800 pt-8">
              {[
                "Owner-operated",
                "Fully insured",
                "No towing or trailers",
                "Same day available",
                "Phoenix metro and East Valley",
                "Real communication start to finish",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle className="text-orange-500" size={14} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT IS DRIVE-AWAY DELIVERY */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  What Is{" "}
                  <span className="text-orange-500">Drive-Away</span>{" "}
                  Vehicle Delivery?
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed text-lg">
                 Drive away delivery means a professional driver picks up your vehicle and drives it directly to its destination, just like you would, except you do not have to be there.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  There is no tow truck and no flatbed. No enclosed trailer moving your vehicle across the country. Just a trusted, insured driver behind the wheel getting your car where it needs to go.
                </p>
                <p className="mb-8 text-gray-400 leading-relaxed">
                 For local moves in Phoenix to a mechanic, dealer, auction, or private buyer, drive away delivery is the fastest and most affordable way to move your vehicle without the hassle of towing or trailers.
                </p>
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600 transition-colors"
                >
                  Get Quote Online <ArrowRight size={18} />
                </Link>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Your car is driven, not towed",
                    desc: "No straps, no flatbed, no damage risk from improper loading. Your vehicle is driven as it was meant to be.",
                  },
                  {
                    title: "Faster than traditional transport",
                    desc: "No scheduling a trailer weeks out. Same day delivery is available in Phoenix when you need it fast.",
                  },
                  {
                    title: "More affordable for local moves",
                    desc: "Flat rate pricing starting at $85. No fuel surcharges, no trailer fees, no hidden costs.",
                  },
                  {
                    title: "You talk to the owner every time",
                    desc: "No dispatcher, no call center. Sean answers directly and drives your vehicle personally.",
                  },
                ].map(({ title, desc }) => (
                  <div
                    key={title}
                    className="flex gap-4 rounded-xl border border-neutral-800 bg-neutral-950 p-5 hover:border-orange-500/50 transition-colors"
                  >
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-orange-500">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">{title}</div>
                      <div className="text-sm text-gray-400 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                When Do You Need{" "}
                <span className="text-orange-500">Vehicle Delivery</span>{" "}
                in Phoenix?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                Any time your vehicle needs to be somewhere and you cannot or do not
                want to drive it yourself.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group rounded-xl border border-neutral-800 bg-neutral-900 p-7 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                    <Icon className="text-orange-500" size={22} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                How Vehicle Delivery{" "}
                <span className="text-orange-500">Works</span>
              </h2>
              <p className="text-lg text-gray-300">
                Simple process. Fast response. No surprises.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ number, title, desc }) => (
                <div key={number} className="relative">
                  <div className="mb-5 text-6xl font-black text-orange-500/20 leading-none">
                    {number}
                  </div>
                  <div className="mb-1 h-0.5 w-10 bg-orange-500 rounded-full" />
                  <h3 className="mt-4 mb-3 text-lg font-bold text-white">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 text-center">
              <p className="text-white font-semibold mb-2">
               Ready to get started? Call, text, or request a quote online.
              </p>
              <a
                href="tel:4807428553"
                className="text-orange-400 font-bold text-lg hover:text-orange-300 transition-colors"
              >
                📞 480-742-8553
              </a>
            </div>
          </div>
        </section>

        {/* KEYWORDS / SECONDARY SEO SECTION */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 items-start">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Same Day Car Transport{" "}
                  <span className="text-orange-500">Phoenix</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  When you need a vehicle moved in Phoenix today, Freedom Line Freight Express
                  is ready. We offer same day car transport across the entire Phoenix metro area
                  including Mesa, Chandler, Gilbert, Scottsdale, Queen Creek, and Tempe.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  Unlike traditional auto transport companies that schedule days or weeks out,
                  we operate locally and can often accommodate same day and next day vehicle
                  delivery requests depending on availability.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Text us your details and we will confirm availability within minutes.
                  No waiting on hold. No automated systems. Just a direct response from
                  the owner.
                </p>
              </div>

              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Car Transport Phoenix{" "}
                  <span className="text-orange-500">Without a Trailer</span>
                </h2>
                <p className="mb-5 text-gray-300 leading-relaxed">
                  Most car transport services in Phoenix use enclosed or open trailers
                  designed for long distance shipping. That is great for moving a vehicle
                  across the country but it is expensive and slow for local Phoenix moves.
                </p>
                <p className="mb-5 text-gray-400 leading-relaxed">
                  Freedom Line Freight Express operates differently. We are a drive-away
                  service — meaning we drive your vehicle directly from point A to point B
                  in Phoenix without any trailer equipment. The result is faster scheduling,
                  lower pricing, and a more personal experience.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  If your vehicle is driveable, this is almost always the better option
                  for Phoenix metro moves.
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
                Frequently Asked{" "}
                <span className="text-orange-500">Questions</span>
              </h2>
            </div>
            <div className="space-y-5">
              {[
                {
                  q: "What is drive-away vehicle delivery in Phoenix?",
                  a: "Drive-away delivery means a professional driver picks up your vehicle and drives it directly to its destination. No tow truck, no trailer. We handle vehicle delivery this way across all of Phoenix metro.",
                },
                {
                  q: "How fast can you deliver a vehicle in Phoenix?",
                  a: "Same day vehicle delivery is available depending on schedule and route. Text us with your details and we confirm availability right away.",
                },
                {
                  q: "Is vehicle delivery cheaper than towing in Phoenix?",
                  a: "In most cases yes. Our flat rate pricing starts at $85 for moves up to 25 miles which is often less than a tow truck for driveable vehicles.",
                },
                {
                  q: "What types of vehicles do you deliver in Phoenix?",
                  a: "Cars, trucks, SUVs, and vans throughout Phoenix metro. The vehicle must be road legal and in driveable condition.",
                },
                {
                  q: "Do you deliver vehicles to mechanics and dealerships in Phoenix?",
                  a: "Yes. Mechanic drop-offs, dealership transfers, auction pickups, and private buyer deliveries are all part of what we do every day.",
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
              Vehicle Delivery Service Areas in Phoenix Metro
            </h2>
            <p className="mb-8 text-gray-400">
              Serving all of Phoenix and the East Valley. Click your city for local details.
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
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-gray-500">
              Related Services
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                ["Auto Transport Phoenix", "/auto-transport-phoenix"],
                ["Auto Parts Delivery", "/auto-parts-delivery"],
                ["Vehicle Delivery", "/vehicle-delivery"],
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
        <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-4xl font-black md:text-5xl">
              Need a Vehicle Delivered in Phoenix?
            </h2>
            <p className="mb-2 text-xl font-semibold text-orange-100">
              Same day drive-away delivery available across Phoenix metro.
            </p>
            <p className="mb-10 text-orange-100">
              Call, text, or request a quote online with your pickup and delivery details for a fast response.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-orange-600 hover:bg-gray-100 transition-colors"
              >
                Get Quote Online
                <ArrowRight className="ml-2" size={22} />
              </Link>
              <a
                href="tel:4807428553"
                className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 text-lg font-bold text-white hover:bg-white hover:text-orange-600 transition-colors"
              >
               <Phone className="mr-2" size={20} />
Call 480-742-8553
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
