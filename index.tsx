import React from 'react';
import ReactDOM from 'react-dom/client';
// FIX: Import types module to apply global JSX augmentations for custom elements.
import './types';
// FIX: Correct import path for TypeScript file.
import App from './app';
// import './index.css'; // Temporarily disabled for CDN usage

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);