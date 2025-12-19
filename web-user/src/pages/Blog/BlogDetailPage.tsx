import type { FC } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogs";

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
      <div className="container mx-auto px-6 py-12">
        <NavLink to="/blog">
          <Button variant="link" className="mb-6 px-0">
            ← Back to Blog
          </Button>
        </NavLink>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-4xl">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-gray-500 dark:text-gray-400 block mb-6">
              {post.date}
            </span>
            <div
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogDetailPage;
