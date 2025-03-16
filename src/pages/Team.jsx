import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import m1 from "../assets/m1.jpg";
import m2 from "../assets/m2.jpg";
import m3 from "../assets/m3.jpg";
import m4 from "../assets/m4.jpg";
import m5 from "../assets/m5.jpg";
import m6 from "../assets/m6.jpg";



const teamMembers = [
    {
      name: "Tanmoy Modal",
      role: "CEO & Founder",
      image: m5, 
    },
    {
      name: "Israt Jahan Jerin",
      role: "Jumior Teacher",
      image: m1,
    },
    {
      name: "Sumaiya Islam",
      role: "Assistant Teacher",
      image: m2,
    },
    {
      name: "MD. Tamim Siam Ovi",
      role: "Junior Teacher",
      image: m3,
    },
    {
        name : "Joy Biswas",
        role: "Assistant Teacher",
        image: m4,
    },
    {
        name: "Sumon Ray",
        role: "Assistant Teacher",
        image: m6,
    }
];

function Team() {
    return (
        <>
            <Navbar />
            <div className="py-16 bg-gray-100"> {/* ✅ Fixed: `bg-gray-100` */}
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800">Meet our Team Members</h2>
                    <p className="text-gray-600 mt-4 px-1">Dedicated professionals working together to bring success.</p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-8xl mx-auto px-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-[400px] h-[300px] rounded-full  mx-auto  object-center ring-2 ring-cyan-500" 
                            />
                            <h3 className="text-xl font-semibold mt-4 text-gray-800">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                            <ul className="flex justify-evenly mt-3">
                                <li className="hover:text-blue-500"><i class="fa-brands fa-facebook text-2xl"></i></li>
                                <li className="hover:text-blue-500"><i class="fa-brands fa-square-instagram text-2xl"></i></li>
                                <li className="hover:text-blue-500"><i class="fa-brands fa-twitter text-2xl"></i></li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <Gallery/>
            <Footer />
        </>
    );
}

export default Team;