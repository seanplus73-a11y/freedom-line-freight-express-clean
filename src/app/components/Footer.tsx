import { Link } from "react-router";
import { Phone, Mail, MapPin } from "lucide-react";

/**
 * Footer Component - Freedom Line Freight Express
 * Deaf-owned and operated vehicle transport service
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-orange-500 mb-4">
              Freedom Line Freight Express
            </h3>
            <p className="text-gray-400 mb-4">
              Professional vehicle pickup and delivery service based in Arizona. 
              Deaf-owned and operated with personalized, reliable transport solutions.
            </p>
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span>Based in Arizona</span>
            </div>
            <p className="text-sm text-gray-500">
              Serving Arizona, Nevada, New Mexico, Utah & Southern California
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/request-pickup" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Request Pickup
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-sm">Text/Call Preferred</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-sm">Email for Quotes</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Freedom Line Freight Express. All rights reserved. 
            <span className="mx-2">|</span>
            Deaf-Owned & Operated
          </p>
        </div>
      </div>
    </footer>
  );
}
