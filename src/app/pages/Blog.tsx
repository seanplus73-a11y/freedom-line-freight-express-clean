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

// 🔥 SAFE DATA (no external file needed)
const posts = [
  {
    slug: "phoenix-vehicle-delivery-same-day",
    title: "Phoenix Vehicle Delivery Same Day No Towing Service",
    description:
      "Learn how same-day vehicle delivery works in Phoenix AZ without towing or trailers.",
    category: "Vehicle Delivery",
    icon: "Car",
    featured: true,
  },
  {
    slug: "what-is-vehicle-delivery-service",
    title: "What Is Vehicle Delivery Service in Arizona?",
    description:
      "A simple guide explaining drive-away vehicle delivery for cars, SUVs, and small trucks.",
    category: "Guide",
    icon: "FileText",
    featured: false,
  },
  {
    slug: "dealerships-move-cars-without-towing",
    title: "How Dealerships Move Cars Fast Without Towing",
    description:
      "How dealerships use direct vehicle delivery for faster customer service and inventory movement.",
    category: "Dealerships",
    icon: "KeyRound",
    featured: false,
  },
];

// Icon mapping
const iconMap: any = {
  Car,
  FileText,
  KeyRound,
  Wrench,
};

export default function Blog() {
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

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
        {/* Top Bar */}
        <section className="bg-[#f97316] text-black text-center py-2 text-sm font-bold">
          Helpful Arizona delivery guides for customers, dealerships, and local businesses
        </section>

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10 px-6 py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/20 via-[#0b0f19] to-black" />

          <div className="relative mx-auto max-w-6xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm mb-7">
              <MapPin className="text-[#f97316]" size={18} />
              FLF Express Blog
            </div>

            <h1 className="max-w-4xl text-4xl md:text-6xl font-extrabold mb-6">
              Arizona Delivery Guides{" "}
              <span className="text-[#f97316]">That Help You Move Faster</span>
            </h1>

            <p className="max-w-3xl text-lg text-gray-300 mb-8">
              Learn about vehicle delivery, auto parts courier service,
              document delivery, and key and title runner services across Phoenix AZ.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-10">
              {[
                "Vehicle delivery",
                "Auto parts delivery",
                "Document courier",
                "Key and title runner",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle className="text-[#f97316]" size={16} />
                  {item}
                </span>
              ))}
            </div>

            <Link
              to="/request-pickup"
              className="inline-flex items-center justify-center rounded-xl bg-[#f97316] px-8 py-4 font-bold hover:bg-orange-500 transition-all"
            >
              Request Pickup
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>

        {/* Featured */}
        {featuredPost && (
          <section className="px-6 py-20 bg-[#111827]">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold mb-6">Featured Article</h2>

              <Link
                to={`/blog/${featuredPost.slug}`}
                className="block border border-white/10 rounded-2xl p-8 hover:border-[#f97316] transition-all"
              >
                <h3 className="text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-400">{featuredPost.description}</p>
              </Link>
            </div>
          </section>
        )}

        {/* Blog List */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6">
            {regularPosts.map((post) => {
              const Icon = iconMap[post.icon] || FileText;

              return (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="border border-white/10 rounded-2xl p-6 hover:border-[#f97316] transition-all"
                >
                  <Icon className="text-[#f97316] mb-4" size={32} />

                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>

                  <p className="text-gray-400 mb-4">
                    {post.description}
                  </p>

                  <span className="text-[#f97316] font-bold">
                    Read article →
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f97316] text-center py-16">
          <Clock className="mx-auto mb-4 text-white" size={40} />

          <h2 className="text-3xl font-bold mb-4 text-white">
            Need Delivery Help in Arizona?
          </h2>

          <Link
            to="/request-pickup"
            className="bg-white text-[#f97316] px-6 py-3 rounded-lg font-bold"
          >
            Get a Quote
          </Link>
        </section>
      </main>
    </>
  );
}
