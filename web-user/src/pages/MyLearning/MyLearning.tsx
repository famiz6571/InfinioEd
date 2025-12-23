import { useState } from "react";
import LearningStats from "./LearningStats";
import OngoingCourses from "./OngoingCourses";
import CompletedCourses from "./CompletedCourses";
import CertificateModal from "./CertificateModal";

interface Course {
  title: string;
  progress: number;
  status: "ongoing" | "completed";
}

export default function MyLearning() {
  const [search, setSearch] = useState("");
  const [certificateCourse, setCertificateCourse] = useState<Course | null>(
    null
  );

  const courses: Course[] = [
    { title: "React for Beginners", progress: 80, status: "ongoing" },
    { title: "Advanced Node.js", progress: 60, status: "ongoing" },
    { title: "UI/UX Design Fundamentals", progress: 100, status: "completed" },
    { title: "TypeScript Mastery", progress: 30, status: "ongoing" },
    { title: "Next.js 14 Bootcamp", progress: 100, status: "completed" },
  ];

  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  const ongoingCourses = filteredCourses.filter((c) => c.status === "ongoing");
  const completedCourses = filteredCourses.filter(
    (c) => c.status === "completed"
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        My Learning
      </h1>

      {/* Stats */}
      <LearningStats
        ongoingCourses={ongoingCourses}
        completedCourses={completedCourses}
      />

      {/* Ongoing Courses */}
      <OngoingCourses
        courses={ongoingCourses}
        search={search}
        setSearch={setSearch}
      />

      {/* Completed Courses */}
      <CompletedCourses
        courses={completedCourses}
        onViewCertificate={(course) => setCertificateCourse(course)}
      />

      {/* Certificate Modal */}
      {certificateCourse && (
        <CertificateModal
          open={!!certificateCourse}
          onClose={() => setCertificateCourse(null)}
          studentName="John Doe"
          courseName={certificateCourse.title}
          date={new Date().toLocaleDateString()}
        />
      )}
    </div>
  );
}
