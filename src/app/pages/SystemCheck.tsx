import { useState } from 'react';
import { CheckCircle2, XCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

/**
 * SystemCheck Component
 * Quick diagnostic page to verify API connectivity
 */
export function SystemCheck() {
  const [checking, setChecking] = useState(false);
  const [results, setResults] = useState<{
    apiReachable: boolean | null;
    airtableConfigured: boolean | null;
    error: string | null;
  }>({
    apiReachable: null,
    airtableConfigured: null,
    error: null,
  });

  const runCheck = async () => {
    setChecking(true);
    setResults({ apiReachable: null, airtableConfigured: null, error: null });

    try {
      // Test if the API endpoint exists
      const response = await fetch('/api/confirm-booking?recordId=test', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const apiReachable = response.status !== 404;

      let airtableConfigured = false;
      let errorMessage = null;

      if (apiReachable) {
        // Check if Airtable is configured
        const data = await response.json();
        
        if (response.ok) {
          airtableConfigured = true;
        } else if (data.error) {
          errorMessage = data.error;
          airtableConfigured = !data.error.toLowerCase().includes('authentication') &&
                               !data.error.toLowerCase().includes('unauthorized');
        }
      }

      setResults({
        apiReachable,
        airtableConfigured,
        error: errorMessage,
      });
    } catch (err) {
      setResults({
        apiReachable: false,
        airtableConfigured: false,
        error: err instanceof Error ? err.message : 'Unknown error',
      });
    } finally {
      setChecking(false);
    }
  };

  const getStatusIcon = (status: boolean | null) => {
    if (status === null) return <AlertCircle className="w-5 h-5 text-gray-400" />;
    if (status) return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    return <XCircle className="w-5 h-5 text-red-600" />;
  };

  const getStatusText = (status: boolean | null) => {
    if (status === null) return 'Not checked';
    if (status) return 'OK';
    return 'Failed';
  };

  const getStatusColor = (status: boolean | null) => {
    if (status === null) return 'text-gray-600';
    if (status) return 'text-green-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-neutral-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="border-orange-900 bg-neutral-800">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-400">System Status Check</CardTitle>
            <CardDescription className="text-gray-400">
              Verify that the booking system is properly configured
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Run Check Button */}
            <Button
              onClick={runCheck}
              disabled={checking}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white"
            >
              {checking ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Checking...
                </>
              ) : (
                'Run System Check'
              )}
            </Button>

            {/* Results */}
            {(results.apiReachable !== null || results.airtableConfigured !== null) && (
              <div className="space-y-4">
                <div className="border-t border-neutral-700 pt-4">
                  <h3 className="text-lg font-semibold text-white mb-3">Results</h3>
                  
                  {/* API Reachable */}
                  <div className="flex items-center justify-between p-3 bg-neutral-700 rounded-lg mb-2">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(results.apiReachable)}
                      <span className="text-gray-300">API Endpoint</span>
                    </div>
                    <span className={`font-semibold ${getStatusColor(results.apiReachable)}`}>
                      {getStatusText(results.apiReachable)}
                    </span>
                  </div>

                  {/* Airtable Configured */}
                  <div className="flex items-center justify-between p-3 bg-neutral-700 rounded-lg mb-2">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(results.airtableConfigured)}
                      <span className="text-gray-300">Airtable Connection</span>
                    </div>
                    <span className={`font-semibold ${getStatusColor(results.airtableConfigured)}`}>
                      {getStatusText(results.airtableConfigured)}
                    </span>
                  </div>
                </div>

                {/* Error Details */}
                {results.error && (
                  <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
                    <p className="text-red-300 text-sm font-semibold mb-1">Error Details:</p>
                    <p className="text-gray-400 text-xs font-mono break-all">{results.error}</p>
                  </div>
                )}

                {/* Success Message */}
                {results.apiReachable && results.airtableConfigured && (
                  <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
                    <p className="text-green-300 font-semibold">✅ All systems operational!</p>
                    <p className="text-gray-400 text-sm mt-1">
                      The booking confirmation system is properly configured and ready to use.
                    </p>
                  </div>
                )}

                {/* Configuration Help */}
                {(!results.apiReachable || !results.airtableConfigured) && (
                  <div className="bg-orange-900/20 border border-orange-800 rounded-lg p-4">
                    <p className="text-orange-300 font-semibold mb-2">⚠️ Configuration Required</p>
                    <p className="text-gray-400 text-sm mb-3">
                      The system needs to be configured with Airtable credentials. 
                      See <code className="text-orange-400 bg-neutral-700 px-1 py-0.5 rounded">/VERCEL_ENV_SETUP.md</code> for instructions.
                    </p>
                    <div className="space-y-1 text-xs text-gray-500">
                      <p>Required environment variables:</p>
                      <ul className="list-disc list-inside ml-2">
                        <li>AIRTABLE_API_KEY</li>
                        <li>AIRTABLE_BASE_ID</li>
                        <li>AIRTABLE_TABLE_NAME</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Information */}
            <div className="text-center pt-4 border-t border-neutral-700">
              <p className="text-gray-500 text-sm">
                This page helps diagnose booking system configuration issues.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default SystemCheck;
