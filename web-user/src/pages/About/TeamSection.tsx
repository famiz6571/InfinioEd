// src/pages/About/TeamSection.tsx
import type { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "John Doe",
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
  {
    name: "Sarah Lee",
    role: "Marketing Head",
    image: "/placeholder/placeholder4.png",
  },
];

const TeamSection: FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">Meet the Team</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <Card className="text-center hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mt-6 object-cover shadow-lg"
              />
              <CardContent className="space-y-2">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {member.role}
                </p>
                <Button size="sm" variant="outline">
                  Connect
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
