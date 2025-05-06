import React, { useState } from "react";
import { Avatar, ListItem, ListItemAvatar, ListItemText, IconButton, Box, Fade } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Check from "./check"; // Import the Check component

const TagPeopleCard = ({ name, username, active }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <ListItem
      button
      onMouseDown={() => setIsPressed(!isPressed)}
      sx={{
        display: "flex",
        bgcolor: isPressed ? "rgba(248, 248, 248, 0.1)" :  "rgba(248, 248, 248, 0.02)",
        color: "white",
        borderRadius: "24px",
        transition: "background 0.2s",
        "&:hover": isPressed ? {} : { bgcolor: "rgba(248, 248, 248, 0.05)" },
        width:  "100%",
        maxWidth:  "384px",
        maxheight: "72x",
        justifyContent:"flex-start",
        position: "relative",
        padding:"12px",
        gap :"12px"
      }}
    >
      <ListItemAvatar
        sx={{
          position: "relative", // Enables absolute positioning for child elements
          paddingLeft:  0,
          paddingRight: 0,
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

        <ListItemText
          primaryTypographyProps={{ color: "#F8F8F8B2", fontSize: 14, fontWeight: 600 }}
          secondaryTypographyProps={{ color: "##F8F8F880", fontSize: 12 }}
          primary={name}
          secondary={`@${username}`}
        />
 

    </ListItem>
  );
};

export default TagPeopleCard;
