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
  Package,
  FileText,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Arizona Vehicle & Courier Delivery | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Arizona vehicle and courier delivery service for dealerships, repair shops, and businesses. No towing, no trailers. Auto parts, documents, business items, and vehicle delivery across Phoenix metro and Arizona."
        />
        <link rel="canonical" href="https://www.flfreightco.com/" />
      </Helmet>

      <div className="bg-neutral-950 text-white">
        <section className="relative overflow-hidden bg-neutral-950">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1770289711980-c7663e18bb16?auto=format&fit=crop&w=1080&q=80"
              alt="Arizona vehicle and courier delivery"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/55" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  ["Owner Operated", CheckCircle],
                  ["Fully Insured", Shield],
                  ["Text First Service", MessageSquare],
                ].map(([label, Icon]: any) => (
                  <div
                    key={label}
                    className="flex items-center bg-black/60 px-4 py-2 rounded-full border border-orange-500"
                  >
                    <Icon className="text-orange-500 mr-2" size={18} />
                    <span className="text-sm font-semibold">{label}</span>
                  </div>
                ))}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Arizona Vehicle & Courier Delivery
                <br />
                <span className="text-orange-500">
                  We Drive It. No Towing. No Trailers.
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
                Direct vehicle pickup, auto parts delivery, document delivery,
                and business transport for dealerships, repair shops, and local
                businesses across Arizona.
              </p>

              <p className="text-base md:text-lg text-white font-semibold mb-6">
                Based in Queen Creek. Serving Phoenix, Gilbert, Chandler, Mesa,
                San Tan Valley, and statewide Arizona.
              </p>

              <p className="text-base md:text-lg text-gray-300 mb-10">
                No app dispatch. No random driver. Direct owner operated service
                with fast text updates from pickup to delivery.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="sms:4807428553"
                  className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors"
                >
                  Text Me Now
                </a>

                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-black transition-colors"
                >
                  Request Pickup Quote
                  <ArrowRight className="ml-2" size={22} />
                </Link>
              </div>

              <p className="mt-4 text-sm text-gray-300">
                Business accounts welcome. Same day service available when schedule allows.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black border-y border-neutral-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Built for <span className="text-orange-500">Dealers, Shops & Businesses</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              I help businesses save time by handling direct local deliveries
              without sending your staff across town.
            </p>

            <div className="grid md:grid-cols-4 gap-6 text-left">
              {[
                {
                  icon: Car,
                  title: "Vehicle Delivery",
                  text: "Lot transfers, auction pickups, and customer vehicle moves.",
                },
                {
                  icon: Package,
                  title: "Auto Parts",
                  text: "Same day parts pickup and delivery between shops and dealers.",
                },
                {
                  icon: FileText,
                  title: "Documents",
                  text: "Business documents, paperwork, title docs, and urgent files.",
                },
                {
                  icon: Building2,
                  title: "Business Items",
                  text: "Direct delivery support for local businesses and offices.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-neutral-900 p-6 rounded-lg border border-neutral-800 hover:border-orange-500 transition-colors"
                >
                  <item.icon className="text-orange-500 mb-3" size={32} />
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-900 py-12 border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                ["Owner Operated", "Direct accountability", CheckCircle],
                ["Fully Insured", "Protected service", Shield],
                ["Arizona Based", "Phoenix metro service", MapPin],
                ["Text First", "Clear written updates", MessageSquare],
              ].map(([title, sub, Icon]: any) => (
                <div key={title}>
                  <Icon className="text-orange-500 mx-auto mb-3" size={34} />
                  <div className="font-bold">{title}</div>
                  <div className="text-gray-400 text-sm">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Services <span className="text-orange-500">Available</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Direct local transport for vehicles, auto parts, documents, and business items.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                ["Dealership Vehicle Transfers", "Vehicle moves between lots, buyers, auctions, and service locations."],
                ["Repair Shop Vehicle Moves", "Customer vehicle pickup and return support for repair shops."],
                ["Auto Parts Delivery", "Parts pickup and delivery between shops, dealers, warehouses, and customers."],
                ["Document Delivery", "Direct delivery for paperwork, business files, title documents, and urgent items."],
                ["Business Transport", "Local delivery support for offices, sellers, and small businesses."],
                ["Same Day Availability", "Same day or next day service may be available depending on route and schedule."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="bg-neutral-900 p-8 rounded-lg border border-neutral-800 hover:border-orange-500 transition-colors"
                >
                  <Car className="text-orange-500 mb-4" size={32} />
                  <h3 className="text-2xl font-bold mb-3">{title}</h3>
                  <p className="text-gray-400 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-900 border-y border-neutral-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-14">
              How It <span className="text-orange-500">Works</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                ["1", "Text the Details", "Send pickup location, delivery location, item or vehicle info, and timing."],
                ["2", "I Handle It Directly", "No random app driver. No unnecessary delays. Direct service by owner."],
                ["3", "Delivery Confirmed", "You receive clear updates and confirmation when delivery is complete."],
              ].map(([num, title, text]) => (
                <div key={num}>
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                    {num}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{title}</h3>
                  <p className="text-gray-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Simple <span className="text-orange-500">Starting Pricing</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Starting rates for direct local transport. Final quote depends on distance,
                route, timing, service type, and details.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
              {[
                ["Local", "0 to 25 miles", "$85"],
                ["Extended Local", "25 to 50 miles", "$125"],
                ["Regional", "50 to 150 miles", "$250"],
                ["Long Distance", "150+ miles", "Custom"],
              ].map(([name, miles, price]) => (
                <div
                  key={name}
                  className="bg-neutral-900 p-8 rounded-lg border border-neutral-800 text-center"
                >
                  <h3 className="text-xl font-bold mb-2">{name}</h3>
                  <p className="text-gray-400 mb-4">{miles}</p>
                  <div className="text-4xl font-bold text-orange-500 mb-2">{price}</div>
                  <p className="text-gray-400">Starting at</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center bg-orange-500 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors"
              >
                Request Pickup Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-900 border-y border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Serving <span className="text-orange-500">Phoenix Metro</span>
            </h2>
            <p className="text-xl text-gray-300">
              Queen Creek, San Tan Valley, Gilbert, Chandler, Mesa, Phoenix,
              Scottsdale, Tempe, and nearby Arizona communities.
            </p>
          </div>
        </section>

        <section className="py-24 bg-neutral-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked <span className="text-orange-500">Questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                ["Do you tow vehicles?", "No. Vehicle delivery is drive-away only. I personally drive operable vehicles directly to the destination."],
                ["Do you deliver auto parts?", "Yes. I can deliver auto parts, documents, business items, and small packages depending on route and schedule."],
                ["Do you work with dealerships and repair shops?", "Yes. I help dealerships, repair shops, and businesses with vehicle moves, parts runs, and direct delivery support."],
                ["How do you communicate?", "Text or email only. This keeps communication fast, clear, and documented."],
                ["Do you offer same day service?", "Same day or next day service may be available depending on schedule, distance, route, and service type."],
              ].map(([q, a]) => (
                <div key={q} className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
                  <h3 className="text-xl font-bold mb-2">{q}</h3>
                  <p className="text-gray-300 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Need a Vehicle, Part, or Business Item Delivered?
            </h2>
            <p className="text-xl text-orange-100 mb-8 font-semibold">
              Send the pickup and delivery details and I’ll review your route.
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
                Request Pickup Quote
                <ArrowRight className="ml-2" size={24} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
