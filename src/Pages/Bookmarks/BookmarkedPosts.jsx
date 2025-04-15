import React, { useState } from "react";
import { Box, Typography, Avatar, useMediaQuery, useTheme } from "@mui/material";

import TextAndPhoto from "../../components/textAndPhoto";
import posts from "../../MockData/PostsData"; // ✅ Import mock posts
import { useNavigate } from "react-router";


export default function BookmarkedPosts() {
    const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handlePostClick = (postId, e) => {
    e.stopPropagation();
    if (e.target.closest(".bookmark-button")) return;
    navigate(`/post/${postId}`);
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", backgroundColor: "rgba(40, 40, 40, 0.7)" }}>


      {/* Chat Body */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          p: isSmallScreen ? 1 : 3,
          WebkitOverflowScrolling: "touch", // smooth scrolling on iOS
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari, Edge
          },
        }}
      >
        {/* Loop through mock data and display messages */}
        {posts.map((post) => (
              <TextAndPhoto
                key={post.id}
                username={post.username}
                time={post.time}
                avatar={post.avatar}
                content={post.content}
                image={post.image}
                video={post.video}
                onClick={(e) => handlePostClick(post.id, e)}
              />
            ))}
      </Box>

      {/* Message Input Box - Fixed at bottom */}
      <Box
        sx={{
          width: "100%",
          position: "sticky",
          bottom: 0,
          backgroundColor: "rgba(40, 40, 40, 0.8)",
          borderTop: "1px solid #333",
          zIndex: 1000, // Ensures input stays above messages
        }}
      >

      </Box>
    </Box>
  );
} 