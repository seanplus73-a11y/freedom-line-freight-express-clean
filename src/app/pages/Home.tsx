import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  ArrowRight,
  Truck,
  Clock,
  Shield,
  CheckCircle,
  MessageSquare,
  Car,
  Package,
  Briefcase,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Car Pickup & Delivery Service Phoenix AZ | We Drive Your Car For You</title>
        <meta
          name="description"
          content="Need your car moved locally? We personally drive your vehicle to the shop, dealer, or home. No towing. Serving Phoenix, San Tan Valley, and all Arizona."
        />
        <link rel="canonical" href="https://www.flfreightco.com/" />
      </Helmet>

      <div className="bg-neutral-900">

        {/* HERO */}
        <section className="relative bg-black text-white">
          <div className="absolute inset-0 opacity-50">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1770289711980-c7663e18bb16?auto=format&fit=crop&w=1200&q=80"
              alt="Vehicle delivery service"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-32">
            <div className="max-w-4xl">

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                We Drive Your Car{" "}
                <span className="text-orange-500">No Tow. No Waiting.</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Same-day vehicle pickup, auto parts delivery, and local courier service across Phoenix and Arizona.
              </p>

              <div className="flex gap-4">
                <Link
                  to="/request-pickup"
                  className="bg-orange-500 px-6 py-3 rounded text-white font-bold"
                >
                  Get Quote
                </Link>

                <a
                  href="tel:4807428553"
                  className="border border-white px-6 py-3 rounded text-white"
                >
                  Call / Text
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-neutral-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Delivery & Transport Services
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-10">

              <div className="bg-neutral-800 p-6 rounded">
                <Car className="text-orange-500 mx-auto mb-3" />
                <h3 className="text-xl font-bold">Vehicle Delivery</h3>
                <p className="text-gray-400">
                  We personally drive your car safely to its destination.
                </p>
              </div>

              <div className="bg-neutral-800 p-6 rounded">
                <Package className="text-orange-500 mx-auto mb-3" />
                <h3 className="text-xl font-bold">Auto Parts</h3>
                <p className="text-gray-400">
                  Fast delivery between shops and suppliers.
                </p>
              </div>

              <div className="bg-neutral-800 p-6 rounded">
                <Briefcase className="text-orange-500 mx-auto mb-3" />
                <h3 className="text-xl font-bold">Business Delivery</h3>
                <p className="text-gray-400">
                  Documents, packages, and same-day courier service.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="py-16 bg-neutral-800 text-center text-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

            <div>
              <CheckCircle className="text-orange-500 mx-auto mb-2" />
              <h3 className="font-bold">Owner Operated</h3>
            </div>

            <div>
              <Shield className="text-orange-500 mx-auto mb-2" />
              <h3 className="font-bold">Insured</h3>
            </div>

            <div>
              <Clock className="text-orange-500 mx-auto mb-2" />
              <h3 className="font-bold">Same-Day Available</h3>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-orange-600 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Need Something Delivered Today?
          </h2>

          <Link
            to="/request-pickup"
            className="bg-white text-orange-600 px-6 py-3 rounded font-bold"
          >
            Request Pickup
          </Link>
        </section>

      </div>
    </>
  );
}
