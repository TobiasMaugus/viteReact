import React, { useState } from 'react';
import './Carousel.css'; // Import your CSS file

interface CarouselProps {
  cards: React.ReactElement[]; // Array of React elements (cards)
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    const newIndex = (currentIndex - 1 + cards.length) % cards.length;
    setCurrentIndex(newIndex);
  };

  const nextCard = () => {
    const newIndex = (currentIndex + 1) % cards.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div
          className="carousel-content"
          style={{
            transform: `translateX(-${currentIndex * (200 / cards.length)}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div key={index} className="carousel-card">
              {card}
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-btn prev-btn" onClick={prevCard}>
        ‹
      </button>
      <button className="carousel-btn next-btn" onClick={nextCard}>
        ›
      </button>
    </div>
  );
};

export default Carousel;