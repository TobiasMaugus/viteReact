import React from "react"
import "./card-styles.css"
import icon1 from "../../assets/naipe1.svg"
import icon2 from "../../assets/naipe2.svg"
import icon3 from "../../assets/naipe3.svg"
import icon4 from "../../assets/naipe4.svg"
import GitHubLoginButton from "../Github-button/github-button"
import "./card-styles.css"

const Card: React.FC = ()=>{
    return(
        <div className="card--container">
            <div className="card--pictures--container">
                <img src={icon1} alt="icon1" className="card--icons"/>
                <img src={icon3} alt="icon3" className="card--icons"/>
                <img src={icon2} alt="icon2" className="card--icons"/>
                <img src={icon4} alt="icon4" className="card--icons"/>
            </div>
            <div className="card--texts">
                <h1 className="card--title">Welcome</h1>
                <h1 className="card--subtitle">Please login with Github</h1>
            </div>
            <div className="github--button"> <GitHubLoginButton/></div>
        </div>
    )
}

export default Card;