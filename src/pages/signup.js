import React from "react";

function Singup() {
  return (
    <>
      <div class="signup-top-dv">
        <a href="/">
          <img
            src={require("../resources/Art_Box_Logo-removebg-preview.png")}
          />
        </a>
        <h3>Create an account</h3>
        <p>
          Already a member? <a href="/signin">Sign in</a>
        </p>
      </div>
      <div class="row signup-row">
        <div class="col col-lg-6 col-md-12 signup-left-col">
          <form class="row g-3" action="/account">
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="First name"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                id="inputPassword4"
                placeholder="Lat name"
              />
            </div>
            <div class="col-12">
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>

            <div class="col-12">
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="Password"
              />
            </div>

            <div class="col-12">
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="Confirm password"
              />
            </div>

            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  By Creating an account , you agree to our{" "}
                  <a href="">User Agreement</a> and acknowledge reading our{" "}
                  <a href="">User Privacy Notice</a>
                </label>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Sign up
              </button>
            </div>
          </form>
        </div>

        <div class="col col-lg-6 col-md-12 signup-right-col">
          <div class="or-dv">
            <span>or</span>
          </div>
          <button class="btn btn-outline-info signup-alt-btn">
            <img
              src={require("../resources/icons/icons8-google.svg")}
              style={{ height: "30px", marginRight: "10px" }}
            />
            Continue with google
          </button>
          <button class="btn btn-primary signup-alt-btn">
            <i
              class="bi bi-facebook"
              style={{ height: "35px", marginRight: "10px" }}
            ></i>
            <span style={{ position: "relative", bottom: "6px" }}>
              Continue with facebook
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Singup;
