import React from 'react';

const EmergencyBanner = () => {
  return (
    <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-lg animate-pulse">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <i className="fas fa-exclamation-triangle text-3xl text-red-600 mr-4"></i>
          <div>
            <h3 className="text-xl font-bold text-red-800">Emergency Appeal</h3>
            <p className="text-red-700">Flood Relief in Bangladesh - Urgent Donations Needed</p>
          </div>
        </div>
        <a
          href="/flood-relief"
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 flex items-center"
        >
          <i className="fas fa-hand-holding-water mr-2"></i>
          Donate Now
        </a>
      </div>
    </div>
  );
};

export default EmergencyBanner;