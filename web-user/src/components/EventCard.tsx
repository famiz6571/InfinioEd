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
  delay?: number;
}

const levelStyles: Record<EventCardProps["level"], string> = {
  Beginner: "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100",
  Intermediate:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100",
  Advanced: "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100",
};

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      whileHover={{ scale: 1.02 }}
      className="relative w-full max-w-full overflow-hidden bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-shadow"
    >
      {/* Featured Ribbon */}
      {featured && (
        <span className="absolute top-3 right-3 z-10 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Featured
        </span>
      )}

      <div className="p-6 flex flex-col min-w-0">
        {/* Title */}
        <h3 className="font-semibold text-lg sm:text-xl mb-1 break-words">
          {title}
        </h3>

        {/* Date */}
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{date}</p>

        {/* Level Badge */}
        <span
          className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold mb-4 ${levelStyles[level]}`}
        >
          {level}
        </span>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 break-words line-clamp-3">
          {description}
        </p>

        {/* Actions */}
        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <Button
            size="sm"
            className="w-full sm:flex-1"
            onClick={onRegister}
            aria-label="Register for event"
          >
            Register
          </Button>

          <Button
            size="sm"
            variant="outline"
            className="w-full sm:flex-1"
            onClick={onLearnMore}
            aria-label="Learn more about event"
          >
            Learn More
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
