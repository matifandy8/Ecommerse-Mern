import React, { useState } from "react";
import "./Login.css";
import Axios from "axios";
import Form from "./Form";

function Login() {
  const [data, setData] = useState(null);

  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  return (
    <div className="login">
      <Form />
      <h1>Get User</h1>
      <button onClick={getUser}>Submit</button>
      {data ? <h1>Welcome Back {data.username}</h1> : null}
    </div>
  );
}

export default Login;
