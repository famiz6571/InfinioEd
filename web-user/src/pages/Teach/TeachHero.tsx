// src/pages/components/TeachHero.tsx
import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";

const HeroSection: FC = () => (
  <section className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-10 md:p-20 overflow-hidden">
    {/* Illustration / Icon */}
    <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

    <div className="flex-1 space-y-6 z-10">
      <h1 className="text-4xl sm:text-5xl font-extrabold">
        Become an Instructor on INIFINOED
      </h1>
      <p className="text-lg sm:text-xl max-w-xl">
        Share your knowledge, create interactive courses, and reach students
        worldwide. Monetize your skills and make an impact.
      </p>
      <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 shadow-lg flex items-center gap-2">
        <Lightbulb className="w-5 h-5" /> Start Teaching
      </Button>
    </div>

    <div className="flex-1 flex justify-center">
      <img
        src="/teach-illustration.svg"
        alt="Instructor Illustration"
        className="w-80 md:w-96"
      />
    </div>
  </section>
);

export default HeroSection;
