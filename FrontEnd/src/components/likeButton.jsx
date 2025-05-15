import React, { useState, useEffect } from "react";
import { IconButton, Box, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axiosInstance from "../config/axiosInstance";
import useUserStore from "../Stores/UseUserStore";

const LikeButton = ({ likedBy = [], initialLikes = 0, postId }) => {
  const { userId } = useUserStore();

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [interaction, setInteraction] = useState("default");

  // Sync liked and likes when props change
  useEffect(() => {
    setLiked(likedBy.includes(userId));
    setLikes(initialLikes);
  }, [likedBy, initialLikes, userId]);

  const handleLike = async (e) => {
    e.stopPropagation();

    if (!userId || !postId) return;

    try {
      const res = await axiosInstance.post(`/posts/${postId}/like/${userId}`);
      const newCount = res.data.likesCount;

      setLiked((prevLiked) => !prevLiked);
      setLikes(newCount);
    } catch (err) {
      console.error("Failed to like post:", err);
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
