import React from "react";

function CreditCardForm(){
    return(
        <div className="row gy-3" id="credit-card-form">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="cc-name"
            placeholder="Card name"
            required
          />
          <small className="text-muted">Full name as displayed on card</small>
          <div className="invalid-feedback">Name on card is required</div>
        </div>

        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="cc-number"
            placeholder="Card number"
            required
          />
          <div className="invalid-feedback">
            Credit card number is required
          </div>
        </div>

        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            id="cc-expiration"
            placeholder="Expiration ( MM )"
            required
          />
          <div className="invalid-feedback">Expiration date required</div>
        </div>

        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            id="cc-expiration"
            placeholder="Expiration ( YY )"
            required
          />
          <div className="invalid-feedback">Expiration date required</div>
        </div>

        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            id="cc-cvv"
            placeholder="CVV"
            required
          />
          <div className="invalid-feedback">Security code required</div>
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Make this my default address
            </label>
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Continue
          </button>
        </div>
      </div>
    )
}

export default CreditCardForm;