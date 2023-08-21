import React from "react";

function EmailSubscribe() {
  return (
    <div className="sect6-dv">
      <div className="para-dv">
        <p>
          Subscribe to our mailing list to let you know what might be important
          from us.
        </p>
      </div>
      <div className="email-dv">
        <form>
          <input type="email" placeholder="Email address" />
          <button className="btn btn-success" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="row">
        <div
          className="col Help"
          style={{ textAlign: "left", paddingLeft: "10%" }}
        >
          <ul className="navbar-nav">
            <h5>Help</h5>
            <li>
              <a href="#foo">About Us</a>
            </li>
            <li>
              <a href="#foo">Live Chat</a>
            </li>
            <li>
              <a href="#foo">Contact</a>
            </li>
            <li>
              <a href="#foo">FAQ</a>
            </li>
          </ul>
        </div>

        <div
          className="col social-medias-l"
          style={{ textAlign: "left", paddingLeft: "15%" }}
        >
          <ul className="navbar-nav">
            <h5>Connect with us</h5>
            <li>
              <a href="https://www.facebook.com">
                <i className="bi bi-facebook" style={{ color: "blue" }}></i>
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <i className="bi bi-instagram" style={{ color: "#f35e00" }}></i>
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i className="bi bi-twitter" style={{ color: "black" }}></i>
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com">
                <i className="bi bi-pinterest" style={{ color: "#b7081b" }}></i>
                Pinterest
              </a>
            </li>
          </ul>
        </div>

        <div
          className="col business"
          style={{ textAlign: "left", paddingLeft: "10%" }}
        >
          <ul className="navbar-nav">
            <h5>Business</h5>
            <li>
              <a href="#foo">Legal Info</a>
            </li>
            <li>
              <a href="#foo">Privacy Policy</a>
            </li>
            <li>
              <a href="#foo">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />

      <p className="copyright-p">
        &copy; Copyright {new Date().getFullYear()} artbox.com ,All rights
        reserved.
      </p>
      <div className="social-medias-s">
        <a href="https://www.facebook.com">
          <i className="bi bi-facebook" style={{ color: "blue" }}></i>
        </a>
        <a href="https://www.instagram.com">
          <i className="bi bi-instagram" style={{ color: "#f35e00" }}></i>
        </a>
        <a href="https://www.twitter.com">
          <i className="bi bi-twitter" style={{ color: "black" }}></i>
        </a>
        <a href="https://www.pinterest.com">
          <i className="bi bi-pinterest" style={{ color: "#b7081b" }}></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
export { Footer, EmailSubscribe };
