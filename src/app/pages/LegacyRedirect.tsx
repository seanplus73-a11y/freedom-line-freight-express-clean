import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { Loader2 } from 'lucide-react';

/**
 * LegacyRedirect Component
 * 
 * Handles old /accept?quoteId=... links from Airtable automation
 * Redirects to new /confirm-booking/{recordId} format
 */
export function LegacyRedirect() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Get the old quoteId parameter
    const quoteId = searchParams.get('quoteId');
    
    console.log('🔄 Legacy redirect triggered');
    console.log('📋 Old quoteId:', quoteId);
    
    if (quoteId) {
      // Redirect to new format
      const newPath = `/confirm-booking/${quoteId}`;
      console.log('✅ Redirecting to:', newPath);
      navigate(newPath, { replace: true });
    } else {
      // No quoteId found, redirect to home
      console.warn('⚠️ No quoteId found in URL, redirecting to home');
      navigate('/', { replace: true });
    }
  }, [searchParams, navigate]);

  // Show loading state while redirecting
  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-orange-500 animate-spin mx-auto mb-4" />
        <p className="text-gray-300 text-lg">Redirecting to booking confirmation...</p>
        <p className="text-gray-500 text-sm mt-2">Freedom Line Freight Express</p>
      </div>
    </div>
  );
}

export default LegacyRedirect;