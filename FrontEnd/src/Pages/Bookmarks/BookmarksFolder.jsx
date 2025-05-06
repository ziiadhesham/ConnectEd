import React, { useState, useEffect } from "react";
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
import ToggleTextButton from "../../components/ToggleTextButton";
import ComposerInput from "../../components/ComposerInput";
import useBookmarkFolderStore from "../../Stores/useBookmarkFolderStore";
import bookmarkFolders from "../../MockData/bookmarkFoldersData"; // Updated import
import bookmarks from "../../MockData/bookmarksData"; // Updated import
import useUserStore from "../../Stores/UseUserStore";

const BookmarksFolder = () => {
  const { userId } = useUserStore(); // Get current logged-in user ID
  const [tab, setTab] = useState("left");
  const [creatingNew, setCreatingNew] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  const { selectedFolderId, setSelectedFolderId } = useBookmarkFolderStore();

  // Filter folders to only those that belong to the current user
  const [folders, setFolders] = useState(
    bookmarkFolders.filter((folder) => folder.userId === userId)
  );

  // Calculate the number of posts for each folder and update the folder object
  useEffect(() => {
    setFolders((prevFolders) =>
      prevFolders.map((folder) => {
        const folderPosts = bookmarks.filter(
          (bookmark) => bookmark.folderId === folder.id && bookmark.userId === userId
        );
        return { ...folder, count: folderPosts.length };
      })
    );
  }, [userId]);

  const handleTabChange = (newTab) => setTab(newTab);

  const handleCreateSubmit = () => {
    const name = newFolderName.trim();
    if (name) {
      const newFolder = {
        id: Date.now(),
        title: name,
        count: 0, // Initially set to 0, will be updated on render
        userId, // assign folder to current user
      };
      setFolders((prev) => [...prev, newFolder]);
      setNewFolderName("");
      setCreatingNew(false);
    }
  };

  return (
    <Box
      sx={{
        width: "auto",
        backgroundColor: "rgba(40, 40, 40, 0.8)",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {/* Search + Add Folder Button */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
  <Typography variant="h6" sx={{ color: "#fff", fontWeight: 500
    ,marginLeft:2
   }}>
    Bookmarks
  </Typography>
  <IconButton
    onClick={() => setCreatingNew(true)}
    sx={{
      backgroundColor: "#2a2a2a",
      borderRadius: "50%",
      color: "#fff",
      "&:hover": { backgroundColor: "#3a3a3a" },
      marginRight:2
    }}
    title="Create New Folder"
  >
    <AddIcon />
  </IconButton>
</Box>



      {/* Folder List */}
      <Box sx={{ flex: 1, overflowY: "auto", pr: 1 }}>
        <List dense>
          {/* New folder input */}
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

          {/* Render folders */}
          {folders.map((folder) => (
            <ListItem
              key={folder.id}
              sx={{
                borderRadius: "20px",
                mb: 1,
                px: 2,
                backgroundColor:
                  selectedFolderId === folder.id
                    ? "rgba(255,255,255,0.08)"
                    : "transparent",
                cursor: "pointer",
              }}
              onClick={() => setSelectedFolderId(folder.id)}
              button
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#444" }}>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={folder.name}
                primaryTypographyProps={{ color: "#fff" }}
              />
              {/* Display folder count */}
              <Typography variant="body2" sx={{ color: "#aaa", mr: 1 }}>
                {folder.count}
              </Typography>
              {selectedFolderId === folder.id && (
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
