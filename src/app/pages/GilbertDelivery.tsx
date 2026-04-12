export default function GilbertDelivery() {
  return (
    <>
      <main className="min-h-screen bg-neutral-950 text-white">
        <section className="border-b border-neutral-800">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-400">
              Gilbert, Arizona
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Vehicle Pickup & Delivery in Gilbert, AZ
            </h1>

            <p className="max-w-3xl text-lg text-neutral-300">
              Freedom Line Freight Express provides reliable vehicle pickup and
              delivery in Gilbert, Arizona. We specialize in direct drive-away
              service for cars, SUVs, and small trucks that run and drive — no
              towing and no trailers.
            </p>

            <div className="mt-6">
              <a
                href="/request-pickup"
                className="bg-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition"
              >
                Request Pickup
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-orange-400">
                Fast Gilbert Vehicle Delivery
              </h2>

              <p className="mb-4 text-neutral-300">
                Need a car moved across Gilbert, picked up from a dealership,
                delivered to a repair shop, or transported to your home?
                Freedom Line Freight Express offers direct, flexible service
                with fast response times.
              </p>

              <p className="text-neutral-300">
                We also provide time-sensitive delivery for auto parts,
                packages, and documents. Same-day and emergency delivery may be
                available depending on distance and scheduling.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <h2 className="mb-4 text-2xl font-bold text-orange-400">
                Services Available in Gilbert
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
        </section>

        <section className="border-y border-neutral-800 bg-neutral-900">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <h2 className="mb-6 text-2xl font-bold text-orange-400">
              Why Choose Freedom Line Freight Express
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl">
                <h3 className="mb-3 text-xl font-semibold">
                  Direct Drive-Away Service
                </h3>
                <p className="text-neutral-300">
                  Your vehicle is driven directly to its destination with no
                  trailer delays and no towing.
                </p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl">
                <h3 className="mb-3 text-xl font-semibold">Fast & Reliable</h3>
                <p className="text-neutral-300">
                  Quick pickups, dependable delivery, and clear communication
                  every step of the way.
                </p>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 p-6 rounded-2xl">
                <h3 className="mb-3 text-xl font-semibold">
                  Owner-Operated Service
                </h3>
                <p className="text-neutral-300">
                  Personal attention and trusted service from a local Arizona
                  business you can rely on.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-orange-400">
                Gilbert Service Area
              </h2>

              <p className="mb-4 text-neutral-300">
                We serve Gilbert and nearby areas including Val Vista Lakes,
                Power Ranch, Higley, Mesa, Chandler, Queen Creek, and the
                greater Phoenix metro area.
              </p>

              <p className="text-neutral-300">
                Whether you need vehicle transport or small freight delivery, we
                offer flexible scheduling and dependable service.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <h2 className="mb-4 text-2xl font-bold text-orange-400">
                Contact Us
              </h2>

              <p className="mb-4 text-neutral-300">
                Need fast vehicle pickup and delivery in Gilbert, AZ? Contact
                Freedom Line Freight Express today.
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
        </section>
      </main>
    </>
  );
}
