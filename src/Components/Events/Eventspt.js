import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";
import EventsBook from "./EventsBook";
import NavMob from "../NavEventsMobile/NavMob";
import EventsLogo from "./Images/EventsLogo.svg";
import Pronites4 from './Images/Pronites/Pronites4th.png'
import Pronites3 from './Images/Pronites/Pronites3rd.png'
import Pronites5 from './Images/Pronites/Pronites5th.png'
import Pronites2 from './Images/Pronites/Pronites2nd.png'
import Pronites4mob from './Images/Pronites/Pronites4thmob.png'
import Pronites3mob from './Images/Pronites/Pronites3rdmob.png'
import Pronites5mob from './Images/Pronites/Pronites5thmob.png'
import Pronites2mob from './Images/Pronites/Pronites2ndmob.png'


import Banger from "./Images/Banger.png";
import BangerMob from "./Images/BangerMob.png";
import '../Merch-coming/Merch.css'
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
          <div className="event_card"  style={{paddingTop:'8px'}}>
            <img src={Pronites4} alt=""  />
            {/* <Link className="event_button image" to="/BookTickets">
              <EventsBook />
            </Link> */}
          </div>
          <div className="event_card" >
            <img src={Pronites3} alt="" style={{marginTop:"-5vw"}} />
            {/* <Link className="event_button image" to="/BookTickets">
              <EventsBook />
            </Link> */}
          </div>
          <div className="event_card"  style={{paddingTop:'8px'}}>
            <img src={Pronites5} alt="" style={{marginTop:0}}/>
            {/* <Link className="event_button image" to="/BookTickets">
              <EventsBook />
            </Link> */}
          </div>
          <div className="event_card"  style={{paddingTop:'15px'}}>
            <img src={Pronites2} alt="" style={{marginTop:0}}/>
            {/* <Link className="event_button image" to="/BookTickets">
              <EventsBook />
            </Link> */}
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
          <div style={{marginBottom:"3vh"}}>
            <img src={Pronites4mob} alt="" />
            {/* <Link className="event_button image" to="/BookTickets">
              <EventsBook /> 
            </Link> */}
          </div>
          <div style={{marginBottom:"3vh"}}>
            <img src={Pronites3mob} alt="" />
            {/* <Link className="event_button image" to="/BookTickets">
            <EventsBook /> 
            </Link> */}
          </div>
          <div style={{marginBottom:"3vh"}}>
            <img src={Pronites5mob} alt="" />
          </div>
          <div style={{marginBottom:"3vh"}}>
            <img src={Pronites2mob} alt="" />
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
              <div className="PROSHOWS1" id="eventsnavitem">OTHERS</div>
            </NavLink>
          </div>
        </div>
      </div> 
  {/* <div className="Coming-soon">

<div className="coming-soon-text">
    <img src={comingsoon} alt="t"/>
</div>
<div className="coming-soon-monster">
<img src={monster} alt="t"/> 

</div>
</div>*/}
      <Footer />
    </div>
  );
}

export default Events1;
