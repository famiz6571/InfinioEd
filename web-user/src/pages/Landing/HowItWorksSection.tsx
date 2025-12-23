import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  { step: "1", title: "Choose Course" },
  { step: "2", title: "Enroll & Learn" },
  { step: "3", title: "Build Projects" },
  { step: "4", title: "Get Certified" },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Card className="flex flex-col items-center justify-center p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <CardHeader className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-2xl font-bold shadow-lg">
                    {s.step}
                  </div>
                  <CardTitle className="text-center text-lg font-semibold text-gray-900 dark:text-white whitespace-nowrap overflow-hidden text-ellipsis">
                    {s.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
