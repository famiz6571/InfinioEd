// src/layout/Layout.tsx
import type { FC, ReactNode } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Toaster position="top-right" />
      <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
        <header className="sticky top-0 z-50 bg-background shadow-md transition-colors duration-300">
          <Navbar />
        </header>

        <main className="flex-grow container mx-auto px-4 py-8 ">
          {children ?? <Outlet />}
        </main>

        <Footer />

        {/* Scroll-to-top button */}
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Layout;
