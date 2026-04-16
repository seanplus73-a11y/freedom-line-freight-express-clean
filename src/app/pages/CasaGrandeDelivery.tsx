export default function CasaGrandeDelivery() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-orange-400">
          Casa Grande, Arizona
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          Vehicle Pickup, Auto Parts & Same-Day Delivery in Casa Grande, AZ
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-neutral-300">
          Freedom Line Freight Express offers reliable pickup and delivery in Casa Grande
          for vehicles, auto parts, packages, and local business transport with flexible
          scheduling and direct service.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-orange-400">
            Fast Local Delivery in Casa Grande
          </h2>
          <p className="mb-4 leading-8 text-neutral-300">
            We help customers in Casa Grande with direct pickup and delivery for
            vehicles that run and drive, auto parts for repair shops, boxed items,
            documents, and local business transport.
          </p>
          <p className="leading-8 text-neutral-300">
            Same-day and urgent delivery may be available depending on route,
            distance, and scheduling.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <h2 className="mb-4 text-2xl font-bold text-orange-400">
            Services Available in Casa Grande
          </h2>
          <ul className="space-y-3 text-neutral-300">
            <li>• Vehicle pickup and delivery</li>
            <li>• Auto parts delivery</li>
            <li>• Packages and documents</li>
            <li>• Business-to-business transport</li>
            <li>• Same-day local delivery</li>
            <li>• Flexible scheduled service</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
