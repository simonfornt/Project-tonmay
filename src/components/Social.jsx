import React from 'react';

const TeacherCard = ({ name, title, imageUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={imageUrl}
        alt={name}
        className="rounded-full w-32 h-32 object-cover mb-2"
      />
      <div className="text-center">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  );
};

const TeacherDirectory = () => {
  const teachers = [
    {
      name: 'Sumaiya Islam',
      title: 'Assistant Teacher',
      imageUrl: 'https://via.placeholder.com/128', // Replace with actual image
    },
    {
      name: 'Sumon Ray',
      title: 'Assistant Teacher',
      imageUrl: 'https://via.placeholder.com/128', // Replace with actual image
    },
    {
      name: 'Joy Biswas',
      title: 'Assistant Teacher',
      imageUrl: 'https://via.placeholder.com/128', // Replace with actual image
    },
    {
      name: 'Israt Jahan Jerin',
      title: 'Junior Teacher',
      imageUrl: 'https://via.placeholder.com/128', // Replace with actual image
    },
    {
      name: 'MD. Tamim Slam Ovi',
      title: 'Junior Teacher',
      imageUrl: 'https://via.placeholder.com/128', // Replace with actual image
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6">
          শুদ্ধাঙ্গন স্কুল, যশোর <br/> শিক্ষক মন্ডলী পরিচিতি
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {teachers.map((teacher, index) => (
            <TeacherCard
              key={index}
              name={teacher.name}
              title={teacher.title}
              imageUrl={teacher.imageUrl}
            />
          ))}
        </div>
        <div className="text-center">
          <p className="mb-2">
            <a
              href="https://facebook.com/shuddhangan"
              className="text-blue-600 hover:underline"
            >
              facebook.com/shuddhangan
            </a>
          </p>
          <p className="mb-2">+880 1972-730204</p>
          <p>
            <a
              href="mailto:shuddhangan@gmail.com"
              className="text-blue-600 hover:underline"
            >
              shuddhangan@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeacherDirectory;