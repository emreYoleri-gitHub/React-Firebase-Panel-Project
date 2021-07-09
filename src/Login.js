import React from "react";
import { auth, provider } from "./firebase";

const Login = () => {
  const login = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err));
};
  return (
    <div>
      <button className="btn btn-success" onClick={login}>
        Google ile giriş Yap
      </button>
    </div>
  );
};

export default Login;
