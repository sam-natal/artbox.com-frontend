import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/ArtistCard";
import axios from "axios";

function Artists() {
  const [viewArtists, setArtists] = useState([]);
  useEffect(() => {
    axios.get(`/api/view-artists`).then((res) => {
      if (res.data.status === 200) {
        setArtists(res.data.artists);
      }
    });
  }, []);

  //Mapping data to the card for the display.
  var show_artists = "";
  show_artists = viewArtists.map((item) => {
    return (
      <div
        key={item.id}
        className="col col-lg-3 col-md-4 col-sm-12 col-xs-12 prod-container"
      >
        <Card
          artistID={item.id}
          img={"https://admin.artisangalleryhub.com/storage/" + item.profile_picture.slice(7)}
          title={item.first_name+" "+item.last_name}
        />
      </div>
    );
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{show_artists}</div>
      </div>
      <Footer />
    </>
  );
}

export default Artists;
