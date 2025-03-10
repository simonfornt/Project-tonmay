import React, { useState } from "react";
import heroImage from '../assets/childern.jpg';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Children in need" 
          className="w-full h-full object-cover transform scale-105 md:scale-100 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fadeInUp">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Empower Change
            </span>
            <br className="hidden md:block" />
            Through Compassionate Giving
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200/90 max-w-3xl mx-auto leading-relaxed">
            Join our global movement of changemakers creating sustainable impact 
            through targeted support and community empowerment.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <i className="fas fa-heart text-xl mr-2"></i>
              <span>Make a Difference Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
          <div 
            className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full border border-gray-100
                     transform transition-all duration-300 scale-95 hover:scale-100"
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Direct Impact Portal
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close"
              >
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-teal-50 p-6 rounded-xl">
                <p className="text-lg font-semibold text-teal-700">
                  Bkash Payment Gateway:
                </p>
                <p className="text-2xl font-mono text-gray-900 mt-2">
                  0184 9825 8215
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl
                         transition-all font-semibold hover:scale-[1.02]"
              >
                Confirm Donation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;