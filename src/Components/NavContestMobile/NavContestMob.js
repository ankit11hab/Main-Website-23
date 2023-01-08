import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useLocation } from "react-router-dom";

import './NavMob.css';
import dropimg from './Images/downarrow.svg';
import uparrow from './Images/uparrow.svg';
const NavMobContest = () => {
    const [click,setClick]=useState('true');
    const handleClick = (e)=>{
        setClick(!click);
    }
    return ( 
        <div className='overall_nav'>
            <div className='main-nav'>
                <ul className="Navmoblist" style={{listStyle: 'none'}}>
                    <li>MODULES<img src={click?dropimg:uparrow} alt="" style={{cursor:'pointer'}} onClick={handleClick}></img></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests" style={{textDecoration: 'none',color:'#1A1A1A',}}><b>VOUGUE NATION</b></NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/ca" style={{textDecoration: 'none',color:'#1A1A1A',}}>CLASS APART</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/d" style={{textDecoration: 'none',color:'#1A1A1A',}}>DANCE</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/m" style={{textDecoration: 'none',color:'#1A1A1A',}}>MUSIC</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/l" style={{textDecoration: 'none',color:'#1A1A1A',}}>LITERARY</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/at" style={{textDecoration: 'none',color:'#1A1A1A',}}>ART TALKIES</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/dd" style={{textDecoration: 'none',color:'#1A1A1A',}}>DIGITAL DEXTERITY</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/lca" style={{textDecoration: 'none',color:'#1A1A1A',}}>LIGHTS CAMERA ACTION</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/s" style={{textDecoration: 'none',color:'#1A1A1A',}}>SPORTS</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/q" style={{textDecoration: 'none',color:'#1A1A1A',}}>QUIZ</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/dr" style={{textDecoration: 'none',color:'#1A1A1A',}}>DRAMA</NavLink></li>
                </ul>               
            </div>
        </div>

    );
}

export default NavMobContest;