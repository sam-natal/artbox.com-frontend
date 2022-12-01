import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/ArtCard";
import axios from "axios";

function Arts() {
  
  const [viewArt, setArt] = useState([]);
  useEffect(() => {
    axios.get(`/api/view-art`).then((res) => {
      if (res.data.status === 200) {
        setArt(res.data.arts);
      }
    });
  }, []);

  //Codes to fetch data using laravel API's by category filter
  const getCategoryFilter = () => {
    var category = document.getElementById("category-filter").value;
    const data = {
      category: category,
    };

    axios.post(`/api/categoryFilter`, data).then((res) => {
      if (res.data.status === 200) {
        setArt(res.data.arts);
      }
    });
  };

  //Codes to fetch data using laravel API's by price filter
  const getPriceFilter = () => {
    var price = document.getElementById("price-filter").value;
    const data = {
      price: price,
    };

    axios.post(`/api/priceFilter`, data).then((res) => {
      if (res.data.status === 200) {
        setArt(res.data.arts);
      }
    });
  };

  //Codes to fetch data using laravel API's by size filter
  const getSizeFilter = () => {
    var size = document.getElementById("size-filter").value;
    const data = {
      size: size,
    };

    axios.post(`/api/sizeFilter`, data).then((res) => {
      if (res.data.status === 200) {
        setArt(res.data.arts);
      }
    });
  };

  //Codes to fetch data using laravel API's by orientation filter
  const getOrientationFilter = () => {
    var orientation = document.getElementById("orientation-filter").value;
    const data = {
      orientation: orientation,
    };

    axios.post(`/api/orientationFilter`, data).then((res) => {
      if (res.data.status === 200) {
        setArt(res.data.arts);
      }
    });
  };

  //Mapping data to the card for the display.
  var show_arts = "";
  show_arts = viewArt.map((item) => {

  
    return (
      <div
        key={item.id}
        className="col col-lg-3 col-md-4 col-sm-12 col-xs-12 prod-container"
      >
        <Card
          artID={item.id}
          img={"http://127.0.0.1:8000/storage/" + item.image_path.slice(7)}
          title={item.title}
          width={item.width}
          height={item.height}
          price={item.price}
        />
      </div>
    );
  });

  return (
    <>
      <Navbar />
      {/* <Filter /> */}

      <div className="filter-dv">
        <hr />
        <h6>
          <i className="bi bi-filter-left"></i>Filter:
        </h6>
        <form>
          <div className="form-group">
            <div className="select-container">
              <select
                id="category-filter"
                className="form-control"
                style={{ cursor: "pointer" }}
                onChange={getCategoryFilter}
              >
                <option value="">Category &nbsp;&nbsp;&nbsp;&#8744;</option>
                <option value="1">People</option>
                <option value="2">Animals</option>
                <option value="3">Abstract</option>
                <option value="4">Flowers</option>
              </select>
              {/* <i className="bi bi-chevron-down filter-arrow"></i>     */}
            </div>
          </div>
        </form>

        <form>
          <div className="form-group">
            <div className="select-container">
              <select
                className="form-control"
                style={{ cursor: "pointer" }}
                id="price-filter"
                onChange={getPriceFilter}
              >
                <option>Price &nbsp;&nbsp;&nbsp;&#8744;</option>
                <option value="25">Under $25</option>
                <option value="50">$25 - $50</option>
                <option value="75">$50 - $75</option>
                <option value="100">$75 - $100</option>
                <option value="101">Above $100</option>
              </select>
            </div>
          </div>
        </form>

        <form>
          <div className="form-group">
            <div className="select-container">
              <select
                className="form-control"
                style={{ cursor: "pointer" }}
                id="size-filter"
                onChange={getSizeFilter}
              >
                <option>Size &nbsp;&nbsp;&nbsp;&#8744;</option>
                <option value="10">Small</option>
                <option value="20">Medium</option>
                <option value="30">Large</option>
              </select>
            </div>
          </div>
        </form>

        <form>
          <div className="form-group">
            <div className="select-container">
              <select
                className="form-control"
                style={{ cursor: "pointer" }}
                id="orientation-filter"
                onChange={getOrientationFilter}
              >
                <option>Orientation &nbsp;&nbsp;&nbsp;&#8744;</option>
                <option value="pot">Portrait</option>
                <option value="lan">Landscape</option>
              </select>
              {/* <i className="bi bi-chevron-down filter-arrow"></i> */}
            </div>
          </div>
        </form>
      </div>

      <div className="container">
        <div className="row">{show_arts}</div>
      </div>
      <Footer />
    </>
  );
}

export default Arts;
