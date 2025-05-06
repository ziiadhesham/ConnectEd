import React, { useState } from 'react';
import { TextField, Grid, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Array of emojis (you can expand this list as needed)
const emojis = [
  '😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊',
  '😋', '😎', '😍', '😘', '🥰', '😗', '😙', '😚', '🙂', '🤗',
  '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥',
  '😮', '🤯', '😳', '🥳', '😓', '😔', '😕', '🙃', '🤑', '😲'
];

const EmojiPicker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  // Filter emojis based on search term (basic filtering for demo purposes)
  const filteredEmojis = emojis.filter((emoji) =>
    emoji.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle emoji click
  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji); // Set the selected emoji
    console.log(`Selected emoji: ${emoji}`);
    // You can add logic here to pass the selected emoji to a parent component or input field
  };

  return (
    <Box
      sx={{
        width: '372px',
        height: '200px',
        minWidth: '236px',
        maxWidth: '372px',
        minHeight: '200px',
        maxHeight: '200px',
        backgroundColor: '#2b2b2b',
        borderRadius: '32px',
        border: '1.5px solid #424242',
        padding: '8px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Search Bar */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <TextField
          variant="outlined"
          placeholder="Search emoji..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon sx={{ color: 'gray', marginRight: '8px' }} />,
            sx: {
              backgroundColor: '#424242',
              borderRadius: '20px',
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
              '& .MuiInputBase-input': { color: 'white', padding: '8px' },
            },
          }}
          sx={{ width: '100%' }}
        />
      </Box>

      {/* Emoji Grid */}
      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        <Grid container spacing={1}>
          {filteredEmojis.map((emoji, index) => (
            <Grid item xs={2} key={index}>
              <IconButton
                onClick={() => handleEmojiClick(emoji)}
                sx={{
                  fontSize: '24px',
                  padding: '4px',
                  backgroundColor: emoji === selectedEmoji ? '#616161' : 'transparent', // Selected state
                  border: emoji === selectedEmoji ? '1px solid #757575' : 'none', // Border for selected state
                  '&:hover': {
                    backgroundColor: emoji === selectedEmoji ? '#616161' : '#424242', // Hover state (darker shade unless selected)
                  },
                  '&:focus': {
                    backgroundColor: emoji === selectedEmoji ? '#616161' : '#424242', // Focus state (darker shade unless selected)
                    outline: 'none',
                  },
                  '&:active': {
                    backgroundColor: '#525252', // Active state (even darker shade)
                  },
                }}
              >
                {emoji}
              </IconButton>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        minHeight: '100vh',
      }}
    >
      <EmojiPicker />
    </Box>
  );
};

export default App;