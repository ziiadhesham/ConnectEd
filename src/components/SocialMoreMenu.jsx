import React, { useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoodBadIcon from '@mui/icons-material/MoodBad';
import LinkIcon from "@mui/icons-material/Link";
import CancelIcon from '@mui/icons-material/Cancel';

const menuItems = [
  { label: "Not interested", icon: <MoodBadIcon fontSize="small" /> },
  { label: "Copy link", icon: <LinkIcon fontSize="small" /> },
  { label: "Block @username", icon: <CancelIcon fontSize="small" /> },
];

const SocialMoreMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        onClick={handleOpenMenu}
        sx={{
          backgroundColor: open ? "rgba(255,255,255,0.05)" : "transparent",
          "&:hover": {
            backgroundColor: "rgba(248, 248, 248, 0.1)",
          },
          color: "ffffff",
        }}
      >
        <MoreHorizIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        PaperProps={{
          sx: {
            width: "240px",
            borderRadius: "24px",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            backgroundColor: "rgba(40, 40, 40, 0.7)",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          },
        }}
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        {menuItems.length > 0 ? (
          menuItems.map(({ label, icon }, index) => (
            <MenuItem
              key={index}
              onClick={handleCloseMenu}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#fff", // More solid for visibility
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              {icon}
              <Typography fontSize={15}>{label}</Typography>
            </MenuItem>
          ))
        ) : (
          <Typography sx={{ padding: 2, color: "#fff" }}>
            No options available
          </Typography>
        )}
      </Menu>
    </Box>
  );
};

export default SocialMoreMenu;
