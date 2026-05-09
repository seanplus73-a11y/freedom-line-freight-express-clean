import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  FileText,
  MapPin,
  Car,
  Wrench,
  KeyRound,
  Clock,
  CheckCircle,
} from "lucide-react";

// Blog post metadata interface
interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  featured: boolean;
}

// Blog posts metadata
const blogPosts: BlogPostMeta[] = [
  {
    slug: "phoenix-vehicle-delivery-same-day",
    title: "Phoenix Vehicle Delivery Same Day No Towing Service",
    description: "Learn how same-day vehicle delivery works in Phoenix AZ without towing or trailers.",
    category: "Vehicle Delivery",
    icon: "Car",
    featured: true,
  },
  {
    slug: "what-is-vehicle-delivery-service",
    title: "What Is Vehicle Delivery Service in Arizona?",
    description: "A simple guide explaining drive-away vehicle delivery for cars, SUVs, and small trucks.",
    category: "Guide",
    icon: "FileText",
    featured: false,
  },
  {
    slug: "dealerships-move-cars-without-towing",
    title: "How Dealerships Move Cars Fast Without Towing",
    description: "How dealerships use direct vehicle delivery for faster customer service and inventory movement.",
    category: "Dealerships",
    icon: "KeyRound",
    featured: false,
  },
  {
    slug: "same-day-auto-parts-delivery-phoenix",
    title: "Same Day Auto Parts Delivery in Phoenix AZ",
    description: "Fast same-day auto parts delivery for repair shops, mechanics, dealerships, and DIY customers across Phoenix.",
    category: "Auto Parts",
    icon: "Wrench",
    featured: false,

    {
  slug: "arizona-vehicle-delivery-guide",
  title: "Fast and Safe Vehicle Delivery in Arizona",
  description: "Learn how to safely and quickly deliver vehicles, auto parts, and packages across Phoenix and Arizona. Same day delivery tips and guide.",
  category: "Guide",
  icon: "Car",
  featured: false,
},
{
  slug: "direct-vehicle-delivery-vs-towing-arizona",
  title: "Why Direct Vehicle Delivery Is Better Than Towing in Arizona",
  description: "Discover why direct vehicle delivery is safer, faster, and more affordable than towing across Phoenix, Queen Creek, Gilbert, Chandler, and Mesa.",
  category: "Vehicle Delivery",
  icon: "Car",
  featured: false,
},
{
  slug: "same-day-vehicle-delivery-phoenix",
  title: "Same Day Vehicle Delivery in Phoenix for Dealers and Repair Shops",
  description: "Same day vehicle delivery serving car dealerships and auto repair shops across Phoenix Metro. Owner operated. No towing. No trailers.",
  category: "Dealerships",
  icon: "KeyRound",
  featured: false,
},
{
  slug: "arizona-business-vehicle-delivery-services",
  title: "How Arizona Businesses Use Vehicle Delivery Services to Save Time",
  description: "How small businesses, repair shops, and dealerships in Phoenix Arizona use vehicle concierge services to save time and serve customers better.",
  category: "Business",
  icon: "Wrench",
  featured: false,
},
  },
];

