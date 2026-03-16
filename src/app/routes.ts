import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Dashboard } from "./pages/Dashboard";
import { InvoicePreview } from "./pages/InvoicePreview";
import { TestEndpoint } from "./pages/TestEndpoint";
import { TestEmail } from "./pages/TestEmail";
import { ConfirmBooking } from "./pages/ConfirmBooking";
import { DiagnosticsPage } from "./pages/DiagnosticsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "invoice/:shipmentId", Component: InvoicePreview },
      { path: "confirm-booking/:recordId", Component: ConfirmBooking },
      { path: "confirm_booking/:recordId", Component: ConfirmBooking }, // Support underscore too
      { path: "diagnostics", Component: DiagnosticsPage },
      { path: "test-endpoint", Component: TestEndpoint },
      { path: "test-email", Component: TestEmail },
    ],
  },
]);
