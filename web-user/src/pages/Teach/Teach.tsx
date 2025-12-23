import CTASection from "./TeachCTA";
import FeaturesSection from "./TeachFeatures";
import HeroSection from "./TeachHero";
import HowItWorksSection from "./TeachHowItWorks";

export default function Teach() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
    </div>
  );
}
