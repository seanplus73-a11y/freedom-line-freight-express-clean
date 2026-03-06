import { useState } from "react";
import { CheckCircle, Send, AlertCircle } from "lucide-react";

export default function AcceptQuote() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleConfirm = async () => {
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/accept-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to confirm booking');
      }

      console.log('Quote accepted successfully');
      setIsSubmitted(true);

    } catch (err: any) {
      console.error('Quote acceptance error:', err);
      setError(err.message || 'Failed to confirm booking. Please contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-8 md:p-12">
          {/* Logo/Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Freedom Line <span className="text-orange-500">Freight Express</span>
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
          </div>

          {isSubmitted ? (
            // Success Message
            <div className="text-center py-8">
              <div className="text-green-400 mb-6">
                <CheckCircle size={80} className="mx-auto" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Thank you!
              </h2>
              <p className="text-lg text-gray-300 mb-2">
                Your transport request has been confirmed.
              </p>
              <p className="text-gray-400">
                Our dispatch team will contact you shortly to arrange the deposit and pickup scheduling.
              </p>
              
              <div className="mt-8 pt-8 border-t border-neutral-700">
                <p className="text-sm text-gray-400 mb-2">Need immediate assistance?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="mailto:dispatch@flfreightco.com"
                    className="text-orange-500 hover:text-orange-400 font-semibold"
                  >
                    dispatch@flfreightco.com
                  </a>
                  <span className="hidden sm:inline text-gray-600">|</span>
                  <a 
                    href="sms:480-742-8553"
                    className="text-orange-500 hover:text-orange-400 font-semibold"
                  >
                    Text: 480-742-8553
                  </a>
                </div>
              </div>
            </div>
          ) : (
            // Confirmation Form
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Confirm Your Transport Quote
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  Thank you for reviewing your transport quote.
                </p>
                <p className="text-gray-400">
                  If you would like to proceed with the shipment, please confirm your booking below.
                </p>
              </div>

              {error && (
                <div className="bg-red-900/30 border border-red-600 text-red-100 p-4 rounded-lg flex items-start mb-6">
                  <AlertCircle className="text-red-400 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-bold mb-1">Error</p>
                    <p className="text-sm">{error}</p>
                    <p className="text-sm mt-2">
                      Please contact me directly at{" "}
                      <a href="mailto:dispatch@flfreightco.com" className="underline text-orange-400">
                        dispatch@flfreightco.com
                      </a>
                      {" "}or text{" "}
                      <a href="sms:480-742-8553" className="underline text-orange-400">
                        480-742-8553
                      </a>
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-8">
                <button
                  onClick={handleConfirm}
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Confirming...</span>
                  ) : (
                    <>
                      CONFIRM BOOKING
                      <Send className="ml-3" size={24} />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-400 mt-6">
                  By confirming, you agree to proceed with the transport service as quoted.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-700 text-center">
                <p className="text-sm text-gray-400 mb-2">Questions about your quote?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                  <a 
                    href="mailto:dispatch@flfreightco.com"
                    className="text-orange-500 hover:text-orange-400"
                  >
                    dispatch@flfreightco.com
                  </a>
                  <span className="hidden sm:inline text-gray-600">|</span>
                  <a 
                    href="sms:480-742-8553"
                    className="text-orange-500 hover:text-orange-400"
                  >
                    Text: 480-742-8553
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
