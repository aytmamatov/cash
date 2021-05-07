import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, NavDropdown } from "react-bootstrap";
import firebase from "./../../config/fbConfig";
import "./Header.sass";
function Header() {
  const [isExistUser, setIsExistUser] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsExistUser(true);
      }
    });
  }, []);
  const logOutHandler = () => firebase.auth().signOut();
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
            {isExistUser && (
              <Button onClick={logOutHandler} variant="danger">
                Выйти
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
