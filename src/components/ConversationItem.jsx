import React, { useState } from "react";
import { Avatar, Box, Typography, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const ConversationItem = ({
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
      case "focus": return "rgba(248, 248, 248, 0.02)";
      case "active": return "rgba(248, 248, 248, 0.1)";
      case "active-hover": return "rgba(255, 255, 255, 0.05)";
      default: return "rgba(248, 248, 248, 0.02)";
    }
  };

  const getOpacity = () => {
    return state === "disabled" ? 0.4 : 1;
  };

  const renderEndIcon = () => {
    if (state === "selected") {
      return <CheckCircleIcon sx={{ color: "#4CAF50" }} />;
    }
    if (state === "active" || state === "active-hover") {
      return (
        <IconButton size="small" sx={{ color: "#ccc" }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      );
    }
    return <FiberManualRecordIcon sx={{ color: "limegreen", fontSize: "12px" }} />;
  };

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
        alignItems: "center",
        justifyContent: "space-between",
        width: "376px",
        height: "68px",
        px: 2,
        py: 1.5,
        borderRadius: "20px",
        backgroundColor: getBackground(),
        opacity: getOpacity(),
        transition: "background 0.2s ease",
        cursor: state !== "disabled" ? "pointer" : "not-allowed"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Avatar src={avatarUrl} alt={name} />
        <Box>
          <Typography sx={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}>
            {name}
            <Typography
              component="span"
              sx={{ fontSize: "12px", color: "#aaa", ml: 1 }}
            >
              {time}
            </Typography>
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              color: "#ccc",
              maxWidth: "240px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {message}
          </Typography>
        </Box>
      </Box>

      <Box>{renderEndIcon()}</Box>
    </Box>
  );
};

export default ConversationItem;
