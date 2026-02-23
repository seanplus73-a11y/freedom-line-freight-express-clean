import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './app/App';

// Force fresh build - 2025-02-23

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);