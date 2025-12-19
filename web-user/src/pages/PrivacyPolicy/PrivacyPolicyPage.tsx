import { type FC } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

const PrivacyPolicyPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center">Privacy Policy</h1>

        <Card className="rounded-md shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              Our Commitment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              At INIFINOED, we respect your privacy and are committed to
              protecting your personal information. This privacy policy explains
              how we collect, use, and safeguard your data.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-md shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Information We Collect</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                We only collect information necessary to provide our services.
              </li>
              <li>
                Your personal data will not be shared with third parties without
                consent.
              </li>
              <li>We use cookies to improve user experience on our website.</li>
              <li>
                We implement security measures to protect your information.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-md shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Your Agreement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              By using our website, you agree to the terms of this privacy
              policy. We encourage you to review this policy regularly as
              updates may occur to improve transparency and user trust.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-md shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              If you have any questions about our privacy practices, please
              contact our support team:
            </p>
            <ul className="ml-6 list-disc space-y-1 text-gray-700 dark:text-gray-300">
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
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
