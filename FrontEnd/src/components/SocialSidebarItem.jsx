import React from "react";
import { ListItem, ListItemText, Box, Badge } from "@mui/material";
import { useLocation } from "react-router-dom";

const SocialSidebarItem = ({ label, icon, collapsed = false, badge }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const itemPath = `/${label.toLowerCase()}`;

  const isActive = currentPath === itemPath;

  return (
    <Box display="inline-block">
      <ListItem
        button
        sx={{
          backgroundColor: isActive
            ? "rgba(248, 248, 248, 0.15)"
            : "transparent",
          transition: "background 0.3s",
          borderRadius: "12px",
          marginBottom: "8px",
          display: "flex",
          alignItems: "center",
          padding: "8px",
          width: collapsed ? "40px" : "271px",
          '&:hover': {
            bgcolor: isActive
              ? "rgba(248, 248, 248, 0.15)"
              : "rgba(255, 255, 255, 0.05)"
          }
        }}
      >
        {/* Icon with optional Badge */}
        {badge ? (
          <Badge badgeContent={badge} color="error">
            <Box sx={{ color: "rgba(248, 248, 248, 0.5)", padding: collapsed ? "0px" : "2px" }}>
              {icon}
            </Box>
          </Badge>
        ) : (
          <Box sx={{ color: "rgba(248, 248, 248, 0.5)", padding: collapsed ? "0px" : "2px" }}>
            {icon}
          </Box>
        )}

        {/* Label */}
        {!collapsed && (
          <ListItemText
            primary={label}
            sx={{
              color: "rgba(248, 248, 248, 0.5)",
              paddingRight: "80px",
              marginLeft: "8px"
            }}
          />
        )}
      </ListItem>
    </Box>
  );
};

export default SocialSidebarItem;
