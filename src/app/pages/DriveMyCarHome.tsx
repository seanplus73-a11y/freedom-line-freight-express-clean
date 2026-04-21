import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  ArrowRight,
  Car,
  Clock,
  Home,
  MapPin,
  MessageSquare,
  Shield,
  CheckCircle,
} from "lucide-react";

export default function DriveMyCarHome() {
  const reasons = [
    {
      icon: Home,
      title: "Get Your Car Home Safely",
      description:
        "I personally drive your vehicle home so you do not need to leave it behind or arrange extra help.",
    },
    {
      icon: Clock,
      title: "Same Day or Next Day Availability",
      description:
        "Fast scheduling in most Arizona areas when you need your car moved quickly.",
    },
    {
      icon: Car,
      title: "No Towing Needed",
      description:
        "Your car is driven directly instead of being loaded onto a tow truck or trailer.",
    },
    {
      icon: MessageSquare,
      title: "Real Time Updates",
      description:
        "You get direct communication from pickup to drop off during the trip.",
    },
    {
      icon: Shield,
      title: "Owner Operated and Insured",
      description:
        "Your vehicle is handled personally with careful and accountable service.",
    },
    {
      icon: MapPin,
      title: "Local Arizona Coverage",
      description:
        "Serving Phoenix, San Tan Valley, Queen Creek, Gilbert, Chandler, Mesa, and nearby Arizona communities.",
    },
  ];

  const situations = [
    {
      title: "After a Long Day",
      description:
        "If you are tired, busy, or simply do not want to make another trip, I can drive your car home for you.",
    },
    {
      title: "From the Mechanic or Dealer",
      description:
        "Need your vehicle picked up after service or dropped back at your home? I can help.",
    },
    {
      title: "Family or Scheduling Help",
      description:
        "When work, kids, or a second vehicle make things difficult, direct car driving saves time.",
    },
    {
      title: "No Tow Truck Needed",
      description:
        "A simple direct solution when your vehicle can be driven and does not need towing.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Schedule Pickup",
      description:
        "Send the vehicle location, destination, and basic trip details.",
    },
    {
      number: "2",
      title: "Direct Driving Service",
      description:
        "I personally drive your car home with direct communication and real time updates.",
    },
    {
      number: "3",
      title: "Safe Drop Off",
      description:
        "Your car is delivered to your home or destination and the handoff is confirmed.",
    },
  ];

  const relatedServices = [
    {
      title: "Drive Car to Mechanic",
      description:
        "Need your vehicle taken to the repair shop or service center? I also handle mechanic drop offs.",
      link: "/drive-car-to-mechanic",
      cta: "View Mechanic Page",
    },
    {
      title: "Car Delivery Service",
      description:
        "Direct vehicle delivery for home, dealer, service, and local Arizona transport needs.",
      link: "/car-delivery-service",
      cta: "View Car Delivery Service",
    },
    {
      title: "Request Pickup",
      description:
        "Ready to move your car now? Get your instant mileage based quote.",
      link: "/request-pickup",
      cta: "Request Pickup",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Drive My Car Home Service Arizona | No Towing, No Waiting
        </title>
        <meta
          name="description"
          content="Need someone to drive your car home in Arizona? I personally drive your vehicle home with no towing, no trailer, and real time updates."
        />
        <meta
          name="keywords"
          content="drive my car home service Arizona, someone to drive my car home, drive my car home near me, car home delivery Arizona, personal vehicle driver Arizona"
        />
        <link
          rel="canonical"
          href="https://www.flfreightco.com/drive-my-car-home"
        />

        <meta
          property="og:title"
          content="Drive My Car Home Service Arizona | No Towing, No Waiting"
        />
        <meta
          property="og:description"
          content="I personally drive your car home across Arizona. No towing. No trailer. Just direct, owner operated service with real time updates."
        />
        <meta
          property="og:url"
          content="https://www.flfreightco.com/drive-my-car-home"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-[#111827] text-white">
        <section
          className="relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17,24,39,0.78), rgba(17,24,39,0.88)), url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
            <div className="max-w-4xl">
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#f97316] px-4 py-2 text-sm font-semibold text-white">
                  Home Drop Off
                </span>
                <span className="rounded-full border border-[#f97316] px-4 py-2 text-sm font-semibold text-white">
                  No Towing Needed
                </span>
                <span className="rounded-full border border-[#f97316] px-4 py-2 text-sm font-semibold text-white">
                  Same Day Available
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Drive My Car Home Service in Arizona
                <span className="block text-[#f97316]">
                  I Personally Drive It. No Towing. No Waiting.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
                Need someone to drive your car home? I provide direct car home
                delivery across Phoenix, San Tan Valley, Queen Creek, Gilbert,
                Chandler, Mesa, and nearby Arizona areas.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-7 text-gray-300 md:text-lg">
                No trailer. No tow truck. Just owner operated service with real
                time updates from pickup to drop off.
              </p>

              <p className="mt-4 text-base font-semibold text-white">
                Same day or next day availability in most areas.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center rounded-xl bg-[#f97316] px-6 py-4 text-base font-bold text-white transition hover:opacity-90"
                >
                  Get Instant Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10"
                >
                  View Pricing
                </Link>
              </div>

              <p className="mt-5 text-sm text-gray-300">
                Text 4807428553 for a fast response
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">
              When People Need
              <span className="text-[#f97316]"> Their Car Driven Home</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Real everyday situations where direct car driving makes life
              easier.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {situations.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0f172a]">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold text-white md:text-5xl">
                Why Choose This
                <span className="text-[#f97316]"> Drive My Car Home Service</span>
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                A direct, simple option when you need your car brought home
                without towing or extra delays.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {reasons.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg"
                  >
                    <div className="mb-5 inline-flex rounded-full bg-[#f97316] p-3">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-gray-300">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">
              How It <span className="text-[#f97316]">Works</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Simple direct service from pickup to home delivery.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f97316] text-3xl font-extrabold text-white">
                  {step.number}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0f172a]">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-extrabold text-white md:text-5xl">
                Drive My Car Home
                <span className="text-[#f97316]"> Near You</span>
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Looking for someone to drive your car home near you? I serve
                Phoenix, San Tan Valley, Queen Creek, Gilbert, Chandler, Mesa,
                and nearby Arizona communities with direct, owner operated
                vehicle delivery.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">
              Related <span className="text-[#f97316]">Vehicle Services</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              I also help with other direct vehicle delivery needs across
              Arizona.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {relatedServices.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-gray-300">
                  {item.description}
                </p>
                <Link
                  to={item.link}
                  className="mt-6 inline-flex items-center text-base font-bold text-[#f97316] hover:underline"
                >
                  {item.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f97316]">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center md:px-10 md:py-20">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">
              Need Your Car Driven Home Today?
            </h2>
            <p className="mt-4 text-lg font-medium text-white/90">
              Get your instant mileage based quote now. No obligation.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-4 text-base font-bold text-[#f97316] transition hover:opacity-90"
              >
                Request Pickup
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                to="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-white px-6 py-4 text-base font-bold text-white transition hover:bg-white/10"
              >
                View Pricing
              </Link>
            </div>

            <p className="mt-5 text-sm font-semibold text-white">
              Text 4807428553 for a fast response
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-extrabold text-white md:text-4xl">
                What You Get With Every Trip
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                "Direct pickup and home delivery",
                "No towing or trailer loading",
                "Owner operated service",
                "Real time communication",
                "Same day or next day availability in most areas",
                "Local Arizona coverage",
                "Careful handling of your vehicle",
                "Simple direct scheduling",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#111827] p-4"
                >
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#f97316]" />
                  <p className="text-base text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
