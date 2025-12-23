import { type FC } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Course {
  title: string;
  progress: number;
}

interface CoursesCardProps {
  courses: Course[];
}

const CoursesCard: FC<CoursesCardProps> = ({ courses }) => (
  <Card className="p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-md">
    <CardHeader>
      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
        Enrolled Courses
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ScrollArea className="h-64">
        <div className="space-y-4">
          {courses.map((c, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 bg-white/20 dark:bg-white/10 rounded-lg"
            >
              <span className="text-gray-900 dark:text-white font-medium">
                {c.title}
              </span>
              <span className="text-gray-600 dark:text-gray-300">
                {c.progress}%
              </span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </CardContent>
  </Card>
);

export default CoursesCard;
