import React from "react";
import "./header--styles.css";

const Header: React.FC = ()=>{
    return(
        <div className="header--container">
                <button className="header--button">add</button>
                <button className="header--button">edit</button>
                <button className="header--button">remove</button>
        </div>
    )
}
export default Header;