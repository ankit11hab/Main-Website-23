import React from "react";
import './EventsBook.css';
import BookTicketIcon from "../NavBar/Images/bookticketsicon.svg";

function EventsBook() {
  return (
    <div className="bookticketbtnevents">
      <button type="button" id="bookbtnevents" className="bookbtnevents">
        <img className="bookiconevents" src={BookTicketIcon} alt="" />
        <div className="booktextevents">&nbsp; &nbsp; BOOK&nbsp;TICKETS</div>
      </button>
    </div>
  );
}

export default EventsBook;
