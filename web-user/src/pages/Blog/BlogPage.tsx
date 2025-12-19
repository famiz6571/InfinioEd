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

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding React 18 Features",
    excerpt:
      "React 18 introduced new features like concurrent mode and automatic batching...",
    date: "Dec 10, 2025",
  },
  {
    id: 2,
    title: "Tailwind CSS Tips and Tricks",
    excerpt:
      "Learn how to make your layouts more responsive and visually appealing using Tailwind CSS...",
    date: "Dec 12, 2025",
  },
  {
    id: 3,
    title: "Building Modern Web Apps with React and TypeScript",
    excerpt:
      "TypeScript adds strong typing to your React apps, making them more maintainable and less error-prone...",
    date: "Dec 15, 2025",
  },
];

const BlogPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="hover:shadow-lg transition-shadow duration-300"
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
                    Read More
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
