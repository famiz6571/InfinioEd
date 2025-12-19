// src/pages/About/AboutPage.tsx
import type { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Mohammed Famiz",
    role: "Founder & CEO",
    image: "https://source.unsplash.com/200x200/?person,man",
  },
  {
    name: "Jane Doe",
    role: "Lead Developer",
    image: "https://source.unsplash.com/200x200/?person,woman",
  },
  {
    name: "John Smith",
    role: "UI/UX Designer",
    image: "https://source.unsplash.com/200x200/?person,designer",
  },
];

const AboutPage: FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">About INIFINOED</h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          INIFINOED is a cutting-edge e-learning platform empowering students
          worldwide with high-quality courses, modern tools, and a supportive
          community.
        </p>
      </section>

      {/* Mission / Vision */}
      <section className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300">
            To make learning accessible, engaging, and practical for everyone,
            equipping learners with the skills they need to succeed in the
            modern world.
          </p>
        </div>
        <img
          src="https://source.unsplash.com/600x400/?education,online"
          alt="Mission"
          className="rounded-lg shadow-md"
        />
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        <img
          src="https://source.unsplash.com/600x400/?team,collaboration"
          alt="Vision"
          className="rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 dark:text-gray-300">
            To become a leading global e-learning platform that inspires,
            educates, and empowers learners to reach their full potential.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mt-4 object-cover"
              />
              <CardContent>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {member.role}
                </p>
                <Button size="sm" variant="outline">
                  Connect
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
