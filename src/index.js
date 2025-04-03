import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NotificationButton from './components/NotificationButton';
import reportWebVitals from './reportWebVitals';
import LikeButton from './components/likeButton';
import BookmarkButton from './components/BookmarkButton';
import CommentButton from './components/CommentButton';
import RepostButton from './components/RepostButton';
import GifPhoto from './components/GifPhoto';
import SocialSidebarItem from './components/SocialSidebarItem';
import SocialSidebarUserItem from './components/SocialSidebarUserItem';
import Check from './components/check';
import PasswordInput from './components/PasswordInput';
import PostActions from './components/PostActions';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ backgroundColor: "#37373d", height: "100vh" }}>
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
    
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
