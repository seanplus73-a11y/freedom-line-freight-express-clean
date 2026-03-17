import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Pricing } from "./pages/Pricing";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { RequestPickup } from "./pages/RequestPickup";
import { ConfirmBooking } from "./pages/ConfirmBooking";
// Temporarily removed admin imports to fix build
// import { AdminRoot } from "./pages/AdminRoot";
// import { Dashboard } from "./pages/Dashboard";
// import { InvoicePreview } from "./pages/InvoicePreview";

/**
 * Freedom Line Freight Express - Router Configuration
 * 
 * PUBLIC ROUTES (/) - Black/Orange branded business website:
 *   - Home, Services, Pricing, About, Contact, Request Pickup
 * 
 * ADMIN ROUTES (/admin) - Invoice dashboard:
 *   - Dashboard, Invoice Preview
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
    ],
  },
  // Admin Dashboard Routes - Temporarily disabled for deployment
  // {
  //   path: "/admin",
  //   Component: AdminRoot,
  //   children: [
  //     { index: true, Component: Dashboard },
  //     { path: "invoices", Component: Dashboard }, // Reuse Dashboard for now
  //     { path: "shipments", Component: Dashboard }, // Reuse Dashboard for now
  //     { path: "invoice/:shipmentId", Component: InvoicePreview },
  //   ],
  // },
]);