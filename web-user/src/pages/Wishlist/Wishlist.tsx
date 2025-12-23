import { useState } from "react";
import { courses, type Course } from "@/data/courses";
import toast from "react-hot-toast";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<Course[]>([courses[0], courses[2]]);

  const handleRemoveFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((course) => course.id !== id));
    toast.error("Course removed from wishlist");
  };

  const handleAddToCart = (course: Course) => {
    // Placeholder for cart logic
    toast.success(`"${course.title}" added to cart`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        My Wishlist
      </h1>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((course) => (
            <div
              key={course.id}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-md flex flex-col"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {course.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 flex-1">
                  {course.description}
                </p>
                <div className="mt-4 flex gap-2">
                  <button
                    className="flex-1 px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    onClick={() => handleAddToCart(course)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="flex-1 px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    onClick={() => handleRemoveFromWishlist(course.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-300 text-center">
          Your wishlist is empty.
        </p>
      )}
    </div>
  );
}
