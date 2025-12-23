import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";

interface Plan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  popular?: boolean;
}

interface PricingCardsProps {
  plans: Plan[];
  billing: "monthly" | "yearly";
}

/* ------------------ Framer Motion Variants ------------------ */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1], // ✅ valid easing
    },
  },
};

/* ------------------ Component ------------------ */

const PricingCards: FC<PricingCardsProps> = ({ plans, billing }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid md:grid-cols-3 gap-8 mb-16"
    >
      {plans.map((plan) => {
        const price =
          billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

        return (
          <motion.div
            key={plan.name}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className={`relative bg-white dark:bg-gray-900 rounded-2xl p-8
              flex flex-col items-center border-2 shadow-lg
              ${
                plan.popular
                  ? "border-primary shadow-primary/30"
                  : "border-transparent"
              }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="absolute -top-4 bg-primary text-white dark:text-black
                  px-4 py-1 rounded-full text-sm font-semibold"
              >
                Most Popular
              </motion.span>
            )}

            {/* Plan Name */}
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {plan.name}
            </h2>

            {/* Price */}
            <div className="mb-6 text-center">
              <p className="text-4xl font-bold text-primary">
                ${price}
                <span className="text-lg font-normal text-gray-500 dark:text-gray-400">
                  {billing === "monthly" ? "/mo" : "/year"}
                </span>
              </p>

              {billing === "yearly" && (
                <motion.span
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block mt-2 text-sm font-medium
                    text-green-600 bg-green-100
                    dark:bg-green-900/30 px-3 py-1 rounded-full"
                >
                  Save 20%
                </motion.span>
              )}
            </div>

            {/* Features */}
            <ul className="mb-8 text-gray-600 dark:text-gray-300 space-y-3 w-full text-left">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="text-green-500">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button size="lg" className="w-full">
              Choose {plan.name}
            </Button>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default PricingCards;
