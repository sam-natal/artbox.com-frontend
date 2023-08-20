import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/WishCard";
import Footer from "../components/Footer";
import axios from "axios";

function Wish() {
  //Codes to fetch data using laravel API's by price filter
  const [wish_arts, setArt] = useState([]);
  const uID = localStorage.getItem("user_id");
  const data = {
    id: uID,
  };

  axios.post(`/api/showWishes`, data).then((res) => {
    if (res.data.status === 200) {
      setArt(res.data.arts);
    }
  });

  const arts = wish_arts.map((item) => {
    return (
      <div
        key={item.id}
        className="col col-lg-3 col-md-4 col-sm-12 col-xs-12 prod-container"
      >
        <Card
          artID={item.id}
          img={"http://127.0.0.1:8000/storage/" + item.image_path.slice(7)}
          title={item.title}
          width={item.width}
          height={item.height}
          qty={1}
          price={item.price}
          ttlPrice={item.price}
        />
      </div>
    );
  });

  return (
    <>
      <Navbar />
      <h1 className="wish-h">Arts on your wishlist.</h1>
      <div className="container">
        <div className="row">
          {arts.length > 0 ? (
            arts
          ) : (
            <div className="alert alert-info" role="alert">
              <h4 className="alert-heading mb-5"> Your wishlist is empty.</h4>
              <hr />
              <p className="mb-0">
                Got to the <a href="/arts">shopping page</a> to add your favorite arts in your wishlist.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Wish;
