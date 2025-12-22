import { motion } from "framer-motion";

const steps = [
  { step: "1", title: "Choose Course" },
  { step: "2", title: "Enroll & Learn" },
  { step: "3", title: "Build Projects" },
  { step: "4", title: "Get Certified" },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-muted/10 dark:bg-muted/20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-foreground dark:text-foreground"
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="
                flex flex-col items-center p-8
                bg-background dark:bg-gray-800
                rounded-2xl shadow-md
                hover:shadow-xl hover:-translate-y-1
                transition-transform duration-300
              "
            >
              {/* Step Number */}
              <div
                className="
                flex items-center justify-center
                w-16 h-16 rounded-full
                bg-primary dark:bg-primary/80
                text-white dark:text-white
                text-2xl font-bold mb-4
              "
              >
                {s.step}
              </div>

              {/* Step Title */}
              <p className="font-medium text-lg text-foreground dark:text-foreground">
                {s.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
