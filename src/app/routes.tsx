import { createBrowserRouter, Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import { Contact } from "./pages/Contact";
import Pricing from "./pages/Pricing";
import { RequestPickup } from "./pages/RequestPickup";
import AcceptQuote from "./pages/AcceptQuote";
import PhoenixDelivery from "./pages/PhoenixDelivery";
import MesaDelivery from "./pages/MesaDelivery";
import ChandlerDelivery from "./pages/ChandlerDelivery";
import GilbertDelivery from "./pages/GilbertDelivery";
import QueenCreekDelivery from "./pages/QueenCreekDelivery";
import SanTanValleyDelivery from "./pages/SanTanValleyDelivery";
import ServiceAreas from "./pages/ServiceAreas";
import ScottsdaleDelivery from "./pages/ScottsdaleDelivery";
import CasaGrandeDelivery from "./pages/CasaGrandeDelivery";
import ChandlerAutoPartsDelivery from "./pages/ChandlerAutoPartsDelivery";
import GilbertAutoPartsDelivery from "./pages/GilbertAutoPartsDelivery";
import MesaAutoPartsDelivery from "./pages/MesaAutoPartsDelivery";
import PhoenixAutoPartsDelivery from "./pages/PhoenixAutoPartsDelivery";
import ScottsdaleAutoPartsDelivery from "./pages/ScottsdaleAutoPartsDelivery";
import QueenCreekAutoPartsDelivery from "./pages/QueenCreekAutoPartsDelivery";
function RootLayout() {
  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "pricing", element: <Pricing /> },
      { path: "contact", element: <Contact /> },
      { path: "request-pickup", element: <RequestPickup /> },
      { path: "accept-quote", element: <AcceptQuote /> },

      { path: "service-areas", element: <ServiceAreas /> },

      { path: "phoenix-delivery", element: <PhoenixDelivery /> },
      { path: "mesa-delivery", element: <MesaDelivery /> },
      { path: "chandler-delivery", element: <ChandlerDelivery /> },
      { path: "gilbert-delivery", element: <GilbertDelivery /> },
      { path: "queen-creek-delivery", element: <QueenCreekDelivery /> },
      { path: "san-tan-valley-delivery", element: <SanTanValleyDelivery /> },
      { path: "scottsdale-delivery", element: <ScottsdaleDelivery /> },
      { path: "casa-grande-delivery", element: <CasaGrandeDelivery /> },
      { path: "chandler-auto-parts-delivery", element: <ChandlerAutoPartsDelivery /> },
      { path: "gilbert-auto-parts-delivery", element: <GilbertAutoPartsDelivery /> },
      { path: "mesa-auto-parts-delivery", element: <MesaAutoPartsDelivery /> },
      { path: "phoenix-auto-parts-delivery", element: <PhoenixAutoPartsDelivery /> },
      { path: "scottsdale-auto-parts-delivery", element: <ScottsdaleAutoPartsDelivery /> },
      { path: "queen-creek-auto-parts-delivery", element: <QueenCreekAutoPartsDelivery /> },
      { path: "queen-creek-vehicle-delivery",element: <Navigate to="/queen-creek-delivery" replace />,
}

    ],
  },
]);
