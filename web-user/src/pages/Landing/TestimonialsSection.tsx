import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah J.",
    feedback:
      "INIFINOED helped me learn React and land my first developer job!",
  },
  {
    name: "Michael B.",
    feedback:
      "The courses are well structured and the instructors are amazing.",
  },
  {
    name: "Anna K.",
    feedback: "I love the community and how easy it is to learn anywhere.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-muted/10 dark:bg-muted/20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-foreground dark:text-foreground"
        >
          What Our Students Say
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <Card className="rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic text-lg">
                  "{t.feedback}"
                </p>
                <h4 className="font-semibold text-foreground dark:text-foreground text-lg">
                  {t.name}
                </h4>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
