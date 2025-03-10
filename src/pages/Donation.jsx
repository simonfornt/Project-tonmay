import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DonationTracker from "../components/DonationTracker";
import ImpactCalu from "../components/ImpactCalu";

const  Donation = () =>{
    return(
        <>
        <Navbar/>
        <DonationTracker/>
        <ImpactCalu/>
        <Footer/>
        </>
    )
}

export default Donation;