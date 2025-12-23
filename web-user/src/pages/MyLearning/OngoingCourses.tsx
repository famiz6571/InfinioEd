import { type FC } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface Course {
  title: string;
  progress: number;
  status: "ongoing" | "completed";
}

interface Props {
  courses: Course[];
  search: string;
  setSearch: (val: string) => void;
}

const OngoingCourses: FC<Props> = ({ courses, search, setSearch }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
      Ongoing Courses
    </h2>

    <div className="relative w-full sm:w-1/3 mb-4">
      <Input
        placeholder="Search ongoing courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pr-10"
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    </div>

    <div className="space-y-4 max-h-96 overflow-y-auto">
      {courses.map((course, idx) => (
        <Card
          key={idx}
          className="p-4 bg-white/10 dark:bg-white/5 rounded-xl shadow-md"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {course.title}
              </h3>
              <Progress
                value={course.progress}
                className="mt-2 rounded-full h-3 bg-gray-200 dark:bg-gray-700"
              />
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {course.progress}% completed
              </p>
            </div>
            <Button className="self-start sm:self-center mt-2 sm:mt-0">
              Continue
            </Button>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export default OngoingCourses;
