import React, { use, useEffect, useState } from 'react';
import { Box, Fade } from '@mui/material';
import ArticleCard from "../../components/ArticleCard";
import ProfileCard from "../../components/ProfileCard";
import useUserStore from '../../Stores/UseUserStore';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../config/axiosInstance';

// Utility: Get top N posts by engagement (likes + comments)
const getTopPosts = (posts, count = 5) => {
  return [...posts]
    .sort((a, b) => {
      const engagementA = (a.likes?.length || 0) + (a.comments?.length || 0);
      const engagementB = (b.likes?.length || 0) + (b.comments?.length || 0);
      return engagementB - engagementA;
    })
    .slice(0, count);
};

// Utility: Find users most in common with current user
const getSimilarUsers = (users, posts, currentUserId, count = 5) => {
  const currentUser = users.find(u => u._id === currentUserId);
  if (!currentUser) return [];

  const similarityScores = users
    .filter(u => u._id !== currentUserId)
    .map(user => {
      const commonFollowers = user.followers.filter(f => currentUser.followers.includes(f)).length;
      const commonFollowing = user.following.filter(f => currentUser.following.includes(f)).length;

      const currentUserLikes = posts.filter(p => p.likes.includes(currentUserId)).map(p => p._id);
      const userLikes = posts.filter(p => p.likes.includes(user._id)).map(p => p._id);

      const commonLikedPosts = userLikes.filter(pId => currentUserLikes.includes(pId)).length;

      const score = commonFollowers + commonFollowing + commonLikedPosts;
      return { user, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(entry => entry.user);

  return similarityScores;
};


const TrendingTopics = () => {
  const [tab, setTab] = useState('trending'); // 'trending' or 'follow'
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userId } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [postsRes, usersRes] = await Promise.all([
          axiosInstance.get('/posts'),  // Your API for all posts
          axiosInstance.get('/users')   // Your API for all users
        ]);
        
        setPosts(postsRes.data);
        setUsers(usersRes.data);
      } catch (error) {
        console.error('Failed to fetch posts or users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const topPosts = getTopPosts(posts);
  const similarUsers = getSimilarUsers(users, posts, userId);
  console.log(users, posts, userId);
  console.log(similarUsers);

  const handlePostClick = (postId, e) => {
    e.stopPropagation();
    if (e.target.closest(".bookmark-button")) return;
    
    navigate(`/post/${postId}`);
  };

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  if (loading) return <div>Loading...</div>;

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
            {topPosts.map((post) => {
              const author = users.find(user => user.id === post.userId);
              return (
                <ArticleCard
                  key={post._id}
                  image={post.image || "https://picsum.photos/seed/1/600/400"}
                  title={post.content.slice(0, 20) + '...'}
                  content={post.content}
                  author={author?.name || "Unknown"}
                  authorAvatar={author?.avatar || ""}
                  date={post.createdAt}
                  category={post.category || "General"}
                  onClick={(e) => handlePostClick(post._id, e)}
                />
              );
            })}
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
            {similarUsers.map((user) => (
              <ProfileCard
                key={user._id}
                userId={user._id} // 👈 Pass it here
                name={user.name}
                handle={user.username}
                descript={user.bio}
                avatar={user.profilePicture}
                isFollowing={user.followers.includes(userId)}
              />

            ))}
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default TrendingTopics;
