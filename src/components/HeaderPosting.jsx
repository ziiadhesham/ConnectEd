import React, { useState } from 'react';
import {
  Box,
  IconButton,
  InputBase,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const Header = ({ isPosting = false ,setisPosting }) => {
  const [tab, setTab] = useState('forYou');

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };
 
  return (
    <Box
      sx={{
        // boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1.5,
        padding: '12px',
        borderRadius: '12px',
        maxWidth: '640px',
        margin: '0 auto',
        width: '100%',
        height: '50px',
      }}
    >
      {/* Sliding Toggle */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          bgcolor: 'rgba(40, 40, 40, 0.6)',
          borderRadius: '9999px',
          width: '278px',
          height: '40px',
          alignItems: 'center',
          padding: '4px',
          opacity: isPosting ? 0.6 : 1,
          pointerEvents: isPosting ? 'none' : 'auto',
        }}
      >
        {/* Sliding background */}
        <Box
          sx={{
            position: 'absolute',
            top: 4,
            left: tab === 'forYou' ? 4 : 'calc(50% + 2px)',
            width: 'calc(50% - 6px)',
            height: '40px',
            bgcolor: 'rgba(248, 248, 248, 0.05) ',
            borderRadius: '9999px',
            transition: 'left 0.3s ease-in-out',
            zIndex: 1,
          }}
        />

        {/* Buttons */}
        <Box sx={{ display: 'flex', width: '100%', zIndex: 2 }}>
          <button
            onClick={() => handleTabChange('forYou')}
            disabled={isPosting}
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              color: tab === 'forYou' ? '#fff' : '#aaa',
              fontWeight: 600,
              fontSize: '13px',
              cursor: isPosting ? 'not-allowed' : 'pointer',
              zIndex: 2,
              padding: '8px 0',
              borderRadius: '9999px',
            }}
          >
            For you
          </button>
          <button
            onClick={() => handleTabChange('following')}
            disabled={isPosting}
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              color: tab === 'following' ? '#fff' : '#aaa',
              fontWeight: 600,
              fontSize: '13px',
              cursor: isPosting ? 'not-allowed' : 'pointer',
              zIndex: 2,
              padding: '8px 0',
              borderRadius: '9999px',
            }}
          >
            Following
          </button>
        </Box>
      </Box>

      {/* Search bar */}
      <Paper
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(40, 40, 40, 0.7)',
          borderRadius: '9999px',
          flex: 1,
          height: '42px',
          px: 1.5,
          ml: 1,
          opacity: isPosting ? 0.6 : 1,
          pointerEvents: isPosting ? 'none' : 'auto',
        }}
      >
        <SearchIcon sx={{ color: 'rgba(248, 248, 248, 0.5)', fontSize: 20, mr: 1 }} />
        <InputBase
          sx={{ flex: 1, color: '#fff', fontSize: '14px' }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          disabled={isPosting}
        />
      </Paper>

      {/* Icon button — NOT disabled */}
      <IconButton
        sx={{
          backgroundColor: 'rgba(40, 40, 40, 0.7)',
          color: '#ccc',
          ml: 1,
          width: 42,
          height: 42,
          '&:hover': {
            backgroundColor: '#2A2A2A',
          },
        }}
      >
        {isPosting ? <CloseIcon /> : <AddIcon />}
      </IconButton>
    </Box>
  );
};

export default Header;
