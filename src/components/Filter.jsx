import React from "react";

function Filter() {
  return (
    <div class="filter-dv">
      <hr />
      <h6>
        <i class="bi bi-filter-left"></i>Filter:
      </h6>
      <form>
        <div class="form-group">
          <div class="select-container">
            <select class="form-control">
              <option>Category</option>
              <option>Abstract</option>
              <option>People</option>
              <option>Flowers</option>
              <option>Animals</option>
            </select>
            <i class="bi bi-chevron-down filter-arrow"></i>
          </div>

          <div class="select-container">
            <select class="form-control">
              <option>
                Price <i class="arrow down"></i>
              </option>
              <option>Up to $25</option>
              <option>$25 - $100</option>
              <option>$100 - $500</option>
              <option>$500 - $1000</option>
            </select>
            <i class="bi bi-chevron-down filter-arrow"></i>
          </div>

          <div class="select-container">
            <select class="form-control">
              <option>
                Size <i class="arrow down"></i>
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            <i class="bi bi-chevron-down filter-arrow"></i>
          </div>

          <div class="select-container">
            <select class="form-control">
              <option>
                Orientation <i class="arrow down"></i>
              </option>
              <option>Portrait</option>
              <option>Landscape</option>
            </select>
            <i class="bi bi-chevron-down filter-arrow"></i>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filter;
