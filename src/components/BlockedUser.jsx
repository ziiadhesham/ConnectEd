import React, { useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import FancyButton from "./Button";

const BlockedUser = ({
  state = "default",
  name = "Kohaku",
  message = "I know, right? 🤔 I'm thinking we could use some...",
  time = "2h",
  avatarUrl = "https://i.pravatar.cc/40"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const getBackground = () => {
    if (state === "disabled") return "rgba(248, 248, 248, 0.02)";
    if (state === "selected") return "#3A3A3A";
    if (isPressed) return "rgba(40, 40, 40, 0.5)";
    if (isHovered) return "rgba(248, 248, 248, 0.05)";
    switch (state) {
      case "focus":
        return "rgba(248, 248, 248, 0.02)";
      case "active":
        return "rgba(248, 248, 248, 0.1)";
      case "active-hover":
        return "rgba(255, 255, 255, 0.05)";
      default:
        return "rgba(248, 248, 248, 0.02)";
    }
  };

  const getOpacity = () => (state === "disabled" ? 0.4 : 1);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      sx={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "454px",
        height: "104px",
        px: 2,
        py: 1.5,
        borderRadius: "20px",
        backgroundColor: getBackground(),
        opacity: getOpacity(),
        transition: "background 0.2s ease",
        cursor: state !== "disabled" ? "pointer" : "not-allowed"
      }}
    >
      {/* First Row: Avatar, Name+Time, Button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar src={avatarUrl} alt={name} />
          <Box>
            <Typography
              sx={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}
            >
              {name}
              <Typography
                component="span"
                sx={{ fontSize: "12px", color: "#aaa", ml: 1 }}
              >
                {time}
              </Typography>
            </Typography>
          </Box>
        </Box>

        <FancyButton placeholder="Unblock" />
      </Box>

      {/* Second Row: Message */}
      <Typography
        sx={{
          fontSize: "13px",
          color: "#ccc",
          mt: 1,
          ml: 7, // aligns with start of text (after avatar)
          maxWidth: "300px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default BlockedUser;
