import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/ArtCard";
import axios from "axios";

function PeopleArts() {
  const [viewArt, setArt] = useState([]);

  var category = "1";
  const data = {
    category: category,
  };

  axios.post(`/api/categoryFilter`, data).then((res) => {
    if (res.data.status === 200) {
      setArt(res.data.arts);
    }
  });

  const [wishes,setWishes] = useState([]);
  var uID = localStorage.getItem("user_id");

  useEffect(() => {
  axios.post(`/api/checkWish`, {uID : uID}).then((res) => {
    if (res.data.status === 200 ) {
      setWishes(res.data.check);
    } 
  });
}, []);

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
          qty ={1}
          ttlPrice={item.price}
          wish = {wishes}
        />
      </div>
    );
  });

  return (
    <>
      <Navbar />
      {/* <Filter /> */}

      <div className="container">
        <div className="row">{show_arts}</div>
      </div>
      <Footer />
    </>
  );
}

export default PeopleArts;
