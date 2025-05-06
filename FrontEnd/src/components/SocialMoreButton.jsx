import React, { useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import LinkIcon from "@mui/icons-material/Link";
import StarBorderIcon from "@mui/icons-material/StarBorder";

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
      {/* Top Row: 3-dot icon */}
      <IconButton
        onClick={handleOpenMenu}
        sx={{
          backgroundColor: open ? "rgba(255,255,255,0.05)" : "transparent",
          "&:hover": {
            backgroundColor: "rgba(248, 248, 248, 0.1)",
          },
          color: "rgba(248, 248, 248, 0.7)",
        }}
      >
        <MoreHorizIcon />
      </IconButton>

      {/* Menu: Appears when clicked */}
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
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        {menuItems.map(({ label, icon }, index) => (
          <MenuItem
            key={index}
            onClick={handleCloseMenu}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "rgba(248, 248, 248, 0.7)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.05)",
              },
            }}
          >
            {icon}
            <Typography fontSize={14}>{label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

const menuItems = [
  { label: "Delete", icon: <DeleteOutlineIcon fontSize="small" /> },
  { label: "Copy link", icon: <LinkIcon fontSize="small" /> },
  { label: "Feature post", icon: <StarBorderIcon fontSize="small" /> },
];

export default SocialMoreMenu;
