import React, { useEffect, useState } from "react";
import Card from "./ArtCard";
import axios from "axios";

function TopArtCarousel() {
  const [loading, setLoading] = useState(true);
  const [viewArt, setArt] = useState([]);

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
  } else {
    console.log(viewArt[0].price);
  }

  //console.log(viewArt[0].price);
  // var show_arts = "";
  // show_arts = viewArt.map((item) => {
  //   return (
  //     <div class="col col-lg-3 col-md-4 col-sm-12 col-xs-12 prod-container">
  //       <Card
  //         img={'http://127.0.0.1:8000/storage/'+item.image_path.slice(7)}
  //         title={item.title}
  //         price={'$ '+item.price}
  //       />
  //     </div>
  //   );
  // });

  //console.log(viewArt[0]);

  return (
    <div
      id="carouselExampleControls"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
      style={{ margin: "1rem 1rem 6rem" }}
    >
      <div class="carousel-inner">
        {/* COROUSEL ITEM 1 */}
        <div class="carousel-item active">
          <div class="cards-wrapper">
            <Card
              artID={viewArt[0].id}
              img={
                "http://127.0.0.1:8000/storage/" +
                viewArt[0].image_path.slice(7)
              }
              title={viewArt[0].title}
              width={viewArt[0].width}
              height={viewArt[0].height}
              price={"$ " + viewArt[0].price}
            />
            <Card
              artID={viewArt[1].id}
              img={
                "http://127.0.0.1:8000/storage/" +
                viewArt[1].image_path.slice(7)
              }
              title={viewArt[1].title}
              width={viewArt[1].width}
              height={viewArt[1].height}
              price={"$ " + viewArt[1].price}
            />
            <Card
              artID={viewArt[2].id}
              img={
                "http://127.0.0.1:8000/storage/" +
                viewArt[2].image_path.slice(7)
              }
              title={viewArt[2].title}
              width={viewArt[2].width}
              height={viewArt[2].height}
              price={"$ " + viewArt[2].price}
            />
            <Card
              artID={viewArt[3].id}
              img={
                "http://127.0.0.1:8000/storage/" +
                viewArt[3].image_path.slice(7)
              }
              title={viewArt[3].title}
              width={viewArt[3].width}
              height={viewArt[3].height}
              price={"$ " + viewArt[3].price}
            />
          </div>
        </div>

        {/* COROUSEL ITEM 2 */}
        <div class="carousel-item ">
          <div class="cards-wrapper">
            <Card
              artID={viewArt[4].id}
              img={
                "http://127.0.0.1:8000/storage/" +
                viewArt[4].image_path.slice(7)
              }
              title={viewArt[4].title}
              width={viewArt[4].width}
              height={viewArt[4].height}
              price={"$ " + viewArt[4].price}
            />

            <Card
              artID={viewArt[5].id}
              img={
                "http://127.0.0.1:8000/storage/" +
                viewArt[5].image_path.slice(7)
              }
              title={viewArt[5].title}
              width={viewArt[5].width}
              height={viewArt[5].height}
              price={"$ " + viewArt[5].price}
            />
            <Card
              artID={viewArt[6].id}
              img={
                "http://127.0.0.1:8000/storage/" +
                viewArt[6].image_path.slice(7)
              }
              title={viewArt[6].title}
              width={viewArt[6].width}
              height={viewArt[6].height}
              price={"$ " + viewArt[6].price}
            />
            <Card
              artID={viewArt[7].id}
              img={
                "http://127.0.0.1:8000/storage/" +
                viewArt[7].image_path.slice(7)
              }
              title={viewArt[7].title}
              width={viewArt[7].width}
              height={viewArt[7].height}
              price={"$ " + viewArt[7].price}
            />
          </div>
        </div>

        {/* COROUSEL ITEM 3 */}
        {/* <div class="carousel-item ">
          <div class="cards-wrapper">
            <Card
              img={require("../resources/abstract-expressionism-abstract-painting-acrylic-paint-1585325.jpg")}
              title="Art title"
              price="Price: $100 to $160"
            />
            <Card
              img={require("../resources/a-removebg-preview.png")}
              title="Art title"
              price="Price: $100 to $160"
            />
            <Card
              img={require("../resources/b-removebg-preview.png")}
              title="Art title"
              price="Price: $100 to $160"
            />
            <Card
              img={require("../resources/c-removebg-preview.png")}
              title="Art title"
              price="Price: $100 to $160"
            />
          </div>
        </div> */}
      </div>

      <button
        class="carousel-control-prev ctrl-btn"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next ctrl-btn"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default TopArtCarousel;
