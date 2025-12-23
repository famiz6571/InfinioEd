import { Button } from "@/components/ui/button";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";

const GalleryCTASection: FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center overflow-hidden rounded-3xl">
      {/* Optional floating background shapes for modern vibe */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="relative z-10 backdrop-blur-sm p-8 rounded-2xl">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Inspired? Start Learning Now!
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-lg sm:text-xl text-white/90">
          Join thousands of learners and create your own amazing projects today.
        </p>
        <Button
          onClick={() => navigate("/courses")}
          className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-gray-100 transition-transform duration-300"
        >
          Explore Courses
        </Button>
      </div>
    </section>
  );
};

export default GalleryCTASection;
