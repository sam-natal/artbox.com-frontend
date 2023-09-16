import React from "react";
import Navbar from "../components/Navbar";
import AddressForm from "../components/AddressForm";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const location = localStorage.getItem("location");
  const uID = localStorage.getItem("user_id");
  const shipping_cost = 100;
  var subttl = 0;
  var prd = [];
  var show_items = "";

  if (location === "cart") {
    prd = JSON.parse(localStorage.getItem("cart" + uID));
    //A function to map through all th cart items and capture all the price into new price array
    const prices = prd.map((art) => {
      return art.ttlPrice;
    });

    subttl = prices.reduce((accumulator, price) => {
      return accumulator + price;
    });

    show_items = prd.map((item) => {
      return (
        <p>
          <img
            src={item.img}
            alt=""
            style={{
              width: "40px",
              height: "40px",
              marginRight: "0.2cm",
            }}
          />
          <span>{item.title}</span>
          <label style={{ width: "13%" }}>{"$ " + item.price}</label>
          <label style={{ margin: "0 10%" }}>{item.qty}</label>
        </p>
      );
    });
  } else {
    prd = JSON.parse(localStorage.getItem("one"));
    subttl = prd.price;

    show_items = (
      <p>
        <img
          src={"https://admin.artisangalleryhub.com/storage/" + prd.image_path.slice(7)}
          alt=""
          style={{
            width: "40px",
            height: "40px",
            marginRight: "0.2cm",
          }}
        />
        <span>{prd.title}</span>
        <label style={{ width: "13%" }}>{"$ " + prd.price}</label>
        <label style={{ margin: "0 10%" }}>{prd.qty}</label>
      </p>
    );
  }

  localStorage.setItem("grand_total", subttl + shipping_cost);
  return (
    <>
      <Navbar />
      <div className="checkout-dv">
        <div className="row checkout-row">
          <div className="col col-lg-8 col-md-12 col-sm-12 col-12 checkout-left-dv">
            <h5>1.Billing address</h5>
            <div
              className="add-address-dv"
              id="maximize-dv"
              onClick={DisplayAddressForm}
              style={{ width: "95%" }}
            >
              <label>
                <i className="bi bi-plus-lg" id="maximize-icon"></i> Add a
                billing address
              </label>
            </div>

            <div
              className="add-address-dv"
              id="minimize-dv"
              onClick={RemoveAddressForm}
            >
              <label>
                <i className="bi bi-dash-lg" id="maximize-icon"></i> Add a
                billing address
              </label>
            </div>

            <AddressForm />

            <hr
              style={{ margin: "6% 0", borderTop: "3px solid", width: "95%" }}
            />

            <h5>2.Payment method</h5>
        
            <div id="paypal-button-container"></div>
          </div>

          <div className="col col-lg-4 col-md-12 col-sm-12 col-12 checkout-right-dv h-auto">
            <div className="order-summary-dv">
              <h5>ORDER SUMMARY</h5>
              <p>
                <span>Art details</span>
                <label style={{ width: "13%" }}>Price</label>
                <label style={{ margin: "0 10%" }}>Quantity</label>
              </p>
              <hr />
              {show_items}

              <hr />
              <p>
                Subtotal :<label>{"$  " + subttl}</label>
              </p>
              <p>
                Shipping cost :<label>{"$  " + shipping_cost}</label>
              </p>
              <hr />
              <p className="order-total-p">
                Order total :<label>{"$  " + (subttl + shipping_cost)}</label>
              </p>
              <p>
                <input type="checkbox"></input> By placing your order, you agree
                to Ochus's <a href="www.google.com">User Agreement</a> as well
                as <a href="www.google.com">Privacy policy</a>
              </p>
              {/* <button className="btn btn-warning m-2 w-100" id="payment-btn">
                Pay now
              </button> */}
              <div id="paypal-button-container"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="alert alert-warning w-50"
        id="trans-success"
        role="alert"
        style={{
          position: "absolute",
          top: "3cm",
          zIndex: "99999",
          left: "27%",
          display: "none",
        }}
      >
        <h4 className="alert-heading">Transaction completed</h4>
        <p>Thank you for your purchase!.</p>
        <hr />
        <button
          className="btn btn-outline-danger w-25 m-3"
          type="button"
          onClick={() => {
            document.getElementById("trans-success").style.display = "none";
          }}
        >
          Cancel
        </button>
        <button
          className="btn btn-outline-success w-25 m-3"
          type="button"
          onClick={() => {
            document.getElementById("trans-success").style.display = "none";
            navigate("/order");
          }}
        >
          View transaction details.
        </button>
      </div>
      <Footer />
    </>
  );
}

function DisplayAddressForm() {
  document.getElementById("address-form").style.display = "flex";
  document.getElementById("maximize-dv").style.display = "none";
  document.getElementById("minimize-dv").style.display = "block";
}

function RemoveAddressForm() {
  document.getElementById("address-form").style.display = "none";
  document.getElementById("maximize-dv").style.display = "block";
  document.getElementById("minimize-dv").style.display = "none";
}

export default Checkout;
