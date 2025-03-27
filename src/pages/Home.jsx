import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Banner from "../components/Banner";
import Support from "../components/Support";





const Home = () => {



  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
       <Hero />
        {/* <Mission /> */}
       <Cards/>
       <Support/>

       
        
   {/* <Banner/> */}
   
  

      <Footer />
    </div>
  );
};

export default Home;