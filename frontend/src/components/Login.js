import React, { useState } from "react";
import "./Login.css";
import Axios from "axios";
import { useForm } from "react-hook-form";

function Login() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);

    // limpiar campos
    e.target.reset();
  };

  const registertwo = () => {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label class="label">Nombre de usuario</label>
        <input
          placeholder="Ingrese nombre de usuario"
          className="form-control mb-2"
          name="usuario"
          ref={register({
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            maxLength: {
              value: 5,
              message: "No más de 5 carácteres!",
            },
            minLength: {
              value: 2,
              message: "Mínimo 2 carácteres",
            },
          })}
        ></input>
        <span className="text-danger text-small d-block mb-2">
          {errors.usuario && errors.usuario.message}
        </span>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
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
            <button onClick={registertwo}>Submit</button>
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
      </form>
      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
      </div>
    </div>
  );
}

export default Login;
