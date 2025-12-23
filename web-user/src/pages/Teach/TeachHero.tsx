import {type FC } from "react";
import { Button } from "@/components/ui/button";

const HeroSection: FC = () => (
  <section className="text-center space-y-4">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
      Become an Instructor on INIFINOED
    </h1>
    <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
      Share your knowledge, create interactive courses, and reach students
      worldwide.
    </p>
    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white mt-4 px-8 py-3 shadow-lg">
      Start Teaching
    </Button>
  </section>
);

export default HeroSection;
