import React from "react";
import { Phone, Mail, Facebook, Navigation } from "lucide-react";

function Contact() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-gradient-to-br from-gray-50 to-white">
      <h2 className="text-4xl font-semibold text-gray-800 mb-12 font-domine text-center tracking-tight">
        Get in Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {/* Head Office */}
        <div className="bg-white/80 backdrop-blur-lg  rounded-2xl border border-sky-400 shadow-lg transition hover:shadow-xl">
          <div className="my-3 p-3 flex items-center justify-center">
            {" "}
            <h3 className="text-xl text-center w-[500px] rounded-full border-b font-semibold text-cyan-600 mb-6 font-domine">
              Head Office
            </h3>
          </div>
          <div className="space-y-1 flex  mb-4 items-center gap-3 text-gray-600 text-base px-2">
            <Navigation className="text-sky-600" />
            <div className="">
              <p>Shuddhangon Non-Profit School</p>
              <p>House- 295, Road-Raypara, Sadar, Jashore.</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="space-y-4 px-3 py-3 text-gray-600">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-sky-600" />
              <p>+880 1972730204 </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-sky-600" />
              <p>shuddhangan@gmail.com</p>
            </div>
            <div className="flex items-center gap-3 hover:text-blue-500">
              <Facebook className="w-5 h-5 text-sky-600" />
              <a
                href="https://www.facebook.com/shuddhangan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                facebook.com/shuddhangan
              </a>
            </div>
          </div>
        </div>

        {/* Jashore Office */}

        <div className="bg-white/80 backdrop-blur-lg  rounded-2xl border border-sky-400 shadow-lg transition hover:shadow-xl">
          <div className="my-3 p-3 flex items-center justify-center">
            {" "}
            <h3 className="text-xl text-center w-[500px] rounded-full border-b font-semibold text-cyan-600 mb-6 font-domine">
              Shuddhangan School (Jashore)
            </h3>
          </div>
          <div className="space-y-1 flex  mb-4 items-center gap-3 text-gray-600 text-base px-2">
            <Navigation className="text-sky-600" />
            <div className="">
              <p>Shuddhangon Non-Profit School</p>
              <p>House- 295, Road-Raypara, Sadar, Jashore.</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="space-y-4 px-3 py-3 text-gray-600">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-sky-600" />
              <p>+880 1972730204 </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-sky-600" />
              <p>shuddhangan@gmail.com</p>
            </div>
            <div className="flex items-center gap-3 hover:text-blue-500">
              <Facebook className="w-5 h-5 text-sky-600" />
              <a
                href="https://www.facebook.com/shuddhangan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                facebook.com/shuddhangan
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
