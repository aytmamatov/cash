import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { SIGN_IN_REDUX } from "../../../store/reducers/auth-reducer";
import Preloader from "../../UI/Preloader/Preloader";
import firebase from "./../../../config/fbConfig";
import "./SignIn.sass";

function SignInForm({ isAuth, setIsAuth, handleSubmit, isLoadingError }) {
  return (
    <div className="signIn">
      <form onSubmit={handleSubmit}>
        <div className="signIn__flex">
          <h3>Войти</h3>
          {isLoadingError ? <span className="signIn__error-title" >Пользователь не найден</span> : null}
        </div>
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
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Введите пароль"
            component="input"
            name="password"
          />
        </div>
        <div className="auth-flex">
          <Button variant="primary" type="submit">
            Отправить
          </Button>
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
const SignInFormRedux = reduxForm({ form: "signInForm" })(SignInForm);
const SignIn = ({ isAuth, setIsAuth }) => {
  const [isLoadingSending, setisLoadingSending] = useState(false);
  const [isLoadingError, setisLoadingError] = useState(false);
  const dispatch = useDispatch();
  const sendForm = (data) => {
    setisLoadingSending(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        setisLoadingSending(false);
        dispatch({ type: SIGN_IN_REDUX, data });
      })
      .catch((error) => {
        setisLoadingSending(false);
        setisLoadingError(true);
      });
  };
  return isLoadingSending ? (
    <Preloader />
  ) : (
    <SignInFormRedux
      onSubmit={sendForm}
      isAuth={isAuth}
      setIsAuth={setIsAuth}
      isLoadingError={isLoadingError}
    />
  );
};

export default SignIn;
