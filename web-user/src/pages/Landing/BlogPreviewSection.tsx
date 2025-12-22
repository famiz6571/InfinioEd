import { blogPosts } from "@/data/blogs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogPreviewSection = () => {
  return (
    <section className="py-24 bg-muted/10 dark:bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground dark:text-foreground"
        >
          Latest Articles
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link
                to={`/blog/${post.id}`}
                className="
                  block p-6 bg-background dark:bg-gray-800
                  rounded-2xl shadow-md hover:shadow-xl
                  hover:-translate-y-1 transition-transform duration-300
                  h-48 flex flex-col justify-between
                "
              >
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground dark:text-foreground">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground dark:text-gray-400 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
