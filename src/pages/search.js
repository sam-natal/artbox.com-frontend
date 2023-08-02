import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/ArtCard";
import axios from "axios";

function Search() {
  const [viewArt, setArt] = useState([]);

  const [wishes,setWishes] = useState([]);
  var uID = localStorage.getItem("user_id");

  useEffect(() => {
  axios.post(`/api/checkWish`, {uID : uID}).then((res) => {
    if (res.data.status === 200 ) {
      setWishes(res.data.check);
    } 
  });
}, []);
 
  var search = localStorage.getItem("search_key");
  const data = {
    search: search,
  };

  axios.post(`/api/search`, data).then((res) => {
    if (res.data.status === 200) {
      setArt(res.data.arts);
    }
  });

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
          qty={1}
          ttlPrice={item.price}
          wish={wishes}
        />
      </div>
    );
  });

 

  return (
    <>
      <Navbar />
      {/* <Filter /> */}

      <div className="container">
        <div className="row">
          {show_arts.length > 0 ? (
            show_arts
          ) : (
            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading mb-5">Oops! We are sorry.</h4>
              <p>
                {" "}
                Unfortunately we were not able to find what you were seraching
                for.
              </p>
              <hr />
              <p className="mb-0">
                Suggestions:
                <ul>
                  <li>Make sure that all words are spelled correctly.</li>
                  <li>Try different keywords.</li>
                  <li>Try more general keywords.</li>
                  <li>Try fewer keywords.</li>
                </ul>
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Search;
