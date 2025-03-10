import React from "react";



const DonationCard = ({ imageUrl, des }) => {
  // Function to show alert
  const handleDonateClick = () => {
    alert("Send money by Bkash 01724239801");
  };

  return (
    <>
  
    <div className=" max-w-sm my-4 mx-10 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
       
      {/* Styled Image */}
      <div className="h-60 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt="Donation"
          className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-5 text-center">
        <h2 className="text-xl font-bold text-teal-600">Donation</h2>
        <p className="text-gray-600 mt-2">{des}</p>

        <button
          className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300"
          onClick={handleDonateClick}
          onTouchStart={handleDonateClick} // Works on touch devices
        >
          Donate Now
        </button>
      </div>
    </div>
    </>
  );
};

export default DonationCard;