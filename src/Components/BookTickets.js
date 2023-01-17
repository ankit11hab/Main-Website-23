import React from 'react'
import Footer from './Footer/Footer'
import Nav from './NavBar/Nav'
import './BookTickets/book.css'

function BookTickets() {
  return (
    <div>
      <div className='navbar'>
        <Nav />
      </div>
      
        <Footer />
    </div>
  )
}

export default BookTickets