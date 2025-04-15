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

import "../styles/CreateNewConversation.css";


const users = [
  { name: "Treva", username: "@username", avatar: "/avatars/treva.jpg" },
  { name: "Jonatan", username: "@username", avatar: "/avatars/jonatan.jpg" },
  { name: "Hayley", username: "@username", avatar: "/avatars/hayley.jpg" },
  { name: "Darrell", username: "@username", avatar: "/avatars/darrell.jpg" },
  { name: "Mafalda", username: "@username", avatar: "/avatars/mafalda.jpg" }
];

export default function ConversationSelector() {
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  const toggleUser = (name) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((n) => n !== name)
        : [...prev, name]
    );
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box
      sx={{
        width: "400px",
        bgcolor: "rgba(248, 248, 248, 0.03)",
        color: "#fff",
        p: 2,
        borderRadius: "32px",
        backdropFilter: "blur(10px)",
      }}
    >

      {selected.length > 0 && (
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
          {selected.map((name) => (
            <Chip key={name} label={name} size="small" sx={{ bgcolor: "#333", color: "#fff" }} />
          ))}
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
          sx: { bgcolor: "rgba(40, 40, 40, 0.7)",borderRadius: "20px",maxHeight: "44px",width: "336px", color: "#fff" },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#999" }} />
            </InputAdornment>
          )
        }}
      />
    <div className="svg-parent">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15.2465 5.74609L19.3752 9.87476C20.5468 11.0463 20.5468 12.9458 19.3752 14.1174L15.2465 18.2461M19.7465 11.9961L3.74655 11.9961" stroke="#F8F8F8" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </div>
</div>

<List
  dense
  sx={{
    mt: 2,
    maxHeight: 300,
    overflowY: "auto",
    WebkitOverflowScrolling: "touch", // smooth touch scroll for iOS
    scrollbarWidth: "none", // Firefox
    '&::-webkit-scrollbar': { display: "none" } // Chrome, Safari
  }}
>

        {filteredUsers.map((user) => (
          <ListItemButton
            key={user.name}
            sx={{ borderRadius: 1, mb: 1 , bgcolor: selected.includes(user.name) ? "rgba(248, 248, 248, 0.1)" : "rgba(248, 248, 248, 0.02)",borderRadius: "20px"}}
            onClick={() => toggleUser(user.name)}
          >
            <ListItemAvatar>
            <Box
          sx={{
            position: "absolute",
            top: 5,
            left: 5,
            transform: "translate(-30%, -30%)", // Adjust positioning
            zIndex: 2,
            borderRadius: "50%",
            padding: "2px",
            
          }}
        >
        </Box>
              <Avatar src={user.avatar} sx={{ width: "44px", height: "40px" }} />
            </ListItemAvatar>
            <ListItemText
              primary={user.name}
              secondary={user.username}
              primaryTypographyProps={{ color: "#fff" }}
              secondaryTypographyProps={{ color: "#aaa", fontSize: "0.8rem" }}
            />
            {selected.includes(user.name) && (
              <IconButton edge="end" size="24px">
                <CheckIcon sx={{ backgroundColor: "rgba(255, 255, 255, 0.05)",borderRadius: "50%",
                    color: "#fff",
                 }} />
              </IconButton>
            )}
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
