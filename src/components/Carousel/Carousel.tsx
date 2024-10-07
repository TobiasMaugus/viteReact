import { Component } from "react";
import "./Carousel.css";
import HomeCard from "../HomeCard/HomeCard";
import Slider from "react-slick";

const cards: React.ReactElement[] = [
  <HomeCard title="Card 1" content="This is the first card" />,
  <HomeCard title="Card 2" content="This is the second card" />,
  <HomeCard title="Card 3" content="This is the third card" />,
  <HomeCard title="Card 4" content="This is the fourth card" />,
  <HomeCard title="Card 5" content="This is the fifth card" />
];

export default class Carousel extends Component<{}, { ready: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      ready: false
    };
  }

  componentDidMount() {
    // Simula um delay para garantir que o carrossel só seja renderizado após o carregamento
    setTimeout(() => {
      this.setState({ ready: true });
    }, 100); // Ajuste o delay conforme necessário
  }

  render() {
    const { ready } = this.state;
    const settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      className: "slides",
    };

    if (!ready) {
      return <div>Loading...</div>; // Ou um componente de loading se preferir
    }

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
