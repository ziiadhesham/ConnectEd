import React, { useState } from "react";
import { ListItem,  ListItemText, Box } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";


const SocialSidebarItem = ({ collapsed = false }) => {
  const [interaction, setInteraction] = useState("default");

  return (
    <Box display="inline-block">
      <ListItem
        button
        onMouseEnter={() => setInteraction(interaction === "pressed" ? "pressed" : "hover")}
        onMouseLeave={() => setInteraction(interaction === "pressed" ? "pressed" : "default")}
        // onMouseDown={() => setInteraction("pressed")}
        onMouseUp={() => setInteraction("active")}
        onClick={() => setInteraction("pressed")}
        sx={{
            backgroundColor:
            interaction === "pressed"
              ? "#1212124D"
              : interaction === "active"
              ? "#222"
              : "#F8F8F81A",
          transition: "background 0.3s",
          borderRadius: "8px",
          marginBottom: "8px",
          display: "flex",
          alignItems: "center",
         padding: "8px",
          width: "fit-content", 
          '&:hover': interaction === "pressed" ? {} : { bgcolor: "rgba(248, 248, 248, 0.15)" }
        }}
      >
        
          <NotificationsIcon sx={{ color: "#fff", padding: collapsed ? "0px" : "2px",margin:"0px" }} />
       
        {!collapsed && <ListItemText primary="Item name" sx={{ color: "#fff" , paddingRight: "80px" }} />}
       
      </ListItem>
    </Box>
  );
};

export default SocialSidebarItem;