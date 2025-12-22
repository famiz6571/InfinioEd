import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import type { FC } from "react";

const galleryTestimonials = [
  { name: "John D.", text: "This platform helped me build amazing projects!" },
  { name: "Sarah L.", text: "The gallery inspired me to learn more." },
  { name: "Ahmed K.", text: "Great platform with interactive content." },
];

const GalleryTestimonials: FC = () => (
  <section className="py-24 px-6">
    <h2 className="text-4xl font-bold mb-12 text-center">What Users Say</h2>
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      loop
      className="max-w-4xl mx-auto"
    >
      {galleryTestimonials.map((t, i) => (
        <SwiperSlide key={i}>
          <div className="bg-background rounded-xl p-6 shadow-md text-center">
            <p className="text-lg italic mb-4">"{t.text}"</p>
            <h4 className="font-semibold">{t.name}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);
export default GalleryTestimonials;
