import React from "react";
import './book.css';
import BookTicketIcon from "./Images/bookticketsicon.svg";

function Book() {
  return (
    <div className="bookticketbtnnav">
      <button type="button" id="bookbtnnav" className="bookbtn">
        <img className="bookicon" src={BookTicketIcon} alt="" />
        <div className="booktextnav">&nbsp; &nbsp; BOOK&nbsp;TICKETS</div>
      </button>
    </div>
  );
}

export default Book;
