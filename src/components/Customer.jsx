import React from "react";

function Info() {
  return (
    <div id="shadow-dv">
      <div className="user-info">
        <form action="/toserver">
          <label>First Name</label>
          <input type="text" placeholder="Samuel" />
          <i className="bi bi-pen"></i>
          <label>Last Name</label>
          <input type="text" placeholder="Natal" />
          <i className="bi bi-pen"></i>
          <label>Email</label>
          <input type="email" placeholder="ochu@gmail.com" />
          <i className="bi bi-pen"></i>
          <label>Phone</label>
          <input type="tel" placeholder="0719095110" />
          <i className="bi bi-pen"></i>
          <div className="cancel-save-dv">
            <div className="btn btn-light" onClick={CloseShadowBox}>
              Cancel
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Orders() {
  return (
    <div id="order-shadow-dv">
      <div className="user-info">
        <div className="row " style={{ position: "fixed !important" }}>
          <div className="col-1">
            <label>No</label>
          </div>
          <div className="col-4">
            <label>Package items</label>
          </div>
          <div className="col-2">
            <label>Price</label>
          </div>
          <div className="col-3">
            <label>Date</label>
          </div>
          <div className="col-2">
            <label>Status</label>
          </div>
        </div>

        <div className="row cart-item-dv">
          <div className="col-1">1</div>
          <div className="col-4">
            Three items inclorderuded in this Three items inclorderuded in this
          </div>
          <div className="col-2 ">$3000</div>
          <div className="col-3">21,Jan 2023</div>
          <div className="col-2" style={{ color: "red" }}>
            Canceled
          </div>
        </div>

        <div className="row cart-item-dv">
          <div className="col-1">2</div>
          <div className="col-4">
            Three items inclorderuded in this Three items inclorderuded in this
          </div>
          <div className="col-2 ">$3000</div>
          <div className="col-3">21,Jan 2023</div>
          <div className="col-2" style={{ color: "green" }}>
            Served
          </div>
        </div>

        <div className="row cart-item-dv">
          <div className="col-1">3</div>
          <div className="col-4">
            Three items inclorderuded in this Three items inclorderuded in this
          </div>
          <div className="col-2 ">$3000</div>
          <div className="col-3">21,Jan 2023</div>
          <div className="col-2" style={{ color: "green" }}>
            Served
          </div>
        </div>

        <div className="row cart-item-dv">
          <div className="col-1">4</div>
          <div className="col-4">
            Three items inclorderuded in this Three items inclorderuded in this
          </div>
          <div className="col-2 ">$3000</div>
          <div className="col-3">21,Jan 2023</div>
          <div className="col-2" style={{ color: "blue" }}>
            On process
          </div>
        </div>

        <div className="row cart-item-dv">
          <div className="col-1">5</div>
          <div className="col-4">
            Three items inclorderuded in this Three items inclorderuded in this
          </div>
          <div className="col-2 ">$3000</div>
          <div className="col-3">21,Jan 2023</div>
          <div className="col-2" style={{ color: "blue" }}>
            On process
          </div>
        </div>

        <div className="row cart-item-dv">
          <div className="col-1">6</div>
          <div className="col-4">
            Three items inclorderuded in this Three items inclorderuded in this
          </div>
          <div className="col-2 ">$3000</div>
          <div className="col-3">21,Jan 2023</div>
          <div className="col-2" style={{ color: "blue" }}>
            On process
          </div>
        </div>

        <div className="cancel-save-dv">
          <div className="btn btn-light" onClick={CloseOrderShadowBox}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentCard() {
  return (
    <div id="card-shadow-dv">
      <div className="user-info">
        <form action="/toserver">
          <label>Card name</label>
          <input type="text" placeholder="NMB Master card" />
          <i className="bi bi-pen"></i>
          <label>Card Number</label>
          <input type="text" placeholder="4628 1147 0312 1858" />
          <i className="bi bi-pen"></i>
          <label>Exp month</label>
          <input type="text" placeholder="09" />
          <i className="bi bi-pen"></i>
          <label>Exp year</label>
          <input type="tel" placeholder="2022" />
          <i className="bi bi-pen"></i>
          <label>CVV</label>
          <input type="tel" placeholder="612" />
          <i className="bi bi-pen"></i>
          <div className="cancel-save-dv">
            <div className="btn btn-light" onClick={CloseCardShadowBox}>
              Cancel
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Address() {
  return (
    <div id="address-shadow-dv">
      <div className="user-info">
        <form action="/toserver">
          <label>Address line 1</label>
          <input type="text" placeholder="Keko furniture" />
          <i className="bi bi-pen"></i>
          <label>Address line 2</label>
          <input type="text" placeholder="(optional)" />
          <i className="bi bi-pen"></i>
          <label>Country</label>
          <select id="inputState" className="form-select">
            <option selected>Tanzania</option>
            <option>...</option>
          </select>
          <i className="bi bi-pen"></i>
          <label>City</label>
          <select id="inputState" className="form-select">
            <option selected>Dar es Salaam</option>
            <option>Dodoma</option>
          </select>
          <i className="bi bi-pen"></i>
          <label>Zip</label>
          <input type="text" placeholder="00612" />
          <i className="bi bi-pen"></i>
          <div className="cancel-save-dv">
            <div className="btn btn-light" onClick={CloseAddressShadowBox}>
              Cancel
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div id="settings-shadow-dv">
      <div className="user-info">
        <form action="/toserver">
          <div className="account-img-dv">
            <img
              src={require("../resources/attractive-beautiful-beauty-1820574.jpg")}
              alt=""
            />
            <label for="imageinput" id="change-img">
              <i className="bi bi-pen"></i>
            </label>
            <input type="file" id="imageinput" style={{ display: "none" }} />
          </div>

          <label>User name</label>
          <input type="text" placeholder="Ochu" />
          <i className="bi bi-pen"></i>
          <label>Password</label>
          <input type="password" placeholder="ajskdjdjsksksd" />
          <i className="bi bi-pen"></i>
          <button className="btn btn-danger delete-acount-btn">
            Delete accouint
          </button>
          <div className="cancel-save-dv">
            <div className="btn btn-light" onClick={CloseSettingsShadowBox}>
              Cancel
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div id="chat-shadow-dv">
      <div className="user-info">
        <div className="chat-container">Chat room
        <form action="/toserver">
          <i className="bi bi-three-dots-vertical"></i>
          <textarea type="textarea" placeholder="Type your message here...." rows="3" />
          <button className="btn btn-primary send-sms-btn">
           <i className="bi bi-messenger"></i> Send
          </button>
          <div className="cancel-save-dv">
            <div className="btn btn-light" onClick={CloseChatShadowBox}>
              Cancel
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

function CloseShadowBox() {
  document.getElementById("shadow-dv").style.display = "none";
}

function CloseOrderShadowBox() {
  document.getElementById("order-shadow-dv").style.display = "none";
}

function CloseCardShadowBox() {
  document.getElementById("card-shadow-dv").style.display = "none";
}

function CloseAddressShadowBox() {
  document.getElementById("address-shadow-dv").style.display = "none";
}

function CloseSettingsShadowBox() {
  document.getElementById("settings-shadow-dv").style.display = "none";
}

function CloseChatShadowBox() {
  document.getElementById("chat-shadow-dv").style.display = "none";
}

export { Info, Orders, PaymentCard, Address, Settings, Chat };
