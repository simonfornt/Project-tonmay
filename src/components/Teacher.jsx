import React from "react";

const teachers = [
  // ... (same teacher data as before)
  {
    name: "Sumaiya Islam",
    position: "Assistant Teacher",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Sumon Ray",
    position: "Assistant Teacher",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Joy Biswas",
    position: "Assistant Teacher",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Israt Jahan Jerin",
    position: "Junior Teacher",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "MD. Tamim Slam Ovi",
    position: "Junior Teacher",
    image: "https://via.placeholder.com/100",
  },
];

const TeacherTimeline = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-school text-indigo-700 mr-3 text-4xl"></i>
            <h1 className="text-4xl font-bold text-indigo-800">
              শুদ্ধাঙ্গন স্কুল, যশোর
            </h1>
          </div>
          <div className="relative inline-block">
            <h2 className="text-2xl font-semibold text-gray-800 relative z-10">
              <i className="fas fa-chalkboard-teacher mr-2 text-indigo-600"></i>
              শিক্ষক মন্ডলী পরিচিতি
            </h2>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-indigo-200 opacity-50"></div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          <div className="absolute left-1/2 w-1 bg-indigo-200 h-full transform -translate-x-1/2"></div>

          {teachers.map((teacher, index) => (
            <div
              key={index}
              className={`mb-8 flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="relative w-full md:w-1/2">
                <div className="absolute top-6 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-100 transform -translate-x-1/2 left-1/2 md:left-auto md:right-0 md:translate-x-1/2"></div>

                <div className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 m-4 p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-20 h-20 rounded-full border-4 border-indigo-100 object-cover"
                      />
                      <i
                        className={`fas ${
                          teacher.position.includes("Junior")
                            ? "fa-user-tie"
                            : "fa-chalkboard-teacher"
                        } absolute bottom-0 right-0 bg-indigo-600 text-white p-1.5 rounded-full text-xs w-6 h-6`}
                      ></i>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">
                        {teacher.name}
                      </h2>
                      <div className="flex items-center mt-1">
                        <i className="fas fa-user-tie w-5 h-5 text-indigo-600 mr-2"></i>
                        <span className="text-gray-600 font-medium">
                          {teacher.position}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-indigo-700 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            যোগাযোগ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-3 rounded-full mb-3">
                <i className="fas fa-envelope w-6 h-6 text-indigo-700"></i>
              </div>
              <p className="text-white">shuddhangan@gmail.com</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-3 rounded-full mb-3">
                <i className="fas fa-phone w-6 h-6 text-indigo-700"></i>
              </div>
              <p className="text-white">+৮৮০ ১৯৭২-৭৩০২০৪</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-100 p-3 rounded-full mb-3">
                <i className="fab fa-facebook-f w-6 h-6 text-indigo-700"></i>
              </div>
              <p className="text-white">facebook.com/shuddhangan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherTimeline;