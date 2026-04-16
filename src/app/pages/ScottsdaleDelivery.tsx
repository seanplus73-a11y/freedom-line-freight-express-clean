export default function ScottsdaleDelivery() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-400">
          Scottsdale, Arizona
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Vehicle Pickup, Auto Parts & Same-Day Delivery in Scottsdale, AZ
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-neutral-300">
          Freedom Line Freight Express provides direct pickup and delivery in Scottsdale
          for vehicles, auto parts, packages, and business items. Same-day service may
          be available depending on route and scheduling.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-orange-400">
            Reliable Delivery in Scottsdale
          </h2>
          <p className="mb-4 leading-8 text-neutral-300">
            We provide direct drive-away service for vehicles that run and drive,
            along with auto parts delivery for repair shops, dealerships, and
            local businesses in Scottsdale.
          </p>
          <p className="leading-8 text-neutral-300">
            Our service is flexible, fast, and designed for customers who need
            reliable transport without using trailers or tow trucks.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <h2 className="mb-4 text-2xl font-bold text-orange-400">
            Services Available in Scottsdale
          </h2>
          <ul className="space-y-3 text-neutral-300">
            <li>• Vehicle pickup and delivery (runs & drives)</li>
            <li>• Auto parts delivery</li>
            <li>• Packages and document delivery</li>
            <li>• Business-to-business transport</li>
            <li>• Same-day and scheduled delivery</li>
            <li>• Local and regional transport</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
