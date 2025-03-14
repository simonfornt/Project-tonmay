import React from "react";

const DonationCard = ({ imageUrl, des }) => {
  const handleDonateClick = () => {
    alert("Send money by Bkash 01724239801");
  };

  return (
    <div className="w-full md:w-96 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
      transition-shadow duration-300 mx-auto mb-10 hover:scale-[1.02] transition-transform
      border border-gray-100">
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt="Donation"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-8 md:p-10 space-y-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-teal-600">Support Our Cause</h3>
          <p className="text-gray-600 leading-relaxed text-justify">
            {des}
          </p>
        </div>

        {/* Donation Button with Font Awesome Icon */}
        <button onClick={handleDonateClick} onTouchStart={handleDonateClick}
          className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold 
            py-4 px-8 rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
            flex items-center justify-center gap-3"
        >
          <i className="fas fa-hand-holding-heart text-xl"></i>
          <span className="text-lg">Donate Now</span>
        </button>
      </div>
    </div>
  );
};

export default DonationCard;