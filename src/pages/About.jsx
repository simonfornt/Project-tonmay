import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stat from "../components/Stat";
import FAQSection from "../components/Faq";


const sections = [
  { 
    title: " Holistic empowerment",
    icon: "fa-solid fa-eye",
    description: "We believe in a comprehensive and sustainable approach to empowerment, addressing the multifaceted challenges of disadvantaged communities.  Our initiatives encompass education, healthcare, livelihoods and community development to create lasting and positive change."

  },
  {
    title: "compassion",
    icon: "fa-solid fa-hands-holding-circle",
    description: "Our actions are guided by deep compassion for those in need.  We empathize with the struggles of the underprivileged and are committed to making a meaningful difference in their lives."
  },
  {
    title: "cooperation",
    icon: "fa-solid fa-heart-pulse",
    description: "We recognize the power of collaboration to create substantial impact.  By working together with communities, partners and stakeholders, we aim to amplify our efforts and achieve greater results."
  },
  {
    title: "Cooperation",
    icon: "fa-solid fa-handshake",
    description: "We recognize the power of collaboration..."
  },
  {
    title: "Sustainability",
    icon: "fa-solid fa-leaf",
    description: "Sustainability is at the core of our approach..."
  },
  {
    title: "Equal Opportunity",
    icon: "fa-solid fa-scale-balanced",
    description: "We advocate for a future where everyone has the opportunity..."
  },
  {
    title: "Youth Empowerment",
    icon: "fa-solid fa-children",
    description: "We provide a platform for the youth..."
  },
];

const InfoCard = ({ title, icon, description }) => {
  return (
    <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                   border border-gray-100 hover:border-teal-100 h-full flex flex-col items-center
                   hover:-translate-y-2 cursor-default">
      {/* Icon Container */}
      <div className="mb-6 w-20 h-20 rounded-2xl bg-teal-50 flex items-center justify-center
                     group-hover:bg-teal-500 transition-colors duration-300">
        <i className={`${icon} text-3xl text-teal-500 group-hover:text-white`}></i>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">{title}</h2>
      <p className="text-gray-600 text-center leading-relaxed flex-1">{description}</p>
    </div>
  );
};

const VisionPrinciplesGrid = () => {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Vision & Core Principles
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding values that shape our mission for a better tomorrow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <InfoCard 
                key={index}
                title={section.title}
                icon={section.icon}
                description={section.description}
              />
            ))}
          </div>
        </div>
      </main>

      <Stat />
      <FAQSection/>
    
      <Footer />
    </>
  );
};

export default VisionPrinciplesGrid;