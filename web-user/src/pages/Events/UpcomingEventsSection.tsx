import { useState, type FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const allEvents = [
  {
    id: 1,
    category: "Workshops",
    title: "React Advanced Workshop",
    date: "Jan 15, 2026",
    location: "Online",
  },
  {
    id: 2,
    category: "Workshops",
    title: "UI/UX Design Bootcamp",
    date: "Feb 5, 2026",
    location: "Online",
  },
  {
    id: 3,
    category: "Workshops",
    title: "Full Stack Hackathon",
    date: "Mar 20, 2026",
    location: "Online",
  },
  {
    id: 4,
    category: "Webinars",
    title: "JavaScript Essentials",
    date: "Jan 22, 2026",
    location: "Online",
  },
  {
    id: 5,
    category: "Webinars",
    title: "CSS Tricks & Tips",
    date: "Feb 12, 2026",
    location: "Online",
  },
  {
    id: 6,
    category: "Webinars",
    title: "React Patterns Webinar",
    date: "Mar 5, 2026",
    location: "Online",
  },
  {
    id: 7,
    category: "Hackathons",
    title: "Frontend Hackathon",
    date: "Apr 1, 2026",
    location: "Online",
  },
  {
    id: 8,
    category: "Hackathons",
    title: "Backend Challenge",
    date: "Apr 15, 2026",
    location: "Online",
  },
  {
    id: 9,
    category: "Hackathons",
    title: "Fullstack Sprint",
    date: "Apr 30, 2026",
    location: "Online",
  },
  {
    id: 10,
    category: "Bootcamps",
    title: "AI Bootcamp",
    date: "May 10, 2026",
    location: "Online",
  },
  {
    id: 11,
    category: "Bootcamps",
    title: "Node.js Bootcamp",
    date: "May 20, 2026",
    location: "Online",
  },
  {
    id: 12,
    category: "Bootcamps",
    title: "UX/UI Bootcamp",
    date: "May 30, 2026",
    location: "Online",
  },
];

const categories = ["Workshops", "Webinars", "Hackathons", "Bootcamps"];

const UpcomingEventsSection: FC = () => {
  const [activeTab, setActiveTab] = useState("Workshops");

  const filteredEvents = allEvents.filter((e) => e.category === activeTab);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
              ${
                activeTab === cat
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-indigo-500 hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="wait">
          {filteredEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-1">
                      {event.date}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Location: {event.location}
                    </p>
                  </div>
                  <Button className="mt-4 w-full">Register</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
