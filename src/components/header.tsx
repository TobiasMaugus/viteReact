// src/Header.tsx

import React from 'react';

// Definição do componente Header
const Header: React.FC = () => {
  return (
    <header>
      <h1>Welcome to My App</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li ><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;
