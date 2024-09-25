import React from "react";
import GitHubLoginButton from "../Github-button/github-button";
import "./body-styles.css"

const Body: React.FC = ()=>{
    return(
        <div className="body--container">
            <h1 className="body--container--title">Welcome</h1>
            <h2 className="body--container--text">Please login with Github</h2>
            <GitHubLoginButton/>
        </div>
    )
}

export default Body;