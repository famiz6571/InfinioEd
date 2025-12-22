import CourseCard from "@/components/CourseCard";
import { courses as allCourses } from "@/data/courses";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FC } from "react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const CoursesPage: FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeLevel, setActiveLevel] = useState("All");

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesLevel = activeLevel === "All" || course.level === activeLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">Our Courses</h1>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {levels.map((level) => (
          <button
            key={level}
            className={`px-4 py-2 rounded-full font-medium transition
              ${
                activeLevel === level
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-indigo-500 hover:text-white"
              }`}
            onClick={() => setActiveLevel(level)}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex justify-center mb-8 gap-2 flex-wrap">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-md w-full max-w-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
        {search && (
          <Button variant="outline" onClick={() => setSearch("")}>
            Clear
          </Button>
        )}
      </div>

      {/* Courses Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course, idx) => (
          <CourseCard
            key={course.id}
            {...course}
            delay={idx * 0.1}
            onEnroll={() => toast.success(`Enrolled in ${course!.title}`)}
            onLearnMore={() => navigate(`/courses/${course.id}`)}
          />
        ))}
        {filteredCourses.length === 0 && (
          <motion.div
            className="col-span-full text-center text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No courses found.
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
