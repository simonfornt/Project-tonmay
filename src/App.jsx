import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Donation from "./pages/Donation";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

//focus page
import Education from "./pages/details/Education";
import Community from "./pages/details/Community";
import Environment from "./pages/details/Environment";
import Healthcare from "./pages/details/Healthcare";
import Innovation from "./pages/details/Innovation";
import Livelihood from "./pages/details/Livelihood";
import Cards from "./components/Cards";


// Import Project Pages
import ProjectsLayout from "./pages/projects/ProjectsLayout";
import Project from "./pages/Project";
import School from "./pages/projects/School";
// import Environment from "./pages/projects/Environment";
// import Community from "./pages/projects/Community";
import Health from "./pages/projects/Health"; // ✅ Fixed typo

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donation" element={<Donation />} />


        {/* focus area */}
        <Route path="/" element={<Cards/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/livelihood" element={<Livelihood/>}/>
        <Route path="/innovation" element={<Innovation/>}/>
        <Route path="/healthcare" element={<Healthcare/>}/>
        <Route path="/environment" element={<Environment/>}/>
        <Route path="/community" element={<Community/>}/>
        

        {/* Nested Projects Routes */}
        <Route path="/projects" element={<ProjectsLayout />}>
          <Route index element={<Project />} />
          <Route path="school" element={<School />} />
          <Route path="health" element={<Health />} /> {/* ✅ Corrected */}
          {/* <Route path="environment" element={<Environment />} />
          <Route path="community" element={<Community />} /> */}
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
