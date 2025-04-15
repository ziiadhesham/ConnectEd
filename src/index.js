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
import LoginForm from './Pages/LoginPages/LoginForm';
import ResetPassword from './Pages/LoginPages/ResetPassword';
import ConfirmPassword from './Pages/LoginPages/ConfirmPassword';
import SignUpForm from './Pages/LoginPages/SignUpForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <div style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", height: "200%",
                  minHeight: "100vh" ,margin:"0px",padding:"0px"}}>
    
    <Router>
  <Routes>
    {/* Default page is LoginForm */}
    <Route path="/" element={<LoginForm />} /> 

    {/* Route for HomePage, accessible after login */}
    <Route path="/home" element={<HomePage />} />

    {/* Route for Post Details page */}
    <Route path="/post/:id" element={<PostDetails />} />

    {/* Other routes */}
    <Route path="/notifications" element={<NotificationsPage />} />
    <Route path="/messages" element={<MessagesPage />} />
    <Route path="/reset-password" element={<ResetPassword />} />
    <Route path="/confirm-password" element={<ConfirmPassword />} />
    <Route path="/signup" element={<SignUpForm />} />
  </Routes>
</Router>


    </div>


  </React.StrictMode>
);

reportWebVitals();