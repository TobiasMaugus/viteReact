// src/Header.tsx

import React from 'react';

// Definição do componente Header
const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Welcome to My App</h1>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#home">Home</a></li>
          <li style={styles.navItem}><a href="#about">About</a></li>
          <li style={styles.navItem}><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

// Estilos em linha para o Header (opcional)
const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '20px',
    textAlign: 'center' as const,
  },
  title: {
    color: '#61dafb',
    margin: 0,
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    margin: '20px 0 0 0',
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    margin: '0 15px',
  },
};

export default Header;
