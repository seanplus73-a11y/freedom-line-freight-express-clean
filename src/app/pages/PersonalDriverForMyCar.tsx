import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  Car,
  CheckCircle,
  Clock,
  MapPin,
  MessageSquare,
  Shield,
  Wrench,
  ArrowRight,
} from "lucide-react";

export default function PersonalDriverForMyCar() {
  return (
    <>
      <Helmet>
        <title>Personal Driver for My Car in Arizona | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Need a personal driver for your car in Arizona? I personally drive your vehicle to the mechanic, dealership, home, or another location. No towing. No trailer. Fast response."
        />
        <meta
          name="keywords"
          content="personal driver for my car Arizona, someone to drive my car Arizona, drive my car home Arizona, drive car to mechanic Arizona, personal vehicle driver Arizona"
        />
        <link rel="canonical" href="https://www.flfreightco.com/personal-driver-for-my-car" />

        <meta
          property="og:title"
          content="Personal Driver for My Car in Arizona | Freedom Line Freight Express"
        />
        <meta
          property="og:description"
          content="I personally drive your vehicle where it needs to go in Arizona. No towing. No trailer. Direct owner operated service."
        />
        <meta property="og:url" content="https://www.flfreightco.com/personal-driver-for-my-car" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-[#111827] text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-[#111827]/75" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
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

            <div className="max-w-4xl">
              <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Personal Driver for My Car in Arizona
              </h1>

              <p className="mt-5 text-xl font-semibold text-[#f97316] md:text-2xl">
                I Personally Drive It. No Towing. No Waiting.
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200">
                Need someone to drive your car for you? I personally pick up and drive your
                vehicle to the mechanic, dealership, home, or another destination with direct,
                owner operated service.
              </p>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
                Serving Phoenix, San Tan Valley, Queen Creek, Gilbert, Chandler, Mesa, Scottsdale,
                Casa Grande, and nearby Arizona areas. No trailer. No tow truck. Just real time
                updates from pickup to drop off.
              </p>

              <p className="mt-4 text-base font-semibold text-white">
                Same day or next day availability in most areas.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center rounded-xl bg-[#f97316] px-6 py-4 text-base font-bold text-white transition hover:bg-[#ea580c]"
                >
                  Request Pickup
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <a
                  href="sms:4807428553"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-4 text-base font-bold text-white transition hover:border-[#f97316] hover:text-[#f97316]"
                >
                  Text 4807428553
                </a>
              </div>

              <p className="mt-4 text-sm text-gray-300">Fast response within 5 to 10 minutes.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">
              A Better Option Than Waiting for a Tow Truck
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Sometimes you do not need towing. You just need a reliable person to personally drive
              your car where it needs to go.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Car className="h-7 w-7 text-[#f97316]" />,
                title: "Drive Your Car Home",
                text: "Helpful when you cannot drive yourself home safely and want your own vehicle brought back directly.",
              },
              {
                icon: <Wrench className="h-7 w-7 text-[#f97316]" />,
                title: "Take It to the Mechanic",
                text: "I can drive your vehicle to a repair shop, service center, or dealership appointment.",
              },
              {
                icon: <Clock className="h-7 w-7 text-[#f97316]" />,
                title: "Save Time and Stress",
                text: "Skip arranging extra rides, waiting on a tow truck, or trying to move the vehicle yourself.",
              },
              {
                icon: <Shield className="h-7 w-7 text-[#f97316]" />,
                title: "Owner Operated Service",
                text: "Your vehicle is handled directly by me from pickup to delivery with no confusing handoffs.",
              },
              {
                icon: <MessageSquare className="h-7 w-7 text-[#f97316]" />,
                title: "Real Time Updates",
                text: "You get direct communication during the trip so you know where your vehicle is.",
              },
              {
                icon: <MapPin className="h-7 w-7 text-[#f97316]" />,
                title: "Arizona Coverage",
                text: "Serving Phoenix, San Tan Valley, Queen Creek, Gilbert, Chandler, Mesa, and nearby Arizona areas.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f97316]/15">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0f172a]">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-extrabold text-white md:text-5xl">
                When This Service Makes Sense
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                This page is for people looking for a personal driver for their own vehicle, not a
                limousine or rideshare service.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Your car needs to go to the mechanic",
                "You need your vehicle driven home",
                "You want a dealership drop off",
                "You need someone to move your car across town",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                >
                  <CheckCircle className="mx-auto h-8 w-8 text-[#f97316]" />
                  <p className="mt-4 text-lg font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">
              How It Works
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Schedule Pickup",
                text: "Send me the pickup location, destination, and vehicle details for a fast quote.",
              },
              {
                step: "2",
                title: "Direct Driving Service",
                text: "I personally drive your vehicle to the destination with direct communication.",
              },
              {
                step: "3",
                title: "Drop Off Confirmed",
                text: "Your vehicle is delivered and the handoff is confirmed so you know it arrived safely.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f97316] text-3xl font-extrabold text-white">
                  {item.step}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#0f172a]">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-extrabold text-white md:text-5xl">
                Related Vehicle Services
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                These pages help support related customer searches across Arizona.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Drive Car to Mechanic",
                  text: "Need someone to take your car to the repair shop or dealership?",
                  link: "/drive-car-to-mechanic",
                  cta: "Visit Page",
                },
                {
                  title: "Drive My Car Home",
                  text: "Need your vehicle driven home without towing?",
                  link: "/drive-my-car-home",
                  cta: "Visit Page",
                },
                {
                  title: "Someone to Drive My Car",
                  text: "A broader page for customers searching for a personal driver for their vehicle.",
                  link: "/someone-to-drive-my-car",
                  cta: "Visit Page",
                },
                {
                  title: "Car Delivery Service",
                  text: "Direct vehicle pickup and delivery service across Arizona.",
                  link: "/car-delivery-service",
                  cta: "Visit Page",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-gray-300">{item.text}</p>
                  <Link
                    to={item.link}
                    className="mt-5 inline-flex items-center font-semibold text-[#f97316] hover:text-[#fb923c]"
                  >
                    {item.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f97316]">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center md:px-10">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">
              Need a Personal Driver for Your Car?
            </h2>
            <p className="mt-4 text-lg font-medium text-white/90">
              Get your instant mileage based quote now. No obligation.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-4 text-base font-bold text-[#f97316] transition hover:bg-orange-50"
              >
                Request Pickup
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                to="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-white px-6 py-4 text-base font-bold text-white transition hover:bg-white hover:text-[#f97316]"
              >
                View Pricing
              </Link>
            </div>

            <p className="mt-5 text-base font-semibold text-white">Text 4807428553 for a fast response</p>
          </div>
        </section>
      </div>
    </>
  );
}
