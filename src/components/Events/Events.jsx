import React from "react";
import { Link } from "react-router-dom";

function Events() {
  return (
    <div className="events">
      <div className="events__top">
        <Link to='/create-event' className="btn btn-primary">Создать мероприятие</Link>
      </div>
    </div>
  );
}

export default Events;
