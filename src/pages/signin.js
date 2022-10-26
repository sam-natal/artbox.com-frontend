import React from "react";

function Singin() {
  return (
    <>
      <div class="signup-top-dv">
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

      <div class="row signin-row">
        <div class="col-lg-12 signin-top-col">
          <form class="row g-3" action="/account">
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
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div class="col-lg-12 signin-bottom-col">
          <div class="signin-or-dv">
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

export default Singin;
