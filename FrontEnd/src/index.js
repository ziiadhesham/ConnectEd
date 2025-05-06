import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Pages imports
import HomePage from './Pages/HomePage/Home';
import Settings from './Pages/HomePage/Settings';
import MessagesPage from "./Pages/Message/MessagesPage";
import PostDetails from "./Pages/HomePage/PostDetailes";
import NotificationsPage from "./Pages/Notifications/NotificationsPage";
import LoginForm from './Pages/LoginPages/LoginForm';
import ResetPassword from './Pages/LoginPages/ResetPassword';
import ConfirmPassword from './Pages/LoginPages/ConfirmPassword';
import SignUpForm from './Pages/LoginPages/SignUpForm';
import Profile from './Pages/ProfilePage/ProfileUser';
import Followers from './Pages/ProfilePage/FollowersAndFollowing';
import BookmarkPage from './Pages/Bookmarks/BookmarkPage';
import SettingsBlocked from './Pages/HomePage/SettingsBlocked';
import SettingsNotifications from './Pages/HomePage/SettingsNotifications';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", height: "200%", minHeight: "100vh", margin: "0px", padding: "0px" }}>
      <Router>
        <Routes>
          {/* Default page is LoginForm */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/confirm-password" element={<ConfirmPassword />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/bookmarks" element={<BookmarkPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/notifications" element={<SettingsNotifications />} />
          <Route path="/settings/blocked" element={<SettingsBlocked />} />

        </Routes>
      </Router>
    </div>
  </React.StrictMode>
);

// For performance measurement
reportWebVitals();
