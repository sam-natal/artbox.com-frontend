import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Singup() {
  const navigate = useNavigate();

  const [registerInput, setRegister] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      fname: registerInput.fname,
      lname: registerInput.lname,
      email: registerInput.email,
      password: registerInput.password,
    };

    axios.get("/sanctum/csrf-cookie").then((response) => {
      // console.log(response);+
      axios.post(`/api/register`, data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_name", res.data.username);
          localStorage.setItem("user_id", res.data.userID);
          swal("Success", res.data.message, "success");
          navigate(-2);
        } else {
          setRegister({
            ...registerInput,
            error_list: res.data.validation_errors,
          });
        }
      });
    });
  };

  // Sign in with google code section
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token:" + response.credential);
    console.log(jwt_decode(response.credential));
    navigate("/account");
  }

  /* global google */
  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     client_id:
  //       "694164949025-0cg186cuth8u96jtrel3u6tlj32594jk.apps.googleusercontent.com",
  //     callback: handleCallbackResponse,
  //   });

  //   google.accounts.id.renderButton(document.getElementById("googleSign"), {
  //     theme: "outline",
  //     size: "large",
  //     width: "350px",
  //   });
  // }, []);

  
  return (
    <>
      <div className="signup-top-dv">
        <a href="/">
          <img
            src={require("../resources/Art_Box_Logo-removebg-preview.png")}
            alt=""
          />
        </a>
        <h3>Create an account</h3>
        <p>
          Already a member? <a href="/login">Sign in</a>
        </p>
      </div>
      <div className="row signup-row">
        <div className="col col-lg-6 col-md-12 signup-left-col">
          <form onSubmit={registerSubmit} className="row g-3" action="/account">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="First name"
                name="fname"
                onChange={handleInput}
                value={registerInput.fname}
              />
              <span className="error-alert">
                {registerInput.error_list.fname}
              </span>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Last name"
                name="lname"
                onChange={handleInput}
                value={registerInput.lname}
              />
              <span className="error-alert">
                {registerInput.error_list.lname}
              </span>
            </div>
            <div className="col-12">
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                name="email"
                onChange={handleInput}
                value={registerInput.email}
              />
              <span className="error-alert">
                {registerInput.error_list.email}
              </span>
            </div>

            <div className="col-12">
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
                name="password"
                onChange={handleInput}
                value={registerInput.password}
              />
              <span className="error-alert">
                {registerInput.error_list.password}
              </span>
            </div>

            <div className="col-12">
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Confirm password"
              />
              <span className="error-alert">
                {registerInput.error_list.password}
              </span>
            </div>

            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  By Creating an account , you agree to our{" "}
                  <a href="www.google.com">User Agreement</a> and acknowledge
                  reading our <a href="www.google.com">User Privacy Notice</a>
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
            </div>
          </form>
        </div>

        <div className="col col-lg-6 col-md-12 signup-right-col">
          <div className="or-dv">
            <span>or</span>
          </div>
          <div id="googleSign"></div>

          <div
            className="fb-login-button"
            data-width="350px"
            data-size="large"
            data-button-type="continue_with"
            data-layout="rounded"
            data-auto-logout-link="false"
            data-use-continue-as="true"
            style={{ marginTop: "30px" }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Singup;
