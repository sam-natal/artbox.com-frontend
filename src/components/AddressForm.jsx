import React from "react";

function AddressForm() {
  return (
    <form className="row g-3" id="address-form">
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          id="inputEmail4"
          placeholder="First name"
        />
      </div>

      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          id="inputEmail4"
          placeholder="Last name"
        />
      </div>

      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          id="inputEmail4"
          placeholder="Email"
        />
      </div>

      <div className="col-md-6">
        <input
          type="tel"
          className="form-control"
          id="inputEmail4"
          placeholder="Phone"
        />
      </div>

      <div className="col-12">
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Address 1"
        />
      </div>

      <div className="col-12">
        <input
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Address 2"
        />
      </div>
      <div className="col-12">
        <select id="inputState" className="form-select">
          <option selected>Country.</option>
          <option>...</option>
        </select>
      </div>

      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          id="inputCity"
          placeholder="City"
        />
      </div>

      <div className="col-md-4">
        <select id="inputState" className="form-select" > 
          <option selected>State/Region</option>
          <option>...</option>
        </select>
      </div>
      <div className="col-md-2">
        <input
          type="text"
          className="form-control"
          id="inputZip"
          placeholder="Zip"
        />
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" >
            Make this my default address
          </label>
        </div>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Continue
        </button>
      </div>
    </form>
  );
}

export default AddressForm;
