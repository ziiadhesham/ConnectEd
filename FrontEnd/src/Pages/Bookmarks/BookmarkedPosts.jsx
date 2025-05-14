import React, { useState, useEffect } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import TextAndPhoto from "../../components/textAndPhoto";
import { useNavigate } from "react-router";
import useBookmarkFolderStore from "../../Stores/useBookmarkFolderStore";
import useUserStore from "../../Stores/UseUserStore";
import axiosInstance from "../../config/axiosInstance";

export default function BookmarkedPosts() {
  const { userId } = useUserStore();
  const { selectedFolderId } = useBookmarkFolderStore();
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [filteredPosts, setFilteredPosts] = useState([]);

  const handlePostClick = (postId, e) => {
    e.stopPropagation();
    if (e.target.closest(".bookmark-button")) return;
    navigate(`/post/${postId}`);
  };

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        // const res = await fetch(
        //   `${import.meta.env.VITE_API_BASE_URL}/api/bookmarks/user/${userId}/folder/${selectedFolderId}`,
        //   {
        //     method: "GET",
        //     headers: {
        //       "Content-Type": "application/json",
        //       Authorization: `Bearer ${localStorage.getItem("token")}`,
        //     },
        //   }
        // );
        const res = await axiosInstance.get(
          `/bookmarks/folder/${selectedFolderId}`
        );
        

        // if (!res.ok) throw new Error("Failed to fetch bookmarks");
        console.log(res.data);
        const data = await res.data;
        console.log("Fetched bookmarks from API", data);

        // Ensure all bookmarks have populated postId
        const postsWithUserInfo = data
          .map((bookmark) => {
            const post = bookmark.postId;
            const user = post.userId;

            if (!post || !user) return null;

            return {
              id: post._id,
              username: user.username,
              avatar: user.profilePicture,
              time: post.time,
              content: post.content,
              image: post.image,
              video: post.video,
            };
          })
          .filter((item) => item !== null);

        setFilteredPosts(postsWithUserInfo);
      } catch (err) {
        console.error("Error fetching bookmarked posts:", err);
      }
    };

    if (userId && selectedFolderId) {
      fetchBookmarks();
    }
  }, [userId, selectedFolderId]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(40, 40, 40, 0.7)",
      }}
    >
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          p: isSmallScreen ? 1 : 3,
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {filteredPosts.map((post) => (
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

      <Box
        sx={{
          width: "100%",
          position: "sticky",
          bottom: 0,
          backgroundColor: "rgba(40, 40, 40, 0.8)",
          borderTop: "1px solid #333",
          zIndex: 1000,
        }}
      ></Box>
    </Box>
  );
}
