import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { FileText, Loader2, RefreshCw, DollarSign, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { toast } from 'sonner';

interface Shipment {
  id: string;
  ShipmentCode: string;
  CustomerName: string;
  VehicleYear?: string;
  VehicleMake?: string;
  VehicleModel?: string;
  PickupCity?: string;
  DeliveryCity?: string;
  FinalPrice?: number;
  DepositPaid?: number;
  BalanceDue?: number;
  PaymentStatus?: string;
  InvoiceURL?: string;
  Email?: string;
  Phone?: string;
}

// Demo data for testing
const DEMO_SHIPMENTS: Shipment[] = [
  {
    id: 'demo1',
    ShipmentCode: 'FLF-2026-001',
    CustomerName: 'John Smith',
    Email: 'john.smith@email.com',
    Phone: '(555) 123-4567',
    VehicleYear: '2022',
    VehicleMake: 'Toyota',
    VehicleModel: 'Camry',
    PickupCity: 'Phoenix, AZ',
    DeliveryCity: 'Los Angeles, CA',
    FinalPrice: 850.00,
    DepositPaid: 250.00,
    BalanceDue: 600.00,
    PaymentStatus: 'Partial Payment',
  },
  {
    id: 'demo2',
    ShipmentCode: 'FLF-2026-002',
    CustomerName: 'Sarah Johnson',
    Email: 'sarah.j@email.com',
    Phone: '(555) 234-5678',
    VehicleYear: '2023',
    VehicleMake: 'Honda',
    VehicleModel: 'Civic',
    PickupCity: 'Miami, FL',
    DeliveryCity: 'New York, NY',
    FinalPrice: 1200.00,
    DepositPaid: 1200.00,
    BalanceDue: 0.00,
    PaymentStatus: 'Paid in Full',
  },
  {
    id: 'demo3',
    ShipmentCode: 'FLF-2026-003',
    CustomerName: 'Mike Davis',
    Email: 'mike.davis@email.com',
    Phone: '(555) 345-6789',
    VehicleYear: '2021',
    VehicleMake: 'Ford',
    VehicleModel: 'F-150',
    PickupCity: 'Dallas, TX',
    DeliveryCity: 'Seattle, WA',
    FinalPrice: 1500.00,
    DepositPaid: 0.00,
    BalanceDue: 1500.00,
    PaymentStatus: 'Pending Payment',
  },
];

export function Dashboard() {
  const navigate = useNavigate();
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [demoMode, setDemoMode] = useState(true);

  useEffect(() => {
    // Load demo data for now
    // In production, this would fetch from Vercel API
    setShipments(DEMO_SHIPMENTS);
    setLoading(false);
  }, []);

  const getStatusBadge = (status?: string) => {
    if (!status) return <Badge variant="outline">Unknown</Badge>;
    
    if (status === 'Paid in Full') {
      return <Badge className="bg-green-500 hover:bg-green-600">Paid in Full</Badge>;
    }
    if (status === 'Partial Payment') {
      return <Badge className="bg-yellow-500 hover:bg-yellow-600">Partial Payment</Badge>;
    }
    return <Badge variant="destructive">Pending Payment</Badge>;
  };

  const handleGenerateInvoice = (shipmentId: string) => {
    navigate(`/invoice/${shipmentId}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Freedom Line Freight Express</h1>
              <p className="mt-1 text-sm text-gray-500">Invoice Dashboard</p>
            </div>
            <Button onClick={() => window.location.reload()} variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>
      </div>

      {/* Demo Mode Banner */}
      {demoMode && (
        <Alert className="max-w-7xl mx-auto mt-6 mx-4 sm:mx-6 lg:mx-8">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Demo Mode</AlertTitle>
          <AlertDescription>
            You're viewing demo data. Deploy to Vercel to connect to real Airtable data.
            <br />
            <strong>Next step:</strong> See <code>/VERCEL_DEPLOYMENT_GUIDE.md</code> for deployment instructions.
          </AlertDescription>
        </Alert>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Shipments</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{shipments.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${shipments.reduce((sum, s) => sum + (s.FinalPrice || 0), 0).toFixed(2)}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Paid in Full</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {shipments.filter(s => s.PaymentStatus === 'Paid in Full').length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Shipments Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Shipments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium text-gray-700">Shipment Code</th>
                    <th className="text-left p-4 font-medium text-gray-700">Customer</th>
                    <th className="text-left p-4 font-medium text-gray-700">Vehicle</th>
                    <th className="text-left p-4 font-medium text-gray-700">Route</th>
                    <th className="text-left p-4 font-medium text-gray-700">Amount</th>
                    <th className="text-left p-4 font-medium text-gray-700">Status</th>
                    <th className="text-left p-4 font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {shipments.map((shipment) => (
                    <tr key={shipment.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div className="font-medium text-gray-900">{shipment.ShipmentCode}</div>
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-gray-900">{shipment.CustomerName}</div>
                        <div className="text-sm text-gray-500">{shipment.Email}</div>
                      </td>
                      <td className="p-4">
                        <div className="text-sm">
                          {shipment.VehicleYear} {shipment.VehicleMake} {shipment.VehicleModel}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-sm">
                          {shipment.PickupCity} → {shipment.DeliveryCity}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-medium">${shipment.FinalPrice?.toFixed(2)}</div>
                        {(shipment.BalanceDue || 0) > 0 && (
                          <div className="text-sm text-red-600">
                            Balance: ${shipment.BalanceDue?.toFixed(2)}
                          </div>
                        )}
                      </td>
                      <td className="p-4">
                        {getStatusBadge(shipment.PaymentStatus)}
                      </td>
                      <td className="p-4">
                        <Button
                          onClick={() => handleGenerateInvoice(shipment.id)}
                          size="sm"
                          variant="outline"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          Invoice
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              About This System
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-gray-600">
              <p>
                <strong>Current Status:</strong> Running in demo mode with sample data.
              </p>
              <p>
                <strong>Booking Confirmations:</strong> The booking confirmation system is ready to deploy!
                <br />
                Visit <code>/confirm-booking/:recordId</code> to test the booking flow.
              </p>
              <p>
                <strong>Next Steps:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Deploy to Vercel (see <code>/QUICK_START.md</code>)</li>
                <li>Add environment variables (Airtable + Resend API keys)</li>
                <li>Update frontend URL in ConfirmBooking.tsx</li>
                <li>Test booking confirmation workflow</li>
              </ol>
              <p>
                <strong>Documentation:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><code>/START_HERE_UPDATED.md</code> - Quick overview</li>
                <li><code>/QUICK_START.md</code> - 5-minute deployment</li>
                <li><code>/VERCEL_DEPLOYMENT_GUIDE.md</code> - Complete guide</li>
                <li><code>/ERROR_FIX_COMPLETE.md</code> - Recent fixes</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
