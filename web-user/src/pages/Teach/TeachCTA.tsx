// src/pages/components/TeachCTA.tsx
import { type FC } from "react";
import { Button } from "@/components/ui/button";

const CTASection: FC = () => (
  <section className="relative text-center py-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl text-white overflow-hidden">
    <div className="absolute -top-16 -right-16 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
    <h3 className="text-3xl font-bold">Ready to Share Your Knowledge?</h3>
    <p className="mt-3 max-w-2xl mx-auto">
      Join INIFINOED as an instructor and start teaching today!
    </p>
    <Button className="mt-6 px-8 py-3 bg-white text-indigo-600 hover:bg-gray-100 shadow-lg">
      Get Started
    </Button>
  </section>
);

export default CTASection;
