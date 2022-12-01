import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Facebook from "../components/OAuth/Facebook";

function Singin() {

  const navigate = useNavigate();

  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/login`, data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_name", res.data.username);
          swal("Success", res.data.message, "success");
          navigate(-1);
        } else if (res.data.status === 401) {
          swal("Warning", res.data.message, "warning");
        } else {
          setLogin({ ...loginInput, error_list: res.data.validation_errors });
        }
      });
    });
  };

  // Sign in with google code section
  // function handleCallbackResponse(response) {
  //   console.log("Encoded JWT ID token:" + response.credential);
  //   console.log(jwt_decode(response.credential));
  //   navigate("/account");
  // }
  // useEffect(() => {
  //   /* global google */

  //   google.accounts.id.initialize({
  //     client_id:
  //       "694164949025-0cg186cuth8u96jtrel3u6tlj32594jk.apps.googleusercontent.com",
  //     callback: handleCallbackResponse,
  //   });

  //   google.accounts.id.renderButton(document.getElementById("googleSign"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  // }, []);



  return (
    <>
      <div className="signup-top-dv">
        <a href="/">
          <img
            src={require("../resources/Art_Box_Logo-removebg-preview.png")}
          />
        </a>
        <h3>Sign in to creative art box</h3>
        <p>
          Not a member? <a href="/signup">Create account</a>
        </p>
      </div>

      <div className="row signin-row">
        <div className="col-lg-12 signin-top-col">
          <form onSubmit={loginSubmit} className="row g-3">
            <div className="col-12">
              <input
                name="email"
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                onChange={handleInput}
                value={loginInput.email}
              />
              <span className="error-alert">{loginInput.error_list.email}</span>
            </div>

            <div className="col-12">
              <input
                name="password"
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
                onChange={handleInput}
                value={loginInput.password}
              />
              <span className="error-alert">
                {loginInput.error_list.password}
              </span>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className="col-lg-12 signin-bottom-col">
          <div className="signin-or-dv">
            <span>or</span>
          </div>
          {/* <button className="btn btn-outline-info signup-alt-btn">
            <img
              src={require("../resources/icons/icons8-google.svg")}
              style={{ height: "30px", marginRight: "10px" }}
            />
            Continue with google
          </button> */}
            <div id="googleSign"></div>
            <button className="btn btn-primary signup-alt-btn">
            <i
              className="bi bi-facebook"
              style={{ height: "35px", marginRight: "10px" }}
            ></i>
            <span style={{ position: "relative", bottom: "6px" }}>
              Continue with facebook
            </span>
          </button>

          <Facebook />
        </div>
      </div>
    </>
  );
}

export default Singin;
