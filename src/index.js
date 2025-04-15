import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // لو عندك ملف ستايلات
import MessagesPage from './Pages/Message/MessagesPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MessagesPage />

  </React.StrictMode>
);