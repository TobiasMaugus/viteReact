import React from "react";
import "./header--styles.css";
import addIcon from "../../assets/add.svg";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";

const Header: React.FC = ()=>{
    return(
        <div className="header--container">
            <button className="header--button">
                <img src={addIcon} alt="add-icon" className="button--icon"/>
            </button>
            <button className="header--button">
                <img src={editIcon} alt="edit-icon" className="button--icon"/>
            </button>
            <button className="header--button">
            <img src={deleteIcon} alt="delete-icon" className="button--icon"/>
            </button>
        </div>
    )
}
export default Header;