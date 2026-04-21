import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  ArrowRight,
  Car,
  Clock,
  MapPin,
  MessageSquare,
  Shield,
  CheckCircle,
  Truck,
} from "lucide-react";

export default function CarDeliveryService() {
  const benefits = [
    {
      icon: Car,
      title: "Direct Car Delivery",
      description:
        "I personally drive your vehicle from pickup to drop off with no trailer, no tow truck, and no extra handoffs.",
    },
    {
      icon: Clock,
      title: "Same Day or Next Day Availability",
      description:
        "Fast scheduling in most Arizona service areas when timing matters.",
    },
    {
      icon: MessageSquare,
      title: "Real Time Updates",
      description:
        "You get direct communication during the trip from pickup to delivery.",
    },
    {
      icon: Shield,
      title: "Owner Operated and Insured",
      description:
        "Your vehicle is handled personally with careful, accountable service.",
    },
    {
      icon: Truck,
      title: "No Towing Needed",
      description:
        "Your car is driven directly instead of being loaded onto a tow truck or trailer.",
    },
    {
      icon: MapPin,
      title: "Arizona Coverage",
      description:
        "Serving Phoenix, San Tan Valley, Queen Creek, Gilbert, Chandler, Mesa, and nearby Arizona areas.",
    },
  ];

  const useCases = [
    {
      title: "Drive Your Car Home",
      description:
        "Need your vehicle brought home safely without towing? I can help.",
    },
    {
      title: "Take It to the Mechanic",
      description:
        "Get your car to the repair shop, service center, or dealership without the hassle.",
    },
    {
      title: "Dealer and Auction Trips",
      description:
        "Direct vehicle transport for dealer appointments, buyers, sellers, and auction runs.",
    },
    {
      title: "Local and Regional Moves",
      description:
        "Move your vehicle across town or across Arizona with direct service.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Request Pickup",
      description:
        "Send the pickup address, drop off location, and basic vehicle details.",
    },
    {
      number: "2",
      title: "Direct Vehicle Delivery",
      description:
        "I personally drive your car to the destination with real time updates.",
    },
    {
      number: "3",
      title: "Drop Off Complete",
      description:
        "Your vehicle is delivered and the handoff is confirmed.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Car Delivery Service Arizona | Direct Car Transport Without Towing
        </title>
        <meta
          name="description"
          content="Need a car delivery service in Arizona? I personally drive your car home, to the mechanic, dealership, or another location with no towing and no trailer."
        />
        <meta
          name="keywords"
          content="car delivery service Arizona, car delivery service near me, direct car transport Arizona, drive my car home service, someone to drive my car to mechanic, vehicle delivery service Arizona"
        />
        <link
          rel="canonical"
          href="https://www.flfreightco.com/car-delivery-service"
        />

        <meta
          property="og:title"
          content="Car Delivery Service Arizona | Direct Car Transport Without Towing"
        />
        <meta
          property="og:description"
          content="I personally drive your car to its destination across Arizona. No towing. No trailer. Just direct vehicle delivery with real time updates."
        />
        <meta
          property="og:url"
          content="https://www.flfreightco.com/car-delivery-service"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-[#111827] text-white">
        <section
          className="relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17,24,39,0.78), rgba(17,24,39,0.88)), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
            <div className="max-w-4xl">
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#f97316] px-4 py-2 text-sm font-semibold text-white">
                  Direct Vehicle Delivery
                </span>
                <span className="rounded-full border border-[#f97316] px-4 py-2 text-sm font-semibold text-white">
                  No Towing Needed
                </span>
                <span className="rounded-full border border-[#f97316] px-4 py-2 text-sm font-semibold text-white">
                  Same Day Available
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Car Delivery Service in Arizona
                <span className="block text-[#f97316]">
                  I Personally Drive It. No Towing. No Waiting.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
                Need your car delivered home, to the mechanic, to a dealership,
                or to another location? I provide direct car delivery service
                across Phoenix, San Tan Valley, Queen Creek, Gilbert, Chandler,
                Mesa, and nearby Arizona areas.
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
              When People Need a
              <span className="text-[#f97316]"> Car Delivery Service</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Everyday situations where direct vehicle delivery is simpler than
              towing or asking someone else for help.
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
                Why Choose This
                <span className="text-[#f97316]"> Car Delivery Service</span>
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                A better option when you want your vehicle moved directly
                without towing, waiting, or confusing handoffs.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {benefits.map((item) => {
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
              Simple direct vehicle delivery from pickup to drop off.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="text-center"
              >
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
                Car Delivery Service
                <span className="text-[#f97316]"> Near You</span>
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Looking for car delivery service near you? I serve Phoenix, San
                Tan Valley, Queen Creek, Gilbert, Chandler, Mesa, and nearby
                Arizona communities with direct, owner operated vehicle
                delivery.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f97316]">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center md:px-10 md:py-20">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">
              Need Your Car Delivered Today?
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
                "Direct pickup and delivery",
                "No towing or trailer loading",
                "Owner operated service",
                "Real time communication",
                "Flexible mechanic or dealer drop off",
                "Same day or next day availability in most areas",
                "Local Arizona coverage",
                "Careful handling of your vehicle",
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
