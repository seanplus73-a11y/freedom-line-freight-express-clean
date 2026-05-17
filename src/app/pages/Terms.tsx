import { Helmet } from "react-helmet-async";

export default function Terms() {
  const lastUpdated = "January 1, 2026";

  return (
    <>
      <Helmet>
        <title>Terms of Service | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Terms of Service for Freedom Line Freight Express LLC. Read our terms and conditions for vehicle delivery and concierge services."
        />
        <link rel="canonical" href="https://www.flfreightco.com/terms" />
      </Helmet>

      <div className="bg-neutral-950 text-white min-h-screen">
        {/* Header */}
        <section className="bg-black border-b border-neutral-800 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-400 text-sm">Last updated: {lastUpdated}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            {/* Intro */}
            <div>
              <p className="text-gray-300 leading-relaxed text-lg">
                These Terms of Service govern your use of the services provided by
                Freedom Line Freight Express LLC ("we," "our," or "us"), including
                vehicle delivery, vehicle concierge, auto parts delivery, and related
                transportation services. By requesting or using our services, you agree
                to these terms.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-neutral-800">
                1. Services
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Freedom Line Freight Express LLC provides the following services in
                Arizona and select surrounding areas:
              </p>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Vehicle pickup and delivery (drive-away, no towing or trailers)",
                  "Vehicle concierge services (oil changes, car washes, tire runs, dealership visits)",
                  "Dealer and auction vehicle transfers",
                  "Auto parts delivery",
                  "Document and small package delivery",
                  "Local business transport",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 2 */}
            <div className="bg-neutral-900 border border-orange-500/30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Vehicle Requirements
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                All vehicles submitted for delivery or concierge service must meet the
                following requirements:
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                {[
                  "Vehicle must start, run, steer, and brake properly",
                  "Vehicle must be legally registered and insured",
                  "Vehicle must be safe and roadworthy at the time of pickup",
                  "Vehicle must not require towing — this is a drive-away service only",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-orange-300 text-sm font-semibold">
                We reserve the right to refuse service if a vehicle is found to be
                inoperable, unsafe, or misrepresented at the time of pickup.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-neutral-800">
                3. Booking and Scheduling
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                All service requests are subject to availability. Submitting a quote
                request or preferred date does not guarantee a confirmed booking.
                Scheduling is confirmed only after direct communication and acceptance
                by Freedom Line Freight Express LLC.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to decline any service request at our discretion.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-neutral-800">
                4. Pricing and Payment
              </h2>
              <ul className="space-y-2 text-gray-300">
                {[
                  "All pricing is quoted before service begins — no work starts without your approval",
                  "Quoted prices are based on the information provided at the time of request",
                  "Additional charges may apply for route changes, wait time, or services not included in the original quote",
                  "For concierge services, you pay the service provider (oil change shop, car wash, etc.) directly — our fee covers pickup and return only",
                  "Payment is due upon completion of service unless otherwise agreed in writing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-neutral-800">
                5. Cancellations
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We understand plans change. Please notify us as soon as possible if you
                need to cancel or reschedule a confirmed booking. Cancellations made
                after a driver has been dispatched may be subject to a cancellation fee
                to cover time and fuel costs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to cancel a booking due to unforeseen circumstances,
                unsafe conditions, or vehicle non-compliance. In such cases, no fee will
                be charged.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-neutral-800">
                6. Liability
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Freedom Line Freight Express LLC operates with full insurance coverage
                during all vehicle transport and concierge services. However:
              </p>
              <ul className="space-y-2 text-gray-300">
                {[
                  "We are not responsible for pre-existing damage not documented at pickup",
                  "We are not liable for mechanical failures caused by pre-existing vehicle conditions",
                  "We are not responsible for items left inside the vehicle during transport",
                  "Our liability for any claim is limited to the cost of the service provided",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 7 — SMS */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                7. SMS Communications
              </h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                By providing your phone number and opting in, you consent to receive
                SMS messages from Freedom Line Freight Express LLC related to your
                service, including scheduling updates, delivery confirmations, and
                customer support.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Message and data rates may apply.</p>
                <p>Message frequency varies based on your service activity.</p>
                <p>
                  Reply <strong className="text-orange-500">STOP</strong> to opt out
                  at any time.
                </p>
                <p>
                  Reply <strong className="text-orange-500">HELP</strong> for
                  assistance.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-neutral-800">
                8. Governing Law
              </h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms of Service are governed by the laws of the State of Arizona.
                Any disputes arising from these terms or our services shall be resolved
                in the courts of Maricopa County, Arizona.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-neutral-800">
                9. Changes to These Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update these Terms of Service at any time. Changes will be
                posted on this page with an updated date. Continued use of our services
                after changes constitutes acceptance of the updated terms.
              </p>
            </div>

            {/* Section 10 — Contact */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                10. Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Questions about these Terms of Service? Contact us directly:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-white">Business:</strong> Freedom Line Freight Express LLC</p>
                <p><strong className="text-white">Location:</strong> Queen Creek, Arizona</p>
                <p>
                  <strong className="text-white">Email:</strong>{" "}
                  <a href="mailto:dispatch@flfreightco.com" className="text-orange-500 hover:text-orange-400">
                    dispatch@flfreightco.com
                  </a>
                </p>
                <p><strong className="text-white">Text:</strong> 480-742-8553</p>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
