import { type FC } from "react";

interface Testimonial {
  name: string;
  role: string;
  message: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <div className="my-16 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        What our users say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition-transform"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              "{t.message}"
            </p>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {t.name}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
