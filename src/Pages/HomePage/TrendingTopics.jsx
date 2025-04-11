import React, { useState } from 'react';
import { Box } from '@mui/material';
import ArticleCard from "../../components/ArticleCard";

const TrendingTopics = () => {
  const [tab, setTab] = useState('trending'); // 'trending' or 'follow'
  const isPosting = false; // just for now, can be controlled from props if needed

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
     {/* Toggle Wrapper (Centering the button) */}
<Box sx={{ display: 'flex', justifyContent: 'center' }}>
  {/* Toggle Button */}
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
      opacity: isPosting ? 0.6 : 1,
      pointerEvents: isPosting ? 'none' : 'auto',
    }}
  >
    {/* Sliding background */}
    <Box
      sx={{
        position: 'absolute',
        top: 4,
        left: tab === 'trending' ? 4 : 'calc(50% + 2px)',
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
        onClick={() => handleTabChange('trending')}
        style={{
          flex: 1,
          border: 'none',
          background: 'transparent',
          color: tab === 'trending' ? '#fff' : '#aaa',
          fontWeight: 600,
          fontSize: '13px',
          cursor: 'pointer',
          padding: '8px 0',
          borderRadius: '9999px',
        }}
      >
        Trending Topics
      </button>
      <button
        onClick={() => handleTabChange('follow')}
        style={{
          flex: 1,
          border: 'none',
          background: 'transparent',
          color: tab === 'follow' ? '#fff' : '#aaa',
          fontWeight: 600,
          fontSize: '13px',
          cursor: 'pointer',
          padding: '8px 0',
          borderRadius: '9999px',
        }}
      >
        Who to Follow
      </button>
    </Box>
  </Box>
</Box>


      {/* Conditional Content */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {tab === 'trending' ? (
          <>
            <ArticleCard
              image="https://picsum.photos/200/300"
              title="The Best iOS18 Features"
              content="So Apple announced the new features coming in iOS18 and it’s just over a couple of weeks since..."
              author="Avatar 5"
              authorAvatar="https://picsum.photos/200/300"
              date="5 Jul 2024"
              category="Design"
            />
            <ArticleCard
              image="https://picsum.photos/200/300"
              title="React 19 Is Coming"
              content="React just dropped some info about v19 and it’s packed with updates..."
              author="John Dev"
              authorAvatar="https://picsum.photos/200/301"
              date="8 Apr 2025"
              category="Tech"
            />
          </>
        ) : (
          <>
            {/* You can replace these with your own FollowCard components later */}
            <ArticleCard
              image="https://picsum.photos/200/302"
              title="Mohamed Shawky"
              content="Front-end Developer • JavaScript | React | AI"
              author="@mshawky"
              authorAvatar="https://i.pravatar.cc/150?img=5"
              date=""
              category="Suggested"
            />
            <ArticleCard
              image="https://picsum.photos/200/303"
              title="Sara Techie"
              content="Flutter Dev • Mobile UX wizard & Coffee nerd ☕"
              author="@sara"
              authorAvatar="https://i.pravatar.cc/150?img=10"
              date=""
              category="Suggested"
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default TrendingTopics;
