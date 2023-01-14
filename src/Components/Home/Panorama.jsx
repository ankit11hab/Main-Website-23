import React, { Component, useState, useRef } from "react";
import "./Panorama.css";
import { Video } from "react-video-renderer/dist/es5/video";
import { Pannellum } from "pannellum-react";
import myImage from "./images/image.jpg";
import video1 from './bookCoverVideos/cover-pronites animation.webm';
import playLogo from './images/Polygon 57.png'
import $ from 'jquery';
let count=0;
const VRScene = () => {
    const logoref = useRef(null);
    var sizeWidth = 100 * window.innerWidth / 100,
  sizeHeight = 100 * window.innerHeight / 100 ;

  

  function playVideo(){
        // //as noted in addendum, check for querystring exitence
        // var symbol = document.getElementById("themevideo")[0].src.indexOf("?") > -1 ? "&" : "?";
        // //modify source to autoplay and start video
        // document.getElementById("themevideo")[0].src += symbol + "autoplay=1";
        // console.log(logoref.current)
        // logoref.current.style.display='none';
        const Player = document.getElementById('themevideo');
const PlayBtn = document.getElementById('playLogo');
// const stopBtn = document.getElementById('stop');
let  playY;

if(count %2== 0){
    playY = Player.src += '?autoplay=1';
    count++;
    setTimeout(()=>{
        document.getElementById('playLogo').style.display='none';
    }, 500);

  }
 else if(count %2== 1){
    setTimeout(()=>{
        document.getElementById('playLogo').style.display='block';
    }, 500);
    Player.src = Player.src.split('?')[0];

 } 

// stopBtn.addEventListener( 'click' , () => {
//     playY = playY.slice(0, -11);
//     Player.src = playY
//     times = 0;
// });

// document.ready(function(){
//     $("#themevideo").on("load",function(){
//         $(this).contents().on("mousedown, mouseup,click",function(){
            

//         })
//     })
// })
  }

 

  return (
    <div>
      <div className="geet">
        <div className="description">
            {/* <div style={{position:'relative',height:'100vw'}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa obcaecati nesciunt vitae, perferendis aut eos saepe laudantium. In laborum ipsa cupiditate voluptate quasi quisquam, culpa similique corrupti! Vitae neque officia laudantium necessitatibus quos nostrum consequatur, repudiandae perferendis a debitis, ullam, quo ducimus eveniet incidunt vero. Totam minima nemo asperiores numquam!
            </div> */}
        {/* Alcheringa is the annual cultural festival of the Indian Institute of Technology, Guwahati. A splendid idea realised by a group of students in 1996 at IITG marked the dawn of one of Asia’s most ehilarating and significant cultural college fests as we know it today.  */}
        <video  autoPlay loop  muted src={video1}></video>
        </div>
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
      <div className="blank_div4"></div>
      <div className="video_box"   >
        <div className="play_logo" id="playLogo" ref={logoref}  ><img src={playLogo} alt="" /></div>
        <div className="div_on_iframe" onClick={playVideo}></div>
      <iframe   id="themevideo" src="https://www.youtube.com/embed/quUzUB0D6tk" title="Alcheringa 2023 Official Theme | Pledge to Persist" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        
      </iframe>
      </div>
      <div className="blank_div3"></div>
      
    </div>
  );
};

export default VRScene;
