import { type FC } from "react";

interface Plan {
  name: string;
  features: string[];
}

interface PricingTableProps {
  plans: Plan[];
  allFeatures: string[];
}

const PricingTable: FC<PricingTableProps> = ({ plans, allFeatures }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse border border-gray-200 dark:border-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="p-4 text-left">Features</th>
            {plans.map((plan) => (
              <th
                key={plan.name}
                className="p-4 text-center text-gray-900 dark:text-white"
              >
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allFeatures.map((feature) => (
            <tr
              key={feature}
              className="border-t border-gray-200 dark:border-gray-700"
            >
              <td className="p-4 text-gray-700 dark:text-gray-300">
                {feature}
              </td>
              {plans.map((plan) => (
                <td key={plan.name + feature} className="p-4 text-center">
                  {plan.features.includes(feature) ? (
                    <span className="text-green-500 font-bold">✔</span>
                  ) : (
                    <span className="text-red-500 font-bold">✖</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
