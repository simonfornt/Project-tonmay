import React, { useState } from "react";
import heroImage from '../assets/childern.jpg';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Helping Each Other <br className="hidden md:block"/> Can Make the World Better
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-80">
          We seek out world changers and difference makers across the globe, 
          <br className="hidden md:block"/> equipping them to fulfill their unique purpose.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-all"
        >
          Donate Now
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl text-black max-w-sm transform transition-all scale-95 animate-fadeIn">
            <h2 className="text-2xl font-semibold text-center mb-4">Send Your Help</h2>
            <p className="text-lg text-center mb-4">
              Bkash Number: <strong>018498258215</strong>
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
