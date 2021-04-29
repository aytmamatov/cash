import React from "react";
import { Button, Form } from "react-bootstrap";
import "./CreateEvent.sass";
function CreateEvent() {
  return (
    <div className="create-event">
      <h2 className="create-event__heading">Создание мероприятия</h2>
      <Form className="create-event__form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Наименование мероприятия</Form.Label>
          <Form.Control
            type="email"
            placeholder="Введите название мероприятия"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Срок начала мероприятия</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Срок окончания мероприятия</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
    
        <div className="create-event__buttons">
          <Button variant="success" type="submit">
            Сохранить
          </Button>
          <Button variant="danger" type="submit">
            Отмена
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateEvent;
