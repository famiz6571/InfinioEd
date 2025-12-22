import type { FC } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogs";
import { motion } from "framer-motion";

const BlogDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <p className="text-xl">Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <NavLink to="/blog">
            <Button
              variant="link"
              className="mb-6 px-0 text-indigo-600 dark:text-indigo-400"
            >
              ← Back to Blog
            </Button>
          </NavLink>

          {/* Blog Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <span className="text-gray-500 dark:text-gray-400 mb-8 block">
            {post.date}
          </span>

          {/* Blog Content */}
          <div
            className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Optional: Related Articles can go here */}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
