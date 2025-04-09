import React, { useState } from "react";
import { Avatar, ListItemAvatar, Box } from "@mui/material";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded"; // Icon on hover

const UserAvatarWithHoverIcon = ({
  src,
  alt = "User Avatar",
  disabled = false,
  size = 50,
  editable = false, // toggles the hover icon
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

 

  return (
    <ListItemAvatar
      sx={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        border: isFocused ? "2px solidrgba(248, 248, 248, 0.5)" : "none",
        transition: "all 0.2s ease",
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        outline: "none",
      }}
      tabIndex={disabled ? -1 : 0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {/* Avatar Image */}
      <Avatar
        src={src}
        alt={alt}
        sx={{ width: "100%", height: "100%", pointerEvents: "none" }}
      />

      {/* Hover Camera Icon */}
      {editable && isHovered && !disabled && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <CameraAltRoundedIcon fontSize="medium" />
        </Box>
      )}
    </ListItemAvatar>
  );
};

export default UserAvatarWithHoverIcon;
