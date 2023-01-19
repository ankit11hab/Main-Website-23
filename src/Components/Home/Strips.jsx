import React from "react";
import "./Strips.css";
import star from "./images/Mask group.png";
import { keyframes } from "styled-components";
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
    height: "5.8vw",
    top: "9vw",
    transform: "rotate(3.64deg)",
    width: "105%",
    zIndex: "5",
    left: "-10px",
    backgroundColor: "white",
    textShadow:
      "-0.2vw -0.2vw 0 #000, 0.2vw -0.2vw 0 #000, -0.2vw 0.2vw 0 #000, 0.2vw 0.2vw 0 #000",
    borderTop: "3px solid",
    marginTop: "0px",
    paddingTop: "5px",
    paddingBottom: "5px",
    borderBottom: "3px solid",
  };
  const styles0 = {
    backgroundColor: "#FF6290",
    height: "5.8vw",
  };
  const styles1 = {
    position: "absolute",
    width: "100vw",
    height: "5vw",
    left: "-2.22px",
    width: "105%",
    left: "-10px",
    top: "17vw",
    zIndex: "3",
    transform: "rotate(-5.13deg)",
    textShadow:
      "-0.2vw -0.2vw 0 #000,0.2vw -0.2vw 0 #000,-0.2vw 0.2vw 0 #000,0.2vw 0.2vw 0 #000",
    borderTop: "3px solid",
    marginTop: "0px",
    paddingTop: "5px",
    paddingBottom: "5px",
    borderBottom: "3px solid",
  };
  const styles11 = {
    height: "5vw",
    background: "#099FBC",
  };
  return (
    <div>
      <div className="stripContainer">
        <div style={styles}>
          <Marquee speed={200} style={styles0}>
            <div>
              <img className="star star1" src={star}></img>
            </div>
            <div className="edition_text">26 EDITIONS</div>
            <div>
              <img className="star star2" src={star}></img>
            </div>
            <div className="football_text">140K FOOTFALL</div>
            <div>
              <img className="star star3" src={star}></img>
            </div>
            <div className="edition_text2">HAIL ALCHER</div>
          </Marquee>
        </div>
        <div>
          {/* <div className='strip2'> */}
          <div style={styles1}>
            <Marquee speed={200} style={styles11} direction="right">
              <div>
                <img className="star star11" src={star}></img>
              </div>
              <div className="edition_text1">HAIL ALCHER</div>
              <div>
                <img className="star star21" src={star}></img>
              </div>
              <div className="football_text1">100+ EVENTS </div>
              <div>
                <img className="star star31" src={star}></img>
              </div>
              <div className="edition_text21">500+ COLLEGES </div>
              {/* <div><img className='star star3' src={star}></img></div> */}
            </Marquee>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Strips;
