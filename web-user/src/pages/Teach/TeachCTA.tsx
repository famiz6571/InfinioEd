// src/pages/components/TeachCTA.tsx
import { type FC } from "react";
import { Button } from "@/components/ui/button";

const CTASection: FC = () => (
  <section className="text-center py-12 bg-indigo-50 dark:bg-gray-800 rounded-2xl">
    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
      Ready to Share Your Knowledge?
    </h3>
    <p className="text-gray-700 dark:text-gray-300 mt-2">
      Join INIFINOED as an instructor and start teaching today!
    </p>
    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white mt-4 px-8 py-3 shadow-lg">
      Get Started
    </Button>
  </section>
);

export default CTASection;
