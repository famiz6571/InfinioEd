import type { FC } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogs";
import { motion } from "framer-motion";

const BlogDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-md">
        <p className="text-xl">Blog post not found.</p>
      </div>
    );
  }

  // Find related posts by matching tags
  const relatedPosts = blogPosts.filter(
    (p) => p.id !== post.id && p.tags?.some((tag) => post.tags?.includes(tag))
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 rounded-md">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <Button
            variant="link"
            onClick={() => navigate(-1)}
            className="mb-6 px-0 text-indigo-600 dark:text-indigo-400"
          >
            ← Back to Blog
          </Button>

          {/* Blog Title & Date */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{post.title}</h1>
          <span className="text-gray-500 dark:text-gray-400 mb-6 block">
            {post.date}
          </span>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-indigo-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Blog Content */}
          <div
            className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Related Articles</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedPosts.map((p) => (
                  <motion.div
                    key={p.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow cursor-pointer transition-shadow"
                    onClick={() => navigate(`/blog/${p.id}`)}
                  >
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
                      {p.excerpt}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Optional: Subscribe or Call-to-Action */}
          <div className="mt-12 text-center">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Enjoyed this article? Check out more blogs or subscribe for
              updates!
            </p>
            <NavLink to="/blog">
              <Button size="lg" className="px-6 py-3">
                View All Blogs
              </Button>
            </NavLink>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
