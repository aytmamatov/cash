import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { instance } from "../../api/api";
import "./Events.sass";
function Events() {
  const [events, setEvents] = useState({});
  useEffect(() => {
    instance.get("events.json").then(({ data }) => setEvents(data));
  }, []);
  return (
    <div className="events">
      <div className="events__top">
        <Link to="/create-event" className="btn btn-primary">
          Создать мероприятие
        </Link>
      </div>
      <div className="events__main">
        {Object.keys(events).length > 0
          ? Object.keys(events).map((event) => {
              return (
                <Card key={event} className="event">
                  <div className="event__sidebar">
                    <Card.Title>
                      Мероприятие <b>{events[event].nameEvent}</b>
                    </Card.Title>
                    <Card.Text>
                      Дата {events[event].startTime} / {events[event].endTime}
                    </Card.Text>
                    <Card.Text>Статус: активный</Card.Text>
                  </div>
                  <Link
                    to={`/events/${event}`}
                    className="btn btn-primary event__link-more"
                  >
                    Подробнее
                  </Link>
                </Card>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Events;
