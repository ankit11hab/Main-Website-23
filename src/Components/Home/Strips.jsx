import React from 'react';
import './Strips.css';
import star from './images/Mask group.png';
import { keyframes } from 'styled-components';
import Marquee from "react-fast-marquee";
function Strips() {
 
  // const scrollX=keyframes`
  // from{
  //   left:translateX(0);
  // }
  // to{
  //   transform: translateX(-100%);
  // }

  // `;
  const styles = {
    position: "absolute",
    height:"5.8vw",
    top: "15vw",
    backgroundColor:"#FF6290",
    transform: "rotate(3.64deg)",
    zIndex: "5",
    textShadow: "-0.2vw -0.2vw 0 #000, 0.2vw -0.2vw 0 #000, -0.2vw 0.2vw 0 #000, 0.2vw 0.2vw 0 #000",
    // background:"transparent"
    }
  const styles1={position: "absolute",
    width: "100vw",
    height: "5vw",
    left: "-2.22px",
    top: "24vw",
    background: "#099FBC",
    zIndex: "3",
    transform: "rotate(-5.13deg)",
    textShadow: "-0.2vw -0.2vw 0 #000,0.2vw -0.2vw 0 #000,-0.2vw 0.2vw 0 #000,0.2vw 0.2vw 0 #000"}
  return (
    <div>
    <div className='stripContainer'>
        
             
            <Marquee speed={200} style={styles} >
            <div ><img className='star star1'  src={star}></img></div>
            <div  className='edition_text'>26 EDITIONS</div>
            <div><img className='star star2' src={star}></img></div>
            <div className='football_text' >140K FOOTBALL</div> 
                
            <div><img className='star star3' src={star}></img></div>
            </Marquee>
        <div  >
        
        {/* <div className='strip2'> */}
            <Marquee speed={200} style={styles1}   direction='right'>
              
                <div className='football_text1'>500+ COLLEGES</div>
                <div><img className='star star1' src={star}></img></div>
                <div className='edition_text'>100+ EVENTS</div>
                <div><img className='star star2' src={star}></img></div>
                <div className='football_text'>500+ COLLEGES</div>
                <div><img className='star star3' src={star}></img></div>
                
            </Marquee>
            </div>
            {/* </div> */}
    </div>
    </div>
  )
}

export default Strips;