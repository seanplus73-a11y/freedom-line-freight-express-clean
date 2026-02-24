import { Link } from "react-router";
import { Truck, Heart, Shield, Users, Award, MapPin, ArrowRight } from "lucide-react";

/**
 * About Page - Freedom Line Freight Express
 * Information about the business, owner, and values
 */
export default function About() {
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Freedom Line Freight Express
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deaf-owned and operated vehicle transport service bringing professionalism, 
            reliability, and personalized care to the Southwest.
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Professional Vehicle Transport You Can Trust
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Freedom Line Freight Express is a solo owner-operated vehicle transport service 
                  based in Arizona. I specialize in professional pickup and delivery of personal 
                  vehicles throughout the Southwest region, including Arizona, Nevada, New Mexico, 
                  Utah, and Southern California.
                </p>
                <p>
                  As a deaf-owned business, I bring a unique perspective and commitment to clear 
                  communication and personalized service. Every transport job receives my full 
                  attention, from the initial quote through final delivery.
                </p>
                <p>
                  Whether you're relocating, buying or selling a vehicle, or need transport for 
                  any other reason, I provide reliable, insured service with the care and 
                  professionalism your vehicle deserves.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Personalized Service</h4>
                    <p className="text-gray-400 text-sm">
                      Solo owner-operated means you work directly with me throughout the entire process
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Fully Insured</h4>
                    <p className="text-gray-400 text-sm">
                      Every vehicle is transported with comprehensive insurance coverage
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Professional Standards</h4>
                    <p className="text-gray-400 text-sm">
                      Commitment to excellence in every aspect of vehicle transport
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Regional Expertise</h4>
                    <p className="text-gray-400 text-sm">
                      Deep knowledge of Southwest routes and efficient transport planning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deaf-Owned Business Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Proud Deaf-Owned Business
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Breaking barriers and delivering excellence in the vehicle transport industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <Users className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                Communication Accessibility
              </h3>
              <p className="text-gray-300">
                I prioritize clear, effective communication through text messaging, email, and 
                video relay services. My deaf identity brings a unique understanding of the 
                importance of accessible communication, ensuring seamless coordination throughout 
                your vehicle transport.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <Truck className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
                Dedication to Service
              </h3>
              <p className="text-gray-300">
                Being deaf-owned means operating with determination, attention to detail, and 
                a commitment to proving that professional excellence knows no boundaries. Every 
                transport job is handled with care, precision, and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Serving the Southwest
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Based in Arizona with coverage throughout the Southwest region
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: "Arizona", description: "Home Base" },
              { name: "Nevada", description: "Regular Routes" },
              { name: "New Mexico", description: "Full Coverage" },
              { name: "Utah", description: "Southern Region" },
              { name: "S. California", description: "Major Cities" }
            ].map((area) => (
              <div 
                key={area.name}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center hover:border-orange-500 transition-colors"
              >
                <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-1">{area.name}</h3>
                <p className="text-gray-400 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Reliability</h3>
              <p className="text-gray-400">
                Dependable service you can count on for your vehicle transport needs
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Care</h3>
              <p className="text-gray-400">
                Your vehicle is treated with the same care I'd give my own
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
              <p className="text-gray-400">
                Professional standards in every aspect of vehicle transport
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the difference of personalized, professional vehicle transport service. 
            Get your custom quote today.
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
              to="/contact" 
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
