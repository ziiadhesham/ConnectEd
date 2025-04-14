import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NotificationButton from './components/NotificationButton';
import reportWebVitals from './reportWebVitals';
import LikeButton from './components/likeButton';
import BookmarkButton from './components/BookmarkButton';
import CommentButton from './components/CommentButton';
import PostContent from './components/PostContent';
import RepostButton from './components/RepostButton';
import GifPhoto from './components/GifPhoto';
import SocialSidebarItem from './components/SocialSidebarItem';
import SocialSidebarUserItem from './components/SocialSidebarUserItem';
import Check from './components/check';
import PasswordInput from './components/PasswordInput';
import PostActions from './components/PostActions';
import ChatHeader from './components/ChatHeader';
import  Comment  from './components/Comment';
import ConversationItem from './components/ConversationItem';
import Dropdown from './components/DropDown';
import InputField from './components/Input';
import PhotoAvatar from "./components/PhotoAvatar";
import BlockedUser from './components/BlockedUser';
import FancyButton from './components/Button';
import TagPeopleCard from './components/TagPeopleCard';
import ConversationSelector from './components/CreateNewConversation';
import MessageInput from './components/MessageInput';
import MessageItem from './components/MessageItem';
import Header from './components/HeaderPosting';
import { useState } from 'react';
import ProfileCard from './components/ProfileContainer';
import SocialMenuButton from './components/SocialMoreButton';
import SocialPost from './components/SocialPost';
import Tag from './components/Tag';
import TagButton from './components/TagButton';

import BookmarkFolderModal from './components/BookMarkFolderModal';
import Sidebar from './components/Sidebar';
import SettingProfileSidebar from './components/SettingProfieSidebar';
import HomeIcon from '@mui/icons-material/Home';
import  HomePage  from './Pages/HomePage/Home';
import ComposerInput from './components/ComposerInput';
import Feed from './Pages/HomePage/Feed';
import ArticleCard from './components/ArticleCard';
import TextAndVedio from './components/TextAndVedio';
import TextAndPhoto from './components/textAndPhoto';
import TrendingTopics from './Pages/HomePage/TrendingTopics';

import PostModal from './components/PostModel';
import Settings from './Pages/HomePage/Settings';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Settings />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//      <div style={{ backgroundColor: "rgb(64, 64, 70)", height: "200%",  minHeight: "100vh" ,margin:"0px",padding:"0px"}}>
//      <ChatHeader/>
//       <Check active={true} />
//       <Comment/>
//       <ConversationItem/>
//       <Dropdown/>
      
//       <InputField type="name" placeholder="Full Name" />
//       <PhotoAvatar/>
//       <NotificationButton showNotification={true} active={true} />
//       <LikeButton />
//      <BookmarkButton />
//      <CommentButton />  
//      <RepostButton />
//      <GifPhoto src="https://media.giphy.com/media/3o7aCSPqXE5C6T8tBC/giphy.gif" />
//      <SocialSidebarItem collapsed={false} />
//      <SocialSidebarUserItem name="John Doe" username="johndoe" collapsed={false} active={false}/>
//      <Check active={true}/>
//      <PasswordInput placeholder={"Passw"} />
//      <PostActions />
//      <BlockedUser/>
//     <FancyButton/>
//     <TextAndPhoto/>
//     <TextAndVedio/>
//     <TagPeopleCard name="John Doe" username="johndoe"/>
//     <ConversationSelector/>
//     <MessageInput/>
//     <MessageItem isReply={true}/>
//     <Header isPosting={false} />
    
//     <ProfileCard noAvatar={true} />
//     <ProfileCard avatarUrl="https://i.pravatar.cc/150?img=10" />
//     <SocialMenuButton/>
//     <SocialPost
//         avatarSrc="https://example.com/avatar.jpg"
//         username="Moyo Shiro"
//         time="09:00 AM"
//         content="Ready to level up your portfolio game? Check out these 15 standout examples of creative, sleek, and interactive portfolio websites made in..."
//       />
//       <Tag/>
//       <TagButton/>
//       <BookmarkFolderModal/>
//       {/* <Sidebar/> */}
//       <SocialSidebarItem label="Home" icon={<HomeIcon />} collapsed={false} />
//       <SocialSidebarItem label="Notifications" icon={<NotificationButton />} badge={12} collapsed={false} />
     
//       <Tag/>
//       <ComposerInput /> 
//       {/* <Feed/> */}
//       {/* <HomePage/> */}
      
//       {/* <ArticleCard
//   image="https://picsum.photos/200/300"
//   title="The Best iOS18 Features"
//   content="So Apple announced the new features coming in iOS18 and it’s just over a couple of weeks since..."
//   author="Avatar 5"
//   authorAvatar="https://picsum.photos/200/300"
//   date="5 Jul 2024"
//   category="Design"
// /> */}
// {/* <TrendingTopics/> */}
//       {/* <PostModal/>
//       <PostContent/> */}
//     </div>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
