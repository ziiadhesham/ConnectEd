import React from 'react';
import { Box, Typography, Paper, IconButton, Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function PostContent() {
  return (
    <Box sx={{ p: 2, maxWidth: 600, mx: 'auto'  }}>
      <Paper
        elevation={3}
            sx={{
              px: 2,
              py: 1.5,
              bgcolor: 'rgba(248, 248, 248, 0.02)',
              color: 'white',
              borderRadius: 2,
              position: 'relative',
            }}
      >
        {/* Three Dots Icon */}
        <Box sx={ {
          padding: 1.3,
          borderRadius:1.5,
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                bgcolor: 'rgba(248, 248, 248, 0.05)',
              },
              '&:active': {
                bgcolor: 'rgba(40, 40, 40, 0.8)',
              },}}>
          <IconButton
          sx={{
            position: 'absolute',
            top: 10,
            right: 20,
            color: '#bdbdbd',
          }}
          size="small"
          >
          <MoreHorizIcon fontSize="small" />
        </IconButton>
        {/* Header: Avatar + Name + Time */}
        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <Avatar
            src="https://i.pravatar.cc/300"
            alt="User Avatar"
            sx={{ width: 36, height: 36 }}
          />
          <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
            Moyo Shiro
          </Typography>
          <Typography variant="caption" sx={{ color: '#bdbdbd', fontSize: '0.75rem' }}>
            • 09:00 AM
          </Typography>
        </Box>
        {/* Post Text */}
        <Typography variant="body2" sx={{ color: '#bdbdbd', mb: 1, ml: 6  }}>
          Ready to level up your portfolio game? Check out these 15 standout examples
          of creative, sleek, and interactive portfolio websites made in...
        </Typography>
        </Box>
        {/* Post Image */}
        <Box
          component="img"
          src=" https://www.w3schools.com/w3images/lights.jpg"
          alt="Post Media"
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: 2,
            mb:1
          }}
        />
      <Box
          component="video"
          controls
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: 2,
            mb: 2,
          }}
          src=" https://www.w3schools.com/html/mov_bbb.mp4"
          alt="Post Media"
          loop
        />
        <Box sx={ {
            
          padding: 1.3,
          borderRadius:1.5,
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                bgcolor: 'rgba(248, 248, 248, 0.05)',
              },
              '&:active': {
                bgcolor: 'rgba(40, 40, 40, 0.8)',
              },}}><IconButton
          sx={{
            position: 'absolute',
            bottom: 90,
            right: 20,
            color: '#bdbdbd',
          }}
          size="small"
        >
          <MoreHorizIcon fontSize="small" />
        </IconButton>
        {/* Header: Avatar + Name + Time */}
        <Box display="flex" alignItems="center" gap={1} mb={1} >
          <Avatar
            src="https://i.pravatar.cc/300"
            alt="User Avatar"
            sx={{ width: 36, height: 36 }}
          />
          <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
            Moyo Shiro
          </Typography>
          <Typography variant="caption" sx={{ color: '#bdbdbd', fontSize: '0.75rem' }}>
            • 09:00 AM
          </Typography>
        </Box>
        {/* Post Text */}
        <Typography variant="body2" sx={{ color: '#bdbdbd', mb: 1, ml: 6  }}>
          Ready to level up your portfolio game? Check out these 15 standout examples
          of creative, sleek, and interactive portfolio websites made in...
        </Typography></Box>
      </Paper>
    </Box>
  );
}
export default PostContent;