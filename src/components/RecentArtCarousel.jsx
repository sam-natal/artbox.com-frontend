import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    id: 1,
    image: require("../resources/art-artsy-creative-36759.jpg"),
    caption: "A toy car",
    description: "Description here",
  },
  {
    id: 2,
    image: require("../resources/african-abstract2.jpg"),
    caption: "African abstract",
    description: "Description Here",
  },
  {
    id: 3,
    image: require("../resources/african-abstract1.jpg"),
    caption: "African woman",
    description: "Description Here",
  },
];

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      fade
      controls={false}
      indicators={false}
      interval={1000}
    >
      {data.map((slide, i) => {
        return (
          <Carousel.Item key={slide.id}>
            <img
              className="d-block w-100 recent-img"
              src={slide.image}
              alt="slider "
            />
            <div className="crsel-capt">
              <Carousel.Caption>
                <h3>{slide.caption}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default HomeCarousel;
