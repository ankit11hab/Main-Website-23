import "./merchPart.css";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import ZebraStrip from "./Images/zebraStrip.svg";
import ZebraTest from "./Images/ZebraTest.png";
import PinkStrip from "./Images/PinkStrip.svg";
import YellowStrip from "./Images/YellowStrip.svg";
import Bag from "./Images/bag.png";
import BlackShirt from "./Images/blackShirt.png";
import RedShirt from "./Images/redShirt.png";
import ShopNowIcon from "./Images/shopnowIcon.svg";
import ShopNowIcon2 from "./Images/BtnIcon-mob.svg";
import PurpleStar from "./Images/purplestar.svg";
import PinkStar from "./Images/pinkstar.svg";
import RedStar from "./Images/RedStar.svg";
import GreenStar from "./Images/greenstar.svg";
import PurpleCurve from "./Images/purpleCurve.svg";
import RedCurve from "./Images/RedCurve.svg";
import YellowCurve from "./Images/yellowCurve.svg";
import PinkCurve from "./Images/pinkCurve.svg";
import shop from './Images/shop.png'
import shoplogo from './Images/shoplogo.png'
import RockTheLook from './Images/rockthelook.svg'

const MerchPart = () => {
  const [bagboop, setbagBoop] = useState(false);
  const [blackboop, setblackBoop] = useState(false);
  const [redboop, setredBoop] = useState(false);

  const bagstyle = useSpring({
    to: {
      zIndex: bagboop ? 1 : 0,
      rotate: bagboop ? 30 : 0,
      translateX: bagboop ? 15 : 0,
      translateY: bagboop ? -60 : 0,
      transform: bagboop ? `scale(1.5,1.5)` : `scale(1,1)`,
      opacity: blackboop || redboop ? 0.4 : 1,
    },
  });
  const redshirtstyle = useSpring({
    to: {
      zIndex: redboop ? 1 : 0,
      rotate: redboop ? -15 : 0,
      translateX: redboop ? -40 : 0,
      translateY: redboop ? -35 : 0,
      transform: redboop ? `scale(1.4,1.4)` : `scale(1,1)`,
      opacity: blackboop || bagboop ? 0.4 : 1,
    },
  });
  const blackshirtstyle = useSpring({
    to: {
      zIndex: blackboop ? 1 : 0,
      rotate: blackboop ? 15 : 0,
      translateX: blackboop ? 15 : 0,
      translateY: blackboop ? 35 : 0,
      transform: blackboop ? `scale(1.3,1.3)` : `scale(1,1)`,
      opacity: bagboop || redboop ? 0.5 : 1,
    },
  });

  useEffect(() => { }, [bagboop, redboop, blackboop]);

  return (
    <div className="merchPart">
      <div className="merchWide">
        <div className="leftpart">
          <img src={PurpleStar} alt="" className="purplestar" />
          <img src={PinkStar} alt="" className="pinkstar" />
          <img src={ZebraStrip} alt="" className="zebraStrip" />
          <h1 className="heading">
          <img src={RockTheLook} alt="" className="rockthelook" />
            {/* ROCK <br /> THE <br /> LOOK */}
          </h1>
          <br />
          <img src={GreenStar} alt="" className="greenstar" />
          <p className="merchpara">Get Your Merchandise!</p>
        </div>
        <div className="rightpart">
          <img src={YellowStrip} alt="" className="yellowstrip" />
          <img src={PinkStrip} alt="" className="pinkstrip" />
          {/* <button type="button" className="shopNowbtn">
            <img src={ShopNowIcon} alt="" className="btnicon" />
            SHOP&nbsp;NOW
          </button> */}
           <button id='btnn1' type="button" className="shopNowbtn" >
            <div className="book-btnn1">
                <img src={ shoplogo } className='shopticket' alt="" />
                <img src={ shop } className='shoptickets' alt="" />
            </div>
        </button>
          <img src={PurpleCurve} alt="" className="purplecurve" />
          <img src={YellowCurve} alt="" className="yellowcurve" />
          <animated.img
            style={blackshirtstyle}
            src={BlackShirt}
            alt=""
            className="blackShirt"
          />
          <animated.img
            style={redshirtstyle}
            src={RedShirt}
            alt=""
            className="redShirt"
          />
          <animated.img
            style={bagstyle}
            src={Bag}
            alt=""
            className="bag"
          />
          <div className="bag2"
            onMouseEnter={() => setbagBoop(true)}
            onMouseLeave={() => setbagBoop(false)} />
          <div className="redShirt2"
            onMouseEnter={() => setredBoop(true)}
            onMouseLeave={() => setredBoop(false)} />
          <div className="blackShirt2"
            onMouseEnter={() => setblackBoop(true)}
            onMouseLeave={() => setblackBoop(false)} />
          <img src={PinkCurve} alt="" className="pinkcurve" />
        </div>
      </div>

      {/* Mobile View starts here */}
      <div className="merch-mob">
        <div className="merchimages-mob">
          <img src={RedCurve} alt="" className="redcurve" />
          <img src={YellowCurve} alt="" className="yellowcurve" />
          <animated.img
            onMouseEnter={() => setblackBoop(true)}
            onMouseLeave={() => setblackBoop(false)}
            style={blackshirtstyle}
            src={BlackShirt}
            alt=""
            className="blackShirt"
          />
          <animated.img
            onMouseEnter={() => setredBoop(true)}
            onMouseLeave={() => setredBoop(false)}
            style={redshirtstyle}
            src={RedShirt}
            alt=""
            className="redShirt"
          />
          <animated.img
            onMouseEnter={() => setbagBoop(true)}
            onMouseLeave={() => setbagBoop(false)}
            style={bagstyle}
            src={Bag}
            alt=""
            className="bag"
          />
          <img src={PinkCurve} alt="" className="pinkcurve" />
        </div>
        <div className="merchtext-mob">
          <img src={ZebraTest} alt="" className="zebratest" />
          <img src={RedStar} alt="" className="redstar" />
          <img src={GreenStar} alt="" className="greenstar" />
          <h1 className="heading">
            ROCK <br /> THE <br /> LOOK
          </h1>
          <br />
          <img src={PinkStar} alt="" className="pinkstar" />
          <p className="merchpara">Get Your Merchandise!</p>
          <button type="button" className="shopNowbtn">
            <img src={ShopNowIcon2} alt="" className="btnicon-mob" />
            SHOP&nbsp;NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default MerchPart;
