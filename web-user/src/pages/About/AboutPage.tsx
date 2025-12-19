// src/pages/About/AboutPage.tsx
import type { FC } from "react";
import MissionVision from "./MissionVision";
import TeamSection from "./TeamSection";

const AboutPage: FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">About INIFINOED</h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          INIFINOED is a cutting-edge e-learning platform empowering students
          worldwide with high-quality courses, modern tools, and a supportive
          community.
        </p>
      </section>

      <MissionVision />
      <TeamSection />
    </div>
  );
};

export default AboutPage;
