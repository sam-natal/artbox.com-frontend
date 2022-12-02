import React, { useState } from "react";

function CartItem(props) {
  var [qty, setQty] = useState(props.qty);
  function increment() {
    qty++;
    setQty(qty);
  }

  function decrement() {
    if (qty > 1) {
      qty--;
      setQty(qty);
    }
  }
  return (
    <div class="row cart-item-dv">
      <div class="col col-lg-3 col-sm-2 col-2">
        <img src={props.img} />
      </div>
      <div class="col col-lg-5 col-sm-7 col-6">
        <p>{props.desc}</p>
        <p>
          <label>Size:</label> {props.size}
        </p>
        <a href="#">Save for later</a>
        <a
          href="#"
          onClick={() => {
            props.deleteCartItem(props.id);
          }}
        >
          Remove item
        </a>
      </div>
      <div class="col col-lg-3 col-sm-2 col-2">
        <i
          class="bi bi-dash-circle"
          onClick={decrement}
          style={{ cursor: "pointer" }}
        ></i>
        <input type="number" placeholder="1" min="1" value={qty} />
        <i
          class="bi bi-plus-circle"
          onClick={increment}
          style={{ cursor: "pointer" }}
        ></i>
      </div>
      <div class="col col-lg-1 col-sm-1 col-1">$&nbsp;{props.price * qty}</div>
    </div>
  );
}

export default CartItem;
