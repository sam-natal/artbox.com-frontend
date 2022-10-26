import React from "react";

function ExploreCategory() {
  return (
    <div class="sect5-dv">
      <h1 class="sect5-h">Explore more by categories</h1>
      <div class="row">
        <a href="/products" class="col-lg-3 col-md-4 col-sm-12 sect5-col">
          <img
            class="cat-img"
            src={require("../resources/girl-walking-wall-32246.jpg")}
            style={{ width: "100%", height: "350px" }}
          />
          <div class="cat-tag-dv">
            <h4>ABSTRACT</h4>
          </div>
        </a>

        <a href="/products" class="col-lg-3 col-md-4 col-sm-12 sect5-col">
          <img
            class="cat-img"
            src={require("../resources/bloom-blossom-flora-62652.jpg")}
            style={{ width: "100%", height: "350px" }}
          />
          <div class="cat-tag-dv">
            <h4>FLOWER</h4>
          </div>
        </a>

        <a href="/products" class="col-lg-3 col-md-4 col-sm-12 sect5-col">
          <img
            class="cat-img"
            src={require("../resources/beautiful-bride-friendship-2851931.jpg")}
            style={{ width: "100%", height: "350px" }}
          />
          <div class="cat-tag-dv">
            <h4>PEOPLE</h4>
          </div>
        </a>

        <a href="/products" class="col-lg-3 col-md-4 col-sm-12 sect5-col">
          <img
            class="cat-img"
            src={require("../resources/bird-s-eye-view-castle-colors-2832061.jpg")}
            style={{ width: "100%", height: "350px" }}
          />
          <div class="cat-tag-dv">
            <h4>NATURE</h4>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ExploreCategory;
