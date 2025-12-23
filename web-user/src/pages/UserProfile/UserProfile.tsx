import { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import StatsCard from "./StatsCard";
import AboutCard from "./AboutCard";
import CoursesCard from "./CoursesCard";
import EditableProfileModal from "./EditableProfileModal";
import { BookOpen, Star, Users } from "lucide-react";
import { type FieldDefinition } from "@/utils/schemaBuilder";

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "John Doe",
    role: "Full Stack Developer",
    bio: "Passionate developer learning new technologies every day.",
    phone: "0501234567",
    country: "AE",
    username: "johndoe",
    avatar: "/placeholder/placeholder1.png",
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe",
    },
  });

  const [editing, setEditing] = useState(false);

  const fields: Record<string, FieldDefinition> = {
    avatar: { type: "string", label: "Avatar" },
    name: { type: "string", required: true, label: "Full Name" },
    role: { type: "string", required: true, label: "Role" },
    bio: { type: "string", required: true, label: "Bio" },
    phone: { type: "phone", required: true, label: "Phone Number" },
    country: { type: "country", required: true, label: "Country" },
    username: { type: "username", required: true, label: "Username" },
    password: { type: "password", required: false, label: "Password" },
    confirmPassword: {
      type: "confirmPassword",
      required: false,
      label: "Confirm Password",
    },
    linkedin: { type: "string", label: "LinkedIn URL" },
    twitter: { type: "string", label: "Twitter URL" },
    github: { type: "string", label: "GitHub URL" },
  };

  const stats = [
    { icon: BookOpen, label: "Courses Completed", value: 12 },
    { icon: Star, label: "Points", value: 340 },
    { icon: Users, label: "Followers", value: 120 },
  ];

  const courses = [
    { title: "React for Beginners", progress: 80 },
    { title: "Advanced Node.js", progress: 60 },
    { title: "UI/UX Design Fundamentals", progress: 40 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <ProfileHeader {...user} onEdit={() => setEditing(true)} />
      <StatsCard stats={stats} />
      <AboutCard
        bio={user.bio}
        onSave={(data) => setUser((prev) => ({ ...prev, bio: data }))}
      />
      <CoursesCard courses={courses} />

      <EditableProfileModal
        open={editing}
        fields={fields}
        initialValues={{ ...user, ...user.social }}
        onSave={(data) => {
          const { linkedin, twitter, github, ...rest } = data;
          setUser((prev) => ({
            ...prev,
            ...rest,
            social: { linkedin, twitter, github },
          }));
        }}
        onClose={() => setEditing(false)}
      />
    </div>
  );
}
