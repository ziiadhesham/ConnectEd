import React, { useState } from "react";
import { ListItem, ListItemText, Box, Badge } from "@mui/material";

const SocialSidebarItem = ({ label, icon, collapsed = false, badge }) => {
  const [interaction, setInteraction] = useState("default");

  return (
    <Box display="inline-block">
      <ListItem
        button
        onMouseEnter={() =>
          setInteraction(interaction === "pressed" ? "pressed" : "hover")
        }
        onMouseLeave={() =>
          setInteraction(interaction === "pressed" ? "pressed" : "default")
        }
        onMouseUp={() => setInteraction("active")}
        onClick={() => setInteraction("pressed")}
        sx={{
          backgroundColor:
            interaction === "pressed"
              ? "rgba(18, 18, 18, 0.3)"
              : interaction === "active"
              ? "rgba(18, 18, 18, 0.3)"
              : "transparent",
          transition: "background 0.3s",
          borderRadius: "12px",
          marginBottom: "8px",
          display: "flex",
          alignItems: "center",
          padding: "8px",
          width: collapsed ? "40px" : "271px",
          '&:hover': interaction === "pressed"
            ? {}
            : { bgcolor: "rgba(255, 255, 255, 0.05)" }
        }}
      >
        {/* Icon with optional Badge */}
        {badge ? (
          <Badge badgeContent={badge} color="error">
            <Box sx={{ color: "#fff", padding: collapsed ? "0px" : "2px", margin: "0px" }}>
              {icon}
            </Box>
          </Badge>
        ) : (
          <Box sx={{ color: "#fff", padding: collapsed ? "0px" : "2px", margin: "0px" }}>
            {icon}
          </Box>
        )}

        {/* Label */}
        {!collapsed && (
          <ListItemText
            primary={label}
            sx={{ color: "#fff", paddingRight: "80px" ,marginLeft:"8px" }}
          />
        )}
      </ListItem>
    </Box>
  );
};

export default SocialSidebarItem;
