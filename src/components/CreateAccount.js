import React, { useState } from "react";
import "./CreateAccount.css";
import db from "./firebase";
import alertify from "alertifyjs";
const CreateAccount = (props) => {
  const create = (e) => {
    e.preventDefault();
    if (name && email && password && age && address) {
      db.collection("users").add({
        name,
        email,
        password,
        age,
        phoneNum,
        address,
      });
      alertify.success(`${name} Kullanıcısı Oluşturuldu.`, 1);
      setName(null);
      setEmail(null);
      setPassword(null);
      setAge(null);
      setaddress(null);
      setPhoneNum(null);
      props.history.push("/");
    } else {
      alertify.error(`Lütfen Alanların Hepsini Doldurunuz.`, 1);
    }
  };
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [age, setAge] = useState(null);
  const [address, setaddress] = useState(null);
  const [phoneNum, setPhoneNum] = useState(null);
  return (
    <div>
      <div className="registration-form ">
        <form action="" onSubmit={(e) => create(e)}>
          <div className="form-icon">
            <span>
              <i className="icon icon-user"></i>
            </span>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              placeholder="Name"
              autoComplete="off"
              value={name ? name : ""}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control item"
              placeholder="E-Mail"
              autoComplete="off"
              value={email ? email : ""}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control item"
              placeholder="Password"
              autoComplete="off"
              value={password ? password : ""}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control item"
              placeholder="Age"
              autoComplete="off"
              value={age ? age : ""}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control item"
              placeholder="Phone"
              autoComplete="off"
              value={phoneNum ? phoneNum : ""}
              onChange={(e) => setPhoneNum(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control item"
              placeholder="Address"
              autoComplete="off"
              value={address ? address : ""}
              onChange={(e) => setaddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block create-account">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
