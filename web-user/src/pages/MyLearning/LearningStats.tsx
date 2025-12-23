import { type FC } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Course {
  title: string;
  progress: number;
  status: "ongoing" | "completed";
}

interface Props {
  ongoingCourses: Course[];
  completedCourses: Course[];
}

const LearningStats: FC<Props> = ({ ongoingCourses, completedCourses }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    <Card className="p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
          Courses Completed
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {completedCourses.length}
        </p>
      </CardContent>
    </Card>

    <Card className="p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
          Ongoing Courses
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {ongoingCourses.length}
        </p>
      </CardContent>
    </Card>

    <Card className="p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
          Total Hours
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">120</p>
      </CardContent>
    </Card>
  </div>
);

export default LearningStats;
