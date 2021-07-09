import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import Home from "./Home";
import Login from "./Login";

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  return <div>{user ? <Home user={user} /> : <Login />}</div>;
};

export default App;
