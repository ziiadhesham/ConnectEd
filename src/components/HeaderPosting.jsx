import React, { useState } from 'react';
import {
  Box,
  IconButton,
  InputBase,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import PostModal from './PostModel'; // Assuming PostModal is imported correctly
import { Margin } from '@mui/icons-material';

const Header = ({ onSearchFocus, onSearchBlur }) => {
  const [tab, setTab] = useState('forYou');
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleCloseAdd = () => {
    setIsAdding(false); // Close the overlay
  };

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  const handleSearchFocus = () => {
    setSearchFocused(true); // Set search to focused
    if (onSearchFocus) onSearchFocus(); // Optional: Call the parent's onSearchFocus
  };

  const handleSearchBlur = () => {
    setSearchFocused(false); // Set search to not focused
    if (onSearchBlur) onSearchBlur(); // Optional: Call the parent's onSearchBlur
  };

  const handleIconClick = () => {
    if (searchFocused) {
      handleCloseSearch();
      handleSearchBlur();
    } else {
      handleOpenSearch();
      setIsAdding(true); // Show the overlay when search is opened
    }
  };

  const handleOpenSearch = () => {
    // Handle the search open action (maybe show search results, etc.)
    console.log("Opening search...");
  };

  const handleCloseSearch = () => {
    // Handle closing the search (maybe clear search input, etc.)
    setSearchQuery('');
    setSearchFocused(false);
    console.log("Closing search...");
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 1.5,
        padding: '12px',
        borderRadius: '12px',
        maxWidth: '720px',
        width: '100%',
        height: '50px',
        marginTop: '0px',
        position: 'relative', // Important to make the overlay absolute to this parent
      }}
    >
      {/* Sliding Toggle */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          bgcolor: 'rgba(40, 40, 40, 0.6)',
          borderRadius: '9999px',
          width: '278px',
          height: '40px',
          alignItems: 'center',
          padding: '4px',
        }}
      >
        {/* Sliding background */}
        <Box
          sx={{
            position: 'absolute',
            top: 4,
            left: tab === 'forYou' ? 4 : 'calc(50% + 2px)',
            width: 'calc(50% - 6px)',
            height: '40px',
            bgcolor: 'rgba(248, 248, 248, 0.05)',
            borderRadius: '9999px',
            transition: 'left 0.3s ease-in-out',
            zIndex: 1,
          }}
        />

        {/* Buttons */}
        <Box sx={{ display: 'flex', width: '100%', zIndex: 2 }}>
          <button
            onClick={() => handleTabChange('forYou')}
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              color: tab === 'forYou' ? '#fff' : '#aaa',
              fontWeight: 600,
              fontSize: '13px',
              cursor: 'pointer',
              zIndex: 2,
              padding: '8px 0',
              borderRadius: '9999px',
            }}
          >
            For you
          </button>
          <button
            onClick={() => handleTabChange('following')}
            style={{
              flex: 1,
              border: 'none',
              background: 'transparent',
              color: tab === 'following' ? '#fff' : '#aaa',
              fontWeight: 600,
              fontSize: '13px',
              cursor: 'pointer',
              zIndex: 2,
              padding: '8px 0',
              borderRadius: '9999px',
            }}
          >
            Following
          </button>
        </Box>
      </Box>

      {/* Search bar */}
      <Paper
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(40, 40, 40, 0.7)',
          borderRadius: '9999px',
          flex: 1,
          height: '42px',
          px: 1.5,
          ml: 1,
          marginTop: '0px',
        }}
      >
        <SearchIcon sx={{ color: 'rgba(248, 248, 248, 0.5)', fontSize: 20, mr: 1 }} />
        <InputBase
          sx={{ flex: 1, color: '#fff', fontSize: '14px' }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={handleSearchFocus} // Handle focus
        />
      </Paper>

      {/* Icon button */}
      <IconButton
        onClick={handleIconClick} // Handle icon click
        sx={{
          backgroundColor: 'rgba(40, 40, 40, 0.7)',
          color: '#ccc',
          ml: 1,
          width: 42,
          height: 42,
          '&:hover': {
            backgroundColor: '#2A2A2A',
          },
        }}
      >
        {searchFocused ? <CloseIcon /> : <AddIcon />} {/* Toggle icon */}
      </IconButton>

      {/* Overlay (fullscreen) */}
      {isAdding && (
        <Box
          sx={{
            position: 'fixed',  // Make the overlay cover the full screen
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)', // Darken the background
            zIndex: 1000,  // Ensure the overlay is above other content
            display: 'flex',
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically
            backdropFilter: 'blur(0px)', // Optional: add blur effect
          }}
        >
          <PostModal value={searchQuery} sx={{ width: '400px', padding: '20px' }} />
          <IconButton
            onClick={handleCloseAdd}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: 'rgba(40, 40, 40, 0.7)',
              color: '#fff',
              cursor: 'pointer',
              '&:hover': {
            backgroundColor: '#2A2A2A',
          },
            }}
          >
            <CloseIcon sx={{ color: '#ccc' }} />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Header;
