import React from "react";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Button,
  useTheme,
} from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import PhotoIcon from "@mui/icons-material/Photo";
import GifBoxIcon from "@mui/icons-material/GifBox";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const TypingCard = ({ isTyping = false }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 1552,
        height: 296,
        borderRadius: "48px",
        bgcolor: theme.palette.mode === "dark" ? "#1e1e1e" : "#fff",
        color: theme.palette.mode === "dark" ? "#ccc" : "#000",
        p: 4,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        gap: 2,
      }}
    >
      {/* Header */}
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar
          src="https://i.imgur.com/3GvwNBf.png"
          alt="Moyo Shiro"
          sx={{ width: 64, height: 64 }}
        />
        <Box>
          <Typography fontWeight="bold" fontSize={20}>
            Moyo Shiro
          </Typography>
          <Typography fontSize={16} sx={{ opacity: 0.5 }}>
            09:00 AM
          </Typography>
        </Box>
      </Box>

      {/* Typing or Reply Message */}
      <Typography
        sx={{
          fontSize: 20,
          color: theme.palette.mode === "dark" ? "#999" : "#ccc",
          mt: 2,
          ml: '72px'
        }}
      >
        {isTyping ? "Typing..." : "Reply to kohaku..."}
      </Typography>

      {/* Icon Actions + Reply Button */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} ml={"72px"}>
        <Box display="flex" gap={3}>
          <IconButton>
            <InsertEmoticonIcon sx={{ fontSize: 28, opacity: 0.3 }} />
          </IconButton>
          <IconButton>
            <PhotoIcon sx={{ fontSize: 28, opacity: 0.3 }} />
          </IconButton>
          <IconButton>
            <GifBoxIcon sx={{ fontSize: 28, opacity: 0.3 }} />
          </IconButton>
          <IconButton>
            <AlternateEmailIcon sx={{ fontSize: 28, opacity: 0.3 }} />
          </IconButton>
        </Box>

        <Button
          variant="contained"
          sx={{
            borderRadius: "48px",
            px: 5,
            py: 1.5,
            textTransform: "none",
            fontSize: 20,
            fontWeight: "bold",
            bgcolor: "#2b2b2b",
            color: "#fff",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
            '&:hover': {
              bgcolor: "#1e1e1e",
            },
          }}
        >
          Reply
        </Button>
      </Box>
    </Box>
  );
};

export default TypingCard;
