import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Car,
  Phone,
  MapPin,
  Star,
  Wrench,
  Building2,
} from "lucide-react";

export default function OilChangePickupServicePhoenix() {
  return (
    <>
      <Helmet>
        <title>
          Oil Change Pickup Service Phoenix AZ | Vehicle Concierge Service
        </title>

        <meta
          name="description"
          content="Oil change pickup service in Phoenix Arizona. Freedom Line Freight Express picks up your vehicle, takes it to your preferred oil change shop, waits during service, and returns it back to your home or office."
        />

        <meta
          name="keywords"
          content="oil change pickup service Phoenix, vehicle concierge service Phoenix, car service pickup and delivery, oil change valet service, vehicle maintenance pickup service, Phoenix vehicle pickup service, Mesa oil change pickup, Chandler vehicle concierge service"
        />

        <link
          rel="canonical"
          href="https://www.flfreightco.com/oil-change-pickup-service-phoenix"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Oil Change Pickup Service",
            name: "Oil Change Pickup Service Phoenix",
            provider: {
              "@type": "LocalBusiness",
              name: "Freedom Line Freight Express",
              url: "https://www.flfreightco.com",
              telephone: "480-742-8553",
              areaServed: [
                "Phoenix",
                "Mesa",
                "Chandler",
                "Gilbert",
                "Tempe",
                "Queen Creek",
                "San Tan Valley",
                "Scottsdale",
              ],
            },
            areaServed: {
              "@type": "City",
              name: "Phoenix",
            },
            description:
              "Vehicle pickup and return service for oil change appointments in the Phoenix metro area.",
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-neutral-950 text-white">
        {/* HERO */}
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
                <Star className="mr-2" size={16} />
                Phoenix Vehicle Concierge Service
              </div>

              <h1 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
                Oil Change Pickup
                <span className="block text-orange-500">
                  Service Phoenix
                </span>
              </h1>

              <p className="mb-8 max-w-3xl text-xl leading-relaxed text-gray-300">
                Too busy to wait at the oil change shop? Freedom Line Freight
                Express picks up your vehicle, takes it to your preferred oil
                change location, waits during service, and returns your vehicle
                back to your home or office anywhere in the Phoenix metro area.
              </p>

              <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-400">
                Our vehicle concierge service helps busy professionals,
                families, seniors, remote workers, and business owners save
                valuable time while keeping up with vehicle maintenance.
              </p>

              <div className="mb-8 text-2xl font-bold text-orange-400">
                Text Only: 480-742-8553
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-orange-600"
                >
                  Request Pickup Service
                  <ArrowRight className="ml-2" size={22} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white hover:text-orange-600"
                >
                  <Phone className="mr-2" size={20} />
                  Text 480-742-8553
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 text-sm text-gray-300">
                {[
                  "Owner operated",
                  "Fully insured",
                  "Same day available",
                  "Phoenix metro",
                  "Text preferred",
                  "No towing",
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <CheckCircle
                      className="mr-2 text-orange-500"
                      size={16}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="border-t border-neutral-800 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 text-center">
              <h2 className="mb-4 text-4xl font-black">
                How Our Oil Change Pickup Service Works
              </h2>

              <p className="mx-auto max-w-3xl text-lg text-gray-400">
                We make vehicle maintenance easier by handling the pickup,
                driving, waiting, and return process for you.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Car,
                  title: "We Pick Up Your Vehicle",
                  text:
                    "We arrive at your home or office and safely pick up your vehicle.",
                },
                {
                  icon: Clock,
                  title: "We Handle The Appointment",
                  text:
                    "We drive your vehicle to your preferred oil change location and wait during the service.",
                },
                {
                  icon: Shield,
                  title: "We Return It To You",
                  text:
                    "After the oil change is complete, we return your vehicle directly back to your location.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8"
                >
                  <item.icon className="mb-5 text-orange-500" size={42} />

                  <h3 className="mb-4 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-gray-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="border-t border-neutral-800 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-4xl font-black">
                  Why Customers Use Our Service
                </h2>

                <div className="space-y-5">
                  {[
                    "Avoid waiting rooms and long shop delays",
                    "Perfect for busy work schedules",
                    "Helpful for seniors and families",
                    "Convenient for remote workers",
                    "No need to arrange rides",
                    "Simple text communication",
                    "Local Phoenix area service",
                    "Easy vehicle maintenance support",
                  ].map((item) => (
                    <div key={item} className="flex items-start">
                      <CheckCircle
                        className="mr-3 mt-1 text-orange-500"
                        size={20}
                      />

                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
                <h3 className="mb-4 text-3xl font-black">
                  Service Area
                </h3>

                <div className="mb-6 flex items-center text-gray-300">
                  <MapPin className="mr-3 text-orange-500" size={22} />
                  Phoenix Metro Area
                </div>

                <div className="grid grid-cols-2 gap-3 text-gray-400">
                  <p>Phoenix</p>
                  <p>Mesa</p>
                  <p>Chandler</p>
                  <p>Gilbert</p>
                  <p>Tempe</p>
                  <p>Scottsdale</p>
                  <p>Queen Creek</p>
                  <p>San Tan Valley</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="border-t border-neutral-800 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-10">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-4xl font-black">
                  Why Choose Freedom Line Freight Express
                </h2>

                <p className="mx-auto max-w-3xl text-lg text-gray-400">
                  Local Arizona vehicle concierge service focused on convenience,
                  communication, and trusted personal service.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: Shield,
                    title: "Fully Insured",
                  },
                  {
                    icon: Phone,
                    title: "Text Communication",
                  },
                  {
                    icon: Wrench,
                    title: "Vehicle Concierge",
                  },
                  {
                    icon: Building2,
                    title: "Local Arizona Business",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-neutral-800 bg-black/40 p-6 text-center"
                  >
                    <item.icon
                      className="mx-auto mb-4 text-orange-500"
                      size={40}
                    />

                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="border-t border-neutral-800 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-black">
                Oil Change Pickup Pricing
              </h2>

              <p className="text-lg text-gray-400">
                Simple pickup and return pricing based on distance.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Local",
                  range: "0 to 25 miles",
                  price: "$85",
                },
                {
                  title: "Extended Local",
                  range: "25 to 50 miles",
                  price: "$125",
                },
                {
                  title: "Regional",
                  range: "50 to 150 miles",
                  price: "$250",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 text-center"
                >
                  <h3 className="mb-3 text-2xl font-black">
                    {item.title}
                  </h3>

                  <div className="mb-3 text-gray-400">
                    {item.range}
                  </div>

                  <div className="text-5xl font-black text-orange-500">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
              <h3 className="mb-3 text-2xl font-bold">
                What Is Included?
              </h3>

              <p className="leading-relaxed text-gray-400">
                The pricing above covers pickup, transport, waiting time, and
                return of your vehicle. The actual oil change service cost is
                separate and paid directly by you to the oil change provider.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-neutral-800 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-12 text-center text-4xl font-black">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              {[
                {
                  question:
                    "Do you provide the oil change service?",
                  answer:
                    "No. We provide pickup and return transportation service for your vehicle. The oil change service is completed by your preferred shop.",
                },
                {
                  question:
                    "Can I choose my own oil change shop?",
                  answer:
                    "Yes. We can take your vehicle to your preferred oil change location in the Phoenix metro area.",
                },
                {
                  question:
                    "Do you offer same day service?",
                  answer:
                    "Same day availability depends on schedule and distance. Text us to check availability.",
                },
                {
                  question:
                    "Is your business insured?",
                  answer:
                    "Yes. Freedom Line Freight Express is fully insured.",
                },
              ].map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8"
                >
                  <h3 className="mb-3 text-2xl font-bold">
                    {item.question}
                  </h3>

                  <p className="leading-relaxed text-gray-400">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section className="border-t border-neutral-800 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 text-center">
              <h2 className="mb-4 text-4xl font-black">
                Related Services
              </h2>

              <p className="text-lg text-gray-400">
                Additional vehicle transport and concierge services available
                throughout Arizona.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Vehicle Delivery Phoenix",
                  link: "/vehicle-delivery-phoenix",
                },
                {
                  title: "Auto Transport Phoenix",
                  link: "/auto-transport-phoenix",
                },
                {
                  title: "Key and Title Runner",
                  link: "/key-title-runner-phoenix",
                },
                {
                  title: "Request Pickup",
                  link: "/request-pickup",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 transition-colors hover:border-orange-500"
                >
                  <h3 className="mb-3 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <div className="flex items-center text-orange-400">
                    Learn More
                    <ArrowRight className="ml-2" size={18} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-neutral-800 py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 text-5xl font-black">
              Skip The Waiting Room
            </h2>

            <p className="mb-8 text-xl leading-relaxed text-gray-300">
              Stay at home or continue working while we handle your oil change
              appointment from start to finish.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-orange-600"
              >
                Schedule Service
                <ArrowRight className="ml-2" size={22} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white hover:text-orange-600"
              >
                <Phone className="mr-2" size={20} />
                Text Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
