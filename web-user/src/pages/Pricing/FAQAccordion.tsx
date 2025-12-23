import { type FC, useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

const FAQAccordion: FC<FAQAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-24 px-4 sm:px-6 lg:px-0">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white/90 to-gray-100/60 dark:from-gray-800/90 dark:to-gray-900/60
              backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md overflow-hidden cursor-pointer
              transition-transform hover:scale-102"
            onClick={() => toggle(index)}
          >
            {/* Question */}
            <div className="flex justify-between items-center p-5">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </h3>
              <ChevronDown
                className={`w-6 h-6 text-primary transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Answer */}
            <div
              className={`px-5 pb-5 text-gray-700 dark:text-gray-300 text-sm sm:text-base transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
