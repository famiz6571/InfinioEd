import {type FC } from "react";

const features = [
  {
    title: "Create Your Own Courses",
    description:
      "Design and publish interactive courses for students worldwide.",
  },
  {
    title: "Track Student Progress",
    description:
      "Monitor enrollments, completion rates, and student feedback easily.",
  },
  {
    title: "Earn Rewards",
    description:
      "Monetize your expertise and earn from every course you publish.",
  },
];

const FeaturesSection: FC = () => (
  <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {features.map((feature, idx) => (
      <FeatureCard key={idx} {...feature} />
    ))}
  </section>
);

const FeatureCard: FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <div className="p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1">
    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
      {title}
    </h4>
    <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
  </div>
);

export default FeaturesSection;
