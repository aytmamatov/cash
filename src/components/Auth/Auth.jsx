import React, { useState } from "react";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";

function Auth() {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <div className="auth">
      <div className="auth-sign">
        {isAuth ? (
          <SignUp isAuth={isAuth} setIsAuth={setIsAuth} />
        ) : (
          <SignIn isAuth={isAuth} setIsAuth={setIsAuth} />
        )}
      </div>
    </div>
  );
}

export default Auth;
