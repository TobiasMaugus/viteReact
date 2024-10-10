import React from 'react';
import "./HomeCard.css";

interface CardProps {
    title: string;
    content: string;
}

const HomeCard: React.FC<CardProps> = ({ title, content }:CardProps) => {
  return (
    <div className="Homecard">
      <h3 className='HomecardTitle'>{title}</h3>
      <p className='HomecardContent'>{content}</p>
    </div>
  );
};

export default HomeCard;