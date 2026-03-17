import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Loader2, CheckCircle2, XCircle, Package, MapPin, DollarSign, Calendar, Truck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Checkbox } from '../components/ui/checkbox';
import { toast } from 'sonner';

// API endpoint - Uses relative URL (works in dev and production)
const VERCEL_API_URL = '/api/confirm-booking';

interface LeadData {
  recordId: string;
  // Exact Airtable field names from Leads table
  L_FullName?: string;
  L_Email?: string;
  L_Phone?: string;
  L_Status?: string;
  L_Commodity?: string;
  L_Deposit_Amount?: number;
  // Quote fields - EXACT field names
  Q_PickupLocation?: string;
  Q_DeliveryLocation?: string;
  Q_FinalPrice?: number;
  Q_PickupDate?: string;
  Q_PreferredPickupDate?: string;
  Q_ServiceType?: string;
  // Vehicle details
  Vehicle_Make?: string;
  Vehicle_Model?: string;
  Vehicle_Year?: string;
  // Allow any additional fields from Airtable
  [key: string]: any;
}

// DIAGNOSTIC: Add detailed response tracking
interface ConfirmResponse {
  success: boolean;
  message: string;
  airtableUpdated: boolean;
  newStatus: string;
  recordId: string;
  emailsSent?: {
    businessNotification: boolean;
    customerConfirmation: boolean;
    depositInvoice: string;
  };
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
  
  // DIAGNOSTIC: Track actual Airtable response
  const [diagnostics, setDiagnostics] = useState<{
    requestSent: boolean;
    airtableResponse: any;
    statusBefore: string;
    statusAfter: string;
    updateVerified: boolean;
  } | null>(null);

