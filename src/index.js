// necessary imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Your app component imports
import BookmarkFolderModal from './components/BookMarkFolderModal';
import Sidebar from './components/Sidebar';
import SettingProfileSidebar from './components/SettingProfieSidebar';
import HomeIcon from '@mui/icons-material/Home';
import HomePage from './Pages/HomePage/Home';
import ComposerInput from './components/ComposerInput';
import Feed from './Pages/HomePage/Feed';
import ArticleCard from './components/ArticleCard';
import TextAndVedio from './components/TextAndVedio';
import TextAndPhoto from './components/textAndPhoto';
import TrendingTopics from './Pages/HomePage/TrendingTopics';
import PostModal from './components/PostModel';
import Settings from './Pages/HomePage/Settings';

import MessagesPage from "./Pages/Message/MessagesPage";
import PostDetails from "./Pages/HomePage/PostDetailes";
import NotificationsPage from "./Pages/Notifications/NotificationsPage";
import Message from './Pages/Message/Message';
import ConversationPage from './Pages/Message/ConversionPage';
import LoginForm from './Pages/LoginPages/LoginForm';
import ResetPassword from './Pages/LoginPages/ResetPassword';
import ConfirmPassword from './Pages/LoginPages/ConfirmPassword';
import SignUpForm from './Pages/LoginPages/SignUpForm';
import Profile from './Pages/ProfilePage/ProfileUser';
import Followers from './Pages/ProfilePage/Followers&Following';
import SocialFolderItem from './components/SocialFolderItem';
import BookmarksFolder from './Pages/Bookmarks/BookmarksFolder';
import BookmarkedPosts from './Pages/Bookmarks/BookmarkedPosts';
import BookmarkPage from './Pages/Bookmarks/BookmarkPage';

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
        </Routes>
      </Router>
    </div>
  </React.StrictMode>
);

// For performance measurement
reportWebVitals();
