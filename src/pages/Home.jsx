import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import baccha from "../assets/baccha.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
     <div>
      <h2 className="text-center text-3xl py-9 font-semibold text-teal-300">Help us to build a future</h2>
      <div className="md:flex">
      <Cards imageUrl={baccha} des="Help poor childern by giving only 300 Tk"/>
      <Cards imageUrl={baccha} des="Help poor childern by giving only 300 Tk"/>
      <Cards imageUrl={baccha} des="Help poor childern by giving only 300 Tk"/>
      </div>
     </div>
      <Footer/>
    </div>
  );
};

export default Home;
