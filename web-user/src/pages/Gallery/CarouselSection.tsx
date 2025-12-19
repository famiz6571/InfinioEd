import type { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const carouselImages = [
  "/carousel/carousel1.png",
  "/carousel/carousel2.png",
  "/carousel/carousel3.png",
];

const CarouselSection: FC = () => {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="max-w-[800px] "
      >
        {carouselImages.map((img, idx) => (
          <SwiperSlide key={idx} className="flex justify-center items-center">
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CarouselSection;
