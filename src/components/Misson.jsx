import React from "react";

const Mission = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 sm:px-6 lg:px-16 py-12 md:py-24">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 max-w-xl h-64 sm:h-72 md:h-96 lg:h-[500px] flex justify-center items-center">
        {/* Background Square 1 */}
        {/* <div className="hidden sm:block w-40 md:w-52 lg:w-64 h-40 md:h-52 lg:h-64 bg-gray-200 border-4 border-teal-300/70 absolute top-0 left-0 md:left-4 lg:left-8 -translate-y-4 md:-translate-y-8" /> */}

        {/* Main Image Container */}
        <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg">
          <img
            src="https://i.postimg.cc/25xfD2XG/village.jpg"
            alt="Our mission"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay Square 2 */}
        {/* <div className="hidden sm:block w-32 md:w-40 lg:w-48 h-32 md:h-40 lg:h-48 bg-gray-200 border-4 border-teal-300/90 absolute bottom-0 right-0 md:right-4 lg:right-8 translate-y-4 md:translate-y-8" /> */}
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 max-w-2xl space-y-4 md:space-y-6 text-center md:text-left">
        <h3 className="text-sm sm:text-base text-gray-500 font-semibold uppercase tracking-wide">
          Our Mission
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          Your Support Is Really Powerful.
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed sm:leading-loose">
          The secret to happiness lies in helping others. Never underestimate
          the difference YOU can make in the lives of the poor, the abused, and
          the helpless.
        </p>
        <button className="px-6 py-3 sm:px-8 sm:py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
          Read More
        </button>
      </div>
    </section>
  );
};

export default Mission;
