import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from './components/privateRoute';

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
          {/* Public Routes */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/confirm-password" element={<ConfirmPassword />} />
          <Route path="/signup" element={<SignUpForm />} />

          {/* Protected Routes */}
          <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/post/:id" element={<PrivateRoute><PostDetails /></PrivateRoute>} />
          <Route path="/notifications" element={<PrivateRoute><NotificationsPage /></PrivateRoute>} />
          <Route path="/messages" element={<PrivateRoute><MessagesPage /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/followers" element={<PrivateRoute><Followers /></PrivateRoute>} />
          <Route path="/bookmarks" element={<PrivateRoute><BookmarkPage /></PrivateRoute>} />
          <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
          <Route path="/settings/notifications" element={<PrivateRoute><SettingsNotifications /></PrivateRoute>} />
          <Route path="/settings/blocked" element={<PrivateRoute><SettingsBlocked /></PrivateRoute>} />
        </Routes>
      </Router>
    </div>
  </React.StrictMode>
);

reportWebVitals();
