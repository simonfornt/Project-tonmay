import React from 'react';

function Cards() {
  const cardData = [
    { id: 1, title: 'Livelihood', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMqh-6AuWFtq-e2p_Wp8AQTqeUjGvVIXpkw&s' },
    { id: 2, title: 'Education', img: 'https://www.indiaspend.com/h-upload/2024/05/31/1275088-education-in-rural-india-1500.jpg' },
    { id: 3, title: 'Healthcare', img: 'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/11/shutterstock_340094927.jpg' },
    { id: 4, title: 'Environment', img: 'https://www.aimsindia.com/wp-content/uploads/2022/06/world-environment.png' },
    { id: 5, title: 'Community', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMqh-6AuWFtq-e2p_Wp8AQTqeUjGvVIXpkw&s' },
    { id: 6, title: 'Innovation', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82iWdRNIeGdnL71KP6wHHMUNqmCu1BGoBFg&s' }
  ];

  return (
    <div className="w-7/8 mx-auto px-4 py-10">
      <h2 className="text-center text-3xl font-bold font-domine text-gray-800 mb-8">Our Focus Areas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg border shadow-orange-200 border-gray-200 hover:shadow-2xl transition duration-300"
          >
            <img className="w-full h-auto object-cover object-center"
              src={card.img}
              alt={card.title}
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold font-domine text-gray-700">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards