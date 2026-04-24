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
      title: "Phoenix, AZ",
      path: "/phoenix-delivery",
      description:
        "Vehicle pickup and delivery service in Phoenix AZ. No towing, no trailer. We drive your vehicle directly with fast local service depending on availability.",
    },
    {
      title: "Mesa, AZ",
      path: "/mesa-delivery",
      description:
        "Vehicle pickup, auto parts delivery, and courier service in Mesa AZ for repair shops, mechanics, dealerships, and local customers.",
    },
    {
      title: "Chandler, AZ",
      path: "/chandler-delivery",
      description:
        "Same day auto parts delivery, vehicle transport, and business delivery services in Chandler AZ with direct pickup and reliable scheduling.",
    },
    {
      title: "Gilbert, AZ",
      path: "/gilbert-delivery",
      description:
        "Reliable vehicle pickup and delivery in Gilbert AZ for personal vehicles, auto parts, small packages, and business items.",
    },
    {
      title: "Queen Creek and San Tan Valley, AZ",
      path: "/queen-creek-delivery",
      description:
        "Local vehicle delivery and pickup service in Queen Creek and San Tan Valley. Direct delivery for cars, parts, packages, and business transport.",
    },
    {
      title: "Scottsdale, AZ",
      path: "/scottsdale-delivery",
      description:
        "Professional vehicle pickup and delivery service in Scottsdale AZ. Careful handling for personal vehicles, auto parts, and business deliveries.",
    },
    {
      title: "Tempe, AZ",
      path: "/tempe-delivery",
      description:
        "Vehicle pickup and delivery service in Tempe AZ. We help with car delivery, auto parts transport, and same day local delivery when available.",
    },
    {
      title: "Casa Grande, AZ",
      path: "/casa-grande-delivery",
      description:
        "Reliable pickup and delivery services in Casa Grande AZ for vehicles, auto parts, packages, and business transport with flexible scheduling.",
    },
  ];

  return (
    <div className="bg-neutral-900">
      <section className="bg-black text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Vehicle Pickup and Delivery Service Areas in{" "}
            <span className="text-orange-500">Arizona</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Freedom Line Freight Express provides direct vehicle pickup and
            delivery, auto parts delivery, small package delivery, and business
            transport across Phoenix, Mesa, Chandler, Gilbert, Queen Creek,
            San Tan Valley, Scottsdale, Tempe, Casa Grande, and surrounding
            Arizona areas. No towing, no trailer. We drive your vehicle directly.
          </p>
        </div>
      </section>

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

                <div className="mt-4 inline-flex items-center text-orange-500 font-semibold">
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">
            Services Available in Every Area
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Car className="text-orange-500 mx-auto mb-3" size={30} />
              <p className="text-gray-300">Vehicle Pickup and Delivery</p>
            </div>

            <div>
              <Wrench className="text-orange-500 mx-auto mb-3" size={30} />
              <p className="text-gray-300">Auto Parts Delivery</p>
            </div>

            <div>
              <Package className="text-orange-500 mx-auto mb-3" size={30} />
              <p className="text-gray-300">Packages and Documents</p>
            </div>

            <div>
              <Building2 className="text-orange-500 mx-auto mb-3" size={30} />
              <p className="text-gray-300">Business Transport</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Direct Delivery Without Towing or Trailers
          </h2>

          <p className="text-gray-300 mb-10">
            Freedom Line Freight Express is owner operated and focused on direct
            local transport. We help customers move vehicles, auto parts,
            documents, packages, and business items without using random app
            drivers or multi stop routes.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-neutral-900 p-6 rounded border border-neutral-700">
              <h3 className="text-red-400 font-bold mb-3">
                App Based Delivery
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Random drivers</li>
                <li>• Not built for vehicle transport</li>
                <li>• Delays and multi stop routes</li>
                <li>• Limited reliability for businesses</li>
              </ul>
            </div>

            <div className="bg-neutral-900 p-6 rounded border border-orange-500">
              <h3 className="text-orange-500 font-bold mb-3">
                Freedom Line Freight Express
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>✔ Owner operated service</li>
                <li>✔ Direct pickup and delivery</li>
                <li>✔ Same day availability</li>
                <li>✔ Vehicle, parts, package, and business transport</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-600 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Need Vehicle Pickup or Same Day Delivery?
        </h2>

        <p className="text-orange-100 mb-6">
          Get fast, reliable pickup and delivery across Phoenix and surrounding
          Arizona areas.
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

