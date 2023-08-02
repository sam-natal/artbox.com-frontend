import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";

function Cart() {
  var uID = localStorage.getItem("user_id");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem(uID ? "cart" + uID : "guest_cart") || "[]")
  );

  // const [cart, setCart] = useState(
  //   JSON.parse(localStorage.getItem(uID ? "cart" + uID : "guest_cart") || "[]")
  // );

  // const arr = {...JSON.parse(localStorage.getItem( "cart" + uID)),...JSON.parse(localStorage.getItem( "guest_cart"))};

  // console.log(arr);

  // uID ? setCart(...cart,JSON.parse(localStorage.getItem("guest_cart") || "[]")) : '';
  if (uID) {
    localStorage.removeItem("guest_cart")
  }


  //Codes for updating a cart every o.1 second
  setInterval(UpdateCart, 100);
  function UpdateCart() {
    uID = localStorage.getItem("user_id");
    setCart(
      JSON.parse(
        localStorage.getItem(uID ? "cart" + uID : "guest_cart") || "[]"
      )
    );
  }

  //A function to remove a cart item from the cart item
  function deleteCartItem(id) {
    setCart(
      cart.filter((item) => {
        return item.artID !== id;
      })
    );
  }

  localStorage.setItem(uID ? "cart" + uID : "guest_cart", JSON.stringify(cart));

  //A function to map through all th cart items and capture all the price into new price array
  const prices = cart.map((art) => {
    return art.ttlPrice;
  });

  var total = 0;
  if (prices.length > 0) {
    total = prices.reduce((accumulator, price) => {
      return accumulator + price;
    });
  }

  var cart_item = "";
  cart_item = cart.map((item) => {
    return (
      <CartItem
        key={item.artID}
        id={item.artID}
        img={item.img}
        desc={item.title}
        size={item.width + '" x ' + item.height + '"'}
        price={item.price}
        qty={item.qty}
        ttlPrice={item.price}
        deleteCartItem={deleteCartItem}
      />
    );
  });

  return (
    <>
      <Navbar />
      <div className="cart-main-dv">
        <h1 className="cart-h">Cart</h1>
        <div className="row cart-heading-dv">
          <div className="col col-lg-3 col-2">ITEM</div>
          <div className="col col-lg-5 col-6">DESCRIPTION</div>
          <div className="col col-lg-3 col-2">QUANTITY</div>
          <div className="col col-lg-1 col-1">PRICE</div>
        </div>
        {cart_item}
      </div>

      <div className="order-price-dv">
        <p>
          Subtotal :<label>{"$ " + total}</label>
        </p>
        <p>
          Shipping cost :<label>$100</label>
        </p>
        <hr />
        <p>
          Total order price :<label>{"$ " + (total + 100)}</label>
        </p>
        <a href="/arts">
          <button className="btn btn-primary">Continue shopping</button>
        </a>
        <a
          href="/checkout"
          onClick={() => {
            localStorage.setItem("location", "cart");
          }}
        >
          <button className="btn btn-warning">Proceed to checkout</button>
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
