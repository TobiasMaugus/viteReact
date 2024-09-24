// src/main.tsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';  // Importe o App

// Inicializa o React na div com o id "root"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />  {/* Renderiza o componente App */}
  </StrictMode>,
);