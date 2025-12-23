// src/pages/About/MissionVision.tsx
import type { FC } from "react";
import { motion } from "framer-motion";

const MissionVision: FC = () => {
  return (
    <>
      {/* Mission Section */}
      <motion.section
        className="grid md:grid-cols-2 gap-8 mb-16 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            To make learning accessible, engaging, and practical for everyone,
            equipping learners with the skills they need to succeed in the
            modern world.
          </p>
        </div>
        <img
          src="/mission.png"
          alt="Mission"
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </motion.section>

      {/* Vision Section */}
      <motion.section
        className="grid md:grid-cols-2 gap-8 mb-16 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src="/vision.png"
          alt="Vision"
          className="rounded-xl shadow-lg w-full object-cover"
        />
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">Our Vision</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            To become a leading global e-learning platform that inspires,
            educates, and empowers learners to reach their full potential.
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default MissionVision;
