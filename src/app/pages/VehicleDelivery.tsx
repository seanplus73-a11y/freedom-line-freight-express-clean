import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  Car,
  Shield,
  MessageSquare,
  MapPin,
  Check,
  X,
  ArrowRight,
  Clock,
} from "lucide-react";

export default function VehicleDelivery() {
  return (
    <div className="bg-neutral-900 text-white">
      <Helmet>
        <title>Arizona Vehicle Delivery | No Towing No Trailers | FLF Express</title>
        <meta
          name="description"
          content="Direct drive-away vehicle delivery in Arizona. Owner operated service for dealerships, repair shops, auctions, and local customers. No towing. No trailers."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-orange-500 font-bold mb-4">
              ARIZONA VEHICLE DELIVERY
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              We Drive It. <br />
              <span className="text-orange-500">
                No Towing. No Trailers.
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-6 max-w-3xl">
              Direct drive-away service for cars, SUVs, small light duty trucks,
              and luxury vehicles across Arizona.
            </p>

            <p className="text-lg text-gray-300 mb-8">
              I help dealerships, repair shops, auctions, businesses, buyers,
              and sellers move vehicles safely with clear text communication.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors"
              >
                Get Vehicle Quote
                <ArrowRight className="ml-2" size={20} />
              </Link>

              <Link
                to="/pricing"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-black transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-neutral-800 border-y border-neutral-700 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <Check className="text-orange-500 mx-auto mb-2" size={30} />
            <h3 className="font-bold">Owner Operated</h3>
            <p className="text-gray-400 text-sm">Direct accountability</p>
          </div>

          <div>
            <Shield className="text-orange-500 mx-auto mb-2" size={30} />
            <h3 className="font-bold">Fully Insured</h3>
            <p className="text-gray-400 text-sm">Professional service</p>
          </div>

          <div>
            <MapPin className="text-orange-500 mx-auto mb-2" size={30} />
            <h3 className="font-bold">Arizona Based</h3>
            <p className="text-gray-400 text-sm">Phoenix metro and statewide</p>
          </div>

          <div>
            <MessageSquare className="text-orange-500 mx-auto mb-2" size={30} />
            <h3 className="font-bold">Text First</h3>
            <p className="text-gray-400 text-sm">Clear written updates</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vehicle Delivery <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Focused on vehicle moves only. No towing, no trailers, no third
              party app drivers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-8">
              <Car className="text-orange-500 mb-4" size={36} />
              <h3 className="text-2xl font-bold mb-3">
                Dealership Vehicle Transfers
              </h3>
              <p className="text-gray-300">
                Direct vehicle moves between lots, buyers, auctions, service
                departments, and delivery locations.
              </p>
            </div>

            <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-8">
              <Clock className="text-orange-500 mb-4" size={36} />
              <h3 className="text-2xl font-bold mb-3">Auction Pickups</h3>
              <p className="text-gray-300">
                Pickup and delivery support for auction vehicles that are safe,
                legal, and ready to drive.
              </p>
            </div>

            <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-8">
              <MessageSquare className="text-orange-500 mb-4" size={36} />
              <h3 className="text-2xl font-bold mb-3">
                Repair Shop Vehicle Moves
              </h3>
              <p className="text-gray-300">
                Customer vehicle pickup or return support for independent repair
                shops and service businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Transport */}
      <section className="py-20 bg-neutral-800 border-y border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              What I <span className="text-orange-500">Transport</span>
            </h2>

            <div className="space-y-4">
              {[
                "Cars and sedans",
                "SUVs",
                "Small light duty trucks",
                "Luxury vehicles",
                "Dealer and auction vehicles",
                "Customer vehicles for repair shops",
              ].map((item) => (
                <div key={item} className="flex items-center text-gray-300">
                  <Check className="text-orange-500 mr-3" size={22} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              What I <span className="text-orange-500">Do Not Do</span>
            </h2>

            <div className="space-y-4">
              {[
                "No towing",
                "No trailers",
                "No flatbeds",
                "No semi trucks",
                "No commercial freight",
                "No non-running vehicles",
              ].map((item) => (
                <div key={item} className="flex items-center text-gray-300">
                  <X className="text-red-500 mr-3" size={22} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              How It <span className="text-orange-500">Works</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Send Details",
                text: "Send pickup, delivery, vehicle type, and timing.",
              },
              {
                title: "Get Quote",
                text: "I review distance, route, vehicle condition, and schedule.",
              },
              {
                title: "Pickup",
                text: "I confirm pickup and provide clear text updates.",
              },
              {
                title: "Delivery",
                text: "Vehicle is delivered directly with confirmation.",
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="bg-neutral-800 border border-neutral-700 rounded-lg p-6"
              >
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business CTA */}
      <section className="py-20 bg-neutral-800 border-t border-neutral-700">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Running a Dealership or Repair Shop?
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            I offer vehicle delivery support for dealer transfers, auction
            pickups, and customer vehicle moves. Business accounts and volume
            pricing are available.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-orange-500 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors"
          >
            Contact Me for Business Service
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Vehicle Delivered?
          </h2>

          <p className="text-orange-100 text-lg mb-8">
            Send the pickup location, delivery location, vehicle type, and
            preferred date.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-white text-orange-600 px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Vehicle Delivery Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
