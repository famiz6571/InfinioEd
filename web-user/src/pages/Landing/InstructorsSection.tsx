import { motion } from "framer-motion";

const instructors = [
  {
    name: "John Doe",
    role: "Full Stack Expert",
    image: "/placeholder/placeholder1.png",
  },
  {
    name: "Sarah Lee",
    role: "UI/UX Designer",
    image: "/placeholder/placeholder2.png",
  },
  {
    name: "Ahmed Khan",
    role: "Backend Architect",
    image: "/placeholder/placeholder3.png",
  },
];

const InstructorsSection = () => {
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
          Meet Our Instructors
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {instructors.map((i, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="
                p-8 rounded-2xl bg-background dark:bg-gray-800
                shadow-md hover:shadow-xl hover:-translate-y-1
                transition-transform duration-300
                flex flex-col items-center
              "
            >
              {/* Image */}
              <div className="relative mb-4">
                <img
                  src={i.image}
                  alt={i.name}
                  className="
                    h-28 w-28 rounded-full object-cover
                    ring-4 ring-background dark:ring-gray-700
                    shadow-lg
                  "
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground">
                {i.name}
              </h3>
              <p className="text-muted-foreground dark:text-muted-foreground mt-1">
                {i.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
