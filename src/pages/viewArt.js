import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/ArtCard";
import axios from "axios";

function ViewProduct() {
  const [viewArt, setArt] = useState([]);

  //Get art id from local storage to be used to retrive specific art details
  var id = localStorage.getItem("art_id");
  const data = {
    id: id,
  };

  //Send request to the laravel API's to retrive art details using stored art Id
  axios.post(`/api/fetchArtById`, data).then((res) => {
    if (res.data.status === 200) {
      setArt(res.data.arts);
    }
  });

  var art = "";
  art = viewArt.map((item) => {
    return (
      <div class="row view-prod-dv">
        <div class="col col-lg-8 left-dv">
          <div class="img-prod-dv">
            <img
              src={"http://127.0.0.1:8000/storage/" + item.image_path.slice(7)}
              alt=""
            />
          </div>
        </div>

        <div class="col col-lg-4 right-dv">
          <h3>{item.title}</h3>
          <small>{item.category_name}</small>
          <p>{item.description}</p>
          <p>
            Size:&nbsp;&nbsp;{item.width}&nbsp;"&nbsp;x&nbsp;{item.height}&nbsp;"&nbsp;inch
          </p>
          <p>
            Price: <span class="bi bi-currency-dollar">{item.price}</span>
          </p>
          <a href="/wishlist">
            <button class="btn btn-primary">Add to wishlist</button>
          </a>
          <a href="/Cart">
            <button class="btn btn-outline-success">Add to cart</button>
          </a>
          <a href="/Checkout">
            <button class="btn btn-warning">Buy now</button>
          </a>
        </div>
      </div>
    );
  });

  //CODES FOR FETCHING ALL RELATED ARTS BY THEIR CATEGORIES BASED ON THE SELECTED ART.
  const [viewArtByCategory, setArtByCategory] = useState([]);
  var catID = "";
  catID = viewArt.map((item) => {
    return item.category_id;
  });

  console.log(id);
  //var id = localStorage.getItem("image_id");
  const cat = {
    id: id,
    catID: catID,
  };
  axios.post(`/api/fetchArtByCategory`, cat).then((res) => {
    if (res.data.status === 200) {
      setArtByCategory(res.data.arts);
    }
  });

  var arts_by_category = "";
  arts_by_category = viewArtByCategory.map((item) => {
    return (
      <div class="col col-lg-3 col-md-4 col-sm-12 col-xs-12 prod-container">
        <Card
          artID={item.id}
          img={"http://127.0.0.1:8000/storage/" + item.image_path.slice(7)}
          title={item.title}
          width={item.width}
          height={item.height}
          price={"$ " + item.price}
        />
      </div>
    );
  });

  return (
    <>
      <Navbar />

      {art}

      <h3 class="related-h">Discover similar arts</h3>

      <div class="container related-dv">
        <div class="row">{arts_by_category}</div>
      </div>
      <Footer />
    </>
  );
}

export default ViewProduct;
