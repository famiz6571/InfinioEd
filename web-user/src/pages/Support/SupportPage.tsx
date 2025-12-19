import type { FC } from "react";

const SupportPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Support</h1>
        <p className="text-lg mb-6">
          Need help? Our support team is ready to assist you.
        </p>
        <ul className="space-y-4">
          <li>
            Email:{" "}
            <a
              href="mailto:support@inifinoed.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@inifinoed.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              +1 234 567 890
            </a>
          </li>
          <li>
            Live Chat:{" "}
            <span className="text-gray-700 dark:text-gray-300">
              Available 24/7
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SupportPage;
