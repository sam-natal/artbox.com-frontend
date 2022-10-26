import React from "react";

function CreditCardForm(){
    return(
        <div class="row gy-3" id="credit-card-form">
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            id="cc-name"
            placeholder="Card name"
            required
          />
          <small class="text-muted">Full name as displayed on card</small>
          <div class="invalid-feedback">Name on card is required</div>
        </div>

        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            id="cc-number"
            placeholder="Card number"
            required
          />
          <div class="invalid-feedback">
            Credit card number is required
          </div>
        </div>

        <div class="col-md-3">
          <input
            type="text"
            class="form-control"
            id="cc-expiration"
            placeholder="Expiration ( MM )"
            required
          />
          <div class="invalid-feedback">Expiration date required</div>
        </div>

        <div class="col-md-3">
          <input
            type="text"
            class="form-control"
            id="cc-expiration"
            placeholder="Expiration ( YY )"
            required
          />
          <div class="invalid-feedback">Expiration date required</div>
        </div>

        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            id="cc-cvv"
            placeholder="CVV"
            required
          />
          <div class="invalid-feedback">Security code required</div>
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
      </div>
    )
}

export default CreditCardForm;