import React, { useState } from "react";
import { IconButton, Box } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const BookmarkButton = ({ disabled = false }) => {
  const [active, setActive] = useState(false);
  const [interaction, setInteraction] = useState("default");

  const handleToggle = (e) => {
    e.stopPropagation();
    if (!disabled) setActive((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        // width: 50,
        // height: 50,
        borderRadius: "50%",
        backgroundColor:
          disabled
            ? "#555"
            : interaction === "press"
            ? "#282828"
            : interaction === "hover"
            ? "rgba(248, 248, 248, 0.23)"
            : interaction === "focus"
            ? "#333"
            : active
            ? "#444"
            : "transparent",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background-color 0.2s ease",
      }}
      onClick={handleToggle}
      onMouseEnter={() => setInteraction("hover")}
      onMouseLeave={() => setInteraction("default")}
      onMouseDown={() => setInteraction("press")}
      onMouseUp={() => setInteraction("hover")}
      onFocus={() => setInteraction("focus")}
      onBlur={() => setInteraction("default")}
    >
      <IconButton disabled={disabled} sx={{ color: "white" }}>
        {active ? <BookmarkIcon /> : <BookmarkBorderIcon />}
      </IconButton>
    </Box>
  );
};

export default BookmarkButton;
