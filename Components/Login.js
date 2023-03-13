import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/Auth";

const LOCAL_STORAGE_KEY = "userslist";

export const Login = () => {
  console.log("hello");
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();

  const userlist = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  const handleSubmit = () => {
    //handle login logic
    const account = userlist.find((user) => user.Username === username);
    if (account && account.Password === password) {
      auth.handleLogin(JSON.parse(localStorage.getItem(username)));
    }
  };

  return (
    <>
      <label>
        Username:-<input onChange={(e) => setUsername(e.target.value)}></input>
      </label>
      <label>
        Password:-<input onChange={(e) => setPassword(e.target.value)}></input>
      </label>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <Link to="/Register">Not a User</Link>
    </>
  );
};
