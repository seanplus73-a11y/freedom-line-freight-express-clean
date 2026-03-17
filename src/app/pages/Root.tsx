import { Outlet } from 'react-router';
import { Link, useLocation } from 'react-router';
import { Truck, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';

export function Root() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Public Header - Black with Orange Accents */}
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">Freedom Line Freight Express</h1>
                <p className="text-xs text-gray-400">Professional Vehicle Transport</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/request-pickup" className="ml-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Get Quote
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/request-pickup" onClick={() => setMobileMenuOpen(false)} className="block">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Get Quote
                </Button>
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Public Footer - Black with Orange Accents */}
      <footer className="bg-black text-white mt-auto border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Freedom Line Freight Express</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Professional vehicle transport services across the United States. 
                Safe, reliable, and affordable shipping you can trust.
              </p>
              <p className="text-gray-400 text-sm">
                © 2026 Freedom Line Freight Express LLC.<br />
                All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-orange-500">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-gray-400 hover:text-orange-500 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-orange-500">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="tel:+14809198088" className="hover:text-orange-500 transition-colors">
                    (480) 919-8088
                  </a>
                </li>
                <li>
                  <a href="mailto:dispatch@flfreightco.com" className="hover:text-orange-500 transition-colors">
                    dispatch@flfreightco.com
                  </a>
                </li>
                <li className="pt-2">
                  <span className="text-sm">Nationwide Service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Root;