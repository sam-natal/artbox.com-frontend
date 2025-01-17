import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Info, Orders, PaymentCard, Address, Settings, Chat} from "../components/Customer";

function Account() {

  return (
    <>
      <Info />
      <Orders />
      <PaymentCard />
      <Address />
      <Settings />
      <Chat />
      <Navbar />
      <div className="account-dv">
        <h3>Welcome { localStorage.getItem("auth_name")} !</h3>
        <div className="row row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 account-row">

          <div className="col">
            <div className="acc-parts-dv" onClick={OpenShadowBox}>
              <div className="acc-img-dv">
                <img
                  src={require("../resources/icons/icons8-personal-information-64.png")}
                  alt=""
                  style={{width:"50px", height:"50px"}}
                />
              </div>
              <div className="details-dv">
                <p>Personal information</p>
                <small>View and edit your names, email and phone</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="acc-parts-dv " onClick={OpenOrderShadowBox}>
              <div className="acc-img-dv">
                <img
                  src={require("../resources/icons/icons8-calling-64.png")}
                  alt=""
                  style={{width:"50px", height:"50px"}}
                />
              </div>
              <div className="details-dv">
                <p>Your orders</p>
                <small>Track, view and check order statuses.</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="acc-parts-dv" onClick={OpenCardShadowBox}>
              <div className="acc-img-dv">
                <img
                  src={require("../resources/icons/icons8-credit-card-64.png")}
                  alt=""
                  style={{width:"50px", height:"50px"}}
                />
              </div>
              <div className="details-dv">
                <p>Payment account</p>
                <small>
                  View, edit or change your payment account.
                </small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="acc-parts-dv" onClick={OpenChatShadowBox}>
              <div className="acc-img-dv">
                <img
                  src={require("../resources/icons/icons8-messages-64.png")}
                  alt=""
                  style={{width:"50px", height:"50px"}}
                />
              </div>
              <div className="details-dv">
                <p>Your messages</p>
                <small>Send, view and delete your messages.</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="acc-parts-dv" onClick={OpenAddressShadowBox}>
              <div className="acc-img-dv">
                <img
                  src={require("../resources/icons/icons8-address-64.png")}
                  alt=""
                  style={{width:"50px", height:"50px"}}
                />
              </div>
              <div className="details-dv">
                <p>Your addresses</p>
                <small>View, edit, delete your address details.</small>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="acc-parts-dv" onClick={OpenSettingsShadowBox}>
              <div className="acc-img-dv">
                <img
                  src={require("../resources/icons/icons8-settings-48.png")}
                  alt=""
                  style={{width:"50px", height:"50px"}}
                />
              </div>
              <div className="details-dv">
                <p>Manage account</p>
                <small>
                  Change account name, password or delete your account.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}


function OpenShadowBox() {
  document.getElementById('shadow-dv').style.display = "block";
}

function OpenOrderShadowBox() {
  document.getElementById("order-shadow-dv").style.display = "block";
}

function OpenCardShadowBox() {
  document.getElementById("card-shadow-dv").style.display = "block";
}

function OpenAddressShadowBox() {
  document.getElementById("address-shadow-dv").style.display = "block";
}


function OpenSettingsShadowBox() {
  document.getElementById("settings-shadow-dv").style.display = "block";
}

function OpenChatShadowBox() {
  document.getElementById("chat-shadow-dv").style.display = "block";
}



export default Account;
