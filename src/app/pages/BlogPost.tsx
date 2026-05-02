import { Link, useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  CheckCircle,
} from "lucide-react";

const blogPosts = {
  "phoenix-vehicle-delivery-same-day": {
    title: "Phoenix Vehicle Delivery Same Day No Towing Service",
    description:
      "Same-day Phoenix vehicle delivery without towing or trailers. Learn how direct drive-away service works.",
    category: "Vehicle Delivery",
    date: "May 2026",
    readTime: "4",
    canonical:
      "https://www.flfreightco.com/blog/phoenix-vehicle-delivery-same-day",
    content: [
      {
        heading: "Phoenix Vehicle Delivery Without Towing",
        body: "If you need a fast way to move a running vehicle in Phoenix, direct drive-away delivery can be a better option than waiting for a tow truck. Freedom Line Freight Express drives cars, SUVs, and small trucks directly to the destination.",
      },
      {
        heading: "Who This Service Helps",
        body: "This service helps dealerships, repair shops, auctions, private sellers, and car buyers who need a vehicle moved across Phoenix or nearby cities.",
      },
      {
        heading: "Why Direct Drive-Away Works",
        body: "There is no towing, no trailer, and no third-party handoff. If the vehicle runs, drives, steers, and stops safely, it can often be delivered directly.",
      },
    ],
  },

  "what-is-vehicle-delivery-service": {
    title: "What Is Vehicle Delivery Service in Arizona?",
    description:
      "Learn what vehicle delivery service means and how it helps Arizona customers move running vehicles.",
    category: "Guide",
    date: "May 2026",
    readTime: "3",
    canonical:
      "https://www.flfreightco.com/blog/what-is-vehicle-delivery-service",
    content: [
      {
        heading: "Simple Explanation",
        body: "Vehicle delivery service means a driver picks up a running vehicle and drives it directly to another location. It is different from towing because the vehicle is not loaded onto a tow truck or trailer.",
      },
      {
        heading: "When To Use It",
        body: "Use vehicle delivery when buying a car, moving a vehicle between dealerships, sending a car to a repair shop, or delivering a vehicle to a customer.",
      },
      {
        heading: "Best Fit",
        body: "This service is best for cars, SUVs, and small trucks that are road ready and safe to drive.",
      },
    ],
  },

  "dealerships-move-cars-without-towing": {
    title: "How Dealerships Move Cars Fast Without Towing",
    description:
      "How dealerships use direct vehicle delivery to move cars faster without towing delays.",
    category: "Dealerships",
    date: "May 2026",
    readTime: "4",
    canonical:
      "https://www.flfreightco.com/blog/dealerships-move-cars-without-towing",
    content: [
      {
        heading: "Dealerships Need Speed",
        body: "Dealerships often need vehicles moved quickly between lots, auctions, repair shops, and customers. Waiting on towing can slow down the process.",
      },
      {
        heading: "Direct Delivery Saves Time",
        body: "With direct drive-away service, the vehicle is picked up and driven straight to the destination. This helps reduce delays and keeps inventory moving.",
      },
      {
        heading: "Good For Local Arizona Routes",
        body: "This works well for Phoenix, Mesa, Chandler, Gilbert, Queen Creek, San Tan Valley, and nearby Arizona cities.",
      },
    ],
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <main className="min-h-screen bg-[#0b0f19] text-white px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-8">
            The article you are looking for may have moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center rounded-xl bg-[#f97316] px-6 py-4 font-bold hover:bg-orange-500 transition-all"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: "Freedom Line Freight Express",
    },
    publisher: {
      "@type": "Organization",
      name: "Freedom Line Freight Express",
      url: "https://www.flfreightco.com",
    },
    mainEntityOfPage: post.canonical,
    url: post.canonical,
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Freedom Line Freight Express</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={post.canonical} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-[#0b0f19] text-white overflow-hidden">
        <section className="relative overflow-hidden border-b border-white/10 px-6 py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/20 via-[#0b0f19] to-black" />
          <div className="absolute -top-20 right-0 h-[420px] w-[420px] rounded-full bg-[#f97316]/20 blur-3xl" />

          <div className="relative mx-auto max-w-4xl">
            <Link
              to="/blog"
              className="mb-8 inline-flex items-center gap-2 text-gray-400 hover:text-[#f97316] transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f97316]/30 bg-[#f97316]/10 px-4 py-2 text-sm font-bold text-[#f97316]">
              <Tag size={14} />
              {post.category}
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-gray-300 mb-8">{post.description}</p>

            <div className="flex flex-wrap gap-5 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2">
                <Calendar className="text-[#f97316]" size={16} />
                {post.date}
              </span>

              <span className="inline-flex items-center gap-2">
                <Clock className="text-[#f97316]" size={16} />
                {post.readTime} min read
              </span>

              <span>By Freedom Line Freight Express</span>
            </div>
          </div>
        </section>

        <article className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-white/10 bg-[#111827] p-8 md:p-10 shadow-lg">
              <div className="space-y-10">
                {post.content.map((section) => (
                  <section key={section.heading}>
                    <h2 className="border-l-4 border-[#f97316] pl-4 text-2xl md:text-3xl font-extrabold text-white mb-4">
                      {section.heading}
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {section.body}
                    </p>
                  </section>
                ))}
              </div>

              <div className="mt-12 rounded-2xl border border-[#f97316]/30 bg-[#f97316]/10 p-6">
                <h2 className="text-2xl font-extrabold mb-4">
                  Quick FLF Express Summary
                </h2>

                <div className="grid gap-3 text-gray-300">
                  {[
                    "No towing",
                    "No trailers",
                    "Direct drive-away service",
                    "Owner-operated Arizona business",
                    "Vehicle must run, drive, steer, and stop safely",
                  ].map((item) => (
                    <p key={item} className="flex items-start gap-3">
                      <CheckCircle
                        className="text-[#f97316] mt-1 shrink-0"
                        size={18}
                      />
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-[#f97316]/20 to-[#111827] p-8 md:p-10">
              <h2 className="text-3xl font-extrabold mb-4">
                Need Delivery Help in Arizona?
              </h2>

              <p className="text-gray-300 text-lg mb-8">
                Request a quote for vehicle delivery, auto parts delivery,
                document courier service, or key and title runner service.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/request-pickup"
                  className="inline-flex items-center justify-center rounded-xl bg-[#f97316] px-7 py-4 font-bold hover:bg-orange-500 transition-all"
                >
                  Request Pickup
                  <ArrowRight className="ml-2" size={18} />
                </Link>

                <Link
                  to="/phoenix-delivery"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-bold hover:border-[#f97316] hover:text-[#f97316] transition-all"
                >
                  Phoenix Delivery Service
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
