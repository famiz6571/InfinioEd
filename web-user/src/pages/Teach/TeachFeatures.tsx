// src/pages/components/TeachFeatures.tsx
import { type FC } from "react";
import { Lightbulb, Monitor, DollarSign } from "lucide-react";

const features = [
  {
    title: "Create Your Own Courses",
    description:
      "Design and publish interactive courses for students worldwide.",
    icon: <Lightbulb className="w-6 h-6 text-indigo-600" />,
    color: "bg-indigo-100",
  },
  {
    title: "Track Student Progress",
    description:
      "Monitor enrollments, completion rates, and student feedback easily.",
    icon: <Monitor className="w-6 h-6 text-purple-600" />,
    color: "bg-purple-100",
  },
  {
    title: "Earn Rewards",
    description:
      "Monetize your expertise and earn from every course you publish.",
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    color: "bg-green-100",
  },
];

const FeaturesSection: FC = () => (
  <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {features.map((feature, idx) => (
      <div
        key={idx}
        className="flex flex-col gap-4 p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transform transition-transform duration-300 cursor-pointer"
      >
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-xl ${feature.color}`}
        >
          {feature.icon}
        </div>
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
          {feature.title}
        </h4>
        <p className="text-gray-600 dark:text-gray-300">
          {feature.description}
        </p>
      </div>
    ))}
  </section>
);

export default FeaturesSection;
