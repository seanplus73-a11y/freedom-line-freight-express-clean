import { RouterProvider } from "react-router";
import { router } from "./routes";

/**
 * Freedom Line Vehicle Transport Application
 * Main entry point using React Router
 */
export default function App() {
  return <RouterProvider router={router} />;
}
