import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Download, Mail, Loader2, CheckCircle, CreditCard } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { toast } from 'sonner';
import { InvoiceDocument } from '../components/InvoiceDocument';

// Use Vercel API endpoint instead of Supabase
const API_BASE = import.meta.env.PROD ? '/api' : 'http://localhost:3000/api';

interface ShipmentData {
  id: string;
  ShipmentCode: string;
  CustomerName: string;
  Email?: string;
  Phone?: string;
  VehicleYear?: string;
  VehicleMake?: string;
  VehicleModel?: string;
  VIN?: string;
  PickupCity?: string;
  PickupLocation?: string;
  PickupDate?: string;
  DeliveryCity?: string;
  DeliveryLocation?: string;
  DeliveryDate?: string;
  FinalPrice?: number;
  DepositPaid?: number;
  FinalPaymentPaid?: number;
  BalanceDue?: number;
  PaymentStatus?: string;
  InvoiceURL?: string;
}

export function InvoicePreview() {
  const { shipmentId } = useParams();
  const navigate = useNavigate();
  const [shipment, setShipment] = useState<ShipmentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [sending, setSending] = useState(false);
  const invoiceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchShipment();
  }, [shipmentId]);

  const fetchShipment = async () => {
    setLoading(true);
    try {
      // Check if this is a demo shipment
      if (shipmentId?.startsWith('demo')) {
        // Load from demo data
        const demoShipments = [
          {
            id: 'demo1',
            ShipmentCode: 'FLF-2026-001',
            CustomerName: 'John Smith',
            Email: 'john.smith@email.com',
            Phone: '(555) 123-4567',
            VehicleYear: '2022',
            VehicleMake: 'Toyota',
            VehicleModel: 'Camry',
            VIN: '1HGBH41JXMN109186',
            PickupCity: 'Phoenix, AZ',
            PickupLocation: '123 Main St, Phoenix, AZ 85001',
            PickupDate: '2026-03-15',
            DeliveryCity: 'Los Angeles, CA',
            DeliveryLocation: '456 Ocean Ave, Los Angeles, CA 90001',
            DeliveryDate: '2026-03-18',
            FinalPrice: 850.00,
            DepositPaid: 250.00,
            FinalPaymentPaid: 0.00,
            BalanceDue: 600.00,
            PaymentStatus: 'Partial Payment',
          },
          {
            id: 'demo2',
            ShipmentCode: 'FLF-2026-002',
            CustomerName: 'Sarah Johnson',
            Email: 'sarah.j@email.com',
            Phone: '(555) 987-6543',
            VehicleYear: '2021',
            VehicleMake: 'Honda',
            VehicleModel: 'Accord',
            VIN: '5J6RM4H55DL012345',
            PickupCity: 'Dallas, TX',
            PickupLocation: 'Dallas, TX 75201',
            PickupDate: '2026-03-12',
            DeliveryCity: 'Miami, FL',
            DeliveryLocation: 'Miami, FL 33101',
            DeliveryDate: '2026-03-16',
            FinalPrice: 1200.00,
            DepositPaid: 600.00,
            FinalPaymentPaid: 600.00,
            BalanceDue: 0.00,
            PaymentStatus: 'Paid in Full',
          },
          {
            id: 'demo3',
            ShipmentCode: 'FLF-2026-003',
            CustomerName: 'Michael Chen',
            Email: 'mchen@email.com',
            Phone: '(555) 456-7890',
            VehicleYear: '2023',
            VehicleMake: 'Tesla',
            VehicleModel: 'Model 3',
            VIN: '5YJ3E1EA9KF123456',
            PickupCity: 'San Francisco, CA',
            PickupLocation: 'San Francisco, CA 94102',
            PickupDate: '2026-03-20',
            DeliveryCity: 'Seattle, WA',
            DeliveryLocation: 'Seattle, WA 98101',
            DeliveryDate: '2026-03-23',
            FinalPrice: 950.00,
            DepositPaid: 0.00,
            FinalPaymentPaid: 0.00,
            BalanceDue: 950.00,
            PaymentStatus: 'Pending',
          },
        ];
        
        const demoShipment = demoShipments.find(s => s.id === shipmentId);
        if (demoShipment) {
          setShipment(demoShipment);
        } else {
          toast.error('Demo shipment not found');
        }
        setLoading(false);
        return;
      }

      const response = await fetch(
        `${API_BASE}/shipments/${shipmentId}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch shipment');
      }

      const data = await response.json();
      setShipment(data.shipment);
    } catch (error) {
      console.error('Error fetching shipment:', error);
      toast.error('Failed to load shipment details');
    } finally {
      setLoading(false);
    }
  };

  const generatePDF = async () => {
    if (!shipment) return;

    setGenerating(true);
    try {
      // Call the generate-invoice function (correct endpoint)
      const response = await fetch(
        `${API_BASE}/generate-invoice`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            shipmentCode: shipment.ShipmentCode,
            customerName: shipment.CustomerName,
            customerEmail: shipment.Email,
            customerPhone: shipment.Phone,
            vehicleYear: shipment.VehicleYear,
            vehicleMake: shipment.VehicleMake,
            vehicleModel: shipment.VehicleModel,
            vin: shipment.VIN,
            pickupAddress: shipment.PickupLocation || shipment.PickupCity,
            deliveryAddress: shipment.DeliveryLocation || shipment.DeliveryCity,
            pickupDate: shipment.PickupDate,
            deliveryDate: shipment.DeliveryDate,
            totalQuoteAmount: shipment.FinalPrice,
            depositPaid: shipment.DepositPaid,
            finalPaymentPaid: shipment.FinalPaymentPaid,
            remainingBalance: shipment.BalanceDue,
            paymentStatus: shipment.PaymentStatus,
            invoiceType: (shipment.BalanceDue || 0) > 0 ? 'balance' : 'receipt',
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('PDF generation error:', errorData);
        throw new Error(errorData.error || 'Failed to generate PDF');
      }

      const data = await response.json();
      
      // Update Airtable with PDF URL (only if not in demo mode)
      if (!shipmentId?.startsWith('demo')) {
        await fetch(
          `${API_BASE}/shipments/${shipmentId}/update`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              InvoiceURL: data.pdfUrl,
            }),
          }
        );
      }

      toast.success('PDF generated successfully!');
      
      // Open PDF in new tab
      window.open(data.pdfUrl, '_blank');
      
      // Refresh shipment data
      fetchShipment();
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Failed to generate PDF');
    } finally {
      setGenerating(false);
    }
  };

  const sendInvoiceEmail = async () => {
    if (!shipment || !shipment.Email) {
      toast.error('Customer email is required');
      return;
    }

    // Generate PDF first if it doesn't exist
    if (!shipment.InvoiceURL) {
      await generatePDF();
      return;
    }

    setSending(true);
    try {
      const response = await fetch(
        `${API_BASE}/send-invoice`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            shipmentId: shipment.id,
            customerEmail: shipment.Email,
            customerName: shipment.CustomerName,
            shipmentCode: shipment.ShipmentCode,
            invoiceUrl: shipment.InvoiceURL,
            balanceDue: shipment.BalanceDue,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      toast.success(`Invoice sent to ${shipment.Email}!`);
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send invoice email');
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-blue-700" />
      </div>
    );
  }

  if (!shipment) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Shipment not found</p>
        <Button onClick={() => navigate('/')} className="mt-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>
      </div>
    );
  }

  const balanceDue = shipment.BalanceDue || 0;
  const hasBalance = balanceDue > 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => navigate('/')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="flex gap-3">
          <Button
            onClick={generatePDF}
            disabled={generating}
            className="bg-blue-700 hover:bg-blue-800"
          >
            {generating ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Download className="w-4 h-4 mr-2" />
            )}
            Generate PDF
          </Button>

          <Button
            onClick={sendInvoiceEmail}
            disabled={sending || !shipment.Email}
            variant="outline"
          >
            {sending ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Mail className="w-4 h-4 mr-2" />
            )}
            Send to Customer
          </Button>
        </div>
      </div>

      {/* Invoice Preview */}
      <Card>
        <CardContent className="p-8">
          <div ref={invoiceRef}>
            <InvoiceDocument shipment={shipment} />
          </div>
        </CardContent>
      </Card>

      {/* Payment Links Section */}
      {hasBalance && (
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-700 p-3 rounded-lg">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">
                  Payment Required: ${balanceDue.toFixed(2)}
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  Customer can pay using the following methods:
                </p>
                <div className="flex gap-3">
                  <Button
                    onClick={() => window.open('https://book.stripe.com/bJe7sE9B8cr41Gc29ScfK00', '_blank')}
                    className="bg-blue-700 hover:bg-blue-800"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Pay with Card (Stripe)
                  </Button>
                  <Button
                    onClick={() => window.open('https://www.paypal.com/ncp/payment/BMNZCXNFAF2FG', '_blank')}
                    className="bg-[#0070ba] hover:bg-[#005ea6]"
                  >
                    Pay with PayPal
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}