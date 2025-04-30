import React, { useState, useEffect } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import TextAndPhoto from "../../components/textAndPhoto";
import posts from "../../MockData/PostsData"; // ✅ Import mock posts
import { useNavigate } from "react-router";
import useBookmarkFolderStore from "../../Stores/useBookmarkFolderStore";
import bookmarks from "../../MockData/bookmarksData"; // Updated import
import useUserStore from "../../Stores/UseUserStore";
import usersData from "../../MockData/usersAccountsData"; // Import users data

export default function BookmarkedPosts() {
  const { userId } = useUserStore(); // Get current userId
  const { selectedFolderId } = useBookmarkFolderStore(); // Get selected folder ID
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // State to hold filtered posts for the selected folder
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handlePostClick = (postId, e) => {
    e.stopPropagation();
    if (e.target.closest(".bookmark-button")) return;
    navigate(`/post/${postId}`);
  };

  useEffect(() => {
    // Get all bookmarks for the current user
    const userBookmarks = bookmarks.filter((bookmark) => bookmark.userId === userId);
    console.log("userbookmarks", userBookmarks);

    // Get the post ids associated with the selected folder
    const folderBookmarks = userBookmarks.filter(
      (bookmark) => bookmark.folderId === selectedFolderId
    );
    console.log("folderbookmarks", folderBookmarks);

    // Map to retrieve the post data for those postIds and enrich with user data
    const selectedPosts = folderBookmarks.map((bookmark) => {
      const post = posts.find((post) => post.id === bookmark.postId);
      if (post) {
        const user = usersData.find((user) => user.id === post.userId); // Fetch user data
        return {
          ...post,
          username: user ? user.username : "Unknown User", // Add username
          avatar: user ? user.profilePicture : "", // Add avatar
        };
      }
      return null;
    }).filter(post => post !== null); // Remove null posts

    console.log("selectedPosts", selectedPosts);

    // Update the filteredPosts state with the selected posts
    setFilteredPosts(selectedPosts);
  }, [userId, selectedFolderId]);

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
        {/* Loop through filtered posts and display */}
        {filteredPosts.map((post) => (
          <TextAndPhoto
            key={post.id}
            username={post.username} // Now using the username from user data
            time={post.time}
            avatar={post.avatar} // Now using the avatar from user data
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
      ></Box>
    </Box>
  );
}
