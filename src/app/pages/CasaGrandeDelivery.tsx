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

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-orange-400">
            Nearby Cities We Serve
          </h2>

          <p className="leading-8 text-neutral-300">
            <a href="/phoenix-delivery" className="text-orange-400 hover:underline">
              Phoenix
            </a>,{" "}
            <a href="/mesa-delivery" className="text-orange-400 hover:underline">
              Mesa
            </a>,{" "}
            <a href="/chandler-delivery" className="text-orange-400 hover:underline">
              Chandler
            </a>,{" "}
            <a href="/gilbert-delivery" className="text-orange-400 hover:underline">
              Gilbert
            </a>,{" "}
            <a href="/queen-creek-delivery" className="text-orange-400 hover:underline">
              Queen Creek
            </a>,{" "}
            <a href="/san-tan-valley-delivery" className="text-orange-400 hover:underline">
              San Tan Valley
            </a>,{" "}
            <a href="/scottsdale-delivery" className="text-orange-400 hover:underline">
              Scottsdale
            </a>,{" "}
            <a href="/casa-grande-delivery" className="text-orange-400 hover:underline">
              Casa Grande
            </a>
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <h2 className="mb-4 text-center text-2xl font-bold text-orange-400">
            Casa Grande Map
          </h2>

          <p className="mb-4 text-center text-neutral-300">
            Serving Casa Grande and nearby communities with reliable vehicle
            pickup and delivery services.
          </p>

          <div className="overflow-hidden rounded-xl border border-neutral-800">
            <iframe
              title="Casa Grande Arizona Map"
              src="https://www.google.com/maps?q=Casa+Grande,AZ&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
