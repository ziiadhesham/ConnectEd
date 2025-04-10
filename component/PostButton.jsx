import React from 'react';
import { Button, styled } from '@mui/material';

// Styled button component with custom styling to match the image
const PostButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(40, 40, 40, 0.7)',
  color: '#c0c0c0',
  borderRadius: '9999px', // Pill shape
  textTransform: 'none',
  padding: '8px 24px',
  minWidth: '120px',
  fontSize: '16px',
  fontWeight: '500',
  '&:hover': {
    backgroundColor: 'rgba(60, 60, 60, 0.9)',


    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    

    
  },
}));

// Main component
const Post = () => {
  return (
    <PostButton variant="contained" disableElevation>
      Post
    </PostButton>
  );
};

export default Post;