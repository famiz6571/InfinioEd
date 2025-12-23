import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; // ShadCN-compatible icon

const reasons = [
  "Industry-focused curriculum",
  "Hands-on real projects",
  "Mentor support & guidance",
  "Career-oriented learning",
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-muted/10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="
                flex items-start p-6 rounded-2xl bg-background
                shadow-md hover:shadow-xl hover:-translate-y-1
                transition-transform duration-300
              "
            >
              <CheckCircle className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0" />
              <p className="text-left text-lg font-medium">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
