import React from 'react';
import { Card, CardMedia, Box, Avatar, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function HeaderCard() {
  return (
    <Card
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 800,
        margin: '40px auto',
        borderRadius: 3,
        overflow: 'visible',
      }}
    >
      {/* Background SVG as header */}
      <Box sx={{ position: 'relative', height: 160 }}>
        <CardMedia
          component="img"
          height="160"
          image={require('./profileheaderz.svg').default} // import from Components/
          alt="Header background"
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
          }}
        >
          <ArrowBackIcon />
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
          }}
        >
          <MoreVertIcon />
        </IconButton>
      </Box>

      {/* Profile Image (SVG) */}
      <Avatar
        src={require('./AvatarProfile.svg').default} // import from Components/
        alt="Profile"
        sx={{
          width: 75,
          height: 75,
          position: 'absolute',
          bottom: -32,
          left: 16,
          border: '4px solid white',
        }}
      />
    </Card>
  );
}
