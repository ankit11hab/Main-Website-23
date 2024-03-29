import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";
import "./Sponsors.css";
import SponserLogo from "./images/AalooLogo.png";
import title from "./images/title.png"
import cotitle from "./images/cotitle.png"
import other from "./images/other.png"
import wework from "./images/wework.png"
function Sponsors() {
  return (
    <div>
      <div className="navbar">
        <Nav />
      </div>

      <div className="container">
        <div className="rect">
          <div className="bg">
           <img src={wework} alt="" />
          </div>
        </div>
        <div className="layout">
          <div className="box1">
            <div className="frame">
             <img src={title} alt="" />
            </div>

            <div className="box2">
              <div className="ibox"> </div>
              <p className="oil"> Indian oil </p>
            </div>
          </div>

          <div className="cosponsor">
            <div className="frame">
           
              <img src={cotitle} alt="" />
        
            </div>

            <div className="parent">
              <div className="maincard">
                <div className="cocard"></div>
                <p className="newpara"> Indian Oil </p>
              </div>
              <div className="maincard">
                <div className="cocard"></div>
                <p className="newpara"> Indian Oil </p>
              </div>
              <div className="maincard">
                <div className="cocard"></div>
                <p className="newpara"> Indian Oil </p>
              </div>
            </div>
          </div>
          <div className="othersponsor">
            <div className="frame">
             <img src={other} alt="" />
            </div>
            <div className="parent">
              <div className="maincard">
                <div className="cocard"></div>
                <p className="newpara">MCJ </p>
                <p className="updatedpara"> Title </p>
              </div>
              <div className="maincard">
                <div className="cocard"></div>
                <p className="newpara">MCJ </p>
                <p className="updatedpara"> Title </p>
              </div>
              <div className="maincard">
                <div className="cocard"></div>
                <p className="newpara">MCJ </p>
                <p className="updatedpara"> Title </p>
              </div>
              <div className="maincard">
                <div className="cocard"></div>
                <p className="newpara">MCJ </p>
                <p className="updatedpara"> Title </p>
              </div>
              <div className="maincard">
                <div className="cocard"></div>
                <p className="newpara">MCJ </p>
                <p className="updatedpara"> Title </p>
              </div>
              <div className="maincard">
                <div className="cocard"></div>
                <p className="newpara">MCJ </p>
                <p className="updatedpara"> Title </p>
              </div>
              <div className="maincard">
                <div className="cocard"></div>
                <p className="newpara">MCJ </p>
                <p className="updatedpara"> Title </p>
              </div>
              <div className="maincard">
                <div className="cocard"></div>
                <p className="newpara">MCJ </p>
                <p className="updatedpara"> Title </p>
              </div>
              <div className="maincard">
                <div className="cocard"></div>
                <p className="newpara">MCJ </p>
                <p className="updatedpara"> Title </p>
              </div>
              <div className="maincard">
                <div className="cocard"></div>
                <p className="newpara">MCJ </p>
                <p className="updatedpara"> Title </p>
              </div>
              <div className="maincard">
                <div className="cocard"></div>
                <p className="newpara">MCJ </p>
                <p className="updatedpara"> Title </p>
              </div>
              <div className="maincard">
                <div className="cocard"></div>
                <p className="newpara">MCJ </p>
                <p className="updatedpara"> Title </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sponsors;
