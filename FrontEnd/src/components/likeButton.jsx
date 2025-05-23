import React, { useState, useEffect } from "react";
import { IconButton, Box, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axiosInstance from "../config/axiosInstance";
import useUserStore from "../Stores/UseUserStore";

const LikeButton = ({ likedBy = [], initialLikes = 0, postId, postOwnerId }) => {
  const { userId } = useUserStore();

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [interaction, setInteraction] = useState("default");

  useEffect(() => {
    if (Array.isArray(likedBy) && likedBy.includes(userId)) {
      setLiked(true);
      setLikes(initialLikes);
    }
  }, [likedBy, initialLikes, userId]);

  const handleLike = async (e) => {
    e.stopPropagation();
    if (!userId || !postId) return;

    try {
      // Like/unlike the post
      const res = await axiosInstance.post(`/posts/${postId}/like/${userId}`);
      const newCount = res.data.likesCount;

      const justLiked = !liked;
      setLiked(justLiked);
      setLikes(newCount);

      // Send notification if it's a new like and not your own post
      if (justLiked && userId !== postOwnerId) {
        await axiosInstance.post("/notifications", {
          type: "like",
          senderId: userId,
          receiverId: postOwnerId,
          text: "liked your post",
        });
      }
    } catch (err) {
      console.error("Failed to like post or send notification:");
      console.error("Message:", err.message);
      console.error("Response data:", err.response?.data);
      console.error("Stack:", err.stack);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 50,
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        padding: "5px",
        borderRadius: 20,
        backgroundColor:
          interaction === "press"
            ? "#282828"
            : interaction === "hover"
            ? "rgba(248, 248, 248, 0.23)"
            : liked
            ? "#444"
            : "transparent",
        cursor: "pointer",
        transition: "background-color 0.2s ease",
      }}
      onClick={handleLike}
      onMouseEnter={() => setInteraction("hover")}
      onMouseLeave={() => setInteraction("default")}
      onMouseDown={() => setInteraction("press")}
      onMouseUp={() => setInteraction("hover")}
    >
      <IconButton sx={{ color: "rgba(248, 248, 248, 0.7)", padding: 0 }}>
        {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
      </IconButton>
      <Typography sx={{ color: "rgba(248, 248, 248, 0.7)", fontSize: 14 }}>
        {likes}
      </Typography>
    </Box>
  );
};

export default LikeButton;
