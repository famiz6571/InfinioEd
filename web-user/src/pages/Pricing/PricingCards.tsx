import { type FC } from "react";
import { Button } from "@/components/ui/button";

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

const PricingCards: FC<PricingCardsProps> = ({ plans, billing }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform hover:scale-105 border-2 ${
            plan.popular ? "border-primary" : "border-transparent"
          }`}
        >
          {plan.popular && (
            <span className="absolute top-0 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </span>
          )}
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {plan.name}
          </h2>
          <p className="text-4xl font-bold text-primary mb-6">
            ${billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
            <span className="text-lg font-normal">/mo</span>
          </p>
          <ul className="mb-6 text-gray-600 dark:text-gray-300 space-y-2 w-full text-left">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="text-green-500">✔</span> {feature}
              </li>
            ))}
          </ul>
          <Button size="lg" className="w-full">
            Choose {plan.name}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
