// src/data/courses.ts
export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  syllabus?: string[];
  relatedCourses?: { id: number; title: string }[];
  level?: "Beginner" | "Intermediate" | "Advanced";
  featured?: boolean;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Learn React, Node.js, PostgreSQL, and more.",
    image:
      "https://fpoimg.com/400x300?text=Preview&bg_color=e6e6e6&text_color=8F8F8F",
    syllabus: [
      "Introduction & Environment Setup",
      "Frontend Development with React",
      "Backend Development with Node.js & Express",
      "Database Management with PostgreSQL",
      "Authentication & Security",
      "Deployment & CI/CD",
    ],
    relatedCourses: [
      { id: 2, title: "Data Science & ML" },
      { id: 3, title: "UI/UX Design" },
    ],
    level: "Advanced",
    featured: true,
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    description: "Python, Pandas, NumPy, scikit-learn, and AI basics.",
    image:
      "https://fpoimg.com/400x300?text=Preview&bg_color=e6e6e6&text_color=8F8F8F",
    syllabus: [
      "Python Basics",
      "Data Analysis with Pandas",
      "Machine Learning with scikit-learn",
      "Data Visualization",
      "AI Basics & Projects",
    ],
    relatedCourses: [
      { id: 1, title: "Full Stack Web Development" },
      { id: 3, title: "UI/UX Design" },
    ],
    level: "Intermediate",
    featured: false,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Figma, design principles, prototyping, and wireframes.",
    image:
      "https://fpoimg.com/400x300?text=Preview&bg_color=e6e6e6&text_color=8F8F8F",
    syllabus: [
      "UI/UX Design Principles",
      "Wireframing & Prototyping",
      "Figma Hands-On",
      "Usability Testing",
      "Design System Implementation",
    ],
    relatedCourses: [
      { id: 2, title: "Data Science & ML" },
      { id: 4, title: "Cybersecurity Fundamentals" },
    ],
    level: "Beginner",
    featured: false,
  },
  {
    id: 4,
    title: "Cybersecurity Fundamentals",
    description: "Network security, encryption, and ethical hacking basics.",
    image:
      "https://fpoimg.com/400x300?text=Preview&bg_color=e6e6e6&text_color=8F8F8F",
    syllabus: [
      "Introduction to Cybersecurity",
      "Network Security",
      "Encryption Techniques",
      "Ethical Hacking Basics",
      "Cybersecurity Best Practices",
    ],
    level: "Intermediate",
    featured: true,
  },
  {
    id: 5,
    title: "Angular & Node Full Stack",
    description: "Learn Angular, Node.js, Express, and database integration.",
    image:
      "https://fpoimg.com/400x300?text=Preview&bg_color=e6e6e6&text_color=8F8F8F",
    syllabus: [
      "Angular Basics",
      "Component & Module Design",
      "Backend with Node.js & Express",
      "REST API Integration",
      "Database Management",
    ],
    level: "Advanced",
    featured: false,
  },
  {
    id: 6,
    title: "Vue.js & Express Full Stack",
    description: "Master Vue.js frontend with Express backend development.",
    image:
      "https://fpoimg.com/400x300?text=Preview&bg_color=e6e6e6&text_color=8F8F8F",
    syllabus: [
      "Vue.js Fundamentals",
      "Component Architecture",
      "Backend with Express",
      "REST API Integration",
      "Project Deployment",
    ],
    level: "Intermediate",
    featured: false,
  },
  {
    id: 7,
    title: "Python & Django Full Stack",
    description: "Build web apps with Python, Django, and PostgreSQL.",
    image:
      "https://fpoimg.com/400x300?text=Preview&bg_color=e6e6e6&text_color=8F8F8F",
    syllabus: [
      "Python Programming",
      "Django Framework Basics",
      "Database Models & Queries",
      "User Authentication",
      "Deploying Django Apps",
    ],
    level: "Beginner",
    featured: false,
  },
  {
    id: 8,
    title: "Advanced Full Stack Developer Program",
    description:
      "Comprehensive full stack program covering multiple frameworks.",
    image:
      "https://fpoimg.com/400x300?text=Preview&bg_color=e6e6e6&text_color=8F8F8F",
    syllabus: [
      "Frontend Frameworks: React, Angular, Vue",
      "Backend Frameworks: Node.js, Django, Express",
      "Database Management: PostgreSQL, MongoDB",
      "Authentication & Security",
      "Deployment & DevOps",
    ],
    level: "Advanced",
    featured: true,
  },
];
