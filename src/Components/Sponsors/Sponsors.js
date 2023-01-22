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
import Sbi from "./images/SBI.png"
import Connectedby from "./images/connected.png"
import Poweredby from "./images/poweredby.png"
import Inassociation from "./images/inassociationwith.png"
import Styledby from "./images/styled.png"
import Trustedby from "./images/Trusted.png"
import Manikchand from "./images/manikchand.png"
import Sparx from "./images/sparx.png"
import Gplus from "./images/GplusLogo.png"
import Dubeat from "./images/Dubeat.jpg"
import Mirchi from "./images/Mirchi.png"
import AssamTribune from "./images/AssamTribune.jpg"
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

          <div className="box1">
            <div className="frame">
             <img src={Poweredby} alt="" />
            </div>

            <div className="box2">
              <img className="ibox" src={Sbi} />
              <p className="newpara"> State Bank of India</p>
            </div>
          </div>
          <div className="box1">
            <div className="frame">
             <img src={Trustedby} alt="" />
            </div>

            <div className="box2">
              <img className="ibox" src={Manikchand} />
              <p className="newpara"> MANICKCHAND JWELLERS</p>
            </div>
          </div>
          <div className="box1">
            <div className="frame">
             <img src={Styledby} alt="" />
            </div>

            <div className="box2">
              <img className="ibox" src={killer} />
              <p className="newpara"> Killer</p>
            </div>
          </div>
          <div className="box1">
            <div className="frame">
             <img src={Connectedby} alt="" />
            </div>

            <div className="box2">
              <img className="ibox" src={Gplus} />
              <p className="newpara"> Gplus</p>
            </div>
          </div>
          <div className="box1">
            <div className="frame">
             <img src={Inassociation} alt="" />
            </div>

            <div className="box2">
              <img className="ibox" src={Sparx} />
              <p className="newpara"> Sparx</p>
            </div>
          </div>
          <div className="othersponsor">
        
            <div className="parent">
              <div className="maincard">
                <img className="cocard" src={ydlogo} />
                <p className="newpara">YELLOW  DIAMOND  </p>
                <p className="updatedpara">Snacks Partner</p>
              </div>
              
              <div className="maincard">
                <img className="cocard" src={asus} />
                <p className="newpara">ASUS</p>
                <p className="updatedpara"> Innovation Partner </p>
              </div>
              <div className="maincard">
                <img className="cocard" src={upgrad} />
                <p className="newpara">UPGRAD</p>
                <p className="updatedpara"> Upskilling Partner </p>
              </div>
              <div className="maincard">
                <img className="cocard" src={unstop} />
                <p className="newpara">UNSTOP</p>
                <p className="updatedpara">Online Hosting Partner</p>
              </div>
              <div className="maincard">
                <img className="cocard" src={twani} />
                <p className="newpara">TWANI</p>
                <p className="updatedpara">Beauty Partner</p>
              </div>
              <div className="maincard">
                <img className="cocard" src={safeexp} />
                <p className="newpara">SAFEXPRESS</p>
                <p className="updatedpara">Supply Chain Partner </p>
              </div>
              <div className="maincard">
                <img className="cocard" src={jamboree} />
                <p className="newpara">JAMBOREE</p>
                <p className="updatedpara"> Career Partner </p>
              </div>
              <div className="maincard">
                <img className="cocard" src={bigrock} />
                <p className="newpara">BIGROCK</p>
                <p className="updatedpara">Web Hosting Partner</p>
              </div>
             
              <div className="maincard">
                <img className="cocard" src={berado} />
                <p className="newpara">BEARDO</p>
                <p className="updatedpara">Grooming Partner</p>


              </div>
              <div className="maincard">
                <img className="cocard" src={Mirchi} />
                <p className="newpara">MIRCHI PLUS</p>
                <p className="updatedpara">Tuned By</p>


              </div>
              <div className="maincard">
                <img className="cocard" src={Dubeat} />
                <p className="newpara">DU BEAT</p>
                <p className="updatedpara">Digital Media Partner</p>


              </div>
              <div className="maincard">
                <img className="cocard" src={AssamTribune} />
                <p className="newpara">THE ASSAM TRIBUNE</p>
                <p className="updatedpara">In AssociationWith</p>


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
