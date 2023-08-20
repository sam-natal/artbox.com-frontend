import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/ArtCard";
import axios from "axios";

function ViewProduct() {
  const [viewArtist, setArtist] = useState([]);
  const artistID = localStorage.getItem("artist_id");
  const uID = localStorage.getItem("user_id");
  const data = {
    id: artistID,
  };

  //Send request to the laravel API's to retrive art details using stored art Id
  useEffect(() => {
    axios.post(`/api/fetchArtistById`, data).then((res) => {
      if (res.data.status === 200) {
        setArtist(res.data.artist);
      }
    });
  }, []);

  var artist = "";
  artist = viewArtist.map((item) => {
    return (
      <div className="row view-prod-dv">
        <div className="artist-container">
          <img
            src={
              "http://127.0.0.1:8000/storage/" + item.profile_picture.slice(7)
            }
            className="card-img-top rounded-circle "
            alt="..."
            style={{ width: "250px", height: "250px" }}
          />
          <div className="card-body mt-3">
            <h5 className="card-title mb-5">
              {item.first_name + " " + item.last_name}
            </h5>
            <h2>Biography</h2>
            <p className="bio">{item.bio}</p>
          </div>
        </div>
      </div>
    );
  });

  // CODES FOR FETCHING ALL RELATED ARTS BY THEIR CATEGORIES BASED ON THE SELECTED ART.
  const [viewArtByArtist, setArtsByArtist] = useState([]);

  axios.post(`/api/fetchArtsByArtistID`, data).then((res) => {
    if (res.data.status === 200) {
      setArtsByArtist(res.data.arts);
    }
  });

  const [wishes, setWishes] = useState([]);
  //var uID = localStorage.getItem("user_id");

  useEffect(() => {
    axios.post(`/api/checkWish`, { uID: uID }).then((res) => {
      if (res.data.status === 200) {
        setWishes(res.data.check);
      }
    });
  }, []);

  var arts_by_artist = "";
  arts_by_artist = viewArtByArtist.map((item) => {
    return (
      <div className="col col-lg-3 col-md-4 col-sm-12 col-xs-12 prod-container">
        <Card
          key={item.id}
          artID={item.id}
          img={"http://127.0.0.1:8000/storage/" + item.image_path.slice(7)}
          title={item.title}
          width={item.width}
          height={item.height}
          price={item.price}
          wish={wishes}
        />
      </div>
    );
  });

  var work_title = viewArtist.map((item) => {
    return (
      <h2 className="related-h" style={{ textAlign: "center" }}>
        {item.first_name + " " + item.last_name + " arts"}
      </h2>
    );
  });

  return (
    <>
      <Navbar />

      {artist}
      {work_title}
      <div className="container related-dv">
        <div className="row">
          {arts_by_artist}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewProduct;
