import React, { useLayoutEffect, useState } from "react";
import gsap, { Circ, Power0, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sine, SteppedEase } from "gsap/src/all";
import "./HeroSection.scss";
import BookTicketIcon from "./images/bookticketsicon.svg";

import frame0 from "./website webp/Web_0000.webp";
import frame1 from "./website webp/Web_0001.webp";
import frame2 from "./website webp/Web_0002.webp";
import frame3 from "./website webp/Web_0003.webp";
import frame4 from "./website webp/Web_0004.webp";
import frame5 from "./website webp/Web_0005.webp";
import frame6 from "./website webp/Web_0006.webp";
import frame7 from "./website webp/Web_0007.webp";
import frame8 from "./website webp/Web_0008.webp";
import frame9 from "./website webp/Web_0009.webp";
import frame10 from "./website webp/Web_0010.webp";
import frame11 from "./website webp/Web_0011.webp";
import frame12 from "./website webp/Web_0012.webp";
import frame13 from "./website webp/Web_0013.webp";
import frame14 from "./website webp/Web_0014.webp";
import frame15 from "./website webp/Web_0015.webp";
import frame16 from "./website webp/Web_0016.webp";
import frame17 from "./website webp/Web_0017.webp";
import frame18 from "./website webp/Web_0018.webp";
import frame19 from "./website webp/Web_0019.webp";
import frame20 from "./website webp/Web_0020.webp";
import frame21 from "./website webp/Web_0021.webp";
import frame22 from "./website webp/Web_0022.webp";
import frame23 from "./website webp/Web_0023.webp";
import frame24 from "./website webp/Web_0024.webp";
import frame25 from "./website webp/Web_0025.webp";
import frame26 from "./website webp/Web_0026.webp";
import frame27 from "./website webp/Web_0027.webp";
import frame28 from "./website webp/Web_0028.webp";
import frame29 from "./website webp/Web_0029.webp";
import frame30 from "./website webp/Web_0030.webp";
import frame31 from "./website webp/Web_0031.webp";
import frame32 from "./website webp/Web_0032.webp";
import frame33 from "./website webp/Web_0033.webp";
import frame34 from "./website webp/Web_0034.webp";
import frame35 from "./website webp/Web_0035.webp";
import frame36 from "./website webp/Web_0036.webp";
import frame37 from "./website webp/Web_0037.webp";
import frame38 from "./website webp/Web_0038.webp";
import frame39 from "./website webp/Web_0039.webp";
import frame40 from "./website webp/Web_0040.webp";
import frame41 from "./website webp/Web_0041.webp";
import frame42 from "./website webp/Web_0042.webp";
import frame43 from "./website webp/Web_0043.webp";
import frame44 from "./website webp/Web_0044.webp";
import frame45 from "./website webp/Web_0045.webp";
import frame46 from "./website webp/Web_0046.webp";
import frame47 from "./website webp/Web_0047.webp";
import frame48 from "./website webp/Web_0048.webp";
import frame49 from "./website webp/Web_0049.webp";
import frame50 from "./website webp/Web_0050.webp";
import frame51 from "./website webp/Web_0051.webp";
import frame52 from "./website webp/Web_0052.webp";
import frame53 from "./website webp/Web_0053.webp";
import frame54 from "./website webp/Web_0054.webp";
import frame55 from "./website webp/Web_0055.webp";
import frame56 from "./website webp/Web_0056.webp";
import frame57 from "./website webp/Web_0057.webp";
import frame58 from "./website webp/Web_0058.webp";
import frame59 from "./website webp/Web_0059.webp";
import frame60 from "./website webp/Web_0060.webp";
import frame61 from "./website webp/Web_0061.webp";
import frame62 from "./website webp/Web_0062.webp";
import frame63 from "./website webp/Web_0063.webp";
import frame64 from "./website webp/Web_0064.webp";
import frame65 from "./website webp/Web_0065.webp";
import frame66 from "./website webp/Web_0066.webp";
import frame67 from "./website webp/Web_0067.webp";
import frame68 from "./website webp/Web_0068.webp";
import frame69 from "./website webp/Web_0069.webp";
import frame70 from "./website webp/Web_0070.webp";
import frame71 from "./website webp/Web_0071.webp";
import frame72 from "./website webp/Web_0072.webp";
import frame73 from "./website webp/Web_0073.webp";
import frame74 from "./website webp/Web_0074.webp";
import frame75 from "./website webp/Web_0075.webp";
import frame76 from "./website webp/Web_0076.webp";
import frame77 from "./website webp/Web_0077.webp";
import frame78 from "./website webp/Web_0078.webp";
import frame79 from "./website webp/Web_0079.webp";
import frame80 from "./website webp/Web_0080.webp";
import frame81 from "./website webp/Web_0081.webp";
import frame82 from "./website webp/Web_0082.webp";
import frame83 from "./website webp/Web_0083.webp";
import frame84 from "./website webp/Web_0084.webp";
import frame85 from "./website webp/Web_0085.webp";
import frame86 from "./website webp/Web_0086.webp";
import frame87 from "./website webp/Web_0087.webp";
import frame88 from "./website webp/Web_0088.webp";
import frame89 from "./website webp/Web_0089.webp";
import frame90 from "./website webp/Web_0090.webp";
import frame91 from "./website webp/Web_0091.webp";
import frame92 from "./website webp/Web_0092.webp";
import frame93 from "./website webp/Web_0093.webp";
import frame94 from "./website webp/Web_0094.webp";
import frame95 from "./website webp/Web_0095.webp";
import frame96 from "./website webp/Web_0096.webp";
import frame97 from "./website webp/Web_0097.webp";
import frame98 from "./website webp/Web_0098.webp";
import frame99 from "./website webp/Web_0099.webp";
import frame100 from "./website webp/Web_0100.webp";
import frame101 from "./website webp/Web_0101.webp";
import frame102 from "./website webp/Web_0102.webp";
import frame103 from "./website webp/Web_0103.webp";
import frame104 from "./website webp/Web_0104.webp";
import frame105 from "./website webp/Web_0105.webp";
import frame106 from "./website webp/Web_0106.webp";
import frame107 from "./website webp/Web_0107.webp";
import frame108 from "./website webp/Web_0108.webp";
import frame109 from "./website webp/Web_0109.webp";
import frame110 from "./website webp/Web_0110.webp";
import frame111 from "./website webp/Web_0111.webp";
import frame112 from "./website webp/Web_0112.webp";
import frame113 from "./website webp/Web_0113.webp";
import frame114 from "./website webp/Web_0114.webp";
import frame115 from "./website webp/Web_0115.webp";
///////////////////////////////////////////////////////////////
import frameMob0 from "./mobile images webp/Mobile_NoBG_0000.webp";
import frameMob1 from "./mobile images webp/Mobile_NoBG_0001.webp";
import frameMob2 from "./mobile images webp/Mobile_NoBG_0002.webp";
import frameMob3 from "./mobile images webp/Mobile_NoBG_0003.webp";
import frameMob4 from "./mobile images webp/Mobile_NoBG_0004.webp";
import frameMob5 from "./mobile images webp/Mobile_NoBG_0005.webp";
import frameMob6 from "./mobile images webp/Mobile_NoBG_0006.webp";
import frameMob7 from "./mobile images webp/Mobile_NoBG_0007.webp";
import frameMob8 from "./mobile images webp/Mobile_NoBG_0008.webp";
import frameMob9 from "./mobile images webp/Mobile_NoBG_0009.webp";
import frameMob10 from "./mobile images webp/Mobile_NoBG_0010.webp";
import frameMob11 from "./mobile images webp/Mobile_NoBG_0011.webp";
import frameMob12 from "./mobile images webp/Mobile_NoBG_0012.webp";
import frameMob13 from "./mobile images webp/Mobile_NoBG_0013.webp";
import frameMob14 from "./mobile images webp/Mobile_NoBG_0014.webp";
import frameMob15 from "./mobile images webp/Mobile_NoBG_0015.webp";
import frameMob16 from "./mobile images webp/Mobile_NoBG_0016.webp";
import frameMob17 from "./mobile images webp/Mobile_NoBG_0017.webp";
import frameMob18 from "./mobile images webp/Mobile_NoBG_0018.webp";
import frameMob19 from "./mobile images webp/Mobile_NoBG_0019.webp";
import frameMob20 from "./mobile images webp/Mobile_NoBG_0020.webp";
import frameMob21 from "./mobile images webp/Mobile_NoBG_0021.webp";
import frameMob22 from "./mobile images webp/Mobile_NoBG_0022.webp";
import frameMob23 from "./mobile images webp/Mobile_NoBG_0023.webp";
import frameMob24 from "./mobile images webp/Mobile_NoBG_0024.webp";
import frameMob25 from "./mobile images webp/Mobile_NoBG_0025.webp";
import frameMob26 from "./mobile images webp/Mobile_NoBG_0026.webp";
import frameMob27 from "./mobile images webp/Mobile_NoBG_0027.webp";
import frameMob28 from "./mobile images webp/Mobile_NoBG_0028.webp";
//////////////////////////////////////////////////////////////
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

