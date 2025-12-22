import { motion } from "framer-motion";
import type { FC } from "react";

const values = [
  "Innovation & Creativity",
  "Student-Centric Approach",
  "Integrity & Transparency",
  "Global Learning Access",
];

export const ValuesSection: FC = () => (
  <section className="py-24 px-6 text-center">
    <h2 className="text-4xl font-bold mb-12">Our Core Values</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {values.map((v, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
        >
          <p className="font-semibold text-lg">{v}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
