import React from "react";
import "./homebody--styles.css";
import Header from "../Header/header.tsx";
import Carousel from "../Carousel/Carousel.tsx";

const HomeBody: React.FC = ()=>{
    return(
        <div className="homeBody--container">
            <Header/>
            <div className="carousel--container"> <Carousel /></div>
        </div>
    )
}
export default HomeBody;