import type { FC } from "react";
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

const BlogPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 rounded-md">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-10">Our Blog</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </span>
                <NavLink to={`/blog/${post.id}`}>
                  <Button variant="link" size="sm" className="px-0">
                    Read More →
                  </Button>
                </NavLink>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
