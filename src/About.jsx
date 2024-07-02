import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./Context/productContext";


const About = () => {
    // const myName = useProductContext();

    const data ={
        name : "ShopNest Ecommerce",
    };

    return(
        <>
        
        <HeroSection myData={data} />
        </>)
};

export default About;