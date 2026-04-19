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
      {/* Top Contact Bar */}
      <div className="bg-[#f97316] text-white">
        <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-sm sm:text-base font-semibold">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>Call or Text: 480-742-8553</span>
          </div>
          <span className="hidden sm:inline">|</span>
          <span className="text-white/90">Fast response within 5–10 minutes</span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="border-b border-white/10 bg-[#111827] text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="leading-tight">
              <div className="text-xl font-bold">
                <span className="text-white">Freedom Line</span>
                <br />
                <span className="text-[#f97316]">Freight Express</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 font-semibold">
              <Link to="/" className="hover:text-[#f97316] transition-colors">
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1 hover:text-[#f97316] transition-colors"
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
                        Vehicle Pickup & Delivery
                      </div>
                      <div className="text-sm text-gray-400">
                        Direct drive-away service for cars, SUVs, and small trucks.
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
                        Same-day parts delivery for repair shops and mechanics.
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/services#business-transport"
                    className="flex items-start gap-3 rounded-lg px-4 py-3 hover:bg-white/5"
                  >
                    <Package className="mt-0.5 text-[#f97316]" size={18} />
                    <div>
                      <div className="font-semibold text-white">
                        Packages & Equipment
                      </div>
                      <div className="text-sm text-gray-400">
                        Local delivery for packages, equipment, and small items.
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/services#business-transport"
                    className="flex items-start gap-3 rounded-lg px-4 py-3 hover:bg-white/5"
                  >
                    <Building2 className="mt-0.5 text-[#f97316]" size={18} />
                    <div>
                      <div className="font-semibold text-white">
                        Business Transport
                      </div>
                      <div className="text-sm text-gray-400">
                        Direct delivery support for dealerships and businesses.
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <Link
                to="/service-areas"
                className="hover:text-[#f97316] transition-colors"
              >
                Areas We Serve
              </Link>

              <Link
                to="/pricing"
                className="hover:text-[#f97316] transition-colors"
              >
                Pricing
              </Link>

              <Link
                to="/about"
                className="hover:text-[#f97316] transition-colors"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="hover:text-[#f97316] transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                to="/request-pickup"
                className="inline-flex items-center rounded-lg bg-[#f97316] px-5 py-3 font-bold text-white transition hover:bg-orange-500"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden rounded-md p-2 text-white hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#111827]">
            <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 hover:bg-white/5"
              >
                Home
              </Link>

              {/* Mobile Services Expand */}
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between rounded-lg px-3 py-3 hover:bg-white/5 text-left"
              >
                <span>Services</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="ml-2 flex flex-col gap-2 border-l border-white/10 pl-3">
                  <Link
                    to="/chandler-delivery"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-white/5"
                  >
                    <Car size={16} className="text-[#f97316]" />
                    Vehicle Pickup & Delivery
                  </Link>

                  <Link
                    to="/chandler-auto-parts-delivery"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-white/5"
                  >
                    <Wrench size={16} className="text-[#f97316]" />
                    Auto Parts Delivery
                  </Link>

                  <Link
                    to="/services"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-white/5"
                  >
                    <Package size={16} className="text-[#f97316]" />
                    Packages & Equipment
                  </Link>

                  <Link
                    to="/services"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-white/5"
                  >
                    <Building2 size={16} className="text-[#f97316]" />
                    Business Transport
                  </Link>
                </div>
              )}

              <Link
                to="/service-areas"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-3 hover:bg-white/5"
              >
                <MapPin size={16} className="text-[#f97316]" />
                Areas We Serve
              </Link>

              <Link
                to="/pricing"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 hover:bg-white/5"
              >
                Pricing
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 hover:bg-white/5"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 hover:bg-white/5"
              >
                Contact
              </Link>

              <Link
                to="/request-pickup"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#f97316] px-4 py-3 font-bold text-white hover:bg-orange-500"
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
