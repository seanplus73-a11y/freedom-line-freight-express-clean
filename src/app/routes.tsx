import { createBrowserRouter, Outlet, Navigate } from "react-router";
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
import ScottsdaleDelivery from "./pages/ScottsdaleDelivery";
import CasaGrandeDelivery from "./pages/CasaGrandeDelivery";
import TempeDelivery from "./pages/TempeDelivery";
import ServiceAreas from "./pages/ServiceAreas";

import AutoPartsDelivery from "./pages/AutoPartsDelivery";
import PhoenixAutoPartsDelivery from "./pages/PhoenixAutoPartsDelivery";
import MesaAutoPartsDelivery from "./pages/MesaAutoPartsDelivery";
import ChandlerAutoPartsDelivery from "./pages/ChandlerAutoPartsDelivery";
import GilbertAutoPartsDelivery from "./pages/GilbertAutoPartsDelivery";
import QueenCreekAutoPartsDelivery from "./pages/QueenCreekAutoPartsDelivery";
import SanTanValleyAutoPartsDelivery from "./pages/SanTanValleyAutoPartsDelivery";
import ScottsdaleAutoPartsDelivery from "./pages/ScottsdaleAutoPartsDelivery";
import CasaGrandeAutoPartsDelivery from "./pages/CasaGrandeAutoPartsDelivery";
import TempeAutoPartsDelivery from "./pages/TempeAutoPartsDelivery";

import DriveCarToMechanic from "./pages/DriveCarToMechanic";
import CarDeliveryService from "./pages/CarDeliveryService";
import DriveMyCarHome from "./pages/DriveMyCarHome";
import SomeoneToDriveMyCar from "./pages/SomeoneToDriveMyCar";
import DriveForMyCar from "./pages/DriveForMyCar";
import DriveForHireCar from "./pages/DriveForHireCar";
import PersonalDriverForMyCar from "./pages/PersonalDriverForMyCar";
import DriveMyCarToDealer from "./pages/DriveMyCarToDealer";
import CostToDriveCar from "./pages/cost-to-have-someone-drive-your-car";

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

      { path: "drive-car-to-mechanic", element: <DriveCarToMechanic /> },
      { path: "car-delivery-service", element: <CarDeliveryService /> },
      { path: "drive-my-car-home", element: <DriveMyCarHome /> },
      { path: "someone-to-drive-my-car", element: <SomeoneToDriveMyCar /> },
      { path: "drive-for-my-car", element: <DriveForMyCar /> },
      { path: "drive-for-hire-car", element: <DriveForHireCar /> },
      { path: "personal-driver-for-my-car", element: <PersonalDriverForMyCar /> },
      { path: "drive-my-car-to-dealer", element: <DriveMyCarToDealer /> },
      { path: "cost-to-have-someone-drive-your-car", element: <CostToDriveCar /> },

      { path: "service-areas", element: <ServiceAreas /> },

      { path: "phoenix-delivery", element: <PhoenixDelivery /> },
      { path: "mesa-delivery", element: <MesaDelivery /> },
      { path: "chandler-delivery", element: <ChandlerDelivery /> },
      { path: "gilbert-delivery", element: <GilbertDelivery /> },
      { path: "queen-creek-delivery", element: <QueenCreekDelivery /> },
      { path: "san-tan-valley-delivery", element: <SanTanValleyDelivery /> },
      { path: "scottsdale-delivery", element: <ScottsdaleDelivery /> },
      { path: "casa-grande-delivery", element: <CasaGrandeDelivery /> },
      { path: "tempe-delivery", element: <TempeDelivery /> },

      { path: "auto-parts-delivery", element: <AutoPartsDelivery /> },
      { path: "phoenix-auto-parts-delivery", element: <PhoenixAutoPartsDelivery /> },
      { path: "mesa-auto-parts-delivery", element: <MesaAutoPartsDelivery /> },
      { path: "chandler-auto-parts-delivery", element: <ChandlerAutoPartsDelivery /> },
      { path: "gilbert-auto-parts-delivery", element: <GilbertAutoPartsDelivery /> },
      { path: "queen-creek-auto-parts-delivery", element: <QueenCreekAutoPartsDelivery /> },
      { path: "san-tan-valley-auto-parts-delivery", element: <SanTanValleyAutoPartsDelivery /> },
      { path: "scottsdale-auto-parts-delivery", element: <ScottsdaleAutoPartsDelivery /> },
      { path: "casa-grande-auto-parts-delivery", element: <CasaGrandeAutoPartsDelivery /> },
      { path: "tempe-auto-parts-delivery", element: <TempeAutoPartsDelivery /> },

      { path: "chandler-vehicle-delivery", element: <Navigate to="/chandler-delivery" replace /> },
      { path: "queen-creek-vehicle-delivery", element: <Navigate to="/queen-creek-delivery" replace /> },
      { path: "san-tan-valley-vehicle-delivery", element: <Navigate to="/san-tan-valley-delivery" replace /> },
    ],
  },
]);
