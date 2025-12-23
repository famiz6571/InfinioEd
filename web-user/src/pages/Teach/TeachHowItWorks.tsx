import {type FC } from "react";

const steps = [
  "Create an account and complete your instructor profile.",
  "Design your course content and upload videos & materials.",
  "Publish your course and start enrolling students.",
  "Track progress, gather feedback, and earn rewards.",
];

const HowItWorksSection: FC = () => (
  <section className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
      How It Works
    </h2>
    <ol className="list-decimal list-inside space-y-4 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
      {steps.map((step, idx) => (
        <li key={idx}>{step}</li>
      ))}
    </ol>
  </section>
);

export default HowItWorksSection;
