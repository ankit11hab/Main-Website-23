import React from "react";
import "./AppSection.css";
import bg1 from "./images/IMG_1306_1.png";
import bg2 from "./images/IMG_1306_2.png";
import bg3 from "./images/IMG_1306_3.png";
import mobileApp from "./images/appIcon.png";
import mobileAppstyle1 from "./images/appstyle1.png";
import appstore from "./images/Badge.png";
import download from "./images/DOWNLOAD.png";
import our from "./images/OUR.png";
import app from "./images/APP.png";
import alcherlady from "./images/alcher lady.png";
import wing from "./images/wings.png";

function AppSection() {
  return (
    <div className="app_section_container">
      <img src={mobileApp} alt="" className="mobile_app_icon" />
      <img src={mobileAppstyle1} alt="" className="mobile_app_style" />
      <div className="playstore_icon_badge">
        <a href="https://play.google.com/store/apps/details?id=com.alcheringa.alcheringa2022" target="_blank"><img src={appstore} style={{ height: "3vw" }} alt="" /></a>
        <div style={{ width: "25vw" }}>
          Download our app and get access to app exclusive features like Alcher
          cards, schedule, Campus maps, real-time updates and much more.
        </div>
      </div>
      <div className="bg_images">
        <img className="bg2" src={bg2} alt="" />
        <img className="bg1" src={bg1} alt="" />
        <img className="bg3" src={bg3} alt="" />
      </div>
      <div className="alcherlady_hover">
        <img className="alcherlady" src={alcherlady} alt="" />
        <img className="alcherlady_wings" src={wing} alt="" />
      </div>
      <div className="app_text">
        <img className="download" src={download} alt=""></img>
        <img className="our" src={our} alt=""></img>
        <img className="app" src={app} alt=""></img>
      </div>
    </div>
  );
}

export default AppSection;
