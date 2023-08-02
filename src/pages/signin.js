import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

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
          localStorage.setItem("user_id", res.data.userID);
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
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token:" + response.credential);
    console.log(jwt_decode(response.credential));
    navigate("/account");
  }

 
  // useEffect(() => {
  //    /* global google */
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
            alt=""
          />
        </a>
        <h3>Sign in to creative art box</h3>
        <p>
          Not a member? <a href="/register">Create account</a>
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
            onLogin={() => {
              //alert("hi there...");
              /* global FB */
              // FB.login(function(response) {
              //   if (response.authResponse) {
              //     FB.api("/me", function(response) {
              //       localStorage.setItem("fb_id", response.id);
              //       localStorage.setItem("fb_name", response.name);
              //       navigate(-1);
              //     });
                  
              //     //window.location.replace("https://localhost:3000/");
              //   } else {
              //     console.log(
              //       "User cancelled login or did not fully authorize."
              //     );
              //   }
              // });
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Singin;
