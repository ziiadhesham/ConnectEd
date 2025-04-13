import React from "react";
import { Box, TextField, IconButton, Avatar, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CreateNewConversation = () => {
  const users = [
    { name: "Treva", username: "@username", avatar: "https://i.pravatar.cc/40?img=1" },
    { name: "Jonatan", username: "@username", avatar: "https://i.pravatar.cc/40?img=2" },
    { name: "Hayley", username: "@username", avatar: "https://i.pravatar.cc/40?img=3" },
    { name: "Darrell", username: "@username", avatar: "https://i.pravatar.cc/40?img=4" },
    { name: "Mafalda", username: "@username", avatar: "https://i.pravatar.cc/40?img=5" },
  ];

  return (
    <Box
      sx={{
        width: "360px",
        backgroundColor: "rgba(40, 40, 40, 0.9)",
        borderRadius: "16px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
      }}
    >
      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
          padding: "8px",
        }}
      >
        <TextField
          placeholder="Search people"
          variant="standard"
          InputProps={{
            disableUnderline: true,
            style: { color: "#fff", flex: 1 },
          }}
          sx={{ flex: 1 }}
        />
        <IconButton sx={{ color: "#fff" }}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>

      {/* User List */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {users.map((user, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "8px",
              padding: "8px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                cursor: "pointer",
              },
            }}
          >
            <Avatar src={user.avatar} alt={user.name} sx={{ width: 40, height: 40 }} />
            <Box>
              <Typography sx={{ color: "#fff", fontWeight: "bold" }}>{user.name}</Typography>
              <Typography sx={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "12px" }}>
                {user.username}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CreateNewConversation;