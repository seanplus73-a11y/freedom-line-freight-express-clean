import { Link } from "react-router";
import {
  Car,
  Building2,
  MapPin,
  Map,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Camera,
  Package,
  Wrench,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Services() {
  const services = [
    {
      icon: Car,
      title: "Personal Vehicle Pickup & Delivery",
      description:
        "Direct door-to-door pickup and delivery for cars, SUVs, and light trucks across Arizona. Your vehicle is handled one at a time with careful, professional service.",
      image: "/images/personal-vehicle-transport.jpg",
      features: [
        "Cars, SUVs, and light trucks",
        "Same-day or next-day service available",
        "Direct delivery with no shared carrier schedule",
        "Insured transport service",
      ],
    },
    {
      icon: Building2,
      title: "Dealer & Auction Pickup",
      description:
        "Reliable vehicle pickup and delivery for dealerships, auctions, and auto-related businesses. Fast scheduling and direct service without long carrier wait times.",
      image: "/images/dealer-auction-pickup.jpg",
      features: [
        "Dealer-to-dealer transfers",
        "Auction pickup and delivery",
        "Fast turnaround and flexible scheduling",
        "Professional owner-operated service",
      ],
    },
    {
      icon: Wrench,
      title: "Auto Parts Delivery",
      description:
        "Fast pickup and delivery of auto parts between shops, dealerships, warehouses, and customers. Ideal for urgent parts that cannot wait for standard shipping.",
      image: "/public/images/auto-parts-delivery.jpg",
      features: [
        "Engines, transmissions, and large parts",
        "Dealership and repair shop delivery",
        "Same-day delivery available",
        "Careful handling during loading and transport",
      ],
    },
    {
      icon: Package,
      title: "Small Packages & Business Delivery",
      description:
        "Reliable delivery for small packages, business items, and urgent deliveries across Arizona. Ideal for local businesses needing fast, dependable service.",
      image: "/pexels-smallpackage.jpg",
      features: [
        "Business-to-business delivery",
        "Urgent same-day delivery available",
        "Flexible pickup and drop-off times",
        "Handled securely and professionally",
      ],
    },
    {
      icon: MapPin,
      title: "Local Arizona Delivery",
      description:
        "Same-day and next-day delivery across the Arizona metro area for vehicles, auto parts, and business items. A simple, direct solution for customers who need reliable local service.",
      image: "/images/Local-az-delivery.jpg",
      features: [
        "Phoenix metro and surrounding areas",
        "Same-day delivery available",
        "Direct point-to-point service",
        "Handled with care and professionalism",
      ],
    },
    {
      icon: Map,
      title: "Regional Transport",
      description:
        "Pickup and delivery throughout Arizona, with nearby out-of-state transport available by request. Ideal for longer-distance moves that still need direct, dependable service.",
      image: "/images/regional-transport.jpg",
      features: [
        "Arizona statewide service",
        "Nearby states available by request",
        "Scheduled delivery windows",
        "Direct transport without shared loads",
      ],
    },
  ];

  return (
    <div className="bg-neutral-900">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-neutral-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-neutral-700">
              <Car className="mr-2 text-orange-500" size={18} />
              Vehicle, Auto Parts & Package Delivery
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional{" "}
              <span className="text-orange-500">
                Pickup & Delivery Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Reliable pickup and delivery across Arizona for vehicles, auto
              parts, and small business packages. Every trip is handled with
              care, professionalism, and direct service.
            </p>
            <div className="mt-4 bg-orange-900/30 border-l-4 border-orange-500 p-4 rounded">
              <p className="text-orange-100 font-semibold text-lg">
                Direct service with no unnecessary transfers, no shared carrier
                schedule, and careful handling from pickup to delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-neutral-900 border border-neutral-700 rounded-lg overflow-hidden hover:border-orange-500 transition-colors"
                >
                  <div className="h-64 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="bg-orange-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 border border-orange-500/20">
                      <Icon className="text-orange-500" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle
                            className="text-orange-500 mr-3 flex-shrink-0 mt-0.5"
                            size={20}
                          />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/request-pickup"
                      className="text-orange-500 font-bold inline-flex items-center hover:text-orange-400 transition-colors"
                    >
                      Request Quote
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What’s Included with{" "}
              <span className="text-orange-500">Every Delivery</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional standards and dependable service on every pickup and
              delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <Shield className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Insured Service
              </h3>
              <p className="text-gray-400">
                Your items and vehicle are handled with care throughout pickup,
                transport, and delivery.
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <Camera className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Photo Documentation
              </h3>
              <p className="text-gray-400">
                Photos can be taken at pickup and delivery for added
                transparency and peace of mind.
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <Clock className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Flexible Scheduling
              </h3>
              <p className="text-gray-400">
                Same-day, next-day, and scheduled service are available based on
                timing and route availability.
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <Car className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Owner-Operated Service
              </h3>
              <p className="text-gray-400">
                Work directly with an owner-operator who values careful
                handling, communication, and dependable service.
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <MapPin className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Door-to-Door Convenience
              </h3>
              <p className="text-gray-400">
                Pickup from your location and delivery to the destination you
                choose with a simple, direct process.
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <CheckCircle className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Delivery Confirmation
              </h3>
              <p className="text-gray-400">
                Clear delivery confirmation helps give customers confidence from
                pickup to final drop-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service <span className="text-orange-500">Area</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Reliable pickup and delivery service based in Arizona.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-neutral-900 rounded-lg p-8 border-2 border-orange-500/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <CheckCircle
                  className="text-orange-500 mr-3 flex-shrink-0"
                  size={20}
                />
                <span className="text-lg font-bold text-white">
                  Arizona (Primary Service Area)
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle
                  className="text-orange-500 mr-3 flex-shrink-0"
                  size={20}
                />
                <span className="text-lg font-bold text-white">
                  Nearby states available by request
                </span>
              </div>
            </div>

            <div className="bg-orange-900/20 border border-orange-500/50 p-4 rounded mb-6">
              <p className="text-orange-100 text-sm font-semibold">
                Out-of-state delivery is limited and scheduled based on route
                availability.
              </p>
            </div>

            <div className="border-t border-neutral-700 pt-6 text-center">
              <p className="text-gray-300">
                <strong className="text-white">Based in Arizona,</strong> I
                provide dependable local and regional pickup and delivery for
                vehicles, auto parts, and business items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Schedule a Pickup?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto font-semibold">
            Vehicles, auto parts, and small package delivery across Arizona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              to="/request-pickup"
              className="inline-flex items-center justify-center bg-white text-orange-600 px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Request a Quote
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-orange-50 text-sm font-semibold">
            <div className="flex items-center">
              <CheckCircle className="mr-2" size={16} />
              <span>Insured Service</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2" size={16} />
              <span>Owner-Operated</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2" size={16} />
              <span>Flexible Scheduling</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
