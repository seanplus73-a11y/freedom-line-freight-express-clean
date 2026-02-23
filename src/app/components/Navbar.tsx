import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-neutral-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-white">Freedom Line</span>
            <span className="text-xl font-bold text-orange-500">Freight Express</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-orange-500 transition-colors font-semibold"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-300 hover:text-orange-500 transition-colors font-semibold"
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className="text-gray-300 hover:text-orange-500 transition-colors font-semibold"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-orange-500 transition-colors font-semibold"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-orange-500 transition-colors font-semibold"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/request-pickup"
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors font-bold"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-neutral-800 mt-2 pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-orange-500 transition-colors font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-300 hover:text-orange-500 transition-colors font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/pricing"
                className="text-gray-300 hover:text-orange-500 transition-colors font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-orange-500 transition-colors font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-orange-500 transition-colors font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/request-pickup"
                className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors text-center font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
