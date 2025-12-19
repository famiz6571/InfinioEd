// src/layout/Footer.tsx
import type { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="bg-primary dark:bg-gray-900 text-gray-200 transition-colors duration-300 mt-auto">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-2">INIFINOED</h3>
          <p className="text-gray-300 text-sm">
            Empowering learners worldwide with modern e-learning tools. Join us
            and expand your knowledge.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4 justify-center md:justify-start">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 hover:text-white transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 hover:text-white transition-colors" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5 hover:text-white transition-colors" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 hover:text-white transition-colors" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-5 h-5 hover:text-white transition-colors" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-5 h-5 hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-3 text-white">Pages</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/"
                className="hover:underline hover:text-white transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:underline hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="hover:underline hover:text-white transition-colors"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:underline hover:text-white transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:underline hover:text-white transition-colors"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-3 text-white">Resources</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/tutorials"
                className="hover:underline hover:text-white transition-colors"
              >
                Tutorials
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="hover:underline hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="hover:underline hover:text-white transition-colors"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:underline hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-3 text-white">Newsletter</h4>
          <p className="text-gray-300 text-sm mb-4">
            Subscribe to get the latest updates, courses, and articles.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-l-lg border border-gray-700 bg-gray-800 text-white focus:outline-none w-full"
            />
            <Button variant="default" className="rounded-r-lg px-4">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} INIFINOED. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
