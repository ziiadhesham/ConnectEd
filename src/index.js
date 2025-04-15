// necessary imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
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
import Settings from './Pages/HomePage/Settings';
import SettingsNotifications from './Pages/HomePage/SettingsNotifications';
import SettingsBlocked from "./Pages/HomePage/SettingsBlocked"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <BrowserRouter>
   <SettingsBlocked/>
   </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();