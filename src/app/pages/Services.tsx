import { Link } from "react-router";
import { Truck, Package, Calendar, Shield, MapPin, CheckCircle, ArrowRight } from "lucide-react";

/**
 * Services Page - Freedom Line Freight Express
 * Details about vehicle transport services offered
 */
export default function Services() {
    {
      icon: Truck,
      title: "Vehicle Pickup & Delivery",
      description: "Professional door-to-door vehicle transport service. I handle all types of personal vehicles including cars, trucks, SUVs, and motorcycles.",
      features: [
        "Door-to-door service",
        "Multiple vehicle types",
        "Careful handling",
        "Timely delivery"
      ]
    },
    {
      icon: Package,
      title: "Regional Transport",
      description: "Specialized in Southwest regional transport covering Arizona, Nevada, New Mexico, Utah, and Southern California.",
      features: [
        "Arizona (home base)",
        "Nevada routes",
        "New Mexico service",
        "Utah & Southern California"
      ]
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Work with your timeline to arrange convenient pickup and delivery times that fit your schedule.",
      features: [
        "Coordinated scheduling",
        "Advance booking available",
        "Regular updates",
        "Reliable timeframes"
      ]
    },
    {
      icon: Shield,
      title: "Insured Transport",
      description: "Every vehicle is transported with full insurance coverage for your peace of mind.",
      features: [
        "Fully insured",
        "Professional handling",
        "Safe transport",
        "Damage protection"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional vehicle transport services throughout the Southwest. 
            Solo owner-operated with personalized attention to every job.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors"
                >
                  <div className="bg-orange-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-400">
                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas Detail */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Service Coverage Areas
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Based in Arizona, I provide vehicle transport services throughout the Southwest region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { state: "Arizona", description: "Home base - statewide coverage" },
              { state: "Nevada", description: "Las Vegas and surrounding areas" },
              { state: "New Mexico", description: "Albuquerque, Santa Fe, and more" },
              { state: "Utah", description: "Southern Utah service area" },
              { state: "Southern California", description: "San Diego, LA region" },
              { state: "Custom Routes", description: "Contact for special requests" }
            ].map((area, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700"
              >
                <MapPin className="w-6 h-6 text-orange-500 mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {area.state}
                </h3>
                <p className="text-gray-400">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Types of Vehicles I Transport
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Cars", "Trucks", "SUVs", "Motorcycles"].map((type) => (
                <div key={type} className="text-center">
                  <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Truck className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{type}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Schedule Your Vehicle Transport?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a custom quote based on your specific transport needs. Every job is unique, 
            and pricing is tailored to your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/request-pickup" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              Request a Pickup
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View Pricing Info
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
