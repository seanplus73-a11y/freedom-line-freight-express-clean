import { Link } from "react-router-dom";
import { Car, MapPin, ShieldCheck, Phone, CheckCircle } from "lucide-react";

export default function DriveForMyCar() {
  return (
    <div className="bg-[#020817] text-white">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:px-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Need Someone to Drive for Your Car in Arizona?
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          I provide a simple solution when you need a reliable driver for your car.
          No towing, no trailers — I personally drive your vehicle safely to its destination.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/request-pickup"
            className="rounded-xl bg-[#f97316] px-6 py-3 text-lg font-semibold text-white hover:bg-[#ea580c]"
          >
            Request a Driver
          </Link>

          <a
            href="sms:4807428553"
            className="rounded-xl border border-white/20 px-6 py-3 text-lg hover:bg-white/10"
          >
            Text 480-742-8553
          </a>
        </div>
      </section>

      {/* WHAT THIS SERVICE IS */}
      <section className="mx-auto max-w-5xl px-6 pb-16 text-center">
        <h2 className="text-3xl font-bold">
          Hire a Driver for Your Car — Simple and Direct
        </h2>

        <p className="mt-4 text-gray-300 leading-8">
          This service is perfect when you need someone to drive your car
          instead of using a tow truck or asking a friend. I handle everything
          personally from pickup to drop-off, so you know exactly who is driving your vehicle.
        </p>
      </section>

      {/* USE CASES */}
      <section className="mx-auto max-w-6xl px-6 pb-20 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Car className="h-8 w-8 text-[#f97316]" />,
            title: "Car Needs to Be Moved",
            text: "Move your vehicle across town or across Arizona without towing."
          },
          {
            icon: <MapPin className="h-8 w-8 text-[#f97316]" />,
            title: "No Second Driver",
            text: "If you don’t have someone available, I can handle it for you."
          },
          {
            icon: <ShieldCheck className="h-8 w-8 text-[#f97316]" />,
            title: "Safe & Reliable",
            text: "Your car is driven carefully and handled like it’s my own."
          }
        ].map((item, i) => (
          <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-300">{item.text}</p>
          </div>
        ))}
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-[#f97316]/20 bg-[#0f172a] p-8 md:p-10">
          <h2 className="text-3xl font-bold text-center">
            Why Choose Freedom Line Freight Express
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              "No towing or trailers",
              "Owner-operated service",
              "Direct communication",
              "Flexible scheduling",
              "Local Arizona based",
              "Clear pricing"
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="text-[#f97316]" />
                <span className="text-gray-300">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="mx-auto max-w-5xl px-6 pb-20 text-center">
        <h2 className="text-3xl font-bold">
          Simple Pricing
        </h2>

        <p className="mt-4 text-gray-300">
          Local drives start at $75. Metro Phoenix $125. All Arizona $250.
          Longer distance trips are quoted based on mileage.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <h2 className="text-3xl font-bold">
          Need a Driver for Your Car?
        </h2>

        <p className="mt-4 text-gray-300">
          Send a quick request or text me directly and I’ll help you get your car where it needs to go.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/request-pickup"
            className="rounded-xl bg-[#f97316] px-6 py-3 text-lg font-semibold text-white hover:bg-[#ea580c]"
          >
            Get a Free Quote
          </Link>

          <a
            href="sms:4807428553"
            className="rounded-xl border border-white/20 px-6 py-3 text-lg hover:bg-white/10"
          >
            Text Now
          </a>
        </div>
      </section>

    </div>
  );
}
