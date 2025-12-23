import type { FC } from "react";

const VideoPreviewSection: FC = () => {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-8">Watch Our Introduction</h2>
      <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <video controls className="w-full h-auto">
          <source src="/videos/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoPreviewSection;
