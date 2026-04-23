import { Link } from "react-router";

export default function CostToHaveSomeoneDriveYourCar() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          How Much Does It Cost to Have Someone Drive Your Car?
        </h1>

        {/* INTRO (SEO BOOST) */}
        <p className="text-gray-300 text-lg mb-6 leading-8">
          Looking for the cost to have someone drive your car in Arizona? 
          Whether you need a vehicle moved to a mechanic, dealership, or another city, 
          this guide breaks down pricing, what affects the cost, and how to get a fast quote.
        </p>

        <p className="text-gray-300 mb-10">
          If you need to move your car without using a tow truck or trailer, 
          hiring someone to drive your vehicle is often a safer and more affordable option.
        </p>

        {/* COST SECTION */}
        <h2 className="text-2xl font-semibold mb-4">
          Average Cost to Have Someone Drive Your Car
        </h2>

        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-8">
          <li>0 to 25 miles: around $75 to $100</li>
          <li>25 to 50 miles: around $120 to $150</li>
          <li>50 to 150 miles: around $200 to $300</li>
          <li>150+ miles: custom pricing (typically $300 to $500+)</li>
        </ul>

        <p className="text-gray-300 mb-6">
          These prices depend on distance, scheduling, and vehicle type. 
          Local deliveries are usually the most affordable.
        </p>

        {/* EXAMPLES */}
        <h3 className="text-xl font-semibold mb-3">
          Example Routes
        </h3>

        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-10">
          <li>Phoenix to Mesa: around $85</li>
          <li>Phoenix to Scottsdale: around $95</li>
          <li>Phoenix to Tucson: around $250 to $350</li>
          <li>Longer trips depend on scheduling and flexibility</li>
        </ul>

        {/* FACTORS */}
        <h2 className="text-2xl font-semibold mb-4">
          What Affects the Price?
        </h2>

        <div className="space-y-3 text-gray-300 mb-10">
          <p><strong>Distance:</strong> Longer trips cost more, but per-mile cost is lower.</p>
          <p><strong>Vehicle Type:</strong> Larger or specialty vehicles may cost more.</p>
          <p><strong>Timing:</strong> Same-day or urgent requests may increase price.</p>
          <p><strong>Locations:</strong> Remote pickup or drop-off areas may add cost.</p>
        </div>

        {/* TOWING */}
        <h2 className="text-2xl font-semibold mb-4">
          Is It Cheaper Than Towing?
        </h2>

        <p className="text-gray-300 mb-10">
          In many cases, yes. Towing requires loading, unloading, and equipment fees. 
          Having someone drive your car keeps it on the road and reduces handling risks.
        </p>

        {/* WHEN TO USE */}
        <h2 className="text-2xl font-semibold mb-4">
          When Should You Use This Service?
        </h2>

        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-10">
          <li>Taking your car to a mechanic or dealership</li>
          <li>Moving a vehicle to family or another location</li>
          <li>Buying or selling a car locally</li>
          <li>Transporting a second vehicle</li>
          <li>Same-day delivery needs</li>
        </ul>

        {/* SAFETY */}
        <h2 className="text-2xl font-semibold mb-4">
          Is It Safe to Let Someone Drive Your Car?
        </h2>

        <p className="text-gray-300 mb-10">
          Yes, when handled by a reliable and experienced driver. 
          With owner-operated service, your vehicle is handled directly with clear communication 
          from pickup to delivery.
        </p>

        {/* SERVICE AREA */}
        <h2 className="text-2xl font-semibold mb-4">
          Service Areas
        </h2>

        <p className="text-gray-300 mb-10">
          Serving Phoenix, Mesa, Chandler, Gilbert, Queen Creek, San Tan Valley, Scottsdale, 
          Casa Grande, and surrounding Arizona areas for vehicle pickup and delivery services.
        </p>

        {/* INTERNAL LINKS (SEO BOOST) */}
        <h2 className="text-2xl font-semibold mb-4">
          Related Services
        </h2>

        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-10">
          <li><Link to="/drive-my-car-home" className="text-orange-400">Drive My Car Home</Link></li>
          <li><Link to="/car-delivery-service" className="text-orange-400">Car Delivery Service</Link></li>
          <li><Link to="/request-pickup" className="text-orange-400">Request a Pickup</Link></li>
        </ul>

        {/* FAQ */}
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-gray-300 mb-10">
          <p>
            <strong>Can someone legally drive my car for me?</strong><br />
            Yes, as long as they have permission and a valid driver’s license.
          </p>

          <p>
            <strong>Is this cheaper than shipping a car?</strong><br />
            Yes, for local and regional distances, it is often more affordable.
          </p>

          <p>
            <strong>Do I need insurance?</strong><br />
            Your vehicle should already be insured. Always confirm coverage before transport.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-orange-500 text-black p-6 rounded-xl text-center mb-10">
          <p className="text-lg font-semibold mb-2">
            Get a Fast Quote
          </p>
          <p className="mb-4">
            Text your pickup and drop-off details for a quick price.
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
