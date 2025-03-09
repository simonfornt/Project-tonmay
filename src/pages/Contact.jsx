import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
   <>
    <Navbar/>
    <section className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-cyan-400 mb-6">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-300">Address</h3>
            <p className="text-gray-400">
              Shuddhangan School (Jashore)
              <br />
              Railgate, Sadar, Jashore, Khulna, Dhaka, Bangladesh
            </p>

            <h3 className="text-xl font-semibold text-gray-300">Phone</h3>
            <p className="text-gray-400">+880 1972730204</p>

            <h3 className="text-xl font-semibold text-gray-300">Email</h3>
            <p className="text-gray-400">shuddhangan@gmail.com</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-300">Website</h3>
            <a
              href="https://udhangan.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-500"
            >
              https://udhangan.netlify.app/
            </a>

            <h3 className="text-xl font-semibold text-gray-300">Social Media</h3>
            <a
              href="https://facebook.com/shuddhangan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-500"
            >
              facebook.com/shuddhangan
            </a>
          </div>
        </div>
      </div>
    </section>  
    <Footer/> 
   </>
  );
};

export default Contact;