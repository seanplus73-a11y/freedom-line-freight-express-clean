import { Helmet } from "react-helmet";

const blogPosts = [
  {
    id: 1,
    number: "01",
    title: "Fast and Safe Vehicle Delivery in Arizona",
    slug: "/blog/arizona-vehicle-delivery-guide",
    description:
      "Learn how to safely and quickly deliver vehicles, auto parts, and packages across Phoenix and Arizona. Same day delivery tips and guide.",
    tags: ["Arizona", "Vehicle Delivery", "Same Day"],
    readTime: "5 min read",
  },
  {
    id: 2,
    number: "02",
    title: "Why Direct Vehicle Delivery Is Better Than Towing in Arizona",
    slug: "/blog/direct-vehicle-delivery-vs-towing-arizona",
    description:
      "Discover why direct vehicle delivery is safer, faster, and more affordable than towing across Phoenix, Queen Creek, Gilbert, Chandler, and Mesa.",
    tags: ["No Towing", "Phoenix", "Vehicle Transport"],
    readTime: "6 min read",
  },
  {
    id: 3,
    number: "03",
    title: "Same Day Vehicle Delivery in Phoenix for Dealers and Repair Shops",
    slug: "/blog/same-day-vehicle-delivery-phoenix",
    description:
      "Same day vehicle delivery serving car dealerships and auto repair shops across Phoenix Metro. Owner operated. No towing. No trailers.",
    tags: ["Same Day", "Dealerships", "Repair Shops"],
    readTime: "6 min read",
  },
  {
    id: 4,
    number: "04",
    title: "How Arizona Businesses Use Vehicle Delivery Services to Save Time",
    slug: "/blog/arizona-business-vehicle-delivery-services",
    description:
      "How small businesses, repair shops, and dealerships in Phoenix Arizona use vehicle concierge services to save time and serve customers better.",
    tags: ["Business", "Concierge", "Arizona"],
    readTime: "7 min read",
  },
];

export default function BlogIndex() {
  return (
    <>
      <Helmet>
        <title>Blog | Vehicle Delivery Tips and Guides | Freedom Line Freight Express Arizona</title>
        <meta
          name="description"
          content="Read vehicle delivery tips, guides, and local Arizona service information from Freedom Line Freight Express. Serving Phoenix, Queen Creek, Gilbert, Chandler, and Mesa AZ."
        />
      </Helmet>

      <div className="bg-black text-white min-h-screen px-6 py-12">
        <div className="max-w-4xl mx-auto">

          {/* BREADCRUMB */}
          <p className="text-orange-500 text-sm mb-6">
            <a href="/" className="hover:underline">Home</a> &rsaquo; Blog
          </p>

          {/* HEADER */}
          <div className="mb-12 border-b border-gray-800 pb-10">
            <h1 className="text-4xl font-bold mb-3">
              Vehicle Delivery Tips &amp; Arizona Guides
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Practical guides on vehicle delivery, concierge services, and how Freedom Line Freight Express
              serves drivers and businesses across Phoenix Metro and surrounding Arizona cities.
            </p>
          </div>

          {/* BLOG CARDS */}
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <a
                key={post.id}
                href={post.slug}
                className="group block bg-gray-900 border border-gray-800 hover:border-orange-500 rounded-xl p-6 transition-all duration-200"
              >
                <div className="flex items-start gap-5">

                  {/* NUMBER */}
                  <span className="text-3xl font-bold text-gray-700 group-hover:text-orange-500 transition-colors duration-200 leading-none mt-1 select-none w-10 shrink-0">
                    {post.number}
                  </span>

                  {/* CONTENT */}
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-800 text-orange-400 px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="text-xs text-gray-500 px-2 py-1">
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition-colors duration-200">
                      {post.title}
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {post.description}
                    </p>

                    <p className="mt-4 text-orange-500 text-sm font-medium group-hover:underline">
                      Read Article &rarr;
                    </p>
                  </div>

                </div>
              </a>
            ))}
          </div>

          {/* CTA BOTTOM */}
          <div className="bg-gray-900 border border-orange-500 p-6 rounded-xl mt-14">
            <h3 className="text-xl font-semibold mb-2">
              Need Vehicle Delivery in Arizona?
            </h3>
            <p className="text-gray-300 mb-4">
              Freedom Line Freight Express is a local, owner-operated business serving Phoenix, Queen Creek,
              Gilbert, Chandler, Mesa, and surrounding Arizona areas. No towing. No trailers.
              We drive your vehicle directly.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/request-pickup"
                className="inline-block bg-orange-500 px-6 py-3 rounded-lg text-black font-semibold hover:bg-orange-400"
              >
                Request Pickup
              </a>
              <a
                href="sms:4807428553"
                className="inline-block border border-orange-500 text-orange-400 px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-black"
              >
                Text Us: 480-742-8553
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
