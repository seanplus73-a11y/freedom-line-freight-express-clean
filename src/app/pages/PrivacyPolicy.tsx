import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  const lastUpdated = "January 1, 2026";

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Privacy Policy for Freedom Line Freight Express LLC. Learn how we collect, use, and protect your personal information."
        />
        <link rel="canonical" href="https://www.flfreightco.com/privacy-policy" />
      </Helmet>

      <div className="bg-neutral-950 text-white min-h-screen">
        {/* Header */}
        <section className="bg-black border-b border-neutral-800 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400 text-sm">Last updated: {lastUpdated}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            {/* Intro */}
            <div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Freedom Line Freight Express LLC ("we," "our," or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we collect, use,
                and safeguard your information when you use our website at{" "}
                <a href="https://www.flfreightco.com" className="text-orange-500 hover:text-orange-400">
                  flfreightco.com
                </a>{" "}
                or contact us for vehicle delivery and concierge services.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-neutral-800">
                1. Information We Collect
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Full name and company name",
                  "Email address and phone number",
                  "Pickup and drop-off addresses",
                  "Vehicle information (make, model, year, VIN)",
                  "Service type and scheduling preferences",
                  "Payment information (processed securely through third-party providers)",
                  "Messages and communications you send to us",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-neutral-800">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Process and fulfill your vehicle delivery or concierge service requests",
                  "Send SMS updates about pickup scheduling, delivery status, and service confirmations",
                  "Respond to your inquiries and provide customer support",
                  "Send quote responses and pricing information",
                  "Improve our services and website",
                  "Comply with legal obligations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3 — SMS */}
            <div className="bg-neutral-900 border border-orange-500/30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                3. SMS Text Messaging
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                By providing your phone number and opting in through our website quote
                request form, QR codes, or direct text conversations, you agree to receive
                SMS text messages from Freedom Line Freight Express LLC. Messages may include:
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                {[
                  "Vehicle pickup scheduling and confirmations",
                  "Delivery updates and status notifications",
                  "Quote responses and pricing details",
                  "Customer support responses",
                  "Service completion confirmations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-neutral-800 rounded-lg p-4 space-y-2">
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">Message frequency:</strong> Varies based on your service and interaction.
                </p>
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">Opt out:</strong> Reply <strong className="text-orange-500">STOP</strong> at any time to unsubscribe from SMS messages.
                </p>
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">Help:</strong> Reply <strong className="text-orange-500">HELP</strong> for assistance.
                </p>
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">Rates:</strong> Message and data rates may apply.
                </p>
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">Your number is never sold or shared</strong> with third parties for marketing purposes.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-neutral-800">
                4. Information Sharing
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties.
                We may share your information only in the following circumstances:
              </p>
              <ul className="space-y-2 text-gray-300">
                {[
                  "With service providers who assist in operating our website or delivering our services (such as email or SMS platforms)",
                  "When required by law, court order, or governmental authority",
                  "To protect the rights, property, or safety of Freedom Line Freight Express LLC or our customers",
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
                5. Data Security
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We implement reasonable security measures to protect your personal
                information from unauthorized access, alteration, disclosure, or
                destruction. However, no method of transmission over the internet or
                electronic storage is 100% secure. We encourage you to contact us
                directly if you have concerns about your data security.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-neutral-800">
                6. Cookies and Tracking
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may use cookies and similar tracking technologies to improve
                your browsing experience and analyze site traffic. We use Google Analytics
                to understand how visitors use our site. You can disable cookies through
                your browser settings at any time.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-neutral-800">
                7. Your Rights
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Request access to the personal information we hold about you",
                  "Request correction of inaccurate information",
                  "Request deletion of your personal information",
                  "Opt out of SMS communications at any time by replying STOP",
                  "Contact us with any privacy-related concerns",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-neutral-800">
                8. Changes to This Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you
                of significant changes by updating the "Last updated" date at the top of
                this page. Continued use of our services after changes constitutes
                acceptance of the updated policy.
              </p>
            </div>

            {/* Section 9 — Contact */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                9. Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or how we handle your
                information, please contact us:
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
