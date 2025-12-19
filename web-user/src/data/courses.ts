// src/data/courses.ts
export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  syllabus?: string[];
  relatedCourses?: { id: number; title: string }[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Learn React, Node.js, PostgreSQL, and more.",
    image: "https://source.unsplash.com/400x300/?programming,code",
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
  {
    id: 5,
    title: "Angular & Node Full Stack",
    description: "Learn Angular, Node.js, Express, and database integration.",
    image: "https://source.unsplash.com/400x300/?angular,nodejs",
  },
  {
    id: 6,
    title: "Vue.js & Express Full Stack",
    description: "Master Vue.js frontend with Express backend development.",
    image: "https://source.unsplash.com/400x300/?vue,express",
  },
  {
    id: 7,
    title: "Python & Django Full Stack",
    description: "Build web apps with Python, Django, and PostgreSQL.",
    image: "https://source.unsplash.com/400x300/?python,django",
  },
  {
    id: 8,
    title: "Advanced Full Stack Developer Program",
    description:
      "Comprehensive full stack program covering multiple frameworks.",
    image: "https://source.unsplash.com/400x300/?fullstack,developer",
  },
];
