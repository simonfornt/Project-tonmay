import React from 'react';

function Education() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold font-domine text-center mb-14 text-orange-400">
        Education at Shuddhangan
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="text-gray-700 text-lg leading-relaxed space-y-6">
          <p className="font-domine">
            <strong className="text-orange-400">Shuddhangan School</strong> was established in 2023 at the initiative of{' '}
            <strong className="text-orange-400">Tanmoy Mandal</strong> to provide free quality education to the underprivileged children of Bangladesh. Many children living below the poverty line cannot afford to attend school due to the high cost of education in the country.
          </p>
          <p className="font-domine">
            Shuddhangan School aims to bridge this gap by providing free education, enabling these children to escape poverty and become educated. Not only is education free, but to encourage families to send their children to school, Shuddhangan schools provide learning materials, library access, daily meals, monthly grocery bags, health check-ups, and festival assistance.
            The school operates 1 campus in Jashore Railway Station area, where about 30 students are taught. Since its inception, 60 students have received the opportunity to study. The school's comprehensive support system caters to the multifaceted needs of its students, ensuring their academic, physical and mental well-being. By addressing these diverse needs, Shudhangan School prepares its students to become educated, empowered and financially independent citizens of Bangladesh, capable of contributing positively to society.
          </p>
          <p className="font-domine">
            Currently operating one campus at <strong className="text-orange-400">Jashore Railway Station</strong> with around 30 students, the school has helped 60 students so far. Its comprehensive system ensures academic, physical, and mental well-being, preparing students to be empowered, financially independent citizens.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            'eduimg1.jpg',
            'eduimg2.jpg',
            'eduimg3.jpg',
            'eduimg4.jpg',
            'eduimg5.jpg',
            'eduimg2.jpg',
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Education ${index + 1}`}
              className="rounded-lg shadow-md object-cover w-full h-48 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
