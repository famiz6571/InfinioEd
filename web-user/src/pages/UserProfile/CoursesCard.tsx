import { type FC } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Course {
  title: string;
  progress: number; // 0-100
}

interface CoursesCardProps {
  courses: Course[];
}

const CoursesCard: FC<CoursesCardProps> = ({ courses }) => (
  <Card className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg">
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
        Enrolled Courses
      </CardTitle>
    </CardHeader>

    <CardContent>
      <ScrollArea className="max-h-80">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              {/* Course title */}
              <span className="text-gray-900 dark:text-white font-medium text-sm sm:text-base mb-2">
                {course.title}
              </span>

              {/* Progress bar container */}
              <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-4 rounded-full transition-all duration-500 ${
                    course.progress === 100
                      ? "bg-green-500"
                      : "bg-indigo-500 dark:bg-indigo-400"
                  }`}
                  style={{ width: `${course.progress}%` }}
                />
              </div>

              {/* Progress text */}
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                {course.progress}%{" "}
                {course.progress === 100 ? "Completed" : "In Progress"}
              </span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </CardContent>
  </Card>
);

export default CoursesCard;
