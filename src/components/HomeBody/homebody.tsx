import React from "react";
import "./homebody--styles.css";
import Header from "../Header/header.tsx";
import HomeCard from "../HomeCard/HomeCard.tsx";

const HomeBody: React.FC = ()=>{
    return(
        <div className="homeBody--container">
            <Header/>
            <div className="content--container">
                <HomeCard title="Card 1" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris 
                ac erat et diam congue cursus. Nunc eget maximus lacus, a ultricies dolor.
                Ut ut vehicula nibh. Maecenas tincidunt ligula sed luctus placerat."/>
                <HomeCard title="Card 2" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris 
                ac erat et diam congue cursus. Nunc eget maximus lacus, a ultricies dolor.
                Ut ut vehicula nibh. Maecenas tincidunt ligula sed luctus placerat."/>
                <HomeCard title="Card 3" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris 
                ac erat et diam congue cursus. Nunc eget maximus lacus, a ultricies dolor.
                Ut ut vehicula nibh. Maecenas tincidunt ligula sed luctus placerat."/>
                <HomeCard title="Card 3" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris 
                ac erat et diam congue cursus. Nunc eget maximus lacus, a ultricies dolor.
                Ut ut vehicula nibh. Maecenas tincidunt ligula sed luctus placerat."/>
                <HomeCard title="Card 3" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris 
                ac erat et diam congue cursus. Nunc eget maximus lacus, a ultricies dolor.
                Ut ut vehicula nibh. Maecenas tincidunt ligula sed luctus placerat."/>
                <HomeCard title="Card 3" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris 
                ac erat et diam congue cursus. Nunc eget maximus lacus, a ultricies dolor.
                Ut ut vehicula nibh. Maecenas tincidunt ligula sed luctus placerat."/>
                 <HomeCard title="Card 3" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris 
                ac erat et diam congue cursus. Nunc eget maximus lacus, a ultricies dolor.
                Ut ut vehicula nibh. Maecenas tincidunt ligula sed luctus placerat."/>
                <HomeCard title="Card 3" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris 
                ac erat et diam congue cursus. Nunc eget maximus lacus, a ultricies dolor.
                Ut ut vehicula nibh. Maecenas tincidunt ligula sed luctus placerat."/>
            </div>
        </div>

    )
}
export default HomeBody;