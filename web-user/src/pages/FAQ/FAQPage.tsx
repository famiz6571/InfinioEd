import { type FC } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How do I enroll in a course?",
    answer:
      "You can enroll by signing up and selecting a course from our catalog. Once enrolled, you will have full access to the course content.",
  },
  {
    question: "Can I get a certificate?",
    answer:
      "Yes, we provide certificates for all completed courses. You can download them directly from your profile after finishing a course.",
  },
  {
    question: "Do you offer support?",
    answer:
      "Absolutely! Our support team is available 24/7 via chat and email to help you with any questions or issues.",
  },
  {
    question: "Are courses free or paid?",
    answer:
      "We offer both free and paid courses. Paid courses provide additional resources and certificates.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Yes, all our courses are self-paced. You can start and finish them anytime according to your schedule.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "Some courses are beginner-friendly, while others require prior knowledge. Check the course details before enrolling.",
  },
  {
    question: "Can I access courses offline?",
    answer:
      "Yes, you can download course materials and videos to access them offline using our mobile app.",
  },
  {
    question: "How do I track my progress?",
    answer:
      "Your progress is tracked automatically. You can see completed modules, quizzes, and overall progress in your dashboard.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Refund policies depend on the course. Paid courses generally have a 14-day refund policy.",
  },
  {
    question: "Do you provide mentorship?",
    answer:
      "Some courses offer mentorship sessions. You can check the course page to see if mentorship is included.",
  },
];

const FAQPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-16 rounded-md">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h1>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-white dark:bg-gray-800 rounded-xl shadow"
            >
              <AccordionTrigger className="flex justify-between items-center p-6 font-semibold text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-gray-700 dark:text-gray-300">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQPage;
