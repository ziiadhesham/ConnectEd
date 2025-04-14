import React, { useState } from 'react';
import {
  Box,
  Paper,
  Avatar,
  TextField,
  IconButton,
  Button,
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function PostModal({ value = '', isCommentModal = false, onPost, onComment }) {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePostAction = () => {
    if (isCommentModal) {
      onComment(inputValue); // Trigger the comment action if it's a comment modal
    } else {
      onPost(inputValue); // Trigger the post action if it's a post modal
    }
    setInputValue(''); // Clear the input after posting
  };

  return (
    <Paper
      elevation={4}
      sx={{
        bgcolor: 'rgba(40, 40, 40, 0.9)',
        borderRadius: 3,
        px: 2,
        py: 1.5,
        minWidth: "500px",
        width: 'auto',
        maxWidth: "90%",
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        mx: 'auto',
        maxHeight: '80vh',
        overflow: 'auto',
      }}
    >
      {/* Top: Avatar + Text Input */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Avatar src="https://i.pravatar.cc/300" sx={{ width: 32, height: 32 }} />
        <TextField
          variant="standard"
          fullWidth
          placeholder={isCommentModal ? 'Add a comment...' : 'Start a post...'}
          value={inputValue}
          onChange={handleInputChange}
          InputProps={{
            disableUnderline: true,
            sx: {
              color: 'white',
              fontSize: '0.9rem',
              bgcolor: 'transparent',
            },
          }}
          multiline
          minRows={3} // Minimum number of rows
          maxRows={6} // Maximum number of rows
        />
      </Box>

      {/* Bottom: Icons + Action Button */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: 1,
        }}
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          {[InsertEmoticonIcon, ImageIcon, AttachFileIcon, MoreHorizIcon].map((Icon, i) => (
            <IconButton
              key={i}
              sx={{
                color: 'rgba(248, 248, 248, 0.4)',
                bgcolor: 'rgba(248, 248, 248, 0.02)',
                width: 32,
                height: 32,
                '&:hover': {
                  bgcolor: 'rgba(248, 248, 248, 0.05)',
                },
              }}
            >
              <Icon fontSize="small" />
            </IconButton>
          ))}
        </Box>

        <Button
          variant="contained"
          onClick={handlePostAction}
          sx={{
            bgcolor: 'rgba(248, 248, 248, 0.02)',
            color: 'white',
            textTransform: 'none',
            fontSize: '0.75rem',
            px: 2,
            py: 0.5,
            borderRadius: '20px',
            boxShadow: 'none',
            '&:hover': {
              bgcolor: 'rgba(248, 248, 248, 0.05)',
            },
          }}
        >
          {isCommentModal ? 'Comment' : 'Post'}
        </Button>
      </Box>
    </Paper>
  );
}

export default PostModal;
