export default function About() {
  return (
    <div className="bg-[#0f172a] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
            alt="Vehicle pickup and delivery service in Arizona"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f172a]/75" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 inline-block rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-1 text-sm text-orange-300">
              Arizona Vehicle Pickup & Delivery
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              About{" "}
              <span className="text-orange-500">
                Freedom Line Freight Express
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
              We provide reliable vehicle pickup and delivery in Arizona by
              personally driving your car, SUV, or light truck to its
              destination. No trailer. No towing. Just direct, careful service
              you can trust.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/request-pickup"
                className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Request a Pickup
              </a>
              <a
                href="/services"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-white/10 bg-[#111827]">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-6 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-sm text-gray-400">Service Type</p>
            <p className="mt-1 font-semibold text-white">
              Direct Driveaway Service
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-sm text-gray-400">Coverage</p>
            <p className="mt-1 font-semibold text-white">
              Local & Regional Arizona
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-sm text-gray-400">Transport Style</p>
            <p className="mt-1 font-semibold text-white">
              No Trailer. No Towing.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-sm text-gray-400">Focus</p>
            <p className="mt-1 font-semibold text-white">
              Safe, Clear, Reliable Service
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Who We Are
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            A hands-on Arizona delivery company built on trust
          </h2>
          <p className="mt-5 leading-relaxed text-gray-300">
            Freedom Line Freight Express is based in Arizona and focused on
            dependable vehicle pickup and delivery for customers who need a
            driver—not a tow truck or trailer carrier.
          </p>
          <p className="mt-4 leading-relaxed text-gray-300">
            We help with local and regional moves for personal vehicles, dealer
            transfers, auction purchases, auto parts, and direct business
            transport. Our goal is simple: make pickup and delivery easier,
            safer, and more personal.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
            alt="Reliable car delivery and transport service"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="bg-[#111827] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            What Makes Us Different
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Direct service with a personal touch
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-orange-400">
                Personally Driven
              </h3>
              <p className="mt-3 leading-relaxed text-gray-300">
                Your vehicle is personally driven to its destination instead of
                being hauled on a trailer.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-orange-400">
                Flexible Local & Regional Routes
              </h3>
              <p className="mt-3 leading-relaxed text-gray-300">
                We support short-distance and regional delivery needs across
                Arizona and nearby areas.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-orange-400">
                Clear Communication
              </h3>
              <p className="mt-3 leading-relaxed text-gray-300">
                We focus on simple communication, dependable scheduling, and a
                smooth customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OWNER STORY */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
        <div className="order-2 overflow-hidden rounded-3xl border border-white/10 shadow-2xl md:order-1">
          <img
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=1200&q=80"
            alt="Professional vehicle delivery service owner and transportation business"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Owner & Mission
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Built on hard work, reliability, and accessibility
          </h2>
          <p className="mt-5 leading-relaxed text-gray-300">
            Freedom Line Freight Express was founded by Sean Jackson with a
            mission to provide dependable delivery service with honesty,
            professionalism, and care.
          </p>
          <p className="mt-4 leading-relaxed text-gray-300">
            As a deaf business owner, Sean values accessible communication and
            strong customer service. The business is built to help people move
            vehicles and important items with confidence.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#111827] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Services
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">What we help move</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Vehicle Pickup & Delivery",
              "Dealer Transfers",
              "Auction Vehicle Moves",
              "Cars, SUVs & Light Trucks",
              "Auto Parts Delivery",
              "Documents & Small Packages",
              "Direct Business Transport",
              "Local Arizona Routes",
              "Regional Moves",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-gray-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
          Service Area
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">
          Proudly serving San Tan Valley, Queen Creek, Gilbert, Chandler, and
          beyond
        </h2>

        <div className="mt-6 max-w-4xl space-y-4 leading-relaxed text-gray-300">
          <p>
            Freedom Line Freight Express is based in Arizona and serves
            customers looking for vehicle pickup and delivery in San Tan Valley,
            Queen Creek, Gilbert, Chandler, Mesa, Phoenix, and surrounding
            areas.
          </p>
          <p>
            Whether you need a local vehicle moved across town or a regional
            delivery route planned carefully, we aim to provide a dependable
            alternative for customers searching for car delivery service,
            driveaway service, or direct vehicle transport in Arizona.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-r from-[#111827] to-[#0f172a]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Need a dependable vehicle pickup and delivery service?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-300">
            Get a custom mileage-based quote for your local or regional move.
            We make the process simple, direct, and professional.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/request-pickup"
              className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Request a Pickup
            </a>
            <a
              href="/contact"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
