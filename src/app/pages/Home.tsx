import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  ArrowRight,
  Clock,
  Shield,
  CheckCircle,
  MessageSquare,
  Car,
  Building2,
  MapPin,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Arizona Vehicle Delivery | No Towing No Trailers | FLF Express
        </title>

        <meta
          name="description"
          content="Arizona vehicle delivery service for dealerships, repair shops, and businesses. I drive vehicles directly with no towing or trailers. Serving Phoenix metro and statewide Arizona."
        />

        <meta
          name="keywords"
          content="Arizona vehicle delivery, Phoenix vehicle delivery, dealership vehicle transport, repair shop vehicle delivery, auction pickup Arizona, no towing vehicle delivery, driveaway service Arizona"
        />

        <link rel="canonical" href="https://www.flfreightco.com/" />

        <meta
          property="og:title"
          content="Arizona Vehicle Delivery | We Drive It No Towing"
        />
        <meta
          property="og:description"
          content="Owner operated vehicle delivery for dealerships, repair shops, and businesses across Phoenix metro and Arizona."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.flfreightco.com/" />
        <meta property="og:site_name" content="Freedom Line Freight Express" />
        <meta
          property="og:image"
          content="https://www.flfreightco.com/og-image.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Freedom Line Freight Express",
            url: "https://www.flfreightco.com/",
            telephone: "+1-480-742-8553",
            email: "dispatch@flfreightco.com",
            areaServed: [
              "Phoenix AZ",
              "Queen Creek AZ",
              "San Tan Valley AZ",
              "Gilbert AZ",
              "Chandler AZ",
              "Mesa AZ",
              "Arizona",
            ],
            description:
              "Owner operated Arizona vehicle delivery service. I drive vehicles directly for dealerships, repair shops, businesses, and individual customers. No towing or trailers.",
            serviceType: [
              "Vehicle Delivery",
              "Dealership Vehicle Transfers",
              "Auction Pickups",
              "Repair Shop Vehicle Moves",
              "Driveaway Service",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Queen Creek",
              addressRegion: "AZ",
              addressCountry: "US",
            },
          })}
        </script>
      </Helmet>

      <div className="bg-neutral-950 text-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-neutral-950">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1770289711980-c7663e18bb16?auto=format&fit=crop&w=1080&q=80"
              alt="Arizona vehicle delivery service"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center bg-black/60 px-4 py-2 rounded-full border border-orange-500">
                  <CheckCircle className="text-orange-500 mr-2" size={18} />
                  <span className="text-sm font-semibold">
                    Owner Operated
                  </span>
                </div>

                <div className="flex items-center bg-black/60 px-4 py-2 rounded-full border border-orange-500">
                  <Shield className="text-orange-500 mr-2" size={18} />
                  <span className="text-sm font-semibold">
                    Fully Insured
                  </span>
                </div>

                <div className="flex items-center bg-black/60 px-4 py-2 rounded-full border border-orange-500">
                  <MessageSquare className="text-orange-500 mr-2" size={18} />
                  <span className="text-sm font-semibold">
                    Text First Service
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Arizona Vehicle Delivery
                <br />
                <span className="text-orange-500">
                  We Drive It. No Towing. No Trailers.
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
                I help dealerships, repair shops, and businesses move vehicles
                directly. Lot transfers, auction pickups, customer deliveries,
                and local vehicle moves handled by an owner operator.
              </p>

              <p className="text-base md:text-lg text-white font-semibold mb-6">
                Based in Queen Creek. Serving Phoenix metro and statewide
                Arizona.
              </p>

              <p className="text-base md:text-lg text-gray-300 mb-10">
                Text or email only. Fast response, clear updates, and documented
                communication from pickup to delivery.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="sms:4807428553"
                  className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors"
                >
                  📱 Text Me to Book
                </a>

                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-black transition-colors"
                >
                  Request Pickup
                  <ArrowRight className="ml-2" size={22} />
                </Link>
              </div>

              <p className="mt-4 text-sm text-gray-300">
                Business accounts welcome. Volume pricing available.
              </p>
            </div>
          </div>
        </section>

        {/* Business Account Section */}
        <section className="py-16 bg-black border-y border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              For <span className="text-orange-500">Dealerships & Repair Shops</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Running a dealership or repair shop? I handle lot transfers,
              auction pickups, and customer vehicle deliveries on your schedule.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left mb-10">
              <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
                <Building2 className="text-orange-500 mb-3" size={30} />
                <h3 className="font-bold text-xl mb-2">Dealer Transfers</h3>
                <p className="text-gray-400">
                  Move inventory between lots, auctions, buyers, or service
                  locations.
                </p>
              </div>

              <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
                <Car className="text-orange-500 mb-3" size={30} />
                <h3 className="font-bold text-xl mb-2">Shop Vehicle Moves</h3>
                <p className="text-gray-400">
                  Help customers get vehicles to or from your repair shop.
                </p>
              </div>

              <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
                <Clock className="text-orange-500 mb-3" size={30} />
                <h3 className="font-bold text-xl mb-2">On Demand Support</h3>
                <p className="text-gray-400">
                  Same day or next day availability when schedule allows.
                </p>
              </div>
            </div>

            <a
              href="sms:4807428553"
              className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors"
            >
              Text to Set Up Business Account
            </a>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-neutral-900 py-12 border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <CheckCircle className="text-orange-500 mx-auto mb-3" size={34} />
                <div className="font-bold">Owner Operated</div>
                <div className="text-gray-400 text-sm">Direct accountability</div>
              </div>

              <div>
                <Shield className="text-orange-500 mx-auto mb-3" size={34} />
                <div className="font-bold">Fully Licensed & Insured</div>
                <div className="text-gray-400 text-sm">
                  DOT #4497273
                </div>
              </div>

              <div>
                <MapPin className="text-orange-500 mx-auto mb-3" size={34} />
                <div className="font-bold">Arizona Based</div>
                <div className="text-gray-400 text-sm">
                  Phoenix metro service
                </div>
              </div>

              <div>
                <MessageSquare className="text-orange-500 mx-auto mb-3" size={34} />
                <div className="font-bold">Text First</div>
                <div className="text-gray-400 text-sm">
                  Clear written updates
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Vehicle Delivery <span className="text-orange-500">Services</span>
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Focused on vehicle moves only. No towing, no trailers, no
                third party app drivers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Dealership Vehicle Transfers",
                  text: "Direct vehicle moves between lots, buyers, auctions, and service locations.",
                },
                {
                  title: "Auction Pickups",
                  text: "Pickup and delivery support for auction vehicles that are safe and legal to drive.",
                },
                {
                  title: "Repair Shop Vehicle Moves",
                  text: "Customer vehicle pickup or return support for independent shops.",
                },
                {
                  title: "Business Vehicle Delivery",
                  text: "Reliable vehicle movement for companies, fleet owners, and local businesses.",
                },
                {
                  title: "Individual Vehicle Delivery",
                  text: "Need your car driven home, to a mechanic, or to another location? I can help.",
                },
                {
                  title: "Same Day Availability",
                  text: "Same day or next day service may be available depending on route and schedule.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 p-8 rounded-lg border border-neutral-800 hover:border-orange-500 transition-colors"
                >
                  <Car className="text-orange-500 mb-4" size={32} />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-neutral-900 border-y border-neutral-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-14">
              How It <span className="text-orange-500">Works</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-3">Text the Details</h3>
                <p className="text-gray-400">
                  Send pickup location, delivery location, vehicle info, and
                  timing.
                </p>
              </div>

              <div>
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-3">I Drive It Directly</h3>
                <p className="text-gray-400">
                  No trailer, no tow truck, no unnecessary delays.
                </p>
              </div>

              <div>
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-3">Delivery Confirmed</h3>
                <p className="text-gray-400">
                  You receive clear updates and confirmation when the vehicle is
                  delivered.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Simple <span className="text-orange-500">Starting Pricing</span>
              </h2>

              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Starting rates for direct vehicle delivery. Final quote depends
                on distance, route, timing, and vehicle condition.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
              {[
                { name: "Local", miles: "0 to 25 miles", price: "$85" },
                { name: "Extended Local", miles: "25 to 50 miles", price: "$125" },
                { name: "Regional", miles: "50 to 150 miles", price: "$250" },
                { name: "Long Distance", miles: "150+ miles", price: "Custom" },
              ].map((tier, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 p-8 rounded-lg border border-neutral-800 text-center"
                >
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-4">{tier.miles}</p>
                  <div className="text-4xl font-bold text-orange-500 mb-2">
                    {tier.price}
                  </div>
                  <p className="text-gray-400">Starting at</p>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-300 mb-8">
              Business accounts welcome. Volume pricing available for dealerships
              and repair shops moving multiple vehicles.
            </p>

            <div className="text-center">
              <a
                href="sms:4807428553"
                className="inline-flex items-center justify-center bg-orange-500 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors"
              >
                Text for Quote
              </a>
            </div>
          </div>
        </section>

        {/* Local SEO */}
        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Serving <span className="text-orange-500">Phoenix Metro</span>
            </h2>

            <p className="text-xl text-gray-300">
              Vehicle delivery service for Phoenix, Queen Creek, San Tan Valley,
              Gilbert, Chandler, Mesa, and nearby Arizona communities.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-neutral-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked <span className="text-orange-500">Questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Do you tow vehicles?",
                  a: "No. I do not tow vehicles or use trailers. I personally drive the vehicle directly to the destination.",
                },
                {
                  q: "Do you work with dealerships and repair shops?",
                  a: "Yes. I help dealerships, repair shops, and businesses with lot transfers, auction pickups, and customer vehicle deliveries.",
                },
                {
                  q: "How do you communicate?",
                  a: "Text or email only. This keeps communication fast, clear, and documented from pickup to delivery.",
                },
                {
                  q: "What vehicles do you move?",
                  a: "I move operable vehicles that are safe, legal to drive, insured, and ready for the road.",
                },
                {
                  q: "Do you offer same day service?",
                  a: "Same day or next day service may be available depending on schedule, distance, route, and vehicle condition.",
                },
                {
                  q: "Are you insured?",
                  a: "Yes. Freedom Line Freight Express carries commercial auto coverage for transport services.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 p-6 rounded-lg border border-neutral-800"
                >
                  <h3 className="text-xl font-bold mb-2">{item.q}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Running a Dealership or Repair Shop?
            </h2>

            <p className="text-xl text-orange-100 mb-8 font-semibold">
              Set up a business account and get a reliable owner operator for
              your vehicle moves.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="sms:4807428553"
                className="inline-flex items-center justify-center bg-white text-orange-600 px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Text Me Now
              </a>

              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors"
              >
                Request Pickup
                <ArrowRight className="ml-2" size={24} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
