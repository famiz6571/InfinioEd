import type { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";
import { useNavigate } from "react-router-dom";

const CoursesPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => navigate(`/courses/${course.id}`)}
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-48 w-full object-cover rounded-t-lg"
            />
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {course.description}
              </p>
              <Button
                onClick={() => navigate(`/courses/${course.id}`)}
                className="w-full"
              >
                Enroll Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
