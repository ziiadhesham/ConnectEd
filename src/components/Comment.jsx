import React from 'react';
import { Box, Typography, Paper, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PhotoAvatar from './PhotoAvatar';

function Comment() {
  return (
    <Box sx={{ p: 2, maxWidth: 600 }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
        {/* Avatar */}
        

        {/* Message Container */}
        <Box sx={{ flex: 1 }}>
          <Paper
            elevation={3}
            sx={{
              px: 2,
              py: 1.5,
              bgcolor: '#2d2d2d',
              color: 'white',
              borderRadius: 2,
              position: 'relative',
            }}
          >
        
            {/* Three Dots Icon */}
            <IconButton
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                color: '#bdbdbd',
              }}
              size="small"
            >
              <MoreHorizIcon fontSize="small" />
            </IconButton>

            {/* Name and Time */}
            <Box display="flex" alignItems="center" gap={1} mb={0.5}>
            <PhotoAvatar />
              <Typography
                variant="subtitle2"
                sx={{ color: '#bdbdbd', fontWeight: 500 }}
              >
                Moyo Shiro
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: '#bdbdbd', fontSize: '0.75rem' }}
              >
                09:00 AM
              </Typography>
            </Box>

            {/* Comment Text */}
            <Typography variant="body2">
              Ready to level up your portfolio game? Check out these 15 standout
              examples of creative, sleek, and interactive portfolio websites made in
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default Comment;
