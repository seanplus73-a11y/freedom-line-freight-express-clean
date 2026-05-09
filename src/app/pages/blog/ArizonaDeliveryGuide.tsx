import { Helmet } from "react-helmet";

export default function ArizonaDeliveryGuide() {
  return (
    <>
      <Helmet>
        <title>Fast and Safe Vehicle Delivery in Arizona | Same Day Guide</title>
        <meta
          name="description"
          content="Learn how to safely and quickly deliver vehicles, auto parts, and packages across Phoenix and Arizona. Same day delivery tips and guide."
        />

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How fast is same day delivery in Arizona?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Same day service is often available depending on distance, route, and schedule."
                }
              },
              {
                "@type": "Question",
                "name": "Can I move a car without towing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Drive-away service allows a driver to operate the vehicle directly to the destination."
                }
              },
              {
                "@type": "Question",
                "name": "Do you deliver auto parts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Auto parts, documents, and business items can be delivered across Phoenix and Arizona."
                }
              },
              {
                "@type": "Question",
                "name": "Is direct delivery safer than apps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Direct delivery provides more control, accountability, and communication."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-black text-white px-6 py-12">
        <div className="max-w-4xl mx-auto">

          {/* TITLE */}
          <h1 className="text-4xl font-bold mb-6">
            Fast and Safe Vehicle Delivery in Arizona
          </h1>

          <p className="text-gray-300 mb-8">
            When you need a vehicle delivered across Phoenix or an auto part rushed the same day,
            speed matters. But in Arizona, speed alone is not enough.
          </p>

          {/* SECTION */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Understand What You Are Moving First
          </h2>
          <p className="text-gray-300 mb-4">
            Different items require different handling. Running vehicles, auto parts, and packages
            all have unique risks, especially under Arizona heat.
          </p>

          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li>Running vehicles need direct drive-away handling</li>
            <li>Auto parts may require padding or enclosed transport</li>
            <li>Packages need fast and secure delivery</li>
          </ul>

          {/* SECTION */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Choose the Right Delivery Method
          </h2>
          <p className="text-gray-300 mb-4">
            Not every delivery service fits every situation. Choosing the wrong option can lead to damage or delays.
          </p>

          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li>Gig apps are fast but limited</li>
            <li>Direct courier offers better control and safety</li>
            <li>No towing means less damage risk</li>
          </ul>

          {/* SECTION */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Step by Step for Fast Delivery
          </h2>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li>Prepare the item properly</li>
            <li>Schedule early morning</li>
            <li>Provide full pickup and delivery details</li>
            <li>Stay in communication</li>
          </ul>

          {/* SECTION */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Common Problems in Arizona
          </h2>
          <ul className="list-disc pl-6 text-gray-300 mb-6">
            <li>Heat damage</li>
            <li>Poor communication</li>
            <li>Wrong service type</li>
            <li>Multiple driver transfers</li>
          </ul>

          {/* SECTION */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Why Direct Delivery Works Better
          </h2>
          <p className="text-gray-300 mb-6">
            One driver from pickup to delivery reduces mistakes, improves communication, and keeps your vehicle or item safe.
          </p>

          {/* CTA */}
          <div className="bg-gray-900 p-6 rounded-xl mt-10">
            <h3 className="text-xl font-semibold mb-2">
              Need Same Day Delivery in Arizona?
            </h3>
            <p className="text-gray-300 mb-4">
              Freedom Line Freight Express provides direct vehicle delivery, auto parts transport,
              and business courier services across Phoenix and Arizona.
            </p>
            <a
              href="/request-pickup"
              className="inline-block bg-orange-500 px-6 py-3 rounded-lg text-black font-semibold hover:bg-orange-400"
            >
              Get a Free Quote
            </a>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-semibold mt-14 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-semibold">How fast is same day delivery?</h3>
              <p className="text-gray-300">
                Same day delivery depends on route, distance, and schedule availability.
              </p>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-semibold">Can I move a car without towing?</h3>
              <p className="text-gray-300">
                Yes. Vehicles are driven directly instead of being towed or placed on trailers.
              </p>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-semibold">Do you deliver auto parts?</h3>
              <p className="text-gray-300">
                Yes. Auto parts, documents, and packages are delivered across Arizona.
              </p>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-semibold">Is this safer than apps?</h3>
              <p className="text-gray-300">
                Yes. Direct delivery avoids handoffs and improves accountability.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
