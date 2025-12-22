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
    <section className="py-24 px-6 bg-muted/10 dark:bg-muted/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <Card className="rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <f.icon className="h-12 w-12 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="font-semibold text-lg md:text-xl text-foreground dark:text-foreground">
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
