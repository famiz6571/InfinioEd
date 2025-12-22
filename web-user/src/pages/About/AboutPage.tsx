// src/pages/About/AboutPage.tsx
import type { FC } from "react";
import MissionVision from "./MissionVision";
import TeamSection from "./TeamSection";
import { ValuesSection } from "./ValuesSection";
import { TimelineSection } from "./TimelineSection";

const AboutPage: FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 rounded-md px-4 md:px-24 ">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About INIFINOED</h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          INIFINOED is a cutting-edge e-learning platform empowering students
          worldwide with high-quality courses, modern tools, and a supportive
          community.
        </p>
      </section>

      {/* Mission & Vision */}
      <MissionVision />

      {/* Team Section */}
      <TeamSection />

      {/* Values Section */}
      <ValuesSection />

      {/* Timeline / History Section */}
      <TimelineSection />
    </div>
  );
};

export default AboutPage;
