import { Link } from "react-router-dom";
import { UserCheck, Car, MapPin, ShieldCheck, CheckCircle } from "lucide-react";

export default function DriveForHireCar() {
  return (
    <div className="bg-[#020817] text-white">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:px-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Driver for Hire for Your Car in Arizona
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Need a driver for hire for your own car? I personally drive your vehicle
          where it needs to go without towing, trailers, or confusing handoffs.
        </p>

        <p className="mt-4 text-base text-gray-400 max-w-2xl mx-auto">
          Good for mechanic visits, dealership drop offs, driving your car home,
          and local Arizona vehicle transport.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/request-pickup"
            className="rounded-xl bg-[#f97316] px-6 py-3 text-lg font-semibold text-white hover:bg-[#ea580c]"
          >
            Request Pickup
          </Link>

          <a
            href="sms:4807428553"
            className="rounded-xl border border-white/20 px-6 py-3 text-lg hover:bg-white/10"
          >
            Text 4807428553
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-5xl px-6 pb-16 text-center">
        <h2 className="text-3xl font-bold">
          A Simple Driver for Hire Service for Your Vehicle
        </h2>

        <p className="mt-4 text-gray-300 leading-8">
          Sometimes you do not need a tow truck. You just need a reliable person
          to drive your car safely from pickup to drop off. I offer direct,
          owner operated service across Phoenix, San Tan Valley, Queen Creek,
          Gilbert, Chandler, Mesa, and nearby Arizona areas.
        </p>
      </section>

      {/* USE CASES */}
      <section className="mx-auto max-w-6xl px-6 pb-20 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Car className="h-8 w-8 text-[#f97316]" />,
            title: "Drive Your Car Home",
            text: "Helpful when you cannot drive your vehicle home yourself."
          },
          {
            icon: <MapPin className="h-8 w-8 text-[#f97316]" />,
            title: "Take It to the Mechanic",
            text: "Direct drop off to the repair shop, dealership, or service center."
          },
          {
            icon: <UserCheck className="h-8 w-8 text-[#f97316]" />,
            title: "Personal Driver for Your Vehicle",
            text: "Your car is personally driven instead of loaded onto a trailer."
          }
        ].map((item, i) => (
          <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-300">{item.text}</p>
          </div>
        ))}
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-[#f97316]/20 bg-[#0f172a] p-8 md:p-10">
          <h2 className="text-3xl font-bold text-center">
            Why People Choose This Driver for Hire Service
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              "No towing needed",
              "No trailer or carrier delays",
              "Same day or next day availability in most areas",
              "Owner operated communication",
              "Simple local and regional transport",
              "Handled with care from pickup to drop off"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="text-[#f97316]" />
                <span className="text-gray-300">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="mx-auto max-w-5xl px-6 pb-20 text-center">
        <h2 className="text-3xl font-bold">
          Driver for Hire Near You
        </h2>

        <p className="mt-4 text-gray-300 leading-8">
          I serve Phoenix, San Tan Valley, Queen Creek, Gilbert, Chandler, Mesa,
          and nearby Arizona communities with direct car driving service.
        </p>
      </section>

      {/* TRUST */}
      <section className="mx-auto max-w-6xl px-6 pb-20 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <ShieldCheck className="h-8 w-8 text-[#f97316]" />,
            title: "Owner Operated",
            text: "You deal directly with me from start to finish."
          },
          {
            icon: <Car className="h-8 w-8 text-[#f97316]" />,
            title: "No Towing",
            text: "Your vehicle is driven, not hauled on a trailer."
          },
          {
            icon: <MapPin className="h-8 w-8 text-[#f97316]" />,
            title: "Arizona Service",
            text: "Local and statewide options available depending on route and schedule."
          }
        ].map((item, i) => (
          <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5 text-center">
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-300">{item.text}</p>
          </div>
        ))}
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <h2 className="text-3xl font-bold">
          Need a Driver for Hire for Your Car?
        </h2>

        <p className="mt-4 text-gray-300">
          Request a quote now and I will help you move your vehicle without the hassle of towing.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/request-pickup"
            className="rounded-xl bg-[#f97316] px-6 py-3 text-lg font-semibold text-white hover:bg-[#ea580c]"
          >
            Get a Free Quote
          </Link>

          <Link
            to="/pricing"
            className="rounded-xl border border-white/20 px-6 py-3 text-lg hover:bg-white/10"
          >
            View Pricing
          </Link>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          Text 4807428553 for a fast response
        </p>
      </section>
    </div>
  );
}
