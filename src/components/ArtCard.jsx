import React, { useState } from "react";

function Card(props) {
  var [bag, setBag] = useState("bi bi-bag");
  var class_data = "";
  //A function to store art ID on the local storage
  function storeArtId() {
    localStorage.setItem("art_id", props.artID);
  }

  var cart = JSON.parse(localStorage.getItem("cart") || "[]");
         
  var item_available = cart.filter((item) => {
    return item.artID === props.artID;
  })

  if (item_available.length >= 1) {
    class_data = "bi bi-bag-fill"
  } else {
    class_data = "bi bi-bag"
  }

  return (
    <div class="card ">
      <img src={props.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <small>
          {props.width}&nbsp;"&nbsp;x&nbsp;{props.height}&nbsp;"&nbsp;inch
        </small>
      </div>
      <a
        type="button"
        href="/view_art"
        class="btn btn-outline-dark"
        style={{ width: "100%" }}
        onClick={storeArtId}
      >
        Shop now
      </a>
      <div class="card-footer">
        <small
          style={{
            color: "#F96666",
            fontSize: "19px",
            fontFamily: "aerial",
          }}
        >
          {'$ '+props.price}
        </small>
        <div class="bag-wish-div">
          <a href="" class="">
            <i class="bi bi-heart"></i>
          </a>
          <i
            class={class_data}
            onClick={
              bag == "bi bi-bag"
                ? () => {
                    var cart = JSON.parse(localStorage.getItem("cart") || "[]");
                    //Checking if an item is alredy available on local storage cart items
                    var available = cart.filter((item) => {
                      return item.artID === props.artID;
                    });

                    if (available.length >= 1) {
                      alert("An item is alredy on the cart.");
                    } else {
                      cart.push(props);
                      localStorage.setItem("cart", JSON.stringify(cart));
                      //localStorage.setItem("cart_count", cart.length);
                      setBag("bi bi-bag-fill");
                    }
                  }
                : () => {
                    var cart = JSON.parse(localStorage.getItem("cart") || "[]");
                    cart.pop();
                    localStorage.setItem("cart", JSON.stringify(cart));
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
