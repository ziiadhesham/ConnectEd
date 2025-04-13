import React, { useState } from 'react';
import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Button,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const HeaderPostingformessage = ({ isPosting = false, setisPosting }) => {
  const [tab, setTab] = useState('Primary');
  const [message, setMessage] = useState('');

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  const handlePost = () => {
    console.log('Message posted:', message);
    setMessage('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        padding: '12px',
        borderRadius: '12px',
        maxWidth: '720px',
        width: '100%',
        marginTop: '0px',
      }}
    >
      {/* Search bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '50%',
        }}
      >
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
          marginTop: '0px',
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
          onClick={() => setisPosting(!isPosting)}
        >
          {isPosting ? <CloseIcon /> : <AddIcon />}
        </IconButton>
      </Box>

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
            left: tab === 'Primary' ? 4 : 'calc(50% + 2px)',
            width: 'calc(50% - 6px)',
            height: '40px',
            bgcolor: 'rgba(248, 248, 248, 0.05)',
            borderRadius: '9999px',
            transition: 'left 0.3s ease-in-out',
            zIndex: 1,
          }}
        />

        {/* Buttons */}
        <Box sx={{ display: 'flex', width: '100%', zIndex: 2 }}>
          <button
            onClick={() => handleTabChange('Primary')}
            disabled={isPosting}
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              color: tab === 'Primary' ? '#fff' : '#aaa',
              fontWeight: 600,
              fontSize: '13px',
              cursor: isPosting ? 'not-allowed' : 'pointer',
              zIndex: 2,
              padding: '8px 0',
              borderRadius: '9999px',
            }}
          >
            Primary
          </button>
          <button
            onClick={() => handleTabChange('Request')}
            disabled={isPosting}
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              color: tab === 'Request' ? '#fff' : '#aaa',
              fontWeight: 600,
              fontSize: '13px',
              cursor: isPosting ? 'not-allowed' : 'pointer',
              zIndex: 2,
              padding: '8px 0',
              borderRadius: '9999px',
            }}
          >
            Request
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderPostingformessage;