import React, { useState } from "react";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { panelActions } from "../redux/actions";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { getUsers, selectUser } = bindActionCreators(panelActions, dispatch);
  const users = useSelector((state) => state.panelReducer.users);
  useEffect(async () => {
    await getUsers();
  }, []);

  const submitHandler =  (e) => {
    e.preventDefault();
    users.map(async(user) => {
      if (user.email == email && user.password == password) {
        await selectUser(user);
       props.history.push("/home")
      }
    });
  };
 /*  const login = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err));
  }; */
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1 mx-auto">
          <h3>Login Panel</h3>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group my-2">
              <input
                type="password"
                className="form-control"
                placeholder="Your Password *"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
            <div className="form-group">
              <a href="/createAccount" className="ForgetPwd">
                Create Account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
