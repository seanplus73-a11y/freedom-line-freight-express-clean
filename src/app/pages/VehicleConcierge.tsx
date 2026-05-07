import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  Sparkles,
  Car,
  Clock,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
  Star,
  Wrench,
  Droplets,
  Users,
  HeartHandshake,
  Zap,
  CalendarCheck,
} from "lucide-react";

export default function VehicleConcierge() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vehicle Concierge Services Phoenix",
    serviceType: "Vehicle Concierge Service",
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
      "Vehicle concierge services in Phoenix Arizona. We pick up your car, take it to service providers, and return it to you. Car wash runs, oil changes, tire service, and senior vehicle assistance.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a vehicle concierge service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A vehicle concierge service picks up your car, takes it to a service provider like a car wash or mechanic, and returns it to you when done. You never have to leave your home or office.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer vehicle concierge for seniors in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Freedom Line Freight Express offers vehicle concierge specifically for seniors who need help getting their car to service appointments. We handle the entire process so you do not have to.",
        },
      },
      {
        "@type": "Question",
        name: "How much does vehicle concierge cost in Phoenix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vehicle concierge pricing depends on distance and service type. Text us at 480-742-8553 with your location and service needed for a fast quote.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you serve for vehicle concierge?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve Phoenix, Mesa, Chandler, Gilbert, Queen Creek, Scottsdale, Tempe, San Tan Valley, Casa Grande and surrounding areas.",
        },
      },
      {
        "@type": "Question",
        name: "Is your vehicle concierge service insured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Freedom Line Freight Express is fully insured for every vehicle concierge job. Your car is in safe hands from pickup to return.",
        },
      },
    ],
  };

  const services = [
    {
      icon: Droplets,
      title: "Car Wash Pickup and Return",
      desc: "We pick up your vehicle, take it to a trusted local car wash, and return it clean to your door. You stay home while we handle everything for you.",
    },
    {
      icon: Wrench,
      title: "Oil Change and Tire Service",
      desc: "No more waiting at the shop. We take your car to the service center, wait, and bring it back when done. You keep your day moving.",
    },
    {
      icon: Users,
      title: "Senior Vehicle Assistance",
      desc: "Designed for seniors who need a reliable hand. We handle the entire process from pickup to return with patience and clear communication.",
    },
    {
      icon: CalendarCheck,
      title: "Scheduled Maintenance Runs",
      desc: "Have a regular service schedule? We can handle recurring maintenance pickups so you never have to worry about missing an appointment.",
    },
    {
      icon: HeartHandshake,
      title: "Dealership Service Appointments",
      desc: "Taking your car to the dealership for warranty work or recalls? We pick it up and return it so you never lose a day sitting in the waiting room.",
    },
    {
      icon: Zap,
      title: "Same Day Concierge Available",
      desc: "Need it done today? Same day vehicle concierge is available across Phoenix metro depending on schedule and route. Text us to confirm.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Text Your Request",
      desc: "Send us your location, the service your car needs, and your preferred time. We respond fast.",
    },
    {
      step: "2",
      title: "We Pick Up Your Car",
      desc: "The owner arrives at your home or office and picks up your vehicle at the agreed time.",
    },
    {
      step: "3",
      title: "Service Is Completed",
      desc: "We take your car to the service provider and wait or return when notified it is ready.",
    },
    {
      step: "4",
      title: "Returned to Your Door",
      desc: "Your vehicle is driven back to you clean, serviced, and ready to go. Simple as that.",
    },
  ];

  const whoItIsFor = [
    "Busy professionals who cannot take time off work",
    "Seniors who prefer not to drive to service appointments",
    "Parents managing kids and schedules",
    "Anyone who values their time",
    "Business owners with fleet vehicles",
    "People recovering from illness or surgery",
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
        <title>Vehicle Concierge Services Phoenix | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Vehicle concierge services in Phoenix Arizona. We pick up your car, take it to service providers, and return it to you. Car wash runs, oil changes, tire service, and senior vehicle assistance. Text 480-742-8553."
        />
        <link rel="canonical" href="https://www.flfreightco.com/vehicle-concierge" />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="bg-neutral-950 text-white min-h-screen">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-black py-24">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-orange-500/5 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500 bg-black/50 px-4 py-2 text-sm font-semibold">
                <Sparkles className="text-orange-500" size={16} />
                New Convenience Service — Phoenix Metro
              </div>

              <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                Vehicle Concierge{" "}
                <span className="text-orange-500">Services</span>
                <span className="block text-2xl md:text-3xl font-bold text-gray-300 mt-3">
                  We Pick Up Your Car. Handle the Service. Return It to Your Door.
                </span>
              </h1>

              <p className="mb-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Too busy to sit at the car wash or mechanic? We handle it for you.
                Freedom Line Freight Express picks up your vehicle, takes it to your
                chosen service provider, and returns it to your home or office.
                You never have to leave.
              </p>

              <p className="mb-8 text-orange-400 font-bold text-xl">
                📞 Text or call: 480-742-8553
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
              <Link
  to="/contact"
  className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-orange-600 hover:bg-gray-100 transition-colors"
>
  Request Concierge Service
  <ArrowRight className="ml-2" size={22} />
</Link>

<Link
  to="/contact"
  className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 text-lg font-bold text-white hover:bg-white hover:text-orange-600 transition-colors"
>
  <Phone className="mr-2" size={20} />
  Text 480-742-8553
</Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 text-sm text-gray-300">
                {[
                  "Owner operated",
                  "Fully insured",
                  "Deaf owned business",
                  "Same day available",
                  "Phoenix metro",
                  "Text preferred",
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

        {/* TRUST BAR */}
        <section className="border-y border-neutral-800 bg-black py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Car, label: "We Drive Your Car", sub: "You stay home" },
                { icon: ShieldCheck, label: "Fully Insured", sub: "Every single job" },
                { icon: Clock, label: "Same Day Available", sub: "When you need it fast" },
                { icon: Star, label: "Owner Operated", sub: "Deaf-owned local business" },
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

        {/* SERVICES */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Vehicle Concierge{" "}
                <span className="text-orange-500">Services</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                We handle the driving so you can focus on your day. Here is what
                our vehicle concierge service covers across Phoenix metro.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, desc }) => (
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
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                How Vehicle Concierge{" "}
                <span className="text-orange-500">Works</span>
              </h2>
              <p className="text-lg text-gray-300">
                Four simple steps and your car is handled without you going anywhere.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {howItWorks.map(({ step, title, desc }) => (
                <div key={step} className="relative text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-xl font-black text-white">
                    {step}
                  </div>
                  <h3 className="mb-2 font-bold text-white">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                  {parseInt(step) < 4 && (
                    <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-orange-500/30" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-orange-500/30 bg-orange-500/5 p-6 text-center">
              <p className="text-white font-semibold mb-2">
                Ready to get started? Text us your details right now.
              </p>
             <Link
  to="/contact"
  className="text-orange-400 font-bold text-lg hover:text-orange-300 transition-colors"
>
  Text or call: 480-742-8553
</Link>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Vehicle Concierge{" "}
                <span className="text-orange-500">Pricing</span>
              </h2>
              <p className="text-lg text-gray-300">
                Simple flat rate pricing based on distance. Service cost is separate
                and paid directly by you to the provider.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              {[
                {
                  label: "Local Pickup and Return",
                  range: "0 to 10 miles",
                  price: "$45",
                  note: "Starting price",
                  highlight: false,
                },
                {
                  label: "Extended Local",
                  range: "10 to 25 miles",
                  price: "$65",
                  note: "Starting price",
                  highlight: true,
                },
                {
                  label: "Longer Distance",
                  range: "25 plus miles",
                  price: "Custom",
                  note: "Text for quote",
                  highlight: false,
                },
              ].map(({ label, range, price, note, highlight }) => (
                <div
                  key={label}
                  className={`relative rounded-xl border p-8 text-center transition-all ${
                    highlight
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-neutral-700 bg-neutral-900"
                  }`}
                >
                  {highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-white whitespace-nowrap">
                      Most Common
                    </div>
                  )}
                  <div className="mb-2 text-sm font-medium text-gray-400">{label}</div>
                  <div className="mb-1 text-xs text-gray-500">{range}</div>
                  <div className="mb-2 text-5xl font-black text-white">{price}</div>
                  <div className="text-xs text-orange-400 font-medium">{note}</div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 mb-4">
              <h3 className="font-bold text-white mb-3">What is included in the service cost?</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                The pricing above covers pickup, transport, and return of your vehicle.
The actual service cost such as car wash, oil change, tire rotation, dealership visit, or any other service is separate and paid directly by you to the service provider.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Car wash",
                  "Oil change",
                  "Tire rotation",
                  "Tire service",
                  "Dealership visit",
                  "Scheduled maintenance",
                ].map((example) => (
                  <span
                    key={example}
                    className="rounded-full border border-neutral-700 bg-neutral-950 px-3 py-1 text-xs text-gray-400"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-white mb-1">
                    Final price depends on distance, wait time, and service type.
                  </p>
                  <p className="text-sm text-gray-400">
                    Extended wait time at service locations may be billed additionally.
                    Text me and I will give you an exact quote before anything is confirmed.
                  </p>
                </div>
               <Link
  to="/contact"
  className="flex-shrink-0 inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600 transition-colors"
>
  <Phone size={16} />
  Text for Quote
</Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="py-20 bg-neutral-950">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight">
                  Who Is Vehicle Concierge{" "}
                  <span className="text-orange-500">For?</span>
                </h2>
                <p className="mb-8 text-gray-300 leading-relaxed text-lg">
                  Anyone who values their time and does not want to spend it sitting
                  at a car wash or mechanic. Our vehicle concierge service is built
                  for people who have better things to do.
                </p>
                <ul className="space-y-4">
                  {whoItIsFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-orange-500/10">
                        <CheckCircle className="text-orange-500" size={14} />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-5">
                <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-7">
                  <h3 className="mb-3 text-xl font-bold text-orange-400">
                    Senior Vehicle Concierge
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We have a special appreciation for our senior customers. Getting
a car to a service appointment can be stressful and inconvenient.
Our vehicle concierge removes that burden completely. We handle
everything with patience and clear communication with text preferred
for all updates.
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-7">
                  <h3 className="mb-3 text-xl font-bold text-white">
                    Deaf-Owned Business
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Freedom Line Freight Express is a deaf-owned and operated business.
                    We communicate primarily by text which means you always have a
                    written record of every update, pickup time, and delivery
                    confirmation. Clear and reliable from start to finish.
                  </p>
                </div>
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
                  q: "What is a vehicle concierge service?",
                  a: "We pick up your car, take it to a service provider like a car wash or mechanic, and return it to you when done. You never have to leave your home or office.",
                },
                {
                  q: "Do you offer vehicle concierge for seniors in Phoenix?",
                  a: "Yes. We offer vehicle concierge specifically for seniors who need help getting their car to service appointments. We handle the entire process with patience and clear text communication.",
                },
                {
                  q: "How much does vehicle concierge cost in Phoenix?",
                  a: "Pricing depends on distance and service type. Text us at 480-742-8553 with your location and service needed and we will get back to you fast with a clear price.",
                },
                {
                  q: "What areas do you serve for vehicle concierge?",
                  a: "We serve Phoenix, Mesa, Chandler, Gilbert, Queen Creek, Scottsdale, Tempe, San Tan Valley, Casa Grande and surrounding areas.",
                },
                {
                  q: "Is your vehicle concierge service insured?",
                  a: "Yes. Freedom Line Freight Express is fully insured for every vehicle concierge job. Your car is in safe hands from pickup to return.",
                },
                {
                  q: "Do I need to be home when you pick up my car?",
                  a: "Not necessarily. We can arrange key pickup and return details that work for your schedule. Text us and we will figure out a solution that is convenient for you.",
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
              Vehicle Concierge Service Areas
            </h2>
            <p className="mb-8 text-gray-400">
              Serving Phoenix metro and East Valley communities.
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
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Related Services
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                ["Vehicle Delivery Phoenix", "/vehicle-delivery-phoenix"],
                ["Auto Transport Phoenix", "/auto-transport-phoenix"],
                ["Car Transport Phoenix", "/car-transport-phoenix"],
                ["Auto Parts Delivery", "/auto-parts-delivery"],
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
        <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-4xl font-black md:text-5xl">
              Ready to Try Vehicle Concierge?
            </h2>
            <p className="mb-2 text-xl font-semibold text-orange-100">
              We pick up your car, handle the service, and return it to your door.
            </p>
            <p className="mb-10 text-orange-100">
              Text us your location and what service your car needs for a fast quote.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-orange-600 hover:bg-gray-100 transition-colors"
              >
                Request Concierge Service
                <ArrowRight className="ml-2" size={22} />
             <Link
  to="/contact"
  className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 text-lg font-bold text-white hover:bg-white hover:text-orange-600 transition-colors"
>
  <Phone className="mr-2" size={20} />
  Text 480-742-8553
</Link>

</div>
</div>
</section>

</main>
</>
);
}
