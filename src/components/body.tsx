import React from "react";
import GitHubLoginButton from "./github-button";

const Body: React.FC = ()=>{
    return(
        <div>
            <h1>Welcome</h1>
            <h2>Please login with Github</h2>
            <GitHubLoginButton/>
        </div>
    )
}

export default Body;