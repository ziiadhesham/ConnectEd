import React, { useState } from "react";
import { IconButton, Badge, Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const NotificationButton = ({ showNotification = false, disabled = false }) => {
  const [active, setActive] = useState(false);
  const [interaction, setInteraction] = useState("default");
  const [pressed, setPressed] = useState(false);

  const handleToggle = (e) => {
    e.stopPropagation(); // Prevent unintended event conflicts
    if (!disabled) setActive((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        borderRadius: 2,
        color: "#F8F8F8",
        backgroundColor:
          interaction === "press"
            ? "#282828"
            : interaction === "hover"
            ? "rgba(248, 248, 248, 0.23)"

            : interaction === "focus"
            ? "#333"
            : "transparent",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      onClick={handleToggle} // Move toggle here for better responsiveness
      onMouseEnter={() => !pressed && setInteraction("hover")}
      onMouseLeave={() => {
        setInteraction("default");
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onFocus={() => setInteraction("focus")}
      onBlur={() => setInteraction("default")}
    >
      <IconButton disabled={disabled} sx={{ color: "white" }}>
        {showNotification ? (
          <Badge badgeContent={12} color="error">
            { <FavoriteBorderIcon />}
          </Badge>
        ) : (
          <FavoriteBorderIcon />
        )}
      </IconButton>
    </Box>
  );
};

export default NotificationButton;
