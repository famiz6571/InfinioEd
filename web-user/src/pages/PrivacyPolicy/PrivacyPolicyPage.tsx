import type { FC } from "react";

const PrivacyPolicyPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          At INIFINOED, we respect your privacy and are committed to protecting
          your personal information. This privacy policy explains how we
          collect, use, and safeguard your data.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            We only collect information necessary to provide our services.
          </li>
          <li>
            Your personal data will not be shared with third parties without
            consent.
          </li>
          <li>We use cookies to improve user experience on our website.</li>
          <li>We implement security measures to protect your information.</li>
        </ul>
        <p className="mt-4">
          By using our website, you agree to the terms of this privacy policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
