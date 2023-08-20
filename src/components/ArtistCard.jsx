import React from "react";

function Card(props) {
  //A function to store art ID on the local storage
  function storeArtistId() {
    localStorage.setItem("artist_id", props.artistID);
  }

  return (
    <div className="artist-card">
      <img
        src={props.img}
        className="card-img-top rounded-circle "
        alt="..."
        style={{ width: "200px", height: "200px" }}
      />
      <div className="card-body mt-3">
        <h5 className="card-title">{props.title}</h5>
      </div>
      <a
        type="button"
        href="/view_artist"
        className="btn btn-outline-dark mt-3"
        style={{ width: "100%" }}
        onClick={storeArtistId}
      >
        View
      </a>
    </div>
  );
}

export default Card;
