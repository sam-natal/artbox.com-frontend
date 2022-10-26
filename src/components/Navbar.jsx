import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light fixed-top">
      <div class="container-fluid">
        <a href="/" class="navbar-brand">
          <img
            src={require("../resources/Art_Box_Logo-removebg-preview.png")}
            style={{ height: "43px", width: "200px" }}
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <img
              src={require("../resources/Art_Box_Logo-removebg-preview.png")}
              style={{ height: "43px", width: "200px" }}
            />
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown nav-list">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Themes
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/products">
                      People
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/products">
                      Animals
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/products">
                      Nature
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item nav-list">
                <a class="nav-link active" aria-current="page" href="#">
                  Galleries
                </a>
              </li>
            </ul>
            <form class="d-flex nav-form" role="search"  style={{marginRight: "1rem" }}>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul class="navbar-nav ">
              <li class="nav-item dropdown nav-list">
                <a
                  class="nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ padding: "0", margin: "0 0.5rem" }}
                >
                  <i class="bi bi-telephone" style={{ margin: "0" }}></i>
                </a>
                <ul
                  class="dropdown-menu contact-list"
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

              <li class="nav-item" style={{ margin: "0 0.1rem" }}>
                <a href="/wishlist">
                  <a class="nav-link">
                    <i class="bi bi-heart"></i>
                  </a>
                </a>
              </li>
              <li class="nav-item" style={{ margin: "0 0.1rem" }}>
                <a class="nav-link" href="/signin">
                  <i class="bi bi-person"></i>
                </a>
              </li>
              <li class="nav-item" style={{ margin: "0 0.1rem" }}>
                <a href="/cart">
                  <a class="nav-link">
                    <i class="bi bi-cart4"></i>
                  </a>
                </a>
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
    <div class="video-dv">
      <video width="100%" height="100%" autoPlay loop muted>
        <source src={require("../resources/homeVideo.mp4")} type="video/mp4" />
      </video>
      <a href="/products">
        <button class="explore-btn">Explore now</button>
      </a>
    </div>
  );
}

function FirstHeading() {
  return <h1 class="big-headings">Most wanted arts</h1>;
}

export default Navbar;
export { Navbar, HomeVideo, FirstHeading };
