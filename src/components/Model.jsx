import React, { useState } from "react";

const Model = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false); // Function to close the modal

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 md:mt-8">
        <button
          onClick={() => setIsModalOpen(true)} // Opens the modal
          className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-base sm:text-lg hover:scale-105"
        >
          <i className="fas fa-heart text-lg sm:text-xl mr-1 sm:mr-2"></i>
          <span>Make a Difference Now</span>
        </button>
      </div>

      {/* Modal implementation */}
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
    </>
  );
};

export default Model;
