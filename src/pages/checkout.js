import React from "react";
import Navbar from "../components/Navbar";
import CreditCardForm from "../components/CreditCardForm";
import AddressForm from "../components/AddressForm";
import Footer from "../components/Footer";

function Checkout() {
  return (
    <>
      <Navbar />
      <div class="checkout-dv">
        <div class="row checkout-row">
          <div class="col col-lg-8 col-md-12 col-sm-12 col-12 checkout-left-dv">
            <h5>1.Shipping address</h5>
            <div
              class="add-address-dv"
              id="maximize-dv"
              onClick={DisplayAddressForm}
            >
              <label>
                <i class="bi bi-plus-lg" id="maximize-icon"></i> Add a shipping
                address
              </label>
            </div>

            <div
              class="add-address-dv"
              id="minimize-dv"
              onClick={RemoveAddressForm}
            >
              <label>
                <i class="bi bi-dash-lg" id="maximize-icon"></i> Add a shipping
                address
              </label>
            </div>

           <AddressForm />

            <hr style={{ margin: "6% 0", borderTop: "3px solid" }} />

            <h5>2.Payment method</h5>
            <div class="select-pay-dv" onClick={RemoveCreditForm}>
              <input
                type="radio"
                name="radio"
                id="paypal-radio"
              />
              <label>Use paypal</label>
              <img
                src={require("../resources/paypal-method-removebg-preview.png")}
              />
            </div>

            <div class="select-pay-dv" onClick={DisplayCreditForm}>
              <input type="radio" name="radio" id="credit-radio" />
              <label>Add a credit or debit card</label>
              <img src={require("../resources/visa-removebg-preview.png")} />
            </div>

            <CreditCardForm />
          </div>

          <div class="col col-lg-4 col-md-12 col-sm-12 col-12 checkout-right-dv">
            <div class="order-summary-dv">
              <h5>ORDER SUMMARY</h5>
              <p>
                Subtotal :<label>$4000</label>
              </p>
              <p>
                Shipping cost :<label>$100</label>
              </p>
              <hr />
              <p class="order-total-p">
                Order total :<label>$4100</label>
              </p>
              <p>
                <input type="checkbox"></input> By placing your order, you agree
                to Ochus's <a href="#">User Agreement</a> as well as{" "}
                <a href="">Privacy policy</a>
              </p>
              <a href="/products" >
                <button class="btn btn-warning" id="payment-btn">Pay with paypal</button>
              </a>
            </div>
          </div>
        </div>
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

function DisplayCreditForm() {
  document.getElementById("credit-card-form").style.display = "flex";
  document.getElementById("credit-radio").checked=true;
}

function RemoveCreditForm() {
  document.getElementById("credit-card-form").style.display = "none";
  document.getElementById("paypal-radio").checked=true;
}

export default Checkout;
