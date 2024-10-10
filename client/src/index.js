import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

// Create a root container
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your app with BrowserRouter here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
