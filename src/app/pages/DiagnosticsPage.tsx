import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Loader2, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

const VERCEL_API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-app.vercel.app/api/confirm-booking'
  : 'http://localhost:3000/api/confirm-booking';

export function DiagnosticsPage() {
  const [recordId, setRecordId] = useState('');
  const [testing, setTesting] = useState(false);
  const [results, setResults] = useState<any>(null);

  const runDiagnostics = async () => {
    if (!recordId) {
      alert('Please enter a Record ID');
      return;
    }

    setTesting(true);
    const diagnosticResults: any = {
      timestamp: new Date().toISOString(),
      recordId,
      steps: []
    };

    try {
      // STEP 1: Fetch current record data
      console.log('🔍 STEP 1: Fetching current record data...');
      diagnosticResults.steps.push({
        step: 1,
        name: 'Fetch Current Data',
        status: 'running'
      });
      setResults({ ...diagnosticResults });

      const getResponse = await fetch(`${VERCEL_API_URL}?recordId=${recordId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });

      if (!getResponse.ok) {
        throw new Error(`GET request failed: ${getResponse.status}`);
      }

      const currentData = await getResponse.json();
      diagnosticResults.steps[0].status = 'success';
      diagnosticResults.steps[0].data = currentData;
      diagnosticResults.currentStatus = currentData.L_Status;
      console.log('✅ Current status:', currentData.L_Status);
      setResults({ ...diagnosticResults });

      // Wait 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));

      // STEP 2: Send confirmation request
      console.log('🔍 STEP 2: Sending booking confirmation...');
      diagnosticResults.steps.push({
        step: 2,
        name: 'Send Confirmation Request',
        status: 'running'
      });
      setResults({ ...diagnosticResults });

      const postResponse = await fetch(`${VERCEL_API_URL}?recordId=${recordId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'confirm',
          customerName: currentData.L_Customer_Name,
          customerEmail: currentData.L_Customer_Email,
          customerPhone: currentData.L_Customer_Phone,
          pickupLocation: currentData.L_Pickup_Location,
          dropoffLocation: currentData.L_Dropoff_Location,
          totalAmount: currentData.L_Total_Quote_Amount,
        })
      });

      if (!postResponse.ok) {
        const errorData = await postResponse.json();
        throw new Error(`POST request failed: ${JSON.stringify(errorData)}`);
      }

      const confirmResult = await postResponse.json();
      diagnosticResults.steps[1].status = 'success';
      diagnosticResults.steps[1].data = confirmResult;
      console.log('✅ Confirmation response:', confirmResult);
      setResults({ ...diagnosticResults });

      // Wait 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));

      // STEP 3: Verify Airtable was updated
      console.log('🔍 STEP 3: Verifying Airtable update...');
      diagnosticResults.steps.push({
        step: 3,
        name: 'Verify Airtable Update',
        status: 'running'
      });
      setResults({ ...diagnosticResults });

      const verifyResponse = await fetch(`${VERCEL_API_URL}?recordId=${recordId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });

      if (!verifyResponse.ok) {
        throw new Error(`Verification GET failed: ${verifyResponse.status}`);
      }

      const updatedData = await verifyResponse.json();
      diagnosticResults.steps[2].status = 'success';
      diagnosticResults.steps[2].data = updatedData;
      diagnosticResults.newStatus = updatedData.L_Status;
      diagnosticResults.agreementAccepted = updatedData['Agreement Accepted'];
      console.log('✅ New status:', updatedData.L_Status);
      setResults({ ...diagnosticResults });

      // STEP 4: Validate the update
      console.log('🔍 STEP 4: Validating update...');
      diagnosticResults.steps.push({
        step: 4,
        name: 'Validate Update',
        status: 'running'
      });
      setResults({ ...diagnosticResults });

      const statusChanged = diagnosticResults.currentStatus !== diagnosticResults.newStatus;
      const isQuoteAccepted = diagnosticResults.newStatus === 'Quote Accepted';
      const hasAgreementTimestamp = !!diagnosticResults.agreementAccepted;

      diagnosticResults.steps[3].status = 'success';
      diagnosticResults.steps[3].validation = {
        statusChanged,
        isQuoteAccepted,
        hasAgreementTimestamp,
        allPassed: statusChanged && isQuoteAccepted && hasAgreementTimestamp
      };

      console.log('✅ Validation complete');
      diagnosticResults.overallResult = diagnosticResults.steps[3].validation.allPassed ? 'PASS' : 'FAIL';
      setResults({ ...diagnosticResults });

    } catch (error) {
      console.error('❌ Diagnostic error:', error);
      diagnosticResults.error = error instanceof Error ? error.message : 'Unknown error';
      diagnosticResults.overallResult = 'ERROR';
      setResults({ ...diagnosticResults });
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">🔍 Booking Workflow Diagnostics</CardTitle>
            <CardDescription>
              Test whether the Confirm Your Booking button actually updates Airtable
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <Input
                placeholder="Enter Airtable Record ID (e.g., recABC123456789)"
                value={recordId}
                onChange={(e) => setRecordId(e.target.value)}
                disabled={testing}
              />
              <Button 
                onClick={runDiagnostics} 
                disabled={testing || !recordId}
                className="min-w-[150px]"
              >
                {testing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Testing...
                  </>
                ) : (
                  'Run Diagnostics'
                )}
              </Button>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
              <p className="font-semibold text-blue-900 mb-2">What This Tests:</p>
              <ul className="list-disc list-inside text-blue-800 space-y-1">
                <li>Can we fetch the current record from Airtable?</li>
                <li>Does the confirm request actually reach Airtable?</li>
                <li>Does L_Status change to "Quote Accepted"?</li>
                <li>Is the Agreement Accepted timestamp set?</li>
                <li>Can we verify the update actually happened?</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Results Display */}
        {results && (
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Diagnostic Results</CardTitle>
                {results.overallResult === 'PASS' && (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="w-6 h-6" />
                    <span className="font-bold">PASS</span>
                  </div>
                )}
                {results.overallResult === 'FAIL' && (
                  <div className="flex items-center gap-2 text-red-600">
                    <XCircle className="w-6 h-6" />
                    <span className="font-bold">FAIL</span>
                  </div>
                )}
                {results.overallResult === 'ERROR' && (
                  <div className="flex items-center gap-2 text-red-600">
                    <XCircle className="w-6 h-6" />
                    <span className="font-bold">ERROR</span>
                  </div>
                )}
              </div>
              <CardDescription className="font-mono text-xs">
                Test Run: {new Date(results.timestamp).toLocaleString()}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Steps */}
              {results.steps.map((step: any, index: number) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    {step.status === 'running' && (
                      <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
                    )}
                    {step.status === 'success' && (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    )}
                    {step.status === 'error' && (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                    <h3 className="font-semibold">
                      Step {step.step}: {step.name}
                    </h3>
                  </div>

                  {step.data && (
                    <div className="bg-gray-50 rounded p-3 mt-2">
                      <pre className="text-xs overflow-auto">
                        {JSON.stringify(step.data, null, 2)}
                      </pre>
                    </div>
                  )}

                  {step.validation && (
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2">
                        {step.validation.statusChanged ? (
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-600" />
                        )}
                        <span className="text-sm">Status changed: {step.validation.statusChanged ? 'YES' : 'NO'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {step.validation.isQuoteAccepted ? (
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-600" />
                        )}
                        <span className="text-sm">Is "Quote Accepted": {step.validation.isQuoteAccepted ? 'YES' : 'NO'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {step.validation.hasAgreementTimestamp ? (
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-600" />
                        )}
                        <span className="text-sm">Agreement timestamp: {step.validation.hasAgreementTimestamp ? 'YES' : 'NO'}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Summary */}
              {results.overallResult && (
                <div className={`border-2 rounded-lg p-4 ${
                  results.overallResult === 'PASS' 
                    ? 'bg-green-50 border-green-300' 
                    : 'bg-red-50 border-red-300'
                }`}>
                  <h3 className="font-bold text-lg mb-2">Summary</h3>
                  {results.overallResult === 'PASS' ? (
                    <div className="space-y-2">
                      <p className="text-green-800">
                        ✅ <strong>AIRTABLE CONNECTION VERIFIED!</strong>
                      </p>
                      <p className="text-sm text-green-700">
                        • Status changed from "{results.currentStatus}" to "{results.newStatus}"<br />
                        • Agreement Accepted: {results.agreementAccepted}<br />
                        • The button IS connected to Airtable!
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-red-800">
                        ❌ <strong>ISSUE DETECTED</strong>
                      </p>
                      {results.error && (
                        <p className="text-sm text-red-700">
                          Error: {results.error}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>How to Use</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                1
              </div>
              <p>Get a Record ID from your Airtable "Leads" table (e.g., recABC123456789)</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                2
              </div>
              <p>Paste it into the input above</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                3
              </div>
              <p>Click "Run Diagnostics" and watch the real-time test</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                4
              </div>
              <p>Check if Airtable was actually updated (open Airtable and verify L_Status changed)</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 mt-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-yellow-900">Note:</p>
                  <p className="text-yellow-800 text-xs mt-1">
                    This test will actually update the record in Airtable. Use a test record, not a real customer record!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
