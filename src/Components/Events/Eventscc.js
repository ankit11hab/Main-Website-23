import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";
import EventsBook from "./EventsBook";
import NavMob from "../NavEventsMobile/NavMob";
import EventsLogo from "./Images/EventsLogo.svg";
import Banger from "./Images/Banger.png";
import BangerMob from "./Images/BangerMob.png";
import cc1 from "./Images/cc1.webp"
import cc2 from "./Images/cc2.webp"
import cc3 from "./Images/cc3.webp"
import cc4 from "./Images/cc4.webp"
import cc5 from "./Images/cc5.webp"
import cc6 from "./Images/cc6.webp"
import cc7 from "./Images/cc7.webp"

import mcc1 from "./Images/mcc1.webp"
import mcc2 from "./Images/mcc2.webp"
import mcc3 from "./Images/mcc3.webp"
import mcc4 from "./Images/mcc4.webp"
import mcc5 from "./Images/mcc5.webp"
import mcc6 from "./Images/mcc6.webp"
import mcc7 from "./Images/mcc7.webp"
import monster from '../Merch-coming/monster.png'
import comingsoon from '../Merch-coming/comingsoon.png'

import "./Events.css";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Events1() {
  const [upnavColor, setupnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 95 ? setupnavColor("linear-gradient(0deg, rgba(243, 92, 65, 0) -5%, #fffbf5 100%)") : setupnavColor("transparent");
   
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div>
      <div className="navbar">
        <Nav />
      </div>

      <NavMob />

      <div className="main_event">
        <div className="content_event">
          <div className="event_card" >
            <img src={cc1} alt="" style={{'marginTop':"-3vw"}}/>
            {/* <Link className='event_button image' to="/BookTickets"><EventsBook /></Link> */}
          </div>
          <div className="event_card">
            <img src={cc2} alt=""style={{'marginTop':"-3vw"}} />
            {/* <Link className='event_button image' to="/BookTickets"><EventsBook /></Link> */}
          </div>
          <div className="event_card">
            <img src={cc3} alt=""style={{'marginTop':"-3vw"}}/>
          </div>
          <div className="event_card">
            <img src={cc4} alt=""style={{'marginTop':"-3vw"}}/>
          </div>
          <div className="event_card">
            <img src={cc5} alt=""style={{'marginTop':"-3vw"}}/>
          </div>
          <div className="event_card">
            <img src={cc6} alt=""style={{'marginTop':"-3vw"}}/>
          </div>
          <div className="event_card">
            <img src={cc7} alt=""style={{'marginTop':"-3vw"}}/>
          </div>
        </div>
        <div className="upnav" style={{background:upnavColor}}>
          <div className="sidebar11">
            <NavLink to="/Events/pt">
              <div className="pronites1" id="eventsnavitem">PRONITES</div>
            </NavLink>
            <NavLink to="/Events/cc">
              <div className="CreatorsCamp1" id="eventsnavitem">CREATORS CAMP</div>
            </NavLink>
            <NavLink to="/Events/ps">
              <div className="PROSHOWS1" id="eventsnavitem">PROSHOWS</div>
            </NavLink>
         <NavLink to="/Events/hf">
              <div className="HumourFest1">OTHERS</div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="main_event_mob">
        <div className="content_event">
          <div className="event_card">
            <img src={mcc1} alt="" />
            {/* <Link className='event_button image' to="/BookTickets"><EventsBook /></Link> */}
          </div>
          <div className="event_card">
            <img src={mcc2} alt="" />
            <Link className='event_button image' to="/BookTickets"><EventsBook /></Link>
          </div>
          <div className="event_card">
            <img src={mcc3} alt=""/>
          </div>
          <div className="event_card">
            <img src={mcc4} alt=""/>
          </div>
          <div className="event_card">
            <img src={mcc5} alt=""/>
          </div>
          <div className="event_card">
            <img src={mcc6} alt=""/>
          </div>
          <div className="event_card">
            <img src={mcc7} alt=""/>
          </div>
        </div>
        <div className="upnav">
          <div className="sidebar11">
            <NavLink to="/Events/pt">
              <div className="pronites1" id="eventsnavitem">PRONITES</div>
            </NavLink>
            <NavLink to="/Events/cc">
              <div className="CreatorsCamp1" id="eventsnavitem">CREATORS CAMP</div>
            </NavLink>
            <NavLink to="/Events/ps">
              <div className="PROSHOWS1" id="eventsnavitem">PROSHOWS</div>
            </NavLink>
            <NavLink to="/Events/hf">
              <div className="HumourFest1">OTHERS</div>
            </NavLink>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}

export default Events1;
