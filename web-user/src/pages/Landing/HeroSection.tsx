import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8  grid md:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Learn Without Limits with{" "}
            <span className="text-yellow-300">INIFINOED</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            A next-gen e-learning platform for students, professionals, and
            educators.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button className="bg-white text-indigo-600 hover:bg-gray-100 shadow-lg transition-all duration-300">
              Get Started
            </Button>
            <Button
              variant="default"
              className="bg-indigo-800/30 hover:bg-indigo-800/50 text-white shadow-lg transition-all duration-300"
            >
              Browse Courses
            </Button>
          </div>
        </div>

        {/* Hero Illustration / Image */}
        <div className="relative">
          <img
            src="/hero-illustration.png"
            alt="E-learning illustration"
            className="w-full"
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-2xl">
        ↓
      </div>
    </section>
  );
};

export default HeroSection;
