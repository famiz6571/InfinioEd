// src/pages/Courses/CoursesPage.tsx
import type { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Learn React, Node.js, PostgreSQL, and more.",
    image: "https://source.unsplash.com/400x300/?programming,code",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    description: "Python, Pandas, NumPy, scikit-learn, and AI basics.",
    image: "https://source.unsplash.com/400x300/?data,science",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Figma, design principles, prototyping, and wireframes.",
    image: "https://source.unsplash.com/400x300/?design,ui",
  },
  {
    id: 4,
    title: "Cybersecurity Fundamentals",
    description: "Network security, encryption, and ethical hacking basics.",
    image: "https://source.unsplash.com/400x300/?cybersecurity,hacking",
  },
];

const CoursesPage: FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="hover:shadow-lg transition-shadow duration-300"
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
              <Button className="w-full">Enroll Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
