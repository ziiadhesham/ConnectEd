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
import PostModal from './PostModel';

import axios from 'axios';
import axiosInstance from '../config/axiosInstance';
import useUserStore from '../Stores/UseUserStore';


const Header = ({ tab, setTab, onSearchFocus, onSearchBlur ,profilepicture }) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const { userId } = useUserStore();

  const onPost = async (postData) => {
    
    try {
      // Upload to Cloudinary
      const formData = new FormData();
      formData.append('file', postData.file);
      formData.append('upload_preset', 'Connected1');
  
      const cloudinaryRes = await axios.post(
        'https://api.cloudinary.com/v1_1/doi3fbuvz/image/upload',
        formData
      );
      const imageUrl = cloudinaryRes.data.secure_url;
  
      // Then create post in backend
      const postRes = await axiosInstance.post('/posts', {
        userId: userId,
        content: postData.text,
        Image: imageUrl,
      });
  
      console.log('Post saved to DB:', postRes.data);
      handleCloseAdd();
    } catch (err) {
      console.error('Post failed:', err);
      handleCloseAdd();
    }
  };
  
  const handleCloseAdd = () => {
    setIsAdding(false);
  };

  const handleSearchFocus = () => {
    setSearchFocused(true);
    if (onSearchFocus) onSearchFocus();
  };

  const handleSearchBlur = () => {
    setSearchFocused(false);
    if (onSearchBlur) onSearchBlur();
  };

  const handleIconClick = () => {
    if (searchFocused) {
      handleCloseSearch();
      handleSearchBlur();
    } else {
      handleOpenSearch();
      setIsAdding(true);
    }
  };

  const handleOpenSearch = () => {
    console.log("Opening search...");
  };

  const handleCloseSearch = () => {
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
        position: 'relative',
      }}
    >
      {/* Toggle */}
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
        <Box sx={{ display: 'flex', width: '100%', zIndex: 2 }}>
          <button
            onClick={() => setTab('forYou')}
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
            onClick={() => setTab('following')}
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

      {/* Search */}
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
          onFocus={handleSearchFocus}
        />
      </Paper>

      {/* Action Icon */}
      <IconButton
        onClick={handleIconClick}
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
        {searchFocused ? <CloseIcon /> : <AddIcon />}
      </IconButton>

      {/* Modal Overlay */}
      {isAdding && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(0px)',
          }}
        >
          <PostModal value={searchQuery} onPost={onPost} sx={{ width: '400px', padding: '20px' }} profilepicture={profilepicture} />
          <IconButton
            onClick={handleCloseAdd}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: 'rgba(40, 40, 40, 0.7)',
              color: '#fff',
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