const frameArrMob = [
  frameMob0,
  frameMob1,
  frameMob2,
  frameMob3,
  frameMob4,
  frameMob5,
  frameMob6,
  frameMob7,
  frameMob8,
  frameMob9,
  frameMob10,
  frameMob11,
  frameMob12,
  frameMob13,
  frameMob14,
  frameMob15,
  frameMob16,
  frameMob17,
  frameMob18,
  frameMob19,
  frameMob20,
  frameMob21,
  frameMob22,
  frameMob23,
  frameMob24,
  frameMob25,
  frameMob26,
  frameMob27,
  frameMob28,
];

gsap.registerPlugin(ScrollTrigger);
function HeroSection() {
  // const [isPending, setisPending] = useState(true);
  // window.addEventListener("load", () => {
  //   setisPending(false);
  // });
  useLayoutEffect(() => {
    if (!window.matchMedia("(max-width: 800px)").matches) {
      const canvas = document.getElementById("canvas1");
      const context = canvas.getContext("2d");
      const frameCount = 116;
      const currentFrame = (index) => frameArr[index];
      var sizeWidth = (100 * window.innerWidth) / 100,
        sizeHeight = (100 * window.innerHeight) / 100;
      //Setting the canvas site and width to be responsive
      canvas.width = sizeWidth;
      canvas.height = sizeHeight;
      canvas.style.width = sizeWidth;
      canvas.style.height = sizeHeight;
      const factor1 = sizeWidth / 3840;
      const factor2 = sizeHeight / 2160;
      const images = [];
      const book_cover = {
        frame: 0,
      };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }
      images[0].onload = render;

      function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
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
      let ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero_container",
          },
        });
        tl.to(book_cover, {
          frame: frameCount - 1,
          snap: "frame",
          ease: "none",
          duration: 2000,
          scrollTrigger: {
            trigger: ".hero_container",
            start: "top top",
            end: "400% bottom",
            scrub: 1,
            pin: true,
          },
          onUpdate: render,
        });
        tl.to(".pano___", {
          scrollTrigger: {
            trigger: ".pano___",
            start: "top bottom",
            end: "top top",
            scrub: 1,
            toggleClass: { targets: ".overlay", className: "block" },
          },
        });
        tl.to(".pano___", {
          scrollTrigger: {
            trigger: ".pano___",
            start: "top top",
            scrub: 1,
            pin: ".pano___",
          },
        });
      });
      return () => {
        ctx.revert();
      };
    } else {
      const canvas = document.getElementById("canvas1");
      const context = canvas.getContext("2d");
      const frameCount = 29;
      const currentFrame = (index) => frameArrMob[index];
      var sizeWidth = (100 * window.innerWidth) / 100,
        sizeHeight = (100 * window.innerHeight) / 100;
      //Setting the canvas site and width to be responsive
      canvas.width = sizeWidth;
      canvas.height = sizeHeight;
      canvas.style.width = sizeWidth;
      canvas.style.height = sizeHeight;
      const images = [];
      const book_cover = {
        frame: 0,
      };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }
      images[0].onload = render;

      function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          images[book_cover.frame],
          0,
          -(canvas.height / 5),
          canvas.width,
          canvas.height * 1.5
        );
      }
      let ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero_container",
          },
        });
        tl.to(book_cover, {
          frame: frameCount - 1,
          snap: "frame",
          ease: "none",
          duration: 2000,
          scrollTrigger: {
            trigger: ".hero_container",
            start: "top top",
            end: "600% bottom",
            scrub: 1,
            pin: true,
          },
          onUpdate: render,
        });
        tl.to(".pano___", {
          scrollTrigger: {
            trigger: ".pano___",
            start: "top bottom",
            end: "top top",
            scrub: 1,
            toggleClass: { targets: ".overlay", className: "block" },
          },
        });
        tl.to(".pano___", {
          scrollTrigger: {
            trigger: ".pano___",
            start: "top top",
            scrub: 1,
            pin: ".pano___",

            onLeave: () => {},
          },
        });
      });
      return () => {
        ctx.revert();
      };
    }
  }, []);

  return (
    <>
      {/* {isPending && <style>{`body{overflow:hidden !important}`}</style>}
      {isPending && (
        <div className="loader-container">
          <div class="loader book">
            <figure class="page"></figure>
            <figure class="page"></figure>
            <figure class="page"></figure>
          </div>
          <h4>Loading</h4>
        </div>
      )} */}
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
          <div className="bookticketbtn">
            <button type="button" id="bookbtn" className="bookbtn">
              <img src={BookTicketIcon} alt="" className="bookiconhero" />
              <div className="bookticketstext">
                &nbsp; &nbsp; BOOK&nbsp;TICKETS
              </div>

              {/* <img src={BookTicketIcon} alt="" />
              <div>&nbsp; &nbsp; BOOK TICKETS</div> */}
            </button>
          </div>
        </div>
      </div>
      <div id="hero_container" className="hero_container">
        <div id="canvas_section1" className="book-container1">
          <canvas className="hero_canvas" id="canvas1" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
