import React, { useState } from "react";

function CartItem(props) {
  var [qty, setQty] = useState(1);
  const [total, setTotal] = useState(0);
  function increment() {
    qty++;
    setQty(qty);
    var newtotal = total + (qty * props.price);
    setTotal(newtotal);
    console.log(total);
  }

  function decrement() {
    if (qty > 1) {
      qty--;
      setQty(qty);
      var newtotal = total + (qty * props.price);
      setTotal(newtotal);
    }
    console.log(total);
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
            // var cart = JSON.parse(localStorage.getItem("cart") || "[]");
            // // cart.filter(item => {
            // //   return item.id === props.id
            // // })
            // console.log(props);
            // cart.pop();
            // localStorage.setItem("cart", JSON.stringify(cart));
            // localStorage.setItem("cart_count", cart.length);
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