// Icon mapping
const iconMap: { [key: string]: any } = {
  Car,
  FileText,
  KeyRound,
  Wrench,
};

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Arizona Delivery Blog | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Helpful delivery guides for Phoenix vehicle delivery, auto parts delivery, document courier service, and key and title runner service in Arizona."
        />
        <link rel="canonical" href="https://www.flfreightco.com/blog" />
      </Helmet>

      <main className="min-h-screen bg-[#0b0f19] text-white overflow-hidden">
        <section className="bg-[#f97316] text-black text-center py-2 text-sm font-bold">
          Helpful Arizona delivery guides for customers, dealerships, and local businesses
        </section>

        <section className="relative overflow-hidden border-b border-white/10 px-6 py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/20 via-[#0b0f19] to-black" />
          <div className="absolute -top-20 right-0 h-[420px] w-[420px] rounded-full bg-[#f97316]/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[280px] w-[280px] rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm mb-7">
              <MapPin className="text-[#f97316]" size={18} />
              FLF Express Blog
            </div>

            <h1 className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Arizona Delivery Guides for{" "}
              <span className="text-[#f97316]">Fast Local Service</span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-8">
              Learn about vehicle delivery, auto parts courier service,
              document delivery, key and title runner service, and same-day
              business transport across Phoenix and nearby Arizona cities.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-10">
              {[
                "Vehicle delivery",
                "Auto parts delivery",
                "Document courier",
                "Key and title runner",
                "Phoenix local service",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle className="text-[#f97316]" size={16} />
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center rounded-xl bg-[#f97316] px-8 py-4 font-bold text-lg hover:bg-orange-500 hover:-translate-y-1 transition-all shadow-lg shadow-orange-500/20"
              >
                Request Pickup
                <ArrowRight className="ml-2" size={20} />
              </Link>

              <Link
                to="/phoenix-delivery"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-lg hover:border-[#f97316] hover:text-[#f97316] transition-all"
              >
                Phoenix Delivery Service
              </Link>
            </div>
          </div>
        </section>

        {featuredPost && (
          <section className="px-6 py-20 bg-[#111827]">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8">
                <p className="text-[#f97316] font-bold uppercase tracking-widest mb-2">
                  Featured article
                </p>
                <h2 className="text-3xl md:text-5xl font-extrabold">
                  Start Here
                </h2>
              </div>

              <Link
                to={`/blog/${featuredPost.slug}`}
                className="group grid gap-8 rounded-3xl border border-white/10 bg-[#0b0f19] p-8 md:grid-cols-[1.2fr_0.8fr] hover:border-[#f97316] hover:shadow-[0_0_35px_rgba(249,115,22,0.18)] transition-all"
              >
                <div>
                  <span className="inline-flex items-center rounded-full bg-[#f97316]/10 border border-[#f97316]/30 px-4 py-2 text-sm font-bold text-[#f97316] mb-6">
                    {featuredPost.category}
                  </span>

                  <h3 className="text-3xl md:text-5xl font-extrabold mb-5 group-hover:text-[#f97316] transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                    {featuredPost.description}
                  </p>

                  <span className="inline-flex items-center text-[#f97316] font-bold text-lg">
                    Read featured article
                    <ArrowRight className="ml-2" size={20} />
                  </span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#f97316]/20 to-black p-8 flex flex-col justify-between">
                  {(() => {
                    const Icon = iconMap[featuredPost.icon] || Car;
                    return <Icon className="text-[#f97316] mb-8" size={56} />;
                  })()}

                  <div>
                    <p className="text-gray-300 font-semibold mb-3">
                      Main topic
                    </p>
                    <p className="text-2xl font-extrabold">
                      Same-day Phoenix vehicle delivery without towing.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        <section className="px-6 py-20 bg-[#0b0f19]">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-[#f97316] font-bold uppercase tracking-widest mb-2">
                  Latest guides
                </p>
                <h2 className="text-3xl md:text-5xl font-extrabold">
                  Delivery Help Center
                </h2>
              </div>

              <p className="max-w-xl text-gray-400">
                Simple answers for customers, dealerships, repair shops, and
                Arizona businesses that need fast direct delivery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {regularPosts.map((post) => {
                const Icon = iconMap[post.icon] || FileText;

                return (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group rounded-2xl border border-white/10 bg-[#111827] p-7 hover:border-[#f97316] hover:shadow-[0_0_30px_rgba(249,115,22,0.16)] hover:-translate-y-1 transition-all"
                  >
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="rounded-xl bg-[#f97316]/10 border border-[#f97316]/30 p-3">
                        <Icon className="text-[#f97316]" size={30} />
                      </div>

                      <span className="rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-bold text-gray-300">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold mb-4 group-hover:text-[#f97316] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {post.description}
                    </p>

                    <span className="inline-flex items-center text-[#f97316] font-bold">
                      Read article
                      <ArrowRight className="ml-2" size={18} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 bg-[#111827] border-y border-white/10">
          <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#0b0f19] p-7">
              <Car className="text-[#f97316] mb-4" size={36} />
              <h3 className="text-xl font-bold mb-3">Vehicle Delivery</h3>
              <p className="text-gray-400">
                Guides for running vehicle pickup and delivery without towing
                or trailers.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0b0f19] p-7">
              <Wrench className="text-[#f97316] mb-4" size={36} />
              <h3 className="text-xl font-bold mb-3">Auto Parts Delivery</h3>
              <p className="text-gray-400">
                Helpful tips for repair shops, mechanics, dealerships, and
                customers needing parts moved fast.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0b0f19] p-7">
              <KeyRound className="text-[#f97316] mb-4" size={36} />
              <h3 className="text-xl font-bold mb-3">Keys and Titles</h3>
              <p className="text-gray-400">
                Learn how key, title, and document runner services help local
                businesses move paperwork safely.
              </p>
            </div>
          </div>
        </section>

        <section className="relative px-6 py-24 bg-[#f97316] text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />

          <div className="relative mx-auto max-w-4xl">
            <Clock className="mx-auto mb-5 text-white" size={44} />

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">
              Need Delivery Help in Arizona?
            </h2>

            <p className="text-orange-100 text-lg mb-8">
              Request a quote for vehicle delivery, auto parts delivery,
              document courier service, or key and title runner service.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/request-pickup"
                className="inline-flex items-center justify-center bg-white text-[#f97316] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 hover:-translate-y-1 transition-all"
              >
                Get a Quote
                <ArrowRight className="ml-2" size={20} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition-all"
              >
                Contact FLF Express
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

