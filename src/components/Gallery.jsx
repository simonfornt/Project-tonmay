
import React, { useState, useEffect } from "react";
import Kombol from "../assets/kombol.jpg";
import picnic from "../assets/picnic.jpg";
import ballon from "../assets/ballon.jpg";
import mmc from "../assets/mmc.jpg";
import childern from "../assets/childern.jpg";
const images = [
  ballon,
  picnic,
  Kombol,
  mmc,
  childern,
  
];

const Gallery = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-left text-gray-800 mb-6">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative bg-gray-300 aspect-video">
              {loading ? (
                <div className="animate-pulse bg-gray-400 w-full h-full"></div>
              ) : (
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
