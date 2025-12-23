import { type FC } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare } from "lucide-react";
import LiveChat from "./LiveChat";
import { Link } from "react-router-dom";

const SupportPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-16 rounded-md">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Support</h1>
        <p className="text-lg mb-12 text-center text-gray-700 dark:text-gray-300">
          Need help? Our support team is ready to assist you. You can reach out
          via email, phone, or live chat. For common questions, check our FAQ.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Email */}
          <Card className="rounded-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <CardTitle>Email Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-2 text-gray-700 dark:text-gray-300">
                Send us an email and we’ll get back to you as soon as possible.
              </CardDescription>
              <Button asChild variant="default" size="sm">
                <a href="mailto:support@inifinoed.com">support@inifinoed.com</a>
              </Button>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="rounded-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
              <CardTitle>Call Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-2 text-gray-700 dark:text-gray-300">
                Speak directly with our support team for urgent issues.
              </CardDescription>
              <Button asChild variant="default" size="sm">
                <a href="tel:+1234567890">+1 234 567 890</a>
              </Button>
            </CardContent>
          </Card>

          {/* Live Chat */}
          <Card className="rounded-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <CardTitle>Live Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-2 text-gray-700 dark:text-gray-300">
                Chat with our team in real-time. Available 24/7 for all
                inquiries.
              </CardDescription>
              <LiveChat />
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400 space-y-2">
          <p>Support Hours: Monday – Friday, 9:00 AM – 6:00 PM</p>
          <p>
            Frequently Asked Questions:{" "}
            <Link
              to="/faq"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View FAQ
            </Link>
          </p>
          <p>Follow us on social media for updates and tips.</p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
