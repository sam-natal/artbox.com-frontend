import React, { useEffect, useState } from "react";
import Card from "./ArtCard";
import axios from "axios";

function TopArtCarousel() {
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    axios.get(`/api/view-art`).then((res) => {
      if (res.data.status === 200) {
        setArt(res.data.arts);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <p>wait things are loading.....</p>;
  } 

  return (
    <div
      id="carouselExampleControls"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
      style={{ margin: "1rem 1rem 6rem" }}
    >
      <div className="carousel-inner">
        {/* COROUSEL ITEM 1 */}
        <div className="carousel-item active">
          <div className="cards-wrapper">
            <Card
              artID={viewArt[0].id}
              img={
                "https://admin.artisangalleryhub.com/storage/" +
                viewArt[0].image_path.slice(7)
              }
              title={viewArt[0].title}
              width={viewArt[0].width}
              height={viewArt[0].height}
              price={viewArt[0].price}
              qty ={1}
              ttlPrice={viewArt[0].price}
              wish = {wishes}
            />
            <Card
              artID={viewArt[1].id}
              img={
                "https://admin.artisangalleryhub.com/storage/" +
                viewArt[1].image_path.slice(7)
              }
              title={viewArt[1].title}
              width={viewArt[1].width}
              height={viewArt[1].height}
              price={viewArt[1].price}
              qty ={1}
              ttlPrice={viewArt[1].price}
              wish = {wishes}
            />
            <Card
              artID={viewArt[2].id}
              img={
                "https://admin.artisangalleryhub.com/storage/" +
                viewArt[2].image_path.slice(7)
              }
              title={viewArt[2].title}
              width={viewArt[2].width}
              height={viewArt[2].height}
              price={viewArt[2].price}
              qty ={1}
              ttlPrice={viewArt[2].price}
              wish = {wishes}
            />
            <Card
              artID={viewArt[3].id}
              img={
                "https://admin.artisangalleryhub.com/storage/" +
                viewArt[3].image_path.slice(7)
              }
              title={viewArt[3].title}
              width={viewArt[3].width}
              height={viewArt[3].height}
              price={viewArt[3].price}
              qty ={1}
              ttlPrice={viewArt[3].price}
              wish = {wishes}
            />
          </div>
        </div>

        {/* COROUSEL ITEM 2 */}
        <div className="carousel-item ">
          <div className="cards-wrapper">
            <Card
              artID={viewArt[4].id}
              img={
                "https://admin.artisangalleryhub.com/storage/" +
                viewArt[4].image_path.slice(7)
              }
              title={viewArt[4].title}
              width={viewArt[4].width}
              height={viewArt[4].height}
              price={viewArt[4].price}
              qty ={1}
              ttlPrice={viewArt[4].price}
              wish = {wishes}
            />

            <Card
              artID={viewArt[5].id}
              img={
                "https://admin.artisangalleryhub.com/storage/" +
                viewArt[5].image_path.slice(7)
              }
              title={viewArt[5].title}
              width={viewArt[5].width}
              height={viewArt[5].height}
              price={viewArt[5].price}
              qty ={1}
              ttlPrice={viewArt[5].price}
              wish = {wishes}
            />
            <Card
              artID={viewArt[6].id}
              img={
                "https://admin.artisangalleryhub.com/storage/" +
                viewArt[6].image_path.slice(7)
              }
              title={viewArt[6].title}
              width={viewArt[6].width}
              height={viewArt[6].height}
              price={viewArt[6].price}
              qty ={1}
              ttlPrice={viewArt[6].price}
              wish = {wishes}
            />
            <Card
              artID={viewArt[7].id}
              img={
                "https://admin.artisangalleryhub.com/storage/" +
                viewArt[7].image_path.slice(7)
              }
              title={viewArt[7].title}
              width={viewArt[7].width}
              height={viewArt[7].height}
              price={viewArt[7].price}
              qty ={1}
              ttlPrice={viewArt[7].price}
              wish = {wishes}
            />
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev ctrl-btn"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next ctrl-btn"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default TopArtCarousel;
