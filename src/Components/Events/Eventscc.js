import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";
import EventsBook from "../NavBar/Book";
import NavMob from "../NavEventsMobile/NavMob";
import EventsLogo from "./Images/EventsLogo.svg";
import Banger from "./Images/Banger.png";
import BangerMob from "./Images/BangerMob.png";

import "./Events.css";
import { NavLink, Link } from "react-router-dom";

function Events1() {
  return (
    <div>
      <div className="navbar">
        <Nav />
      </div>

      <NavMob />

      <div className="main_event">
        <div className="content_event">
          <div className="event_card">
            <img src={Banger} alt="" />
            <Link className="event_button image" to="/BookTickets">
              <EventsBook />
            </Link>
          </div>
          <div className="event_card">
            <img src={Banger} alt="" />
            <Link className="event_button image" to="/BookTickets">
              <EventsBook />
            </Link>
          </div>
          <div className="event_card">
            <img src={Banger} alt="" />
          </div>
          <div className="event_card">
            <img src={Banger} alt="" />
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
            {/* <NavLink to="/Events/hf">
              <div className="HumourFest1">HUMOUR FEST</div>
            </NavLink> */}
            <NavLink to="/Events/ps">
              <div className="PROSHOWS1" id="eventsnavitem">PROSHOWS</div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="main_event_mob">
        <div className="content_event">
          <div className="event_card">
            <img src={BangerMob} alt="" />
            <Link className="event_button image" to="/BookTickets">
              <EventsBook />
            </Link>
          </div>
          <div className="event_card">
            <img src={BangerMob} alt="" />
            <Link className="event_button image" to="/BookTickets">
              <EventsBook />
            </Link>
          </div>
          <div className="event_card">
            <img src={BangerMob} alt="" />
          </div>
          <div className="event_card">
            <img src={BangerMob} alt="" />
          </div>
        </div>
        <div className="upnav">
          <div className="sidebar11">
            <NavLink to="/Events">
              <div className="pronites1">PRONITES</div>
            </NavLink>
            <NavLink to="/Events/cc">
              <div className="CreatorsCamp1">CREATORS CAMP</div>
            </NavLink>
            {/* <NavLink to="/Events/hf">
              <div className="HumourFest1">HUMOUR FEST</div>
            </NavLink> */}
            <NavLink to="/Events/ps">
              <div className="PROSHOWS1">PROSHOWS</div>
            </NavLink>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Events1;
