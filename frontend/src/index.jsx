import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client' instead of 'react-dom'
import App from './App';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('app'));

// Render the app using the new API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

