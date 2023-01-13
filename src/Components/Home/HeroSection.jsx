import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HeroSection.scss";
import { Link } from "react-router-dom";
import Book from "../NavBar/Book";

// import frame1 from "./images/Timeline 1_0000 - Copy.png";
// import frame2 from "./images/Timeline 1_0001 - Copy.png";
// import frame3 from "./images/Timeline 1_0002 - Copy.png";
// import frame4 from "./images/Timeline 1_0003 - Copy.png";
// import frame5 from "./images/Timeline 1_0004 - Copy.png";
// import frame6 from "./images/Timeline 1_0005 - Copy.png";
// import frame7 from "./images/Timeline 1_0006 - Copy.png";
// import frame8 from "./images/Timeline 1_0007 - Copy.png";
// import frame9 from "./images/Timeline 1_0008 - Copy.png";
// import frame10 from "./images/Timeline 1_0009 - Copy.png";
// import frame11 from "./images/Timeline 1_0010 - Copy.png";
// import frame12 from "./images/Timeline 1_0011 - Copy.png";
// import frame13 from "./images/Timeline 1_0012 - Copy.png";
// import frame14 from "./images/Timeline 1_0013 - Copy.png";
// import frame15 from "./images/Timeline 1_0014 - Copy.png";
// import frame16 from "./images/Timeline 1_0015 - Copy.png";
// import frame17 from "./images/Timeline 1_0016 - Copy.png";
// import frame18 from "./images/Timeline 1_0017 - Copy.png";
// import frame19 from "./images/Timeline 1_0018 - Copy.png";
// import frame20 from "./images/Timeline 1_0019 - Copy.png";
// import frame21 from "./images/Timeline 1_0020 - Copy.png";
// import frame22 from "./images/Timeline 1_0021 - Copy.png";
// import frame23 from "./images/Timeline 1_0022 - Copy.png";
// import frame24 from "./images/Timeline 1_0023 - Copy.png";
// import frame25 from "./images/Timeline 1_0024 - Copy.png";
// import frame26 from "./images/Timeline 1_0025 - Copy.png";
// import frame27 from "./images/Timeline 1_0026 - Copy.png";
// import frame28 from "./images/Timeline 1_0027 - Copy.png";
// import frame29 from "./images/Timeline 1_0028 - Copy.png";
// import frame30 from "./images/HD_transparent_picture.png"
import frame0 from "./images/Web_0000.png";
import frame1 from "./images/Web_0001.png";
import frame2 from "./images/Web_0002.png";
import frame3 from "./images/Web_0003.png";
import frame4 from "./images/Web_0004.png";
import frame5 from "./images/Web_0005.png";
import frame6 from "./images/Web_0006.png";
import frame7 from "./images/Web_0007.png";
import frame8 from "./images/Web_0008.png";
import frame9 from "./images/Web_0009.png";
import frame10 from "./images/Web_0010.png";
import frame11 from "./images/Web_0011.png";
import frame12 from "./images/Web_0012.png";
import frame13 from "./images/Web_0013.png";
import frame14 from "./images/Web_0014.png";
import frame15 from "./images/Web_0015.png";
import frame16 from "./images/Web_0016.png";
import frame17 from "./images/Web_0017.png";
import frame18 from "./images/Web_0018.png";
import frame19 from "./images/Web_0019.png";
import frame20 from "./images/Web_0020.png";
import frame21 from "./images/Web_0021.png";
import frame22 from "./images/Web_0022.png";
import frame23 from "./images/Web_0023.png";
import frame24 from "./images/Web_0024.png";
import frame25 from "./images/Web_0025.png";
import frame26 from "./images/Web_0026.png";
import frame27 from "./images/Web_0027.png";
import frame28 from "./images/Web_0028.png";
import frame29 from "./images/Web_0029.png";
import frame30 from "./images/Web_0030.png";
import frame31 from "./images/Web_0031.png";
import frame32 from "./images/Web_0032.png";
import frame33 from "./images/Web_0033.png";
import frame34 from "./images/Web_0034.png";
import frame35 from "./images/Web_0035.png";
import frame36 from "./images/Web_0036.png";
import frame37 from "./images/Web_0037.png";
import frame38 from "./images/Web_0038.png";
import frame39 from "./images/Web_0039.png";
import frame40 from "./images/Web_0040.png";
import frame41 from "./images/Web_0041.png";
import frame42 from "./images/Web_0042.png";
import frame43 from "./images/Web_0043.png";
import frame44 from "./images/Web_0044.png";
import frame45 from "./images/Web_0045.png";
import frame46 from "./images/Web_0046.png";
import frame47 from "./images/Web_0047.png";
import frame48 from "./images/Web_0048.png";
import frame49 from "./images/Web_0049.png";
import frame50 from "./images/Web_0050.png";
import frame51 from "./images/Web_0051.png";
import frame52 from "./images/Web_0052.png";
import frame53 from "./images/Web_0053.png";
import frame54 from "./images/Web_0054.png";
import frame55 from "./images/Web_0055.png";
import frame56 from "./images/Web_0056.png";
import frame57 from "./images/Web_0057.png";
import frame58 from "./images/Web_0058.png";
import frame59 from "./images/Web_0059.png";
import frame60 from "./images/Web_0060.png";
import frame61 from "./images/Web_0061.png";
import frame62 from "./images/Web_0062.png";
import frame63 from "./images/Web_0063.png";
import frame64 from "./images/Web_0064.png";
import frame65 from "./images/Web_0065.png";
import frame66 from "./images/Web_0066.png";
import frame67 from "./images/Web_0067.png";
import frame68 from "./images/Web_0068.png";
import frame69 from "./images/Web_0069.png";
import frame70 from "./images/Web_0070.png";
import frame71 from "./images/Web_0071.png";
import frame72 from "./images/Web_0072.png";
import frame73 from "./images/Web_0073.png";
import frame74 from "./images/Web_0074.png";
import frame75 from "./images/Web_0075.png";
import frame76 from "./images/Web_0076.png";
import frame77 from "./images/Web_0077.png";
import frame78 from "./images/Web_0078.png";
import frame79 from "./images/Web_0079.png";
import frame80 from "./images/Web_0080.png";
import frame81 from "./images/Web_0081.png";
import frame82 from "./images/Web_0082.png";
import frame83 from "./images/Web_0083.png";
import frame84 from "./images/Web_0084.png";
import frame85 from "./images/Web_0085.png";
import frame86 from "./images/Web_0086.png";
import frame87 from "./images/Web_0087.png";
import frame88 from "./images/Web_0088.png";
import frame89 from "./images/Web_0089.png";
import frame90 from "./images/Web_0090.png";
import frame91 from "./images/Web_0091.png";
import frame92 from "./images/Web_0092.png";
import frame93 from "./images/Web_0093.png";
import frame94 from "./images/Web_0094.png";
import frame95 from "./images/Web_0095.png";
import frame96 from "./images/Web_0096.png";
import frame97 from "./images/Web_0097.png";
import frame98 from "./images/Web_0098.png";
import frame99 from "./images/Web_0099.png";
import frame100 from "./images/Web_0100.png";
import frame101 from "./images/Web_0101.png";
import frame102 from "./images/Web_0102.png";
import frame103 from "./images/Web_0103.png";
import frame104 from "./images/Web_0104.png";
import frame105 from "./images/Web_0105.png";
import frame106 from "./images/Web_0106.png";
import frame107 from "./images/Web_0107.png";
import frame108 from "./images/Web_0108.png";
import frame109 from "./images/Web_0109.png";
import frame110 from "./images/Web_0110.png";
import frame111 from "./images/Web_0111.png";
import frame112 from "./images/Web_0112.png";
import frame113 from "./images/Web_0113.png";
import frame114 from "./images/Web_0114.png";
import frame115 from "./images/Web_0115.png";
import AlcherLogo from "./images/alcher_2023_logo.png";
const frameArr = [
  frame0,
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
  frame30,
  frame31,
  frame32,
  frame33,
  frame34,
  frame35,
  frame36,
  frame37,
  frame38,
  frame39,
  frame40,
  frame41,
  frame42,
  frame43,
  frame44,
  frame45,
  frame46,
  frame47,
  frame48,
  frame49,
  frame50,
  frame51,
  frame52,
  frame53,
  frame54,
  frame55,
  frame56,
  frame57,
  frame58,
  frame59,
  frame60,
  frame61,
  frame62,
  frame63,
  frame64,
  frame65,
  frame66,
  frame67,
  frame68,
  frame69,
  frame70,
  frame71,
  frame72,
  frame73,
  frame74,
  frame75,
  frame76,
  frame77,
  frame78,
  frame79,
  frame80,
  frame81,
  frame82,
  frame83,
  frame84,
  frame85,
  frame86,
  frame87,
  frame88,
  frame89,
  frame90,
  frame91,
  frame92,
  frame93,
  frame94,
  frame95,
  frame96,
  frame97,
  frame98,
  frame99,
  frame100,
  frame101,
  frame102,
  frame103,
  frame104,
  frame105,
  frame106,
  frame107,
  frame108,
  frame109,
  frame110,
  frame111,
  frame112,
  frame113,
  frame114,
  frame115,
];

