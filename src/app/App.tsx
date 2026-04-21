import { RouterProvider } from "react-router";
import { router } from "./routes";
import DriveCarToMechanic from "./pages/DriveCarToMechanic";

<Route path="/drive-car-to-mechanic" element={<DriveCarToMechanic />} />
export default function App() {
  return <RouterProvider router={router} />;
}
