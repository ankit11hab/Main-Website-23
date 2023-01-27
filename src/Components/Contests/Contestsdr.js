import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";
import Card from "./Images/tempcard.png";
import Hallabol from './Images/Drama/hallabol.png';
import MonoDrama from './Images/Drama/monodrama.png';
import Theatrix from './Images/Drama/theatrix.png';
import "./Contests.css";
import Book from "./register";
import ContestLogo from "./Images/ContestLogo.svg";
import { NavLink, Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import NavMobContest from "../NavContestMobile/NavContestMob";

function Events() {
  // const location = useLocation();
  // const { pathname } = location;
  // const splitLocation = pathname.split("/");

  return (
    <>
      <div className="controller">
        <div className="navbar">
          <Nav />
        </div>
        <NavMobContest />

        <div className="contest_main">
          <div className="sidebar1">
            <div className="head">MODULES</div>
            {/* <ul className="mlist">
              <li>
                <NavLink to="/Contests/vn">VOUGUE NATION</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/ca">CLASS APART</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/d">DANCE</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/m">MUSIC</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/l">LITERARY</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/at">ART TALKIES</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/dd">DIGITAL DEXTERITY</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/lca">LIGHTS CAMERA ACTION</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/s">SPORTS</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/q">QUIZ</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/dr">DRAMA</NavLink>
              </li>
            </ul> */}
            <ul className="mlist">
              <li>
                <NavLink to="/Contests/vn" className="sidebar1-item">VOUGUE NATION</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/ca" className="sidebar1-item">CLASS APART</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/d" className="sidebar1-item">DANCE</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/m"  className="sidebar1-item">MUSIC</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/l"  className="sidebar1-item">LITERARY</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/at"  className="sidebar1-item">ART TALKIES</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/dd" className="sidebar1-item">DIGITAL DEXTERITY</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/lca"  className="sidebar1-item">LIGHTS CAMERA ACTION</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/s"  className="sidebar1-item">SPORTS</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/q"  className="sidebar1-item">QUIZ</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/dr"  className="sidebar1-item">DRAMA</NavLink>
              </li>
              <li>
                <NavLink to="/Contests/cd"  className="sidebar1-item">CRITICAL DAMAGE</NavLink>
              </li>
            </ul>
          </div>
          <div className="contest_box">
            <div className="contest_content" style={{marginLeft: "1vw", gap: '5vw'}}>
              <div className="contest_card">
                <img src={Hallabol} alt="" />
<a className='contest_button'  href="https://registrations.alcheringa.in/" target='_blank'><Book /></a>
              </div>
              <div className="contest_card">
                <img src={MonoDrama} alt="" />
<a className='contest_button'  href="https://registrations.alcheringa.in/" target='_blank'><Book /></a>
              </div>
              <div className="contest_card">
                <img src={Theatrix} alt="" />
<a className='contest_button'  href="https://registrations.alcheringa.in/" target='_blank'><Book /></a>
              </div>
              {/* <div className="contest_card">
                <img src={Card} alt="" />
<a className='contest_button'  href="https://registrations.alcheringa.in/" target='_blank'><Book /></a>
              </div>
              <div className="contest_card">
                <img src={Card} alt="" />
<a className='contest_button'  href="https://registrations.alcheringa.in/" target='_blank'><Book /></a>
              </div>
              <div className="contest_card">
                <img src={Card} alt="" />
<a className='contest_button'  href="https://registrations.alcheringa.in/" target='_blank'><Book /></a>
              </div>
              <div className="contest_card">
                <img src={Card} alt="" />
<a className='contest_button'  href="https://registrations.alcheringa.in/" target='_blank'><Book /></a>
              </div>
              <div className="contest_card">
                <img src={Card} alt="" />
<a className='contest_button'  href="https://registrations.alcheringa.in/" target='_blank'><Book /></a>
              </div> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Events;
