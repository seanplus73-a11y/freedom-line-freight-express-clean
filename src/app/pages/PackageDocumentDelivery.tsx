import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { FaClock, FaShieldAlt, FaTruck, FaHeadset, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";

export default function PackageDocumentDelivery() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Freedom Line Freight Express",
    "image": "https://yourdomain.com/logo.png",
    "url": "https://yourdomain.com/package-document-delivery",
    "telephone": "+1-480-742-8553",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Tan Valley",
      "addressRegion": "AZ", 
      "postalCode": "85144",
      "addressCountry": "US"
    },
    "areaServed": ["Phoenix", "Mesa", "Chandler", "Gilbert", "Queen Creek", "San Tan Valley", "Scottsdale", "Tempe"],
    "description": "Same-day package and document delivery service in Phoenix and East Valley AZ. Direct, reliable courier for legal documents, small packages, and rush items.",
    "openingHours": "Mo-Su 07:00-19:00"
  };

  return (
    <>
      <Helmet>
        <title>Same-Day Package & Document Delivery Phoenix AZ | Direct Courier | Freedom Line Freight Express</title>
        <meta 
          name="description" 
          content="Need it there TODAY? Fast, direct delivery for documents & packages in Phoenix, Mesa, Chandler. No waiting, no apps, no stress. Call 480-742-8553" 
        />
        <link rel="canonical" href="https://yourdomain.com/package-document-delivery" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
      </Helmet>

      <main className="bg-[#0b0f19] text-white overflow-hidden">
        {/* TRUST BAR */}
        <div className="bg-[#f97316] text-black text-center py-2 text-sm font-semibold">
          <FaClock className="inline mr-2" /> Same-Day Pickup Available • Average Response Time: 12 Minutes
        </div>

        {/* HERO */}
        <header className="relative max-w-6xl mx-auto px-6 pt-16 pb-24 text-center">
          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#f97316]/20 rounded-full blur-3xl -z-10"></div>
          
          <div className="inline-block bg-white/5 border border-white/10 px-4 py-1 rounded-full text-sm mb-6">
            <FaShieldAlt className="inline text-[#f97316] mr-2" /> 
            Deaf-Owned • Local • Trusted Since 2020
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Your Package Stuck? <span className="text-[#f97316]">We'll Move It Today.</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            FedEx says “tomorrow”. USPS lost it again. Uber drivers cancel. 
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            We’re the direct Phoenix courier that actually shows up. Documents, legal papers, small packages — picked up in minutes, delivered in hours across Phoenix, Mesa, Chandler, Gilbert & San Tan Valley.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              to="/request-pickup"
              className="group bg-[#f97316] px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-orange-500/30"
            >
              Get Pickup in 15 Min 
              <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            <a
              href="tel:4807428553"
              className="border-2 border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-200"
            >
              <FaHeadset className="inline mr-2" /> Text 480-742-8553
            </a>
          </div>

          {/* SOCIAL PROOF */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-[#0b0f19]"></div>
                <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-[#0b0f19]"></div>
                <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-[#0b0f19]"></div>
              </div>
              <span>200+ Local Businesses Trust Us</span>
            </div>
            <span className="hidden sm:block">•</span>
            <div>⭐⭐⭐⭐⭐ 4.9/5 from 87 Reviews</div>
          </div>
        </header>

        {/* PAIN POINTS -> SOLUTION */}
        <section className="bg-[#111827] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Stop Gambling With <span className="line-through text-gray-500">App Drivers</span>
            </h2>
            <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              Here's what happens when you use us vs. the "other guys"
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-[#1f2937] to-[#111827] p-8 rounded-2xl border border-red-500/20">
                <h3 className="font-bold text-xl mb-4 text-red-400">App-Based Delivery</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Random driver, no accountability</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> 3-5 stops before your package</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> "Sorry, delivery failed" texts</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> No one to call when it goes wrong</li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-[#1f2937] to-[#111827] p-8 rounded-2xl border-2 border-[#f97316] relative scale-105">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f97316] text-black px-4 py-1 rounded-full text-sm font-bold">
                  FREEDOM LINE
                </div>
                <h3 className="font-bold text-xl mb-4 text-[#f97316]">Our Direct Courier</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" /> You deal directly with me, Sean</li>
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" /> One job at a time. Your package only.</li>
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" /> Text updates + photo confirmation</li>
                  <li className="flex items-start gap-2"><FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" /> Text me anytime: 480-742-8553</li>
                </ul>
              </div>

              <div className="bg-gradient-to-b from-[#1f2937] to-[#111827] p-8 rounded-2xl border border-red-500/20">
                <h3 className="font-bold text-xl mb-4 text-red-400">FedEx / USPS</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> "Next business day" = 2-3 days</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Lost in warehouse limbo</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> Signature required drama</li>
                  <li className="flex items-start gap-2"><span className="text-red-500">✗</span> 45 min hold times</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES WITH ICONS */}
        <section className="max-w-6xl mx-auto px-6 py-20" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-4 text-center">
            What We Rush Across Phoenix Today
          </h2>
          <p className="text-gray-400 text-center mb-16">If it fits in a car and needs to be there ASAP, we handle it.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaShieldAlt className="text-3xl text-[#f97316]" />,
                title: "Legal & Court Documents",
                desc: "Time-stamped pickup. Court filings, contracts, escrow docs. Chain of custody. We know Maricopa County deadlines.",
                keywords: "Phoenix legal courier"
              },
              {
                icon: <FaTruck className="text-3xl text-[#f97316]" />,
                title: "Small Business Packages", 
                desc: "Parts, samples, retail orders, prototypes. Keep your Mesa or Chandler business moving without waiting on trucks.",
                keywords: "same-day delivery Mesa AZ"
              },
              {
                icon: <FaClock className="text-3xl text-[#f97316]" />,
                title: "Emergency Medical Items",
                desc: "Prescriptions, medical devices, lab samples. HIPAA-aware handling. Direct to Gilbert hospitals & clinics.",
                keywords: "rush courier Gilbert"
              }
            ].map((service, i) => (
              <article key={i} className="group bg-[#1f2937] p-8 rounded-2xl border border-white/5 hover:border-[#f97316]/50 transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-[#f97316] transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SERVICE AREA MAP VIBE */}
        <section className="bg-[#111827] py-20" aria-labelledby="area-heading">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <FaMapMarkerAlt className="text-4xl text-[#f97316] mx-auto mb-4" />
            <h2 id="area-heading" className="text-3xl md:text-4xl font-bold mb-6">
              We Cover All of East Valley + Phoenix
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              Based in San Tan Valley. We run daily routes through Phoenix, Mesa, Chandler, Gilbert, Queen Creek, Scottsdale, and Tempe. Casa Grande? Call us.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {["Phoenix", "Mesa", "Chandler", "Gilbert", "Queen Creek", "San Tan Valley", "Scottsdale", "Tempe", "Casa Grande"].map(city => (
                <span key={city} className="bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-[#f97316]/50 hover:bg-[#f97316]/10 transition-all">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA WITH URGENCY */}
        <section className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Stop Waiting. <span className="text-[#f97316]">Start Delivering.</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Most pickups happen within 15-30 minutes of your text. How fast do you need it there?
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link
                to="/request-pickup"
                className="bg-[#f97316] px-10 py-5 rounded-xl font-bold text-xl hover:bg-orange-500 transition-all duration-200 hover:scale-105 shadow-2xl shadow-orange-500/40"
              >
                Request Pickup Now
              </Link>
              <a
                href="sms:4807428553"
                className="bg-white text-black px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-200 transition-all duration-200"
              >
                Text Address to 480-742-8553
              </a>
            </div>
            
            <p className="text-sm text-gray-500">
              No apps to download. No accounts to create. Just text us the pickup + drop-off address.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
