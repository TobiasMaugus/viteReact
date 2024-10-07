import { Component } from "react";
import "./styles.css";
import HomeCard from "../HomeCard/HomeCard";

import Slider from "react-slick";

const cards: React.ReactElement[] = [
  <HomeCard title="Card 1" content="This is the first card" />,
  <HomeCard title="Card 2" content="This is the second card" />,
  <HomeCard title="Card 3" content="This is the third card" />,
  <HomeCard title="Card 4" content="This is the fourth card" />,
  <HomeCard title="Card 5" content="This is the fifth card" />
];

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      className: "slides",
    };

    return (
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div className="wrapper" key={index}>
            {card}
          </div>
        ))}
      </Slider>
    );
  }
}
