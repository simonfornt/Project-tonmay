import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import tonmay from "../assets/tonmoy.jpg";

// Move `tonmoy.jpg` to `public/assets/tonmoy.jpg` and use a direct path
const teamMembers = [
    {
      name: "Tanmoy Modal",
      role: "CEO & Founder",
      image: {tonmay}, // ✅ Fixed: Direct Path
    },
    {
      name: "Jane Smith",
      role: "Lead Developer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGeBLDLvb7im7q9gygKhAs8fIqYTShKzrNVg&s",
    },
    {
      name: "Michael Johnson",
      role: "UI/UX Designer",
      image: "https://www.stylecraze.com/wp-content/uploads/2013/06/Beautiful-Chinese-Girl-1_1200px.jpg.webp",
    },
    {
      name: "Emily Davis",
      role: "Marketing Manager",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s",
    },
];

function Team() {
    return (
        <>
            <Navbar />
            <div className="py-16 bg-gray-100"> {/* ✅ Fixed: `bg-gray-100` */}
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800">Meet our Team Members</h2>
                    <p className="text-gray-600 mt-4">Dedicated professionals working together to bring success.</p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-24 h-24 mx-auto rounded-full object-cover ring-2 ring-cyan-500" 
                            />
                            <h3 className="text-xl font-semibold mt-4 text-gray-800">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Team;
