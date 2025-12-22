import { motion } from "framer-motion";
import type { FC } from "react";

const featuredProjects = [
  { title: "AI Chatbot Project", image: "/projects/project1.png" },
  { title: "React Dashboard App", image: "/projects/project2.png" },
  { title: "E-Commerce Platform", image: "/projects/project3.png" },
];

const FeaturedProjectsSection: FC = () => {
  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-xl cursor-pointer shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-xl font-semibold">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default FeaturedProjectsSection;
