import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Donation from "./pages/Donation";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Import Project Pages
import ProjectsLayout from "./pages/projects/ProjectsLayout";
import Project from "./pages/Project";
import School from "./pages/Projects/School";
import Environment from "./pages/Projects/Environment";
import Community from "./pages/Projects/Community";
import Heakth from './pages/projects/Heakth';

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

        {/* Nested Projects Routes */}
        <Route path="/projects" element={<ProjectsLayout />}>
          <Route index element={<Project />} />
          <Route path="school" element={<School />} />
          <Route path="health" element={<Heakth />} />
          <Route path="environment" element={<Environment />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
