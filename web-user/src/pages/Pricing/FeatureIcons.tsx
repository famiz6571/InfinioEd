import { type FC } from "react";
import { CheckCircle } from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface Feature {
  title: string;
  description: string;
}

interface FeatureIconsProps {
  features: Feature[];
}

/* ------------------ Motion Variants ------------------ */
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const iconVariants: Variants = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
};

/* ------------------ Component ------------------ */
const FeatureIcons: FC<FeatureIconsProps> = ({ features }) => {
  return (
    <motion.div
      className="grid md:grid-cols-3 gap-8 my-16 px-4 md:px-0"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {features.map((feature) => (
        <motion.div
          key={feature.title}
          variants={cardVariants}
          whileHover={{ y: -10, scale: 1.05 }}
          className="relative flex flex-col items-center text-center p-8 rounded-2xl
            bg-gradient-to-br from-white/80 to-gray-100/60 dark:from-gray-800/80 dark:to-gray-900/60
            shadow-lg dark:shadow-black/30 backdrop-blur-md border border-gray-200 dark:border-gray-700
            transition-transform cursor-pointer"
        >
          <motion.div
            variants={iconVariants}
            className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6"
          >
            <CheckCircle className="w-8 h-8" />
          </motion.div>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeatureIcons;
