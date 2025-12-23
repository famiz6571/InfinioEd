import { type FC } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Course {
  title: string;
  progress: number;
  status: "ongoing" | "completed";
}

interface Props {
  courses: Course[];
  onViewCertificate: (course: Course) => void;
}

const CompletedCourses: FC<Props> = ({ courses, onViewCertificate }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
      Completed Courses
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, idx) => (
        <Card
          key={idx}
          className="p-4 bg-white/10 dark:bg-white/5 rounded-xl shadow-md flex flex-col justify-between"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {course.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Completed ✅
          </p>
          <Button className="mt-4" onClick={() => onViewCertificate(course)}>
            View Certificate
          </Button>
        </Card>
      ))}
    </div>
  </div>
);

export default CompletedCourses;
