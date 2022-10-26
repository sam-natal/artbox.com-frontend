import React from "react";

function CartItem(props) {
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
        <a href="#">Remove item</a>
      </div>
      <div class="col col-lg-3 col-sm-2 col-2">
        <i class="bi bi-dash-circle"></i>
        <input type="number" placeholder="1" min="1" />
        <i class="bi bi-plus-circle"></i>
      </div>
      <div class="col col-lg-1 col-sm-1 col-1">${props.price}</div>
    </div>
  );
}

export default CartItem;
