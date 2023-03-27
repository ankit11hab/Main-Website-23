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
import AssamTribune from "./images/AssamTribune.png"
import CILOGO from "./images/CI Logo.PNG"
import apdcl from "./images/APDCL.JPG"
import asacs from "./images/ASACS.jpg"
import fineedge from "./images/finedge.png"
import fujifilm from "./images/Fujifilm.png"
import medifio from "./images/medifio.jpg"
import nhai from "./images/NHAI.png"
import nhm from "./images/NHM.png"
import ntpc from "./images/ntpc.png"
import ocean from "./images/ocean.png"
import suzuki from "./images/suzuki.jpg"
import techo from "./images/Techobyte.jpg"
import cry from "./images/logo.gif"
import nerim from "./images/NERIM.jpg"

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
            <div className="box3">
              <img className="cocard" src={AssamTribune} />
              <p className="newpara">THE ASSAM TRIBUNE</p>
            </div>
            {/* <div className="box3">
              <img className="cocard" src={AssamTribune} />
              <p className="newpara">Prag News</p>
            </div> */}
          </div>
          <div className="othersponsor">
            <div className="parent">
              <div className="maincard">
                <img className="cocard" src={nhai} />
                <p className="newpara">NHAI  </p>
                <p className="updatedpara">Platinum Sponsor</p>
              </div>
              <div className="maincard">
                <img className="cocard" src={ntpc} />
                <p className="newpara">NTPC</p>
                <p className="updatedpara">Golden Sponsor</p>
              </div>
              <div className="maincard">
                <img className="cocard" src={ydlogo} />
                <p className="newpara">YELLOW  DIAMOND  </p>
                <p className="updatedpara">Snacks Partner</p>
              </div>
              <div className="maincard">
                <img className="cocard" src={upgrad} />
                <p className="newpara">UPGRAD</p>
                <p className="updatedpara"> Upskilling Partner </p>
              </div>
              <div className="maincard">
                <img className="cocard" src={asus} />
                <p className="newpara">ASUS</p>
                <p className="updatedpara"> Innovation Partner </p>
              </div>
              <div className="maincard">
                <img className="cocard" src={fineedge} />
                <p className="newpara">FINEDGE SERVICE</p>
                <p className="updatedpara"> Finance Partner </p>
              </div>

              <div className="maincard">
                <img className="cocard" src={techo} />
                <p className="newpara">Techobytes</p>
                <p className="updatedpara"> Workshop Partner </p>
              </div>

              <div className="maincard">
                <img className="cocard" src={nhm} />
                <p className="newpara">NHM</p>
                <p className="updatedpara"> Health Partner </p>
              </div>

              <div className="maincard">
                <img className="cocard" src={fujifilm} />
                <p className="newpara">FUJIFILM</p>
                <p className="updatedpara"> Photography Partner </p>
              </div>

              <div className="maincard">
                <img className="cocard" src={asacs} />
                <p className="newpara">ASACS</p>
                <p className="updatedpara"> Awareness Partner </p>
              </div>

              <div className="maincard">
                <img className="cocard" src={apdcl} />
                <p className="newpara">APDCL</p>
                <p className="updatedpara"> Energy Partner </p>
              </div>

              <div className="maincard">
                <img className="cocard" src={medifio} />
                <p className="newpara">MEDICO</p>
                <p className="updatedpara"> Healthcare Service Partner </p>
              </div>

              <div className="maincard">
                <img className="cocard" src={ocean} />
                <p className="newpara">OCEAN BEVERAGES</p>
                <p className="updatedpara"> Refreshing Partner </p>
              </div>

              <div className="maincard">
                <img className="cocard" src={suzuki} />
                <p className="newpara">SUZUKI</p>
                <p className="updatedpara"> Bike Partner </p>
              </div>

              <div className="maincard">
                <img className="cocard" src={bigrock} />
                <p className="newpara">BIGROCK</p>
                <p className="updatedpara">Web Hosting Partner</p>
              </div>

              <div className="maincard">
                <img className="cocard" src={jamboree} />
                <p className="newpara">JAMBOREE</p>
                <p className="updatedpara"> Career Partner </p>
              </div>

              <div className="maincard">
                <img className="cocard" src={safeexp} />
                <p className="newpara">SAFEXPRESS</p>
                <p className="updatedpara">Supply Chain Partner </p>
              </div>

              <div className="maincard">
                <img className="cocard" src={unstop} />
                <p className="newpara">UNSTOP</p>
                <p className="updatedpara">Online Hosting Partner</p>
              </div>

              <div className="maincard">
                <img className="cocard" src={berado} />
                <p className="newpara">BEARDO</p>
                <p className="updatedpara">Grooming Partner</p>
              </div>

              <div className="maincard">
                <img className="cocard" src={twani} />
                <p className="newpara">TWANI NATURALS</p>
                <p className="updatedpara">Beauty Partner</p>
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
                <img className="cocard" src={cry} />
                <p className="newpara">CRY</p>
                <p className="updatedpara"> Volunteering Partner</p>

              </div>
              <div className="maincard">
                <img className="cocard" src={nerim} />
                <p className="newpara">NERIM</p>
                <p className="newpara">CSR Partner</p>
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
