import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from './components/ui/sonner';

// Freedom Line Freight Express Public Website - Production Build v2.0
// This application serves the public-facing Freedom Line Freight Express website
// with black and orange branding, and includes admin dashboard at /admin
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </>
  );
}