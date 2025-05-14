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
import axios from "axios";

import useBookmarkFolderStore from "../../Stores/useBookmarkFolderStore";
import bookmarks from "../../MockData/bookmarksData"; // Replace with API call later
import useUserStore from "../../Stores/UseUserStore";
import axiosInstance from "../../config/axiosInstance";

const BookmarksFolder = () => {
  const { userId } = useUserStore(); // Current logged-in user
  const { selectedFolderId, setSelectedFolderId } = useBookmarkFolderStore();

  const [tab, setTab] = useState("left");
  const [creatingNew, setCreatingNew] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch folders from API
  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const res = await axiosInstance.get(`/folders/user/${userId}`);
        const fetchedFolders = res.data;

        // Add post count to each folder (mocked from bookmarksData)
        const updatedFolders = fetchedFolders.map((folder) => {
          const count = bookmarks.filter(
            (bookmark) =>
              bookmark.folderId === folder._id && bookmark.userId === userId
          ).length;
          return { ...folder, count };
        });

        setFolders(updatedFolders);
      } catch (err) {
        console.error("Failed to fetch folders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFolders();
  }, [userId]);

  const handleCreateSubmit = async () => {
    const name = newFolderName.trim();
    if (!name) return;

    try {
      const res = await axiosInstance.post(`/folders`, { name , userId});
      const newFolder = res.data;
      setFolders((prev) => [...prev, { ...newFolder, count: 0 }]);
      setNewFolderName("");
      setCreatingNew(false);
    } catch (err) {
      console.error("Error creating folder:", err);
    }
  };

  const handleTabChange = (newTab) => setTab(newTab);

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
              <Typography variant="body2" sx={{ color: "#aaa", mr: 1 }}>
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
