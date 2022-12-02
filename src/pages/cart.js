import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";

function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  function deleteCartItem(id) {
    setCart(
      cart.filter((item) => {
        return item.artID !== id;
      })
    );
  }
  localStorage.setItem("cart", JSON.stringify(cart));

  //A function to map through all th cart items and capture all the price into new price array
  const prices = cart.map((art) => {
    return art.price;
  });

  var total = 0;
  if (prices.length > 0) {
    total = prices.reduce((accumulator, price) => {
      return accumulator + price;
    });
  }

  console.log(total);

  var cart_item = "";
  cart_item = cart.map((item) => {
    return (
      <CartItem
        key={item.artID}
        id={item.artID}
        img={item.img}
        desc={item.title}
        size={item.width + " " + item.height}
        price={item.price}
        qty={item.qty}
        deleteCartItem={deleteCartItem}
      />
    );
  });

  return (
    <>
      <Navbar />
      <div class="cart-main-dv">
        <h1 class="cart-h">Cart</h1>
        <div class="row cart-heading-dv">
          <div class="col col-lg-3 col-2">ITEM</div>
          <div class="col col-lg-5 col-6">DESCRIPTION</div>
          <div class="col col-lg-3 col-2">QUANTITY</div>
          <div class="col col-lg-1 col-1">PRICE</div>
        </div>
        {cart_item}
      </div>

      <div class="order-price-dv">
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
        <a href="/products">
          <button class="btn btn-primary">Continue shopping</button>
        </a>
        <a href="/checkout">
          <button class="btn btn-warning">Proceed to checkout</button>
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
