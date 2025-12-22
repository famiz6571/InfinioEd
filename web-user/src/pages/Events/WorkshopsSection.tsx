// src/pages/Events/WorkshopsSection.tsx
import type { FC } from "react";
import EventCard from "@/components/EventCard";
import toast from "react-hot-toast";

const workshops = [
  {
    id: 1,
    title: "React Workshop",
    date: "Jan 15, 2026",
    level: "Advanced" as "Advanced",
    featured: true,
    description:
      "Deep dive into advanced React patterns, state management, hooks, and component optimization for building high-performance applications.",
  },
  {
    id: 2,
    title: "Node.js Workshop",
    date: "Feb 12, 2026",
    level: "Beginner" as "Beginner",
    featured: false,
    description:
      "Learn Node.js fundamentals, asynchronous programming, REST API creation, and server-side development to build real-world applications.",
  },
];

const WorkshopsSection: FC = () => (
  <section className="py-24 px-6 bg-gray-100 dark:bg-gray-800">
    <h2 className="text-4xl font-bold text-center mb-12">Workshops</h2>
    <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
      {workshops.map((ws, idx) => (
        <EventCard
          key={ws.id}
          title={ws.title}
          date={ws.date}
          level={ws.level}
          featured={ws.featured}
          description={ws.description}
          onRegister={() => toast.success(`Registered for "${ws.title}"!`)}
          onLearnMore={() =>
            toast(`More info about "${ws.title}" will be available soon!`, {
              icon: "ℹ️",
            })
          }
          delay={idx * 0.2}
        />
      ))}
    </div>
  </section>
);

export default WorkshopsSection;
