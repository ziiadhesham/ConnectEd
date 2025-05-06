import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  IconButton
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from "@mui/icons-material/Check";
import useConversationStore from "../Stores/useConversationStore";

import "../styles/CreateNewConversation.css";
import useUserStore from "../Stores/UseUserStore";
import Users from "../MockData/usersAccountsData";

export default function ConversationSelector({onClose}) {
  const [selected, setSelected] = useState(null); // Change to null for single selection
  const [search, setSearch] = useState("");
  const { userId } = useUserStore();
  const { setSelectedUserId } = useConversationStore();

  const toggleUser = (id, name) => {
    setSelected({ id, name }); // Set the selected user (id and name)
  };

  const currentUser = Users.find((u) => u.id === userId);
  const followingIds = currentUser?.following || [];

  const filteredUsers = Users.filter((user) =>
    followingIds.includes(user.id) &&
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // Event handler for SVG or its parent div, which now takes userId as an argument
  const handleSvgClick = (userId) => {
    setSelectedUserId(userId);
    onClose();
    // You can use this userId for any other logic
  };

  return (
    <Box
      sx={{
        width: "400px",
        bgcolor: "rgba(248, 248, 248, 0.03)",
        color: "#fff",
        p: 2,
        borderRadius: "32px",
        backdropFilter: "blur(10px)"
      }}
    >
      {selected && (
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
          <Chip
            key={selected.id}
            label={selected.name}
            size="small"
            sx={{ bgcolor: "#333", color: "#fff" }}
          />
        </Box>
      )}

      <div style={{ display: "flex", alignItems: "center" }}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Search people"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            sx: {
              bgcolor: "rgba(40, 40, 40, 0.7)",
              borderRadius: "20px",
              maxHeight: "44px",
              width: "336px",
              color: "#fff"
            },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#999" }} />
              </InputAdornment>
            )
          }}
        />
        {/* Add the onClick handler to the parent div or the SVG */}
        <div className="svg-parent" onClick={() => handleSvgClick(selected?.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            onClick={() => handleSvgClick(selected?.id)} // Add onClick to SVG if you want
          >
            <path
              d="M15.2465 5.74609L19.3752 9.87476C20.5468 11.0463 20.5468 12.9458 19.3752 14.1174L15.2465 18.2461M19.7465 11.9961L3.74655 11.9961"
              stroke="#F8F8F8"
              strokeOpacity="0.7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <List
        dense
        sx={{
          mt: 2,
          maxHeight: 300,
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" }
        }}
      >
        {filteredUsers.map((user) => (
          <ListItemButton
            key={user.id}
            sx={{
              borderRadius: 1,
              mb: 1,
              bgcolor: selected?.id === user.id
                ? "rgba(248, 248, 248, 0.1)"
                : "rgba(248, 248, 248, 0.02)",
              borderRadius: "20px"
            }}
            onClick={() => toggleUser(user.id, user.name)} // Select only one user
          >
            <ListItemAvatar>
              <Box
                sx={{
                  position: "absolute",
                  top: 5,
                  left: 5,
                  transform: "translate(-30%, -30%)",
                  zIndex: 2,
                  borderRadius: "50%",
                  padding: "2px"
                }}
              />
              <Avatar
                src={user.profilePicture}
                sx={{ width: "44px", height: "40px" }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={user.name}
              secondary={`@${user.username}`}
              primaryTypographyProps={{ color: "#fff" }}
              secondaryTypographyProps={{ color: "#aaa", fontSize: "0.8rem" }}
            />
            {selected?.id === user.id && (
              <IconButton edge="end" size="24px">
                <CheckIcon
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "50%",
                    color: "#fff"
                  }}
                />
              </IconButton>
            )}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
