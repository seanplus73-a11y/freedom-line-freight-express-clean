import { Mail, Phone, MapPin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111827] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold leading-tight">
              <span className="text-white">Freedom Line</span>
              <br />
              <span className="text-[#f97316]">Freight Express</span>
            </h3>
            <p className="mt-4 text-sm text-gray-300 leading-6">
              Professional vehicle transport across the Southwest. Licensed,
              insured, and trusted by customers who want direct service.
            </p>
            <p className="mt-4 text-sm font-semibold text-gray-200">
              Deaf-Owned &amp; Operated Business
            </p>
            <p className="mt-2 text-sm text-gray-300">
              Committed to clear communication, reliability, and professional
              vehicle transport.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li>
                <a href="/" className="hover:text-[#f97316] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#f97316] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-[#f97316] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#f97316] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#f97316] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li>Personal Transport</li>
              <li>Dealer Pickup</li>
              <li>Local Delivery</li>
              <li>Regional Transport</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white">Contact Freedom Line</h4>

            <div className="mt-4 space-y-5 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-[#f97316]" />
                <div>
                  <p className="font-semibold text-white">Based in Arizona</p>
                  <p>Primary service area: Arizona (statewide)</p>
                  <p>Nearby states available by request only</p>
                  <p>Out-of-state transport is limited and scheduled based on availability</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-[#f97316]" />
                <div>
                  <p>Relay Phone: 480-919-8088</p>
                  <p>Text: 480-742-8553</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-[#f97316]" />
                <div>
                  <a
                    href="mailto:dispatch@flfreightco.com"
                    className="hover:text-[#f97316] transition-colors"
                  >
                    dispatch@flfreightco.com
                  </a>
                </div>
              </div>

              <div className="flex space-x-4 pt-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61579349444532"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-300 hover:text-[#f97316] transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © 2026 Freedom Line Freight Express LLC. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
