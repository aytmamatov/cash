import React from "react";
import { Link } from "react-router-dom";
import "./Header.sass";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__menu">
          <div className="header__group">
            <Link to="events" className="header__link">
              Мероприятия
            </Link>
            <Link to="events" className="header__link">
              Пользователи
            </Link>
            <select className="form-select">
              <option value="Приход">Приход</option>
              <option value="Расход">Расход</option>
              <option value="Отчет">Отчет</option>
            </select>
          </div>
          <div className="header__group">
            <Link to="events" className="header__link">
              Язык
            </Link>
            <button className="btn btn-primary">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
