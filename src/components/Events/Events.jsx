import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { instance } from "../../api/api";
import Preloader from "../UI/Preloader/Preloader";
import "./Events.sass";
function Events() {
  const [events, setEvents] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    instance
      .get("events.json")
      .then(({ data }) => setEvents(data))
      .then(() => setIsLoading(false));
  }, []);
  return (
    <div className="events">
      <div className="events__top">
        <Link to="/create-event" className="btn btn-primary">
          Создать мероприятие
        </Link>
      </div>
      <div className="events__main">
        {isLoading ? (
          <Preloader title="Загрузка мероприятий" />
        ) : (
          Object.keys(events).map((event) => {
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
        )}
      </div>
    </div>
  );
}

export default Events;
