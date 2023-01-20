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
          <Nav />
        </div>
        <NavMobContest />

        <div className="contest_main">
          <div className="sidebar1">
            <div className="head">MODULES</div>
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
            </ul>
          </div>
          <div className="contest_box">
            <div className="contest_content">
              <div className="contest_card">
                <img src={Card} alt="" />
                <Link className="contest_button" to="/BookTickets">
                  <Book />
                </Link>
              </div>
              <div className="contest_card">
                <img src={Card} alt="" />
                <Link className="contest_button" to="/BookTickets">
                  <Book />
                </Link>
              </div>
              <div className="contest_card">
                <img src={Card} alt="" />
                <Link className="contest_button" to="/BookTickets">
                  <Book />
                </Link>
              </div>
              <div className="contest_card">
                <img src={Card} alt="" />
                <Link className="contest_button" to="/BookTickets">
                  <Book />
                </Link>
              </div>
              <div className="contest_card">
                <img src={Card} alt="" />
                <Link className="contest_button" to="/BookTickets">
                  <Book />
                </Link>
              </div>
              <div className="contest_card">
                <img src={Card} alt="" />
                <Link className="contest_button" to="/BookTickets">
                  <Book />
                </Link>
              </div>
              <div className="contest_card">
                <img src={Card} alt="" />
                <Link className="contest_button" to="/BookTickets">
                  <Book />
                </Link>
              </div>
              <div className="contest_card">
                <img src={Card} alt="" />
                <Link className="contest_button" to="/BookTickets">
                  <Book />
                </Link>
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
