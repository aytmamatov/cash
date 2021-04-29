import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/js/dist/dropdown";
import "./Header.sass";
import { NavDropdown } from "react-bootstrap";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__menu">
          <div className="header__group">
            <Link to="events" className="header__link">
              Мероприятия
            </Link>
            <Link to="users" className="header__link">
              Пользователи
            </Link>
            <NavDropdown
              title="Сведения о денежных средствах"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/приход">Приход</NavDropdown.Item>
              <NavDropdown.Item href="/расход">Расход</NavDropdown.Item>
              <NavDropdown.Item href="/отчет">Отчет</NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className="header__group">
            <Link to="language" className="header__link">
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
