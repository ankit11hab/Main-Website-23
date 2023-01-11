import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HeroSection.scss";

import frame1 from "./images/Timeline 1_0000 - Copy.png";
import frame2 from "./images/Timeline 1_0001 - Copy.png";
import frame3 from "./images/Timeline 1_0002 - Copy.png";
import frame4 from "./images/Timeline 1_0003 - Copy.png";
import frame5 from "./images/Timeline 1_0004 - Copy.png";
import frame6 from "./images/Timeline 1_0005 - Copy.png";
import frame7 from "./images/Timeline 1_0006 - Copy.png";
import frame8 from "./images/Timeline 1_0007 - Copy.png";
import frame9 from "./images/Timeline 1_0008 - Copy.png";
import frame10 from "./images/Timeline 1_0009 - Copy.png";
import frame11 from "./images/Timeline 1_0010 - Copy.png";
import frame12 from "./images/Timeline 1_0011 - Copy.png";
import frame13 from "./images/Timeline 1_0012 - Copy.png";
import frame14 from "./images/Timeline 1_0013 - Copy.png";
import frame15 from "./images/Timeline 1_0014 - Copy.png";
import frame16 from "./images/Timeline 1_0015 - Copy.png";
import frame17 from "./images/Timeline 1_0016 - Copy.png";
import frame18 from "./images/Timeline 1_0017 - Copy.png";
import frame19 from "./images/Timeline 1_0018 - Copy.png";
import frame20 from "./images/Timeline 1_0019 - Copy.png";
import frame21 from "./images/Timeline 1_0020 - Copy.png";
import frame22 from "./images/Timeline 1_0021 - Copy.png";
import frame23 from "./images/Timeline 1_0022 - Copy.png";
import frame24 from "./images/Timeline 1_0023 - Copy.png";
import frame25 from "./images/Timeline 1_0024 - Copy.png";
import frame26 from "./images/Timeline 1_0025 - Copy.png";
import frame27 from "./images/Timeline 1_0026 - Copy.png";
import frame28 from "./images/Timeline 1_0027 - Copy.png";
import frame29 from "./images/Timeline 1_0028 - Copy.png";
// import frame30 from "./images/HD_transparent_picture.png"
import AlcherLogo from "./images/alcher_2023_logo.png"
const frameArr = [
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
  frame6,
  frame7,
  frame8,
  frame9,
  frame10,
  frame11,
  frame12,
  frame13,
  frame14,
  frame15,
  frame16,
  frame17,
  frame18,
  frame19,
  frame20,
  frame21,
  frame22,
  frame23,
  frame24,
  frame25,
  frame26,
  frame27,
  frame28,
  frame29,
  
];

