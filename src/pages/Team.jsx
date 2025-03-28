import React, { useState } from "react";
import Gallery from "../components/Gallery";
import m1 from "../assets/m1.jpg";
import m2 from "../assets/m2.jpg";
import m3 from "../assets/m3.jpg";
import m4 from "../assets/m4.jpg";
import m5 from "../assets/m5.jpg";
import m6 from "../assets/m6.jpg";

const teamMembers = [
    { name: "Tanmoy Modal", role: "Founder & President", image: m5 },
    { name: "Israt Jahan Jerin", role: "Junior Teacher", image: m1 },
    { name: "Sumaiya Islam", role: "Assistant Teacher", image: m2 },
    { name: "MD. Tamim Siam Ovi", role: "Junior Teacher", image: m3 },
    { name: "Joy Biswas", role: "Assistant Teacher", image: m4 },
    { name: "Sumon Ray", role: "Assistant Teacher", image: m6 },
    { name: "Simon", role: "Advisory", image: m5},
    { name: "Simanto Dash", role: "Volunteer", image: m2},
];

const roles = ["All", ...new Set(teamMembers.map(member => member.role))];

function Team() {
    const [selectedRole, setSelectedRole] = useState("All");
    
    const filteredMembers = selectedRole === "All" 
        ? teamMembers 
        : teamMembers.filter(member => member.role === selectedRole);
    
    return (
        <>
            <div className="max-w-7xl mx-auto py-16">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-orange-400 font-domine">Meet our Team Members</h2>
                    <p className="text-gray-600 mt-4 px-1 ">Dedicated professionals working together to bring success.</p>
                </div>
                
                {/* Filter Buttons */}
                <div className="text-center mt-6 flex flex-wrap justify-center gap-4">
                    {roles.map((role, index) => (
                        <button 
                            key={index} 
                            className={`px-4 py-2 rounded-md shadow-md transition-all ${selectedRole === role ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                            onClick={() => setSelectedRole(role)}
                        >
                            {role}
                        </button>
                    ))}
                </div>
                
                {/* Team Grid */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-8xl mx-auto px-6">
                    {filteredMembers.map((member, index) => (
                       <div
                       key={index}
                       className="rounded-lg p-4 sm:p-6 text-center "
                     >
                      <div className="aspect-square w-full max-w-xs mx-auto">
  <img 
    src={member.image} 
    alt={member.name} 
    className="w-full h-full rounded-full object-cover ring-2 ring-orange-400 transition-transform duration-300 hover:scale-110" 
  />
</div>
                       <h3 className="text-lg sm:text-xl font-domine font-semibold mt-4 text-orange-400">
                         {member.name}
                       </h3>
                       <p className="text-sm sm:text-base text-gray-600">{member.role}</p>
                       <ul className="flex justify-center space-x-4 mt-3">
                         <li className="hover:text-blue-500">
                           <i className="fa-brands fa-facebook text-lg sm:text-2xl"></i>
                         </li>
                         <li className="hover:text-blue-500">
                           <i className="fa-brands fa-square-instagram text-lg sm:text-2xl"></i>
                         </li>
                         <li className="hover:text-blue-500">
                           <i className="fa-brands fa-twitter text-lg sm:text-2xl"></i>
                         </li>
                       </ul>
                     </div>
                     
                    ))}
                </div>
            </div>
            <Gallery/>
        </>
    );
}

export default Team;