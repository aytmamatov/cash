import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { instance } from "../../../api/api";
import { SEND_EVENT } from "./../../../store/reducers/createEvent-reducer";
import "./CreateEvent.sass";

const EventForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit} className="create-event__form">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Наименование мероприятия</Form.Label>
        <Field
          component="input"
          type="text"
          name="nameEvent"
          placeholder="Введите название мероприятия"
          className="form-control"
        ></Field>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Срок начала мероприятия</Form.Label>
        <Field
          component="input"
          name="startTime"
          className="form-control"
          type="date"
        ></Field>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Срок окончания мероприятия</Form.Label>
        <Field
          component="input"
          name="endTime"
          className="form-control"
          type="date"
        ></Field>
      </Form.Group>

      <Button variant="success" type="submit">
        Отправить
      </Button>
    </Form>
  );
};
const EventReduxForm = reduxForm({ form: "eventForm" })(EventForm);
function CreateEvent() {
  const [event, setEvent] = useState({
    nameEvent: "",
    startTime: "",
    endTime: "",
    status: "active",
    numberEvent: 0,
  });
  const dispatch = useDispatch();
  const saveForm = (values) => {
    setEvent({ ...event, ...values });
    dispatch({ type: SEND_EVENT, values });
    return () => instance.post("/events.json", event);
  };
  return (
    <div className="create-event">
      <h2 className="create-event__heading">Создание мероприятия</h2>
      <EventReduxForm onSubmit={saveForm} />
    </div>
  );
}
export default CreateEvent;
