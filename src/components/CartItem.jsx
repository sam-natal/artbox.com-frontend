import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

function CartItem(props) {
  var uID = localStorage.getItem("user_id");

  // const [cart, setCart] = useState(
  //   uID
  //     ? JSON.parse(localStorage.getItem("cart" + uID) || [])
  //     : JSON.parse(localStorage.getItem("guest_cart") || [])
  // );

  const cart = uID
    ? JSON.parse(localStorage.getItem("cart" + uID) || [])
    : JSON.parse(localStorage.getItem("guest_cart") || []);
  var i = cart.findIndex((obj) => obj.artID === props.id); //Find index of specific object using findIndex method.
  //cart[i].ttlPrice

  var [qty, setQty] = useState(props.qty);
  //var [price, setPrice] = useState(props.price);
  const org_price = props.price;

  function increment() {
    qty++;
    setQty(qty);
    //setPrice(qty * props.price);
    cart[i].qty = qty; //Changing the value of quantity of the local storage item
    cart[i].ttlPrice = qty * org_price; //Changing the value of total price items on the local storage cart item
    localStorage.setItem(
      uID ? "cart" + uID : "guest_cart",
      JSON.stringify(cart)
    ); //Updating cart on the local storage
  }

  function decrement() {
    if (qty > 1) {
      qty--;
      setQty(qty);
      //setPrice(qty * props.price);
      cart[i].qty = qty; //Changing the value of quantity of the local storage item
      cart[i].ttlPrice = qty * org_price; //Changing the value of total price items on the local storage cart item
      localStorage.setItem(
        uID ? "cart" + uID : "guest_cart",
        JSON.stringify(cart)
      ); //Updating cart after changing the local storage
    }
  }
  return (
    <div className="row cart-item-dv">
      <div className="col col-lg-3 col-sm-2 col-2">
        <img src={props.img} alt="" />
      </div>
      <div className="col col-lg-5 col-sm-7 col-6">
        <p>{props.desc}</p>
        <p>
          <label>Size:</label> {props.size}
        </p>
        <div
          style={{ color: "#1ea84e", cursor: "pointer", display: "inline" }}
          onClick={() => {
            if (uID) {
              const data = {
                customer_id: uID,
                art_id: props.id,
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
                "Sorry ! you have to register or login first to add items on your wishlist."
              );
            }
          }}
        >
          Add to wishlist
        </div>
        <div
          style={{
            color: "#1ea84e",
            cursor: "pointer",
            margin: "3rem 0 0 1rem",
            display:"inline"
          }}
          onClick={() => {
            props.deleteCartItem(props.id);
          }}
        >
          Remove item
        </div>
      </div>
      <div className="col col-lg-3 col-sm-2 col-2">
        <i className="bi bi-dash-circle qty-adjuster" onClick={decrement}></i>
        <div className="qty-dv">{qty}</div>
        <i className="bi bi-plus-circle qty-adjuster" onClick={increment}></i>
      </div>
      <div
        className="col col-lg-1 col-sm-1 col-1"
        style={{ fontWeight: "bolder" }}
      >
        $&nbsp;{cart[i].ttlPrice || 0}
      </div>
    </div>
  );
}

export default CartItem;
