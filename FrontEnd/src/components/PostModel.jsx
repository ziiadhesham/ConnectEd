import React, { useState, useRef } from 'react';
import {
  Box,
  Paper,
  Avatar,
  TextField,
  IconButton,
  Button,
  Typography,
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function PostModal({ value = '', isCommentModal = false, onPost, onComment ,profilepicture }) {
  const [inputValue, setInputValue] = useState(value);
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handlePostAction = () => {
    const postData = {
      text: inputValue,
      file: uploadedFile,
    };

    if (isCommentModal) {
      onComment(postData);
    } else {
      onPost(postData);
    }

    setInputValue('');
    setUploadedFile(null);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const iconButtons = [
    { Icon: InsertEmoticonIcon },
    { Icon: ImageIcon, onClick: () => imageInputRef.current?.click() },
    { Icon: AttachFileIcon, onClick: () => fileInputRef.current?.click() },
    { Icon: MoreHorizIcon },
  ];

  return (
    <Paper
      elevation={4}
      sx={{
        bgcolor: 'rgba(40, 40, 40, 0.9)',
        borderRadius: 3,
        px: 2,
        py: 1.5,
        minWidth: '500px',
        width: 'auto',
        maxWidth: '90%',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        mx: 'auto',
        maxHeight: '80vh',
        overflow: 'auto',
      }}
    >
      {/* Hidden Inputs */}
      <input
        type="file"
        accept="image/*"
        ref={imageInputRef}
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />

      {/* Avatar & Text */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Avatar src={profilepicture|| ''} sx={{ width: 32, height: 32 }} />
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
          minRows={3}
          maxRows={6}
        />
      </Box>

      {/* File Preview */}
      {uploadedFile && (
        <Box
          sx={{
            mt: 1,
            px: 1,
            py: 1,
            border: '1px dashed rgba(248, 248, 248, 0.2)',
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 1,
          }}
        >
          {uploadedFile.type.startsWith('image') ? (
            <img
              src={URL.createObjectURL(uploadedFile)}
              alt="preview"
              style={{ maxHeight: '150px', borderRadius: '8px' }}
            />
          ) : (
            <Typography variant="body2">{uploadedFile.name}</Typography>
          )}
        </Box>
      )}

      {/* Icons + Button */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: 1,
        }}
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          {iconButtons.map(({ Icon, onClick }, i) => (
            <IconButton
              key={i}
              onClick={onClick}
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
