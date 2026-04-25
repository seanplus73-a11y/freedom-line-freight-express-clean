import { useState } from "react";
import { Link } from "react-router";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Car,
  Wrench,
  Package,
  Building2,
  MapPin,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-[#f97316] text-white">
        <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-sm sm:text-base font-semibold">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>Call or Text: 480-742-8553</span>
          </div>
          <span className="hidden sm:inline">|</span>
          <span className="text-white/90">
            Fast response within 5–10 minutes
          </span>
        </div>
      </div>

      <div className="border-b border-white/10 bg-[#111827] text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="leading-tight">
              <div className="text-xl font-bold">
                <span className="text-white">Freedom Line</span>
                <br />
                <span className="text-[#f97316]">Freight Express</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8 font-semibold">
              <Link to="/" className="hover:text-[#f97316]">
                Home
              </Link>

              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1 hover:text-[#f97316]"
                >
                  Services
                  <ChevronDown size={16} />
                </button>

                <div className="invisible absolute left-0 top-full mt-3 w-72 rounded-xl border border-white/10 bg-[#0f172a] p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <Link
                    to="/chandler-delivery"
                    className="flex items-start gap-3 rounded-lg px-4 py-3 hover:bg-white/5"
                  >
                    <Car className="mt-0.5 text-[#f97316]" size={18} />
                    <div>
                      <div className="font-semibold text-white">
                        Vehicle Pickup and Delivery
                      </div>
                      <div className="text-sm text-gray-400">
                        Direct drive-away service for cars and small trucks
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/chandler-auto-parts-delivery"
                    className="flex items-start gap-3 rounded-lg px-4 py-3 hover:bg-white/5"
                  >
                    <Wrench className="mt-0.5 text-[#f97316]" size={18} />
                    <div>
                      <div className="font-semibold text-white">
                        Auto Parts Delivery
                      </div>
                      <div className="text-sm text-gray-400">
                        Same-day delivery for repair shops and mechanics
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/package-document-delivery"
                    className="flex items-start gap-3 rounded-lg px-4 py-3 hover:bg-white/5"
                  >
                    <Package className="mt-0.5 text-[#f97316]" size={18} />
                    <div>
                      <div className="font-semibold text-white">
                        Packages and Documents
                      </div>
                      <div className="text-sm text-gray-400">
                        Local delivery for packages and documents
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/business-transport"
                    className="flex items-start gap-3 rounded-lg px-4 py-3 hover:bg-white/5"
                  >
                    <Building2 className="mt-0.5 text-[#f97316]" size={18} />
                    <div>
                      <div className="font-semibold text-white">
                        Business Transport
                      </div>
                      <div className="text-sm text-gray-400">
                        Direct delivery support for businesses and shops
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <Link to="/service-areas" className="hover:text-[#f97316]">
                Areas We Serve
              </Link>

              <Link to="/pricing" className="hover:text-[#f97316]">
                Pricing
              </Link>

              <Link to="/about" className="hover:text-[#f97316]">
                About
              </Link>

              <Link to="/contact" className="hover:text-[#f97316]">
                Contact
              </Link>
            </nav>

            <div className="hidden lg:block">
              <Link
                to="/request-pickup"
                className="bg-[#f97316] px-5 py-3 rounded-lg font-bold text-white hover:bg-orange-500"
              >
                Get Quote
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-[#111827] border-t border-white/10">
            <div className="px-4 py-4 flex flex-col gap-2">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                Home
              </Link>

              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex justify-between py-2"
              >
                Services
                <ChevronDown size={18} />
              </button>

              {mobileServicesOpen && (
                <div className="ml-2 flex flex-col gap-2">
                  <Link
                    to="/chandler-delivery"
                    onClick={() => setMobileOpen(false)}
                  >
                    Vehicle Pickup and Delivery
                  </Link>

                  <Link
                    to="/chandler-auto-parts-delivery"
                    onClick={() => setMobileOpen(false)}
                  >
                    Auto Parts Delivery
                  </Link>

                  <Link
                    to="/package-document-delivery"
                    onClick={() => setMobileOpen(false)}
                  >
                    Packages and Documents
                  </Link>

                  <Link
                    to="/request-pickup"
                    onClick={() => setMobileOpen(false)}
                  >
                    Business Transport
                  </Link>
                </div>
              )}

              <Link to="/service-areas" onClick={() => setMobileOpen(false)}>
                Areas We Serve
              </Link>

              <Link to="/pricing" onClick={() => setMobileOpen(false)}>
                Pricing
              </Link>

              <Link to="/about" onClick={() => setMobileOpen(false)}>
                About
              </Link>

              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>

              <Link
                to="/request-pickup"
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-[#f97316] text-white px-4 py-3 text-center rounded-lg font-bold"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
