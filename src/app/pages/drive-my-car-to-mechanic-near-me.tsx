import { Link } from "react-router";

export default function DriveMyCarToMechanicNearMe() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Drive My Car to Mechanic Near Me
        </h1>

        {/* INTRO */}
        <p className="text-gray-300 text-lg mb-6 leading-8">
          Need someone to drive your car to a mechanic near you in Arizona? 
          Whether your vehicle isn’t safe to drive long distances or you just don’t have time, 
          we provide reliable vehicle pickup and delivery to local repair shops and dealerships.
        </p>

        <p className="text-gray-300 mb-10">
          Skip the hassle of waiting at the shop. We pick up your car, drive it safely to your mechanic, 
          and keep you updated every step of the way.
        </p>

        {/* WHY USE */}
        <h2 className="text-2xl font-semibold mb-4">
          Why Use a Car Pickup Service to the Mechanic?
        </h2>

        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-10">
          <li>No need to take time off work</li>
          <li>Avoid towing costs for drivable vehicles</li>
          <li>Fast same-day service available</li>
          <li>Perfect for busy schedules or families</li>
          <li>Safe and direct handling of your vehicle</li>
        </ul>

        {/* COST */}
        <h2 className="text-2xl font-semibold mb-4">
          How Much Does It Cost?
        </h2>

        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-8">
          <li>0 to 25 miles: $75 to $100</li>
          <li>25 to 50 miles: $120 to $150</li>
          <li>50+ miles: custom quote</li>
        </ul>

        <p className="text-gray-300 mb-10">
          Pricing depends on distance, pickup location, and scheduling. 
          Local mechanic trips are usually quick and affordable.
        </p>

        {/* WHEN TO USE */}
        <h2 className="text-2xl font-semibold mb-4">
          When Should You Use This Service?
        </h2>

        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-10">
          <li>Your car needs service but is still drivable</li>
          <li>You don’t want to wait at the repair shop</li>
          <li>You’re managing multiple vehicles</li>
          <li>You need someone to handle pickup and drop-off</li>
          <li>You want a simple, stress-free solution</li>
        </ul>

        {/* HOW IT WORKS */}
        <h2 className="text-2xl font-semibold mb-4">
          How It Works
        </h2>

        <div className="space-y-3 text-gray-300 mb-10">
          <p><strong>1.</strong> Text your pickup location and mechanic address</p>
          <p><strong>2.</strong> We confirm availability and price</p>
          <p><strong>3.</strong> Your car is picked up and delivered safely</p>
          <p><strong>4.</strong> You receive updates during the process</p>
        </div>

        {/* SERVICE AREA */}
        <h2 className="text-2xl font-semibold mb-4">
          Service Areas
        </h2>

        <p className="text-gray-300 mb-10">
          Serving Phoenix, Mesa, Chandler, Gilbert, Queen Creek, San Tan Valley, 
          Scottsdale, Casa Grande, and nearby Arizona areas.
        </p>

        {/* INTERNAL LINKS */}
        <h2 className="text-2xl font-semibold mb-4">
          Related Services
        </h2>

        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-10">
          <li>
            <Link to="/cost-to-have-someone-drive-your-car" className="text-orange-400">
              Cost to Have Someone Drive Your Car
            </Link>
          </li>
          <li>
            <Link to="/can-someone-drive-my-car-for-me" className="text-orange-400">
              Can Someone Drive My Car for Me?
            </Link>
          </li>
          <li>
            <Link to="/request-pickup" className="text-orange-400">
              Request a Pickup
            </Link>
          </li>
        </ul>

        {/* FAQ */}
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-gray-300 mb-10">
          <p>
            <strong>Can you take my car to any mechanic?</strong><br />
            Yes, you can choose any shop, dealership, or repair location.
          </p>

          <p>
            <strong>Is this cheaper than towing?</strong><br />
            Yes, if your car is drivable, this is usually more affordable.
          </p>

          <p>
            <strong>Do I need to be present?</strong><br />
            No, as long as arrangements are made ahead of time.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-orange-500 text-black p-6 rounded-xl text-center mb-10">
          <p className="text-lg font-semibold mb-2">
            Need Your Car Taken to a Mechanic?
          </p>
          <p className="mb-4">
            Text your location and mechanic details for a fast quote.
          </p>
          <a href="sms:4807428553" className="font-bold text-lg">
            Text 480-742-8553
          </a>
        </div>

        {/* BUTTON */}
        <div className="text-center">
          <Link
            to="/request-pickup"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Request Pickup
          </Link>
        </div>

      </div>
    </div>
  );
}
