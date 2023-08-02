import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";

function Card(props) {
  //var [heart_icon_style, setHeart] = useState("");
  var heart_icon_style='';
  var [bag_icon_style, setBag] = useState("");

  var uID = localStorage.getItem("user_id");

  //A function to store art ID on the local storage
  function storeArtId() {
    localStorage.setItem("art_id", props.artID);
  }

  if (uID !== null) {
    var cart = JSON.parse(localStorage.getItem("cart" + uID) || "[]");
    var item_available = cart.filter((item) => {
      return item.artID === props.artID;
    });

    if (item_available.length >= 1) {
      bag_icon_style = "bi bi-bag-fill";
    } else {
      bag_icon_style = "bi bi-bag";
    }

    // Check also if an art is available on the wish lists
    var wish_available = props.wish.filter((item) => {
      return item.art_id === props.artID;
    });

    if (wish_available.length >= 1) {
      heart_icon_style = "bi bi-heart-fill";
    } else {
      heart_icon_style = "bi bi-heart";
    }
  } else {
    cart = JSON.parse(localStorage.getItem("guest_cart") || "[]");
    heart_icon_style = "bi bi-heart";
    item_available = cart.filter((item) => {
      return item.artID === props.artID;
    });

    if (item_available.length >= 1) {
      bag_icon_style = "bi bi-bag-fill";
    } else {
      bag_icon_style = "bi bi-bag";
    }
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
          <div className="tooltp">
            <i
              className={heart_icon_style}
              onClick={() => {
                if (uID) {
                  const data = {
                    customer_id: uID,
                    art_id: props.artID,
                  };

                  axios.post(`/api/saveWish`, data).then((res) => {
                    if (res.data.status === 200) {
                      //setHeart("bi bi-heart-fill");
                      heart_icon_style = "bi bi-heart-fill";
                      swal("Success", res.data.message, "success");
                    }
                    if (res.data.status === 401) {
                      swal(res.data.message);
                    }
                  });
                } else {
                  swal(
                    "Sorry ! you have to register or login first to add items on your wishlist."
                  );
                }
              }}
            ></i>
            <span className="tooltiptext">Add this item to your wishlist.</span>
          </div>

          <div className="tooltp">
            <i
              className={bag_icon_style}
              onClick={
                bag_icon_style === "bi bi-bag"
                  ? () => {
                      let cart = "";
                      cart = JSON.parse(
                        localStorage.getItem(
                          uID ? "cart" + uID : "guest_cart"
                        ) || "[]"
                      );

                      //Checking if an item is alredy available on local storage cart items.
                      var available = cart.filter((item) => {
                        return item.artID === props.artID;
                      });

                      if (available.length >= 1) {
                        swal("An item is alredy on the cart.");
                      } else {
                        cart.push(props);
                        localStorage.setItem(
                          uID ? "cart" + uID : "guest_cart",
                          JSON.stringify(cart)
                        );
                        setBag("bi bi-bag-fill");
                      }
                    }
                  : () => {
                      //let cart = "";
                      cart = JSON.parse(
                        localStorage.getItem(
                          uID ? "cart" + uID : "guest_cart"
                        ) || "[]"
                      );

                      cart = cart.filter((item) => {
                        return item.artID !== props.artID;
                      });

                      localStorage.setItem(
                        uID ? "cart" + uID : "guest_cart",
                        JSON.stringify(cart)
                      );
                      setBag("bi bi-bag");
                    }
              }
              style={{ cursor: "pointer" }}
            ></i>
            <span className="tooltiptext">Add this item to your cart.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
