import React from "react";
import db from "./firebase";

const User = ({ id, name, surname }) => {
  const deleteUser = () => {
    db.collection("users").doc(id).delete();
  };
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <h4>
          {name} - {surname}
        </h4>
        <button className="btn btn-danger" onClick={deleteUser}>
          Remove
        </button>
      </li>
    </div>
  );
};

export default User;
