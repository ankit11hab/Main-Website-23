import React from 'react'
import logoo from './Images/logoticket.png'
import booktickets from './Images/BOOK TICKETS.png'
import "./Nav.css";

function Button() {
  return (
    <div className='book-ticket'>
        <button id='btnn' >
            <div className="bookbtnn" style={{display:'flex'}}>
                <img src={ logoo } className='logoticket' alt="" />
                <img src={ booktickets } className='booktickets' alt="" />
                {/* <p>BOOK TICKETS</p> */}
            </div>
        </button>
    </div>
  )
}

export default Button