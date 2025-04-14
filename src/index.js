// necessary imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';

import BookmarkFolderModal from './components/BookMarkFolderModal';
import Sidebar from './components/Sidebar';
import SettingProfileSidebar from './components/SettingProfieSidebar';
import HomeIcon from '@mui/icons-material/Home';
import ProfileHeader from './components/ProfileHeader';
import PostModal from './components/PostModel';
import SettingSection from './components/SettingSection';
import EmojiPicker from './components/EmojiPicker';
import InserEmojies from './components/InserEmojies';
import HomePage from './Pages/Message/HomePage';
import Home from './Pages/HomePage/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/Home";
import PostDetails from "./Pages/HomePage/PostDetailes";
import NotificationsPage from "./Pages/Notifications/NotificationsPage"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div style={{ backgroundColor: "#37373d", height: "200%",  minHeight: "100vh"}}>
        {/* <ChatHeader/>
        <ChatHeader/>
      <Check active={true} />
      <Comment/>
      <ConversationItem/>
      <Dropdown/>
      <InputField type="name" placeholder="Full Name" />
      <PhotoAvatar/>
      <NotificationButton showNotification={true} active={true} />
      <LikeButton />
     <BookmarkButton />
     <CommentButton />  
     <RepostButton />
     <GifPhoto src="https://media.giphy.com/media/3o7aCSPqXE5C6T8tBC/giphy.gif" />
     <SocialSidebarItem collapsed={false} />
     <SocialSidebarUserItem name="John Doe" username="johndoe" collapsed={false} active={false}/>
     <Check active={true}/>
     <PasswordInput placeholder={"Passw"} />
     <PostActions />
     <BlockedUser/>
    <FancyButton/>
    <TagPeopleCard name="John Doe" username="johndoe"/>
    <ConversationSelector/>
    <MessageInput/>
    <MessageInput/>
    <MessageInput/>
    <MessageItem isReply={true}/>
    <Header isPosting={false} />
    
    <ProfileCard noAvatar={true} />
    <ProfileCard avatarUrl="https://i.pravatar.cc/150?img=10" />
    <SocialMenuButton/>
    <SocialPost
        avatarSrc="https://example.com/avatar.jpg"
        username="Moyo Shiro"
        time="09:00 AM"
        content="Ready to level up your portfolio game? Check out these 15 standout examples of creative, sleek, and interactive portfolio websites made in..."
      />
      <Tag/>
      <TagButton/>
      <BookmarkFolderModal/> 
       <Sidebar/>
      <SocialSidebarItem label="Home" icon={<HomeIcon />} collapsed={false} />
      <SocialSidebarItem label="Notifications" icon={<NotificationButton />} badge={12} collapsed={false} /> 
<ProfileHeader disabled={false} />
      <PostContent
        username="Moyo Shiro"
        time="09:00 AM"
        text="Ready to level up your portfolio game? Check out these 15 standout examples of creative, sleek, and interactive portfolio websites made in"
        image="https://images.unsplash.com/photo-1535223289827-42f1e9919769"
        video="https://www.w3schools.com/html/mov_bbb.mp4"
      />
      <PostModal/>
    <SettingSection title="Account">
          <p>Email: user@example.com</p>
          <p>Password: ********</p>
        </SettingSection>
    <EmojiPicker/>
    <MessageItem/>  */}
    <HomePage/>    
 </div>
  </React.StrictMode> 
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
