import { type FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const TutorialsPage: FC = () => {
  const [search, setSearch] = useState("");

  const tutorials = [
    {
      id: 1,
      title: "React Basics",
      description:
        "Learn the fundamentals of React, including components, props, state, and hooks. Perfect for beginners.",
      tags: ["React", "Beginner"],
      isNew: true,
      time: "2 hours",
      difficulty: "Easy",
    },
    {
      id: 2,
      title: "Tailwind CSS Guide",
      description:
        "Master Tailwind CSS utilities and responsive design to build modern UIs with ease.",
      tags: ["CSS", "UI"],
      isNew: false,
      time: "1.5 hours",
      difficulty: "Medium",
    },
    {
      id: 3,
      title: "TypeScript with React",
      description:
        "Add type safety to your React apps using TypeScript, including interfaces, types, and best practices.",
      tags: ["TypeScript", "React"],
      isNew: true,
      time: "3 hours",
      difficulty: "Intermediate",
    },
    {
      id: 4,
      title: "React Router Deep Dive",
      description:
        "Learn React Router for navigation, nested routes, and route parameters in React applications.",
      tags: ["React", "Routing"],
      isNew: false,
      time: "2 hours",
      difficulty: "Medium",
    },
    {
      id: 5,
      title: "State Management with Redux",
      description:
        "Manage complex application state in React using Redux, including actions, reducers, and middleware.",
      tags: ["React", "Redux"],
      isNew: true,
      time: "2.5 hours",
      difficulty: "Intermediate",
    },
    {
      id: 6,
      title: "React Performance Optimization",
      description:
        "Optimize React applications with memoization, lazy loading, and code splitting for faster performance.",
      tags: ["React", "Performance"],
      isNew: false,
      time: "1.5 hours",
      difficulty: "Advanced",
    },
  ];

  const filteredTutorials = tutorials.filter((tut) =>
    tut.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 py-16 rounded-md">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Tutorials</h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-12">
          <Input
            placeholder="Search tutorials..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-md"
          />
        </div>

        {/* Tutorials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTutorials.map((tut) => (
            <Card
              key={tut.id}
              className="hover:scale-105 transform transition-all duration-300 p-6 relative"
            >
              <CardHeader className="flex flex-col gap-3">
                <CardTitle className="flex items-center justify-between text-xl">
                  {tut.title}
                  {tut.isNew && <Badge className="ml-2" variant="secondary">New</Badge>}
                </CardTitle>
                <div className="flex gap-2 flex-wrap">
                  {tut.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="pt-3">
                <CardDescription className="mb-3">
                  {tut.description}
                </CardDescription>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>⏱ {tut.time}</span>
                  <span>⚡ {tut.difficulty}</span>
                </div>
                <Button className="w-full" variant="default">
                  Start Tutorial
                </Button>
              </CardContent>
            </Card>
          ))}

          {filteredTutorials.length === 0 && (
            <p className="text-center col-span-full text-gray-500 dark:text-gray-400">
              No tutorials found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;
