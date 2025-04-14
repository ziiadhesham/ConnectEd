import React, { useState } from 'react';
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Switch,
  Divider,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';

const ChatHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      maxWidth={"1660px"}
      px={2}
      py={1}
    //   bgcolor="#2f2f2f"
      color="#fff"
      borderRadius="8px"
    >
      {/* Left side: Avatar + Name */}
      <Box display="flex" alignItems="center" gap={1}>
        <Avatar src="https://i.pravatar.cc/40" alt="James" />
        <Typography>James</Typography>
      </Box>

      {/* Right side: Options */}
      <IconButton onClick={handleMenuOpen} sx={{ color: '#fff' }}>
        <MoreVertIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            bgcolor: 'rgba(248, 248, 248, 0.05)',
            color: 'white',
            borderRadius: 2,
            mt: 1,
            width: 230,
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {/* Top bar in menu with name and close */}
        <Box
          px={2}
          py={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontWeight="medium">James</Typography>
          <IconButton size="small" onClick={handleMenuClose} sx={{ color: 'white' }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Menu items */}
        <MenuItem onClick={handleMenuClose}>Leave conversation</MenuItem>
        <MenuItem onClick={handleMenuClose}>Block</MenuItem>
        <MenuItem onClick={handleMenuClose}>Report</MenuItem>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px={2}
          py={1}
        >
          <Typography variant="body2">Snooze notifications</Typography>
          <Switch color="primary" size="small" />
        </Box>
      </Menu>
    </Box>
  );
};

export default ChatHeader;
