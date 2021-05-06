import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import firebase from "./../../../config/fbConfig";
import "./SignUp.sass";

const SignUpForm = ({ isAuth, setIsAuth, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="mb-3">Регистрация</h3>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Электронная почта
        </label>
        <Field
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Введите электронную почту"
          component="input"
          name="email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Пароль
        </label>
        <Field
          component="input"
          name="first_password"
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
        <Field
          type="password"
          component="input"
          name="second_password"
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
  );
};

const SignUpReduxForm = reduxForm({ form: "signUpForm" })(SignUpForm);

function SignUp({ isAuth, setIsAuth }) {
  const sendHandler = (value) => {
    if (Object.keys(value).length > 0) {
      if (
        !!value.first_password &&
        value.first_password === value.second_password
      ) {
        if (value.first_password.length >= 6) {
          firebase
            .auth()
            .createUserWithEmailAndPassword(value.email, value.first_password);
        }
      }
    }
  };
  return (
    <div className="signUp">
      <SignUpReduxForm
        onSubmit={sendHandler}
        isAuth={isAuth}
        setIsAuth={setIsAuth}
      />
    </div>
  );
}

export default SignUp;
