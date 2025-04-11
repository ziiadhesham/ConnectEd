import React from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function ProfileHeader({ disabled = false }) {
  return (
    <Box sx={{ p: 2, maxWidth: 600, mx: 'auto' }}>
      <Box
        sx={{
          px: 2,
          py: 1.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left Side: Back Button + Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            disabled={disabled}
            sx={{
              backgroundColor: disabled ? 'transparent' : '#222',
              color: disabled ? '#555' : 'white',
              width: 32,
              height: 32,
              '&:hover': {
                backgroundColor: disabled ? 'transparent' : '#444',
                transform: disabled ? 'none' : 'scale(1.05)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            <ArrowBackIcon fontSize="small" />
          </IconButton>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              color: disabled ? '#555' : 'white',
            }}
          >
            Title
          </Typography>
        </Box>

        {/* Right Side: Save + More */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button
            variant="contained"
            disabled={disabled}
            sx={{
              backgroundColor: '#222',
              color: 'white',
              textTransform: 'none',
              fontSize: '0.75rem',
              px: 2,
              py: 0.5,
              borderRadius: '20px',
              boxShadow: 'none',
              minWidth: 48,
              '&:hover': {
                backgroundColor: '#444',
              },
            }}
          >
            Save
          </Button>
          <IconButton
            disabled={disabled}
            sx={{
              backgroundColor: '#222',
              color: disabled ? '#555' : '#bdbdbd',
              width: 32,
              height: 32,
              '&:hover': {
                backgroundColor: '#444',
              },
            }}
            size="small"
          >
            <MoreHorizIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileHeader;
