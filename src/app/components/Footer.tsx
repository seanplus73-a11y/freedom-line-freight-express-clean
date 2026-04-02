import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">Freedom Line</h3>
            <p className="text-sm mb-3 text-gray-300">
              Professional vehicle transport across the Southwest. Licensed, insured, and trusted by thousands.
            </p>
            <div className="text-sm text-gray-300 leading-relaxed">
              <p className="font-semibold text-white">Deaf-Owned & Operated Business</p>
              <p>Committed to clear communication, reliability, and professional vehicle transport.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-orange-500 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors">
                  Personal Transport
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors">
                  Dealer Pickup
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors">
                  Local Delivery
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors">
                  Regional Transport
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Freedom Line</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 flex-shrink-0 mt-1 text-orange-500" />
                <div className="text-sm">
                  <p className="font-semibold text-white">Based in Arizona</p>
                  <p>Primary service area: Arizona (statewide)</p>
                  <p>Nearby states available by request only</p>
                  <p className="text-xs text-gray-400 mt-1">Out-of-state transport is limited and scheduled based on availability</p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-2 flex-shrink-0 mt-1 text-orange-500" />
                <div className="text-sm">
                  <div>Relay Phone: 480-919-8088</div>
                  <div>Text: 480-742-8553</div>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-orange-500" />
                <span className="text-sm">dispatch@flfreightco.com</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm text-white">
          <p>&copy; 2026 Freedom Line Freight Express LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
