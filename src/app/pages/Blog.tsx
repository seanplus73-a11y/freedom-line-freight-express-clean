import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const posts = [
  {
    slug: "vehicle-delivery-phoenix-az",
    title: "Vehicle Delivery in Phoenix AZ: How Direct Drive-Away Service Works",
    excerpt:
      "Learn how vehicle pickup and delivery works in Phoenix without towing, trailers, or third party handling.",
    date: "May 2026",
    readTime: 4,
    category: "Vehicle Delivery",
  },
];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Freedom Line Freight Express</title>
        <meta
          name="description"
          content="Helpful guides about vehicle delivery, auto parts delivery, and courier service in Phoenix and Arizona."
        />
        <link rel="canonical" href="https://www.flfreightco.com/blog" />
      </Helmet>

      <main className="bg-neutral-950 text-white min-h-screen">
        <section className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-black py-20">
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500 bg-black/50 px-4 py-2 text-sm font-semibold">
                <Tag className="text-orange-500" size={16} />
                FLF Express Blog
              </div>

              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Vehicle Delivery and{" "}
                <span className="text-orange-500">Arizona Courier Guides</span>
              </h1>

              <p className="text-lg text-gray-300">
                Helpful articles about direct vehicle delivery, auto parts delivery,
                business transport, and courier service across Arizona.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group rounded-xl border border-neutral-800 bg-neutral-900 p-6 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <span className="mb-3 inline-block self-start rounded-full bg-orange-500/10 border border-orange-500/30 px-3 py-1 text-xs font-semibold text-orange-400">
                    {post.category}
                  </span>

                  <h2 className="mb-3 text-xl font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="mb-4 text-gray-400 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-neutral-800">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-orange-500" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} className="text-orange-500" />
                        {post.readTime} min read
                      </span>
                    </div>

                    <span className="flex items-center gap-1 text-orange-400 font-medium">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
