import React from "react";

function AddressForm(){
    return(
        <form class="row g-3" id="address-form">
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            placeholder="First name"
          />
        </div>

        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            placeholder="Last name"
          />
        </div>

        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            placeholder="Email"
          />
        </div>

        <div class="col-md-6">
          <input
            type="tel"
            class="form-control"
            id="inputEmail4"
            placeholder="Phone"
          />
        </div>

        <div class="col-12">
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Address 1"
          />
        </div>

        <div class="col-12">
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Address 2"
          />
        </div>

        <div class="col-12">
          <select id="inputState" class="form-select">
            <option selected>Country.</option>
            <option>...</option>
          </select>
        </div>

        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            id="inputCity"
            placeholder="City"
          />
        </div>

        <div class="col-md-4">
          <select id="inputState" class="form-select">
            <option selected>State/Region</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-2">
          <input
            type="text"
            class="form-control"
            id="inputZip"
            placeholder="Zip"
          />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label class="form-check-label" for="gridCheck">
              Make this my default address
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Continue
          </button>
        </div>
      </form>
    )
}

export default AddressForm;