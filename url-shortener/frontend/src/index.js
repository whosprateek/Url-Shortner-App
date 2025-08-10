import React from 'react';
import ReactDOM from 'react-dom/client';
 // Optional: for global styles
import './index.css'; // Add your global styles here
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);