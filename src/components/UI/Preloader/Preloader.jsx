import React from "react";
import { Spinner } from "react-bootstrap";
import "./Preloader.sass";

function Preloader({ title = "Загрузка данных", animation = "border" }) {
  return (
    <div className="preloader">
      <h3 className="preloader__title">{title}</h3>
      <Spinner animation={animation} role="status"></Spinner>
    </div>
  );
}

export default Preloader;
