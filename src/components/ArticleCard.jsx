import React from 'react';
import { Box, Typography, Avatar, Chip } from '@mui/material';

const ArticleCard = ({
  image,
  title,
  content,
  author,
  authorAvatar,
  date,
  category,
}) => {
  return (
    <Box
      sx={{
        width: '390px',
        padding: '8px',
        display: 'flex',
        gap: '16px',
        borderRadius: '20px',
        backgroundColor: 'rgba(248, 248, 248, 0.02)',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'rgba(248, 248, 248, 0.06)',
          transform: 'translateY(-2px)',
        },
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: '100px',
          height: '100px',
          borderRadius: '16px',
          objectFit: 'cover',
        }}
      />

      {/* Text section */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ color: 'white' }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mt: 0.5 }}>
          {content}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <Avatar src={authorAvatar} alt={author} sx={{ width: 24, height: 24 }} />
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            {date}
          </Typography>
          <Chip
            label={category}
            size="small"
            sx={{
              backgroundColor: '#1f1f1f',
              color: '#f77fbe',
              fontWeight: 500,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ArticleCard;
