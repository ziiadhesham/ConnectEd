import React from 'react';
import { Box, Typography, Paper, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PhotoAvatar from './PhotoAvatar';
import PostActions from './PostActions';

function SocialPost({
  avatarSrc,
  username,
  time,
  content,
  onMoreClick,
}) {
  return (
    <Box sx={{ p: 2, maxWidth: "616px" , }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          

        {/* Message Container */}
        <Box sx={{ flex: 1 }}>
            
          <Paper
            elevation={3}
            sx={{
              px: 2,
              py: 1.5,
              bgcolor: 'rgba(248, 248, 248, 0.02)',
              color: 'white',
              borderRadius: "20px",
              position: 'relative',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                bgcolor: 'rgba(248, 248, 248, 0.05)',
              },
              '&:active': {
                bgcolor: 'rgba(40, 40, 40, 0.8)',
              },
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
              onClick={onMoreClick}
            >
              <MoreHorizIcon fontSize="small" />
            </IconButton>

            {/* Name and Time */}
            <Box display="flex" alignItems="center" gap={1} mb={0.5}>
                {/* Avatar */}
          <PhotoAvatar src={avatarSrc} />
              
              <Typography
                variant="subtitle2"
                sx={{ color: '#bdbdbd', fontWeight: 500 }}
              >
                {username}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: '#bdbdbd', fontSize: '0.75rem' }}
              >
                {time}
              </Typography>
            </Box>

            {/* Comment Text */}
            <Typography variant="body2" sx={{ marginLeft: "40px"}}>
              {content}
            </Typography>
            <PostActions />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default SocialPost;
