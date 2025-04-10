import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Avatar,
  Chip,
  List,
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

export default function Tag() {
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
        borderRadius: "32px"
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
          sx: { bgcolor: "rgba(40, 40, 40, 0.7)",borderRadius: "20px",maxHeight: "44px",width: "100%", color: "#fff" },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#999" }} />
            </InputAdornment>
          )
        }}
      />
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
