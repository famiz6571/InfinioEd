import { type FC } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTABanner: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 px-4 sm:px-6 lg:px-12 mt-16 rounded-xl text-center"
    >
      {/* Optional abstract shape */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg">
        Ready to get started?
      </h2>
      <p className="mb-8 text-base sm:text-lg lg:text-xl drop-shadow-sm">
        Start your free trial today and boost your learning experience.
      </p>

      {/* Centered Button */}
      <div className="flex justify-center">
        <Button
          size="lg"
          className="bg-white text-indigo-600 hover:bg-gray-100 hover:scale-105 transition-transform shadow-md"
        >
          Start Free Trial
        </Button>
      </div>
    </motion.div>
  );
};

export default CTABanner;
