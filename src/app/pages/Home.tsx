import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Arizona Vehicle Delivery | We Drive It No Towing | FLF Express
        </title>

        <meta
          name="description"
          content="Vehicle delivery across Arizona. We drive your car no towing or trailers. Serving Phoenix, Queen Creek, and surrounding areas. Text to book."
        />
      </Helmet>

      <div className="bg-black text-white">

        {/* HERO */}
        <section className="py-24 text-center border-b border-neutral-800">
          <div className="max-w-4xl mx-auto px-4">

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Arizona Vehicle Delivery
              <br />
              <span className="text-orange-500">
                We Drive It. No Towing. No Trailers.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Dealer transfers, auction pickups, and repair shop vehicle moves.
              Handled directly by an owner operator.
            </p>

            <p className="text-white font-semibold mb-8">
              Based in Queen Creek. Serving Phoenix metro and statewide Arizona.
              Fully insured. Fast response by text.
            </p>

            <a
              href="sms:4807428553"
              className="inline-block bg-orange-500 px-8 py-4 rounded-md text-lg font-bold hover:bg-orange-600"
            >
              📱 Text Me to Book
            </a>

            <p className="mt-4 text-gray-400 text-sm">
              Business accounts welcome. Volume pricing available.
            </p>

          </div>
        </section>

        {/* BUSINESS SECTION */}
        <section className="py-16 text-center border-b border-neutral-800">
          <div className="max-w-4xl mx-auto px-4">

            <h2 className="text-3xl font-bold mb-4">
              For Dealerships & Repair Shops
            </h2>

            <p className="text-gray-300 text-lg mb-6">
              Need vehicles moved between lots, auctions, or customers?
              I handle it directly, on time, and without delays.
            </p>

            <div className="space-y-2 text-gray-400 mb-6">
              <p>✔ Lot transfers</p>
              <p>✔ Auction pickups</p>
              <p>✔ Customer vehicle delivery</p>
            </div>

            <a
              href="sms:4807428553"
              className="inline-block bg-orange-500 px-6 py-3 rounded-md font-bold hover:bg-orange-600"
            >
              Text to Set Up Account
            </a>

          </div>
        </section>

        {/* TRUST */}
        <section className="py-16 text-center border-b border-neutral-800">
          <div className="max-w-4xl mx-auto px-4">

            <h2 className="text-3xl font-bold mb-6">
              Reliable and Simple
            </h2>

            <div className="space-y-3 text-gray-300">
              <p>✔ Owner operator you deal with directly</p>
              <p>✔ Fully insured vehicle transport</p>
              <p>✔ No towing or trailers ever</p>
              <p>✔ Text only communication for fast response</p>
              <p>✔ Based in Arizona not a nationwide broker</p>
            </div>

          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-16 text-center border-b border-neutral-800">
          <div className="max-w-4xl mx-auto px-4">

            <h2 className="text-3xl font-bold mb-6">
              How It Works
            </h2>

            <div className="space-y-4 text-gray-300">
              <p><strong>1.</strong> Text pickup and delivery details</p>
              <p><strong>2.</strong> I drive the vehicle directly</p>
              <p><strong>3.</strong> Delivery confirmed with updates</p>
            </div>

          </div>
        </section>

        {/* PRICING */}
        <section className="py-16 text-center border-b border-neutral-800">
          <div className="max-w-4xl mx-auto px-4">

            <h2 className="text-3xl font-bold mb-6">
              Simple Pricing
            </h2>

            <div className="space-y-3 text-gray-300">
              <p>0–25 miles: $85</p>
              <p>25–50 miles: $125</p>
              <p>50–150 miles: $250</p>
              <p>150+ miles: custom quote</p>
            </div>

            <p className="text-gray-400 mt-4">
              Business accounts and volume pricing available.
            </p>

          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto px-4">

            <h2 className="text-4xl font-bold mb-4">
              Need a Vehicle Moved?
            </h2>

            <p className="text-gray-300 mb-6">
              Fast response. Reliable service. No towing.
            </p>

            <a
              href="sms:4807428553"
              className="inline-block bg-orange-500 px-10 py-4 rounded-md text-lg font-bold hover:bg-orange-600"
            >
              📱 Text Me Now
            </a>

          </div>
        </section>

      </div>
    </>
  );
}
