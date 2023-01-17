import React from 'react'
import Footer from './Footer/Footer'
import Nav from './NavBar/Nav'
import MerchPart from './MerchPart/merchpart.jsx'
import './MerchPart/merchPart.css'

function Merch() {
  return (
		<div>
			<div className="navbar">
				<Nav />
			</div>
			<MerchPart />
			<Footer />
		</div>
	);
}

export default Merch