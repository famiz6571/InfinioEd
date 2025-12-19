import type { FC } from "react";

const TutorialsPage: FC = () => {
  const tutorials = [
    {
      id: 1,
      title: "React Basics",
      description: "Learn the fundamentals of React.",
    },
    {
      id: 2,
      title: "Tailwind CSS Guide",
      description: "Build responsive UIs with Tailwind CSS.",
    },
    {
      id: 3,
      title: "TypeScript with React",
      description: "Add type safety to your React apps.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Tutorials</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tut) => (
            <div
              key={tut.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-2">{tut.title}</h2>
              <p className="text-gray-700 dark:text-gray-300">
                {tut.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;
