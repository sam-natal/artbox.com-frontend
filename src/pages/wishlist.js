import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/ProductCard";
import Footer from "../components/Footer";

function Wish() {
  return (
    <>
    <Navbar />
    <h1 class="wish-h">Wish List</h1>
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
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Wish;
