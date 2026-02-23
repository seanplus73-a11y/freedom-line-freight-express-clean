import { createBrowserRouter, Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import RequestPickup from "./pages/RequestPickup";

// Freedom Line routing configuration
// Root layout component
function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// 404 Not Found page
function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8">
            The page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors"
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
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "request-pickup",
        element: <RequestPickup />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
