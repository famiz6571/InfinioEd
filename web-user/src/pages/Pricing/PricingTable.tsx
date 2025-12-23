import { type FC } from "react";
import { motion, type Variants } from "framer-motion";

interface Plan {
  name: string;
  features: string[];
  popular?: boolean;
}

interface PricingTableProps {
  plans: Plan[];
  allFeatures: string[];
}

/* ------------------ Motion Variants ------------------ */
const tableVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
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
const PricingTable: FC<PricingTableProps> = ({ plans, allFeatures }) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={tableVariants}
      className="overflow-x-auto rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
    >
      <table className="w-full table-auto border-collapse">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="p-4 text-left font-medium">Features</th>
            {plans.map((plan) => (
              <th
                key={plan.name}
                className={`p-4 text-center font-semibold text-gray-900 dark:text-white ${
                  plan.popular
                    ? "bg-primary/20 dark:bg-primary/40 rounded-lg"
                    : ""
                }`}
              >
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>

        <motion.tbody>
          {allFeatures.map((feature, idx) => (
            <motion.tr
              key={feature}
              variants={rowVariants}
              className={`border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors ${
                idx % 2 === 0 ? "bg-gray-50 dark:bg-gray-900/50" : ""
              }`}
            >
              <td className="p-4 text-gray-700 dark:text-gray-300 font-medium">
                {feature}
              </td>
              {plans.map((plan) => (
                <td key={plan.name + feature} className="p-4 text-center">
                  <motion.span
                    variants={iconVariants}
                    initial="hidden"
                    animate="show"
                    className={`font-bold ${
                      plan.features.includes(feature)
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {plan.features.includes(feature) ? "✔" : "✖"}
                  </motion.span>
                </td>
              ))}
            </motion.tr>
          ))}
        </motion.tbody>
      </table>
    </motion.div>
  );
};

export default PricingTable;