gsap.registerPlugin(ScrollTrigger);
function HeroSection() {
  console.clear();
  useEffect(() => {
    const canvas = document.getElementById("canvas1");
    const context = canvas.getContext("2d");

    // Set display size (vw/vh).
    var sizeWidth = (100 * window.innerWidth) / 100,
      sizeHeight = (100 * window.innerHeight) / 100;
    //Setting the canvas site and width to be responsive
    canvas.width = sizeWidth;
    canvas.height = sizeHeight;
    canvas.style.width = sizeWidth;
    canvas.style.height = sizeHeight;
    const factor1 = sizeWidth / 3840;
    const factor2 = sizeHeight / 2160;
    //    var ratio  = Math.min ( factor1, factor2 );

    //    context.scale(1/factor1,1/factor2);
    // canvas.width = 1920;
    // canvas.height = 1080;

    const frameCount = 116;
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
      duration: 2000,
      scrollTrigger: {
        trigger: ".book-container1",
        start: "top 25%",
        end: "400% 25%",
        scrub: 2,
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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero_container",
        start: "top 25%",
        end: "400% center",
        toggleActions: "play reverse play reverse",
        id: "hero container",
        // markers:true,
        scrub: true,
        // pin:true
      },
    });
    // tl.from('.hero_container',{
    //     css:{
    //         top:20,
    //     },
    // });
    tl.to(".hero_container", {
      css: {
        position: "fixed",
        top: 0,
        left: 0,
      },
    });

    tl.to(".hero_container", {
      scrollTrigger: {
        trigger: ".hero_container",
        start: "400% top",
        end: "bottom bottom",
        toggleActions: "play reverse play reverse",
        scrub: true,
        id: "lastFrame",
        // markers:true,
      },
      css: {
        position: "static",
      },
    });
    tl.to(".blank_div", {
      scrollTrigger: {
        trigger: ".hero_container",
        start: "400% top",
        end: "bottom bottom",
        toggleActions: "play reverse play reverse",
        scrub: true,
        id: "blankdiv",
        // markers:true,
      },
      css: {
        // position:'absolute',
        // width:'10%',
        height: 4 * sizeHeight,
        // opacity:0,
      },
    });
    tl.to(".geet", {
      scrollTrigger: {
        trigger: ".hero_container",
        start: "400% center",
        end: "+=150%",
        toggleActions: "play reverse play reverse",
        scrub: true,
        id: "geet",
        // markers:true,
        // duration:2,
      },
      css: {
        position: "fixed",
        top: 0,
        left: 0,
        opacity: 1,
        zIndex: 6,
      },
    });
    tl.to(".geet", {
      scrollTrigger: {
        trigger: ".hero_container",
        start: "550% center",
        end: "+=100%",
        toggleActions: "play reverse play reverse",
        scrub: true,
        id: "geetee1",
        markers: true,
      },
      css: {
        position: "static",
      },
    });
    tl.to(".blank_div3", {
      scrollTrigger: {
        trigger: ".hero_container",
        start: "550% center",
        end: "+=100%",
        toggleActions: "play reverse play reverse",
        scrub: true,
        id: "geetee2",
        // markers:true,
      },
      css: {
        //    position:'absolute',
        //    opacity:0,
        height: sizeHeight * 0.15,
      },
    });
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
      context.drawImage(
        images[book_cover.frame],
        0,
        0,
        3840,
        2160,
        0,
        0,
        3840 * factor1,
        2160 * factor2
      );
    }
  });
  return (
    <div className="hero_animation_div" id="heroAnimationDiv">
      <div className="AlcherLogo">
        <span class="t_over"></span>
        <span class="t_over"></span>
        <span class="t_over"></span>
        <span class="t_over"></span>
        <span class="t_over"></span>
        <span class="t_over"></span>
        <span class="t_over"></span>
        <span class="t_over"></span>
        <span class="t_over"></span>
        <img className="logo_img" src={AlcherLogo} alt="" />
      </div>
      <Link className="image1" to="/BookTickets">
        <Book />
      </Link>
      <div className="blank_div2"></div>
      <div id="hero_container" className="hero_container">
        <section id="canvas_section1" className="book-container1">
          <canvas id="canvas1" />
        </section>
      </div>
      <div className="blank_div" id="blankDivId"></div>
    </div>
  );
}

export default HeroSection;
