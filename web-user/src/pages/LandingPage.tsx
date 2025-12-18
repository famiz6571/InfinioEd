const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex flex-col items-center justify-center text-center py-32 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to Our Product
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl">
          Build amazing web applications faster with React, Vite, Tailwind, and
          shadcn/ui components.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#features"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Fast Setup</h3>
            <p>
              Start your project quickly with Vite, React, and Tailwind CSS.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Beautiful UI</h3>
            <p>
              Use shadcn/ui components and Tailwind to build stunning
              interfaces.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Responsive</h3>
            <p>Fully responsive layout that looks perfect on any device.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-700">
            We are a team of passionate developers building tools and components
            that make web development faster, easier, and more enjoyable.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
        <a
          href="#"
          className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition"
        >
          Get Started Now
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center py-6">
        &copy; {new Date().getFullYear()} My Company. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
