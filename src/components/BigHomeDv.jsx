import React from "react";
import HomeCarousel from "./RecentArtCarousel";
function BigHomeDv() {
  return (
    <div className="sect2-dv">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-lg-6 ">
          <div className="recent-cont">
            <HomeCarousel />

            <div className="recent-div">
              <h4>Recent art works</h4>
              <p>Currently released products from our artist.</p>
              <a href="/arts">
                View all here &nbsp; &gt;
              </a>
            </div>
          </div>

          <div
            style={{
              height: "300px",
              margin: "3% 0",
              textAlign: "center",
              padding: "4%",
            }}
          >
            <h2 className="promise-h">Our Promise</h2>
            <h3 style={{ margin: "3% 0 3% 0" }}>
              100% Satisfaction guarantee to our customers.
            </h3>
            <p>
              We want you to get exactly what you want. If you don’t, we’ll
              happily issue you a full refund—no questions asked.
            </p>
          </div>
        </div>

        <div className="col col-lg-6 col-sm-12">
          <div style={{ height: "300px", margin: "1% 0" }}>
            <img
              className="curated-img"
              src={require("../resources/a-girl.jpg")}
              style={{ width: "60%", height: "300px", marginBottom:"60px" }}
              alt=''
            />
            <h2 className="curated-h">Curated artwork chosen by our community.</h2>
          </div>

          <div className="enquire-cont">
            <img
              className="enquire-img"
              src={require("../resources/custom-enquire.jpg")}
              alt=''
            />
            <div className="customize-dv">
              <p>
                Want to have your own specific art, format, frame, finishing
                touches etc ?
              </p>
              <a href=" https://wa.me/0767952016">
              <button
                className="btn btn-outline-dark"
                style={{ fontWeight: "bold" }}
              >
                Check with our artist{" "}
                <i className="bi bi-chevron-right" style={{ all: "revert" }}></i>
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigHomeDv;
