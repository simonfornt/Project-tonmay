import React from "react";

const Banner = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] bg-gradient-to-r from-blue-800 to-teal-600">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Healthcare"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-3xl text-white">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <i className="fas fa-stethoscope mr-3 text-lg"></i>
            <span className="font-semibold">Healthcare Initiative</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Building a Healthier Future Together
          </h1>

          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Join our mission to provide quality healthcare access to underserved
            communities worldwide. Your support can save lives.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all 
                          flex items-center justify-center gap-2"
            >
              <i className="fas fa-hand-holding-medical"></i>
              Support Now
            </button>

            <button
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-900 
                          transition-all flex items-center justify-center gap-2"
            >
              <i className="fas fa-info-circle"></i>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse">
        <i className="fas fa-chevron-down text-3xl text-white opacity-70"></i>
      </div>

      {/* Floating Icons */}
      <div className="hidden md:block absolute top-20 right-20 opacity-10 animate-float">
        <i className="fas fa-heartbeat text-9xl"></i>
      </div>
      <div className="hidden md:block absolute bottom-20 left-20 opacity-10 animate-float-delayed">
        <i className="fas fa-hospital-user text-9xl"></i>
      </div>
    </section>
  );
};

export default Banner;
