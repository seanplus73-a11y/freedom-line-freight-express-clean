import { Link } from "react-router";
import { Truck, Shield, Clock, MapPin, CheckCircle, ArrowRight } from "lucide-react";

/**
 * Home Page - Freedom Line Freight Express
 * Main landing page for vehicle transport services
 */
export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Professional Vehicle Transport
            <span className="block text-orange-500 mt-2">Across the Southwest</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Reliable, personalized vehicle pickup and delivery service throughout Arizona, 
            Nevada, New Mexico, Utah, and Southern California. Deaf-owned and operated 
            with a commitment to excellence.
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
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Freedom Line?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Professional Service</h3>
              <p className="text-gray-400">
                Solo owner-operated business providing personalized attention to every vehicle transport.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Insured & Reliable</h3>
              <p className="text-gray-400">
                Fully insured transport with careful handling of your vehicle from pickup to delivery.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Flexible Scheduling</h3>
              <p className="text-gray-400">
                Work with your timeline for convenient pickup and delivery arrangements.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Regional Coverage</h3>
              <p className="text-gray-400">
                Serving Arizona, Nevada, New Mexico, Utah, and Southern California.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Serving the Southwest
              </h2>
              <p className="text-gray-300 mb-6">
                Based in Arizona, Freedom Line Freight Express provides professional vehicle 
                transport services throughout the Southwest region. Whether you're relocating, 
                buying or selling a vehicle, or need transport for any reason, I provide reliable 
                service you can count on.
              </p>
              <ul className="space-y-3">
                {["Arizona", "Nevada", "New Mexico", "Utah", "Southern California"].map((state) => (
                  <li key={state} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>{state}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Get a custom quote for your vehicle transport needs. Each service is tailored 
                to your specific requirements.
              </p>
              <Link 
                to="/request-pickup" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deaf-Owned Business Highlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Deaf-Owned & Operated
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Freedom Line Freight Express is proudly deaf-owned and operated, bringing 
            dedication, professionalism, and personalized service to every transport job.
          </p>
          <p className="text-gray-400">
            Communication is available via text, email, and video relay services to ensure 
            seamless coordination for your vehicle transport needs.
          </p>
        </div>
      </section>
    </div>
  );
}
