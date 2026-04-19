import { Link } from "react-router";
import {
  ArrowRight,
  Truck,
  Clock,
  Shield,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title =
      "Freedom Line Freight Express | Vehicle Pickup & Delivery in Arizona";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Same-day vehicle pickup and delivery in Arizona. Serving San Tan Valley, Queen Creek, Gilbert, Chandler, Mesa, and Phoenix. Direct driveaway service — no towing."
      );
    }
  }, []);

  return (
    <div className="bg-black text-white">
      
      {/* HERO */}
      <section className="relative bg-black text-white">
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Same-Day Delivery & Vehicle Transport{" "}
              <span className="text-orange-500">
                We Drive It — No Towing. No Waiting.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Direct vehicle transport, auto parts delivery, and business courier
              service across Arizona. Fast, reliable, owner-operated service.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                to="/request-pickup"
                className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                Get Free Quote
              </Link>

              <Link
                to="/pricing"
                className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-neutral-900 py-10 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">

          <div>
            <CheckCircle className="mx-auto text-orange-500 mb-2" size={28} />
            <p className="font-semibold">Owner Operated</p>
          </div>

          <div>
            <Shield className="mx-auto text-orange-500 mb-2" size={28} />
            <p className="font-semibold">Licensed & Insured</p>
          </div>

          <div>
            <Clock className="mx-auto text-orange-500 mb-2" size={28} />
            <p className="font-semibold">Same-Day Available</p>
          </div>

          <div>
            <MessageSquare className="mx-auto text-orange-500 mb-2" size={28} />
            <p className="font-semibold">Direct Communication</p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Vehicle Transport & Delivery Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
              <Truck className="mx-auto text-orange-500 mb-3" />
              <h3 className="font-bold mb-2">Vehicle Pickup & Delivery</h3>
              <p className="text-gray-400 text-sm">
                Direct transport with no towing or trailer.
              </p>
            </div>

            <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
              <Clock className="mx-auto text-orange-500 mb-3" />
              <h3 className="font-bold mb-2">Same-Day Courier</h3>
              <p className="text-gray-400 text-sm">
                Fast delivery for urgent business and personal items.
              </p>
            </div>

            <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
              <Shield className="mx-auto text-orange-500 mb-3" />
              <h3 className="font-bold mb-2">Auto Parts Delivery</h3>
              <p className="text-gray-400 text-sm">
                Reliable transport between shops and suppliers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div>
              <div className="bg-orange-500 w-12 h-12 mx-auto rounded-full flex items-center justify-center font-bold mb-3">
                1
              </div>
              <p>Request a quote</p>
            </div>

            <div>
              <div className="bg-orange-500 w-12 h-12 mx-auto rounded-full flex items-center justify-center font-bold mb-3">
                2
              </div>
              <p>We pick up your vehicle or item</p>
            </div>

            <div>
              <div className="bg-orange-500 w-12 h-12 mx-auto rounded-full flex items-center justify-center font-bold mb-3">
                3
              </div>
              <p>Delivered safely and on time</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>

        <Link
          to="/request-pickup"
          className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
        >
          Request Pickup
        </Link>
      </section>

    </div>
  );
}
