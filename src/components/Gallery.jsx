import React, { useState } from "react";
import picnic from "../assets/picnic.jpg";
import Kombol from "../assets/kombol.jpg";
import mmc from "../assets/mmc.jpg";
import childern from "../assets/childern.jpg";
import school1 from "../assets/school1.jpg";
import school2 from "../assets/school2.jpg";
import school3 from "../assets/school3.jpg";

const images = [
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_jKieTUe6cBRwHLV5D-KcAKWdt3m0r55ZLQ&s", caption: "Community Outreach Program 2023" },
  { src: picnic, caption: "Annual Charity Picnic" },
  { src: Kombol, caption: "Educational Workshop Session" },
  { src: mmc, caption: "Medical Camp Initiative" },
  { src: childern, caption: "Children's Day Celebration" },
  { src: school1, caption: "School Renovation Project" },
  { src: school3, caption: "New Classroom Inauguration" },
  { src: school2, caption: "Learning Materials Distribution" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Gallery</h2>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          {images.map((image, index) => (
            <div key={index} className="aspect-square">
              <img
                src={image.src} alt={`Gallery image: ${image.caption}`} className="w-full h-full object-cover rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
            <div className="relative max-w-2xl w-full">
              <button
                onClick={() => setSelectedImage(null)}className="absolute -top-8 right-0 text-white text-2xl"> ✖ </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-white text-center mt-2">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;