  // Fetch lead data on mount
  useEffect(() => {
    const fetchLeadData = async () => {
      try {
        setLoading(true);
        console.log('📥 Fetching lead data for recordId:', recordId);
        
        // CALL VERCEL API - Simple GET request
        const response = await fetch(
          `${VERCEL_API_URL}?recordId=${recordId}`,
          {
            method: 'GET',
            headers: {
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
        console.log('🔍 DIAGNOSTIC - All field names:', Object.keys(data));
        console.log('🔍 DIAGNOSTIC - Sample values:', {
          recordId: data.recordId,
          customerName: data.L_FullName || data['Customer Name'] || data.Name,
          email: data.L_Email || data['Customer Email'] || data.Email,
          phone: data.L_Phone || data['Customer Phone'] || data.Phone,
          pickup: data.Q_PickupLocation || data['Pickup Location'] || data.Pickup,
          dropoff: data.Q_DropoffLocation || data['Dropoff Location'] || data.Dropoff,
          total: data.Q_QuotePrice || data['Total Quote Amount'] || data['Final Price'] || data.Total
        });
        
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

      // CALL VERCEL API - Simple POST request
      const response = await fetch(
        `${VERCEL_API_URL}?recordId=${recordId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'confirm',
            customerName: leadData?.L_FullName,
            customerEmail: leadData?.L_Email,
            customerPhone: leadData?.L_Phone,
            pickupLocation: leadData?.Q_PickupLocation,
            dropoffLocation: leadData?.Q_DeliveryLocation,
            totalAmount: leadData?.Q_FinalPrice,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to confirm booking');
      }

      const result = await response.json() as ConfirmResponse;
      console.log('✅ Booking confirmed successfully:', result);
      console.log('✅ Airtable updated:', result.airtableUpdated);
      console.log('✅ New status:', result.newStatus);
      console.log('📧 Email note:', result.emailsSent);
      
      // Validate that Airtable was actually updated
      if (!result.airtableUpdated) {
        throw new Error('Airtable update failed - please contact support');
      }
      
      setSuccess(true);
      toast.success('🎉 Booking confirmed! Your quote has been accepted.');
      
      // Redirect to success page after 3 seconds
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
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-neutral-800 border-neutral-700">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
              <p className="text-gray-300">Loading booking details...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Error state
  if (error || !leadData) {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl border-red-900 bg-neutral-800">
          <CardHeader>
            <div className="flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-500" />
              <CardTitle className="text-red-400">Booking Not Found</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
              <p className="text-red-300 text-sm mb-2 font-semibold">{error || 'Could not load booking information'}</p>
              
              {error?.includes('Authentication') && (
                <div className="mt-4 pt-4 border-t border-red-800 space-y-3">
                  <p className="text-orange-300 text-sm font-semibold">⚠️ Configuration Issue - Environment Variables Missing</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    The Vercel API is missing required Airtable credentials. Please add these environment variables in Vercel:
                  </p>
                  <div className="bg-neutral-900 rounded p-3 font-mono text-xs text-gray-300 space-y-1">
                    <div>• <span className="text-orange-400">AIRTABLE_API_KEY</span> (Personal Access Token)</div>
                    <div>• <span className="text-orange-400">AIRTABLE_BASE_ID</span> (Your base ID)</div>
                    <div>• <span className="text-orange-400">AIRTABLE_TABLE_NAME</span> = "Leads"</div>
                  </div>
                  <p className="text-gray-500 text-xs">
                    📖 See <span className="text-orange-400 font-mono">/VERCEL_CONFIG_REQUIRED.md</span> for complete setup instructions.
                  </p>
                  <div className="pt-2">
                    <p className="text-gray-400 text-xs">Meanwhile, contact us directly:</p>
                    <div className="flex gap-4 mt-2">
                      <a href="tel:4809198088" className="text-orange-400 hover:text-orange-300 text-sm">
                        📞 (480) 919-8088
                      </a>
                      <a href="mailto:dispatch@flfreightco.com" className="text-orange-400 hover:text-orange-300 text-sm">
                        📧 dispatch@flfreightco.com
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                Record ID: <span className="text-orange-400 font-mono">{recordId}</span>
              </p>
              <p className="text-gray-500 text-xs">
                This ID can be used to look up your quote in Airtable.
              </p>
            </div>
            
            <Button 
              onClick={() => navigate('/')} 
              className="w-full bg-orange-600 hover:bg-orange-700 text-white"
            >
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Success state
  if (success) {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-green-600 bg-neutral-800">
          <CardHeader>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
              <div>
                <CardTitle className="text-green-400">Booking Confirmed!</CardTitle>
                <CardDescription className="text-gray-400">We've received your confirmation</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-900/20 border border-green-700 rounded-lg p-4">
              <p className="text-sm text-green-300">
                ✅ Airtable updated to "Booked"<br />
                ✅ Deposit invoice email sent automatically
              </p>
            </div>
            <p className="text-gray-300">
              Our team will contact you shortly to finalize the details.
            </p>
            <p className="text-sm text-gray-500">
              Redirecting to home page...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Main confirmation form
  return (
    <div className="min-h-screen bg-neutral-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Truck className="w-10 h-10 text-orange-500" />
            <h1 className="text-4xl font-bold text-white">Freedom Line Freight Express</h1>
          </div>
          <p className="text-xl text-gray-300">Confirm Your Booking</p>
        </div>

        {/* Main Card */}
        <Card className="border-2 border-orange-600 shadow-2xl bg-neutral-800">
          <CardHeader className="bg-gradient-to-r from-black via-neutral-900 to-orange-900 text-white rounded-t-lg border-b-2 border-orange-600">
            <CardTitle className="text-2xl">Review Your Shipment Details</CardTitle>
            <CardDescription className="text-gray-300">
              Please review the information below and confirm your booking
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-6 space-y-6">
            {/* Customer Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Package className="w-5 h-5 text-orange-500" />
                Customer Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-neutral-700/50 rounded-lg p-4 border border-neutral-600">
                <div>
                  <p className="text-sm text-gray-400">Name</p>
                  <p className="font-semibold text-white">{leadData.L_FullName || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-semibold text-white">{leadData.L_Email || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-semibold text-white">{leadData.L_Phone || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Commodity</p>
                  <p className="font-semibold text-white">{leadData.L_Commodity || 'N/A'}</p>
                </div>
              </div>
            </div>

            {/* Shipment Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                Shipment Details
              </h3>
              <div className="space-y-3 bg-neutral-700/50 rounded-lg p-4 border border-neutral-600">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 mt-1.5"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Pickup Location</p>
                    <p className="font-semibold text-white">{leadData.Q_PickupLocation || 'N/A'}</p>
                  </div>
                </div>
                <div className="border-l-2 border-orange-500 ml-1.5 h-6"></div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-orange-500 mt-1.5"></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">Dropoff Location</p>
                    <p className="font-semibold text-white">{leadData.Q_DeliveryLocation || 'N/A'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-orange-500" />
                Pricing
              </h3>
              <div className="bg-orange-900/20 border-2 border-orange-600 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-300">Total Quote Amount</p>
                  <p className="text-2xl font-bold text-orange-400">
                    ${leadData.Q_FinalPrice?.toFixed(2) || '0.00'}
                  </p>
                </div>
                {leadData.L_Deposit_Amount && leadData.L_Deposit_Amount > 0 && (
                  <div className="flex justify-between items-center text-sm">
                    <p className="text-gray-400">Deposit Required</p>
                    <p className="font-semibold text-white">
                      ${leadData.L_Deposit_Amount.toFixed(2)}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Pickup Date */}
            {leadData.Q_PickupDate && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  Pickup Date
                </h3>
                <div className="bg-neutral-700/50 rounded-lg p-4 border border-neutral-600">
                  <p className="font-semibold text-white">{leadData.Q_PickupDate}</p>
                </div>
              </div>
            )}

            {/* Terms and Conditions */}
            <div className="border-t-2 border-neutral-700 pt-6">
              <div className="bg-orange-900/20 border-2 border-orange-700 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-orange-400 mb-2">Important Notice</h4>
                <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
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
                  className="mt-1 border-orange-500 data-[state=checked]:bg-orange-600 data-[state=checked]:border-orange-600"
                />
                <label htmlFor="agreement" className="text-sm text-gray-300 cursor-pointer">
                  I have reviewed all the details above and agree to proceed with this booking. I understand that 
                  Freedom Line Freight Express will contact me to finalize the shipment arrangements.
                </label>
              </div>

              <Button
                onClick={handleConfirmBooking}
                disabled={!agreementChecked || submitting}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-6 text-lg font-semibold shadow-lg"
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
        <div className="text-center mt-8 text-sm text-gray-400">
          <p>Questions? Contact us at <a href="mailto:quotes@flfreightco.com" className="text-orange-500 hover:text-orange-400 underline">quotes@flfreightco.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBooking;