import { useParams, Navigate, Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, MessageSquare, Phone } from "lucide-react";

// Blog post data interface
interface BlogPostData {
  slug: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  featured: boolean;
  metaDescription: string;
  readTime: string;
  content: JSX.Element;
}

// Blog posts data
const blogPostsContent: BlogPostData[] = [
  {
    slug: "phoenix-vehicle-delivery-same-day",
    title: "Phoenix Vehicle Delivery Same Day No Towing Service",
    description: "Learn how same-day vehicle delivery works in Phoenix AZ without towing or trailers.",
    category: "Vehicle Delivery",
    icon: "Car",
    featured: true,
    metaDescription: "Learn how same-day vehicle delivery works in Phoenix AZ without towing or trailers. Direct driver service for fast, reliable vehicle transport.",
    readTime: "8 min read",
    content: (
      <>
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          If you need a vehicle moved quickly in Phoenix without waiting days for a tow truck or carrier service, same-day vehicle delivery offers a faster alternative. This service uses professional drivers who operate your vehicle directly from pickup to delivery—no trailers, no loading ramps, and no multi-day schedules.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          Whether you're a dealership moving inventory, a private seller delivering to a buyer, or a customer relocating a recently purchased car, same-day vehicle delivery provides speed and convenience that traditional towing can't match.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">
          What Is Same-Day Vehicle Delivery?
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          Same-day vehicle delivery in Phoenix is a direct driver service where your car, SUV, or light truck is driven from one location to another without using tow trucks or trailers. This service is perfect for:
        </p>

        <div className="bg-[#111827] border border-[#f97316]/30 rounded-2xl p-8 my-10">
          <h3 className="text-2xl font-bold text-white mb-6">Common Use Cases:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-300">
              <li>• Dealerships moving vehicles between locations</li>
              <li>• Private sellers delivering cars to buyers</li>
              <li>• Customers needing vehicles relocated quickly</li>
              <li>• Auction pickups and deliveries</li>
            </ul>
            <ul className="space-y-2 text-gray-300">
              <li>• Repair shop vehicle returns</li>
              <li>• Trade-in vehicle collection</li>
              <li>• Loaner vehicle coordination</li>
              <li>• Emergency vehicle relocations</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">
          How It Works
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          The process is simple and straightforward:
        </p>

        <div className="space-y-6 my-8">
          <div className="flex gap-4 items-start bg-[#111827] border border-white/10 rounded-xl p-6">
            <div className="flex-shrink-0 w-10 h-10 bg-[#f97316] rounded-full flex items-center justify-center text-white font-bold">1</div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Request a Quote</h3>
              <p className="text-gray-300">Provide pickup address, delivery address, and vehicle details. Receive a quote within 15-30 minutes.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start bg-[#111827] border border-white/10 rounded-xl p-6">
            <div className="flex-shrink-0 w-10 h-10 bg-[#f97316] rounded-full flex items-center justify-center text-white font-bold">2</div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Schedule Pickup</h3>
              <p className="text-gray-300">Once approved, coordinate a pickup window. Same-day pickup typically within 2-4 hours.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start bg-[#111827] border border-white/10 rounded-xl p-6">
            <div className="flex-shrink-0 w-10 h-10 bg-[#f97316] rounded-full flex items-center justify-center text-white font-bold">3</div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Direct Delivery</h3>
              <p className="text-gray-300">Your vehicle is driven directly to the destination with real-time updates along the way.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">
          Service Areas
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          We provide same-day vehicle delivery throughout the Phoenix metropolitan area including Phoenix, Mesa, Chandler, Gilbert, Scottsdale, Tempe, Queen Creek, San Tan Valley, Glendale, Peoria, Surprise, Avondale, Goodyear, and all surrounding Arizona cities.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">
          Pricing & Speed
        </h2>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-[#111827] border border-[#f97316]/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#f97316] mb-2">15-30 min</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide mb-2">Quote Response</div>
            <p className="text-gray-300 text-sm">Fast turnaround during business hours</p>
          </div>

          <div className="bg-[#111827] border border-[#f97316]/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#f97316] mb-2">2-4 hrs</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide mb-2">Pickup Time</div>
            <p className="text-gray-300 text-sm">Typical same-day pickup window</p>
          </div>

          <div className="bg-[#111827] border border-[#f97316]/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#f97316] mb-2">Same Day</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide mb-2">Delivery</div>
            <p className="text-gray-300 text-sm">Most Phoenix metro deliveries</p>
          </div>
        </div>
      </>
    ),
  },
  {
    slug: "what-is-vehicle-delivery-service",
    title: "What Is Vehicle Delivery Service in Arizona?",
    description: "A simple guide explaining drive-away vehicle delivery for cars, SUVs, and small trucks.",
    category: "Guide",
    icon: "FileText",
    featured: false,
    metaDescription: "A simple guide explaining drive-away vehicle delivery for cars, SUVs, and small trucks in Arizona. Learn how direct driver service works.",
    readTime: "10 min read",
    content: (
      <>
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          Vehicle delivery service (also called drive-away service) is when a professional driver picks up your vehicle from one location and drives it directly to another location — no tow trucks, no trailers, just direct driving.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          Think of it as having someone drive your car for you when you can't or don't want to do it yourself. It's faster, more convenient, and often more affordable than traditional auto transport for local and regional moves within Arizona.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">
          How Does Vehicle Delivery Work?
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          The process is straightforward and designed for convenience:
        </p>

        <div className="space-y-6 my-8">
          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">1. You Request Service</h3>
            <p className="text-gray-300">Contact us with pickup location, delivery location, and basic vehicle details (make, model, year).</p>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">2. You Get a Quote</h3>
            <p className="text-gray-300">Receive clear pricing based on distance and service type. No hidden fees.</p>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">3. Schedule Pickup</h3>
            <p className="text-gray-300">Coordinate a pickup time that works for you. Same-day or next-day options available.</p>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3">4. Your Vehicle Is Delivered</h3>
            <p className="text-gray-300">The driver operates your vehicle directly to the destination with updates along the way.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">
          Best For
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Individual Customers</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Purchased a car and need it delivered home</li>
              <li>• Sold your vehicle to a buyer</li>
              <li>• Moving to a new Arizona city</li>
              <li>• Vehicle at repair shop</li>
            </ul>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Businesses</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Dealerships moving inventory</li>
              <li>• Auto auction pickups</li>
              <li>• Repair shop vehicle returns</li>
              <li>• Fleet vehicle relocation</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">
          Service Areas
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          Serving Phoenix, Mesa, Chandler, Gilbert, Scottsdale, Tempe, Queen Creek, San Tan Valley, Glendale, Peoria, and all Arizona cities.
        </p>
      </>
    ),
  },
  {
    slug: "dealerships-move-cars-without-towing",
    title: "How Dealerships Move Cars Fast Without Towing",
    description: "How dealerships use direct vehicle delivery for faster customer service and inventory movement.",
    category: "Dealerships",
    icon: "KeyRound",
    featured: false,
    metaDescription: "How dealerships use direct vehicle delivery for faster customer service and inventory movement. Learn the benefits of drive-away service vs traditional towing.",
    readTime: "12 min read",
    content: (
      <>
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          Arizona dealerships operate in one of the most competitive automotive markets in the Southwest. To stay ahead, they need to move inventory quickly between locations, deliver sold vehicles to customers fast, pick up trade-ins efficiently, and manage auction purchases without delays.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          Traditional towing and carrier-based transport create bottlenecks: slow response times, multi-day waits for carrier availability, expensive transport fees, and frustrated customers waiting for their new vehicles. That's why many Phoenix-area dealerships are switching to direct vehicle delivery services.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">
          Why Dealerships Choose Direct Delivery
        </h2>

        <div className="space-y-6 my-8">
          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#f97316] mb-3">1. Speed and Same-Day Service</h3>
            <p className="text-gray-300">Direct delivery offers same-day or next-day service within the Phoenix metro area, compared to 3-7 day waits for traditional carriers.</p>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#f97316] mb-3">2. Better Customer Experience</h3>
            <p className="text-gray-300">Modern car buyers expect fast delivery. Same-day service meets customer expectations and reduces deal cancellation risk.</p>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#f97316] mb-3">3. Cost-Effective for Local Moves</h3>
            <p className="text-gray-300">For Phoenix metro area moves, direct delivery is often 30-50% more affordable than traditional towing.</p>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#f97316] mb-3">4. Direct Communication</h3>
            <p className="text-gray-300">Work directly with the driver — no brokers, no call centers, clear accountability.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">
          Common Dealership Use Cases
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-3">Inventory Management</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Moving vehicles between locations</li>
              <li>• Transferring to sister dealerships</li>
              <li>• Balancing stock across lots</li>
            </ul>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-3">Customer Service</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Delivering sold vehicles to customers</li>
              <li>• White-glove home delivery</li>
              <li>• Picking up customer trade-ins</li>
            </ul>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-3">Auction Operations</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Pickups from Manheim, ADESA, Copart</li>
              <li>• Same-day auction pickup service</li>
              <li>• Multi-vehicle auction runs</li>
            </ul>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-3">Service Department</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Returning completed service vehicles</li>
              <li>• Delivering to specialty shops</li>
              <li>• Body shop coordination</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    slug: "same-day-auto-parts-delivery-phoenix",
    title: "Same Day Auto Parts Delivery in Phoenix AZ",
    description: "Fast same-day auto parts delivery for repair shops, mechanics, dealerships, and DIY customers across Phoenix.",
    category: "Auto Parts",
    icon: "Wrench",
    featured: false,
    metaDescription: "Fast same-day auto parts delivery in Phoenix AZ for repair shops, mechanics, dealerships, and DIY customers. Direct courier service with 2-4 hour delivery.",
    readTime: "10 min read",
    content: (
      <>
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          When you need an auto part fast in Phoenix, waiting days for shipping or driving across town to pick it up yourself wastes valuable time. Same-day auto parts delivery provides a faster solution: request the part you need, and a professional driver picks it up from the supplier and delivers it directly to your shop, garage, or location within hours.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          Whether you're a repair shop waiting on a critical component to finish a customer's vehicle, a mobile mechanic who needs parts delivered to a job site, or a DIY enthusiast working on a weekend project, same-day auto parts delivery keeps your work moving without delay.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">
          How Same-Day Auto Parts Delivery Works
        </h2>

        <div className="space-y-6 my-8">
          <div className="flex gap-4 items-start bg-[#111827] border border-white/10 rounded-xl p-6">
            <div className="flex-shrink-0 w-10 h-10 bg-[#f97316] rounded-full flex items-center justify-center text-white font-bold">1</div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Order Your Part</h3>
              <p className="text-gray-300">Order from AutoZone, O'Reilly, Advance Auto Parts, NAPA, or any dealership parts department.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start bg-[#111827] border border-white/10 rounded-xl p-6">
            <div className="flex-shrink-0 w-10 h-10 bg-[#f97316] rounded-full flex items-center justify-center text-white font-bold">2</div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Request Delivery</h3>
              <p className="text-gray-300">Provide pickup location, delivery location, and part details. Receive quote within 15-30 minutes.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start bg-[#111827] border border-white/10 rounded-xl p-6">
            <div className="flex-shrink-0 w-10 h-10 bg-[#f97316] rounded-full flex items-center justify-center text-white font-bold">3</div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Driver Picks Up Part</h3>
              <p className="text-gray-300">Professional driver collects your part from the supplier.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start bg-[#111827] border border-white/10 rounded-xl p-6">
            <div className="flex-shrink-0 w-10 h-10 bg-[#f97316] rounded-full flex items-center justify-center text-white font-bold">4</div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Direct Delivery</h3>
              <p className="text-gray-300">Part delivered to your shop, garage, or job site within 2-4 hours.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">
          Who Uses This Service?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Repair Shops & Mechanics</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Independent auto repair shops</li>
              <li>• Mobile mechanics at job sites</li>
              <li>• Transmission and brake specialists</li>
              <li>• Quick lube and oil change shops</li>
            </ul>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Dealerships & Businesses</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Dealership service departments</li>
              <li>• Fleet maintenance operations</li>
              <li>• Body and collision shops</li>
              <li>• Rental car companies</li>
            </ul>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">DIY Customers</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Home mechanics working on projects</li>
              <li>• Car enthusiasts building vehicles</li>
              <li>• Customers who can't leave during work</li>
              <li>• Weekend project warriors</li>
            </ul>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Specialty Shops</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Performance and tuning shops</li>
              <li>• Diesel repair specialists</li>
              <li>• RV and motorhome service</li>
              <li>• Motorcycle and powersports</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">
          Common Parts Delivered
        </h2>

        <div className="bg-[#111827] border border-[#f97316]/30 rounded-2xl p-8 my-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-[#f97316] font-bold mb-3">Engine & Drivetrain:</h3>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Alternators, starters, batteries</li>
                <li>• Fuel pumps, water pumps</li>
                <li>• Belts, hoses, filters</li>
                <li>• Spark plugs, ignition coils</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#f97316] font-bold mb-3">Brakes & Suspension:</h3>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Brake pads, rotors, calipers</li>
                <li>• Struts, shocks, springs</li>
                <li>• Control arms, ball joints</li>
                <li>• Wheel bearings, CV axles</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">
          Delivery Speed
        </h2>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-[#111827] border border-[#f97316]/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#f97316] mb-2">15-30 min</div>
            <div className="text-sm text-gray-400 uppercase mb-2">Quote Response</div>
            <p className="text-gray-300 text-sm">Fast turnaround during business hours</p>
          </div>

          <div className="bg-[#111827] border border-[#f97316]/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#f97316] mb-2">2-4 hrs</div>
            <div className="text-sm text-gray-400 uppercase mb-2">Standard Delivery</div>
            <p className="text-gray-300 text-sm">Phoenix metro area delivery time</p>
          </div>

          <div className="bg-[#111827] border border-[#f97316]/30 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-[#f97316] mb-2">1-2 hrs</div>
            <div className="text-sm text-gray-400 uppercase mb-2">Rush Delivery</div>
            <p className="text-gray-300 text-sm">Available for urgent parts</p>
          </div>
        </div>
      </>
    ),
  },
];

// Helper functions
function getBlogPostBySlug(slug: string): BlogPostData | undefined {
  return blogPostsContent.find(post => post.slug === slug);
}

function getAllBlogPosts(): BlogPostData[] {
  return blogPostsContent;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (exclude current post)
  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts
    .filter(p => p.slug !== slug)
    .slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{post.title} | Freedom Line Freight Express</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://www.flfreightco.com/blog/${post.slug}`} />
      </Helmet>

      <main className="min-h-screen bg-[#0b0f19] text-white pb-24">
        {/* Sticky Contact Bar */}
<div className="fixed bottom-0 left-0 z-50 w-full border-t border-white/10 bg-[#111827]/95 backdrop-blur">
  <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-4 py-3">
    <a
      href="sms:4807428553"
      className="flex-1 rounded-xl bg-[#f97316] px-4 py-3 text-center font-bold text-white hover:bg-orange-500"
    >
      <span className="inline-flex items-center justify-center gap-2">
        <MessageSquare size={18} />
        Text Now
      </span>
    </a>

    <a
      href="tel:4807428553"
      className="flex-1 rounded-xl border border-white/20 bg-white px-4 py-3 text-center font-bold text-[#111827] hover:bg-gray-100"
    >
      <span className="inline-flex items-center justify-center gap-2">
        <Phone size={18} />
        Call Now
      </span>
    </a>
  </div>
</div>
        {/* Back to Blog */}
        <section className="border-b border-white/10 bg-[#111827] px-6 py-6">
          <div className="mx-auto max-w-4xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#f97316] transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#111827] to-[#0b0f19] px-6 py-16">
          <div className="absolute -top-20 right-0 h-[420px] w-[420px] rounded-full bg-[#f97316]/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center rounded-full bg-[#f97316]/10 border border-[#f97316]/30 px-4 py-2 text-sm font-bold text-[#f97316]">
                {post.category}
              </span>
              <span className="text-gray-400">{post.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              {post.description}
            </p>
          </div>
        </section>

        {/* Article Content */}
        <article className="px-6 py-16 bg-[#0b0f19]">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-invert prose-lg max-w-none">
              {post.content}

              {/* CTA */}
              <div className="bg-gradient-to-r from-[#f97316] to-orange-600 rounded-2xl p-10 my-16 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                  Need Fast Delivery in Phoenix?
                </h2>
                <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                  Same-day service available for vehicle delivery, auto parts delivery, and courier services across Phoenix and Arizona.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/request-pickup"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#f97316] px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl"
                  >
                    Request Service Now
                    <ArrowRight size={20} />
                  </Link>
                  <a
                    href="sms:+14807428553"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-[#f97316] transition-all"
                  >
                    <MessageSquare size={20} />
                    Text: (480) 742 8553
                  </a>
                </div>
                <p className="text-orange-100 mt-6 text-sm">
                  Response time: 15–30 minutes • Same-day service available • Owner-operated
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="px-6 py-16 bg-[#111827] border-t border-white/10">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="group rounded-xl border border-white/10 bg-[#0b0f19] p-6 hover:border-[#f97316] transition-all"
                  >
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f97316] transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-400">
                      {relatedPost.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
