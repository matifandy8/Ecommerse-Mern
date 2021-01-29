import React, { useState } from "react";
import "./Login.css";
import Axios from "axios";

function Login() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
  };
  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res));
  };
  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  return (
    <div className="login">
      <div className="login__register">
        <h1>Register</h1>
        <div className="login__row">
          <input
            placeholder="Username"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
        </div>
        <div className="login__row">
          <input
            placeholder="Password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button onClick={register}>Submit</button>
        </div>
      </div>

      <div className="login__login">
        <h1>Login</h1>
        <div className="login__row">
          <input
            placeholder="Username"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
        </div>
        <div className="login__row">
          <input
            placeholder="Password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <button onClick={login}>Submit</button>
      </div>

      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
      </div>
    </div>
  );
}

export default Login;
