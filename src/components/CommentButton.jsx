import React, { useState } from "react";
import { IconButton, Box, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const CommentButton = ({ initialComments = 12 }) => {
  const [interaction, setInteraction] = useState("default");

  return (
    <Box
      sx={{
        maxWidth: "50px",
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
            : "transparent",
        cursor: "pointer",
        transition: "background-color 0.2s ease",
      }}
      onMouseEnter={() => setInteraction("hover")}
      onMouseLeave={() => setInteraction("default")}
      onMouseDown={() => setInteraction("press")}
      onMouseUp={() => setInteraction("hover")}
    >
      <IconButton sx={{ color: "white", padding: 0 }}>
        <ChatBubbleOutlineIcon />
      </IconButton>
      <Typography sx={{ color: "white", fontSize: 16 }}>{initialComments}</Typography>
    </Box>
  );
};

export default CommentButton;
