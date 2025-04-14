import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import heroImage1 from '../assets/hero.jpg';
import heroImage2 from '../assets/hero2.jpg';
import heroImage3 from '../assets/hero3.jpg';
import heroImage4 from '../assets/hero4.jpg';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [heroImage1, heroImage2, heroImage3,heroImage4];

  // Auto change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative h-[50vh] md:h-[60vh] lg:h-[80vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Carousel Container */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={image}
              alt="Children in need"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-gray-100 transform transition-all duration-300 scale-95 hover:scale-100">
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Direct Impact Portal
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close"
              >
                <X className="text-xl sm:text-2xl" />
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
                className="w-full px-5 py-3 sm:px-6 sm:py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg sm:rounded-xl transition-all font-semibold text-base sm:text-lg hover:scale-[1.02]"
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
