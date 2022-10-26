import React from "react";

function Card(props) {
    return (
      <div  class="card ">
        <img src={props.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
        </div>
        <a class="shop-now-link" href="#">
          <a href="/viewproduct"><button class="btn btn-outline-dark">Shop now</button></a>
        </a>
        <div class="card-footer">
          <small
            style={{
              color: "#F96666",
              fontSize: "19px",
              fontFamily: "aerial",
            }}
          >
            {props.price}
          </small>
          <div class="bag-wish-div">
            <a href="" class="">
              <i class="bi bi-heart"></i>
            </a>
            <a href="">
              <i class="bi bi-bag"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }

  export default Card;