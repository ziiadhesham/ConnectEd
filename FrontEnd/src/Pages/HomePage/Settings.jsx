import React,{ useState } from 'react';
import Sidebar from "../../components/Sidebar";
import useSidebarStore from "../../Stores/SideBarStore";

import {
  Box, Typography, Divider, Avatar, Button, List, ListItem, ListItemIcon,
  ListItemText, Switch, Collapse
} from '@mui/material';

import ToggleButton from '../../components/ToggleButton';
import {
  Email, Lock, Delete, Security, Notifications, Settings as PrefIcon,
  Block, HeadsetMic, VisibilityOff, Cookie, Message, ExpandLess, ExpandMore,
} from '@mui/icons-material';
import { Link } from 'react-router';
import axiosInstance from '../../config/axiosInstance';
import useUserStore from '../../Stores/UseUserStore';

const Settings = () => {
  const { sidebarOpen, toggleSidebar } = useSidebarStore();

    const [supportOpen, setSupportOpen] = useState(false);
  
  return (
    <Box sx={{ display: 'flex', height: '100dvh', bgcolor: '#121212', color: '#fff', p: 1, gap: 1 }}>

      <Sidebar open={sidebarOpen} toggleDrawer={toggleSidebar} notificationCount={5} />

      {/* Sidebar */}
      <Box sx={{ width: 280, p: 1.5, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
       

        {/* User Info */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            bgcolor: 'rgba(40, 40, 40, 0.8)',
            p: 1.5,
            borderRadius: 3,
          }}
        >
          <Link to="/settings" style={{ textDecoration: 'none'}}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar src="/profile.jpg" sx={{ width: 40, height: 40 }} />
            <Box>
              <Typography fontWeight="bold" fontSize="0.95rem"> </Typography>
              <Typography variant="body2" color="#aaa" fontSize="0.8rem">@moyoshiro</Typography>
            </Box>
          </Box>
          </Link>
          <Typography sx={{ color: '#888' }}>›</Typography>
        </Box>

        {/* Menu Options */}
        {/* Notifications and Blocked as Links */}
<Link to="notifications" style={{ textDecoration: 'none', color: '#fff' }}>
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      bgcolor: 'rgba(40, 40, 40, 0.8)',
      p: 1.5,
      borderRadius: 3,
      cursor: 'pointer',
      mb: 1,
      '&:hover': { bgcolor: 'rgba(50, 50, 50, 0.8)' },
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
      <Box sx={{ color: '#fff' }}><Notifications /></Box>
      <Typography fontWeight="medium" fontSize="0.95rem">Notifications</Typography>
    </Box>
  </Box>
</Link>

<Link to="blocked" style={{ textDecoration: 'none', color: '#fff' }}>
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      bgcolor: 'rgba(40, 40, 40, 0.8)',
      p: 1.5,
      borderRadius: 3,
      cursor: 'pointer',
      mb: 1,
      '&:hover': { bgcolor: 'rgba(50, 50, 50, 0.8)' },
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
      <Box sx={{ color: '#fff' }}><Block /></Box>
      <Typography fontWeight="medium" fontSize="0.95rem">Blocked</Typography>
    </Box>
  </Box>
</Link>

{/* Contact support dropdown - NOT a link */}
<Box>
 <Box
  sx={{
    bgcolor: 'rgba(40, 40, 40, 0.8)',
    borderRadius: 3,
    mb: 1,
    overflow: 'hidden', // ensures inner dropdown fits cleanly
  }}
>
  {/* Toggle */}
  <Box
    onClick={() => setSupportOpen(!supportOpen)}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      p: 1.5,
      cursor: 'pointer',
      '&:hover': { bgcolor: 'rgba(50, 50, 50, 0.8)' },
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
      <Box sx={{ color: '#fff' }}><HeadsetMic /></Box>
      <Typography fontWeight="medium" fontSize="0.95rem">Contact support</Typography>
    </Box>
    {supportOpen ? <ExpandLess /> : <ExpandMore />}
  </Box>

  {/* Dropdown Items */}
  <Collapse in={supportOpen} timeout="auto" unmountOnExit>
    <List component="div" disablePadding sx={{ px: 2, pb: 1 }}>
      <ListItem
        button
        component="a"
        href="supportConnected@gmail.com"
        sx={{
          borderRadius: 2,
          px: 1.5,
          py: 1,
          '&:hover': { bgcolor: 'rgba(50, 50, 50, 0.8)' },
        }}
      >
        <ListItemText
          primary="Email support"
          primaryTypographyProps={{
            color: '#fff',
            fontSize: '0.9rem',
          }}
        />
      </ListItem>
    </List>
  </Collapse>
</Box>
</Box>

      </Box>

      {/* Main Content */}
      <Box sx={{
        flex: 1,
        maxHeight: 'calc(100dvh - 16px)',
        overflowY: 'auto',
        p: 1,
        bgcolor: 'rgba(40, 40, 40, 0.4)',
        borderRadius: 2,
      }}>
        {/* Header */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
          py: 1.5,
        }}>
          <Typography variant="h6" fontWeight="bold">Account settings</Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: 4,
              bgcolor: 'rgba(40, 40, 40, 0.8)',
              color: '#fff',
              '&:hover': { bgcolor: 'rgba(50, 50, 50, 0.8)' },
              textTransform: 'none',
              px: 2.5,
              py: 0.8,
              fontSize: '0.85rem'
            }}
          >
            Save
          </Button>
        </Box>

        {/* Profile Info */}
        <Box sx={{
          mb: 1.5,
          p: 3,
          bgcolor: 'rgba(40, 40, 40, 0.8)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <Avatar sx={{ width: 60, height: 60, mb: 1, bgcolor: '#333' }} />
          <Typography fontWeight="bold" fontSize="1.05rem">Moyo Shiro</Typography>
          <Typography variant="body2" color="#888" fontSize="0.85rem">moyoshiro@email.com</Typography>
        </Box>

        {/* Account Section */}
        <Box sx={{ my: 1.5, bgcolor: 'rgba(40, 40, 40, 0.8)', borderRadius: 1 }}>
          <Box sx={{ px: 2, py: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ color: '#777', fontWeight: 'bold' }}>ACCOUNT</Typography>
            <ExpandLess sx={{ color: '#777' }} />
          </Box>
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)' }} />
          <List sx={{ py: 0 }}>
            <ListItem sx={{ px: 2, py: 1.5 }}>
              <ListItemIcon sx={{ color: '#777', minWidth: 36 }}><Email /></ListItemIcon>
              <Box>
                <Typography>Email</Typography>
                <Typography variant="body2" color="#777">moyoshiro@email.com</Typography>
              </Box>
            </ListItem>
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)' }} />
            <ListItem sx={{ px: 2, py: 1.5, justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ListItemIcon sx={{ color: '#777', minWidth: 36 }}><Lock /></ListItemIcon>
                <Typography>Password</Typography>
              </Box>
              <Typography sx={{ color: '#777' }}>Change</Typography>
            </ListItem>
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)' }} />
            <ListItem sx={{ px: 2, py: 1.5, justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ListItemIcon sx={{ color: '#777', minWidth: 36 }}><Security /></ListItemIcon>
                <Typography>2FA</Typography>
              </Box>
              <ToggleButton />
            </ListItem>
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)' }} />
            <ListItem sx={{ px: 2, py: 1.5 }}>
              <ListItemIcon sx={{ color: '#777', minWidth: 36 }}><Delete /></ListItemIcon>
              <Typography>Delete account</Typography>
            </ListItem>
          </List>
        </Box>

        {/* Privacy Section */}
        <Box sx={{ my: 1.5, bgcolor: 'rgba(40, 40, 40, 0.8)', borderRadius: 1 }}>
          <Box sx={{ px: 2, py: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ color: '#777', fontWeight: 'bold' }}>PRIVACY</Typography>
            <ExpandLess sx={{ color: '#777' }} />
          </Box>
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)' }} />
          <List sx={{ py: 0 }}>
            <ListItem sx={{ px: 2, py: 1.5, justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ListItemIcon sx={{ color: '#777', minWidth: 36 }}><VisibilityOff /></ListItemIcon>
                <Typography>Private profile</Typography>
              </Box>
              <ToggleButton />
            </ListItem>
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)' }} />
            <ListItem sx={{ px: 2, py: 1.5, justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ListItemIcon sx={{ color: '#777', minWidth: 36 }}><Cookie /></ListItemIcon>
                <Typography>Cookie settings</Typography>
              </Box>
              <Typography sx={{ color: '#777' }}>Manage</Typography>
            </ListItem>
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)' }} />
            <ListItem sx={{ px: 2, py: 1.5, justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ListItemIcon sx={{ color: '#777', minWidth: 36 }}><Message /></ListItemIcon>
                <Typography>Direct messages</Typography>
              </Box>
              <ToggleButton />
            </ListItem>
            <Box sx={{
              position: 'relative',
              bgcolor: 'rgba(30, 30, 30, 0.6)',
              p: 2,
              textAlign: 'right'
            }}>
              <Typography variant="body2" color="#bbb" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                Activate Windows
              </Typography>
              <Typography variant="body2" color="#777" sx={{ fontSize: '0.8rem' }}>
                Go to Settings to activate Windows.
              </Typography>
            </Box>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
