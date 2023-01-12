import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useLocation } from "react-router-dom";

import './NavMob.css';
import dropimg from './Images/downarrow.svg';
import uparrow from './Images/uparrow.svg';
const NavMob = () => {
    const location = useLocation();
    const { pathname } = location;
    const [click,setClick]=useState('true');
    const handleClick = (e)=>{
        setClick(!click);
    }
    return ( 
        <div className='overall_nav'>
            <div className='main-nav'>
                {pathname==='/Events'?
                <ul className="Navmoblist" style={{listStyle: 'none'}}>
                    <li><NavLink to="/Events" style={{textDecoration: 'none',color:'#F35C41'}}>PRONITES</NavLink><img src={click?dropimg:uparrow} alt="" style={{cursor:'pointer'}} onClick={handleClick}></img></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Events/cc" style={{textDecoration: 'none',color:'#1A1A1A',}} >CREATORS CAMP</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Events/hf" style={{textDecoration: 'none',color:'#1A1A1A'}} >HUMOUR FEST</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Events/ps" style={{textDecoration: 'none',color:'#1A1A1A'}} >PROSHOWS</NavLink></li>
                </ul>
                :<></>}
                {pathname==='/Events/cc'?
                <ul className="Navmoblist" style={{listStyle: 'none'}}>
                    <li><NavLink to="/Events/cc" style={{textDecoration: 'none',color:'#F35C41',}} >CREATORS CAMP</NavLink><img src={click?dropimg:uparrow} alt="" style={{cursor:'pointer'}} onClick={handleClick}></img></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Events" style={{textDecoration: 'none',color:'#1A1A1A'}}>PRONITES</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Events/hf" style={{textDecoration: 'none',color:'#1A1A1A'}} >HUMOUR FEST</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Events/ps" style={{textDecoration: 'none',color:'#1A1A1A'}} >PROSHOWS</NavLink></li>
                </ul>
                :<></>}
                {pathname==='/Events/hf'?
                <ul className="Navmoblist" style={{listStyle: 'none'}}>
                    <li><NavLink to="/Events/hf" style={{textDecoration: 'none',color:'#1A1A1A'}} >HUMOUR FEST</NavLink><img src={click?dropimg:uparrow} alt="" style={{cursor:'pointer'}} onClick={handleClick}></img></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Events" style={{textDecoration: 'none',color:'#1A1A1A'}}>PRONITES</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Events/cc" style={{textDecoration: 'none',color:'#1A1A1A',}} >CREATORS CAMP</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Events/ps" style={{textDecoration: 'none',color:'#1A1A1A'}} >PROSHOWS</NavLink></li>
                </ul>
                :<></>}
                 {pathname==='/Events/ps'?
                <ul className="Navmoblist" style={{listStyle: 'none'}}>
                    <li><NavLink to="/Events/ps" style={{textDecoration: 'none',color:'#1A1A1A'}} >PROSHOWS</NavLink><img src={click?dropimg:uparrow} alt="" style={{cursor:'pointer'}} onClick={handleClick}></img></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Events" style={{textDecoration: 'none',color:'#1A1A1A'}}>PRONITES</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Events/cc" style={{textDecoration: 'none',color:'#1A1A1A',}} >CREATORS CAMP</NavLink></li>
                    <li className={click?'inactive':'active'}><NavLink to="/Events/hf" style={{textDecoration: 'none',color:'#1A1A1A'}} >HUMOUR FEST</NavLink></li>
                </ul>
                :<></>}
            </div>
        </div>

    );
}

export default NavMob;