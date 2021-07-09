import React, { useState } from "react";
import { useEffect } from "react";
import db, { auth } from "./firebase";
import User from "./User";

const Home = ({ user }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const add = (e) => {
    e.preventDefault();
    db.collection("users").add({
      name,
      surname,
    });
    setName("");
    setSurname("");
  };
  return (
    <div className="container">
      <h2>Hoşgeldiniz {user.displayName}</h2>
      <button className="btn btn-danger" onClick={() => auth.signOut()}>
        Çıkış Yap
      </button>
      <div className="input-group mt-3">
        <input
          type="text"
          className="form-control"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={surname}
          placeholder="Surname"
          onChange={(e) => setSurname(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={add}
        >
          Add
        </button>
      </div>

      <ol className="list-group list-group-numbered mt-2">
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            id={user.id}
            name={user.data.name}
            surname={user.data.surname}
          />
        ))}
      </ol>
    </div>
  );
};

export default Home;
