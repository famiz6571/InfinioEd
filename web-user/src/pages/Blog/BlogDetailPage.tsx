import type { FC } from "react";
import { useParams, NavLink } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding React 18 Features",
    content:
      "React 18 introduced new features like concurrent mode and automatic batching...",
    date: "Dec 10, 2025",
  },
  {
    id: "2",
    title: "Tailwind CSS Tips and Tricks",
    content:
      "Learn how to make your layouts more responsive and visually appealing using Tailwind CSS...",
    date: "Dec 12, 2025",
  },
  {
    id: "3",
    title: "Building Modern Web Apps with React and TypeScript",
    content:
      "TypeScript adds strong typing to your React apps, making them more maintainable and less error-prone...",
    date: "Dec 15, 2025",
  },
];

const BlogDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <NavLink
          to="/blog"
          className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
        >
          ← Back to Blog
        </NavLink>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <span className="text-gray-500 dark:text-gray-400 mb-6 block">
          {post.date}
        </span>
        <p className="text-lg">{post.content}</p>
      </div>
    </div>
  );
};

export default BlogDetailPage;
