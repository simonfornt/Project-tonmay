import React from 'react';
import { Link } from 'react-router-dom';

function Cards() {
  const cardData = [
    { id: 1, title: 'Livelihood', path: 'livelihood', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMqh-6AuWFtq-e2p_Wp8AQTqeUjGvVIXpkw&s' },
    { id: 2, title: 'Education', path: 'education', img: 'https://www.indiaspend.com/h-upload/2024/05/31/1275088-education-in-rural-india-1500.jpg' },
    { id: 3, title: 'Healthcare', path: 'healthcare', img: 'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/11/shutterstock_340094927.jpg' },
    { id: 4, title: 'Environment', path: 'environment', img: 'https://www.aimsindia.com/wp-content/uploads/2022/06/world-environment.png' },
    { id: 5, title: 'Community', path: 'community', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSMqh-6AuWFtq-e2p_Wp8AQTqeUjGvVIXpkw&s' },
    { id: 6, title: 'Innovation', path: 'innovation', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ82iWdRNIeGdnL71KP6wHHMUNqmCu1BGoBFg&s' }
  ];

  return (
    <div className="w-11/12 mx-auto px-6 py-12">
      <h2 className="text-center text-3xl font-bold font-domine text-gray-800 mb-12">Our Focus Areas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <Link to={`/${card.path}`} key={card.id}>
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer">
              <img className="w-full h-56 sm:h-64 md:h-72 object-cover object-center" src={card.img} alt={card.title} />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm">Explore the impact of {card.title.toLowerCase()} in our initiatives.</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cards;
