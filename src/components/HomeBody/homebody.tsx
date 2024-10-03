import React from "react";
import "./homebody--styles.css";
import Header from "../Header/header.tsx";
import HomeCard from "../HomeCards/HomeCard.tsx";
import Carousel from "../Carousel/Carousel.tsx";

const HomeBody: React.FC = ()=>{
    const cards: React.ReactElement[] = [
        <HomeCard title="Card 1" content="This is the first card" />,
        <HomeCard title="Card 2" content="This is the second card" />,
        <HomeCard title="Card 3" content="This is the third card" />,
      ];
    return(
        <div className="homeBody--container">
            <Header/>
            <div className="carousel--container"> <Carousel cards={cards}/></div>
        </div>
    )
}
export default HomeBody;