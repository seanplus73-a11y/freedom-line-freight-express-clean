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
import ThankYou from "./pages/ThankYou";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

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

import PackageDocumentDelivery from "./pages/PackageDocumentDelivery";
import BusinessTransport from "./pages/BusinessTransport";
import Courier from "./pages/Courier";
import VehicleDelivery from "./pages/VehicleDelivery";
import ArizonaDeliveryGuide from "./pages/ArizonaDeliveryGuide";

import CarDeliveryService from "./pages/CarDeliveryService";
import DriveCarToMechanic from "./pages/DriveCarToMechanic";
import DriveMyCarHome from "./pages/DriveMyCarHome";
import SomeoneToDriveMyCar from "./pages/SomeoneToDriveMyCar";
import DriveForMyCar from "./pages/DriveForMyCar";
import DriveForHireCar from "./pages/DriveForHireCar";
import PersonalDriverForMyCar from "./pages/PersonalDriverForMyCar";
import DriveMyCarToDealer from "./pages/DriveMyCarToDealer";
import CostToDriveCar from "./pages/cost-to-have-someone-drive-your-car";
import CanSomeoneDriveMyCarForMe from "./pages/can-someone-drive-my-car-for-me";
import DriveMyCarToMechanicNearMe from "./pages/drive-my-car-to-mechanic-near-me";

import AutoTransportPhoenix from "./pages/AutoTransportPhoenix";
import VehicleDeliveryPhoenix from "./pages/VehicleDeliveryPhoenix";
import CarTransportPhoenix from "./pages/CarTransportPhoenix";
import VehicleConcierge from "./pages/VehicleConcierge";
import VehicleConciergePhoenix from "./pages/VehicleConciergePhoenix";
import CarWashPickupServicePhoenix from "./pages/CarWashPickupServicePhoenix";
import OilChangePickupServicePhoenix from "./pages/OilChangePickupServicePhoenix";
import MechanicPickupServicePhoenix from "./pages/MechanicPickupServicePhoenix";
import SeniorVehicleConciergePhoenix from "./pages/SeniorVehicleConciergePhoenix";

function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-900">
      <Navbar />
      <main className="flex flex-grow items-center justify-center">
        <div className="px-4 text-center">
          <h1 className="mb-4 text-6xl font-bold text-white">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-gray-300">
            Page Not Found
          </h2>
          <p className="mb-8 text-gray-400">
            The page you are looking for does not exist.
          </p>
          <a
            href="/"
            className="inline-block rounded-md bg-orange-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Go Home
          </a>
        </div>
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
      { path: "thank-you", element: <ThankYou /> },

      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogPost /> },

      { path: "phoenix-delivery", element: <PhoenixDelivery /> },
      { path: "mesa-delivery", element: <MesaDelivery /> },
      { path: "chandler-delivery", element: <ChandlerDelivery /> },
      { path: "gilbert-delivery", element: <GilbertDelivery /> },
      { path: "queen-creek-delivery", element: <QueenCreekDelivery /> },
      { path: "san-tan-valley-delivery", element: <SanTanValleyDelivery /> },
      { path: "scottsdale-delivery", element: <ScottsdaleDelivery /> },
      { path: "casa-grande-delivery", element: <CasaGrandeDelivery /> },
      { path: "tempe-delivery", element: <TempeDelivery /> },
      { path: "service-areas", element: <ServiceAreas /> },

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

      { path: "package-document-delivery", element: <PackageDocumentDelivery /> },
      { path: "business-transport", element: <BusinessTransport /> },
      { path: "courier", element: <Courier /> },
      { path: "vehicle-delivery", element: <VehicleDelivery /> },
      { path: "arizona-delivery-guide", element: <ArizonaDeliveryGuide /> },

      { path: "car-delivery-service", element: <CarDeliveryService /> },
      { path: "drive-car-to-mechanic", element: <DriveCarToMechanic /> },
      { path: "drive-my-car-home", element: <DriveMyCarHome /> },
      { path: "someone-to-drive-my-car", element: <SomeoneToDriveMyCar /> },
      { path: "drive-for-my-car", element: <DriveForMyCar /> },
      { path: "drive-for-hire-car", element: <DriveForHireCar /> },
      { path: "personal-driver-for-my-car", element: <PersonalDriverForMyCar /> },
      { path: "drive-my-car-to-dealer", element: <DriveMyCarToDealer /> },
      { path: "cost-to-have-someone-drive-your-car", element: <CostToDriveCar /> },
      { path: "can-someone-drive-my-car-for-me", element: <CanSomeoneDriveMyCarForMe /> },
      { path: "drive-my-car-to-mechanic-near-me", element: <DriveMyCarToMechanicNearMe /> },

      { path: "auto-transport-phoenix", element: <AutoTransportPhoenix /> },
      { path: "vehicle-delivery-phoenix", element: <VehicleDeliveryPhoenix /> },
      { path: "car-transport-phoenix", element: <CarTransportPhoenix /> },
      { path: "vehicle-concierge", element: <VehicleConcierge /> },
      { path: "vehicle-concierge-phoenix", element: <VehicleConciergePhoenix /> },
      { path: "car-wash-pickup-service-phoenix", element: <CarWashPickupServicePhoenix /> },
      { path: "oil-change-pickup-service-phoenix", element: <OilChangePickupServicePhoenix /> },
      { path: "mechanic-pickup-service-phoenix", element: <MechanicPickupServicePhoenix /> },
      { path: "senior-vehicle-concierge-phoenix", element: <SeniorVehicleConciergePhoenix /> },
    ],
  },
  {
    path: "/accept",
    element: <AcceptQuote />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
