import React, { useState } from "react";
import { Avatar, ListItem, ListItemAvatar, ListItemText, IconButton, Box, Fade } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Check from "./check"; // Import the Check component

const SocialSidebarUserItem = ({ name, username, collapsed, active }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <ListItem
      button
      onMouseDown={() => setIsPressed(!isPressed)}
      sx={{
        display: "flex",
        bgcolor: isPressed ? "#1212124D" : active ? "#222" : "rgba(248, 248, 248, 0.10)",
        color: "white",
        borderRadius: collapsed ? 30 : 2,
        transition: "background 0.2s",
        "&:hover": isPressed ? {} : { bgcolor: "rgba(248, 248, 248, 0.15)" },
        width: collapsed ? "auto" : "100%",
        maxWidth: collapsed ? "58px" : "270px",
        justifyContent: collapsed ? "center" : "flex-start",
        position: "relative",
        padding: collapsed ? 0 : "4px 8px",
      }}
    >
      <ListItemAvatar
        sx={{
          position: "relative", // Enables absolute positioning for child elements
          paddingLeft: collapsed ? 6 : 0,
          paddingRight: collapsed ? 4 : 0,
        }}
      >
        {/* Online/Offline Check Icon at Top-Left Corner */}
        <Box
          sx={{
            position: "absolute",
            top: 5,
            left: 5,
            transform: "translate(-30%, -30%)", // Adjust positioning
            zIndex: 2,
            borderRadius: "50%",
            padding: "2px",
          }}
        >
          <Check active={true} /> 
        </Box>

        <Avatar src="https://via.placeholder.com/40" alt={name} />
      </ListItemAvatar>

      {!collapsed && (
        <ListItemText
          primaryTypographyProps={{ color: "#F8F8F8B2", fontSize: 14, fontWeight: 600 }}
          secondaryTypographyProps={{ color: "##F8F8F880", fontSize: 12 }}
          primary={name}
          secondary={`@${username}`}
        />
      )}

      {!active && (
        <IconButton sx={{ color: "white" }} onClick={(e) =>{ 
          e.preventDefault();
          e.stopPropagation(); 
          setShowMenu((prev) => !prev)
          
        }}>
          <MoreVertIcon />
        </IconButton>
      )}

      <Fade in={showMenu}>
        <Box
          sx={{
            position: "absolute",
            right: collapsed ? "-40px" : 10,
            top: "100%",
            transform: "translateY(10px)",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            bgcolor: "#222",
            p: 1,
            borderRadius: 2,
            boxShadow: 3,
            zIndex: 3,
          }}
        >
          <IconButton sx={{ color: "white" }}>
            <SettingsIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <LogoutIcon />
          </IconButton>
        </Box>
      </Fade>
    </ListItem>
  );
};

export default SocialSidebarUserItem;
