import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useLocation } from "react-router-dom";

import './NavMob.css';
import dropimg from './Images/downarrow.svg';
import uparrow from './Images/uparrow.svg';
const NavMobContest = () => {
    const location = useLocation();
    const { pathname } = location;
    const [click,setClick]=useState('true');
    const handleClick = (e)=>{
        setClick(!click);
    }
    return ( 
        <div className='overall_nav'>
            <div className='main-nav'>
            {pathname==='/Contests'?
                <ul className="Navmoblist" style={{listStyle: 'none'}}>
                    <li><NavLink to="/Contests" style={{textDecoration: 'none',color:'#1A1A1A',}}>VOUGUE NATION<img src={click?dropimg:uparrow} alt="" style={{cursor:'pointer'}} onClick={handleClick}></img></NavLink></li>
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
                :<></>}
            {pathname==='/Contests/ca'?
                <ul className="Navmoblist" style={{listStyle: 'none'}}>
                    <li className><NavLink to="/Contests/ca" style={{textDecoration: 'none',color:'#1A1A1A',}}>CLASS APART<img src={click?dropimg:uparrow} alt="" style={{cursor:'pointer'}} onClick={handleClick}></img></NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests" style={{textDecoration: 'none',color:'#1A1A1A',}}>VOUGUE NATION</NavLink></li>
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
                :<></>}
            {pathname==='/Contests/d'?
                <ul className="Navmoblist" style={{listStyle: 'none'}}>
                    <li><NavLink to="/Contests/d" style={{textDecoration: 'none',color:'#1A1A1A',}}>DANCE<img src={click?dropimg:uparrow} alt="" style={{cursor:'pointer'}} onClick={handleClick}></img></NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests" style={{textDecoration: 'none',color:'#1A1A1A',}}>VOUGUE NATION</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/ca" style={{textDecoration: 'none',color:'#1A1A1A',}}>CLASS APART</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/m" style={{textDecoration: 'none',color:'#1A1A1A',}}>MUSIC</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/l" style={{textDecoration: 'none',color:'#1A1A1A',}}>LITERARY</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/at" style={{textDecoration: 'none',color:'#1A1A1A',}}>ART TALKIES</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/dd" style={{textDecoration: 'none',color:'#1A1A1A',}}>DIGITAL DEXTERITY</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/lca" style={{textDecoration: 'none',color:'#1A1A1A',}}>LIGHTS CAMERA ACTION</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/s" style={{textDecoration: 'none',color:'#1A1A1A',}}>SPORTS</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/q" style={{textDecoration: 'none',color:'#1A1A1A',}}>QUIZ</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/dr" style={{textDecoration: 'none',color:'#1A1A1A',}}>DRAMA</NavLink></li>
                </ul>  
                :<></>}
            {pathname==='/Contests/m'?
                <ul className="Navmoblist" style={{listStyle: 'none'}}>
                    <li ><NavLink to="/Contests/m" style={{textDecoration: 'none',color:'#1A1A1A',}}>MUSIC<img src={click?dropimg:uparrow} alt="" style={{cursor:'pointer'}} onClick={handleClick}></img></NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests" style={{textDecoration: 'none',color:'#1A1A1A',}}>VOUGUE NATION</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/ca" style={{textDecoration: 'none',color:'#1A1A1A',}}>CLASS APART</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/d" style={{textDecoration: 'none',color:'#1A1A1A',}}>DANCE</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/l" style={{textDecoration: 'none',color:'#1A1A1A',}}>LITERARY</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/at" style={{textDecoration: 'none',color:'#1A1A1A',}}>ART TALKIES</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/dd" style={{textDecoration: 'none',color:'#1A1A1A',}}>DIGITAL DEXTERITY</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/lca" style={{textDecoration: 'none',color:'#1A1A1A',}}>LIGHTS CAMERA ACTION</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/s" style={{textDecoration: 'none',color:'#1A1A1A',}}>SPORTS</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/q" style={{textDecoration: 'none',color:'#1A1A1A',}}>QUIZ</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/dr" style={{textDecoration: 'none',color:'#1A1A1A',}}>DRAMA</NavLink></li>
                </ul>  
                :<></>}
            {pathname==='/Contests/l'?
                <ul className="Navmoblist" style={{listStyle: 'none'}}>
                    <li ><NavLink to="/Contests/l" style={{textDecoration: 'none',color:'#1A1A1A',}}>LITERARY<img src={click?dropimg:uparrow} alt="" style={{cursor:'pointer'}} onClick={handleClick}></img></NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests" style={{textDecoration: 'none',color:'#1A1A1A',}}>VOUGUE NATION</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/ca" style={{textDecoration: 'none',color:'#1A1A1A',}}>CLASS APART</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/d" style={{textDecoration: 'none',color:'#1A1A1A',}}>DANCE</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/m" style={{textDecoration: 'none',color:'#1A1A1A',}}>MUSIC</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/at" style={{textDecoration: 'none',color:'#1A1A1A',}}>ART TALKIES</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/dd" style={{textDecoration: 'none',color:'#1A1A1A',}}>DIGITAL DEXTERITY</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/lca" style={{textDecoration: 'none',color:'#1A1A1A',}}>LIGHTS CAMERA ACTION</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/s" style={{textDecoration: 'none',color:'#1A1A1A',}}>SPORTS</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/q" style={{textDecoration: 'none',color:'#1A1A1A',}}>QUIZ</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/dr" style={{textDecoration: 'none',color:'#1A1A1A',}}>DRAMA</NavLink></li>
                </ul>  
                :<></>} 
                {pathname==='/Contests/at'?
                <ul className="Navmoblist" style={{listStyle: 'none'}}>
                    <li ><NavLink to="/Contests/at" style={{textDecoration: 'none',color:'#1A1A1A',}}>ART TALKIES<img src={click?dropimg:uparrow} alt="" style={{cursor:'pointer'}} onClick={handleClick}></img></NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests" style={{textDecoration: 'none',color:'#1A1A1A',}}>VOUGUE NATION</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/ca" style={{textDecoration: 'none',color:'#1A1A1A',}}>CLASS APART</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/d" style={{textDecoration: 'none',color:'#1A1A1A',}}>DANCE</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/m" style={{textDecoration: 'none',color:'#1A1A1A',}}>MUSIC</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/l" style={{textDecoration: 'none',color:'#1A1A1A',}}>LITERARY</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/dd" style={{textDecoration: 'none',color:'#1A1A1A',}}>DIGITAL DEXTERITY</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/lca" style={{textDecoration: 'none',color:'#1A1A1A',}}>LIGHTS CAMERA ACTION</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/s" style={{textDecoration: 'none',color:'#1A1A1A',}}>SPORTS</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/q" style={{textDecoration: 'none',color:'#1A1A1A',}}>QUIZ</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/dr" style={{textDecoration: 'none',color:'#1A1A1A',}}>DRAMA</NavLink></li>
                </ul>  
                :<></>}
                {pathname==='/Contests/dd'?
                <ul className="Navmoblist" style={{listStyle: 'none'}}>
                    <li ><NavLink to="/Contests/dd" style={{textDecoration: 'none',color:'#1A1A1A',}}>DIGITAL DEXTERITY<img src={click?dropimg:uparrow} alt="" style={{cursor:'pointer'}} onClick={handleClick}></img></NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests" style={{textDecoration: 'none',color:'#1A1A1A',}}>VOUGUE NATION</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/ca" style={{textDecoration: 'none',color:'#1A1A1A',}}>CLASS APART</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/d" style={{textDecoration: 'none',color:'#1A1A1A',}}>DANCE</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/m" style={{textDecoration: 'none',color:'#1A1A1A',}}>MUSIC</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/l" style={{textDecoration: 'none',color:'#1A1A1A',}}>LITERARY</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/at" style={{textDecoration: 'none',color:'#1A1A1A',}}>ART TALKIES</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/lca" style={{textDecoration: 'none',color:'#1A1A1A',}}>LIGHTS CAMERA ACTION</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/s" style={{textDecoration: 'none',color:'#1A1A1A',}}>SPORTS</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/q" style={{textDecoration: 'none',color:'#1A1A1A',}}>QUIZ</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/dr" style={{textDecoration: 'none',color:'#1A1A1A',}}>DRAMA</NavLink></li>
                </ul>  
                :<></>}
                {pathname==='/Contests/lca'?
                <ul className="Navmoblist" style={{listStyle: 'none'}}>
                    <li ><NavLink to="/Contests/lca" style={{textDecoration: 'none',color:'#1A1A1A',}}>LIGHTS CAMERA ACTION<img src={click?dropimg:uparrow} alt="" style={{cursor:'pointer'}} onClick={handleClick}></img></NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests" style={{textDecoration: 'none',color:'#1A1A1A',}}>VOUGUE NATION</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/ca" style={{textDecoration: 'none',color:'#1A1A1A',}}>CLASS APART</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/d" style={{textDecoration: 'none',color:'#1A1A1A',}}>DANCE</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/m" style={{textDecoration: 'none',color:'#1A1A1A',}}>MUSIC</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/l" style={{textDecoration: 'none',color:'#1A1A1A',}}>LITERARY</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/at" style={{textDecoration: 'none',color:'#1A1A1A',}}>ART TALKIES</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/dd" style={{textDecoration: 'none',color:'#1A1A1A',}}>DIGITAL DEXTERITY</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/s" style={{textDecoration: 'none',color:'#1A1A1A',}}>SPORTS</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/q" style={{textDecoration: 'none',color:'#1A1A1A',}}>QUIZ</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/dr" style={{textDecoration: 'none',color:'#1A1A1A',}}>DRAMA</NavLink></li>
                </ul>  
                :<></>}
                {pathname==='/Contests/s'?
                <ul className="Navmoblist" style={{listStyle: 'none'}}>
                    <li ><NavLink to="/Contests/s" style={{textDecoration: 'none',color:'#1A1A1A',}}>SPORTS<img src={click?dropimg:uparrow} alt="" style={{cursor:'pointer'}} onClick={handleClick}></img></NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests" style={{textDecoration: 'none',color:'#1A1A1A',}}>VOUGUE NATION</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/ca" style={{textDecoration: 'none',color:'#1A1A1A',}}>CLASS APART</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/d" style={{textDecoration: 'none',color:'#1A1A1A',}}>DANCE</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/m" style={{textDecoration: 'none',color:'#1A1A1A',}}>MUSIC</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/l" style={{textDecoration: 'none',color:'#1A1A1A',}}>LITERARY</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/at" style={{textDecoration: 'none',color:'#1A1A1A',}}>ART TALKIES</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/dd" style={{textDecoration: 'none',color:'#1A1A1A',}}>DIGITAL DEXTERITY</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/lca" style={{textDecoration: 'none',color:'#1A1A1A',}}>LIGHTS CAMERA ACTION</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/q" style={{textDecoration: 'none',color:'#1A1A1A',}}>QUIZ</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/dr" style={{textDecoration: 'none',color:'#1A1A1A',}}>DRAMA</NavLink></li>
                </ul>  
                :<></>}
                {pathname==='/Contests/q'?
                <ul className="Navmoblist" style={{listStyle: 'none'}}>
                    <li ><NavLink to="/Contests/q" style={{textDecoration: 'none',color:'#1A1A1A',}}>QUIZ<img src={click?dropimg:uparrow} alt="" style={{cursor:'pointer'}} onClick={handleClick}></img></NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests" style={{textDecoration: 'none',color:'#1A1A1A',}}>VOUGUE NATION</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/ca" style={{textDecoration: 'none',color:'#1A1A1A',}}>CLASS APART</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/d" style={{textDecoration: 'none',color:'#1A1A1A',}}>DANCE</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/m" style={{textDecoration: 'none',color:'#1A1A1A',}}>MUSIC</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/l" style={{textDecoration: 'none',color:'#1A1A1A',}}>LITERARY</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/at" style={{textDecoration: 'none',color:'#1A1A1A',}}>ART TALKIES</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/dd" style={{textDecoration: 'none',color:'#1A1A1A',}}>DIGITAL DEXTERITY</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/lca" style={{textDecoration: 'none',color:'#1A1A1A',}}>LIGHTS CAMERA ACTION</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/s" style={{textDecoration: 'none',color:'#1A1A1A',}}>SPORTS</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/dr" style={{textDecoration: 'none',color:'#1A1A1A',}}>DRAMA</NavLink></li>
                </ul>  
                :<></>}
                {pathname==='/Contests/dr'?
                <ul className="Navmoblist" style={{listStyle: 'none'}}>
                    <li ><NavLink to="/Contests/dr" style={{textDecoration: 'none',color:'#1A1A1A',}}>DRAMA<img src={click?dropimg:uparrow} alt="" style={{cursor:'pointer'}} onClick={handleClick}></img></NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests" style={{textDecoration: 'none',color:'#1A1A1A',}}>VOUGUE NATION</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/ca" style={{textDecoration: 'none',color:'#1A1A1A',}}>CLASS APART</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/d" style={{textDecoration: 'none',color:'#1A1A1A',}}>DANCE</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/m" style={{textDecoration: 'none',color:'#1A1A1A',}}>MUSIC</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/l" style={{textDecoration: 'none',color:'#1A1A1A',}}>LITERARY</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/at" style={{textDecoration: 'none',color:'#1A1A1A',}}>ART TALKIES</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/dd" style={{textDecoration: 'none',color:'#1A1A1A',}}>DIGITAL DEXTERITY</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/lca" style={{textDecoration: 'none',color:'#1A1A1A',}}>LIGHTS CAMERA ACTION</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/s" style={{textDecoration: 'none',color:'#1A1A1A',}}>SPORTS</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Contests/q" style={{textDecoration: 'none',color:'#1A1A1A',}}>QUIZ</NavLink></li>
                </ul>  
                :<></>}  
            </div>
        </div>

    );
}

export default NavMobContest;