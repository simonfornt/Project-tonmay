import React from 'react';
import { Phone, Mail } from 'lucide-react';

function Contact() {
  return (
    <div className='max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-br from-gray-50 to-white'>
      <h2 className='text-4xl font-semibold text-gray-800 mb-12 font-domine text-center tracking-tight'>
        Get in Touch
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full'>
        
        {/* Head Office */}
        <div className='bg-white/80 backdrop-blur-lg p-10 rounded-2xl border border-gray-200 shadow-lg transition hover:shadow-xl'>
          <h3 className='text-xl font-semibold text-gray-900 mb-6 font-domine'>Head Office</h3>
          <div className='space-y-1 text-gray-600 text-base'>
            <p>Shuddhangon Non-Profit School</p>
            <p>123 Charity Street</p>
            <p>Dhaka, Bangladesh</p>
          </div>
          <div className='border-t border-gray-100 my-6'></div>
          <div className='space-y-4 text-gray-600'>
            <div className='flex items-center gap-3'>
              <Phone className='w-5 h-5 text-primary' />
              <p>+880 1234 567 890</p>
            </div>
            <div className='flex items-center gap-3'>
              <Mail className='w-5 h-5 text-primary' />
              <p>contact@shuddhangon.org</p>
            </div>
          </div>
        </div>

        {/* Jashore Office */}
        <div className='bg-white/80 backdrop-blur-lg p-10 rounded-2xl border border-gray-200 shadow-lg transition hover:shadow-xl'>
          <h3 className='text-xl font-semibold text-gray-900 mb-6 font-domine'>Shuddhangon School Jashore</h3>
          <div className='space-y-1 text-gray-600 text-base'>
            <p>Village: Katakhali</p>
            <p>Union: Horidasktai</p>
            <p>Upazila: Manirampur</p>
            <p>District: Jashore</p>
          </div>
          <div className='border-t border-gray-100 my-6'></div>
          <div className='space-y-4 text-gray-600'>
            <div className='flex items-center gap-3'>
              <Phone className='w-5 h-5 text-primary' />
              <p>+880 1234 567 890</p>
            </div>
            <div className='flex items-center gap-3'>
              <Mail className='w-5 h-5 text-primary' />
              <p>contact@shuddhangon.org</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
