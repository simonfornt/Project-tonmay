import React, { useState } from "react";
import heroImage from '../assets/childern.jpg';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background with optimized mobile scaling */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img src={heroImage} alt="Children in need" 
          className="w-full h-full object-cover md:transform md:scale-100 md:transition-transform md:duration-1000"
          loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
      </div>

      {/* Content with responsive typography */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold leading-snug md:leading-tight animate-fadeInUp">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Empower Change
            </span>
            <br className="hidden md:block" />
            <span className="inline-block mt-2 md:mt-0">Through Compassionate Giving</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200/90 max-w-xl md:max-w-3xl mx-auto leading-relaxed">
            Join our global movement of changemakers creating sustainable impact 
            through targeted support and community empowerment.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 md:mt-8">
            <button onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-base sm:text-lg hover:scale-105" >
              <i className="fas fa-heart text-lg sm:text-xl mr-1 sm:mr-2"></i>
              <span>Make a Difference Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
          <div 
            className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-gray-100
                     transform transition-all duration-300 scale-95 hover:scale-100"
          >
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Direct Impact Portal
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close"
              >
                <i className="fas fa-times text-xl sm:text-2xl"></i>
              </button>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-teal-50 p-4 sm:p-6 rounded-lg sm:rounded-xl">
                <p className="text-base sm:text-lg font-semibold text-teal-700">
                  Bkash Payment Gateway:
                </p>
                <p className="text-xl sm:text-2xl font-mono text-gray-900 mt-1 sm:mt-2">
                  0184 9825 8215
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full px-5 py-3 sm:px-6 sm:py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg sm:rounded-xl
                         transition-all font-semibold text-base sm:text-lg hover:scale-[1.02]"
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