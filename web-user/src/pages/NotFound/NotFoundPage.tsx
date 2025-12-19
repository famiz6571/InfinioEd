// src/pages/NotFound/NotFoundPage.tsx
import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-background text-foreground transition-colors duration-300">
      <h1 className="text-7xl font-bold mb-4 text-primary">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link to="/">
        <Button size="lg" variant="default">
          Go to Homepage
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
