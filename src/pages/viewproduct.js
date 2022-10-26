import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/ProductCard";

function ViewProduct() {
  return (
    <>
      <Navbar />

      <div class="row view-prod-dv">
        <div class="col col-lg-8 left-dv">
          <div class="img-prod-dv">
            <img src={require("../resources/good_hair.jpg")} alt="" />
          </div>
        </div>

        <div class="col col-lg-4 right-dv">
          <h3>African women hair</h3>
          <small>Abstract</small>
          <p>
            Matte Black - Chic metal frame, with a matte black finish, for a
            modern, streamlined look. Frame width is 0.25" for dimensions 8x10
            and under, 0.5" for dimensions 24x24 and under, and 0.75" for 30x30,
            30x40 and 44x44, and 1.25" for 40x50.
          </p>
          <p>
            Size: 23 x 40
          </p>
          <p>
            Price: <span class="bi bi-currency-dollar">500</span>
          </p>
          <a href="/wishlist"><button class="btn btn-primary">Add to wishlist</button></a>
          <a href="/Cart" ><button class="btn btn-outline-success">Add to cart</button></a>
          <a href="/Checkout" ><button class="btn btn-warning">Buy now</button></a>
        </div>
      </div>

      <h3 class="related-h">Discover similar art products</h3>
      
      <div class="container related-dv">
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

export default ViewProduct;
