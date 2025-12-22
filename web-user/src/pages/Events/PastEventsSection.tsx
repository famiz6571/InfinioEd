// src/pages/Events/PastEventsSection.tsx
import type { FC } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pastEvents = [
  {
    id: 1,
    title: "React Hackathon",
    date: "Dec 20, 2025",
    location: "Online",
    description:
      "Teams collaborated to build innovative React apps in just one day.",
  },
  {
    id: 2,
    title: "UI/UX Design Workshop",
    date: "Nov 15, 2025",
    location: "Online",
    description:
      "Interactive workshop covering modern design tools and trends.",
  },
  {
    id: 3,
    title: "Full Stack Bootcamp",
    date: "Oct 10, 2025",
    location: "Online",
    description:
      "Hands-on bootcamp for full stack development with Node.js and React.",
  },
];

const PastEventsSection: FC = () => {
  return (
    <section className="py-24 px-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">Past Events</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pastEvents.map((event, idx) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <Card className="relative hover:shadow-2xl transition-shadow cursor-pointer">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-semibold text-xl mb-2">{event.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-1">
                    {event.date}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Location: {event.location}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                    {event.description}
                  </p>
                </div>
                <Button className="mt-4 w-full" variant="outline">
                  View Details
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PastEventsSection;
