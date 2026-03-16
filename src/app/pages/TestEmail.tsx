import { useState } from 'react';
import { Mail, CheckCircle, XCircle, Loader2, Send, AlertTriangle } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

export function TestEmail() {
  const [testing, setTesting] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [invoiceType, setInvoiceType] = useState<'deposit' | 'balance' | 'receipt'>('deposit');
  const [email, setEmail] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [generatingPdf, setGeneratingPdf] = useState(false);

  const generateTestInvoice = async () => {
    setGeneratingPdf(true);
    setPdfUrl('');
    setError(null);
    setResult(null);

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
            shipmentCode: 'TEST-EMAIL-001',
            customerName: 'Test Customer',
            customerEmail: email || 'test@email.com',
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
      setPdfUrl(data.pdfUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'PDF generation failed');
    } finally {
      setGeneratingPdf(false);
    }
  };

  const testEmail = async () => {
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!pdfUrl) {
      setError('Please generate an invoice PDF first');
      return;
    }

    setTesting(true);
    setResult(null);
    setError(null);

    try {
      const paymentData = invoiceType === 'deposit' 
        ? { depositAmount: 300, balanceDue: 700 }
        : invoiceType === 'balance'
        ? { depositAmount: 300, balanceDue: 700 }
        : { depositAmount: 300, balanceDue: 0 };

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-6e6166b5/send-invoice`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({
            customerEmail: email,
            customerName: 'Test Customer',
            shipmentCode: 'TEST-EMAIL-001',
            pdfUrl: pdfUrl,
            invoiceType: invoiceType,
            ...paymentData
          })
        }
      );

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || data.message || `HTTP ${response.status}`);
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Email test failed');
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
            <Mail className="w-6 h-6 text-blue-700" />
            <h1 className="text-2xl font-bold text-gray-900">
              Test Email Sending
            </h1>
          </div>
          <p className="text-gray-600">
            Generate an invoice PDF and send it to your email to verify the email system is working correctly.
          </p>
        </div>

        {/* Email Configuration Warning */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-900 mb-2">Email Service Setup Required</h3>
              <p className="text-sm text-amber-800 mb-3">
                To send emails, you need to add a <code className="bg-amber-100 px-2 py-1 rounded">RESEND_API_KEY</code> environment variable in your Supabase dashboard.
              </p>
              <ol className="text-sm text-amber-800 space-y-2 list-decimal list-inside">
                <li>Sign up for a free account at <a href="https://resend.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold">resend.com</a></li>
                <li>Generate an API key from your Resend dashboard</li>
                <li>Go to your Supabase project → Settings → Edge Functions → Add secret</li>
                <li>Add: <code className="bg-amber-100 px-1 rounded">RESEND_API_KEY</code> = your Resend API key</li>
                <li>Redeploy the function: <code className="bg-amber-100 px-2 py-1 rounded text-xs">supabase functions deploy make-server-6e6166b5</code></li>
              </ol>
            </div>
          </div>
        </div>

        {/* Step 1: Select Invoice Type */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-700 text-white text-sm">1</span>
            Select Invoice Type
          </h2>
          
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

        {/* Step 2: Enter Email */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-700 text-white text-sm">2</span>
            Enter Your Email Address
          </h2>
          
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-700 focus:outline-none text-gray-900"
          />
          <p className="text-sm text-gray-600 mt-2">
            The invoice will be sent to this email address with the PDF attached.
          </p>
        </div>

        {/* Step 3: Generate PDF */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-700 text-white text-sm">3</span>
            Generate Invoice PDF
          </h2>
          
          <button
            onClick={generateTestInvoice}
            disabled={generatingPdf}
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {generatingPdf ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating PDF...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Generate Test Invoice
              </>
            )}
          </button>

          {pdfUrl && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm font-semibold text-green-900 mb-2">✅ PDF Generated Successfully!</p>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-700 hover:text-blue-800 underline break-all"
              >
                {pdfUrl}
              </a>
            </div>
          )}
        </div>

        {/* Step 4: Send Email */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-700 text-white text-sm">4</span>
            Send Test Email
          </h2>
          
          <button
            onClick={testEmail}
            disabled={testing || !email || !pdfUrl}
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {testing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending Email...
              </>
            ) : (
              <>
                <Mail className="w-5 h-5" />
                Send Invoice Email
              </>
            )}
          </button>

          {!email && (
            <p className="mt-3 text-sm text-amber-600">⚠️ Please enter your email address first</p>
          )}
          {!pdfUrl && email && (
            <p className="mt-3 text-sm text-amber-600">⚠️ Please generate an invoice PDF first</p>
          )}
        </div>

        {/* Success Result */}
        {result && result.success && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-6 h-6 text-green-700" />
              <h2 className="font-bold text-green-900 text-lg">✅ Email Sent Successfully!</h2>
            </div>
            
            <div className="mb-4">
              <p className="text-green-800 font-semibold mb-2">Email Details:</p>
              <ul className="text-sm text-green-800 space-y-1">
                <li>📧 Sent to: <strong>{result.sentTo}</strong></li>
                <li>📄 Invoice type: <strong>{invoiceType.charAt(0).toUpperCase() + invoiceType.slice(1)}</strong></li>
                {result.emailId && <li>🆔 Email ID: <strong>{result.emailId}</strong></li>}
              </ul>
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
                <li>✅ Email service is configured and working</li>
                <li>✅ Invoice PDF was attached successfully</li>
                <li>✅ Email was sent to {email}</li>
                <li>✅ Check your inbox (and spam folder) for the email</li>
                <li>✅ Your Airtable automation can now send emails!</li>
              </ul>
            </div>
          </div>
        )}

        {/* Configuration Warning Result */}
        {result && !result.success && result.emailPreview && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-700" />
              <h2 className="font-bold text-amber-900 text-lg">⚠️ Email Service Not Configured</h2>
            </div>
            
            <div className="mb-4">
              <p className="text-amber-800 mb-3">{result.message}</p>
              <p className="text-sm text-amber-700 mb-2">Email was prepared but not sent:</p>
              <ul className="text-sm text-amber-800 space-y-1">
                <li>📧 To: <strong>{result.emailPreview.to}</strong></li>
                <li>📄 Subject: <strong>{result.emailPreview.subject}</strong></li>
                <li>📎 PDF Attached: <strong>Yes</strong></li>
              </ul>
            </div>

            <div className="bg-white rounded border border-amber-300 p-4">
              <p className="text-sm font-semibold text-amber-900 mb-2">📝 Next Steps:</p>
              <ol className="text-sm text-amber-800 space-y-2 list-decimal list-inside">
                <li>Sign up at <a href="https://resend.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold">resend.com</a></li>
                <li>Get your API key from Resend dashboard</li>
                <li>Add <code className="bg-amber-100 px-1 rounded">RESEND_API_KEY</code> to Supabase environment variables</li>
                <li>Redeploy the function</li>
                <li>Try sending the email again</li>
              </ol>
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
                <li>• Verify email address is valid</li>
                <li>• Check that PDF was generated successfully</li>
                <li>• Make sure RESEND_API_KEY is configured in Supabase</li>
                <li>• Check function logs for detailed error information</li>
              </ul>
            </div>
          </div>
        )}

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-blue-900 mb-3">📧 What Gets Sent in the Email?</h3>
          <ul className="text-sm text-blue-800 space-y-2">
            <li>✅ <strong>Professional HTML email</strong> with your company branding</li>
            <li>✅ <strong>Invoice PDF attached</strong> as <code className="bg-blue-100 px-1 rounded">FLF-Invoice-{'{'}shipmentCode{'}'}.pdf</code></li>
            <li>✅ <strong>Download link</strong> to access the PDF online</li>
            <li>✅ <strong>Payment information</strong> customized by invoice type (deposit/balance/receipt)</li>
            <li>✅ <strong>Contact information</strong> for customer support</li>
            <li>✅ <strong>Mobile-friendly</strong> design that looks great on all devices</li>
          </ul>
          
          <div className="mt-4 pt-4 border-t border-blue-300">
            <p className="text-sm font-semibold text-blue-900 mb-2">Email Subject Examples:</p>
            <ul className="text-xs text-blue-700 space-y-1">
              <li><strong>Deposit:</strong> "Deposit Invoice for Shipment TEST-001 - Freedom Line Freight"</li>
              <li><strong>Balance:</strong> "Balance Due Invoice for Shipment TEST-001 - Freedom Line Freight"</li>
              <li><strong>Receipt:</strong> "Payment Receipt for Shipment TEST-001 - Freedom Line Freight"</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
