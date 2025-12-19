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
      image: "/fsnode.png",
    },
    {
      id: 2,
      title: "Mastering MERN Stack",
      image: "https://source.unsplash.com/400x300/?education,online,2",
    },
    {
      id: 3,
      title: "Full Stack JavaScript Bootcamp",
      image: "https://source.unsplash.com/400x300/?education,online,3",
    },
    {
      id: 4,
      title: "Python & Django Full Stack Development",
      image: "https://source.unsplash.com/400x300/?education,online,4",
    },
    {
      id: 5,
      title: "Angular & Node Full Stack Course",
      image: "https://source.unsplash.com/400x300/?education,online,5",
    },
    {
      id: 6,
      title: "Vue.js and Express Full Stack Development",
      image: "https://source.unsplash.com/400x300/?education,online,6",
    },
    {
      id: 7,
      title: "Advanced Full Stack Developer Program",
      image: "https://source.unsplash.com/400x300/?education,online,7",
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
                <Card className="overflow-hidden">
                  <img
                    src={course.image}
                    className="h-88 w-full object-cover"
                  />
                  <CardContent className="p-6">
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
