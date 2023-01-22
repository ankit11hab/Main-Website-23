import React from "react";
import "./AppSection.css";
import bg1 from "./images/IMG_1306_1.png";
import bg2 from "./images/IMG_1306_2.png";
import bg3 from "./images/IMG_1306_3.png";
import download from "./images/DOWNLOAD.png";
import our from "./images/OUR.png";
import app from "./images/APP.png";
import MobileImg from "./images/Mobilepic.png";
import GooglePlayBtn from "./images/googleplaybtn.png";
import BlackCrown from "./images/BlackCrown.png";
import BlackPattern from "./images/BlackPattern.png";
import alcherlady from "./images/alcher lady.png";

function AppSection() {
  return (
    <div className="app_section_container">
      <div className="bg_images">
        <img className="bg2" src={bg2} alt="" />
        <img className="bg1" src={bg1} alt="" />
        <img className="bg3" src={bg3} alt="" />
        <img className="blackcrown" src={BlackCrown} alt="" />
        <img className="mobileimg" alt="" src={MobileImg} />
      </div>
      <img className="alcherlady" src={alcherlady} alt="" />
      <img className="blackpattern" src={BlackPattern} alt="" />
      <div className="app_text">
        <img className="download" src={download} alt=""></img>
        <img className="our" src={our} alt=""></img>
        <img className="app" src={app} alt=""></img>
        <img className="googleplaybtn" src={GooglePlayBtn} alt=""></img>
        <div className="details-text">
          Download our app and get access to app exclusive features like Alcher
          cards, schedule, Campus maps, real-time updates and much more.
        </div>
      </div>
    </div>
  );
}

export default AppSection;
