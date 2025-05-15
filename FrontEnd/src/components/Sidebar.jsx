import React, { useEffect, useState } from 'react';
import {
  Box,
  IconButton,
  Drawer,
  Button,
} from '@mui/material';
import {
  Home,
  Mail,
  Bookmark,
  Person,
  Menu,
  Add,
} from '@mui/icons-material';
import { useLocation, Link } from 'react-router-dom';

import NotificationButton from './NotificationButton';
import SocialSidebarItem from './SocialSidebarItem';
import SocialSidebarUserItem from './SocialSidebarUserItem';
import usersAccounts from "../MockData/usersAccountsData"; // Your users mock data
import useUserStore from "../Stores/UseUserStore"; // Hook to get userId
import axiosInstance from '../config/axiosInstance';

const Sidebar = ({ open, toggleDrawer, notificationCount = 0 }) => {
  const { userId } = useUserStore();
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();

  // Find the user based on userId
  // const currentUser = usersAccounts.find(user => user.id === userId);
  //function to get current user calling api
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axiosInstance.get(`/users/${userId}`);// Endpoint to get user by id
        setCurrentUser(response.data);
        console.log("Current User:", response.data);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };
    fetchCurrentUser();
  }, [userId]);

  const menuItems = [
    { icon: <Home />, label: 'Home' },
    { icon: <NotificationButton />, label: 'Notifications', badge: notificationCount },
    { icon: <Mail />, label: 'Messages' },
    { icon: <Bookmark />, label: 'Bookmarks' },
    { icon: <Person />, label: 'Profile' },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: open ? "300px" : "80px",
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? "300px" : "80px",
          boxSizing: 'border-box',
          backgroundColor: 'rgba(40, 40, 40, 0.7)',
          color: 'rgba(248, 248, 248, 0.5)',
          transition: 'width 0.3s',
          overflow: 'hidden',
          borderRight: 'none',
          borderRadius: "0px 32px 32px 0px",
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      {/* Header with Hamburger */}
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        px={1}
        py={2}
      >
        <IconButton onClick={toggleDrawer} sx={{ color: 'rgba(248, 248, 248, 0.5)', display: 'flex' }}>
          <Menu />
        </IconButton>
      </Box>

      {/* Menu Items */}
      <Box flex={1} display="flex" flexDirection="column" px={1}>
        {menuItems.map(({ icon, label, badge }) => {
          const isActive = currentPath === `/${label.toLowerCase()}`;
          return (
            <Link key={label} to={`/${label.toLowerCase()}`} style={{ textDecoration: 'none' }}>
              <SocialSidebarItem
                label={label}
                icon={icon}
                badge={badge}
                collapsed={!open}
                active={isActive}
              />
            </Link>
          );
        })}
      </Box>

      {/* Footer with User + Post */}
      <Box p={1} sx={{marginBottom: '24px'}}>
        {currentUser && (
          <SocialSidebarUserItem
            name={currentUser.name}
            username={currentUser.username}
            avatar={currentUser.profilePicture}
            collapsed={!open}
            active={false}
          />
        )}
       
      </Box>
    </Drawer>
  );
};

export default Sidebar;