gsap.registerPlugin(ScrollTrigger);
function HeroSection() {
  console.clear();
  useEffect(() => {
    const canvas = document.getElementById("canvas1");
    const context = canvas.getContext("2d");


    // Set display size (vw/vh).
  var sizeWidth = 100 * window.innerWidth / 100,
  sizeHeight = 100 * window.innerHeight / 100 ;
   //Setting the canvas site and width to be responsive 
   canvas.width = sizeWidth;
   canvas.height = sizeHeight;
   canvas.style.width = sizeWidth;
   canvas.style.height = sizeHeight;
   const factor1=sizeWidth/1920;
   const factor2=sizeHeight/1080;
//    var ratio  = Math.min ( factor1, factor2 );

//    context.scale(1/factor1,1/factor2);
    // canvas.width = 1920;
    // canvas.height = 1080;

    const frameCount = 29;
    const currentFrame = (index) => frameArr[index];

    const images = [];
    const book_cover = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }
    // const video = document.createElement('video');
    // video.src=currentFrame(200);
    // video.controls=true;
    // images.push(video)
    // console.log(images);

    const animation = gsap.to(book_cover, {
      frame: frameCount - 1,

      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: ".book-container1",
        start: "top top",
        end: "bottom center",
        scrub: 1,
        // markers: true,
      },
      

      onUpdate: render,
      
      // use animation onUpdate instead of scrollTrigger's onUpdate
      // onComplete:(e)=>{
      //     // document.getElementById('canvas_section').setAttribute('display','none');
      //     // const video = document.createElement('video');
      //     // video.src=bookcovervideo;
      //     // video.controls=true;
      //     // document.getElementById('animation__Container').appendChild(video);
      //     // video.play();
      //     // context.drawImage(video,0,0);
      //     console.log('completed')
      // },
    });

    // const logo=gsap.to(".logo_img",{
    //     scrollTrigger:{
    //         trigger:'.hero_container',
    //         start:'top top',
    //         end:'bottom top',


    //         markers:true,
    //         id:'alcher_logo',
    //         toggleActions: 'play none none reverse',
    //     },
    //     css:{
    //         opacity:0,
    //     }
    // });

    const tl=gsap.timeline({
        scrollTrigger:{
            trigger:'.hero_container',
            start:'top top',
            end:'bottom center',
            toggleActions: 'play none none reverse',
            id:'hero container',
            // markers:true,
            scrub:true,
            // pin:true
        }
    });
    // tl.from('.hero_container',{
    //     css:{
    //         top:20,
    //     },
    // });
    tl.to('.hero_container',{
        css:{
            position:'fixed',
            top:0,
            left:0,
            
        },
    });
    
    tl.to('.hero_container',{
            scrollTrigger:{
            trigger:'.hero_container',
            start:'110% center',
            end:'bottom bottom',
            toggleActions: 'play none none reverse',
            scrub:true,
            id:'lastFrame',
            markers:true,},
        css:{
            position:'static',
        }
    });
//     tl.to('.blank_div',{
//         scrollTrigger:{
//         trigger:'.hero_container',
//         start:'110% center',
//         end:'bottom bottom',
//         toggleActions: 'play none none reverse',
//         scrub:true,
//         id:'lastframe',
//         markers:true,},
//     css:{
//         opacity:0,
//     }
// });

    // const lastframe=gsap.to('.hero_container',{
    //     scrollTrigger:{
    //         trigger:'.hero_container',
    //         start:'110% center',
    //         end:'bottom bottom',
    //         toggleActions: 'play none none reverse',
    //         scrub:true,
    //         id:'lastframe',
    //         markers:true,
            
    //     },
    //     css:{
    //         // opacity:0,
    //         position:'static',
    //     }
    // });

    // const panorama=gsap.to('.geet',{
    //     scrollTrigger:{
    //         trigger:'.hero_container',
    //         start:'110% center',
    //         end:'120% center',
    //         toggleActions: 'play none none reverse',
    //         scrub:true,
    //         id:'panorama',
    //         markers:true,
            
            
    //     },
    //     css:{
    //         // opacity:0,
    //         position:'fixed',
    //         top:0,
    //         left:0,
            
    //         // translateY:0,
    //     },
    // });

    // const panorama2=gsap.to('.geet',{
    //     scrollTrigger:{
    //         trigger:'.hero_container',
    //         start:'120% center',
    //         end:'bottom bottom',
    //         toggleActions: 'play none none reverse',
    //         scrub:true,
    //         id:'panorama2',
    //         markers:true,
            
            
    //     },
    //     css:{
    //         // opacity:0,
    //         position:'static',
            
    //     },
    // });


    // tl.to('.hero_container',{
    //     css:{
    //         position:'absolute',
    //         // top:0,
    //         // left:0,
    //     },
    // });

    images[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      console.log(book_cover.frame);
    //   context.drawImage(images[book_cover.frame], 0, 0);
    context.drawImage(images[book_cover.frame], 0,0, 1920, 1080, 0,0,1920*factor1, 1080*factor2);
    }
  
  });
  return (
    <div className="hero_animation_div">
        <div className="AlcherLogo">
            <img className="logo_img" src={AlcherLogo} alt="" />
        </div>
        <div className="blank_div2"> 

        </div>
      <div id="hero_container" className="hero_container">
        <section id="canvas_section1" className="book-container1">
          <canvas id="canvas1" />
        </section>
      </div>
      <div className="blank_div"> 

       </div>
    </div>
  );
}

export default HeroSection;
