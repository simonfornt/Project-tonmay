import React from 'react';

function Contact() {
  return (
    <div className='max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-center px-4 py-16'>
      <h2 className='text-3xl font-normal text-gray-700 mb-8 font-domine text-center'>Contact Us</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4'>
        <div className='bg-white p-8 rounded-lg text-center border border-gray-200 shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
          <h3 className='text-lg font-normal text-gray-900 mb-4 font-domine'>Our Main Address</h3>
          <div className='space-y-2 text-gray-600'>
            <p>Shuddhangon Non-Profit School</p>
            <p>123 Charity Street</p>
            <p>Dhaka, Bangladesh</p>
          </div>
          <div className='border-t border-gray-100 my-6'></div>
          <div className='space-y-3 text-gray-600'>
            <div className='flex items-center justify-center gap-2'>
              <span>📞</span>
              <p>+880 1234 567 890</p>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <span>📧</span>
              <p>contact@shuddhangon.org</p>
            </div>
          </div>
        </div>
        <div className='bg-white p-8 rounded-lg text-center border border-gray-200 shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
          <h3 className='text-lg font-normal text-gray-900 mb-4 font-domine'>Our Address</h3>
          <div className='space-y-2 text-gray-600'>
            <p>Shuddhangon Non-Profit School</p>
            <p>123 Charity Street</p>
            <p>Dhaka, Bangladesh</p>
          </div>
          <div className='border-t border-gray-100 my-6'></div>
          <div className='space-y-3 text-gray-600'>
            <div className='flex items-center justify-center gap-2'>
              <span>📞</span>
              <p>+880 1234 567 890</p>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <span>📧</span>
              <p>contact@shuddhangon.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;