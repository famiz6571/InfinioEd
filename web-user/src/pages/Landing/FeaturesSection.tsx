import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: GraduationCap, title: "Expert Instructors" },
  { icon: BookOpen, title: "Quality Courses" },
  { icon: Users, title: "Community Learning" },
  { icon: Globe, title: "Learn Anywhere" },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <Card className="flex flex-col items-center p-8 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md dark:backdrop-blur-sm shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <CardContent className="flex flex-col items-center text-center gap-4">
                <f.icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white whitespace-nowrap overflow-hidden text-ellipsis">
                  {f.title}
                </h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
