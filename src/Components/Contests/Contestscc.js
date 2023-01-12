import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";
import Card from "./Images/tempcard.png";
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
        <Nav  />
       
        </div> <NavMobContest />
        <div className="contest_main">
        <div className="sidebar1">
            <div className="head">MODULES</div>
            <ul className="mlist">
              <li className="hey">
                <NavLink to="/Contests">
                  <b>VOUGUE NATION</b>
                </NavLink>
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
            </ul>
          </div>
          <div className="contest_box">
            <div className="contest_content">
              <div className="contest_card">
                <img src={Card} alt="" />
                <Link className='contest_button' to="/BookTickets"><Book /></Link>
              </div>
              <div className="contest_card">
                <img src={Card} alt="" />
                <Link className='contest_button' to="/BookTickets"><Book /></Link>
              </div>
              <div className="contest_card">
                <img src={Card} alt="" />
                <Link className='contest_button' to="/BookTickets"><Book /></Link>
              </div>
              <div className="contest_card">
                <img src={Card} alt="" />
                <Link className='contest_button' to="/BookTickets"><Book /></Link>
              </div>
              <div className="contest_card">
                <img src={Card} alt="" />
                <Link className='contest_button' to="/BookTickets"><Book /></Link>
              </div>
              <div className="contest_card">
                <img src={Card} alt="" />
                <Link className='contest_button' to="/BookTickets"><Book /></Link>
              </div>
              <div className="contest_card">
                <img src={Card} alt="" />
                <Link className='contest_button' to="/BookTickets"><Book /></Link>
              </div>
              <div className="contest_card">
                <img src={Card} alt="" />
                <Link className='contest_button' to="/BookTickets"><Book /></Link>
              </div>
            </div>
          </div>
          
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Events;
