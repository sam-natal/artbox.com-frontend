import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/ArtCard";
import axios from "axios";
import swal from "sweetalert";

function ViewProduct() {

  const [viewArt, setArt] = useState([]);
  const uID = localStorage.getItem("user_id");
  const aID = localStorage.getItem("art_id");
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem(uID ? "cart" + uID : "guest_cart") || "[]")
  );
  const data = {
    id: aID,
  };

  //Send request to the laravel API's to retrive art details using stored art Id
  useEffect(() => {
    axios.post(`/api/fetchArtById`, data).then((res) => {
      if (res.data.status === 200) {
        setArt(res.data.arts);
      }
    });
  }, []);

  var available = cart.filter((i) => {
    return i.artID === aID;
  });

  var art = "";
  art = viewArt.map((item) => {
    return (
      <div className="row view-prod-dv">
        <div className="col col-lg-8 left-dv">
          <div className="img-prod-dv">
            <img
              src={"http://127.0.0.1:8000/storage/" + item.image_path.slice(7)}
              alt=""
            />
          </div>
        </div>

        <div className="col col-lg-4 right-dv">
          <h3>{item.title}</h3>
          <small>{item.category_name}</small>
          <p>{item.description}</p>
          <p>
            Size:&nbsp;&nbsp;{item.width}&nbsp;"&nbsp;x&nbsp;{item.height}
            &nbsp;"&nbsp;inch
          </p>
          <p>
            Price: <span className="bi bi-currency-dollar">{item.price}</span>
          </p>
          <button
            className="btn btn-primary w-100"
            onClick={() => {
              if (uID) {
                const data = {
                  customer_id: uID,
                  art_id: item.id,
                };

                axios.post(`/api/saveWish`, data).then((res) => {
                  if (res.data.status === 200) {
                    swal("Success", res.data.message, "success");
                  }
                  if (res.data.status === 401) {
                    swal(res.data.message);
                  }
                });
              } else {
                swal(
                  "Hey you need to register or sign in to add items on your wishlist!"
                );
              }
            }}
          >
            Add to wishlist
          </button>
          <button
            className="btn btn-outline-success w-100"
            id="add-tocart-btn"
            onClick={() => {
              if (available.length >= 1) {
                swal("This art is on your cart already.");
              } else {
                var new_item = {
                  artID: item.id,
                  height: item.height,
                  img:
                    "http://127.0.0.1:8000/storage/" + item.image_path.slice(7),
                  price: item.price,
                  qty: 1,
                  title: item.title,
                  ttlPrice: item.price,
                };

                setCart(
                  JSON.parse(
                    localStorage.getItem(
                      uID ? "cart" + uID : "guest_cart" || []
                    )
                  )
                );
                cart.push(new_item);
                localStorage.setItem(
                  uID ? "cart" + uID : "guest_cart",
                  JSON.stringify(cart)
                );
                swal(
                  "Success",
                  "Item added to the cart successfull",
                  "success"
                );
              }
            }}
          >
            Add to cart
          </button>

          <a
            href="/Checkout"
            onClick={() => {
              localStorage.setItem("one", JSON.stringify(item));
              localStorage.setItem("location", 'view_art');
            }}
          >
            <button className="btn btn-warning w-100"   >Buy now</button>
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

  //var id = localStorage.getItem("image_id");
  const cat = {
    id: aID,
    catID: catID,
  };

  axios.post(`/api/fetchArtByCategory`, cat).then((res) => {
    if (res.data.status === 200) {
      setArtByCategory(res.data.arts);
    }
  });

  const [wishes,setWishes] = useState([]);
  //var uID = localStorage.getItem("user_id");

  useEffect(() => {
  axios.post(`/api/checkWish`, {uID : uID}).then((res) => {
    if (res.data.status === 200 ) {
      setWishes(res.data.check);
    } 
  });
}, []);

  var arts_by_category = "";
  arts_by_category = viewArtByCategory.map((item) => {
    return (
      <div className="col col-lg-3 col-md-4 col-sm-12 col-xs-12 prod-container">
        <Card
          key={item.id}
          artID={item.id}
          img={"http://127.0.0.1:8000/storage/" + item.image_path.slice(7)}
          title={item.title}
          width={item.width}
          height={item.height}
          price={item.price}
          wish={wishes}
        />
      </div>
    );
  });

  return (
    <>
      <Navbar />

      {art}

      <h3 className="related-h">Discover similar arts</h3>

      <div className="container related-dv">
        <div className="row">{arts_by_category}</div>
      </div>
      <Footer />
    </>
  );
}

export default ViewProduct;
