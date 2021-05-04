import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.sass";

function SignUp({ isAuth, setIsAuth }) {
  return (
    <div className="signUp">
      <form>
        <h3 className="mb-3">Регистрация</h3>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Электронная почта
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Введите электронную почту"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Пароль
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Введите пароль"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Повторите пароль
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Повторите пароль"
          />
        </div>
        <div className="auth-flex">
          <button type="submit" className="btn btn-primary">
            Отправить
          </button>
          {isAuth ? (
            <Link onClick={() => setIsAuth(false)} to="/signIn">
              Войти
            </Link>
          ) : (
            <Link onClick={() => setIsAuth(true)} to="/signUp">
              Зарегистрироваться
            </Link>
          )}
        </div>
      </form>
    </div>
  );
}

export default SignUp;