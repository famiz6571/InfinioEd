// src/pages/About/MissionVision.tsx
import type { FC } from "react";

const MissionVision: FC = () => {
  return (
    <>
      {/* Mission / Vision */}
      <section className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300">
            To make learning accessible, engaging, and practical for everyone,
            equipping learners with the skills they need to succeed in the
            modern world.
          </p>
        </div>
        <img
          src="/mission.png"
          alt="Mission"
          className="rounded-lg shadow-md"
        />
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        <img src="/vision.png" alt="Vision" className="rounded-lg shadow-md" />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 dark:text-gray-300">
            To become a leading global e-learning platform that inspires,
            educates, and empowers learners to reach their full potential.
          </p>
        </div>
      </section>
    </>
  );
};

export default MissionVision;
