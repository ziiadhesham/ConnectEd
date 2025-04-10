import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Drawer,
  Avatar,
  Button,
  Typography,
} from '@mui/material';
import {
  Home,
  Mail,
  Bookmark,
  Person,
  Explore,
  Menu,
  Add,
} from '@mui/icons-material';
import NotificationButton from './NotificationButton';
import SocialSidebarItem from './SocialSidebarItem'; // import your reusable item

const menuItems = [
  { icon: <Home />, label: 'Home' },
  { icon: <NotificationButton />, label: 'Notifications', badge: 12 },
  { icon: <Mail />, label: 'Messages' },
  { icon: <Bookmark />, label: 'Bookmarks' },
  { icon: <Person />, label: 'Profile' },
  { icon: <Explore />, label: 'Explore' },
];

const Sidebar = ({ open: initialOpen }) => {
  const [open, setOpen] = useState(initialOpen);

  const toggleDrawer = () => setOpen(prev => !prev);

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: open ? 240 : 80,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? "320px" : "72px",
          boxSizing: 'border-box',
          backgroundColor: 'rgba(40, 40, 40, 0.7)',
          color: '#fff',
          transition: 'width 0.3s',
          overflowX: 'hidden',
          borderRight: 'none',
          borderRadius: "0px 32px 32px 0px"
        },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
        p={1}
      >
        {/* Top section */}
        <Box>
          <IconButton onClick={toggleDrawer} sx={{ color: 'white', mb: 2 }}>
            <Menu />
          </IconButton>

          {/* Menu Items */}
          {menuItems.map(({ icon, label, badge }) => (
            <SocialSidebarItem
              key={label}
              label={label}
              icon={icon}
              badge={badge}
              collapsed={!open}
            />
          ))}
        </Box>

        {/* Bottom section */}
        <Box textAlign="center" pb={2}>
          <Avatar
            alt="Kohaku"
            src="https://i.pravatar.cc/150?img=3"
            sx={{ width: 40, height: 40, mx: 'auto', mb: 1 }}
          />
          {open ? (
            <>
              <Typography>Kohaku</Typography>
              <Typography variant="caption" color="gray">
                @kohaku
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  backgroundColor: '#2c2c2e',
                  '&:hover': { backgroundColor: 'rgba(40, 40, 40, 0.7)' },
                  borderRadius: "32px",
                }}
              >
                Post
              </Button>
            </>
          ) : (
            <IconButton sx={{ color: 'white', mt: 1 , borderRadius: "32px",bgcolor:"rgba(40, 40, 40, 0.7)" }}>
              <Add />
            </IconButton>
          )}
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
