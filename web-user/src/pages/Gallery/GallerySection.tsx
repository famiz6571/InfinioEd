import { useState, type FC } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react"; // optional icon for close

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
      <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {galleryImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="relative overflow-hidden rounded-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(img)}
          >
            <motion.img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-64 object-cover"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <button
            className="absolute top-4 right-4 text-white text-3xl z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X />
          </button>
          <motion.img
            src={selectedImage}
            alt="Selected"
            className="max-h-full max-w-full rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
