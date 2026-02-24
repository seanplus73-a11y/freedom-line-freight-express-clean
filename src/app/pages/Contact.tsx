import { Mail, MessageSquare, MapPin, Clock, Phone, Video } from "lucide-react";

/**
 * Contact Page - Freedom Line Freight Express
 * Contact information and communication methods
 */
export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Header Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions or ready to schedule your vehicle transport? I'm here to help. 
            Reach out using your preferred method of communication.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Contact Methods</h2>
            
            <div className="space-y-6">
              {/* Text/SMS */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Text Message (Preferred)</h3>
                    <p className="text-gray-300 mb-3">
                      Text messaging is the fastest way to reach me. I respond promptly to all text inquiries.
                    </p>
                    <p className="text-orange-500 font-semibold">
                      Contact via Request Pickup form for phone number
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300 mb-3">
                      Send detailed inquiries, quotes, or documentation via email. I typically respond within 24 hours.
                    </p>
                    <p className="text-orange-500 font-semibold">
                      Use the Request Pickup form for email quotes
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone/Voice */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Phone (Text Preferred)</h3>
                    <p className="text-gray-300 mb-3">
                      While I can receive voice calls, text messages are strongly preferred for clear communication.
                    </p>
                    <p className="text-gray-400 text-sm">
                      For voice calls, please use video relay services or leave a detailed voicemail
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Relay Service */}
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Video Relay Service (VRS)</h3>
                    <p className="text-gray-300 mb-3">
                      Video relay services are available for those who prefer real-time video communication.
                    </p>
                    <p className="text-gray-400 text-sm">
                      Contact me via text or email to schedule a VRS call
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Information */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Business Information</h2>

            {/* Location */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Service Area</h3>
                  <p className="text-gray-300 mb-4">
                    Based in Arizona, serving the entire Southwest region
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Arizona (home base)</li>
                    <li>• Nevada</li>
                    <li>• New Mexico</li>
                    <li>• Utah</li>
                    <li>• Southern California</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Response Times</h3>
                  <p className="text-gray-300 mb-3">
                    I strive to respond to all inquiries as quickly as possible.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Text messages: Within a few hours</li>
                    <li>• Email: Within 24 hours</li>
                    <li>• Quote requests: 1-2 business days</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Deaf-Owned Business */}
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                Deaf-Owned & Operated Business
              </h3>
              <p className="text-gray-300 mb-3">
                Freedom Line Freight Express is proudly deaf-owned and operated. I bring 
                professionalism, reliability, and personalized service to every transport job.
              </p>
              <p className="text-gray-300">
                Communication accessibility is a priority, and I work with all customers 
                to ensure clear, effective communication throughout the transport process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Schedule Your Transport?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            The easiest way to get started is to fill out the pickup request form. 
            I'll review your needs and provide a custom quote.
          </p>
          <a 
            href="/request-pickup" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
          >
            Request a Pickup
          </a>
        </div>
      </section>
    </div>
  );
}
