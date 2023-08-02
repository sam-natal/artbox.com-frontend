import React from "react";

function ExploreCategory() {
  return (
    <div className="sect5-dv">
      <h1 className="sect5-h">Explore more by categories</h1>
      <div className="row">
        <a href="/abstract" className="col-lg-3 col-md-4 col-sm-12 sect5-col">
          <div className="cat-img-dv">
            <img
              className="cat-img"
              src={require("../resources/suti.jpg")}
              style={{
                width: "80%",
                height: "290px",
                border: "10px solid black",
              }}
              alt=''
            />
            <div className="cat-tag-dv">
              <h4>ABSTRACT</h4>
            </div>
          </div>
        </a>

        <a href="/flowers" className="col-lg-3 col-md-4 col-sm-12 sect5-col">
          <div className="cat-img-dv">
            <img
              className="cat-img"
              src={require("../resources/bloom-blossom-flora-62652.jpg")}
              style={{
                width: "80%",
                height: "290px",
                border: "10px solid black",
              }}
              alt=''
            />
            <div className="cat-tag-dv">
              <h4>FLOWERS</h4>
            </div>
          </div>
        </a>

        <a href="/people" className="col-lg-3 col-md-4 col-sm-12 sect5-col">
          <div className="cat-img-dv">
            <img
              className="cat-img"
              src={require("../resources/wal-3143copy2.jpg")}
              style={{
                width: "80%",
                height: "290px",
                border: "10px solid black",
              }}
              alt=''
            />
            <div className="cat-tag-dv">
              <h4>PEOPLE</h4>
            </div>
          </div>
        </a>

        <a href="/animals" className="col-lg-3 col-md-4 col-sm-12 sect5-col">
          <div className="cat-img-dv">
            <div>
              <img
                className="cat-img"
                src={require("../resources/angry-animal-animal-photography-951007.jpg")}
                style={{
                  width: "80%",
                  height: "290px",
                  border: "10px solid black",
                  padding: "0",
                }}
                alt=''
              />
            </div>

            <div className="cat-tag-dv">
              <h4>ANIMALS</h4>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ExploreCategory;
