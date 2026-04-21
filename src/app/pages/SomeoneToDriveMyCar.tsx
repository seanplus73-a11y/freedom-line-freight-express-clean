import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  ArrowRight,
  Car,
  Clock,
  MapPin,
  MessageSquare,
  Shield,
  UserCheck,
  Briefcase,
  CheckCircle,
} from "lucide-react";

export default function SomeoneToDriveMyCar() {
  const reasons = [
    {
      icon: UserCheck,
      title: "Personal Driver for Your Vehicle",
      description:
        "I personally drive your vehicle instead of putting it on a tow truck or trailer.",
    },
    {
      icon: Clock,
      title: "Same Day or Next Day Availability",
      description:
        "Fast scheduling in most Arizona areas when you need help moving your car quickly.",
    },
    {
      icon: MessageSquare,
      title: "Real Time Updates",
      description:
        "You get direct communication and trip updates from pickup to drop off.",
    },
    {
      icon: Shield,
      title: "Owner Operated and Insured",
      description:
        "Your vehicle is handled directly with careful, accountable service.",
    },
    {
      icon: MapPin,
      title: "Arizona Coverage",
      description:
        "Serving Phoenix, San Tan Valley, Queen Creek, Gilbert, Chandler, Mesa, and nearby Arizona communities.",
    },
    {
      icon: Car,
      title: "No Towing Needed",
      description:
        "A simple direct option when your vehicle can be driven and does not need towing.",
    },
  ];

  const useCases = [
    {
      title: "Drive My Car Home",
      description:
        "Need your car brought home safely without arranging a tow truck or second driver? I can help.",
    },
    {
      title: "Take My Car to the Mechanic",
      description:
        "If your schedule is packed or you cannot make the trip yourself, I can drive it to the shop.",
    },
    {
      title: "Dealer and Service Appointments",
      description:
        "I can take your vehicle to a dealership, service center, or maintenance appointment.",
    },
    {
      title: "Busy Work or Family Schedule",
      description:
        "Save time when work, kids, or daily responsibilities make car drop off difficult.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Send Trip Details",
      description:
        "Tell me where the vehicle is located and where you need it taken.",
    },
    {
      number: "2",
      title: "Direct Vehicle Driving",
      description:
        "I personally drive your car to the destination with direct communication.",
    },
    {
      number: "3",
      title: "Drop Off Confirmed",
      description:
        "Your vehicle is delivered and the pickup or handoff is confirmed.",
    },
  ];

  const relatedServices = [
    {
      title: "Drive Car to Mechanic",
      description:
        "Need your vehicle dropped off at the repair shop or service center? View this page next.",
      link: "/drive-car-to-mechanic",
      cta: "View Mechanic Page",
    },
    {
      title: "Drive My Car Home",
      description:
        "Need your vehicle brought home safely without towing? I handle that too.",
      link: "/drive-my-car-home",
      cta: "View Home Delivery Page",
    },
    {
      title: "Car Delivery Service",
      description:
        "Direct vehicle delivery across Arizona for home, dealer, and service related trips.",
      link: "/car-delivery-service",
      cta: "View Car Delivery Service",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Someone To Drive My Car Arizona | No Towing, Direct Service
        </title>
        <meta
          name="description"
          content="Need someone to drive your car in Arizona? I personally drive your vehicle home, to the mechanic, dealership, or another destination with no towing and real time updates."
        />
        <meta
          name="keywords"
          content="someone to drive my car Arizona, need someone to drive my car, driver for my car Arizona, someone to drive car near me, personal car driving service Arizona"
        />
        <link
          rel="canonical"
          href="https://www.flfreightco.com/someone-to-drive-my-car"
        />

        <meta
          property="og:title"
          content="Someone To Drive My Car Arizona | No Towing, Direct Service"
        />
        <meta
          property="og:description"
          content="I personally drive your vehicle across Arizona with no towing, no trailer, and real time updates from pickup to drop off."
        />
        <meta
          property="og:url"
          content="https://www.flfreightco.com/someone-to-drive-my-car"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-[#111827] text-white">
        <section
          className="relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17,24,39,0.80), rgba(17,24,39,0.88)), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
            <div className="max-w-4xl">
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#f97316] px-4 py-2 text-sm font-semibold text-white">
                  Personal Vehicle Driver
                </span>
                <span className="rounded-full border border-[#f97316] px-4 py-2 text-sm font-semibold text-white">
                  No Towing Needed
                </span>
                <span className="rounded-full border border-[#f97316] px-4 py-2 text-sm font-semibold text-white">
                  Same Day Available
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Someone To Drive My Car in Arizona
                <span className="block text-[#f97316]">
                  I Personally Drive It. No Towing. No Waiting.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
                Need someone to drive your car home, to the mechanic, dealer,
                or another location? I provide direct owner operated vehicle
                driving service across Arizona.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-7 text-gray-300 md:text-lg">
                Serving Phoenix, San Tan Valley, Queen Creek, Gilbert,
                Chandler, Mesa, and nearby Arizona communities with simple
                pickup, direct driving, and real time updates.
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
              Common Reasons People Need
              <span className="text-[#f97316]"> Someone To Drive Their Car</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              This page fits the real everyday searches people make when they
              need help moving their vehicle.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {useCases.map((item) => (
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
                Why Choose Freedom Line
                <span className="text-[#f97316]"> Freight Express</span>
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Direct, owner operated vehicle transport without towing,
                transfers, or unnecessary delays.
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
              A simple process from vehicle pickup to final drop off.
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
                Someone To Drive My Car
                <span className="text-[#f97316]"> Near You</span>
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Looking for someone to drive your car near you? I serve
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
              These related pages help connect your service and strengthen SEO.
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
              Need Someone To Drive Your Car Today?
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
                "Direct vehicle driving service",
                "No towing or trailer loading",
                "Owner operated handling",
                "Real time communication",
                "Same day or next day availability in most areas",
                "Local Arizona coverage",
                "Simple scheduling",
                "Careful pickup and delivery",
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

        <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
          <div className="rounded-3xl border border-[#f97316]/20 bg-[#0f172a] p-8 md:p-10">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-4 inline-flex rounded-full bg-[#f97316]/10 p-3">
                <Briefcase className="h-6 w-6 text-[#f97316]" />
              </div>
              <h2 className="text-3xl font-extrabold text-white md:text-4xl">
                Good SEO Match for Real Customer Searches
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                This page supports broad search phrases like someone to drive my
                car, while your other pages support more specific searches like
                drive my car home and drive car to mechanic.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
