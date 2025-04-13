// necessary imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/Home";
import PostDetails from "./Pages/HomePage/PostDetailes";
import NotificationsPage from "./Pages/Notifications/NotificationsPage"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <div style={{ backgroundColor: "rgba(40, 40, 40, 0.7)", height: "200%",
                  minHeight: "100vh" ,margin:"0px",padding:"0px"}}>
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostDetails />} />  
      </Routes>
    </Router>
    {/* <NotificationsPage/> */}

    </div>


  </React.StrictMode>
);

reportWebVitals();
