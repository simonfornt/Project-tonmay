import React from 'react';

function School() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-8">
        About Shuddhangan School
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            src="https://via.placeholder.com/500" // Add the actual image URL here
            alt="Shuddhangan School"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
        <div className="text-lg text-gray-700">
          <p className="mb-4">
            Shuddhangan School was established in 2023 at the initiative of Tanmoy Mandal to provide free quality education to the underprivileged children of Bangladesh. Many children living below the poverty line cannot afford to attend school due to the high cost of education in the country.
          </p>
          <p className="mb-4">
            Shuddhangan School aims to bridge this gap by providing free education, enabling these children to escape poverty and become educated. Not only is education free, but to encourage families to send their children to school, Shuddhangan schools provide learning materials, library access, daily meals, monthly grocery bags, health check-ups, and festival assistance.
          </p>
          <p className="font-semibold text-orange-500 mt-6">
            Join us in empowering the future of these children through education!
          </p>
        </div>
      </div>
    </div>
  );
}

export default School;
