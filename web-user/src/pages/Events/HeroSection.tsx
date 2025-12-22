import type { FC } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
}

const HeroSection: FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <motion.section
      className="text-center py-24 px-6 bg-indigo-600 text-white rounded-t-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl max-w-2xl mx-auto"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {subtitle}
      </motion.p>
    </motion.section>
  );
};

export default HeroSection;
