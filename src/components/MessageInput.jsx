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
import EmojiPicker from "./EmojiPicker"; // Import EmojiPicker component

export default function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [replyTo, setReplyTo] = useState("James");
  const [longText, setLongText] = useState(false);
  const [isEmojiPickerOpen, setEmojiPickerOpen] = useState(false); // State for EmojiPicker visibility

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

  const handleEmojiSelect = (emoji) => {
    setMessage((prev) => prev + emoji); // Append the selected emoji to the message
    setEmojiPickerOpen(false); // Close the EmojiPicker after selection
  };

  return (
    <Box
      sx={{
        position: "relative", // Ensure relative positioning for the overlay
        width: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background

      }}
    >
      {/* EmojiPicker Overlay */}
      {isEmojiPickerOpen && (
        <Box
          sx={{
            position: "fixed",
            top: "73%",
            left: "37%",
            width: "100%",
            height: "100%",
            zIndex: 2000, // Ensure it appears above other elements
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setEmojiPickerOpen(false)} // Close EmojiPicker when clicking outside
        >
          <Box onClick={(e) => e.stopPropagation()}>
            <EmojiPicker onEmojiSelect={handleEmojiSelect} />
          </Box>
        </Box>
      )}

      {/* Replying Section */}
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

      {/* Input Section */}
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
            "&:hover": { bgcolor: "rgba(18, 18, 18, 0.5)" },
            "& textarea::selection": {
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
              <IconButton onClick={() => setEmojiPickerOpen(!isEmojiPickerOpen)}>
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