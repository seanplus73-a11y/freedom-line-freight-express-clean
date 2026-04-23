import { Phone } from "lucide-react";
import { Link } from "react-router";

export default function CostToDriveCar() {
  return (
    <main className="bg-[#0f172a] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          How Much Does It Cost to Have Someone Drive Your Car?
        </h1>

        <p className="text-gray-300 text-lg mb-6 leading-8">
          If you need to move your car without using a tow truck or trailer,
          you might be wondering how much it costs to have someone drive your car.
          The answer depends on distance, timing, and vehicle type, but in many cases,
          this option is more affordable and safer than towing.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Average Cost to Have Someone Drive Your Car
        </h2>

        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
          <li>0 to 25 miles: around $75 to $100</li>
          <li>25 to 50 miles: around $120 to $150</li>
          <li>50 to 150 miles: around $200 to $300</li>
          <li>150+ miles: custom pricing (typically $300 to $500+)</li>
        </ul>

        <p className="text-gray-300 mb-6">
          Example routes:
        </p>

        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
          <li>Phoenix to Mesa: around $85</li>
          <li>Phoenix to Tucson: around $250 to $350</li>
          <li>Longer trips depend on flexibility and scheduling</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          What Affects the Price?
        </h2>

        <div className="space-y-4 text-gray-300">
          <p><strong>Distance:</strong> Longer trips cost more, but per-mile cost is usually lower.</p>
          <p><strong>Vehicle Type:</strong> Larger or specialty vehicles may cost more.</p>
          <p><strong>Timing:</strong> Same-day or urgent requests may increase price slightly.</p>
          <p><strong>Locations:</strong> Remote pickup or drop-off areas can affect pricing.</p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Is It Cheaper Than Towing?
        </h2>

        <p className="text-gray-300 mb-6">
          In many cases, yes. Towing can cost more for longer distances and requires loading
          and unloading. Having someone drive your car keeps it on the road and often reduces
          handling risks and delays.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          When Should You Use This Service?
        </h2>

        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
          <li>Taking your car to a mechanic or dealership</li>
          <li>Moving a vehicle to family or another location</li>
          <li>Buying or selling a car locally</li>
          <li>Transporting a second vehicle</li>
          <li>Same-day delivery needs</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Is It Safe to Let Someone Drive Your Car?
        </h2>

        <p className="text-gray-300 mb-6">
          Yes, when handled by a reliable and experienced driver. With owner-operated service,
          your vehicle is handled directly, with communication from pickup to delivery.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Service Areas
        </h2>

        <p className="text-gray-300 mb-6">
          Serving Phoenix, Mesa, Chandler, Gilbert, Queen Creek, San Tan Valley,
          Scottsdale, Casa Grande, and surrounding Arizona areas.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Get a Fast Quote
        </h2>

        <p className="text-gray-300 mb-6">
          To get an exact price, send your pickup location, drop-off location,
          vehicle type, and whether it is drivable.
        </p>

        <div className="bg-orange-500 text-black p-6 rounded-xl text-center font-semibold text-lg mb-10">
          <div className="flex items-center justify-center gap-2">
            <Phone className="h-5 w-5" />
            Text 4807428553 for a fast quote
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/request-pickup"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Request Pickup
          </Link>
        </div>

      </div>
    </main>
  );
}
