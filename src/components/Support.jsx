import React from 'react';

const supportItems = [
  {
    id: 1,
    name: 'Support  Miraz for Education',
    amount: 300,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLGm8mosfmSGjZloL3Gf1MtS7p276sG7JNPA&s',
  },
  {
    id: 2,
    name: 'Medical Assistance for Imran',
    amount: 500,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbRC9jVtKlUvxpkisY-aw5s7HyFaQAXFuArg&s',
  },
  {
    id: 3,
    name: 'Food & Nutrition',
    amount: 200,
    image: 'https://pbs.twimg.com/media/GmeDR3maIAAd5Li?format=jpg&name=4096x4096',
  },
  {
    id: 4,
    name: 'Shelter for Homeless',
    amount: 600,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-U2gtoizxFXjtSEBJNYL6pmdtJZ-05ERaLg&s',
  },
];

function Support() {
  return (
    <div className='max-w-7xl mx-auto py-10 px-4'>
      <h1 className='text-orange-400 uppercase text-center font-extrabold mb-9 text-3xl'>
        Your Support Can Change Their Lives
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {supportItems.map((item) => (
          <div key={item.id} className='border border-orange-400 rounded-2xl overflow-hidden shadow-md'>
            <img className='object-cover w-full h-48' src={item.image} alt={item.name} />
            <div className='text-center p-4'>
              <h4 className='font-bold'>{item.name}</h4>
              <p className='text-orange-400 font-semibold my-2'>${item.amount}</p>
              <button className='bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition'>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Support;