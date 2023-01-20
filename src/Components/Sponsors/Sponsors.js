import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";
import "./Sponsors.css";
import SponserLogo from "./images/AalooLogo.png";
import title from "./images/title.png"
import cotitle from "./images/cotitle.png"
import other from "./images/other.png"
import wework from "./images/wework.png"
import ydlogo from "./images/YD logo.jpg";
import upgrad from "./images/UPGRAD ASSAM LOGO.jpg";
import unstop from "./images/unstop.png";
import twani from "./images/twani logo.png";
import safeexp from "./images/Safexpress Logo.jpg";
import jamboree from "./images/jamboree.png";
import bigrock from "./images/Bigrock.png";
import bias from "./images/BIAS Logo.png";
import berado from "./images/berado_logo.jpg";
import asus from "./images/ASUS.png";
import killer from "./images/killer.png"
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
              <img className="ibox" src={bias} />
              <p className="newpara"> Borthakur's IAS Academy</p>
            </div>
          </div>

          {/* <div className="cosponsor">
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
          </div> */}
          <div className="othersponsor">
            <div className="frame">
             <img src={other} alt="" />
            </div>
            <div className="parent">
              <div className="maincard">
                <img className="cocard" src={ydlogo} />
                <p className="newpara">YELLOW  </p>
                <p className="updatedpara"> DIAMOND </p>
              </div>
              <div className="maincard">
                <img className="cocard" src={asus} />
                <p className="newpara">ASUS</p>
                {/* <p className="updatedpara"> Title </p> */}
              </div>
              <div className="maincard">
                <img className="cocard" src={upgrad} />
                <p className="newpara">UPGRAD</p>
                {/* <p className="updatedpara"> Title </p> */}
              </div>
              <div className="maincard">
                <img className="cocard" src={unstop} />
                <p className="newpara">UNSTOP</p>
                {/* <p className="updatedpara"> Title </p> */}
              </div>
              <div className="maincard">
                <img className="cocard" src={twani} />
                <p className="newpara">TWANI</p>
                {/* <p className="updatedpara"> Title </p> */}
              </div>
              <div className="maincard">
                <img className="cocard" src={safeexp} />
                <p className="newpara">SAFEXPRESS</p>
                {/* <p className="updatedpara"> Title </p> */}
              </div>
              <div className="maincard">
                <img className="cocard" src={jamboree} />
                <p className="newpara">JAMBOREE</p>
                {/* <p className="updatedpara"> Title </p> */}
              </div>
              <div className="maincard">
                <img className="cocard" src={bigrock} />
                <p className="newpara">BIGROCK</p>
                {/* <p className="updatedpara"> Title </p> */}
              </div>
              <div className="maincard">
                <img className="cocard" src={killer} />
                <p className="newpara">KILLER</p>
                {/* <p className="updatedpara"> Title </p> */}
              </div>
              <div className="maincard">
                <img className="cocard" src={berado} />
                <p className="newpara">BEARDO</p>
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
