import React from "react";

function Livelihood() {
  return (
    <div className="bg-gray-50 py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold font-domine text-center text-orange-400 mb-12">
        Livelihood Empowerment
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
        <div className="text-gray-700 text-lg leading-relaxed space-y-6">
          <p className="font-domine">
            At <strong className="text-orange-400">Shuddhangan</strong>, we
            believe that education alone is not enough to break the cycle of
            poverty. That’s why we are committed to uplifting families through{" "}
            <strong className="text-orange-400">livelihood support</strong> and
            sustainable empowerment initiatives.
          </p>
          <p className="font-domine">
            We work with underprivileged communities to provide skills training,
            income-generating opportunities, and vocational education. Our
            programs are designed to build confidence, financial independence,
            and a better future.
          </p>
          <ul className="list-disc pl-6 font-domine">
            <li>Skill development workshops for parents</li>
            <li>Women empowerment through tailoring and crafts</li>
            <li>Small business support & microloans</li>
            <li>Youth entrepreneurship programs</li>
            <li>Job placement assistance</li>
            <li>Financial literacy & savings training</li>
          </ul>
          <p className="font-domine">
            These efforts ensure not just survival but dignity—helping
            individuals stand tall as they earn with pride and contribute
            meaningfully to their communities.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            "liveimg1.jpg",
            "liveimg2.jpg",
            "liveimg3.jpg",
            "liveimg4.jpg",
            "liveimg2.jpg",
            "liveimg3.jpg",
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Livelihood ${index + 1}`}
              className="rounded-lg shadow-md w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Livelihood;
