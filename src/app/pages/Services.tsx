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
  Briefcase,
} from "lucide-react";

export default function Services() {
  const mainServices = [
    {
      icon: Car,
      title: "Personal Vehicle Pickup and Delivery",
      description:
        "Direct pickup and delivery for cars, SUVs, and light duty trucks across Arizona. Ideal for customers who need reliable point to point service without the delays of larger transport networks.",
      features: [
        "Cars, SUVs, and light duty trucks",
        "Same day or next day service available",
        "Direct point to point delivery",
        "Careful professional handling",
      ],
      link: "/drive-my-car-home",
    },
    {
      icon: Building2,
      title: "Dealer and Auction Pickup",
      description:
        "Reliable pickup and delivery for dealerships, auctions, and auto related businesses. Built for customers who need flexible scheduling, fast turnaround, and dependable communication.",
      features: [
        "Dealer to dealer transfers",
        "Auction pickup and delivery",
        "Fast scheduling and turnaround",
        "Professional owner operated service",
      ],
      link: "/drive-my-car-to-dealer",
    },
    {
  icon: Wrench,
  title: "Auto Parts Transport",
  description:
    "Direct pickup and transport of auto parts between shops, dealerships, warehouses, and customers. Ideal for urgent and high value parts that require reliable same day service.",
  features: [
    "Engines, transmissions, and large parts",
    "Repair shop and dealership transport",
    "Same day service available",
    "Handled directly with no middleman",
  ],
  link: "/auto-parts-delivery",
},
{
  icon: Briefcase,
  title: "Direct Business Transport",
  description:
    "Direct priority transport for business items, documents, and equipment across Arizona. Handled personally for speed, security, and reliability.",
  features: [
    "Business to business transport",
    "Priority same day service available",
    "Flexible pickup and drop off times",
    "Handled directly by owner",
  ],
 link: "/request-pickup",
},
{
  icon: Package,
  title: "Documents and Small Packages",
  description:
    "Direct local delivery for documents, small boxes, important items, and time sensitive deliveries across the Valley.",
  features: [
    "Small package delivery",
    "Time sensitive local runs",
    "Direct local transport",
    "Simple reliable service",
  ],
  link: "/request-pickup",
},
    {
      icon: Map,
      title: "Regional Arizona Transport",
      description:
        "Pickup and delivery throughout Arizona, with nearby out of state service available by request. Best for longer distance jobs that still need direct handling and clear scheduling.",
      features: [
        "Arizona statewide service",
        "Nearby states by request",
        "Scheduled delivery windows",
        "Direct transport without shared loads",
      ],
      link: "/pricing",
    },
  ];

  const cityLinks = [
    { name: "Phoenix", path: "/phoenix-delivery" },
    { name: "Mesa", path: "/mesa-delivery" },
    { name: "Gilbert", path: "/gilbert-delivery" },
    { name: "Chandler", path: "/chandler-delivery" },
    { name: "Queen Creek", path: "/queen-creek-delivery" },
    { name: "San Tan Valley", path: "/san-tan-valley-delivery" },
    { name: "Scottsdale", path: "/scottsdale-delivery" },
    { name: "Casa Grande", path: "/casa-grande-delivery" },
    { name: "Tempe", path: "/tempe-delivery" },
  ];

  const autoPartsLinks = [
    { name: "Phoenix Auto Parts", path: "/phoenix-auto-parts-delivery" },
    { name: "Mesa Auto Parts", path: "/mesa-auto-parts-delivery" },
    { name: "Gilbert Auto Parts", path: "/gilbert-auto-parts-delivery" },
    { name: "Chandler Auto Parts", path: "/chandler-auto-parts-delivery" },
    { name: "Queen Creek Auto Parts", path: "/queen-creek-auto-parts-delivery" },
    { name: "San Tan Valley Auto Parts", path: "/san-tan-valley-auto-parts-delivery" },
    { name: "Scottsdale Auto Parts", path: "/scottsdale-auto-parts-delivery" },
    { name: "Casa Grande Auto Parts", path: "/casa-grande-auto-parts-delivery" },
    { name: "Tempe Auto Parts", path: "/tempe-auto-parts-delivery" },
  ];

  return (
    <div className="bg-[#0f172a] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/services-hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-orange-400/60 bg-black/40 px-4 py-2 text-sm font-semibold text-orange-300">
                No Towing Needed
              </span>
              <span className="rounded-full border border-orange-400/60 bg-black/40 px-4 py-2 text-sm font-semibold text-orange-300">
                Owner Operated
              </span>
              <span className="rounded-full border border-orange-400/60 bg-black/40 px-4 py-2 text-sm font-semibold text-orange-300">
                Arizona Coverage
              </span>
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">
              Freedom Line Freight Express Services
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Direct Pickup and Transport Services Across Arizona
            </h1>

            <p className="mb-6 text-lg leading-8 text-gray-200">
              Freedom Line Freight Express provides direct owner operated pickup
              and transport for personal vehicles, auto parts, business items,
              documents, and local delivery needs across Arizona.
            </p>

            <p className="mb-8 text-base leading-8 text-gray-300 md:text-lg">
              Every job is handled with care, clear communication, and dependable
              service from pickup to drop off. No shared loads. No unnecessary
              delays. No broker confusion.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-orange-600"
              >
                Request a Quote
              </Link>

              <Link
                to="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-orange-400 px-8 py-4 text-base font-semibold text-orange-300 transition hover:bg-orange-500 hover:text-white"
              >
                View Pricing
              </Link>
            </div>

            <div className="mt-6 rounded-xl border-l-4 border-orange-500 bg-orange-900/30 p-4">
              <p className="text-lg font-semibold text-orange-100">
                Owner operated. Direct service. No shared loads. No unnecessary delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Main Services
            </h2>
            <p className="leading-8 text-gray-300">
              Core services for local families, mechanics, dealerships, repair
              shops, and businesses that need direct transport done right.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {mainServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-orange-500/15 p-3">
                    <Icon className="h-6 w-6 text-orange-400" />
                  </div>

                  <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>

                  <p className="mb-5 leading-7 text-gray-300">
                    {service.description}
                  </p>

                  <ul className="mb-6 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-orange-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 font-semibold text-orange-400 hover:text-orange-300"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              What You Can Expect with Every Transport
            </h2>
            <p className="mx-auto max-w-2xl leading-8 text-gray-300">
              Freedom Line Freight Express focuses on direct service, careful
              handling, and dependable communication on every job. This keeps
              things simple, fast, and reliable.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#101522] p-6">
              <div className="mb-4 inline-flex rounded-xl bg-orange-500/15 p-3">
                <Shield className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Owner Operated Service</h3>
              <p className="text-gray-300">
                Work directly with the person handling your pickup and delivery.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101522] p-6">
              <div className="mb-4 inline-flex rounded-xl bg-orange-500/15 p-3">
                <Car className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Direct Delivery</h3>
              <p className="text-gray-300">
                No shared loads, no unnecessary transfers, and no broker style confusion.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101522] p-6">
              <div className="mb-4 inline-flex rounded-xl bg-orange-500/15 p-3">
                <Clock className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Flexible Scheduling</h3>
              <p className="text-gray-300">
                Same day, next day, and scheduled service based on availability.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101522] p-6">
              <div className="mb-4 inline-flex rounded-xl bg-orange-500/15 p-3">
                <Camera className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Careful Handling</h3>
              <p className="text-gray-300">
                Vehicles, parts, and business items are handled with attention and professionalism.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101522] p-6">
              <div className="mb-4 inline-flex rounded-xl bg-orange-500/15 p-3">
                <CheckCircle className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Clear Communication</h3>
              <p className="text-gray-300">
                Straightforward updates from pickup through delivery.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#101522] p-6">
              <div className="mb-4 inline-flex rounded-xl bg-orange-500/15 p-3">
                <MapPin className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Arizona Based Service</h3>
              <p className="text-gray-300">
                Local knowledge with dependable service across Arizona.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              City Delivery Pages
            </h2>
            <p className="leading-8 text-gray-300">
              Explore city pages for vehicle pickup and delivery coverage across
              Phoenix and the East Valley.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cityLinks.map((city) => (
              <Link
                key={city.path}
                to={city.path}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#101522] px-5 py-4 transition hover:border-orange-400 hover:bg-white/5"
              >
                <span className="font-medium">{city.name}</span>
                <ArrowRight className="h-4 w-4 text-orange-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              City Auto Parts Pages
            </h2>
            <p className="leading-8 text-gray-300">
              Explore dedicated city pages for auto parts delivery service across
              Phoenix and the Valley.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {autoPartsLinks.map((city) => (
              <Link
                key={city.path}
                to={city.path}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#101522] px-5 py-4 transition hover:border-orange-400 hover:bg-white/5"
              >
                <span className="font-medium">{city.name}</span>
                <ArrowRight className="h-4 w-4 text-orange-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border-2 border-orange-500/30 bg-white/5 p-8">
            <div className="mb-6 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Arizona Based. Ready for Local and Regional Delivery
              </h2>
              <p className="mx-auto max-w-3xl leading-8 text-gray-300">
                Freedom Line Freight Express serves customers across Arizona with
                direct pickup and delivery for vehicles, auto parts, and business
                items. Nearby out of state requests may also be available depending
                on route and scheduling.
              </p>
            </div>

            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-orange-400" />
                <span className="font-semibold text-white">
                  Arizona primary service area
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-orange-400" />
                <span className="font-semibold text-white">
                  Nearby states by request
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-orange-500/50 bg-orange-900/20 p-4">
              <p className="text-sm font-semibold text-orange-100">
                Availability may vary based on route, distance, and scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-orange-500 px-8 py-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Need a Direct Pickup or Transport Quote
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg font-semibold text-orange-100">
              Get a fast quote for vehicles, auto parts, or business transport
              services across Arizona.
            </p>

            <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 transition hover:bg-orange-50"
              >
                Request a Quote
              </Link>

              <Link
                to="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-orange-600"
              >
                View Pricing
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-orange-50">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Owner Operated</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Arizona Based</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Flexible Scheduling</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
