import { motion } from "framer-motion";
import type { FC } from "react";

const milestones = [
  { year: "2022", event: "INIFINOED Founded" },
  { year: "2023", event: "First 1000 Students Enrolled" },
  { year: "2024", event: "Expanded Courses Globally" },
];

export const TimelineSection: FC = () => (
  <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
    <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
    <div className="max-w-5xl mx-auto space-y-8">
      {milestones.map((m, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow flex items-center justify-between"
        >
          <span className="font-bold text-indigo-600 text-xl">{m.year}</span>
          <p className="text-gray-700 dark:text-gray-300">{m.event}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
