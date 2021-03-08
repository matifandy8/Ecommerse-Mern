import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import "./Form.css";
import { userSchema } from "./UserValidation";
import Axios from "axios";
import swal from "sweetalert";

function Form() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };
  const history = useHistory();
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
      }).then((res) => {
        if (res.data == "User Already Exists") {
          return swal("Atención", "User Already Exists", "error");
        }
      });

      // console.log(res));
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
      }).then((res) => {
        if (res.data == "Successfully Authenticated") {
          // redirect
          console.log(formData);

          // store the user in localStorage
          localStorage.setItem("user", JSON.stringify("user exist"));
          history.push("/");
        } else {
          return swal("Atención", "User Not Exists", "error");
        }
      });
    } else {
      swal("Atención", "Debes de llenar los campos", "error");
      alert(isValid);
    }
  };

  return (
    <div className="form">
      <div className="forms">
        <h1>Login</h1>
        <form onSubmit={createUser}>
          <input type="text" placeholder="Username..." />
          <input type="password" placeholder="Password" />
          <input type="submit" className="button" value="Register" />
        </form>

        <form onSubmit={enterUser}>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="submit" className="button" value="Sign in" />
        </form>
        <div className="social">
          <GoogleLogin
            clientId="744012602399-qn4le4lerfa860ggif96vmct9ktja2ap.apps.googleusercontent.com"
            buttonText="Sign in With Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <FacebookLogin
            appId="426805741737613"
            autoLoad={true}
            fields="name,email,picture"
            // onClick={componentClicked}
            callback={responseFacebook}
          />
        </div>
      </div>
    </div>
  );
}
export default Form;
