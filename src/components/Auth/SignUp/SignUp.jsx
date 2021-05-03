import React from "react";
import "./SignUp.sass";

function SignUp() {
  return (
    <div className="signUp auth-sign">
      <form>
        <h3>Регистрация</h3>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Электронный адрес
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Отправить
        </button>
      </form>
    </div>
  );
}

export default SignUp;
