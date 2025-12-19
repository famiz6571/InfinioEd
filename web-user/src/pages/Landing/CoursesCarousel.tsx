import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CoursesCarousel = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Development with React & Node",
      image: "/courses/fsnode.png",
    },
    {
      id: 2,
      title: "Mastering MERN Stack",
      image: "/courses/mernstack.png",
    },
    {
      id: 3,
      title: "Full Stack JavaScript Bootcamp",
      image: "/courses/fsjs.png",
    },
    {
      id: 4,
      title: "Python & Django Full Stack Development",
      image: "/courses/python.png",
    },
    {
      id: 5,
      title: "Angular & Node Full Stack Course",
      image: "/courses/angular.png",
    },
    {
      id: 6,
      title: "Vue.js and Express Full Stack Development",
      image: "/courses/vue.png",
    },
    {
      id: 7,
      title: "Advanced Full Stack Developer Program",
      image: "/courses/advanced.png",
    },
  ];

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
                <Card className="overflow-hidden p-3">
                  <img
                    src={course.image}
                    className="h-full w-full object-cover rounded-md"
                  />
                  <CardContent className="p-2">
                    <h3 className="font-semibold mb-2">{course.title}</h3>
                    <Button className="w-full">Enroll Now</Button>
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
