import React, { useState } from "react";
import { Box, Typography, IconButton, Paper, Stack, Badge } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import MoreVertIcon from "@mui/icons-material/MoreVert";


const SocialFolderItem= ({
  title,
  count,
  active = false,
  onClick,
  showIcons = true,
}) => {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <Paper
      elevation={active ? 4 : 1}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onClick={onClick}
      sx={{
        width: "90%",
        marginBottom: "8px",
        height: "68px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
        py: 1,
        borderRadius: 2,
        cursor: "pointer",
        backgroundColor: pressed
          ? "rgba(18, 18, 18, 0.2)"
          : "rgba(248, 248, 248, 0.1)",
        color: "#fff",
        transition: "all 0.2s ease",
        "&:hover":{
          backgroundColor: "rgba(248, 248, 248, 0.07)",
        }
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <FolderIcon />
        <Typography variant="subtitle1">{title}</Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1}>
        {count !== undefined && (
          <Typography variant="body2" sx={{ color: "#aaa" }}>
            {count}
          </Typography>
        )}
        {showIcons && (
          <>
            <IconButton size="small" sx={{ color: "#aaa" }}>
              <ContentCopyIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: "#aaa" }}>
              <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: "#aaa" }}>
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </>
        )}
      </Stack>
    </Paper>
  );
};

export default SocialFolderItem;
