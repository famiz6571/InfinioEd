import type { FC } from "react";
import EventCard from "@/components/EventCard";
import toast from "react-hot-toast";

const webinars = [
  {
    id: 1,
    title: "UI/UX Design Trends",
    date: "Mar 1, 2026",
    level: "Intermediate" as "Intermediate",
    featured: true,
    description:
      "Discover the latest UI/UX trends shaping web and mobile design in 2026.",
  },
  {
    id: 2,
    title: "React Performance Tips",
    date: "Apr 10, 2026",
    level: "Advanced" as "Advanced",
    featured: false,
    description:
      "Learn how to optimize your React applications for speed and efficiency.",
  },
  {
    id: 3,
    title: "Next.js & SEO Optimization",
    date: "May 5, 2026",
    level: "Beginner" as "Beginner",
    featured: false,
    description:
      "Boost your Next.js app with SEO best practices for better visibility online.",
  },
  {
    id: 4,
    title: "Tailwind CSS Deep Dive",
    date: "Jun 12, 2026",
    level: "Intermediate" as "Intermediate",
    featured: true,
    description:
      "Master Tailwind CSS utilities and responsive design for modern web apps.",
  },
];

const WebinarsSection: FC = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">Webinars</h2>
    <div className="grid sm:grid-cols-2 gap-6">
      {webinars.map((wb, idx) => (
        <EventCard
          key={wb.id}
          title={wb.title}
          date={wb.date}
          level={wb.level}
          featured={wb.featured}
          description={wb.description}
          onRegister={() =>
            toast.success(`Successfully registered for "${wb.title}"!`)
          }
          onLearnMore={() =>
            toast(`More info about "${wb.title}" available soon!`, {
              icon: "ℹ️",
            })
          }
          delay={idx * 0.2}
        />
      ))}
    </div>
  </section>
);

export default WebinarsSection;
