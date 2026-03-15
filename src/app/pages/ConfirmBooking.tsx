import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Loader2, CheckCircle2, XCircle, Package, MapPin, DollarSign, Calendar, Truck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface LeadData {
  recordId: string;
  L_Customer_Name?: string;
  L_Customer_Email?: string;
  L_Customer_Phone?: string;
  L_Pickup_Location?: string;
  L_Dropoff_Location?: string;
  L_Total_Quote_Amount?: number;
  L_Deposit_Amount?: number;
  L_Commodity?: string;
  L_Pickup_Date?: string;
  L_Status?: string;
}

export function ConfirmBooking() {
  const { recordId } = useParams<{ recordId: string }>();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Fetch lead data on mount
  useEffect(() => {
    const fetchLeadData = async () => {
      try {
        setLoading(true);
        console.log('📥 Fetching lead data for recordId:', recordId);
        
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-6e6166b5/api/lead/${recordId}`,
          {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch lead data');
        }

        const data = await response.json();
        console.log('✅ Lead data received:', data);
        setLeadData(data);
        setError(null);
      } catch (err) {
        console.error('❌ Error fetching lead data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load booking information');
        toast.error('Failed to load booking details');
      } finally {
        setLoading(false);
      }
    };

    if (recordId) {
      fetchLeadData();
    }
  }, [recordId]);

  const handleConfirmBooking = async () => {
    if (!agreementChecked) {
      toast.error('Please accept the terms and conditions');
      return;
    }

    try {
      setSubmitting(true);
      console.log('📤 Submitting booking confirmation for:', recordId);

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-6e6166b5/api/confirm-booking/${recordId}`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            customerName: leadData?.L_Customer_Name,
            customerEmail: leadData?.L_Customer_Email,
            pickupLocation: leadData?.L_Pickup_Location,
            dropoffLocation: leadData?.L_Dropoff_Location,
            totalAmount: leadData?.L_Total_Quote_Amount,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to confirm booking');
      }

      const result = await response.json();
      console.log('✅ Booking confirmed successfully:', result);
      
      setSuccess(true);
      toast.success('🎉 Booking confirmed successfully!');
      
      // Redirect to success page after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
      
    } catch (err) {
      console.error('❌ Error confirming booking:', err);
      toast.error(err instanceof Error ? err.message : 'Failed to confirm booking');
    } finally {
      setSubmitting(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
              <p className="text-gray-600">Loading booking details...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Error state
  if (error || !leadData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-red-200">
          <CardHeader>
            <div className="flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-600" />
              <CardTitle className="text-red-900">Booking Not Found</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{error || 'Could not load booking information'}</p>
            <Button onClick={() => navigate('/')} variant="outline" className="w-full">
              Go to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Success state
  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-green-200">
          <CardHeader>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
              <div>
                <CardTitle className="text-green-900">Booking Confirmed!</CardTitle>
                <CardDescription>We've received your confirmation</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-800">
                ✅ Airtable updated to "Confirm Requested"<br />
                ✅ Notification sent to quotes@flfreightco.com
              </p>
            </div>
            <p className="text-gray-700">
              Our team will contact you shortly to finalize the details.
            </p>
            <p className="text-sm text-gray-500">
              Redirecting to dashboard...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Main confirmation form
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Truck className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Freedom Line Freight Express</h1>
          </div>
          <p className="text-xl text-gray-600">Confirm Your Booking</p>
        </div>

        {/* Main Card */}
        <Card className="border-2 border-blue-200 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Review Your Shipment Details</CardTitle>
            <CardDescription className="text-blue-100">
              Please review the information below and confirm your booking
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-6 space-y-6">
            {/* Customer Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Package className="w-5 h-5 text-blue-600" />
                Customer Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-semibold text-gray-900">{leadData.L_Customer_Name || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-gray-900">{leadData.L_Customer_Email || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-semibold text-gray-900">{leadData.L_Customer_Phone || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Commodity</p>
                  <p className="font-semibold text-gray-900">{leadData.L_Commodity || 'N/A'}</p>
                </div>
              </div>
            </div>

            {/* Shipment Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Shipment Details
              </h3>
              <div className="space-y-3 bg-gray-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 mt-1.5"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">Pickup Location</p>
                    <p className="font-semibold text-gray-900">{leadData.L_Pickup_Location || 'N/A'}</p>
                  </div>
                </div>
                <div className="border-l-2 border-gray-300 ml-1.5 h-6"></div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 mt-1.5"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">Dropoff Location</p>
                    <p className="font-semibold text-gray-900">{leadData.L_Dropoff_Location || 'N/A'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-blue-600" />
                Pricing
              </h3>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-700">Total Quote Amount</p>
                  <p className="text-2xl font-bold text-blue-900">
                    ${leadData.L_Total_Quote_Amount?.toFixed(2) || '0.00'}
                  </p>
                </div>
                {leadData.L_Deposit_Amount && leadData.L_Deposit_Amount > 0 && (
                  <div className="flex justify-between items-center text-sm">
                    <p className="text-gray-600">Deposit Required</p>
                    <p className="font-semibold text-gray-900">
                      ${leadData.L_Deposit_Amount.toFixed(2)}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Pickup Date */}
            {leadData.L_Pickup_Date && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Pickup Date
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900">{leadData.L_Pickup_Date}</p>
                </div>
              </div>
            )}

            {/* Terms and Conditions */}
            <div className="border-t-2 border-gray-200 pt-6">
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-yellow-900 mb-2">Important Notice</h4>
                <ul className="text-sm text-yellow-800 space-y-1 list-disc list-inside">
                  <li>By confirming, you agree to the quoted price and terms</li>
                  <li>Our team will contact you within 24 hours to finalize details</li>
                  <li>Pickup dates are subject to carrier availability</li>
                  <li>Payment terms will be discussed during confirmation call</li>
                </ul>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <Checkbox
                  id="agreement"
                  checked={agreementChecked}
                  onCheckedChange={(checked) => setAgreementChecked(checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="agreement" className="text-sm text-gray-700 cursor-pointer">
                  I have reviewed all the details above and agree to proceed with this booking. I understand that 
                  Freedom Line Freight Express will contact me to finalize the shipment arrangements.
                </label>
              </div>

              <Button
                onClick={handleConfirmBooking}
                disabled={!agreementChecked || submitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg font-semibold"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Confirming Booking...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Confirm Booking
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-600">
          <p>Questions? Contact us at <a href="mailto:quotes@flfreightco.com" className="text-blue-600 hover:underline">quotes@flfreightco.com</a></p>
        </div>
      </div>
    </div>
  );
}
