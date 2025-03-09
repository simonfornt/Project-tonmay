import React from "react";
import { useState } from "react";
import heroImage from '../assets/childern.jpg'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-center">
        <h1 className="text-4xl font-bold mb-4">Support Education for All</h1>
        <p className="text-lg mb-6">Help us provide free education to underprivileged children.</p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded text-white"
        >
          Donate
        </button>
      </div>
      
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-black">
            <h2 className="text-xl font-semibold mb-4">Send Your Help</h2>
            <p className="mb-4">Bkash Number: <strong>018498258</strong></p>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
