import { Helmet } from "react-helmet-async";

export default function PhoenixVehicleDelivery() {
  return (
    <>
      <Helmet>
        <title>
          Vehicle Pickup & Delivery in Phoenix, AZ | Freedom Line Freight Express
        </title>
        <meta
          name="description"
          content="Freedom Line Freight Express provides vehicle pickup and delivery in Phoenix, AZ. Drive-away service for cars, SUVs, and small trucks, plus auto parts, packages, documents, and same-day delivery."
        />
        <meta
          name="keywords"
          content="vehicle pickup Phoenix, vehicle delivery Phoenix, car transport Phoenix, auto parts delivery Phoenix, same-day delivery Phoenix, drive-away service Phoenix"
        />
        <link
          rel="canonical"
          href="https://www.flfreightco.com/phoenix-vehicle-delivery"
        />
      </Helmet>

      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="border-b border-neutral-800">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-400">
              Phoenix, Arizona
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Vehicle Pickup & Delivery in Phoenix, AZ
            </h1>
            <p className="max-w-3xl text-lg text-neutral-300">
              Freedom Line Freight Express provides reliable vehicle pickup and
              delivery in Phoenix, Arizona. We specialize in direct drive-away
              service for cars, SUVs, and small trucks that run and drive — no
              towing and no trailers.
            </p>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-orange-400">
                  Fast Phoenix Vehicle Delivery
                </h2>
                <p className="mb-4 text-neutral-300">
                  Whether you need a car moved across Phoenix, picked up from a
                  dealership, delivered to a repair shop, or transported to a
                  home or business, Freedom Line Freight Express offers direct,
                  flexible service with clear communication.
                </p>
                <p className="text-neutral-300">
                  We also handle time-sensitive deliveries for auto parts,
                  packages, and documents. Same-day and emergency delivery may
                  be available depending on scheduling and distance.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
                <h2 className="mb-4 text-2xl font-bold text-orange-400">
                  Services Available in Phoenix
                </h2>
                <ul className="space-y-3 text-neutral-200">
                  <li>• Vehicle pickup & delivery (runs & drives only)</li>
                  <li>• Car transport and drive-away service</li>
                  <li>• Dealer and auction vehicle transport</li>
                  <li>• Auto parts delivery</li>
                  <li>• Packages and document delivery</li>
                  <li>• Same-day and emergency delivery</li>
                  <li>• Local and long-distance transport</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-neutral-800 bg-neutral-900">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <h2 className="mb-6 text-2xl font-bold text-orange-400">
              Why Customers Choose Freedom Line Freight Express
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
                <h3 className="mb-3 text-xl font-semibold">
                  Direct Drive-Away Service
                </h3>
                <p className="text-neutral-300">
                  Your vehicle is driven directly to its destination. No trailer
                  delays and no towing for running vehicles.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
                <h3 className="mb-3 text-xl font-semibold">
                  Fast Pickup & Clear Communication
                </h3>
                <p className="text-neutral-300">
                  We focus on dependable scheduling, quick response times, and
                  easy communication throughout the delivery process.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
                <h3 className="mb-3 text-xl font-semibold">
                  Owner-Operated and Reliable
                </h3>
                <p className="text-neutral-300">
                  Freedom Line Freight Express is owner-operated, giving you
                  personal service with attention to care, timing, and trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-orange-400">
                  Areas We Serve Around Phoenix
                </h2>
                <p className="mb-4 text-neutral-300">
                  We serve customers in Phoenix and nearby communities including
                  downtown Phoenix, North Phoenix, South Phoenix, Mesa,
                  Chandler, Gilbert, Queen Creek, and San Tan Valley.
                </p>
                <p className="text-neutral-300">
                  If you need a vehicle, auto parts, or documents delivered in
                  or around the Phoenix metro area, we can help with scheduled
                  and urgent requests.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
                <h2 className="mb-4 text-2xl font-bold text-orange-400">
                  Request a Quote
                </h2>
                <p className="mb-4 text-neutral-300">
                  Need dependable vehicle pickup and delivery in Phoenix, AZ?
                  Contact Freedom Line Freight Express for a fast quote and
                  availability.
                </p>
                <div className="space-y-2 text-neutral-200">
                  <p>
                    <strong>Text:</strong> 480-742-8553
                  </p>
                  <p>
                    <strong>Email:</strong> dispatch@flfreightco.com
                  </p>
                  <p>
                    <strong>Website:</strong> flfreightco.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

