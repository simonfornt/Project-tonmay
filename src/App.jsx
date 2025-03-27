import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Donation from "./pages/Donation";
import Project from "./pages/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



function App() {
  return (
    <>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Project/>}/>
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/donation" element={<Donation/>}/>
    
    </Routes>
    <Footer/>
    </>
    
  );
}

export default App;
