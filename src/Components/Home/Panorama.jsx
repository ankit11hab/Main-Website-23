import React, { Component, useState, useRef } from "react";
import "./Panorama.css";
import { Pannellum } from "pannellum-react";
import myImage from "./images/image.jpg";
import video1 from "../../assets/text_animation.webm";
import playLogo from "./images/Polygon 57.png";
import lotus from "./images/lotus 1.png";
let count = 0;
const VRScene = () => {
  const logoref = useRef(null);
  var sizeWidth = (100 * window.innerWidth) / 100,
    sizeHeight = (100 * window.innerHeight) / 100;

  return (
    <div>
      <div className="pano___ bl" id="pano___">
        <div class="overlay"></div>
        <div className="description">
          <video
            className="pano__video"
            autoPlay
            loop
            muted
            src={video1}
          ></video>
        </div>
        <div className="lotus__img">
          <div className="texts__ lotus__text1">
            Alcheringa is the annual cultural festival of the Indian Institute
            of Technology, Guwahati.
          </div>
          <div className="texts__ lotus__text2">
            A splendid idea realized by a group of students in 1996 at IITG
            marked the dawn of one of Asia’s most exhilarating and significant
            cultural college fests as we know it today.
          </div>
          <img className="img__after_hero" src={lotus} alt="" />
        </div>
        <div className="panorama__main">
          <Pannellum
            width="100%"
            height="100vh"
            image={myImage}
            pitch={10}
            yaw={180}
            hfov={110}
            autoLoad
            autoRotate={8}
            showZoomCtrl={false}
            showFullscreenCtrl={false}
            mouseZoom={false}
          />
        </div>
      </div>
      <div className='divider__'></div>
      <div className="video_box">
        <iframe
          id="themevideo"
          src="https://www.youtube.com/embed/quUzUB0D6tk"
          title="Alcheringa 2023 Official Theme | Pledge to Persist"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VRScene;
