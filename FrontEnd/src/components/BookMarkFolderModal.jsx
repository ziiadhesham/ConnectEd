import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  IconButton,
  Avatar,
  Paper
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from "@mui/icons-material/Check";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import FolderIcon from "@mui/icons-material/Folder";
import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ViewListIcon from "@mui/icons-material/ViewList";
import BrushIcon from "@mui/icons-material/Brush";

const initialFolders = [
  { id: 1, name: "All folders", count: 20, icon: <FolderIcon /> },
  { id: 2, name: "Inspirations", count: 5, icon: <AutoAwesomeIcon /> },
  { id: 3, name: "Design tools", count: 10, icon: <ViewListIcon /> },
  { id: 4, name: "UX/UI", count: 15, icon: <BrushIcon /> },
];

export default function BookmarkFolderModal() {
  const [folders, setFolders] = useState(initialFolders);
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [search, setSearch] = useState("");
  const [creatingNew, setCreatingNew] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  const handleCreateClick = () => {
    setCreatingNew(true);
  };

  const handleCreateSubmit = () => {
    if (newFolderName.trim()) {
      const newFolder = {
        id: Date.now(),
        name: newFolderName,
        count: 0,
        icon: <FolderIcon />,
      };
      setFolders([newFolder, ...folders]);
      setNewFolderName("");
      setCreatingNew(false);
    }
  };

  const handleSearchChange = (e) => setSearch(e.target.value);

  const filteredFolders = folders.filter((folder) =>
    folder.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Paper
      sx={{
        width: 400,
        borderRadius: 4,
        backgroundColor: "rgba(248, 248, 248, 0.15)",
        color: "#fff",
        p: 2
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Search folder..."
          value={search}
          onChange={handleSearchChange}
          InputProps={{
            sx: {
              bgcolor: "rgba(40, 40, 40, 0.7)",
              borderRadius: "20px",
              height: 44,
              color: "#fff",
              "& input::placeholder": {
                color: "#888"
              }
            },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#888" }} />
              </InputAdornment>
            )
          }}
        />
        <IconButton onClick={handleCreateClick} sx={{ ml: 1, color: "#ccc" }}>
          <CreateNewFolderIcon />
        </IconButton>
      </Box>

      <List dense sx={{ maxHeight: 300, overflowY: "auto" }}>
        {creatingNew && (
          <ListItem
            sx={{
              bgcolor: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              mb: 1,
              px: 2
            }}
            secondaryAction={
              <IconButton
                edge="end"
                onClick={() => {
                  setCreatingNew(false);
                  setNewFolderName("");
                }}
              >
                <CloseIcon sx={{ color: "#aaa" }} />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "#444" }}>
                <CreateNewFolderIcon />
              </Avatar>
            </ListItemAvatar>
            <TextField
              fullWidth
              variant="standard"
              placeholder="Folder name..."
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCreateSubmit()}
              InputProps={{
                disableUnderline: true,
                sx: { color: "#fff", "&::placeholder": { color: "#aaa" } }
              }}
            />
          </ListItem>
        )}

        {filteredFolders.map((folder) => (
          <ListItemButton
            key={folder.id}
            sx={{
              borderRadius: "20px",
              mb: 1,
              px: 2,
              backgroundColor:
                selectedFolderId === folder.id
                  ? "rgba(255,255,255,0.08)"
                  : "transparent"
            }}
            onClick={() => setSelectedFolderId(folder.id)}
          >
            <ListItemAvatar>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: "#444"
                }}
              >
                {folder.icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={folder.name}
              primaryTypographyProps={{ color: "#fff" }}
            />
            <Typography variant="body2" sx={{ color: "#aaa", mr: 1 }}>
              {folder.count}
            </Typography>
            {selectedFolderId === folder.id && (
              <CheckIcon sx={{ color: "#aaa" }} />
            )}
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
}
