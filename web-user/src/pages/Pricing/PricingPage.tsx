import { type FC, useState } from "react";
import PricingCards from "./PricingCards";
import PricingTable from "./PricingTable";
import FeatureIcons from "./FeatureIcons";
import Testimonials from "./Testimonials";
import FAQAccordion from "./FAQAccordion";
import CTABanner from "./CTABanner";

const PricingPage: FC = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 9,
      yearlyPrice: 90,
      features: [
        "Access to courses",
        "Community support",
        "Limited resources",
        "Email support",
      ],
    },
    {
      name: "Pro",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "All Basic features",
        "Premium resources",
        "Certificate of completion",
        "Priority support",
        "Downloadable resources",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "All Pro features",
        "Dedicated support",
        "Team access",
        "Custom solutions",
        "Analytics dashboard",
      ],
    },
  ];

  const allFeatures = [
    "Access to courses",
    "Community support",
    "Limited resources",
    "Email support",
    "Premium resources",
    "Certificate of completion",
    "Priority support",
    "Downloadable resources",
    "Dedicated support",
    "Team access",
    "Custom solutions",
    "Analytics dashboard",
  ];

  const features = [
    {
      title: "Learn at Your Own Pace",
      description: "Access courses anytime, anywhere, and on any device.",
    },
    {
      title: "Certified Courses",
      description:
        "Get certificates for completing each course and boost your resume.",
    },
    {
      title: "Premium Support",
      description: "Priority support to help you whenever you need assistance.",
    },
  ];

  const testimonials = [
    {
      name: "Alice Johnson",
      role: "Student",
      message: "This platform helped me land my dream job!",
    },
    {
      name: "Mark Smith",
      role: "Developer",
      message: "The courses are high-quality and easy to follow.",
    },
    {
      name: "Sara Lee",
      role: "Designer",
      message: "I love the flexibility and resources offered here.",
    },
  ];

  const faqs = [
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade anytime.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Full refund within 14 days of purchase.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, a 7-day free trial is available for all new users.",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 rounded-md">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Pricing Plans
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Choose a plan that fits your learning goals. Transparent pricing, no
          hidden fees.
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12 bg-gray-200 dark:bg-gray-800 rounded-full p-1 inline-flex">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              billing === "monthly"
                ? "bg-primary text-white dark:text-black"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              billing === "yearly"
                ? "bg-primary text-white dark:text-black"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            Yearly
          </button>
        </div>

        {/* Pricing Cards */}
        <PricingCards plans={plans} billing={billing} />

        {/* Comparison Table */}
        <PricingTable plans={plans} allFeatures={allFeatures} />

        {/* Feature Highlights */}
        <FeatureIcons features={features} />

        {/* Testimonials */}
        <Testimonials testimonials={testimonials} />

        {/* FAQ */}
        <FAQAccordion faqs={faqs} />

        {/* CTA Banner */}
        <CTABanner />
      </div>
    </div>
  );
};

export default PricingPage;
