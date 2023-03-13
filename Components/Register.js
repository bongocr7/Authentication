import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/Auth";

const LOCAL_STORAGE_KEY = "userslist";

export const Register = () => {
  console.log("Register");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");

  const [userlist, setUserList] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );

  /* localStorage.clear(); */

  const auth = useAuth();

  const handleSubmit = () => {
    //handle register logic
    const userlistitem = {
      Username: username,
      Password: password,
    };

    const user = {
      Username: username,
      MobileNumber: mobilenumber,
      Cart: [],
      Orders: [],
    };

    localStorage.setItem(username, JSON.stringify(user));
    setUserList([...userlist, userlistitem]);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...userlist, userlistitem])
    );

    console.log(userlist);
    auth.handleLogin(user);
    console.log(auth.user);
  };

  return (
    <>
      <label>
        Username:-<input onChange={(e) => setUsername(e.target.value)}></input>
      </label>
      <label>
        Password:-<input onChange={(e) => setPassword(e.target.value)}></input>
      </label>
      <label>
        Mobile Number:-
        <input onChange={(e) => setMobileNumber(e.target.value)}></input>
      </label>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <Link to="/Login">Already a User?</Link>
    </>
  );
};
