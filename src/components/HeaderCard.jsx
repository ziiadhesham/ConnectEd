import React from 'react';
import { Card, CardMedia, Box, Avatar, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import headerImg from './profileheaderz.svg';
import avatarImg from './AvatarProfile.svg';

export default function HeaderCard() {
  return (
    <Card
    sx={{
    position: 'relative',
    width: '100%',
    marginBottom: 10,
    borderRadius: 3,
    overflow: 'visible',
    backgroundColor: '#1a1a1a',
  }}
  >

      {/* Background Header Image */}
      <Box sx={{ position: 'relative', height: { xs: 120, sm: 160 }, backgroundColor: '#1a1a1a' }}>
        <CardMedia
          component="img"
          height="100%"
          image={headerImg}
          alt="Header background"
          sx={{ objectFit: 'cover', width: '100%' }}
        />

        {/* Back Button */}
        <IconButton
          sx={{
            position: 'absolute',
            top: 8,
            left: 8,
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: '#fff',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
            width: { xs: 32, sm: 40 },
            height: { xs: 32, sm: 40 },
          }}
        >
          <ArrowBackIcon fontSize="small" />
        </IconButton>

        {/* More Options Button */}
        <IconButton
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: '#fff',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
            width: { xs: 32, sm: 40 },
            height: { xs: 32, sm: 40 },
          }}
        >
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Profile Avatar */}
      <Avatar
        src={avatarImg}
        alt="Profile"
        sx={{
          width: { xs: 60, sm: 75 },
          height: { xs: 60, sm: 75 },
          position: 'absolute',
          bottom: { xs: -30, sm: -32 },
          left: 16,
          border: '4px solid white',
        }}
      />
    </Card>
    
  );
}
