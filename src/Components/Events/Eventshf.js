import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";
import EventsBook from "./EventsBook";
import NavMob from "../NavEventsMobile/NavMob";
import EventsLogo from "./Images/EventsLogo.svg";
import Banger from "./Images/Banger.png";
import technobyte from "./Images/technobytes.png";
import technobyte_mob from "./Images/technobytes_mob.png";
import BangerMob from "./Images/BangerMob.png";
import monster from "../Merch-coming/monster.png";
import comingsoon from "../Merch-coming/comingsoon.png";
import { useState, useEffect } from "react";


import "./Events.css";
import { NavLink, Link } from "react-router-dom";

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
            <a href="https://techobytes.com/" target={'_blank'} style={{'cursor':'default'}}>
          <div className="event_card">
            <img src={technobyte} alt="" />
            {/* <Link className="event_button image" to="/BookTickets">
              <EventsBook />
            </Link> */}
          </div>
            </a>
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
              <div className="HumourFest1" id="eventsnavitem">OTHERS</div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="main_event_mob">
        <div className="content_event">
        <a href="https://techobytes.com/" target={'_blank'} style={{'cursor':'default'}}>
          <div className="event_card">
            <img src={technobyte_mob} alt="" />
            {/* <Link className="event_button image" to="/BookTickets">
              <EventsBook />
            </Link> */}
          </div>
          </a>
          {/* <div className="event_card">
            <img src={BangerMob} alt="" />
            <Link className="event_button image" to="/BookTickets">
              <EventsBook />
            </Link>
          </div> */}
          {/* <div className="event_card">
            <img src={BangerMob} alt="" />
          </div>
          <div className="event_card">
            <img src={BangerMob} alt="" />
          </div> */}
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
              <div className="PROSHOWS1" id="eventsnavitem">OTHERS</div>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Events1;
