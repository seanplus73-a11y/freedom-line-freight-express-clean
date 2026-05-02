import { useParams, Navigate, Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, MessageSquare } from "lucide-react";
import { getBlogPostBySlug, getAllBlogPosts } from "../data/blogPostsContent.tsx";

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

      <main className="min-h-screen bg-[#0b0f19] text-white">
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
                    href="sms:+14804772400"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-[#f97316] transition-all"
                  >
                    <MessageSquare size={20} />
                    Text: (480) 477-2400
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

