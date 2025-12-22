import type { FC } from "react";

const VideoPreviewSection: FC = () => {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-8">Watch Our Introduction</h2>
      <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <video src="/videos/intro.mp4" controls className="w-full h-auto" />
      </div>
    </section>
  );
};
export default VideoPreviewSection;
