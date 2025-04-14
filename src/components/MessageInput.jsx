import React, { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  Typography,
  InputAdornment,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export default function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [replyTo, setReplyTo] = useState("James");
  const [longText, setLongText] = useState(false);

  const isTyping = message.trim().length > 0;

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message); // Send the message up to the parent
      setMessage(""); // Clear the input field after sending
    }
    setIsRecording(false);
    setIsReplying(false);
  };

  const handleRecord = () => {
    setIsRecording(!isRecording);
  };

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        p: 2,
        borderRadius: "32px",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        width: "100%",
      }}
    >
      {isReplying && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            bgcolor: "#2a2a2a",
            px: 1.5,
            py: 1,
            borderRadius: 1,
          }}
        >
          <Typography variant="body2" sx={{ color: "#aaa" }}>
            Replying to <strong>{replyTo}</strong>
          </Typography>
          <IconButton onClick={() => setIsReplying(false)} size="small">
            <CloseIcon fontSize="small" sx={{ color: "#aaa" }} />
          </IconButton>
        </Box>
      )}

      <TextField
        fullWidth
        multiline
        maxRows={longText ? 8 : 3}
        placeholder="Start a new message..."
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          setLongText(e.target.value.length > 100);
        }}
        InputProps={{
          sx: {
            bgcolor: isTyping ? "rgba(18, 18, 18, 0.4)" : "rgba(18, 18, 18, 0.3)",
            color: "#fff",
            borderRadius: 5,
            px: 1.5,
            py: 0.5,
            transition: "background-color 0.2s ease",
            '&:hover': { bgcolor: "rgba(18, 18, 18, 0.5)" },
            '& textarea::selection': {
              bgcolor: "#444",
            },
          },
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <AttachFileIcon sx={{ color: "#999" }} />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <EmojiEmotionsIcon sx={{ color: "#999" }} />
              </IconButton>
              {isTyping ? (
                <IconButton onClick={handleSend}>
                  <SendIcon sx={{ color: "#999" }} />
                </IconButton>
              ) : (
                <IconButton onClick={handleRecord}>
                  <MicIcon sx={{ color: isRecording ? "#aaa" : "#999" }} />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
