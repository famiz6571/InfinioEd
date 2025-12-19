import type { FC } from "react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How do I enroll in a course?",
    answer: "You can enroll by signing up and selecting a course.",
  },
  {
    question: "Can I get a certificate?",
    answer: "Yes, we provide certificates for completed courses.",
  },
  {
    question: "Do you offer support?",
    answer: "Yes, our support team is available 24/7.",
  },
];

const FAQPage: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <h2 className="font-semibold text-xl">{item.question}</h2>
              {openIndex === idx && (
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
