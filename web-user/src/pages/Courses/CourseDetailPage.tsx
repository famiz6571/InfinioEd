// src/pages/Courses/CourseDetailPage.tsx
import type { FC } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { courses } from "@/data/courses";

const CourseDetailPage: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === Number(id));

  if (!course) return <p className="text-center mt-12">Course not found.</p>;

  // Safely map related courses and default to empty array
  const relatedCourses =
    course.relatedCourses
      ?.map((rc) => courses.find((c) => c.id === rc.id))
      .filter(Boolean) ?? [];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Back Button */}
      <div className="mb-6">
        <Button variant="outline" onClick={() => navigate(-1)}>
          ← Back
        </Button>
      </div>

      {/* Course Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 shadow-md"
      />

      {/* Course Title & Description */}
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        {course.description}
      </p>

      {/* Syllabus */}
      {course.syllabus && (
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Syllabus</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            {course.syllabus.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Enroll Button */}
      <div className="mb-12">
        <Button
          onClick={() => alert(`Enrolled in ${course.title}`)}
          className="px-8 py-3 text-lg"
        >
          Enroll Now
        </Button>
      </div>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Related Courses</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {relatedCourses.map((c) => (
              <Card
                key={c!.id}
                className="hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                onClick={() => navigate(`/courses/${c!.id}`)}
              >
                <CardContent className="flex justify-between items-center">
                  <span className="font-medium">{c!.title}</span>
                  <Link to={`/courses/${c!.id}`}>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default CourseDetailPage;
