import React from 'react'
import Footer from '../Footer/Footer'
import Nav from '../NavBar/Nav'
import { useEffect, useRef } from 'react';
import './Home.css';
import Book from './Book';
import NavMob from '../NavEventsMobile/NavMob';
import MerchPart from '../MerchPart/merchpart';
import VRScene from './Panorama';
import Strips from './Strips';
import Sponsers from './Sponsers';
import AppSection from './AppSection';
import HeroSection from './HeroSection';
import Carousel from './Carousel';
function Home() {
  return (
    <div>
      <div className="navbar" >
      <Nav/>
      </div>
      
        <NavMob />
       {/* <Panorama/> */}
       <HeroSection />
       <VRScene/>
       {/* <Book /> */}
       <Carousel />
       <MerchPart />
       <Strips /> 
       <Sponsers />
       <AppSection />
      <Footer/>
    </div>
  )
}

export default Home