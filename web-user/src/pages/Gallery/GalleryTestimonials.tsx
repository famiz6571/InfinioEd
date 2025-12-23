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
  <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
    <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
      What Users Say
    </h2>

    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      className="max-w-4xl mx-auto"
    >
      {galleryTestimonials.map((t, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/40 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
            <p className="text-lg italic text-gray-700 dark:text-gray-200 mb-4">
              &ldquo;{t.text}&rdquo;
            </p>
            <h4 className="font-semibold text-gray-900 dark:text-white mt-2">
              {t.name}
            </h4>
            <div className="flex mt-4 space-x-1">
              {/* Optional: small stars or icons for rating */}
              {[...Array(5)].map((_, idx) => (
                <span key={idx} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default GalleryTestimonials;
