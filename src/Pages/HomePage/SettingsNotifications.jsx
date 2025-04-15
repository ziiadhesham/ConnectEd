import React,{ useState } from 'react';
import Sidebar from "../../components/Sidebar";
import {
  Box, Typography, Divider, Avatar,  List, ListItem, ListItemIcon,
  ListItemText, Switch, Collapse
} from '@mui/material';

import {
  Email, Lock, Delete, Security, Notifications, Settings as PrefIcon,
  Block, HeadsetMic, VisibilityOff, Cookie, Message, ExpandLess, ExpandMore,
} from '@mui/icons-material';
import Button from '../../components/Button';
import ToggleButton from '../../components/ToggleButton';

const SettingsNotifications = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [supportOpen, setSupportOpen] = useState(false);
    const [toggles, setToggles] = useState({
      email: false,
      sms: false,
      browser: false,
      news: true,
      product: false
    });

    const toggleSidebar = () => {
      setSidebarOpen((prev) => !prev);
    };

    const handleToggle = (key) => {
      setToggles(prev => ({ ...prev, [key]: !prev }));
    };

  return (
    <Box sx={{ display: 'flex', height: '100dvh', bgcolor: '#121212', color: '#fff', p: 1, gap: 1 }}>

      <Sidebar open={sidebarOpen} toggleDrawer={toggleSidebar} />

      {/* Sidebar Menu */}
      <Box sx={{ width: 280, p: 1.5, display: 'flex', flexDirection: 'column', gap: 1.5 }}>

        {/* Search Bar */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'rgba(40, 40, 40, 0.8)',
            borderRadius: 4,
            px: 1.5,
            py: 1,
          }}
        >
          <input
            type="text"
            placeholder="Search settings..."
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'white',
              marginLeft: 10,
              flex: 1,
              fontSize: '0.9rem'
            }}
          />
        </Box>

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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar src="/profile.jpg" sx={{ width: 40, height: 40 }} />
            <Box>
              <Typography fontWeight="bold" fontSize="0.95rem">Moyo</Typography>
              <Typography variant="body2" color="#aaa" fontSize="0.8rem">@moyoshiro</Typography>
            </Box>
          </Box>
          <Typography sx={{ color: '#888' }}>›</Typography>
        </Box>

        {/* Menu Options */}
        {[ 
          { label: 'Notifications', icon: <Notifications /> },
          { label: 'Preferences', icon: <PrefIcon /> },
          { label: 'Blocked accounts', icon: <Block /> },
          {
            label: 'Contact support',
            icon: <HeadsetMic />,
            expandable: true,
            expanded: supportOpen,
            onClick: () => setSupportOpen(!supportOpen),
          },
        ].map((item, index) => (
          <Box key={index}>
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
              onClick={item.onClick}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{ color: '#fff' }}>{item.icon}</Box>
                <Typography fontWeight="medium" fontSize="0.95rem">{item.label}</Typography>
              </Box>
              {item.expandable ? (item.expanded ? <ExpandLess /> : <ExpandMore />) : null}
            </Box>

            {item.expandable && (
              <Collapse in={item.expanded} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ pl: 4 }}>
                  <ListItem button><ListItemText primary="FAQ" /></ListItem>
                  <ListItem button><ListItemText primary="Live Chat" /></ListItem>
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </Box>

      {/* Right Section - Notification Panel */}
      <Box sx={{ flex: 1, p: 2, borderRadius: 3, bgcolor: 'rgba(25, 25, 25, 0.8)', overflowY: 'auto' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">Notifications</Typography>
          <Button  placeholder='Save'/>
            
          
        </Box>

        {/* Browser Notifications Box */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: '#1e1e1e',
          borderRadius: 3,
          p: 2,
          mb: 3,
          justifyContent: 'space-between',
          flexWrap: 'wrap'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ width: 50, height: 50, bgcolor: '#2a2a2a', borderRadius: 2 }} />
            <Box>
              <Typography fontWeight="bold" fontSize="0.9rem">Browser notifications are off.</Typography>
              <Typography variant="body2" color="#aaa" fontSize="0.75rem">
                Turn on notifications to get notified of new responses on your device.
              </Typography>
              <Button placeholder="Turn all"/>
                
            </Box>
          </Box>
          
        </Box>

        {/* Notification Toggles */}
        {[
          { key: 'email', label: 'Email' },
          { key: 'sms', label: 'SMS' },
          { key: 'browser', label: 'Browser' },
          { key: 'news', label: 'News and programs' },
          { key: 'product', label: 'Product updates' },
        ].map((item) => (
          <Box key={item.key} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            bgcolor: '#1b1b1b',
            borderRadius: 3,
            px: 2,
            py: 1.5,
            mb: 1
          }}>
            <Typography>{item.label}</Typography>
            <ToggleButton
              checked={toggles[item.key]}
              onChange={() => handleToggle(item.key)}
              sx={{
                '& .MuiSwitch-track': {
                  backgroundColor: toggles[item.key] ? '#1a90ff' : '#555',
                },
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
};

export default SettingsNotifications;
