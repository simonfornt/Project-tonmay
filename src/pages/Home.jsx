import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import baccha from "../assets/baccha.jpg";
import Mission from "../components/Misson";
import Banner from "../components/Banner";





const Home = () => {



  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
       <Hero />
        <Mission />
        <div className="flex flex-wrap">
          
        <Cards imageUrl={baccha} des="Help us Throuhp A hand"/>
        <Cards imageUrl={baccha} des="Help us Throuhp A hand"/>
         <Cards imageUrl={baccha} des="Help us Throuhp A hand"/>
        <Cards imageUrl={baccha} des="Help us Throuhp A hand"/>
        </div>

       
        
   <Banner/>
   
  

      <Footer />
    </div>
  );
};

export default Home;