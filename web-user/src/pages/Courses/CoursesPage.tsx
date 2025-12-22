// src/pages/Courses/CoursesPage.tsx
import type { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courses as allCourses } from "@/data/courses";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const CoursesPage: FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredCourses = allCourses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">Our Courses</h1>

      {/* Search Box */}
      <div className="flex justify-center mb-8 gap-2">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-md w-full max-w-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {search && (
          <Button
            variant="outline"
            onClick={() => setSearch("")}
            className="px-4"
          >
            Clear
          </Button>
        )}
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course, idx) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <Card
              className="hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col h-full"
              onClick={() => navigate(`/courses/${course.id}`)}
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <CardContent className="flex flex-col flex-grow p-6">
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-grow">
                  {course.description}
                </p>
                <Button
                  onClick={(e) => {
                    e.stopPropagation(); // prevent parent click
                    navigate(`/courses/${course.id}`);
                  }}
                  className="w-full mt-auto"
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
        {filteredCourses.length === 0 && (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
