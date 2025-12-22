// src/components/CourseCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { FC } from "react";
import type { Course } from "@/data/courses";

interface CourseCardProps extends Course {
  onEnroll?: () => void;
  onLearnMore?: () => void;
  delay?: number;
}

const CourseCard: FC<CourseCardProps> = ({
  title,
  description,
  image,
  level,
  featured,
  onEnroll,
  onLearnMore,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <Card className="relative hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col h-full  p-3">
      {featured && (
        <div className="absolute top-3 right-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Featured
        </div>
      )}
      <img
        src={image}
        alt={title}
        className="h-58 w-full object-cover rounded-t-lg"
      />
      <CardContent className="flex flex-col flex-grow p-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          {level && (
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold
                ${
                  level === "Beginner"
                    ? "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100"
                    : level === "Intermediate"
                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100"
                    : "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100"
                }`}
            >
              {level}
            </span>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
          {description}
        </p>
        <div className="flex gap-3 mt-auto">
          <Button size="sm" className="flex-1" onClick={onEnroll}>
            Enroll
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
      </CardContent>
    </Card>
  </motion.div>
);

export default CourseCard;
