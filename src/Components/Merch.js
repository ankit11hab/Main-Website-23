import React from 'react'
import Footer from './Footer/Footer'
import Nav from './NavBar/Nav'
import './Merch-coming/Merch.css'
import monster from './Merch-coming/monster.png'
import comingsoon from './Merch-coming/comingsoon.png'
function Merch() {
  return (
    <>
    <div>
        <Nav />
        <div className="Coming-soon">

<div className="coming-soon-text">
    <img src={comingsoon} alt="t"/>
</div>
<div className="coming-soon-monster">
<img src={monster} alt="t"/>

</div>
</div>
        <Footer />
    </div>
    </>
  )
}

export default Merch