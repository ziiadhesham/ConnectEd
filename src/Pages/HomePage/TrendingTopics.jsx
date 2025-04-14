import React, { useState } from 'react';
import { Box, Fade } from '@mui/material';
import ArticleCard from "../../components/ArticleCard";
import ProfileCard from "../../components/ProfileCard"; // Make sure this path is correct
import TrendingTopicsData from '../../MockData/TrendingTopicsData'; // Importing trending topics data
import whoToFollow from '../../MockData/WhoToFollow'; // Importing who to follow data

const TrendingTopics = () => {
  const [tab, setTab] = useState('trending'); // 'trending' or 'follow'
  const isPosting = false;

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Toggle Wrapper */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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

      {/* Tab Content with Transitions */}
      <Box sx={{ position: 'relative', minHeight: '300px' }}>
        {/* Trending Topics */}
        <Fade in={tab === 'trending'} timeout={400} unmountOnExit>
          <Box
            key="trending"
            sx={{
              display: tab === 'trending' ? 'block' : 'none',
              position: 'absolute',
              width: '100%',
            }}
          >
            {TrendingTopicsData.map((topic) => (
              <ArticleCard
                key={topic.id}
                image={topic.image}
                title={topic.title}
                content={topic.content}
                author={topic.author}
                authorAvatar={topic.authorAvatar}
                date={topic.date}
                category={topic.category}
              />
            ))}
          </Box>
        </Fade>

        {/* Who to Follow */}
        <Fade in={tab === 'follow'} timeout={400} unmountOnExit>
          <Box
            key="follow"
            sx={{
              display: tab === 'follow' ? 'block' : 'none',
              position: 'absolute',
              width: '100%',
              marginTop: '20px',
            }}
          >
            {whoToFollow.map((user) => (
              <ProfileCard
                key={user.id}
                name={user.name}
                username={user.username}
                bio={user.bio}
                avatar={user.avatar}
                initiallyFollowing={user.initiallyFollowing}
              />
            ))}
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default TrendingTopics;
