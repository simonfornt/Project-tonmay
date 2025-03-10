import React, { useState } from 'react';

const ImpactCalculator = () => {
  const [amount, setAmount] = useState(50);
  const impacts = {
    25: { meals: 12, education: 1 },
    50: { meals: 25, education: 2 },
    100: { meals: 50, education: 5 },
    200: { meals: 100, education: 10 }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 flex items-center">
        <i className="fas fa-calculator text-teal-600 mr-3"></i>
        Your Impact Calculator
      </h2>

      <div className="space-y-8">
        <div className="range-slider">
          <input
            type="range"
            min="25"
            max="200"
            step="25"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full accent-teal-600"
          />
          <div className="flex justify-between text-gray-600">
            <span>$25</span>
            <span className="text-xl font-bold text-teal-600">${amount}</span>
            <span>$200</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ImpactItem 
            icon="fa-utensils"
            title="Meals Provided"
            count={impacts[amount].meals * (amount/25)}
          />
          <ImpactItem
            icon="fa-book-open"
            title="Education Kits"
            count={impacts[amount].education * (amount/25)}
          />
        </div>

        <div className="text-center">
          <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition">
            <i className="fas fa-hand-holding-heart mr-2"></i>
            Donate ${amount}
          </button>
        </div>
      </div>
    </div>
  );
};

const ImpactItem = ({ icon, title, count }) => (
  <div className="bg-teal-50 p-6 rounded-xl">
    <i className={`fas ${icon} text-3xl text-teal-600 mb-4`}></i>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="text-4xl font-bold">{count}</div>
  </div>
);

export default ImpactCalculator;