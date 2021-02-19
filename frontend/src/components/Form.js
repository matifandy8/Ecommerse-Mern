import React from "react";
import "./Form.css";
import { userSchema } from "./UserValidation";
import Axios from "axios";
import swal from "sweetalert";

function Form() {
  const createUser = async (event) => {
    event.preventDefault();
    let formData = {
      username: event.target[0].value,
      password: event.target[1].value,
    };
    const isValid = await userSchema.isValid(formData);
    console.log(formData);
    console.log(isValid);
    if (isValid == true) {
      Axios({
        method: "POST",
        data: {
          username: formData.username,
          password: formData.password,
        },
        withCredentials: true,
        url: "http://localhost:5000/register",
      }).then((res) => console.log(res));
    } else {
      swal("Atención", "Debes de llenar los campos", "error");
      alert(isValid);
    }
  };
  const enterUser = async (event) => {
    event.preventDefault();
    let formData = {
      username: event.target[0].value,
      password: event.target[1].value,
    };
    const isValid = await userSchema.isValid(formData);
    console.log(formData);
    console.log(isValid);
    if (isValid == true) {
      Axios({
        method: "POST",
        data: {
          username: event.target[0].value,
          password: event.target[1].value,
        },
        withCredentials: true,
        url: "http://localhost:5000/login",
      }).then((res) => alert(res.data));
    } else {
      swal("Atención", "Debes de llenar los campos", "error");
      alert(isValid);
    }
  };

  return (
    <div className="form">
      <div className="forms">
        <form onSubmit={createUser}>
          <input type="text" placeholder="Username..." />
          <input type="text" placeholder="Password" />
          <input type="submit" className="button" value="Register" />
        </form>

        <form onSubmit={enterUser}>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <input type="submit" className="button" value="Sign in" />
        </form>
      </div>
    </div>
  );
}
export default Form;
