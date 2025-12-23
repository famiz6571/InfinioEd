import GallerySection from "./GallerySection";
import CarouselSection from "./CarouselSection";
import type { FC } from "react";
import FeaturedProjectsSection from "./FeaturedProjectsSection";
import GalleryCTASection from "./GalleryCTASection";
import GalleryTestimonials from "./GalleryTestimonials";
import VideoPreviewSection from "./VideoPreviewSection";

const GalleryPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 rounded-md">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Gallery</h1>
        <CarouselSection />
        <GallerySection />
        <FeaturedProjectsSection />
        <VideoPreviewSection />
        <GalleryTestimonials />
        <GalleryCTASection />
      </div>
    </div>
  );
};

export default GalleryPage;
