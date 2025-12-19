// src/pages/About/TeamSection.tsx
import type { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Mohammed Famiz",
    role: "Founder & CEO",
    image: "/placeholder/placeholder1.png",
  },
  {
    name: "Jane Doe",
    role: "Lead Developer",
    image: "/placeholder/placeholder2.png",
  },
  {
    name: "John Smith",
    role: "UI/UX Designer",
    image: "/placeholder/placeholder3.png",
  },
];

const TeamSection: FC = () => {
  return (
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
  );
};

export default TeamSection;
