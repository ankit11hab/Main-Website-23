import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";
import { useEffect, useRef,useState } from "react";
import "./Home.css";
import Book from "./Book";
import NavMob from "../NavEventsMobile/NavMob";
import MerchPart from "../MerchPart/merchpart";
import VRScene from "./Panorama";
import Strips from "./Strips";
import Sponsers from "./Sponsers";
import AppSection from "./AppSection";
import HeroSection from "./HeroSection";
import Carousel from "./Carousel";
import Load from "./Load";

function Home() {
  const [load,setLoad] = useState(0);
  // console.log(load)
  return (
    <div>
      <div className="navbar">
        <Load load = {load}/>
        <Nav icon />
        <NavMob />
        {/* <Panorama/> */}
        <HeroSection setLoad = {setLoad}/>
        <VRScene />
        {/* <Book /> */}
        <Carousel />
        <MerchPart />
        <Strips />
        <Sponsers />
        <AppSection />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
