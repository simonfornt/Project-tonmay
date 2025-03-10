import { useState, useEffect } from "react";

const stats = [
  { label: "Students Enrolled", value: 1200 },
  { label: "Teachers", value: 25 },
  { label: "Funds Raised", value: 50000 },
];

const StatCard = ({ label, value, isLoading }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg rounded-2xl p-8 text-center flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl min-h-[120px]">
      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-10 w-24 bg-white/50 rounded-md mb-2"></div>
          <div className="h-4 w-32 bg-white/30 rounded-md"></div>
        </div>
      ) : (
        <>
          <h2 className="text-5xl font-extrabold text-white">
            {value.toLocaleString()}
          </h2>
          <p className="text-white text-lg mt-2 font-medium uppercase tracking-wide">{label}</p>
        </>
      )}
    </div>
  );
};

const StatsSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading time
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} label={stat.label} value={stat.value} isLoading={loading} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;