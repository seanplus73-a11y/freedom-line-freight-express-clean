import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Pricing } from "./pages/Pricing";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { RequestPickup } from "./pages/RequestPickup";
import { ConfirmBooking } from "./pages/ConfirmBooking";
import { LegacyRedirect } from "./pages/LegacyRedirect";
import { SystemCheck } from "./pages/SystemCheck";

/**
 * Freedom Line Freight Express - Router Configuration
 * Build: 2026-03-17
 * 
 * PUBLIC ROUTES (/) - Black/Orange branded business website:
 *   - Home, Services, Pricing, About, Contact, Request Pickup
 * 
 * Production Build: Ensures public website displays at root domain
 */
export const router = createBrowserRouter([
  // Public Website Routes
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "pricing", Component: Pricing },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "request-pickup", Component: RequestPickup },
      { path: "confirm-booking/:recordId", Component: ConfirmBooking },
      { path: "confirm_booking/:recordId", Component: ConfirmBooking }, // Legacy support
      { path: "accept", Component: LegacyRedirect }, // Redirect old /accept?quoteId=... links
      { path: "system-check", Component: SystemCheck }, // Diagnostic page
    ],
  },
]);