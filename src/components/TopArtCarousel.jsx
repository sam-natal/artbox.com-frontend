import React from "react";
import Card from "./ProductCard";
function TopArtCarousel() {
  return (
    <div
      id="carouselExampleControls"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
      style={{ margin: "1rem 1rem 6rem" }}
    >
      <div class="carousel-inner">
        {/* COROUSEL ITEM 1 */}
        <div class="carousel-item active">
          <div class="cards-wrapper">
            <Card
              img={require("../resources/art-artistic-artsy-1988681.jpg")}
              title="Art title"
              price="Price: $100 to $160"
            />
            <Card
              img={require("../resources/abstract-expressionism-abstract-painting-acrylic-1919287.jpg")}
              title="Art title"
              price="Price: $100 to $160"
            />
            <Card
              img={require("../resources/wal-3143copy2.jpg")}
              title="Art title"
              price="Price: $100 to $160"
            />
            <Card
              img={require("../resources/alcoholic-beverage-beverage-citrus-1232152.jpg")}
              title="Art title"
              price="Price: $100 to $160"
            />
          </div>
        </div>

        {/* COROUSEL ITEM 2 */}
        <div class="carousel-item ">
          <div class="cards-wrapper">
            <Card
              img={require("../resources/angry-animal-animal-photography-951007.jpg")}
              title="Art title"
              price="Price: $100 to $160"
            />

            <Card
              img={require("../resources/art-artsy-black-background-1918290.jpg")}
              title="Art title"
              price="Price: $100 to $160"
            />
            <Card
              img={require("../resources/art-artistic-blue-eyes-1209843.jpg")}
              title="Art title"
              price="Price: $100 to $160"
            />
            <Card
              img={require("../resources/abstract-painting-art-colorful-1193743.jpg")}
              title="Art title"
              price="Price: $100 to $160"
            />
          </div>
        </div>

        {/* COROUSEL ITEM 3 */}
        <div class="carousel-item ">
          <div class="cards-wrapper">
            <Card
              img={require("../resources/abstract-expressionism-abstract-painting-acrylic-paint-1585325.jpg")}
              title="Art title"
              price="Price: $100 to $160"
            />
            <Card
              img={require("../resources/a-removebg-preview.png")}
              title="Art title"
              price="Price: $100 to $160"
            />
            <Card
              img={require("../resources/b-removebg-preview.png")}
              title="Art title"
              price="Price: $100 to $160"
            />
            <Card
              img={require("../resources/c-removebg-preview.png")}
              title="Art title"
              price="Price: $100 to $160"
            />
          </div>
        </div>
      </div>

      <button
        class="carousel-control-prev ctrl-btn"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next ctrl-btn"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default TopArtCarousel;
