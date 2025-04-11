// components/ProfileCard.js
import React, { useState } from 'react';
import { Avatar, Box, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';

const ProfileCard = ({ name, username, bio, avatar, initiallyFollowing = false }) => {
  const [isFollowing, setIsFollowing] = useState(initiallyFollowing);

  const handleFollowToggle = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        bgcolor: 'rgba(255, 255, 255, 0.02)',
        borderRadius: '20px',
        padding: '12px',
        gap: '12px',
        width: '95%',
        margin: '10px',
        '&:hover': {
          backgroundColor: 'rgba(248, 248, 248, 0.06)',
          transform: 'translateY(-2px)',
          
        },
      }}
    >
      <Avatar alt={name} src={avatar} sx={{ width: 48, height: 48 }} />
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 600 }}>
          {name}
        </Typography>
        <Typography variant="caption" sx={{ color: '#aaa' }}>
          {username}
        </Typography>
        <Typography variant="body2" sx={{ color: '#bbb', mt: 0.5 }}>
          {bio}
        </Typography>
      </Box>
      <IconButton
        size="small"
        onClick={handleFollowToggle}
        sx={{
          mt: 0.5,
          color: isFollowing ? 'gray' : 'white',
          bgcolor: isFollowing ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.08)',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.15)',
          },
        }}
      >
        {isFollowing ? <CheckIcon fontSize="small" /> : <AddIcon fontSize="small" />}
      </IconButton>
    </Box>
  );
};

export default ProfileCard;
