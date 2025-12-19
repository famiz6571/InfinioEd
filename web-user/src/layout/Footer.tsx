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
  // Page links
  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Blog", path: "/blog" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  // Resource links
  const resources = [
    { name: "Tutorials", path: "/tutorials" },
    { name: "FAQ", path: "/faq" },
    { name: "Support", path: "/support" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  // Social links
  const socials: { icon: FC<any>; url: string }[] = [
    { icon: Github, url: "https://github.com" },
    { icon: Linkedin, url: "https://linkedin.com" },
    { icon: Twitter, url: "https://twitter.com" },
    { icon: Instagram, url: "https://instagram.com" },
    { icon: Youtube, url: "https://youtube.com" },
    { icon: Facebook, url: "https://facebook.com" },
  ];

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
            {socials.map(({ icon: Icon, url }) => (
              <a key={url} href={url} target="_blank" rel="noopener noreferrer">
                <Icon className="w-5 h-5 hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-3 text-white">Pages</h4>
          <ul className="flex flex-col gap-2">
            {pages.map((page) => (
              <li key={page.name}>
                <Link
                  to={page.path}
                  className="hover:underline hover:text-white transition-colors"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-3 text-white">Resources</h4>
          <ul className="flex flex-col gap-2">
            {resources.map((res) => (
              <li key={res.name}>
                <Link
                  to={res.path}
                  className="hover:underline hover:text-white transition-colors"
                >
                  {res.name}
                </Link>
              </li>
            ))}
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
