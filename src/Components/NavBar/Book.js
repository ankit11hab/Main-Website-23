import React from "react";
import './book.css';
import BookTicketIcon from "./Images/bookticketsicon.svg";

function Book() {
  return (
    <div className="bookticketbtnnav">
      <button type="button" id="bookbtnnav" className="bookbtn">
        <img className="bookicon" src={BookTicketIcon} alt="" />
        <div className="booktextnav" style={{fontSize: '1.2vw'}}>&nbsp; &nbsp; Register</div>
      </button>
    </div>
  );
}

export default Book;
