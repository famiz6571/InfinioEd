import { motion } from "framer-motion";

import BlogPreviewSection from "./BlogPreviewSection";
import CallToActionSection from "./CallToActionSection";
import CoursesCarousel from "./CoursesCarousel";
import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import HowItWorksSection from "./HowItWorksSection";
import InstructorsSection from "./InstructorsSection";
import StatsSection from "./StatsSection";
import TestimonialsSection from "./TestimonialsSection";
import WhyChooseUsSection from "./WhyChooseUsSection";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const LandingPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-background text-foreground"
    >
      <HeroSection />

      <FeaturesSection />

      <StatsSection />

      <CoursesCarousel />

      <WhyChooseUsSection />

      <HowItWorksSection />

      <InstructorsSection />

      <TestimonialsSection />

      <BlogPreviewSection />

      <CallToActionSection />
    </motion.div>
  );
};

export default LandingPage;
