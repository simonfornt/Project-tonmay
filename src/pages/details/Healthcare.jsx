import React from "react";

function Healthcare() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold font-domine text-center text-orange-400 mb-12">
        Healthcare & Well-being
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        {/* Text Content */}
        <div className="text-gray-700 text-lg leading-relaxed space-y-6 font-domine">
          <p>
            At <strong className="text-orange-400">Shuddhangan</strong>, we
            believe that good health is the foundation for a child’s success in
            school and in life. That’s why we place a strong emphasis on
            physical and mental well-being through regular health initiatives.
          </p>
          <p>
            Our healthcare program is designed to address the critical medical
            needs of underprivileged children and their families—ensuring no
            child is held back due to illness or lack of medical attention.
          </p>
          <ul className="list-disc pl-6">
            <li>Regular health check-ups by medical professionals</li>
            <li>Free medication and treatment support</li>
            <li>Health awareness workshops for students and parents</li>
            <li>Mental health counseling & support</li>
            <li>Sanitation and hygiene education</li>
            <li>Emergency care assistance</li>
          </ul>
          <p>
            Through compassion and care, we strive to build a healthier
            community—empowered to grow and thrive.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            "healt1.jpg",
            "health2.jpg",
            "health3.jpg",
            "health4.jpg",
            "health5.jpg",
            "health6.jpg",
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Healthcare ${index + 1}`}
              className="rounded-lg shadow-md w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Healthcare;
