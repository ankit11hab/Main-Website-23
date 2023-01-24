import React, { useEffect } from "react";
import "./Sponsers.css";
import img from "../../images/hailAlcher.png";

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
import killer from "./images/killer.png";
import Gplus from "./images/GplusLogo.png";
import Mirchi from "./images/Mirchi.png";
import AssamTribune from "./images/AssamTribune.jpg";
function Sponsers() {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );
    const marqueeContent = document.querySelector("ul.marquee-content");
    const marqueeContent2 = document.querySelector("ul.marquee-content2");

    root.style.setProperty(
      "--marquee-elements",
      marqueeContent.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
    for (let i = marqueeElementsDisplayed - 1; i >= 0; i--) {
      marqueeContent2.prepend(marqueeContent2.children[i].cloneNode(true));
    }
  }, []);
  return (
    <div>
      <h1 className="featured-event-heading">OUR SPONSORS</h1>
      <div className="marquee-body">
        <div className="marquee1">
          <ul className="marquee-content">
            <li>
              <img src={asus} alt="pr-sample23" style={{ width: "150px" }} />
            </li>
            <li>
              <img
                src={AssamTribune}
                alt="pr-sample23"
                style={{ width: "150px" }}
              />
            </li>
            <li>
              <img src={Gplus} alt="pr-sample23" style={{ width: "150px" }} />
            </li>
            <li>
              <img src={ydlogo} alt="pr-sample23" style={{ width: "150px" }} />
            </li>
            <li>
              <img src={upgrad} alt="pr-sample23" style={{ width: "150px" }} />
            </li>
            <li>
              <img src={unstop} alt="pr-sample23" style={{ width: "150px" }} />
            </li>
            <li>
              <img src={twani} alt="pr-sample23" style={{ width: "150px" }} />
            </li>
            <li>
              <img src={safeexp} alt="pr-sample23" style={{ width: "150px" }} />
            </li>
            <li>
              <img
                src={jamboree}
                alt="pr-sample23"
                style={{ width: "150px" }}
              />
            </li>
            <li>
              <img src={bigrock} alt="pr-sample23" style={{ width: "150px" }} />
            </li>
            <li>
              <img src={bias} alt="pr-sample23" style={{ width: "150px" }} />
            </li>
            <li>
              <img src={berado} alt="pr-sample23" style={{ width: "150px" }} />
            </li>
            <li>
              <img src={killer} alt="pr-sample23" style={{ width: "150px" }} />
            </li>

            <li>
              <img src={Mirchi} alt="pr-sample23" style={{ width: "150px" }} />
            </li>
          </ul>
        </div>
      </div>
      <div className="marquee-body">
        <div className="marquee1">
          <ul className="marquee-content2">
            <li>
              <></>
            </li>
            <li>
              <></>
            </li>
            <li>
              <></>
            </li>
            <li>
              <></>
            </li>
            <li>
              <></>
            </li>
            <li>
              <></>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sponsers;
