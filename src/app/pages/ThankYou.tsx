import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-xl text-center">
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">
          Thank You
        </h1>

        <p className="text-lg mb-6">
          Your request has been received. I will contact you shortly with details.
        </p>

        <p className="text-sm text-gray-400 mb-8">
          If your request is urgent, feel free to text me directly.
        </p>

        <a
          href="sms:4807428553"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium mr-3"
        >
          Text Now
        </a>

        <Link
          to="/"
          className="inline-block border border-gray-500 px-6 py-3 rounded-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
