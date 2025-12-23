import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white"
        >
          Meet Our Instructors
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {instructors.map((i, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Card className="flex flex-col items-center p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                {/* Image */}
                <div className="relative mb-4">
                  <img
                    src={i.image}
                    alt={i.name}
                    className="h-28 w-28 rounded-full object-cover ring-4 ring-white/30 dark:ring-white/10 shadow-lg"
                  />
                </div>

                {/* Name & Role */}
                <CardHeader className="flex flex-col items-center gap-1">
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white whitespace-nowrap overflow-hidden text-ellipsis">
                    {i.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">
                    {i.role}
                  </p>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
