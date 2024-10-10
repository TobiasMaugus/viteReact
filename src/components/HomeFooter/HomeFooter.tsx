import React from "react";
import "./HomeFooter--styles.css";
import githubIcon from "../../assets/github-icon.svg";
import LinkedInIcon from "../../assets/linkedin--icon.svg";

const HomeCard: React.FC = ()=>{
    return (
        <div className="HomeFooter--container">
            <img src={githubIcon} alt="github-icon" className="button--githubIcon"/>
            <img src={LinkedInIcon} alt="github-icon" className="button--githubIcon"/>
        </div>
    )
}

export default HomeCard;