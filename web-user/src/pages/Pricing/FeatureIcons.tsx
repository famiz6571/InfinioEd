import { type FC } from "react";
import { CheckCircle } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface FeatureIconsProps {
  features: Feature[];
}

const FeatureIcons: FC<FeatureIconsProps> = ({ features }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8 my-16">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform"
        >
          <CheckCircle className="text-primary w-10 h-10 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeatureIcons;
