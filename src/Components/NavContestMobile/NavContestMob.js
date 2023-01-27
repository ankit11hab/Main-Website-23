import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./NavMob.css";
import dropimg from "./Images/downarrow.svg";
import uparrow from "./Images/uparrow.svg";
const NavMobContest = () => {
  const location = useLocation();
  const { pathname } = location;
  const [click, setClick] = useState("true");
  const handleClick = (e) => {
    setClick(!click);
  };
  return (
    <div className="overall_nav_contest">
      <div className="main-nav">
        {pathname === "/Contests/vn" ? (
          <ul className="Navmoblist" style={{ listStyle: "none" }}>
            <li>
              <NavLink
                to="/Contests/vn"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                VOUGUE&nbsp;NATION
                <img
                  className="PointerCursor"
                  src={click ? dropimg : uparrow}
                  alt=""
                 
                  onClick={handleClick}
                ></img>
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/ca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                CLASS&nbsp;APART
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/d"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DANCE
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/m"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                MUSIC
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/l"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LITERARY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/at"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                ART&nbsp;TALKIES
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dd"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DIGITAL&nbsp;DEXTERITY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/lca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LIGHTS&nbsp;CAMERA&nbsp;ACTION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/s"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                SPORTS
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/q"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                QUIZ
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dr"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DRAMA
              </NavLink>
            </li>
          </ul>
        ) : (
          <></>
        )}
        {pathname === "/Contests/ca" ? (
          <ul className="Navmoblist" style={{ listStyle: "none" }}>
            <li className>
              <NavLink
                to="/Contests/ca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                CLASS APART
                <img
                  className="PointerCursor"
                  src={click ? dropimg : uparrow}
                  alt=""
                  style={{ cursor: "pointer" }}
                  onClick={handleClick}
                ></img>
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                VOUGUE NATION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/d"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DANCE
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/m"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                MUSIC
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/l"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LITERARY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/at"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                ART TALKIES
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dd"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DIGITAL DEXTERITY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/lca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LIGHTS CAMERA ACTION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/s"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                SPORTS
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/q"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                QUIZ
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dr"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DRAMA
              </NavLink>
            </li>
          </ul>
        ) : (
          <></>
        )}
        {pathname === "/Contests/d" ? (
          <ul className="Navmoblist" style={{ listStyle: "none" }}>
            <li>
              <NavLink
                to="/Contests/d"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DANCE
                <img
                  className="PointerCursor"
                  src={click ? dropimg : uparrow}
                  alt=""
                 
                  onClick={handleClick}
                ></img>
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                VOUGUE NATION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/ca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                CLASS APART
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/m"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                MUSIC
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/l"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LITERARY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/at"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                ART TALKIES
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dd"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DIGITAL DEXTERITY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/lca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LIGHTS CAMERA ACTION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/s"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                SPORTS
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/q"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                QUIZ
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dr"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DRAMA
              </NavLink>
            </li>
          </ul>
        ) : (
          <></>
        )}
        {pathname === "/Contests/m" ? (
          <ul className="Navmoblist" style={{ listStyle: "none" }}>
            <li>
              <NavLink
                to="/Contests/m"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                MUSIC
                <img
                  className="PointerCursor"
                  src={click ? dropimg : uparrow}
                  alt=""
                 
                  onClick={handleClick}
                ></img>
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                VOUGUE NATION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/ca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                CLASS APART
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/d"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DANCE
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/l"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LITERARY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/at"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                ART TALKIES
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dd"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DIGITAL DEXTERITY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/lca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LIGHTS CAMERA ACTION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/s"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                SPORTS
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/q"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                QUIZ
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dr"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DRAMA
              </NavLink>
            </li>
          </ul>
        ) : (
          <></>
        )}
        {pathname === "/Contests/l" ? (
          <ul className="Navmoblist" style={{ listStyle: "none" }}>
            <li>
              <NavLink
                to="/Contests/l"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LITERARY
                <img
                  className="PointerCursor"
                  src={click ? dropimg : uparrow}
                  alt=""
                 
                  onClick={handleClick}
                ></img>
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                VOUGUE NATION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/ca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                CLASS APART
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/d"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DANCE
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/m"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                MUSIC
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/at"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                ART TALKIES
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dd"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DIGITAL DEXTERITY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/lca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LIGHTS CAMERA ACTION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/s"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                SPORTS
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/q"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                QUIZ
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dr"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DRAMA
              </NavLink>
            </li>
          </ul>
        ) : (
          <></>
        )}
        {pathname === "/Contests/at" ? (
          <ul className="Navmoblist" style={{ listStyle: "none" }}>
            <li>
              <NavLink
                to="/Contests/at"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                ART TALKIES
                <img
                  className="PointerCursor"
                  src={click ? dropimg : uparrow}
                  alt=""
                 
                  onClick={handleClick}
                ></img>
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                VOUGUE NATION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/ca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                CLASS APART
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/d"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DANCE
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/m"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                MUSIC
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/l"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LITERARY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dd"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DIGITAL DEXTERITY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/lca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LIGHTS CAMERA ACTION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/s"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                SPORTS
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/q"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                QUIZ
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dr"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DRAMA
              </NavLink>
            </li>
          </ul>
        ) : (
          <></>
        )}
        {pathname === "/Contests/dd" ? (
          <ul className="Navmoblist" style={{ listStyle: "none" }}>
            <li>
              <NavLink
                to="/Contests/dd"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DIGITAL DEXTERITY
                <img
                  className="PointerCursor"
                  src={click ? dropimg : uparrow}
                  alt=""
                 
                  onClick={handleClick}
                ></img>
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                VOUGUE NATION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/ca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                CLASS APART
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/d"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DANCE
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/m"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                MUSIC
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/l"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LITERARY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/at"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                ART TALKIES
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/lca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LIGHTS CAMERA ACTION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/s"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                SPORTS
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/q"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                QUIZ
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dr"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DRAMA
              </NavLink>
            </li>
          </ul>
        ) : (
          <></>
        )}
        {pathname === "/Contests/lca" ? (
          <ul className="Navmoblist" style={{ listStyle: "none" }}>
            <li>
              <NavLink
                to="/Contests/lca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LIGHTS CAMERA ACTION
                <img
                  className="PointerCursor"
                  src={click ? dropimg : uparrow}
                  alt=""
                
                  onClick={handleClick}
                ></img>
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                VOUGUE NATION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/ca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                CLASS APART
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/d"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DANCE
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/m"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                MUSIC
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/l"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LITERARY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/at"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                ART TALKIES
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dd"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DIGITAL DEXTERITY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/s"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                SPORTS
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/q"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                QUIZ
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dr"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DRAMA
              </NavLink>
            </li>
          </ul>
        ) : (
          <></>
        )}
        {pathname === "/Contests/s" ? (
          <ul className="Navmoblist" style={{ listStyle: "none" }}>
            <li>
              <NavLink
                to="/Contests/s"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                SPORTS
                <img
                  className="PointerCursor"
                  src={click ? dropimg : uparrow}
                  alt=""
                  
                  onClick={handleClick}
                ></img>
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                VOUGUE NATION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/ca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                CLASS APART
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/d"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DANCE
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/m"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                MUSIC
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/l"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LITERARY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/at"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                ART TALKIES
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dd"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DIGITAL DEXTERITY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/lca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LIGHTS CAMERA ACTION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/q"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                QUIZ
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dr"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DRAMA
              </NavLink>
            </li>
          </ul>
        ) : (
          <></>
        )}
        {pathname === "/Contests/q" ? (
          <ul className="Navmoblist" style={{ listStyle: "none" }}>
            <li>
              <NavLink
                to="/Contests/q"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                QUIZ
                <img
                  className="PointerCursor"
                  src={click ? dropimg : uparrow}
                  alt=""
           
                  onClick={handleClick}
                ></img>
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                VOUGUE NATION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/ca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                CLASS APART
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/d"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DANCE
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/m"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                MUSIC
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/l"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LITERARY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/at"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                ART TALKIES
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dd"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DIGITAL DEXTERITY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/lca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LIGHTS CAMERA ACTION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/s"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                SPORTS
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dr"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DRAMA
              </NavLink>
            </li>
          </ul>
        ) : (
          <></>
        )}
        {pathname === "/Contests/dr" ? (
          <ul className="Navmoblist" style={{ listStyle: "none" }}>
            <li>
              <NavLink
                to="/Contests/dr"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DRAMA
                <img
                  className="PointerCursor"
                  src={click ? dropimg : uparrow}
                  alt=""
                  
                  onClick={handleClick}
                ></img>
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                VOUGUE NATION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/ca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                CLASS APART
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/d"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DANCE
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/m"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                MUSIC
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/l"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LITERARY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/at"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                ART TALKIES
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/dd"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                DIGITAL DEXTERITY
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/lca"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                LIGHTS CAMERA ACTION
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/s"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                SPORTS
              </NavLink>
            </li>
            <li className={click ? "inactive" : "active"}>
              <NavLink
                to="/Contests/q"
                style={{ textDecoration: "none", color:"#1A1A1A" }}    
                  onClick={handleClick}

              >
                QUIZ
              </NavLink>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default NavMobContest;
