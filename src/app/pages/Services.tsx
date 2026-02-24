const personalVehicleImage = "/images/personal-vehicle-transport.jpg";
const dealerAuctionImage = "/images/dealer-auction-pickup.jpg";
const localAzImage = "/images/local-az-delivery.jpg";
const regionalTransportImage = "/images/regional-transport.jpg";
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
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Services() {
  const services = [
    {
      icon: Car,
      title: "Personal Vehicle Transport",
      description: "Door-to-door pickup and delivery of cars, SUVs, and light trucks. Handled with professional care and secure transport from start to finish.",
      image: personalVehicleImage,
      features: [
        "Sedans, SUVs, and light trucks (F-250/2500 class)",
        "Door-to-door service",
        "Luxury vehicle handling available",
        "Fully insured during transport",
      ],
    },
    {
      icon: Building2,
      title: "Dealer & Auction Pickup",
      description: "Reliable vehicle pickup and delivery for dealerships and auction locations. Fast scheduling and professional handling.",
      image: dealerAuctionImage,
      features: [
        "Dealer-to-dealer transfers",
        "Auction pickup and delivery",
        "Fast turnaround times",
        "Professional owner-operated service",
      ],
    },
    {
      icon: MapPin,
      title: "Local AZ Delivery",
      description: "Next-day vehicle delivery across the Arizona metro area and statewide routes.",
      image: image_47e91680f4739ce476b191e7eaabf97fa6c91cdd,
      features: [
        "Phoenix metro and statewide coverage",
        "Flexible scheduling",
        "Expedited options available",
        "One vehicle at a time, handled with care",
      ],
    },
    {
      icon: Map,
      title: "Regional Transport",
      description: "Dependable multi-state vehicle transport across Arizona, Nevada, California, New Mexico, Utah, and surrounding states.",
      image: regionalTransportImage,
      features: [
        "Southwest regional coverage",
        "Cross-state transport",
        "Scheduled delivery windows",
        "Volume discounts available",
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
              Vehicle Pickup & Delivery Service
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Vehicle <span className="text-orange-500">Transport Services</span>
            </h1>
            <p className="text-xl text-gray-300">
              Reliable, insured vehicle pickup and delivery across the Southwest. From personal cars to dealer transfers, we handle your vehicles with professional care.
            </p>
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
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
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
              What's Included with <span className="text-orange-500">Every Transport</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional service standards on every vehicle we transport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <Shield className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Full Insurance Coverage</h3>
              <p className="text-gray-400">
                Every vehicle is fully insured during pickup, transport, and delivery for your peace of mind.
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <Camera className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Photo Documentation</h3>
              <p className="text-gray-400">
                Complete photo documentation at pickup and delivery to ensure transparency and accountability.
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <Clock className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Flexible Scheduling</h3>
              <p className="text-gray-400">
                Same-day, next-day, or scheduled transport options to fit your timeline and needs.
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <Car className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Experienced Owner-Operator</h3>
              <p className="text-gray-400">
                Experienced, licensed owner-operator handling your vehicle with care and professionalism.
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <MapPin className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Door-to-Door Service</h3>
              <p className="text-gray-400">
                Convenient pickup from your location and delivery directly to your destination.
              </p>
            </div>

            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <CheckCircle className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Delivery Confirmation</h3>
              <p className="text-gray-400">
                Digital delivery confirmation with signature and condition report upon arrival.
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
              Our <span className="text-orange-500">Service Area</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Serving the Southwest with professional vehicle transport services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-neutral-900 rounded-lg p-8 border-2 border-orange-500/30">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <CheckCircle className="text-orange-500 mr-3 flex-shrink-0" size={20} />
                <span className="text-lg font-bold text-white">Arizona (Statewide)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-orange-500 mr-3 flex-shrink-0" size={20} />
                <span className="text-lg font-bold text-white">Nevada</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-orange-500 mr-3 flex-shrink-0" size={20} />
                <span className="text-lg font-bold text-white">New Mexico</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-orange-500 mr-3 flex-shrink-0" size={20} />
                <span className="text-lg font-bold text-white">Utah</span>
              </div>
              <div className="flex items-center sm:col-span-2">
                <CheckCircle className="text-orange-500 mr-3 flex-shrink-0" size={20} />
                <span className="text-lg font-bold text-white">Southern California</span>
              </div>
            </div>
            <div className="border-t border-neutral-700 pt-6 text-center">
              <p className="text-gray-300">
                <strong className="text-white">Based in Arizona,</strong> we specialize in reliable local and regional vehicle transport throughout the Southwest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Schedule Your Vehicle Pickup?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto font-semibold">
            Safe, insured vehicle pickup and delivery across Arizona and surrounding states. Owner-operated and professionally handled.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              to="/request-pickup"
              className="inline-flex items-center justify-center bg-white text-orange-600 px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Request a Pickup
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
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2" size={16} />
              <span>Professional Owner-Operator</span>
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
