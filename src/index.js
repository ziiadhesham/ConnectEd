// necessary imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/Home";
import MessagesPage from "./Pages/Message/MessagesPage"
import PostDetails from "./Pages/HomePage/PostDetailes";
import NotificationsPage from "./Pages/Notifications/NotificationsPage"
import Message from './Pages/Message/Message';
import ConversationPage from './Pages/Message/ConversionPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <div style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", height: "200%",
                  minHeight: "100vh" ,margin:"0px",padding:"0px"}}>
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostDetails />} />  
      </Routes>
    </Router>
    {/* <NotificationsPage/> */}
 {/* <MessagesPage/> */}
 {/* <Message/> */}
 
  {/* <ConversationPage/> */}
    </div>


  </React.StrictMode>
);

reportWebVitals();