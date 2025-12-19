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

const CoursesCarousel = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Courses
        </h2>
        <Carousel>
          <CarouselContent>
            {courses.map((course) => (
              <CarouselItem key={course.id} className="md:basis-1/3">
                <Card
                  className="overflow-hidden p-3 cursor-pointer"
                  onClick={() => navigate(`/courses/${course.id}`)}
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-48 w-full object-cover rounded-t-lg"
                  />
                  <CardContent className="p-2">
                    <h3 className="font-semibold mb-2">{course.title}</h3>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation(); // prevent card click
                        navigate(`/courses/${course.id}`);
                      }}
                      className="w-full"
                    >
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
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
