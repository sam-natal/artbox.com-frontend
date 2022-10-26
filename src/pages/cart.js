import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";

function Cart() {
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
        <CartItem
          img={require("../../src/resources/art-backlit-dark-556669.jpg")}
          desc="Matte Black - Chic metal frame, with a matte black finish, for a
                 modern, streamlined look."
          size="15x40"
          price="5000"
        />

        <CartItem
          img={require("../../src/resources/bean-black-rice-cereal-1537169.jpg")}
          desc="Matte Black - Chic metal frame, with a matte black finish, for a
                 modern, streamlined look."
          size="15x40"
          price="5000"
        />

        <CartItem
          img={require("../../src/resources/body-clean-clear-66346.jpg")}
          desc="Matte Black - Chic metal frame, with a matte black finish, for a
                 modern, streamlined look."
          size="15x40"
          price="5000"
        />
        <CartItem
          img={require("../../src/resources/active-adult-beautiful-1799244.jpg")}
          desc="Matte Black - Chic metal frame, with a matte black finish, for a
                 modern, streamlined look."
          size="15x40"
          price="5000"
        />
      </div>

      <div class="order-price-dv">
        <p>
          Subtotal :<label>$4000</label>
        </p>
        <p>
          Shipping cost :<label>$100</label>
        </p>
        <hr />
        <p>
          Total order price :<label>$4100</label>
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
