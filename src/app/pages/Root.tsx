import { Outlet } from 'react-router';
import { Truck, Settings, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export function Root() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="bg-blue-700 p-2 rounded-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Freedom Line Freight Express LLC</h1>
                <p className="text-sm text-gray-600">Invoice Management System</p>
              </div>
            </Link>
            
            {/* Navigation */}
            <nav className="flex items-center gap-4">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  location.pathname === '/'
                    ? 'bg-blue-700 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Dashboard
              </Link>
              <Link
                to="/test-endpoint"
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  location.pathname === '/test-endpoint'
                    ? 'bg-blue-700 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Settings className="w-4 h-4" />
                Test Endpoint
              </Link>
              <Link
                to="/test-email"
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  location.pathname === '/test-email'
                    ? 'bg-blue-700 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Mail className="w-4 h-4" />
                Test Email
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-600">
          <p>© 2026 Freedom Line Freight Express LLC. All rights reserved.</p>
          <p className="mt-1">dispatch@flfreightco.com | (480) 919-8088</p>
        </div>
      </footer>
    </div>
  );
}