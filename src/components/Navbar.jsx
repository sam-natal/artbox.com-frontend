import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate, useLocation } from "react-router-dom";

/*global FB*/

function Navbar(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const uID = localStorage.getItem("user_id");
  const facebookID = localStorage.getItem("fb_id");
  const uName = localStorage.getItem("auth_name");
  const facebookName = localStorage.getItem("fb_name");
  //var [counter, setCounter] = useState(localStorage.getItem("cart_count"));
  var [counter, setCounter] = useState(
    JSON.parse(localStorage.getItem("cart" + uID) || "[]").length
  );

  setInterval(GetCounter, 500);
  function GetCounter() {
    if (uID) {
      setCounter(JSON.parse(localStorage.getItem("cart" + uID) || "[]").length);
    } else {
      setCounter(JSON.parse(localStorage.getItem("guest_cart") || "[]").length);
    }
  }

  const logoutSubmit = (e) => {
    e.preventDefault();

    axios.post(`/api/logout`).then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");
        localStorage.removeItem("user_id");
        swal("Success", res.data.message, "success");
        navigate(location);
      }
    });

    localStorage.removeItem("fb_id");
    localStorage.removeItem("fb_name");
    FB.logout();
    swal("Success", "Successful logged out.", "success");
    navigate(location);
  };

  var authButton = "";
  if (uID || facebookID) {
    authButton = (
      <>
        <li>
          <a
            className="nav-link"
            href="/account"
            style={{ fontWeight: "bold" }}
          >
            Account
          </a>
        </li>
        <hr style={{ margin: "0" }} />
        <li>
          <div
            onClick={logoutSubmit}
            className="nav-link"
            style={{ fontWeight: "bold", cursor: "pointer" }}
          >
            logout
          </div>
        </li>
      </>
    );
  } else {
    authButton = (
      <>
        <li>
          <a className="nav-link" href="/login" style={{ fontWeight: "bold" }}>
            Account
          </a>
        </li>
      </>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <img
            src={require("../resources/Art_Box_Logo-removebg-preview.png")}
            style={{ height: "43px", width: "200px" }}
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <img
              src={require("../resources/Art_Box_Logo-removebg-preview.png")}
              style={{ height: "43px", width: "200px" }}
              alt=""
            />
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item nav-list">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item nav-list">
                <a className="nav-link active" aria-current="page" href="/arts">
                  Arts
                </a>
              </li>
            </ul>
            <form
              className="d-flex nav-form w-75"
              role="search"
              style={{ marginRight: "1rem" }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="search"
              />
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  var key = document.getElementById("search").value;
                  localStorage.setItem("search_key", key ? key : null);
                  navigate("/search");
                }}
              >
                Search
              </button>
            </form>
            <ul className="navbar-nav ">
              <li className="nav-item dropdown nav-list">
                <div
                  className="nav-link dropdown-toggle "
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ padding: "0", margin: "0 0.5rem" }}
                >
                  <i className="bi bi-telephone" style={{ margin: "0" }}></i>
                </div>
                <ul
                  className="dropdown-menu contact-list"
                  style={{ padding: "9px", width: "250px" }}
                >
                  <li>
                    Call:
                    <label style={{ float: "right", fontWeight: "bold" }}>
                      +(255)719-095-110
                    </label>
                  </li>
                  <li>
                    WhatsApp:
                    <label style={{ float: "right", fontWeight: "bold" }}>
                      +(255)719-095-110
                    </label>
                  </li>
                  <li>
                    Email:
                    <label style={{ float: "right", fontWeight: "bold" }}>
                      ochu@gmail.com
                    </label>
                  </li>
                  <li style={{ textAlign: "center", margin: "9px 0" }}>
                    Mon-Sat 10am to 7pm EST
                  </li>
                </ul>
              </li>

              <li className="nav-item" style={{ margin: "0 0.1rem" }}>
                <a href="/wishlist" className="nav-link">
                  <div className="tooltp">
                    <i className="bi bi-heart"></i>
                    <span className="wish-nav-tltptxt">Wishlist</span>
                  </div>
                </a>
              </li>

              <li className="nav-item dropdown nav-list">
                <div
                  className="nav-link dropdown-toggle "
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ padding: "0", margin: "0 0.5rem" }}
                >
                  {/* <i className="bi bi-telephone" style={{ margin: "0" }}></i> */}
                  <i className="bi bi-person" style={{ margin: "0" }}></i>
                  {uName ? uName : facebookName}
                </div>
                <ul
                  className="dropdown-menu contact-list"
                  style={{ padding: "9px", width: "200px" }}
                >
                  {authButton}
                </ul>
              </li>

              <li className="nav-item" style={{ margin: "0 0.1rem" }}>
                <a className="nav-link" href="/cart">
                  <div className="tooltp">
                    <i className="bi bi-cart4"></i>
                    <span className="cart-nav-tltptxt">Cart</span>
                  </div>
                </a>

                <div className="cart-counter">{counter}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HomeVideo() {
  return (
    <div className="video-dv">
      <video width="100%" height="100%" autoPlay loop muted>
        <source src={require("../resources/homeVideo.mp4")} type="video/mp4" />
      </video>
      <a href="/arts">
        <button className="explore-btn">Explore now</button>
      </a>
    </div>
  );
}

function FirstHeading() {
  return <h1 className="big-headings">Most wanted arts</h1>;
}

export default Navbar;
export { Navbar, HomeVideo, FirstHeading };
