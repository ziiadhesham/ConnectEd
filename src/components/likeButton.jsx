import React, { useState } from "react";
import { IconButton, Box, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const LikeButton = ({ initialLikes = 12 }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [interaction, setInteraction] = useState("default");

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <Box
      sx={{
        maxWidth: 50,
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        padding: "5px 5px",
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
      <IconButton sx={{ color: "white", padding: 0 }}>
        {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
      </IconButton>
      <Typography sx={{ color: "white", fontSize: 14 }}>{likes}</Typography>
    </Box>
  );
};

export default LikeButton;
