// src/pages/Courses/CourseDetailPage.tsx
import type { FC } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { courses } from "@/data/courses";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-hot-toast"; // modern toast notifications

const CourseDetailPage: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"description" | "syllabus">(
    "description"
  );

  const course = courses.find((c) => c.id === Number(id));

  if (!course) return <p className="text-center mt-12">Course not found.</p>;

  const relatedCourses =
    course.relatedCourses
      ?.map((rc) => courses.find((c) => c.id === rc.id))
      .filter(Boolean) ?? [];

  const handleEnroll = () => {
    toast.success(`You have enrolled in "${course.title}"`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Back Button */}
      <div className="mb-6">
        <Button variant="outline" onClick={() => navigate(-1)}>
          ← Back
        </Button>
      </div>

      {/* Course Hero */}
      <motion.div
        className="relative mb-8 rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-72 md:h-96 object-cover"
        />
        {course.featured && (
          <div className="absolute top-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
      </motion.div>

      {/* Course Title & Level */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
        <h1 className="text-4xl font-bold">{course.title}</h1>
        {course.level && (
          <span
            className={`inline-block px-4 py-1 rounded-full font-semibold text-sm ${
              course.level === "Advanced"
                ? "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100"
                : course.level === "Intermediate"
                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100"
                : "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100"
            }`}
          >
            {course.level}
          </span>
        )}
      </div>

      {/* Tabs: Description / Syllabus */}
      <div className="mb-8">
        <div className="flex gap-4 border-b border-gray-300 dark:border-gray-700 mb-4">
          <button
            className={`pb-2 font-semibold ${
              activeTab === "description"
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-500 dark:text-gray-400"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          {course.syllabus && (
            <button
              className={`pb-2 font-semibold ${
                activeTab === "syllabus"
                  ? "border-b-2 border-indigo-600 text-indigo-600"
                  : "text-gray-500 dark:text-gray-400"
              }`}
              onClick={() => setActiveTab("syllabus")}
            >
              Syllabus
            </button>
          )}
        </div>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "description" && (
            <p className="text-gray-700 dark:text-gray-300">
              {course.description}
            </p>
          )}
          {activeTab === "syllabus" && course.syllabus && (
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {course.syllabus.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>

      {/* Enroll Button */}
      <div className="mb-12">
        <Button size="lg" className="px-8 py-3" onClick={handleEnroll}>
          Enroll Now
        </Button>
      </div>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section>
          <h2 className="text-3xl font-semibold mb-6">Related Courses</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCourses.map((c) => (
              <motion.div
                key={c!.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card
                  className="hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col"
                  onClick={() => navigate(`/courses/${c!.id}`)}
                >
                  <img
                    src={c!.image}
                    alt={c!.title}
                    className="h-40 w-full object-cover rounded-t-lg"
                  />
                  <CardContent className="flex flex-col flex-grow p-4">
                    <span className="font-semibold text-lg mb-2">
                      {c!.title}
                    </span>
                    <div className="mt-auto flex gap-2">
                      <Link to={`/courses/${c!.id}`} className="flex-1">
                        <Button size="sm" variant="outline" className="w-full">
                          View
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default CourseDetailPage;
