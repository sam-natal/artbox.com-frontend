import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";

function Card(props) {
  var [bag, setBag] = useState("bi bi-bag");
  var className_data = "";
  var uID = localStorage.getItem("user_id");
  console.log(uID);
  //A function to store art ID on the local storage
  function storeArtId() {
    localStorage.setItem("art_id", props.artID);
  }

  var cart = JSON.parse(localStorage.getItem("cart" + uID) || "[]");

  var item_available = cart.filter((item) => {
    return item.artID === props.artID;
  });

  if (item_available.length >= 1) {
    className_data = "bi bi-bag-fill";
  } else {
    className_data = "bi bi-bag";
  }

  return (
    <div className="card ">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <small>
          {props.width}&nbsp;"&nbsp;x&nbsp;{props.height}&nbsp;"&nbsp;inch
        </small>
      </div>
      <a
        type="button"
        href="/view_art"
        className="btn btn-outline-dark"
        style={{ width: "100%" }}
        onClick={storeArtId}
      >
        Shop now
      </a>
      <div className="card-footer">
        <small
          style={{
            color: "#F96666",
            fontSize: "19px",
            fontFamily: "aerial",
          }}
        >
          {"$ " + props.price}
        </small>
        <div className="bag-wish-div">
          <i
            className="bi bi-trash"
            style={{ cursor: "pointer", color:"red" }}
            onClick={() => {
              if (uID) {
                const data = {
                  customer_id: uID,
                  art_id: props.artID,
                };

                axios.post(`/api/deleteWish`, data).then((res) => {
                  if (res.data.status === 200) {
                    swal("Success", res.data.message, "success");
                    window.Location.reload();
                  }
                });
              }
            }}
          ></i>
          <i
            className={className_data}
            onClick={
              bag === "bi bi-bag"
                ? () => {
                    var cart = JSON.parse(
                      localStorage.getItem("cart" + uID) || "[]"
                    );
                    //Checking if an item is alredy available on local storage cart items
                    var available = cart.filter((item) => {
                      return item.artID === props.artID;
                    });

                    if (available.length >= 1) {
                      swal("An item is alredy on the cart.");
                    } else {
                      cart.push(props);
                      localStorage.setItem("cart" + uID, JSON.stringify(cart));
                      //localStorage.setItem("cart_count", cart.length);
                      setBag("bi bi-bag-fill");
                    }
                  }
                : () => {
                    var cart = JSON.parse(
                      localStorage.getItem("cart" + uID) || "[]"
                    );
                    cart.pop();
                    localStorage.setItem("cart" + uID, JSON.stringify(cart));
                    //localStorage.setItem("cart_count", cart.length);
                    setBag("bi bi-bag");
                  }
            }
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Card;
