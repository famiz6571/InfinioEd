import { motion } from "framer-motion";
import type { FC } from "react";
import { Lightbulb, UserCheck, Globe, Shield } from "lucide-react";

const values = [
  {
    title: "Innovation & Creativity",
    description: "Encouraging creative solutions and cutting-edge learning.",
    icon: <Lightbulb className="w-8 h-8 text-indigo-500" />,
  },
  {
    title: "Student-Centric Approach",
    description: "Focusing on learners' needs and growth at every step.",
    icon: <UserCheck className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Integrity & Transparency",
    description: "Building trust through honesty and clarity in all processes.",
    icon: <Shield className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Global Learning Access",
    description: "Providing high-quality education to anyone, anywhere.",
    icon: <Globe className="w-8 h-8 text-purple-500" />,
  },
];

export const ValuesSection: FC = () => (
  <section className="py-24 px-6 text-center bg-gray-50 dark:bg-gray-900">
    <h2 className="text-4xl font-bold mb-16">Our Core Values</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {values.map((v, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 15px 25px rgba(0,0,0,0.15)",
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-xl transition-all cursor-pointer flex flex-col items-center text-center"
        >
          <div className="mb-4">{v.icon}</div>
          <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {v.description}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);
