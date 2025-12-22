// src/components/EventCard.tsx
import type { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  date: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  featured?: boolean;
  description: string;
  onRegister?: () => void;
  onLearnMore?: () => void;
  delay?: number; // for framer-motion stagger
}

const EventCard: FC<EventCardProps> = ({
  title,
  date,
  level,
  featured = false,
  description,
  onRegister,
  onLearnMore,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative bg-white dark:bg-gray-900 rounded-xl shadow p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
    >
      {/* Featured Ribbon */}
      {featured && (
        <div className="absolute top-3 right-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Featured
        </div>
      )}

      {/* Title & Date */}
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-4">{date}</p>

      {/* Level Badge */}
      {level && (
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4
            ${
              level === "Advanced"
                ? "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100"
                : "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100"
            }`}
        >
          {level}
        </span>
      )}

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
        {description}
      </p>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button size="sm" className="flex-1" onClick={onRegister}>
          Register
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="flex-1"
          onClick={onLearnMore}
        >
          Learn More
        </Button>
      </div>
    </motion.div>
  );
};

export default EventCard;
