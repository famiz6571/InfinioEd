import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CallToActionSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
          Ready to Start Learning?
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl mb-10 text-white/90">
          Join thousands of learners worldwide and start building your skills
          today.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => navigate("/courses")}
              className="
                bg-white/90 text-indigo-600 font-semibold
                px-8 py-4 shadow-lg rounded-xl
                hover:bg-white transition-all duration-300
                flex items-center gap-2
              "
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => navigate("/courses")}
              variant="default"
              className="
                bg-indigo-800/30 hover:bg-indigo-800/50
                text-white font-semibold px-8 py-4
                shadow-lg rounded-xl transition-all duration-300
              "
            >
              Browse Courses
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToActionSection;
