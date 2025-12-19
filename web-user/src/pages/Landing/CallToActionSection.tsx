import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
        <p className="text-lg mb-8 text-white/90 max-w-xl mx-auto">
          Join thousands of learners worldwide and start building your skills
          today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-white text-indigo-600 hover:bg-gray-100 shadow-lg">
            Get Started
          </Button>
          <Button
            variant="default"
            className="bg-indigo-800/30 hover:bg-indigo-800/50 text-white shadow-lg"
          >
            Browse Courses
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToActionSection;
