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

import useBookmarkFolderStore from "../../Stores/useBookmarkFolderStore";
import useUserStore from "../../Stores/UseUserStore";
import axiosInstance from "../../config/axiosInstance";

const BookmarksFolder = () => {
  const { userId } = useUserStore();
  const { selectedFolderId, setSelectedFolderId } = useBookmarkFolderStore();

  const [creatingNew, setCreatingNew] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [folderRes, bookmarkRes] = await Promise.all([
          axiosInstance.get(`/folders/user/${userId}`),
          axiosInstance.get(`/bookmarks/user/${userId}`),
        ]);

        const folders = folderRes.data;
        const bookmarks = bookmarkRes.data;

        // Important: convert ObjectIds to strings if needed to ensure proper comparison
 const updatedFolders = folders.map((folder) => {
  const folderIdStr = folder._id?.toString();

  const matchingBookmarks = bookmarks.filter((bookmark) => {
  const folderId =
    typeof bookmark.folderId === "object"
      ? bookmark.folderId._id?.toString()
      : bookmark.folderId?.toString();

  return folderId === folder._id?.toString();
  
});

  console.log("Matching bookmarks for folder:", matchingBookmarks.length);
  
  return { ...folder, count: matchingBookmarks.length };
});
  

        setFolders(updatedFolders);
      } catch (err) {
        console.error("Failed to fetch folders/bookmarks:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const handleCreateSubmit = async () => {
    const name = newFolderName.trim();
    if (!name) return;

    try {
      const res = await axiosInstance.post(`/folders`, { name, userId });
      const newFolder = res.data;
      setFolders((prev) => [...prev, { ...newFolder, count: 0 }]);
      setNewFolderName("");
      setCreatingNew(false);
    } catch (err) {
      console.error("Error creating folder:", err);
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
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#fff", fontWeight: 500, marginLeft: 2 }}
        >
          Bookmarks
        </Typography>
        <IconButton
          onClick={() => setCreatingNew(true)}
          sx={{
            backgroundColor: "#2a2a2a",
            borderRadius: "50%",
            color: "#fff",
            "&:hover": { backgroundColor: "#3a3a3a" },
            marginRight: 2,
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
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    edge="end"
                    onClick={() => {
                      setCreatingNew(false);
                      setNewFolderName("");
                    }}
                  >
                    <CloseIcon sx={{ color: "#aaa" }} />
                  </IconButton>
                  <IconButton
                    edge="end"
                    onClick={handleCreateSubmit}
                    sx={{
                      backgroundColor: "#2a2a2a",
                      borderRadius: "50%",
                      color: "#fff",
                      "&:hover": { backgroundColor: "#3a3a3a" },
                      ml: 1,
                    }}
                    title="Submit Folder"
                  >
                    <CheckIcon />
                  </IconButton>
                </Box>
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
              key={folder._id}
              sx={{
                borderRadius: "20px",
                mb: 1,
                px: 2,
                backgroundColor:
                  selectedFolderId === folder._id
                    ? "rgba(255,255,255,0.08)"
                    : "transparent",
                cursor: "pointer",
              }}
              onClick={() => setSelectedFolderId(folder._id)}
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
              <Typography
                variant="body2"
                sx={{ color: "#aaa", mr: 1, minWidth: "24px", textAlign: "right" }}
              >
                {folder.count}
              </Typography>
              {selectedFolderId === folder._id && (
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
