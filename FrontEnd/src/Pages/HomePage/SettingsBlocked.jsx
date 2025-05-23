import React,{ useState } from 'react';
import Sidebar from "../../components/Sidebar";
import useSidebarStore from "../../Stores/SideBarStore";

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
import { Link } from 'react-router';


const SettingsBlocked = () => {
  const { sidebarOpen, toggleSidebar } = useSidebarStore();
    const [supportOpen, setSupportOpen] = useState(false);
    const [toggles, setToggles] = useState({
      email: false,
      sms: false,
      browser: false,
      news: true,
      product: false
    });


    const handleToggle = (key) => {
      setToggles(prev => ({ ...prev, [key]: !prev }));
    };

  return (
    <Box sx={{ display: 'flex', height: '100dvh', bgcolor: '#121212', color: '#fff', p: 1, gap: 1 }}>

      <Sidebar open={sidebarOpen} toggleDrawer={toggleSidebar} notificationCount={5}/>

     {/* Sidebar */}
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
         <Link to="../settings" style={{ textDecoration: 'none'}}>
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
       {[ 
         { label: 'Notifications', icon: <Notifications /> ,path: "../settings/notifications"},
         { label: 'Preferences', icon: <PrefIcon /> ,path: "../settings/preferences"},
         { label: 'Blocked', icon: <Block /> ,path: "../settings/blocked"},
         {
           label: 'Contact support',
           icon: <HeadsetMic />, 
           path: "./support",
           expandable: true,
           expanded: supportOpen,
           onClick: () => setSupportOpen(!supportOpen),
         },
       ].map((item, index) => (
         <Link key={item.label} to={item.path.toLowerCase()} style={{ textDecoration: 'none', color: '#fff' }}>
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
         </Link>
       ))}
     </Box>

      {/* Right Section - Notification Panel */}
      <Box sx={{ flex: 1, p: 2, borderRadius: 3, bgcolor: 'rgba(25, 25, 25, 0.8)', overflowY: 'auto' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">Blocked Users</Typography>
          
            
          
        </Box>

        
          
            
          </Box>
          
        </Box>

       
        
      
    
  )
};

export default SettingsBlocked;
