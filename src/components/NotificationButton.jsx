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
      width: "40px", // Match IconButton width
      height: "32px",
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
      margin: 0,
      padding: 0, // Add this just to be sure
    }}
  >
    <IconButton
      disabled={disabled}
      sx={{
        color: "white",
        padding: 0,
        margin: 0,
        width: "100%",   // Match Box dimensions
        height: "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {showNotification ? (
        <Badge
        badgeContent={12}
        color="error"
        sx={{
          '& .MuiBadge-badge': {
            top: 2,
            right: 2,
            minWidth: 16,
            height: 16,
            padding: '0 4px',
            fontSize: '0.75rem',
          },
          margin: 0,
        }}
      >
        <FavoriteBorderIcon />
      </Badge>
      ) : (
        <FavoriteBorderIcon />
      )}
    </IconButton>
  </Box>
  
  );
};

export default NotificationButton;
