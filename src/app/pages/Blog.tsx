import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { ArrowRight, FileText } from "lucide-react";

const posts = [
  {
    title: "Phoenix Vehicle Delivery Same Day No Towing Service",
    description:
      "Learn how same-day vehicle delivery works in Phoenix AZ without towing or trailers.",
    url: "/blog/phoenix-vehicle-delivery-same-day",
  },
  {
    title: "What Is Vehicle Delivery Service in Arizona?",
    description:
      "A simple guide explaining drive-away vehicle delivery for cars, SUVs, and small trucks.",
    url: "/blog/what-is-vehicle-delivery-service",
  },
  {
    title: "How Dealerships Move Cars Fast Without Towing",
    description:
      "How dealerships use direct vehicle delivery for faster customer service and inventory movement.",
    url: "/blog/dealerships-move-cars-without-towing",
  },
];

export default function Blog() {
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

      <main className="min-h-screen bg-[#0b0f19] text-white">
        <section className="px-6 py-24 border-b border-white/10">
          <div className="mx-auto max-w-6xl">
            <p className="text-[#f97316] font-bold uppercase tracking-widest mb-3">
              FLF Express Blog
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Arizona Delivery Guides
            </h1>

            <p className="max-w-3xl text-gray-400 text-lg">
              Helpful articles about vehicle delivery, auto parts courier
              service, document delivery, and key and title runner service in
              Phoenix and nearby Arizona cities.
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.url}
                to={post.url}
                className="rounded-2xl border border-white/10 bg-[#111827] p-7 hover:border-[#f97316] hover:-translate-y-1 transition-all"
              >
                <FileText className="text-[#f97316] mb-4" size={36} />

                <h2 className="text-xl font-bold mb-3">{post.title}</h2>

                <p className="text-gray-400 mb-5">{post.description}</p>

                <span className="inline-flex items-center text-[#f97316] font-bold">
                  Read article <ArrowRight className="ml-2" size={18} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
