import React, { useState, useEffect } from 'react';

const DonationTracker = () => {
  const [donations, setDonations] = useState(124530);
  const goal = 500000;

  useEffect(() => {
    const interval = setInterval(() => {
      setDonations(prev => Math.min(prev + Math.floor(Math.random() * 1000), goal));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex items-center mb-6">
        <i className="fas fa-donate text-4xl text-teal-600 mr-4"></i>
        <h2 className="text-3xl font-bold">Live Donation Tracker</h2>
      </div>
      
      <div className="space-y-6">
        <div className="relative pt-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Raised: ${donations.toLocaleString()}</span>
            <span className="text-gray-600">Goal: ${goal.toLocaleString()}</span>
          </div>
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-teal-400 to-cyan-500 transition-all duration-1000"
              style={{ width: `${Math.min((donations/goal)*100, 100)}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard icon="fa-users" label="Beneficiaries" value="25k+" />
          <StatCard icon="fa-map-marker-alt" label="Locations" value="18" />
          <StatCard icon="fa-hand-holding-heart" label="Donors" value="4.2k" />
          <StatCard icon="fa-clock" label="Active Since" value="2015" />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div className="bg-gray-50 p-4 rounded-xl text-center">
    <i className={`fas ${icon} text-2xl text-teal-600 mb-2`}></i>
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-gray-600 text-sm">{label}</div>
  </div>
);

export default DonationTracker;