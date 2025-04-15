import React, { useState } from "react";
import {
  Box,
  IconButton,
  TextField,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import FolderIcon from "@mui/icons-material/Folder";
import CheckIcon from "@mui/icons-material/Check";
import SocialFolderItem from "../../components/SocialFolderItem";
import ToggleTextButton from "../../components/ToggleTextButton";
import ComposerInput from "../../components/ComposerInput";

const BookmarksFolder = () => {
  const [tab, setTab] = useState("left");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [bookmarkFolders, setBookmarkFolders] = useState([
    { id: 1, title: "Design Ideas", count: 12 },
    { id: 2, title: "Inspiration", count: 8 },
    { id: 3, title: "Saved Threads", count: 20 },
    { id: 4, title: "Development", count: 5 },
    { id: 5, title: "Articles", count: 14 },
  ]);
  const [creatingNew, setCreatingNew] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  const handleTabChange = (newTab) => setTab(newTab);

  const handleCreateSubmit = () => {
    const name = newFolderName.trim();
    if (name) {
      const newFolder = {
        id: Date.now(),
        title: name,
        count: 0,
      };
      setBookmarkFolders((prev) => [...prev, newFolder]);
      setNewFolderName("");
      setCreatingNew(false);
    }
  };

  return (
    <Box
      sx={{
        width: "360px",
        backgroundColor: "rgba(40, 40, 40, 0.8)",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {/* Search input */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <ComposerInput />
        <IconButton
          onClick={() => setCreatingNew(true)}
          sx={{
            backgroundColor: "#2a2a2a",
            borderRadius: "50%",
            color: "#fff",
            ml: 1,
            "&:hover": { backgroundColor: "#3a3a3a" },
          }}
        >
          <AddIcon />
        </IconButton>
      </Box>

      {/* Tabs */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
        <ToggleTextButton
          tab={tab}
          handleTabChange={handleTabChange}
          leftText="Primary"
          rightText="Request"
        />
      </Box>

      {/* Folder List */}
      <Box sx={{ flex: 1, overflowY: "auto", pr: 1 }}>
        <List dense>
          {creatingNew && (
            <ListItem
              sx={{
                bgcolor: "rgba(255,255,255,0.05)",
                borderRadius: "20px",
                mb: 1,
                px: 2,
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
                  <FolderIcon />
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
                  sx: { color: "#fff", "&::placeholder": { color: "#aaa" } },
                }}
              />
            </ListItem>
          )}

          {bookmarkFolders.map((folder, index) => (
            <ListItem
              key={folder.id}
              sx={{
                borderRadius: "20px",
                mb: 1,
                px: 2,
                backgroundColor:
                  selectedIndex === folder.id
                    ? "rgba(255,255,255,0.08)"
                    : "transparent",
              }}
              onClick={() => setSelectedIndex(folder.id)}
              button
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#444" }}>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={folder.title}
                primaryTypographyProps={{ color: "#fff" }}
              />
              <Typography variant="body2" sx={{ color: "#aaa", mr: 1 }}>
                {folder.count}
              </Typography>
              {selectedIndex === folder.id && (
                <CheckIcon sx={{ color: "#aaa" }} />
              )}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default BookmarksFolder;
