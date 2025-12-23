import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden shadow-lg rounded-md">
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-300/20 dark:bg-indigo-500/20 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-purple-300/20 dark:bg-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <div className="space-y-6 z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Unlock Your Potential with{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              INIFINOED
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
            A modern e-learning platform designed for students, professionals,
            and educators to learn and grow without limits.
          </p>

          <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
            <Button
              onClick={() => navigate("/courses")}
              className="bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all duration-300"
            >
              Get Started
            </Button>
            <Button
              onClick={() => navigate("/courses")}
              variant="outline"
              className="border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-800 transition-all duration-300"
            >
              Browse Courses
            </Button>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="relative z-10 flex justify-center md:justify-end">
          <img
            src="/hero-illustration.png"
            alt="E-learning illustration"
            className="w-full max-w-lg h-auto object-contain"
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-900 dark:text-gray-100 text-2xl animate-bounce z-10">
        ↓
      </div>

      {/* Tailwind Blob Animation */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 8s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
