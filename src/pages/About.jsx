import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  {
    title: "VISION",
    description:
      "Envisioning a Bangladesh where every person, regardless of their background, has equal opportunities for growth and development. We aspire to create a society where poverty is eradicated, education is accessible to all, healthcare is a basic right, human rights are protected, and the environment is preserved for future generations.",
  },
  {
    title: "Holistic Empowerment",
    description:
      "We take a comprehensive approach to empowerment by addressing education, healthcare, livelihoods, and community development to create lasting change.",
  },
  {
    title: "Compassion",
    description:
      "Our actions are guided by deep compassion for those in need. We empathize with the struggles of the underprivileged and are committed to making a meaningful difference in their lives.",
  },
  {
    title: "Cooperation",
    description:
      "We recognize the power of collaboration to create substantial impact. By working together with communities, partners, and stakeholders, we aim to amplify our efforts and achieve greater results.",
  },
  {
    title: "Sustainability",
    description:
      "Sustainability is at the core of our approach. We ensure long-term benefits for the communities we serve and the environment.",
  },
  {
    title: "Equal Opportunity",
    description:
      "We advocate for a future where everyone has the opportunity to thrive, regardless of background or circumstances.",
  },
  {
    title: "Youth Empowerment",
    description:
      "We provide a platform for the youth of Bangladesh to drive positive change and shape the nation's future.",
  },
];

const InfoCard = ({ title, description }) => {
  return (
    <div className="relative bg-gradient-to-r from-white to-gray-100 shadow-lg rounded-2xl p-6 border-2 border-gray-300 transition transform hover:scale-105 hover:shadow-2xl">
      {/* Inner Border */}
      <div className="absolute inset-0 border-4 border-teal-500 rounded-2xl opacity-20"></div>

      {/* Title Circle */}
      <div className="flex justify-center items-center w-14 h-14 bg-teal-500 text-white rounded-full text-xl font-bold mx-auto mb-4 relative">
        {title.charAt(0)}
      </div>

      <h2 className="text-xl font-bold text-gray-800 text-center relative">{title}</h2>
      <p className="text-gray-600 text-center mt-2 relative">{description}</p>
    </div>
  );
};

const VisionPrinciplesGrid = () => {
  return (
   <>
   <Navbar/>
   <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Vision & Principles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <InfoCard key={index} {...section} />
        ))}
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default VisionPrinciplesGrid;
