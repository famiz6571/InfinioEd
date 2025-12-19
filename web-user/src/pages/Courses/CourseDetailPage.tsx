// src/pages/Courses/CourseDetailPage.tsx
import type { FC } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CourseDetailPage: FC = () => {
  const { id } = useParams();

  // Placeholder data; replace with API call in real app
  const course = {
    id,
    title: "Full Stack Web Development",
    description:
      "Master full stack development with React, Node.js, PostgreSQL, and more. Build real-world projects and gain practical skills.",
    syllabus: [
      "Introduction & Environment Setup",
      "Frontend Development with React",
      "Backend Development with Node.js & Express",
      "Database Management with PostgreSQL",
      "Authentication & Security",
      "Deployment & CI/CD",
    ],
    image: "https://source.unsplash.com/800x400/?programming,code",
    relatedCourses: [
      { id: 2, title: "Data Science & ML" },
      { id: 3, title: "UI/UX Design" },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 shadow-md"
      />
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        {course.description}
      </p>

      {/* Syllabus */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Syllabus</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          {course.syllabus.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Enroll CTA */}
      <div className="mb-12">
        <Button className="px-8 py-3 text-lg">Enroll Now</Button>
      </div>

      {/* Related Courses */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Related Courses</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {course.relatedCourses.map((c) => (
            <Card
              key={c.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="flex justify-between items-center">
                <span>{c.title}</span>
                <Link to={`/courses/${c.id}`}>
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;
