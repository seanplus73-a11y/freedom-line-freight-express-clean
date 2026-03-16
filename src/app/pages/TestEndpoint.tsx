import { useState } from 'react';
import { FileText, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

export function TestEndpoint() {
  const [testing, setTesting] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [invoiceType, setInvoiceType] = useState<'deposit' | 'balance' | 'receipt'>('deposit');

  const testEndpoint = async () => {
    setTesting(true);
    setResult(null);
    setError(null);

    try {
      // Adjust payment data based on invoice type
      const paymentData = invoiceType === 'deposit' 
        ? { depositPaid: 300, finalPaymentPaid: 0, remainingBalance: 700, paymentStatus: 'Pending' }
        : invoiceType === 'balance'
        ? { depositPaid: 300, finalPaymentPaid: 0, remainingBalance: 700, paymentStatus: 'Partial Payment' }
        : { depositPaid: 300, finalPaymentPaid: 700, remainingBalance: 0, paymentStatus: 'Paid in Full' };

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-6e6166b5/generate-invoice`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({
            shipmentCode: 'TEST-001',
            customerName: 'Test Customer',
            customerEmail: 'test@email.com',
            customerPhone: '(555) 000-0000',
            vehicleYear: '2022',
            vehicleMake: 'Toyota',
            vehicleModel: 'Camry',
            vin: '1HGBH41JXMN109186',
            pickupAddress: 'Phoenix, AZ',
            deliveryAddress: 'Los Angeles, CA',
            pickupDate: '3/15/2026',
            deliveryDate: '3/18/2026',
            totalQuoteAmount: 1000,
            ...paymentData,
            invoiceType: invoiceType,
            paymentMethod: 'Credit Card',
            datePaid: invoiceType === 'receipt' ? '3/18/2026' : ''
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Test failed');
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-6 h-6 text-blue-700" />
            <h1 className="text-2xl font-bold text-gray-900">
              Test Invoice Generation Endpoint
            </h1>
          </div>
          <p className="text-gray-600">
            Test the <code className="bg-gray-100 px-2 py-1 rounded text-sm">/generate-invoice</code> endpoint with proper authorization
          </p>
        </div>

        {/* Endpoint Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h2 className="font-bold text-blue-900 mb-3">Endpoint Details</h2>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-semibold text-blue-800">Method:</span>{' '}
              <code className="bg-blue-100 px-2 py-1 rounded">POST</code>
            </div>
            <div>
              <span className="font-semibold text-blue-800">URL:</span>{' '}
              <code className="bg-blue-100 px-2 py-1 rounded text-xs break-all">
                https://{projectId}.supabase.co/functions/v1/make-server-6e6166b5/generate-invoice
              </code>
            </div>
            <div>
              <span className="font-semibold text-blue-800">Auth:</span>{' '}
              <code className="bg-blue-100 px-2 py-1 rounded text-xs">
                Bearer {publicAnonKey.substring(0, 20)}...
              </code>
            </div>
          </div>
        </div>

        {/* Test Button */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="font-bold text-gray-900 mb-4">Run Test</h2>
          
          {/* Invoice Type Selector */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Invoice Type to Test:
            </label>
            <div className="flex gap-3">
              <button
                onClick={() => setInvoiceType('deposit')}
                className={`flex-1 px-4 py-3 rounded-lg border-2 font-semibold transition-all ${
                  invoiceType === 'deposit'
                    ? 'border-blue-700 bg-blue-50 text-blue-900'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                }`}
              >
                <div className="text-sm">Deposit Invoice</div>
                <div className="text-xs mt-1 opacity-75">Requesting deposit payment</div>
              </button>
              <button
                onClick={() => setInvoiceType('balance')}
                className={`flex-1 px-4 py-3 rounded-lg border-2 font-semibold transition-all ${
                  invoiceType === 'balance'
                    ? 'border-blue-700 bg-blue-50 text-blue-900'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                }`}
              >
                <div className="text-sm">Balance Invoice</div>
                <div className="text-xs mt-1 opacity-75">Requesting final payment</div>
              </button>
              <button
                onClick={() => setInvoiceType('receipt')}
                className={`flex-1 px-4 py-3 rounded-lg border-2 font-semibold transition-all ${
                  invoiceType === 'receipt'
                    ? 'border-green-700 bg-green-50 text-green-900'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                }`}
              >
                <div className="text-sm">Paid Receipt</div>
                <div className="text-xs mt-1 opacity-75">Payment complete</div>
              </button>
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            This will send a POST request with test invoice data and proper authorization headers.
          </p>
          <button
            onClick={testEndpoint}
            disabled={testing}
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {testing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating {invoiceType.charAt(0).toUpperCase() + invoiceType.slice(1)} Invoice...
              </>
            ) : (
              <>
                <FileText className="w-5 h-5" />
                Generate {invoiceType.charAt(0).toUpperCase() + invoiceType.slice(1)} Invoice
              </>
            )}
          </button>
        </div>

        {/* Success Result */}
        {result && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-6 h-6 text-green-700" />
              <h2 className="font-bold text-green-900 text-lg">✅ Success! Endpoint is Working</h2>
            </div>
            
            <div className="mb-4">
              <p className="text-green-800 font-semibold mb-2">PDF URL Generated:</p>
              <a
                href={result.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 underline break-all text-sm"
              >
                {result.pdfUrl}
              </a>
            </div>

            <div className="bg-white rounded border border-green-300 p-4">
              <p className="text-xs font-semibold text-gray-700 mb-2">Full Response:</p>
              <pre className="text-xs text-gray-800 overflow-x-auto">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>

            <div className="mt-4 p-4 bg-green-100 rounded-lg">
              <p className="font-semibold text-green-900 mb-2">🎉 What This Means:</p>
              <ul className="text-sm text-green-800 space-y-1">
                <li>✅ The function is deployed and running</li>
                <li>✅ The /generate-invoice route exists</li>
                <li>✅ Authorization is working correctly</li>
                <li>✅ PDFs are being generated and stored</li>
                <li>✅ Your Airtable automation will work!</li>
              </ul>
            </div>
          </div>
        )}

        {/* Error Result */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-6 h-6 text-red-700" />
              <h2 className="font-bold text-red-900 text-lg">❌ Test Failed</h2>
            </div>
            
            <div className="bg-white rounded border border-red-300 p-4 mb-4">
              <p className="text-sm font-semibold text-red-900 mb-2">Error Message:</p>
              <p className="text-sm text-red-800">{error}</p>
            </div>

            <div className="bg-red-100 rounded-lg p-4">
              <p className="font-semibold text-red-900 mb-2">Troubleshooting:</p>
              <ul className="text-sm text-red-800 space-y-2">
                <li>• Check that the function is deployed: <code className="bg-red-200 px-1 rounded">supabase functions deploy make-server-6e6166b5</code></li>
                <li>• Verify environment variables are set in Supabase dashboard</li>
                <li>• Check the function logs for detailed error information</li>
              </ul>
            </div>
          </div>
        )}

        {/* Test Data */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="font-bold text-gray-900 mb-3">Test Data Being Sent</h2>
          <pre className="bg-gray-100 p-4 rounded text-xs overflow-x-auto">
{`{
  "shipmentCode": "TEST-001",
  "customerName": "Test Customer",
  "customerEmail": "test@email.com",
  "customerPhone": "(555) 000-0000",
  "vehicleYear": "2022",
  "vehicleMake": "Toyota",
  "vehicleModel": "Camry",
  "vin": "1HGBH41JXMN109186",
  "pickupAddress": "Phoenix, AZ",
  "deliveryAddress": "Los Angeles, CA",
  "pickupDate": "3/15/2026",
  "deliveryDate": "3/18/2026",
  "totalQuoteAmount": 1000,
  "depositPaid": 300,
  "finalPaymentPaid": 0,
  "remainingBalance": 700,
  "invoiceType": "deposit",
  "paymentStatus": "Pending",
  "paymentMethod": "Credit Card"
}`}
          </pre>
          
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm font-semibold text-blue-900 mb-2">✨ What's New in This Update:</p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>✅ <strong>NEW: Paid Receipt</strong> - Third invoice type for fully paid shipments</li>
              <li>✅ <strong>Title Updated:</strong> "PAID RECEIPT" badge (was "Payment Receipt")</li>
              <li>✅ <strong>Date Paid:</strong> Shows payment completion date on receipts</li>
              <li>✅ <strong>Payment Status:</strong> Displays "Paid in Full" on receipts</li>
              <li>✅ <strong>Complete Payment Breakdown:</strong> Shows deposit + final payment + total paid</li>
              <li>✅ <strong>Footer Fix:</strong> All 3 footer lines fully visible</li>
              <li>✅ <strong>Payment Logic:</strong> "Deposit Required" vs "Deposit Received" based on type</li>
            </ul>
            
            <div className="mt-3 pt-3 border-t border-blue-300">
              <p className="text-sm font-semibold text-blue-900 mb-1">📋 Three Invoice Types:</p>
              <ul className="text-xs text-blue-700 space-y-1">
                <li><strong>Deposit:</strong> Request initial payment → "Deposit Required: $300"</li>
                <li><strong>Balance:</strong> Request final payment → "Deposit Received: - $300"</li>
                <li><strong>Receipt:</strong> Confirm full payment → "Total Paid: $1,000" + Date Paid</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}