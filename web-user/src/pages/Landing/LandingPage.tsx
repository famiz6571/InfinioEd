import CallToActionSection from "./CallToActionSection";
import CoursesCarousel from "./CoursesCarousel";
import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import TestimonialsSection from "./TestimonialsSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <FeaturesSection />
      <CoursesCarousel />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
};

export default LandingPage;
