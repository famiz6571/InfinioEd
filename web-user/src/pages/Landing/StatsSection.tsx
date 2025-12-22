import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const stats = [
  { label: "Students Enrolled", value: 25000, suffix: "+" },
  { label: "Courses Available", value: 50, suffix: "+" },
  { label: "Expert Instructors", value: 30, suffix: "+" },
  { label: "Success Rate", value: 95, suffix: "%" },
];

/* -------------------------------
   Counter Component (Framer Motion)
-------------------------------- */
const AnimatedCounter = ({ value }: { value: number }) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) =>
    Math.floor(v).toLocaleString()
  );
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    hasAnimated.current = true;

    animate(motionValue, value, {
      duration: 2.4, // ⬅ slow & premium
      ease: "easeOut",
    });
  }, [value, motionValue]);

  return <motion.span>{rounded}</motion.span>;
};

/* -------------------------------
   Stats Section
-------------------------------- */
const StatsSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  /* IntersectionObserver */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-muted/30">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="relative px-6">
              {/* Divider */}
              {i !== stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-border" />
              )}

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-5xl font-bold tracking-tight"
              >
                {inView && <AnimatedCounter value={stat.value} />}
                {stat.suffix}
              </motion.h3>

              <p className="mt-3 text-sm uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
