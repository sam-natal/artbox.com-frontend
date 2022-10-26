import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/ProductCard";
import Filter from "../components/Filter";

function Products() {
  return (
    <>
      <Navbar />
      <Filter />
      <div class="container">
        <div class="row">
          <div class="col col-lg-3 col-md-4 col-sm-12 col-xs-12 prod-container">
            <Card
              img={require("../resources/abstract-expressionism-abstract-painting-acrylic-paint-1585325.jpg")}
              title="Art title"
              price="Price: $100 to $160"
            />
          </div>
          <div class="col col-lg-3 col-md-4 col-sm-12 col-xs-12 prod-container">
            <Card
              img={require("../resources/a-removebg-preview.png")}
              title="Art title"
              price="Price: $100 to $160"
            />
          </div>
          <div class="col col-lg-3 col-md-4 col-sm-12 col-xs-12 prod-container">
            <Card
              img={require("../resources/b-removebg-preview.png")}
              title="Art title"
              price="Price: $100 to $160"
            />
          </div>
          <div class="col col-lg-3 col-md-4 col-sm-12 col-xs-12 prod-container">
            <Card
              img={require("../resources/c-removebg-preview.png")}
              title="Art title"
              price="Price: $100 to $160"
            />
          </div>

          <div class="col col-lg-3 col-md-4 col-sm-12 col-xs-12 prod-container">
            <Card
              img={require("../resources/art-artistic-artsy-1988681.jpg")}
              title="Art title"
              price="Price: $100 to $160"
            />
          </div>

          <div class="col col-lg-3 col-md-4 col-sm-12 col-xs-12 prod-container">
            <Card
              img={require("../resources/abstract-expressionism-abstract-painting-acrylic-1919287.jpg")}
              title="Art title"
              price="Price: $100 to $160"
            />
          </div>

          <div class="col col-lg-3 col-md-4 col-sm-12 col-xs-12 prod-container">
            <Card
              img={require("../resources/wal-3143copy2.jpg")}
              title="Art title"
              price="Price: $100 to $160"
            />
          </div>

          <div class="col col-lg-3 col-md-4 col-sm-12 col-xs-12 prod-container">
            <Card
              img={require("../resources/alcoholic-beverage-beverage-citrus-1232152.jpg")}
              title="Art title"
              price="Price: $100 to $160"
            />
          </div>

          <div class="col col-lg-3 col-md-4 col-sm-12 col-xs-12 prod-container">
            <Card
              img={require("../resources/angry-animal-animal-photography-951007.jpg")}
              title="Art title"
              price="Price: $100 to $160"
            />
          </div>

          <div class="col col-lg-3 col-md-4 col-sm-12 col-xs-12 prod-container">
            <Card
              img={require("../resources/art-artsy-black-background-1918290.jpg")}
              title="Art title"
              price="Price: $100 to $160"
            />
          </div>

          <div class="col col-lg-3 col-md-4 col-sm-12 col-xs-12 prod-container">
            <Card
              img={require("../resources/art-artistic-blue-eyes-1209843.jpg")}
              title="Art title"
              price="Price: $100 to $160"
            />
          </div>

          <div class="col col-lg-3 col-md-4 col-sm-12 col-xs-12 prod-container">
            <Card
              img={require("../resources/abstract-painting-art-colorful-1193743.jpg")}
              title="Art title"
              price="Price: $100 to $160"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
