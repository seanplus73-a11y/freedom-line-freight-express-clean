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
        "Direct pickup and delivery for cars, SUVs, and light-duty trucks across Arizona. Ideal for customers who need reliable, point-to-point service without the delays of larger transport networks.",
      image: "https://i.ibb.co/67tDGgGR/personal-vehicle-transport.jpg",
      features: [
        "Cars, SUVs, and light-duty trucks",
        "Same-day or next-day service available",
        "Direct point-to-point delivery",
        "Careful, professional handling",
      ],
    },
    {
      icon: Building2,
      title: "Dealer & Auction Pickup",
      description:
        "Reliable pickup and delivery for dealerships, auctions, and auto-related businesses. Built for customers who need flexible scheduling, fast turnaround, and dependable communication.",
      image: "https://images.unsplash.com/photo-1766524791677-6c6c495e0218?",
      features: [
        "Dealer-to-dealer transfers",
        "Auction pickup and delivery",
        "Fast scheduling and turnaround",
        "Professional owner-operated service",
      ],
    },
    {
      icon: Wrench,
      title: "Auto Parts Delivery",
      description:
        "Fast pickup and delivery of auto parts between shops, dealerships, warehouses, and customers. A strong solution for urgent parts that cannot wait on standard shipping.",
      image: "https://images.pexels.com/photos/12234109/pexels-photo-12234109.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "Engines, transmissions, and large parts",
        "Repair shop and dealership delivery",
        "Same-day delivery available",
        "Careful loading and transport",
      ],
    },
    {
      icon: Package,
      title: "Small Packages & Business Delivery",
      description:
        "Reliable delivery for small packages, documents, and business items across Arizona. Perfect for local businesses that need direct service, flexible timing, and dependable handling.",
      image: "https://images.pexels.com/photos/8931732/pexels-photo-8931732.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
        "Same-day and next-day delivery across the Arizona metro area for vehicles, auto parts, and business items. Designed for customers who need local service that is direct, simple, and dependable.",
      image: "https://i.ibb.co/HTkh8LQ5/Local-az-delivery.jpg",
      features: [
        "Phoenix metro and surrounding areas",
        "Same-day delivery available",
        "Direct point-to-point service",
        "Arizona-based local support",
      ],
    },
    {
      icon: Map,
      title: "Regional Transport",
      description:
        "Pickup and delivery throughout Arizona, with nearby out-of-state service available by request. Best for longer-distance jobs that still need direct handling and clear scheduling.",
      image: "/images/regional-transport.jpg",
      features: [
        "Arizona statewide service",
        "Nearby states by request",
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
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-neutral-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-neutral-700">
              <Car className="mr-2 text-orange-500" size={18} />
              Vehicle, Auto Parts & Business Delivery
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Direct <span className="text-orange-500">Pickup & Delivery</span>{" "}
              Services Across Arizona
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Freedom Line Freight Express provides direct, owner-operated pickup
              and delivery for personal vehicles, auto parts, and business items
              across Arizona. Every job is handled with care, clear
              communication, and dependable service from pickup to drop-off.
            </p>
            <div className="mt-4 bg-orange-900/30 border-l-4 border-orange-500 p-4 rounded">
              <p className="text-orange-100 font-semibold text-lg">
                Owner-operated. Direct service. No shared loads. No unnecessary
                delays.
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
                  <div className="h-56 overflow-hidden">
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
              What You Can Expect with{" "}
              <span className="text-orange-500">Every Delivery</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Freedom Line Freight Express focuses on direct service, careful
              handling, and dependable communication on every job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <Shield className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Owner-Operated Service
              </h3>
              <p className="text-gray-400">
                Work directly with the person handling your pickup and delivery.
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <Car className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Direct Delivery
              </h3>
              <p className="text-gray-400">
                No shared loads, no unnecessary transfers, and no broker-style
                confusion.
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
                Same-day, next-day, and scheduled service based on availability.
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <Camera className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Careful Handling
              </h3>
              <p className="text-gray-400">
                Vehicles, parts, and business items are handled with attention
                and professionalism.
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <CheckCircle className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Clear Communication
              </h3>
              <p className="text-gray-400">
                Straightforward updates from pickup through delivery.
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <MapPin className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Arizona-Based Service
              </h3>
              <p className="text-gray-400">
                Local knowledge with dependable service across Arizona.
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
              Arizona-Based. Ready for{" "}
              <span className="text-orange-500">Local and Regional Delivery</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Freedom Line Freight Express serves customers across Arizona with
              direct pickup and delivery for vehicles, auto parts, and business
              items. Nearby out-of-state requests may also be available
              depending on route and scheduling.
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
                Availability may vary based on route, distance, and scheduling.
              </p>
            </div>

            <div className="border-t border-neutral-700 pt-6 text-center">
              <p className="text-gray-300">
                <strong className="text-white">Based in Arizona,</strong> I
                provide dependable local and regional pickup and delivery with
                direct, owner-operated service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Direct Pickup or Delivery Quote?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto font-semibold">
            Get a fast quote for vehicles, auto parts, or business deliveries
            across Arizona.
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
              <span>Owner-Operated</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2" size={16} />
              <span>Arizona-Based</span>
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
