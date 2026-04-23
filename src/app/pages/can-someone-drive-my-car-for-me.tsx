import { Link } from "react-router";

export default function CanSomeoneDriveMyCarForMe() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Can Someone Drive My Car for Me?
        </h1>

        {/* INTRO */}
        <p className="text-gray-300 text-lg mb-6 leading-8">
          Yes, someone can legally drive your car for you in Arizona. 
          Whether you need to move your vehicle to a mechanic, dealership, or another city, 
          hiring a driver is a simple and reliable solution.
        </p>

        <p className="text-gray-300 mb-10">
          Many people use this service when they don’t want to tow their car or need a fast, 
          same-day delivery option.
        </p>

        {/* LEGAL */}
        <h2 className="text-2xl font-semibold mb-4">
          Is It Legal for Someone to Drive My Car?
        </h2>

        <p className="text-gray-300 mb-10">
          Yes. In most cases, anyone with a valid driver’s license can drive your car 
          as long as you give permission. Your existing car insurance typically follows 
          the vehicle, but it’s always a good idea to confirm your coverage.
        </p>

        {/* WHEN TO USE */}
        <h2 className="text-2xl font-semibold mb-4">
          When Would You Need Someone to Drive Your Car?
        </h2>

        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-10">
          <li>Taking your car to a mechanic or dealership</li>
          <li>Moving your vehicle to a new home</li>
          <li>Buying or selling a car locally</li>
          <li>Sending a vehicle to a family member</li>
          <li>Transporting a second vehicle</li>
          <li>Same-day or urgent delivery</li>
        </ul>

        {/* COST */}
        <h2 className="text-2xl font-semibold mb-4">
          How Much Does It Cost?
        </h2>

        <p className="text-gray-300 mb-6">
          The cost depends on distance and timing, but here are typical ranges:
        </p>

        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-10">
          <li>0 to 25 miles: $75 to $100</li>
          <li>25 to 50 miles: $120 to $150</li>
          <li>50 to 150 miles: $200 to $300</li>
          <li>150+ miles: custom pricing</li>
        </ul>

        {/* VS TOWING */}
        <h2 className="text-2xl font-semibold mb-4">
          Is This Better Than Towing?
        </h2>

        <p className="text-gray-300 mb-10">
          In many cases, yes. Towing requires extra equipment and handling. 
          Having someone drive your car keeps it on the road, reduces delays, 
          and is often more affordable for local and regional distances.
        </p>

        {/* SAFETY */}
        <h2 className="text-2xl font-semibold mb-4">
          Is It Safe?
        </h2>

        <p className="text-gray-300 mb-10">
          Yes, when using a reliable and experienced driver. 
          Owner-operated services provide direct handling and clear communication 
          from pickup to delivery.
        </p>

        {/* SERVICE AREA */}
        <h2 className="text-2xl font-semibold mb-4">
          Service Areas
        </h2>

        <p className="text-gray-300 mb-10">
          Serving Phoenix, Mesa, Chandler, Gilbert, Queen Creek, San Tan Valley, 
          Scottsdale, Casa Grande, and surrounding Arizona areas.
        </p>

        {/* INTERNAL LINKS */}
        <h2 className="text-2xl font-semibold mb-4">
          Related Services
        </h2>

        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-10">
          <li><Link to="/cost-to-have-someone-drive-your-car" className="text-orange-400">Cost to Have Someone Drive Your Car</Link></li>
          <li><Link to="/car-delivery-service" className="text-orange-400">Car Delivery Service</Link></li>
          <li><Link to="/request-pickup" className="text-orange-400">Request a Pickup</Link></li>
        </ul>

        {/* FAQ */}
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-gray-300 mb-10">
          <p>
            <strong>Do I need to be in the car?</strong><br />
            No, the driver will handle pickup and delivery.
          </p>

          <p>
            <strong>Does insurance cover another driver?</strong><br />
            In most cases yes, but check your policy to be sure.
          </p>

          <p>
            <strong>Is this service available same day?</strong><br />
            Yes, depending on availability.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-orange-500 text-black p-6 rounded-xl text-center mb-10">
          <p className="text-lg font-semibold mb-2">
            Need Someone to Drive Your Car?
          </p>
          <p className="mb-4">
            Text your pickup and drop-off details for a fast quote.
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
