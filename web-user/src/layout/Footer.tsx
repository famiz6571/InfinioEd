// src/layout/Footer.tsx
import type { FC } from "react";

const Footer: FC = () => (
  <footer className="bg-gray-200 text-gray-800 dark:bg-gray-900 dark:text-gray-200 p-4 mt-auto transition-colors duration-300">
    <div className="container mx-auto text-center">
      &copy; {new Date().getFullYear()} MyApp. All rights reserved.
    </div>
  </footer>
);

export default Footer;
