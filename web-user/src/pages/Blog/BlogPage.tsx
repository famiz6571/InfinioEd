import type { FC } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogs";
import { motion, AnimatePresence } from "framer-motion";

// Extract unique categories/tags from blogPosts
const categories = Array.from(
  new Set(blogPosts.flatMap((post) => post.tags ?? ["General"]))
);

const BlogPage: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts based on selected category
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.tags?.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 rounded-md">
      <div className="container mx-auto px-4 py-16">
        {/* Page Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          Our Blog
        </motion.h1>

        {/* Category Filter Menu */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={selectedCategory === "All" ? "default" : "outline"}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            layout
          >
            {filteredPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                layout
              >
                <Card className="h-72 flex flex-col justify-between shadow-md hover:shadow-xl transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 rounded-2xl cursor-pointer relative">
                  {/* Featured Badge */}
                  {post.featured && (
                    <span className="absolute top-1 right-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  )}

                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>

                  <CardFooter className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                    <NavLink to={`/blog/${post.id}`}>
                      <Button
                        variant="link"
                        size="sm"
                        className="px-0 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        Read More →
                      </Button>
                    </NavLink>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Posts Message */}
        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-12">
            No posts found for "{selectedCategory}".
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
