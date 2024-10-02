import React from "react";
import "./header--styles.css";

const Header: React.FC = ()=>{
    return(
        <div className="header--container">
            <nav>
                <button>add</button>
                <button>edit</button>
                <button>remove</button>
            </nav>
        </div>
    )
}
export default Header;