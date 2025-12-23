import { motion } from "framer-motion";
import type { FC } from "react";
import { CircleDot } from "lucide-react";

const milestones = [
  { year: "2022", event: "INIFINOED Founded" },
  { year: "2023", event: "First 1000 Students Enrolled" },
  { year: "2024", event: "Expanded Courses Globally" },
  { year: "2025", event: "Launched Mobile App" },
];

export const TimelineSection: FC = () => (
  <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
    <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-1 bg-indigo-200 dark:bg-indigo-700 rounded"></div>

      {milestones.map((m, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className="relative flex items-center mb-12"
        >
          {/* Dot */}
          <div className="z-10 flex-shrink-0 w-12 h-12 flex items-center justify-center bg-indigo-600 rounded-full text-white shadow-lg">
            <CircleDot className="w-6 h-6" />
          </div>

          {/* Content */}
          <div className="ml-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-2xl transition-shadow flex-1">
            <span className="font-bold text-indigo-600 text-xl">{m.year}</span>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{m.event}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
