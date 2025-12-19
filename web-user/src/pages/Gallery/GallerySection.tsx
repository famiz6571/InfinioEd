import { useState, type FC } from "react";
import { Card, CardContent } from "@/components/ui/card";

const galleryImages = [
  "/gallery/gallery1.png",
  "/gallery/gallery2.png",
  "/gallery/gallery3.png",
  "/gallery/gallery4.png",
  "/gallery/gallery5.png",
  "/gallery/gallery6.png",
];

const GallerySection: FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Gallery</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {galleryImages.map((img, idx) => (
          <Card
            key={idx}
            className="cursor-pointer overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            onClick={() => setSelectedImage(img)}
          >
            <CardContent className="py-4">
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full  object-cover transform hover:scale-105 transition-transform duration-300 rounded-md"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-h-full max-w-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
