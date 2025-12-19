import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Users, Globe } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "Expert Instructors" },
  { icon: BookOpen, title: "Quality Courses" },
  { icon: Users, title: "Community Learning" },
  { icon: Globe, title: "Learn Anywhere" },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-muted/40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <Card key={i} className="rounded-2xl">
            <CardContent className="p-8 text-center">
              <f.icon className="h-10 w-10 mx-auto mb-4 text-indigo-600" />
              <h3 className="font-semibold text-lg">{f.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
