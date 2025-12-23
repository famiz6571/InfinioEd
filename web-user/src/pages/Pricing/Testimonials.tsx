import { type FC } from "react";
import { motion, type Variants } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  message: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
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

const quoteVariants: Variants = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

/* ------------------ Component ------------------ */
const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="relative my-24 px-4 sm:px-6 lg:px-0">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
        What Our Users Say
      </h2>

      <motion.div
        className="flex justify-start md:justify-center overflow-x-auto no-scrollbar space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 py-4 snap-x snap-mandatory"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px]
              relative bg-gradient-to-br from-white/80 to-gray-100/60 dark:from-gray-800/80 dark:to-gray-900/60
              backdrop-blur-md border border-gray-200 dark:border-gray-700
              rounded-3xl p-6 sm:p-8 shadow-lg cursor-pointer snap-center"
          >
            {/* Quote icon */}
            <motion.span
              variants={quoteVariants}
              className="absolute -top-4 left-4 text-4xl sm:text-5xl text-primary/40 dark:text-primary/30"
            >
              “
            </motion.span>

            {/* Testimonial Message */}
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-left text-sm sm:text-base">
              {t.message}
            </p>

            {/* User Info */}
            <div className="flex items-center mt-auto gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg sm:text-xl">
                {t.name.charAt(0)}
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                  {t.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                  {t.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Optional: gradient overlay for sides */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-white dark:from-gray-900"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-white dark:from-gray-900"></div>
    </section>
  );
};

export default Testimonials;
