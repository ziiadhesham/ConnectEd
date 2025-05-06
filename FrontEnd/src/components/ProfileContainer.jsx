import React, { useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const ProfileCard = ({
  name = "Moyo Shiro",
  email = "moyoshiro@email.com",
  avatarUrl,
  noAvatar = false,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{
        width: "376px",
        height: "204px",
        borderRadius: "20px",
        border: "1.5px solid rgba(255, 255, 255, 0.15)",
        backgroundColor: "rgba(248, 248, 248, 0.05)",
        padding: "32px",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        position: "relative",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Avatar or No Avatar Icon */}
      <Box
        sx={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        {noAvatar ? (
          <PersonOutlineIcon sx={{ color: "#aaa", fontSize: 80, margin: "0px" }} />

        ) : (
          <Avatar src={avatarUrl} alt={name} sx={{ width: 80, height: 80 ,margin: "0px"}} />
        )}

        {/* Hover Overlay with Edit Text */}
        {hovered && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Edit
            </Typography>
          </Box>
        )}
      </Box>

      {/* Name and Email */}
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "16px",
          color: "#fff",
          marginTop: "16px",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          color: "#aaa",
        }}
      >
        {email}
      </Typography>
    </Box>
  );
};

export default ProfileCard;
