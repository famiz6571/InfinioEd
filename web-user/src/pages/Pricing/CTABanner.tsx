import { type FC } from "react";
import { Button } from "@/components/ui/button";

const CTABanner: FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 mt-16 rounded-xl text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="mb-6">
        Start your free trial today and boost your learning experience.
      </p>
      <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
        Start Free Trial
      </Button>
    </div>
  );
};

export default CTABanner;
