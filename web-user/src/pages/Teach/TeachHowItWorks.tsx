// src/pages/components/TeachHowItWorks.tsx
import { type FC } from "react";

const steps = [
  "Create an account and complete your instructor profile.",
  "Design your course content and upload videos & materials.",
  "Publish your course and start enrolling students.",
  "Track progress, gather feedback, and earn rewards.",
];

const HowItWorksSection: FC = () => (
  <section className="space-y-12">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
      How It Works
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="flex items-start gap-4 p-6 bg-indigo-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex-shrink-0 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600">
            {idx + 1}
          </div>
          <p className="text-gray-700 dark:text-gray-300">{step}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorksSection;
