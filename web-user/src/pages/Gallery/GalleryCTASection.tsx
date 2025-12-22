import { Button } from "@/components/ui/button";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";

const GalleryCTASection: FC = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center rounded-lg">
      <h2 className="text-4xl font-bold mb-4">Inspired? Start Learning Now!</h2>
      <p className="mb-8 max-w-xl mx-auto text-lg">
        Join thousands of learners and create your own amazing projects today.
      </p>
      <Button
        onClick={() => navigate("/courses")}
        className="bg-white text-indigo-600 hover:bg-gray-100"
      >
        Explore Courses
      </Button>
    </section>
  );
};
export default GalleryCTASection;
