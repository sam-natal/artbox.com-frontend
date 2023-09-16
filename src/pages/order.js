import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

export const Order = () => {
  var ordered_item = "";
  //var subttl = 0;
  var order = JSON.parse(localStorage.getItem("orderData"));
  const uID = JSON.parse(localStorage.getItem("user_id"));
  const location = localStorage.getItem("location");

  useEffect(()=>{
    if (location === "cart") {
      ordered_item = JSON.parse(localStorage.getItem("cart" + uID));
  
      const data = {
        customerID: uID,
        totalDue: order.purchase_units[0].amount.value,
      };
  
      axios.post(`/api/order`, data).then((res) => {
        if (res.data.status === 200) {
          // eslint-disable-next-line
          ordered_item.map((item) => {
            const data = {
              orderID: res.data.ID,
              artID: item.artID,
              qty: item.qty,
            };
            axios.post(`/api/order-items`, data).then((res) => {});
  
          });
        }
      });
    } else {
      ordered_item = JSON.parse(localStorage.getItem("one"));
      //subttl = ordered_item.price;
  
      // Codes for inserting an order into the database
      const data = {
        customerID: uID,
        totalDue: order.purchase_units[0].amount.value,
      };
  
      axios.post(`/api/order`, data).then((res) => {
        if (res.data.status === 200) {
          const data = {
            orderID: res.data.ID,
            artID: ordered_item.id,
            qty: 1,
          };
          axios.post(`/api/order-items`, data).then((res) => {});
        }
      });
    }
  },[]);


  return (
    <div>
      <Navbar />
      <div
        className=" alert alert-success ml-3 w-50"
        role="alert"
        style={{ margin: "6rem" }}
      >
        <h4 className="alert-heading">Transaction completed Successful!</h4>
        <p>
          <ul>
            <li>
              <label style={{ width: "300px", fontWeight: "bold" }}>
                Payment ID:
              </label>
              {order.id}
            </li>
            <li>
              <label style={{ width: "300px", fontWeight: "bold" }}>
                Customner ID:
              </label>
              {order.payer.payer_id}
            </li>
            <li>
              <label style={{ width: "300px", fontWeight: "bold" }}>
                Payer:
              </label>
              {order.payer.name.given_name}
            </li>
            <li>
              <label style={{ width: "300px", fontWeight: "bold" }}>
                Payee :
              </label>
              {order.purchase_units[0].payee.email_address}
            </li>
            <li>
              <label style={{ width: "300px", fontWeight: "bold" }}>
                Payee ID:
              </label>
              {order.purchase_units[0].payee.merchant_id}
            </li>
            <li>
              <label style={{ width: "300px", fontWeight: "bold" }}>
                Amount paid:
              </label>
              {"$ " + order.purchase_units[0].amount.value}
            </li>
          </ul>
        </p>
        <hr />
        <p className="mb-0">
          Thanks for your purchase at{" "}
          <img
            src={require("../resources/Art_Box_Logo-removebg-preview.png")}
            style={{ height: "43px", width: "200px" }}
            alt=''
          />{" "}
          , Welcome again!.
        </p>
      </div>

      <Footer />
    </div>
  );
};
