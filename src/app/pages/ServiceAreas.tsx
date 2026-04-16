import { Link } from "react-router";
import {
  MapPin,
  ArrowRight,
  Car,
  Package,
  Wrench,
  Building2,
} from "lucide-react";

export default function ServiceAreas() {
  const areas = [
    {
      title: "Chandler, AZ",
      path: "/chandler-delivery",
      description:
        "Same-day auto parts delivery, vehicle transport, and business delivery services in Chandler. Ideal for repair shops, mechanics, and dealerships that need fast, reliable service.",
    },
    {
      title: "Gilbert, AZ",
      path: "/gilbert-delivery",
      description:
        "Reliable local delivery in Gilbert for auto parts, vehicles, and business items. Direct pickup and drop-off with flexible scheduling.",
    },
    {
      title: "Mesa, AZ",
      path: "/mesa-delivery",
      description:
        "Auto parts delivery for repair shops and mechanics in Mesa. Same-day service available to help reduce delays and keep jobs moving.",
    },
    {
      title: "Queen Creek / San Tan Valley, AZ",
      path: "/queen-creek-delivery",
      description:
        "Local delivery support for customers needing dependable pickup and transport services in Queen Creek and San Tan Valley.",
    },
    {
      title: "Phoenix Metro Area",
      path: "/phoenix-delivery",
      description:
        "Flexible coverage across the Phoenix metro area for vehicles, parts, and business transport depending on route and availability.",
    },
    {
      title: "Scottsdale, AZ",
      path: "/service-areas", // temporary until you create page
      description:
        "Direct transport services for personal vehicles, parts, and business items in Scottsdale with careful handling and reliable scheduling.",
    },
  ];

  return (
    <div className="bg-neutral-900">
      {/* HERO */}
      <section className="bg-black text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Service Areas Across{" "}
            <span className="text-orange-500">Arizona</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Freedom Line Freight Express provides direct pickup and delivery
            for vehicles, auto parts, and business items across Chandler,
            Gilbert, Mesa, Queen Creek, and the greater Phoenix area.
          </p>
        </div>
      </section>

      {/* AREAS GRID (FIXED CLICKABLE CARDS) */}
      <section className="py-20 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <Link to={area.path} key={index} className="block group">
              <div className="bg-neutral-900 border border-neutral-700 p-6 rounded-lg h-full transition transform group-hover:-translate-y-1 group-hover:border-orange-500 group-hover:shadow-lg cursor-pointer">
                <MapPin className="text-orange-500 mb-4" size={28} />

                <h3 className="text-xl font-bold text-white mb-2">
                  {area.title}
                </h3>

                <p className="text-gray-400">{area.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES INCLUDED */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">
            Services Available in Every Area
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Car className="text-orange-500 mx-auto mb-3" size={30} />
              <p className="text-gray-300">Vehicle Pickup & Delivery</p>
            </div>

            <div>
              <Wrench className="text-orange-500 mx-auto mb-3" size={30} />
              <p className="text-gray-300">Auto Parts Delivery</p>
            </div>

            <div>
              <Package className="text-orange-500 mx-auto mb-3" size={30} />
              <p className="text-gray-300">Packages & Equipment</p>
            </div>

            <div>
              <Building2 className="text-orange-500 mx-auto mb-3" size={30} />
              <p className="text-gray-300">Business Transport</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPETITOR SECTION */}
      <section className="py-20 bg-neutral-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Better Than App-Based Delivery Services
          </h2>

          <p className="text-gray-300 mb-10">
            Unlike food delivery apps, Freedom Line Freight Express focuses on
            direct, reliable transport for vehicles, auto parts, and business
            items.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-neutral-900 p-6 rounded border border-neutral-700">
              <h3 className="text-red-400 font-bold mb-3">
                App-Based Delivery
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Random drivers</li>
                <li>• Not designed for auto parts</li>
                <li>• Delays and multi-stop routes</li>
                <li>• Limited reliability for businesses</li>
              </ul>
            </div>

            <div className="bg-neutral-900 p-6 rounded border border-orange-500">
              <h3 className="text-orange-500 font-bold mb-3">
                Freedom Line Freight Express
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>✔ Owner-operated service</li>
                <li>✔ Direct pickup and delivery</li>
                <li>✔ Same-day availability</li>
                <li>✔ Built for repair shops and businesses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Need Same-Day Delivery in Your Area?
        </h2>

        <p className="text-orange-100 mb-6">
          Get fast, reliable pickup and delivery across Arizona.
        </p>

        <Link
          to="/request-pickup"
          className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded font-bold hover:bg-gray-100"
        >
          Request a Quote
          <ArrowRight className="ml-2" size={18} />
        </Link>

        <p className="text-white mt-4 font-semibold">
          Text: 480-742-8553
        </p>
      </section>
    </div>
  );
}
