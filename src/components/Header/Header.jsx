import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import "./Header.sass";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__menu">
          <div className="header__group">
            <Link to="/events" className="header__link">
              Мероприятия
            </Link>
            <Link to="/users" className="header__link">
              Пользователи
            </Link>
            <NavDropdown
              title="Сведения о денежных средствах"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/приход">Приход</NavDropdown.Item>
              <NavDropdown.Item href="/расход">Расход</NavDropdown.Item>

              <NavDropdown
                drop="right"
                title="Отчет"
                id="basic-nav-dropdown-right"
                className="header__dropdown-right"
              >
                <NavDropdown.Item href="/приход по мероприятиям">
                  Приход по мероприятиям
                </NavDropdown.Item>
                <NavDropdown.Item href="/расход по мероприятиям">
                  Расход по мероприятиям
                </NavDropdown.Item>
                <NavDropdown.Item href="/общие сведения по мероприятиям">
                  Общие сведения по мероприятиям
                </NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
          </div>
          <div className="header__group">
            <Link to="/language" className="header__link">
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
