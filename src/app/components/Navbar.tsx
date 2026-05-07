import { useState } from "react";
import { Link } from "react-router";
import {
  Menu,
  X,
  ChevronDown,
  MessageSquare,
  Car,
  Package,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* TOP BAR */}
      <div className="bg-[#f97316] text-white">
        <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-sm sm:text-base font-semibold">
          <div className="flex items-center gap-2">
            <MessageSquare size={16} />
            <span>Text Only: 480-742-8553</span>
          </div>

          <span className="hidden sm:inline">|</span>

          <span className="text-white/90">
            Fast response by text
          </span>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="border-b border-white/10 bg-[#111827] text-white">
        <div className="mx-auto max-w-7xl px-4">

          <div className="flex h-20 items-center justify-between">

            {/* LOGO */}
            <Link to="/" className="leading-tight">
              <div className="text-xl font-bold">
                <span className="text-white">Freedom Line</span>
                <br />
                <span className="text-[#f97316]">Freight Express</span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8 font-semibold">

              <Link to="/" className="hover:text-[#f97316] transition-colors">
                Home
              </Link>

              {/* SERVICES DROPDOWN */}
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
                    to="/pricing"
                    className="flex items-start gap-3 rounded-lg px-4 py-3 hover:bg-white/5"
                  >
                    <Car className="mt-0.5 text-[#f97316]" size={18} />
                    <div>
                      <div className="font-semibold text-white">
                        Vehicle Delivery
                      </div>
                      <div className="text-sm text-gray-400">
                        Dealer transfers, auction pickups, and customer delivery
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/courier"
                    className="flex items-start gap-3 rounded-lg px-4 py-3 hover:bg-white/5"
                  >
                    <Package className="mt-0.5 text-[#f97316]" size={18} />
                    <div>
                      <div className="font-semibold text-white">
                        Courier Service
                      </div>
                      <div className="text-sm text-gray-400">
                        Parts, documents, and business deliveries
                      </div>
                    </div>
                  </Link>

                </div>
              </div>

              <Link
  to="/vehicle-concierge"
  className="flex items-start gap-3 rounded-lg px-4 py-3 hover:bg-white/5"
>
  <Sparkles className="mt-0.5 text-[#f97316]" size={18} />
  <div>
    <div className="font-semibold text-white">
      Vehicle Concierge Services
    </div>
    <div className="text-sm text-gray-400">
      Car wash pickup, oil change runs, tire service pickup, and convenience vehicle assistance
    </div>
  </div>
</Link>

              <Link
                to="/service-areas"
                className="hover:text-[#f97316] transition-colors"
              >
                Service Areas
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

            {/* DESKTOP CTA */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="bg-[#f97316] px-5 py-3 rounded-lg font-bold text-white hover:bg-orange-500 transition-colors"
              >
                Get Quote
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
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

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#111827] border-t border-white/10">
            <div className="px-4 py-4 flex flex-col gap-2">

              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-[#f97316] transition-colors"
              >
                Home
              </Link>

              {/* MOBILE SERVICES */}
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex justify-between py-2 hover:text-[#f97316] transition-colors"
              >
                Services
                <ChevronDown size={18} />
              </button>

              {mobileServicesOpen && (
                <div className="ml-2 flex flex-col gap-2 text-gray-300">

                  <Link
                    to="/pricing"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="py-2 hover:text-[#f97316] transition-colors"
                  >
                    Vehicle Delivery
                  </Link>

                  <Link
                    to="/courier"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="py-2 hover:text-[#f97316] transition-colors"
                  >
                    Courier Service
                  </Link>

                </div>

            <Link
  to="/vehicle-concierge"
  onClick={() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }}
  className="py-2 hover:text-[#f97316] transition-colors"
>
  Vehicle Concierge Services
</Link>
              )}

              <Link
                to="/service-areas"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-[#f97316] transition-colors"
              >
                Service Areas
              </Link>

              <Link
                to="/pricing"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-[#f97316] transition-colors"
              >
                Pricing
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-[#f97316] transition-colors"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-[#f97316] transition-colors"
              >
                Contact
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-[#f97316] text-white px-4 py-3 text-center rounded-lg font-bold hover:bg-orange-500 transition-colors"
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
