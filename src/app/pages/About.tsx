import {
  ArrowRight,
  CheckCircle,
  Shield,
  MessageSquare,
  Clock3,
  Truck,
  BadgeCheck,
  Phone,
  Building2,
  Package,
  Car,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Clear pricing, honest communication, and dependable service from pickup to delivery.",
    },
    {
      icon: BadgeCheck,
      title: "Direct Responsibility",
      description:
        "No brokers, no random hand-offs, and no unnecessary third parties involved.",
    },
    {
      icon: MessageSquare,
      title: "Professional Care",
      description:
        "Every vehicle and delivery is handled carefully with direct updates along the way.",
    },
    {
      icon: Clock3,
      title: "Reliability",
      description:
        "Fast response times, on-time coordination, and service you can count on.",
    },
  ];

  const whyChoose = [
    {
      icon: Truck,
      title: "No Waiting for Carrier Routes",
      description:
        "Your vehicle is driven directly where it needs to go without waiting on large carrier schedules.",
    },
    {
      icon: CheckCircle,
      title: "No Loading or Unloading Delays",
      description:
        "No trailer loading, no transfer terminals, and no wasted time between stops.",
    },
    {
      icon: Car,
      title: "Focused Vehicle Handling",
      description:
        "Direct driver service means more attention, fewer delays, and a smoother experience.",
    },
    {
      icon: Clock3,
      title: "Same-Day or Next-Day Availability",
      description:
        "Fast turnaround for customers who need speed, urgency, and direct transport.",
    },
    {
      icon: Phone,
      title: "Direct Communication",
      description:
        "Call, text, relay, or email for real-time updates and straightforward coordination.",
    },
    {
      icon: BadgeCheck,
      title: "Owner-Operated Accountability",
      description:
        "You work directly with the business, not a call center or a chain of dispatchers.",
    },
  ];

  const whoWeWorkWith = [
    "Dealerships",
    "Auto Repair Shops",
    "Private Owners",
    "Auctions",
    "Small Businesses",
    "Auto Parts Suppliers",
  ];

  const serviceAreas = [
    "Phoenix",
    "Mesa",
    "Chandler",
    "Gilbert",
    "Queen Creek",
    "San Tan Valley",
    "Scottsdale",
    "Tempe",
    "Glendale",
    "Peoria",
  ];

  return (
    <div className="bg-[#111827] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="C:\Users\seanj\Downloads\personal-vehicle-transport.jpg"
            alt="Clean vehicle in driveway"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#111827]/95 via-[#111827]/88 to-[#111827]/92" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#f97316]">
              About Freedom Line Freight Express
            </p>

            <h1 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
              Fast, Direct Vehicle Delivery Across Arizona
              <span className="block text-[#f97316]">
                No Brokers. No Waiting. No Middlemen.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              Freedom Line Freight Express was built for customers who want
              direct, reliable transport without the delays of traditional
              carriers. I personally focus on clear communication, careful
              handling, and fast turnaround from pickup to delivery.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-[#f97316]/40 bg-[#f97316]/10 px-4 py-2 text-slate-100">
                Owner-Operated
              </span>
              <span className="rounded-full border border-[#f97316]/40 bg-[#f97316]/10 px-4 py-2 text-slate-100">
                Same-Day / Next-Day Available
              </span>
              <span className="rounded-full border border-[#f97316]/40 bg-[#f97316]/10 px-4 py-2 text-slate-100">
                Direct Driver Communication
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:px-8">
        <div className="order-2 md:order-1">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f97316]">
            Our Story
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Built on a simple idea:
            <span className="block mt-2 text-slate-100">
              vehicle transport should be fast, direct, and stress-free.
            </span>
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
            <p>
              Instead of waiting days for large carriers or dealing with broker
              delays, Freedom Line Freight Express focuses on direct service and
              personal accountability.
            </p>

            <p>
              I personally coordinate transport with homes, dealerships,
              auctions, repair shops, and businesses that need speed, clear
              communication, and dependable delivery.
            </p>

            <p className="font-semibold text-[#f97316]">
              No trailers. No transfers. No unnecessary delays.
            </p>

            <p>
              Based in Arizona, I provide reliable same-day and next-day vehicle
              and delivery services for customers who prefer direct handling
              from start to finish.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Locally Owned & Operated",
              "Fully Insured Vehicle Transport",
              "Direct Driver Communication",
              "Fast Response Within 5–10 Minutes",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
              >
                <CheckCircle className="h-5 w-5 shrink-0 text-[#f97316]" />
                <span className="text-sm font-medium text-slate-100">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src="public/images/about-vehicle.png"
              alt="Clean vehicle parked in driveway"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            Who We Work With
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-300">
            Flexible service for personal customers and business clients across
            Arizona.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {whoWeWorkWith.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#f97316]/30 bg-[#f97316]/10 px-5 py-3 text-sm font-medium text-slate-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY / SERVICE IMAGE + TEXT */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:px-8">
        <div>
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src="/images/C:\Users\seanj\Downloads\about-delivery.png"
              alt="Direct delivery service with packages by vehicle"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f97316]">
            Direct Delivery Service
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Vehicle transport and delivery service
            <span className="block text-[#f97316]">without the carrier hassle.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Freedom Line Freight Express is designed for customers who want
            direct pickup and delivery instead of waiting through complicated
            transport chains. That includes personal vehicle delivery, auto
            parts transport, documents, and small business deliveries.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Building2 className="h-6 w-6 text-[#f97316]" />
              <h3 className="mt-3 text-lg font-semibold">Dealership & Auction Support</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Direct pickup and delivery for dealerships, auctions, sellers,
                and related businesses.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Package className="h-6 w-6 text-[#f97316]" />
              <h3 className="mt-3 text-lg font-semibold">Auto Parts & Small Packages</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Fast local and regional delivery for parts, documents, and
                smaller business shipments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CUSTOMERS CHOOSE */}
      <section className="bg-white/[0.03] border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f97316]">
              Why Customers Choose Freedom Line Freight Express
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Direct service that saves time and removes the usual delays
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Skip the broker chain and work directly with a service built
              around speed, accountability, and clear updates.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChoose.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-[#111827]/80 p-6 shadow-lg"
                >
                  <div className="inline-flex rounded-2xl bg-[#f97316]/15 p-3">
                    <Icon className="h-6 w-6 text-[#f97316]" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMUNICATION IMAGE SECTION */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f97316]">
            Clear Communication
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Real updates. Real answers.
            <span className="block text-[#f97316]">No guessing during transport.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Communication matters. Customers should know what is happening with
            their vehicle or delivery, when pickup is scheduled, and when to
            expect arrival.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            That is why Freedom Line Freight Express focuses on direct contact
            by text, email, relay, or phone so you can get quick answers and
            real-time coordination without confusion.
          </p>

          <div className="mt-8 grid gap-4">
            {[
              "Fast quote responses",
              "Direct text, relay, phone, and email communication",
              "Pickup and delivery coordination updates",
              "Straightforward service with no broker runaround",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
              >
                <MessageSquare className="h-5 w-5 shrink-0 text-[#f97316]" />
                <span className="text-sm font-medium text-slate-100">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src="/images/about-support.png"
              alt="Customer communication and support"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-white/[0.03] border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f97316]">
              Our Core Values
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              The principles behind every pickup and delivery
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-[#111827]/80 p-6"
                >
                  <div className="inline-flex rounded-2xl bg-[#f97316]/15 p-3">
                    <Icon className="h-6 w-6 text-[#f97316]" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f172a] shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f97316]">
                Our Service Area
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                Arizona-based service with nearby states available on request
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Based in Arizona, Freedom Line Freight Express specializes in
                reliable local and regional transport. Most service is centered
                around Arizona, with nearby state requests handled based on
                availability and route fit.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {serviceAreas.map((area) => (
                  <div
                    key={area}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100"
                  >
                    {area}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#f97316]/30 bg-[#f97316]/10 p-4 text-sm text-slate-100">
                Out-of-state transport is limited and based on scheduling and
                availability.
              </div>
            </div>

            <div className="min-h-[320px] md:min-h-full">
              <img
                src="/images/about-arizona.png"
                alt="Arizona skyline and bridge at night"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#f97316]">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center md:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Need fast, reliable delivery?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-orange-50">
            Skip the broker chain and work directly with Freedom Line Freight
            Express for vehicle transport, parts delivery, and business
            shipments across Arizona.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/request-pickup"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-[#f97316] shadow-lg transition hover:scale-[1.02]"
            >
              Get Instant Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <a
              href="/pricing"
              className="inline-flex items-center justify-center rounded-2xl border border-white/70 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
