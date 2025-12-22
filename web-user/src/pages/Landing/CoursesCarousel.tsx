import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { courses } from "@/data/courses";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CoursesCarousel = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 bg-muted/10 dark:bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground dark:text-foreground">
          Popular Courses
        </h2>

        <Carousel>
          <CarouselContent>
            {courses.map((course) => (
              <CarouselItem key={course.id} className="md:basis-1/3">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    className="overflow-hidden p-3 cursor-pointer shadow-md hover:shadow-xl rounded-2xl"
                    onClick={() => navigate(`/courses/${course.id}`)}
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-48 w-full object-cover rounded-t-2xl"
                    />
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-3 text-foreground dark:text-foreground">
                        {course.title}
                      </h3>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation(); // prevent card click
                          navigate(`/courses/${course.id}`);
                        }}
                        className="w-full rounded-lg shadow hover:shadow-md transition-all duration-300"
                      >
                        Enroll Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default CoursesCarousel;
